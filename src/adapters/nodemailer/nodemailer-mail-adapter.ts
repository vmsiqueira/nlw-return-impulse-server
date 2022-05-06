import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "72dd058c1e9533",
    pass: "452fbf99f29d37"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail ({ subject, body }: SendMailData) {
    await transport.sendMail({
    from: "Equipe Feedget <oi@feedget.com>",
    to: "Vitor Siqueira <vmsiqueira.dev@gmail.com>",
    subject: subject,
    html: body,
  });
  };
}