const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "aaef9f4c1fa470",
      pass: "aaed39dc80d92b",
    }

});

const makeANiceEmail = text => `
    <div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px;
    >"
        <h2>A new note has been added to the gratitude wall!</h2>
        <p>${text}</p>

        <p>Sam Kahle</p>
    </div>
`;

  exports.transport = transport;
  exports.makeANiceEmail = makeANiceEmail;