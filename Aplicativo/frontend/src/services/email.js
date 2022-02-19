const mailer = require("nodemailer");

module.exports.enviarEmail = () => {
    const smtpTransport = mailer.createTransport({
        host: 'smtp.gmail.com',
        service: 'smtp.gmail.com',
        port: 587,
        secureConnection: false,
        service: 'gmail',
        auth: {
            name: 'Tune Up',
            user: 'suporte.tuneup@gmail.com',
            pass: 'suportetuneup@123'
        }
    });


    var emailASerEnviado = {
        from: 'suporte.tuneup@gmail.com',
        to: 'cesar.guga2013@gmail.com',
        subject: 'Enviando Email com Node.js',
        text: 'ORDEM DE SERVIÇO',
        html: "enviando email"
    };

    return new Promise((resolve, reject) => {
        smtpTransport.sendMail(emailASerEnviado)
            .then(response => {
                smtpTransport.close();
                return resolve(response);
            })
            .catch(error => {
                smtpTransport.close();
                return reject(error);
            });
    });
}