const nodemailer = require('nodemailer');

function sendEmailWithAttachment(formData, excelBuffer) {
  const transporter = nodemailer.createTransport({
    service: 'mitchell.challifour@pukkapies.co.uk',
    auth: {
      user: 'mitchell.challifour@pukkapies.co.uk',
      pass: 'Madge',
    },
  });

  const mailOptions = {
    from: 'your-email@example.com',
    to: 'mitchell.challifour@pukkapies.co.uk',
    subject: 'Form Submission Data',
    text: 'Please find the attached Excel file containing the form data.',
    attachments: [
      {
        filename: 'form-data.xlsx',
        content: excelBuffer,
      },
    ],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
