$(document).ready(function() {
    if (typeof $.fn.turn === 'undefined') {
        $('#flipbook').html('<div style="color:red;padding:20px;">ERROR: Turn.js failed to load.</div>');
        return;
    }
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';
    const rawGithubUrl = 'https://raw.githubusercontent.com/ghostm68/pantheon/48b2c43110d39bdf5cfa8d48949fc1dcf3413500/BRIMLESS%20THE%20COLD-SOLDER%20JOINT,%20A%20NOVEL.pdf';
    const proxyUrl = 'https://lively-limitless.inkrealm.workers.dev/?url=' + encodeURIComponent(rawGithubUrl);
    let pdfDoc = null;
    let totalPages = 0;

    fetch(proxyUrl)
        .then(response => {
            if (!response.ok) throw new Error('Failed to fetch PDF (Status: ' + response.status + ')');
            return response.arrayBuffer();
        })
        .then(buffer => pdfjsLib.getDocument({ data: buffer }).promise)
        .then(pdf => {
            pdfDoc = pdf;
            totalPages = pdf.numPages;
            const $flipbook = $('#flipbook');
            $flipbook.empty();
            const isMobile = window.innerWidth < 800;
            const width = isMobile ? window.innerWidth - 40 : 960;
            const height = isMobile ? (window.innerWidth - 40) * 1.3 : 700;
            $flipbook.css({ width: width, height: height });
            $flipbook.turn({
                width: width, height: height,
                display: isMobile ? 'single' : 'double',
                autoCenter: true, pages: totalPages,
                when: {
                    turning: function(e, page, view) {
                        const range = $flipbook.turn('range', page);
                        for (let p = range[0]; p <= range[1]; p++) {
                            if (p > 0 && p <= totalPages) addPage(p);
                        }
                    },
                    turned: function(e, page, view) {
                        document.getElementById('page-indicator').textContent = 'PAGE: ' + page + '/' + totalPages;
                        prunePages(page);
                    }
                }
            });
            setTimeout(() => {
                addPage(1);
                if (!isMobile) addPage(2);
                $flipbook.turn('update');
                setTimeout(() => { $flipbook.turn('page', 1); }, 100);
            }, 50);
        }).catch(err => {
            $('#flipbook').html('<div style="color: red; padding: 20px;">PDF ERROR: ' + err.message + '</div>');
        });

    function addPage(pageNum) {
        const $flipbook = $('#flipbook');
        if ($flipbook.turn('hasPage', pageNum)) {
            const pageElement = $flipbook.find('[data-page="' + pageNum + '"]');
            if (pageElement.length && pageElement.find('canvas').length === 0) {
                pageElement.html('Loading...');
                renderPDFToElement(pageNum, pageElement);
            }
            return;
        }
        const element = $('<div class="page" data-page="' + pageNum + '" style="background:#fff;width:100%;height:100%;display:flex;align-items:center;justify-content:center;">Loading...</div>');
        try {
            $flipbook.turn('addPage', element, pageNum);
            renderPDFToElement(pageNum, element);
        } catch (err) { console.error('Error adding page ' + pageNum + ':', err); }
    }

    function renderPDFToElement(pageNum, element) {
        pdfDoc.getPage(pageNum).then(page => {
            const viewport = page.getViewport({ scale: 1.5 });
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            page.render({ canvasContext: context, viewport: viewport }).promise.then(() => {
                element.empty().append(canvas);
            });
        });
    }

    function prunePages(currentPage) {
        const $flipbook = $('#flipbook');
        const keepRange = 6;
        for (let p = 1; p <= totalPages; p++) {
            if (Math.abs(p - currentPage) > keepRange) {
                if ($flipbook.turn('hasPage', p)) {
                    const pageElement = $flipbook.find('[data-page="' + p + '"]');
                    if (pageElement.length && pageElement.find('canvas').length > 0) {
                        pageElement.empty().html('Loading...');
                    }
                }
            }
        }
    }
});

function nextPage() { try { $('#flipbook').turn('next'); } catch(e) {} }
function prevPage() { try { $('#flipbook').turn('previous'); } catch(e) {} }
