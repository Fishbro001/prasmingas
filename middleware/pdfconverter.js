const fs = require('fs');
const PDFDocument = require('pdfkit');

// Load the template data from a JSON file
const templateData = JSON.parse(fs.readFileSync('../resources/PREELPDF.json', 'utf8'));

function generateTicketPDF(outputPath, clientData ) {
    const doc = new PDFDocument({ size: [templateData.size.width, templateData.size.height] });
    doc.pipe(fs.createWriteStream(outputPath));

    // Iterate over each word in the template data and add it to the PDF
    templateData.words.forEach(word => {
        let text = word.text;

        // Replace placeholders with client-specific data
        if (text.includes('{{clientName}}')) {
            text = text.replace('{{clientName}}', clientData.clientName);
        }
        if (text.includes('{{ticketNumber}}')) {
            text = text.replace('{{ticketNumber}}', clientData.ticketNumber);
        }
        if (text.includes('{{date}}')) {
            text = text.replace('{{date}}', clientData.date);
        }

        // Calculate the position and size of the text
        const x = word.xmin;
        const y = templateData.size.height - word.ymax; // Flip the y-coordinate

        // Add the text to the PDF
        doc.fontSize(12) // Adjust font size as needed
            .text(text, x, y);
    });

    // Finalize the PDF
    doc.end();
}
