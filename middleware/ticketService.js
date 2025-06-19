// ticketService.js

const sendEmail = require('./emailService'); // Import the generic email sender

/**
 * Constructs and sends a trip ticket email to a customer.
 *
 * @param {string} customerEmail - The recipient's email address.
 * @param {string} firstName - The recipient's first name.
 * @param {string} tripName - The name of the trip.
 * @param {string} tripDate - The date of the trip (e.g., "2024-12-25").
 * @param {string} ticketFilePath - The absolute path to the generated PDF ticket file.
 * @returns {Promise<void>}
 */
const sendTripTicketEmail = async (customerEmail, firstName, tripName, tripDate, ticketFilePath) => {
    // Format the date for display, if desired
    const formattedDate = new Date(tripDate).toLocaleDateString('lt-LT', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // 1. Define the Email Subject
    // A clear, helpful subject line.
    const subject = `Jūsų kelionės bilietai: ${tripName}`;

    // 2. Create the HTML Body
    // Using template literals makes it easy to insert dynamic variables.
    const htmlBody = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>Sveiki, ${firstName}!</h2>
            <p>Dėkojame, kad pasirinkote keliauti su mumis! Patvirtiname jūsų rezervaciją ir siunčiame kelionės bilietus.</p>
            
            <h3 style="color: #0056b3;">Jūsų kelionės informacija:</h3>
            <ul>
                <li><strong>Kelionė:</strong> ${tripName}</li>
                <li><strong>Data:</strong> ${formattedDate}</li>
            </ul>
            
            <p>Prie šio laiško prisegėme jūsų kelionės bilietą (-us) PDF formatu. Prašome jį atsispausdinti arba turėti elektroninę kopiją kelionės metu.</p>
            
            <p>Jei turite kokių nors klausimų, nedvejodami susisiekite su mumis.</p>
            
            <p>Geros kelionės!</p>
            
            <p><strong>Pagarbiai,<br>VšĮ "Prasmingam gyvenimui" komanda</strong></p>
        </div>
    `;

    // 3. Configure Attachments
    // This array tells Nodemailer to attach the generated PDF.
    const attachments = [
        {
            filename: 'keliones-bilietas.pdf', // The name the user will see.
            path: ticketFilePath,              // The actual path to the file on your server.
            contentType: 'application/pdf'     // The MIME type of the file.
        }
    ];

    // 4. Assemble the Mail Options
    // This object brings everything together.
    const mailOptions = {
        from: '"Prasmingam Gyvenimui" <edgar.pusko@gmail.com>', // Your sender info
        to: `${firstName} <${customerEmail}>`,                  // The customer's email
        subject: subject,
        html: htmlBody,
        attachments: attachments
    };

    // 5. Send the Email
    // We call the generic 'sendEmail' function with our configured options.
    try {
        await sendEmail(mailOptions);
        console.log(`Ticket email successfully sent to ${customerEmail}`);
    } catch (error) {
        console.error(`Failed to send ticket to ${customerEmail}:`, error);
    }
};

module.exports = { sendTripTicketEmail };