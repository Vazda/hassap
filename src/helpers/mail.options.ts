export interface IMailOption {
  from: string;
  subject: string;
  text: string;
  html?: string;
}

const MAIL_OPTIONS = {
  NEW_TICKET_NAME: (firstName: string) => ({
    from: 'The CGN Team',
    subject: `CGN Ticket`,
    text: `CGN Ticket`,
    html: `Dear ${firstName}.
      CGN Ticket TEMPLATE
      Thank You
      The CGN Team`,
  }),
  NEW_TICKET_EMAIL: (email: string) => ({
    from: 'The CGN Team',
    subject: `CGN Ticket`,
    text: `CGN Ticket`,
    html: `Dear ${email}.
      CGN Ticket TEMPLATE
      Thank You
      The CGN Team`,
  }),
  NEW_CONTACT_NAME: (firstName: string) => ({
    from: 'The CGN Team',
    subject: `CGN Contact`,
    text: `CGN Contact`,
    html: `Dear ${firstName}.
      CGN Team received your form.
      Thank You
      The CGN Team`,
  }),
  NEW_CONTACT_EMAIL: (email: string) => ({
    from: 'The CGN Team',
    subject: `CGN Contact`,
    text: `CGN Contact`,
    html: `Dear ${email}.
      CGN Team received your form.
      Thank You
      The CGN Team`,
  }),
};

export default MAIL_OPTIONS;
