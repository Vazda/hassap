export interface IMailOption {
    from: string,
    subject: string,
    text: string,
    html?: string,
  }

  let MAIL_OPTIONS = {
    NEW_SUBSCRIPTION_NAME: (firstName: string) => ({
      from: "Personal Adviser Team",
      subject: `Personal Adviser subscription`,
      text: `Personal Adviser new subscription`,
      html: `Dear ${firstName}. 
      Thank you for your interest in Personal Adviser. 
      You will be the first ones to be notified via the provided email address when we open up the site. 
      We're hard at work bringing the next generation of personal managed investing advice to everyone.
      
      Thank You 
      The Personal Adviser Team`
    }),
    NEW_SUBSCRIPTION_EMAIL: (email: string) => ({
        from: "Personal Adviser Team",
        subject: `Personal Adviser subscription`,
        text: `Personal Adviser new subscription`,
        html: `Dear ${email}. 
        Thank you for your interest in Personal Adviser. 
        You will be the first ones to be notified via the provided email address when we open up the site. 
        We're hard at work bringing the next generation of personal managed investing advice to everyone.
        
        Thank You 
        The Personal Adviser Team`
      })

};


export default MAIL_OPTIONS;
