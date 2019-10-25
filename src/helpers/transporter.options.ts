import nodemailer from 'nodemailer';
import TEMPLATES, { IMailOption } from './mail.options';

const config = {
  host: 'smtp.mailgun.org',
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: 'postmaster@sandbox0bb61ff86fcb445da748fb3a17e68b30.mailgun.org',
    pass: '566e3f8b833463435362a537773031eb-b9c15f4c-014e82fd',
  },
};

const provider = nodemailer.createTransport({
  ...config,
});

const mailer = {
  sendMail: async (data: { to: string; MAIL_OPTION: IMailOption }) => {
    const { MAIL_OPTION, to } = data;
    return await provider.sendMail({
      ...MAIL_OPTION,
      to,
    });
  },
};

export const MAIL_OPTIONS = TEMPLATES;

export default mailer;
