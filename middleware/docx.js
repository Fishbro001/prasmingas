// middleware/docx.js

const { TemplateHandler } = require('easy-template-x');
const fs = require('fs').promises; // Use the promise-based version of fs
const path = require('path');
const libre = require('libreoffice-convert');
const util = require('util');

// Promisify the conversion function
libre.convertAsync = util.promisify(libre.convert);

async function generateDocument(data, orderId) {
    const pdfFilename = `keliones-sutartis-${orderId}.pdf`;
    const pdfOutputPath = path.join(__dirname, '../resources/tickets', pdfFilename);

    try {
        // STEP 1: Generate the .docx file content in memory
        const template = await fs.readFile(path.join(__dirname, '../resources/kel_sutartis_temp_officeLibre.docx'));
        console.log('Template loaded successfully.');
        const handler = new TemplateHandler();
        const docxContent = await handler.process(template, data); // This is a Buffer
        console.log('Temporary DOCX content generated in memory.');

        // STEP 2: Convert the DOCX buffer to a PDF buffer
        // The '.docx' second argument is the file type to convert from
        console.log('Starting PDF conversion...');
        const pdfContent = await libre.convertAsync(docxContent, '.pdf', undefined);
        console.log('PDF content successfully generated in memory.');
        
        // STEP 3: Save the final PDF file to disk
        await fs.writeFile(pdfOutputPath, pdfContent);
        console.log(`PDF ticket saved successfully at: ${pdfOutputPath}`);

        // STEP 4: Return the path to the FINAL PDF FILE
        return pdfOutputPath;

    } catch (err) {
        console.error('Error during document generation/conversion:', err);
        throw new Error('Failed to generate PDF ticket.');
    }
}

module.exports = generateDocument;