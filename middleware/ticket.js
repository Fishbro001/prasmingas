const PDFDocument = require('pdfkit');
const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

// Function to generate a ticket
async function generateTicket(tripDetails, userDetails, outputPath) {
    // Create a document
    const doc = new PDFDocument();

    // Pipe the PDF to a file
    doc.pipe(fs.createWriteStream(outputPath));

    // Generate QR code
    const qrCodeDataURL = await QRCode.toDataURL(attendeeDetails.ticketId);

    // Add content to the PDF
    doc.fontSize(20).text(eventDetails.name, { align: 'center' });
    doc.fontSize(14).text(`Date: ${eventDetails.date}`, { align: 'center' });
    doc.fontSize(14).text(`Venue: ${eventDetails.venue}`, { align: 'center' });
    doc.moveDown();
    doc.fontSize(16).text(`Attendee: ${attendeeDetails.name}`, { align: 'center' });
    doc.moveDown();
    doc.image(qrCodeDataURL, { fit: [150, 150], align: 'center', valign: 'center' });
    doc.moveDown();
    doc.fontSize(12).text(`Ticket ID: ${attendeeDetails.ticketId}`, { align: 'center' });

    // Finalize the PDF
    doc.end();
};

// // Example usage
// const eventDetails = {
//     name: 'Tech Conference 2023',
//     date: '2023-10-15',
//     venue: 'Conference Hall A'
// };

// const attendeeDetails = {
//     name: 'John Doe',
//     ticketId: 'TICKET12345'
// };

// generateTicket(eventDetails, attendeeDetails, 'ticket.pdf')
//     .then(() => console.log('Ticket generated successfully!'))
//     .catch(err => console.error('Error generating ticket:', err));

module.exports = generateTicket;
