const nodemailer = require("nodemailer");


let message = {
  // Comma separated list of recipients
  to: 'Nodemailer <ausrine313@gmail.com>',

  // Subject of the message
  subject: 'Labas ' + Date.now(),

  // plaintext body
  text: 'Hello to Aušrine!',

  // HTML body
  html: `<p><b>Hello</b> to Aušrine <img src="cid:note@example.com"/></p>
  <p>For you Aušrine :<br/><img src="https://media.tenor.com/t72D550id6MAAAAi/hearts-hugs.gif"/></p>
  <p>tik neatidaryk attachementų</p>`,
  

  // AMP4EMAIL
  amp: `<!doctype html>
  <html ⚡4email>
    <head>
      <meta charset="utf-8">
    </head>
    <body>
      <p><b>Hello</b> to Aušrine <amp-img src="https://cldup.com/P0b1bUmEet.png" width="16" height="16"/></p>
      <p>tik neatidaryk attachementų</p>
      <p>Blablabala:<br/>
        <amp-anim src="https://media.tenor.com/t72D550id6MAAAAi/hearts-hugs.gif" width="500" height="350"/></p>
    </body>
  </html>`,

  // An array of attachments
  attachments: [
      // String attachment
      {
          filename: 'neziurek_cia.txt',
          content: 'Ką tu padarei',
          contentType: 'text/plain' // optional, would be detected from the filename
      },

      // Binary Buffer attachment
      {
          filename: 'image.png',
          content: Buffer.from(
              'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/' +
                  '//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U' +
                  'g9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC',
              'base64'
          ),

          cid: 'note@example.com' // should be as unique as possible
      },

      // File Stream attachment
  ],

  list: {
      // List-Help: <mailto:admin@example.com?subject=help>
      help: 'admin@example.com?subject=help',

      // List-Unsubscribe: <http://example.com> (Comment)
      unsubscribe: [
          {
              url: 'http://example.com/unsubscribe',
              comment: 'A short note about this url'
          },
          'unsubscribe@example.com'
      ],

      // List-ID: "comment" <example.com>
      id: {
          url: 'mylist.example.com',
          comment: 'This is my awesome list'
      }
  }
};

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'edgar.pusko@gmail.com', // your Gmail address
    pass: 'dcik yxdo gggr mojn' // your Gmail password or app-specific password
  }
});

module.exports = {transporter, message};