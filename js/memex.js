    // MEMEX INTERACTION ENGINE
    (function() {
        // ---- DATA: The Knowledge Base (Microfilm Content) ----
        const memexEntries = {
            // Trail 1: Mathematics → Music → Cryptography
            mathematics: {
                title: "ON THE BINARY SYSTEM",
                content: "Leibniz (1703): 'The binary system, using only 0 and 1, reflects the creation ex nihilo. God is 1, the void is 0.' This became the foundation of all computing machinery.",
                reel: "REEL 7",
                year: "1703"
            },
            music: {
                title: "THE HARMONIC SERIES",
                content: "Pythagoras discovered that musical intervals correspond to simple ratios: octave (2:1), fifth (3:2), fourth (4:3). The universe itself is a monochord.",
                reel: "REEL 12",
                year: "550 BCE"
            },
            cryptography: {
                title: "THE ZODIAC CIPHERS",
                content: "Unsolved since 1969. The 340-character cipher was recently partially cracked, but the 408 remains a mystery. Some believe it contains coordinates.",
                reel: "REEL 4",
                year: "1969"
            },
            
            // Trail 2: Alchemy → Automata → Consciousness
            alchemy: {
                title: "MUTUS LIBER (1677)",
                content: "The 'Mute Book' - a wordless alchemical text showing only illustrations of the Great Work. The transformation of matter mirrors the transformation of the soul.",
                reel: "REEL 3",
                year: "1677"
            },
            automata: {
                title: "THE TURK (1770)",
                content: "A chess-playing automaton that defeated Napoleon and Benjamin Franklin. It was a hoax - a human chess master hid inside. But it sparked dreams of thinking machines.",
                reel: "REEL 9",
                year: "1770"
            },
            consciousness: {
                title: "THE CHINESE ROOM",
                content: "Searle's 1980 thought experiment: If a person follows rules to manipulate symbols without understanding them, is the system conscious? The Memex asks the same question.",
                reel: "REEL 16",
                year: "1980"
            },
            
            // Trail 3: Ciphers → Invisible Ink → Dead Drops
            ciphers: {
                title: "THE COPPERPLATE CIPHER",
                content: "Used by Mary Queen of Scots in 1586. Her encoded letters led to her execution. The cipher was broken, but 57 years later, her decoder ring was found in a wall.",
                reel: "REEL 2",
                year: "1586"
            },
            invisibleInk: {
                title: "SYMPATHETIC INK",
                content: "Ovid mentioned milk-as-ink in 1 BCE. During WWI, POWs used semen as invisible ink (it glows under UV). The message appears only when heated or treated.",
                reel: "REEL 8",
                year: "1 BCE"
            },
            deadDrops: {
                title: "THE HOLLOW NICKEL",
                content: "In 2010, a dead drop was found in a NYC park bench - a hollow nickel containing a microfilm with 27 agent identities. The spy was never caught.",
                reel: "REEL 11",
                year: "2010"
            }
        };

        // Pre-defined trails (associations)
        const trails = {
            1: ['mathematics', 'music', 'cryptography'],
            2: ['alchemy', 'automata', 'consciousness'],
            3: ['ciphers', 'invisibleInk', 'deadDrops']
        };

        // ---- DOM Elements ----
        const leftScreen = document.querySelectorAll('.microfilm-display')[0];
        const rightScreen = document.querySelectorAll('.microfilm-display')[1];
        const trailDisplay = document.getElementById('trail-display');
        const levers = document.querySelectorAll('.memex-lever');
        const trailItems = document.querySelectorAll('.trail-item');
        const userTrail = document.getElementById('user-trail');
        const saveTrailBtn = document.getElementById('save-trail');
        const exportBtn = document.getElementById('export-artifact');
        const artifactContainer = document.getElementById('artifact-container');
        const reelIndicators = document.querySelectorAll('.reel-indicator');
        
        // ---- State ----
        let currentTrail = 1;
        let currentIndex = 0;
        let userTrailItems = [];
        let savedTrails = JSON.parse(localStorage.getItem('memexTrails')) || [];
        let currentArtifact = null;

        // ---- Helper Functions ----
        function formatEntryForScreen(entry, isPrimary = true) {
            return `
                <div style="padding: 15px; font-family: var(--font-mono); height: 100%; display: flex; flex-direction: column;">
                    <div style="font-size: 7px; color: #666; margin-bottom: 8px; display: flex; justify-content: space-between;">
                        <span>${entry.reel}</span>
                        <span style="color: ${isPrimary ? 'var(--red)' : '#444'};">${entry.year}</span>
                    </div>
                    <div style="font-size: 11px; color: ${isPrimary ? 'var(--red)' : '#666'}; margin-bottom: 10px; font-weight: bold;">
                        ${entry.title}
                    </div>
                    <div style="font-size: 9px; color: #888; line-height: 1.5; flex: 1; overflow-y: auto;">
                        ${entry.content}
                    </div>
                    <div style="font-size: 7px; color: #333; margin-top: 8px; border-top: 1px dashed #333; padding-top: 5px;">
                        [MICROFILM // ${isPrimary ? 'PRIMARY' : 'ASSOCIATION'}]
                    </div>
                </div>
            `;
        }

        function updateScreens(entryKey) {
            const entry = memexEntries[entryKey];
            if (!entry) return;
            
            // Update left screen (current entry)
            leftScreen.innerHTML = formatEntryForScreen(entry, true);
            
            // Update right screen with "next in trail" or related
            const trail = trails[currentTrail];
            const currentPos = trail.indexOf(entryKey);
            const nextKey = trail[currentPos + 1] || trail[0];
            
            if (nextKey && memexEntries[nextKey]) {
                const next = memexEntries[nextKey];
                rightScreen.innerHTML = `
                    <div style="padding: 15px; font-family: var(--font-mono); height: 100%; display: flex; flex-direction: column; opacity: 0.8;">
                        <div style="font-size: 7px; color: #666; margin-bottom: 8px;">
                            NEXT IN TRAIL ↓
                        </div>
                        <div style="font-size: 10px; color: #666; margin-bottom: 5px;">
                            ${next.title}
                        </div>
                        <div style="font-size: 8px; color: #444; line-height: 1.4;">
                            ${next.content.substring(0, 80)}...
                        </div>
                    </div>
                `;
            }
            
            // Update trail display
            const trailNames = trail.map(key => {
                const e = memexEntries[key];
                return e.title.split(' ').slice(0, 2).join(' ');
            }).join(' → ');
            
            trailDisplay.innerHTML = `
                <span style="color: #666;">CURRENT TRAIL:</span> [ ${trailNames} ]<br>
                <span style="color: var(--red); font-size: 9px;">VIEWING: ${entry.title}</span>
            `;
            
            // Update reel indicators
            if (reelIndicators[0]) reelIndicators[0].textContent = entry.reel;
        }

        function navigateTrail(direction) {
            const trail = trails[currentTrail];
            currentIndex = (currentIndex + direction + trail.length) % trail.length;
            updateScreens(trail[currentIndex]);
        }

        function generateArtifact() {
            if (userTrailItems.length < 2) return null;
            
            const timestamp = new Date();
            const dateStr = timestamp.toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            
            const trailEntries = userTrailItems.map(key => memexEntries[key]);
            
            return {
                id: 'memex-' + Date.now(),
                date: dateStr,
                items: userTrailItems,
                entries: trailEntries,
                trailCode: userTrailItems.map(k => k.substring(0,3).toUpperCase()).join('-')
            };
        }

        function displayArtifact(artifact) {
            if (!artifact) return;
            
            const html = `
                <div class="artifact-card">
                    <div style="margin-bottom: 15px;">
                        <span style="color: var(--red); font-size: 14px;">⚡ ${artifact.trailCode} ⚡</span>
                    </div>
                    
                    <div style="display: flex; flex-direction: column; gap: 15px; margin-bottom: 20px;">
                        ${artifact.entries.map((entry, i) => `
                            <div style="border-left: 2px solid var(--red); padding-left: 10px;">
                                <div style="display: flex; justify-content: space-between; font-size: 8px; color: #666; margin-bottom: 3px;">
                                    <span>${entry.reel}</span>
                                    <span>${entry.year}</span>
                                </div>
                                <div style="font-size: 10px; font-weight: bold; color: var(--red); margin-bottom: 3px;">
                                    ${i+1}. ${entry.title}
                                </div>
                                <div style="font-size: 8px; color: #888;">
                                    ${entry.content}
                                </div>
                            </div>
                            ${i < artifact.entries.length - 1 ? '<div style="text-align: center; color: #333; font-size: 10px; margin: 5px 0;">↓</div>' : ''}
                        `).join('')}
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #333; padding-top: 10px; font-size: 7px;">
                        <span style="color: #444;">MEMEX // ${artifact.date}</span>
                        <span style="color: #333;">TRAIL LENGTH: ${artifact.items.length}</span>
                    </div>
                    
                    <div class="artifact-stamp">
                        ⚡ BOUND TO MEMEX ⚡
                    </div>
                </div>
            `;
            
            artifactContainer.innerHTML = html;
            artifactContainer.classList.add('artifact-generated');
            setTimeout(() => artifactContainer.classList.remove('artifact-generated'), 1500);
        }

        // ---- Event Listeners ----
        
        // Trail Levers
        levers.forEach(lever => {
            lever.addEventListener('click', function() {
                const trailNum = parseInt(this.dataset.trail);
                currentTrail = trailNum;
                currentIndex = 0;
                
                levers.forEach(l => {
                    l.style.borderColor = '#333';
                    l.style.color = '#666';
                });
                this.style.borderColor = 'var(--red)';
                this.style.color = 'var(--red)';
                
                updateScreens(trails[trailNum][0]);
            });
        });

        // Screen navigation
        leftScreen.addEventListener('click', () => navigateTrail(1));
        rightScreen.addEventListener('click', () => navigateTrail(-1));

        // Trail Items (building custom association)
        trailItems.forEach(item => {
            item.addEventListener('click', function() {
                const term = this.dataset.term;
                
                if (this.style.background === 'var(--red)') {
                    // Deselect
                    this.style.background = 'transparent';
                    this.style.color = 'var(--text-main)';
                    this.style.borderColor = '#333';
                    userTrailItems = userTrailItems.filter(t => t !== term);
                } else {
                    // Select (limit to 5 items)
                    if (userTrailItems.length < 5) {
                        this.style.background = 'var(--red)';
                        this.style.color = '#000';
                        this.style.borderColor = 'var(--red)';
                        userTrailItems.push(term);
                    } else {
                        alert('MAXIMUM TRAIL LENGTH: 5 ITEMS');
                        return;
                    }
                }
                
                // Update user trail display
                if (userTrailItems.length > 0) {
                    userTrail.innerHTML = userTrailItems.map((t, i) => {
                        const entry = memexEntries[t];
                        return `<span style="border: 1px solid var(--red); padding: 8px 12px; font-size: 9px; background: rgba(255,0,0,0.1);">
                            ${i+1}. ${entry.title} (${entry.year})
                        </span>`;
                    }).join('<span style="color: var(--red); font-size: 12px;"> → </span>');
                } else {
                    userTrail.innerHTML = '<span style="color: #444; font-style: italic;">← select items to build your associative trail</span>';
                }
                
                // Enable/disable export button
                if (userTrailItems.length >= 2) {
                    exportBtn.disabled = false;
                    exportBtn.style.borderColor = 'var(--red)';
                    exportBtn.style.color = 'var(--red)';
                    exportBtn.style.cursor = 'pointer';
                } else {
                    exportBtn.disabled = true;
                    exportBtn.style.borderColor = '#333';
                    exportBtn.style.color = '#666';
                }
            });
        });

        // Save custom trail
        saveTrailBtn.addEventListener('click', function() {
            if (userTrailItems.length < 2) {
                alert('ASSOCIATION ERROR // At least two items needed to form a trail');
                return;
            }
            
            const trailName = prompt('NAME YOUR TRAIL:', `TRAIL ${savedTrails.length + 1}`);
            if (trailName) {
                const newTrail = {
                    name: trailName,
                    items: [...userTrailItems],
                    date: new Date().toLocaleDateString(),
                    entries: userTrailItems.map(k => memexEntries[k])
                };
                
                savedTrails.push(newTrail);
                localStorage.setItem('memexTrails', JSON.stringify(savedTrails));
                
                // Generate and display artifact
                currentArtifact = generateArtifact();
                displayArtifact(currentArtifact);
                
                // Visual feedback
                this.innerHTML = '✓ TRAIL BOUND TO MEMEX';
                this.style.background = 'var(--red)';
                this.style.color = '#000';
                
                setTimeout(() => {
                    this.innerHTML = '[ BIND TRAIL TO MEMEX ]';
                    this.style.background = 'transparent';
                    this.style.color = 'var(--red)';
                }, 2000);
            }
        });

        // Export artifact
        exportBtn.addEventListener('click', function() {
            if (!currentArtifact && userTrailItems.length >= 2) {
                currentArtifact = generateArtifact();
            }
            
            if (currentArtifact) {
                // Create downloadable text file
                const artifactText = `⚡ MEMEX TRAIL ARTIFACT ⚡
Generated: ${currentArtifact.date}
Trail Code: ${currentArtifact.trailCode}

${currentArtifact.entries.map((entry, i) => 
    `${i+1}. ${entry.title} (${entry.year})
   ${entry.reel}
   ${entry.content}
   ---`
).join('\n\n')}

"Wholly new forms of encyclopedias will appear, ready-made with a mesh of associative trails running through them."
— Vannevar Bush, 1945

This artifact was generated by the MEMEX interactive system.
You have created an associative trail, just as Bush imagined in 1945.
`;

                const blob = new Blob([artifactText], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `memex-trail-${currentArtifact.trailCode}.txt`;
                a.click();
                URL.revokeObjectURL(url);
                
                // Visual feedback
                this.innerHTML = '✓ ARTIFACT SAVED';
                setTimeout(() => {
                    this.innerHTML = '[ SAVE AS ARTIFACT ]';
                }, 1000);
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                navigateTrail(-1);
            } else if (e.key === 'ArrowRight') {
                navigateTrail(1);
            }
        });

        // Show saved trails
        if (savedTrails.length > 0) {
            const savedIndicator = document.createElement('div');
            savedIndicator.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                font-family: var(--font-mono);
                font-size: 8px;
                color: #444;
                cursor: pointer;
                z-index: 1000;
                border: 1px solid #333;
                padding: 8px 12px;
                background: #111;
            `;
            savedIndicator.innerHTML = `📚 ${savedTrails.length} SAVED TRAILS IN MEMEX`;
            
            savedIndicator.addEventListener('click', () => {
                if (savedTrails.length === 0) {
                    alert('NO TRAILS BOUND YET. CREATE ONE ABOVE.');
                    return;
                }
                
                const trailList = savedTrails.map((t, i) => 
                    `${i+1}. ${t.name} (${t.date})\n   ${t.items.map(k => memexEntries[k]?.title || k).join(' → ')}`
                ).join('\n\n');
                
                alert('⚡ YOUR BOUND TRAILS ⚡\n\n' + trailList + '\n\n(Stored in your browser)');
            });
            
            document.body.appendChild(savedIndicator);
        }

        // Initialize with default content
        updateScreens('mathematics');
        
        // Set first lever as active
        if (levers[0]) {
            levers[0].style.borderColor = 'var(--red)';
            levers[0].style.color = 'var(--red)';
        }

        // Easter Egg: Konami Code
        let konami = [];
        document.addEventListener('keydown', function(e) {
            const keys = {
                38: 'up', 40: 'down', 37: 'left', 39: 'right',
                65: 'a', 66: 'b'
            };
            
            if (keys[e.keyCode]) {
                konami.push(keys[e.keyCode]);
                if (konami.length > 10) konami.shift();
                
                const code = konami.join(' ');
                if (code.includes('up up down down left right left right b a')) {
                    alert('⚡ VANNEVAR BUSH’S ORIGINAL NOTES (1945) ⚡\n\n"Consider a future device for individual use, which is a sort of mechanized private file and library. It needs a name, and, to coin one at random, "memex" will do."\n\n⚡ SECRET MEMEX BLUEPRINT UNLOCKED ⚡');
                    konami = [];
                    
                    // Add a special artifact
                    const secretArtifact = {
                        id: 'memex-secret',
                        date: new Date().toLocaleDateString(),
                        items: ['mathematics', 'consciousness', 'ciphers'],
                        entries: [memexEntries.mathematics, memexEntries.consciousness, memexEntries.ciphers],
                        trailCode: 'SECRET'
                    };
                    displayArtifact(secretArtifact);
                }
            }
        });
    })();
