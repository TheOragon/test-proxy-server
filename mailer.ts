import * as NodeMailer from 'nodemailer';


const SMTP_HOST = 'privateemail.com';
const SMTP_EMAIL = "info@keepsafefamilybank.com";
const SMTP_PASSWORD = "Password@1";


export default class Mail {




  constructor(protected to: Array<string>, protected subject: string, protected content?: string) {
    this.to = to;
    this.subject = subject;
    this.content = content;
  }


  async send() {
    const transport = NodeMailer.createTransport({
      host: SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASSWORD
      }
    });
    await transport.sendMail({ from: `Oragon Test Bot <${SMTP_EMAIL}>`, subject: this.subject, to: this.to, html: this.content, });



    return { code: 200, message: 'sent' }
  }


  async notification() {
    this.content = `
     ${this.subject}
    
    ${this.content} 
    
    ${new Date().toUTCString()}
    `;
    return this.send();
  }




}
