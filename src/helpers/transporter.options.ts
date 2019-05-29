import nodemailer from 'nodemailer';
import TEMPLATES, { IMailOption } from './mail.options';


const config = {
    service: "Gmail",
    auth: {
      user: "vazda18@gmail.com",
      pass: "nermin8800gtxvazdakimi"
    }
  }

  const provider = nodemailer.createTransport({
    ...config,
  });

  const mailer = {
      sendMail: async (data: { to: string, MAIL_OPTION: IMailOption }) => {
          const { MAIL_OPTION, to} = data
          return await provider.sendMail({
              ...MAIL_OPTION,
              to
          })
      }
  }

  export const MAIL_OPTIONS = TEMPLATES

  export default mailer;
