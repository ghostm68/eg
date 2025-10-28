// Replace your existing doPost function with this one
function doPost(e) {
  // Log the raw data received by the script. This is the most important step.
  console.log("Received data from form:");
  console.log(JSON.stringify(e, null, 2)); 

  try {
    // --- The rest of your original code would go here ---
    // For example:
    MailApp.sendEmail({
      to: "YOUR_EMAIL@EXAMPLE.COM", // Make sure to put your actual email here
      subject: "New Contact Form Submission",
      htmlBody: formatMailBody(e.parameter) // We assume the error is here
    });

    // Return a success response
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Log any errors that occur
    console.error("Error executing script:", error);
    
    // Return an error response
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "error", "error": error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Make sure your formatMailBody function is also in the script
// Example of what it might look like:
function formatMailBody(data) {
  // The error is likely happening on the next line if 'data' is undefined
  var html = "New form submission:<br><br>";
  Object.keys(data).forEach(function(key) {
    html += "<b>" + key + ":</b> " + data[key] + "<br>";
  });
  return html;
}
