export interface IMailOption {
  from: string;
  subject: string;
  text: string;
  html?: string;
}

const MAIL_OPTIONS = {
  VIP_TICKETS: (firstName: string, lastName: string) => ({
    // from: 'The CGN Team <no-reply@sandboxc77c3a9be90a494081dad1628d554337.mailgun.org>',
    from: 'The CGN Team <vazda18@gmail.com>',
    subject: `VIP-Karten Bestelleingang`,
    text: `CGN Ticket`,
    html: `<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
<style>
body {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

.background {
  object-fit: contain;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.09);
}
.background-image {
	width: 600px;
    height: 250px;
}

.content {
	margin-top: 100px;
    height: 40vh;
    width: 500px;
    border-bottom-style: solid;
    border-bottom-color: #eeeeee;
    border-top-width: 0.5px;
    margin: auto;
    padding-top: 100px;
}

.social-media {
    left: 50%;
    margin-left: -73px;
    margin-top: 4vh;
    margin-bottom: 4vh;
}

.footer {
	width:100%;
    height:80px;
    background-color:#eeeeee;
}

.cpyright {
	color:black;
    font-size:15px;
    text-decoration:none;
    line-height:1.07;
}
</style>
</head>
<body>
<div class="background" style="width:100%;height:167px;">
<img class="background-image" src="https://i.imgur.com/ANfaQP6.png" alt="background">
</div>
<div class="content">
<p style="font-size:17px;font-weight:900;font-style:italic;line-height:1.24;text-align:left;">Vielen Dank für Ihr Interesse an unserem WTA International Rheinland. Wir haben Ihre Bestellung erhalten und werden diese schnellstmöglich bearbeiten. </p>
<p style="font-size:15px;line-height:1.33;text-align:left;">Als Top5-Outdoor-Turnier der WTA-Tour in Europa versprechen die COLOGNE OPEN internationales Spitzentennis mit atemberaubenden Ballwechseln und spannenden Matches. Doch nicht nur auf dem Court stehen die COLOGNE OPEN für Extraklasse, sondern auch daneben: Lassen Sie sich von unserem exklusiven Gourmet-Catering verwöhnen, erleben Sie „Kölsches Tennistainment“ im Büdchendorf und genießen Sie dabei Tennis der Weltklasse! </p>
</div>
<div class="social-media">
<img src="https://i.imgur.com/2ckrgBV.png" alt="Avatar" style="width:33px;height:33px;border-radius:30px;margin-right:19px;">
<img src="https://i.imgur.com/U0o1cNC.png" alt="Avatar" style="width:33px;height:33px;border-radius:30px;margin-right:19px;">
<img src="https://i.imgur.com/lqU1l6u.png" alt="Avatar" style="width:33px;height:33px;border-radius:30px;">
</div>
<div class="footer">
<div class="impressum">
<img src="https://i.imgur.com/6MQpeiL.png" alt="Avatar" style="width:17px;height:20px;margin-right:10px;margin-top:13px;">
<a href="http://cologne-open.herokuapp.com/impressum" style="color:black;font-size:15px;text-decoration:none;line-height:1.07;">Impressum und Datenschutz</a>
</div>
<p class="cpyright">@ 2020 cgnopen. All rights reserved.</p>
</div>

</body>
</html>


      `,
  }),
  TICKETS_REGISTRATION_LOUNGE: (
    company: string,
    postalCode: string,
    firstName: string,
    phone: string,
    lastName: string,
    email: string,
    street: string,
    fax: string,
    numberOfPackages: number,
    createdAt: string,
  ) => ({
    from: 'The CGN Team',
    subject: `Ticket Registration Lounge`,
    text: `CGN Ticket`,
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1
    -transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en" style="background:#f3f3f3
    !important"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport"
    content="width=device-width"><title>My Other Newsletter Email Template Subject</title><style>@media only screen
    {html{min-height:100%;background:#f3f3f3}}@media only screen and (max-width:596px){.small-float-center{margin:0
    auto!important;float:none!important;text-align:center!important}}@media only screen and (max-width:596px)
    {table.body img{width:auto;height:auto}table.body center{min-width:0!important}table.body .container{width:
    95%!important}table.body .columns{height:auto!important;-moz-box-sizing:border-box;-webkit-box-sizing:border
    -box;box-sizing:border-box;padding-left:16px!important;padding-right:16px!important}table.body .columns .columns
    {padding-left:0!important;padding-right:0!important}table.body .collapse .columns{padding-left:0!important;padding
    -right:0!important}th.small-6{display:inline-block!important;width:50%!important}th.small-12{display:inline-block!
    important;width:100%!important}.columns th.small-12{display:block!important;width:100%!important}table.menu{width:
    100%!important}table.menu td,table.menu th{width:auto!important;display:inline-block!important}table.menu.vertical
    td,table.menu.vertical th{display:block!important}table.menu[align=center]{width:auto!important}}</style></head>
    <body style="-ms-text-size-adjust:100%;-webkit-text-size-
    adjust:100%;Margin:0;background:#f3f3f3!important;font-family:Helvetica,Arial,
    sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;min-width:100%;padding:0;text-align:left;width:
    100%!important"><hr><h6 style="Margin:0;Margin-bottom
                              :10px;color:inherit;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:
                              700;line-height:1.3;margin:0;margin-bottom:10px;padding:0;padding-top:30px;text-align:
                              left;word-wrap:normal">BESTELLUNG</h6>
                              <p style="Margin:0;Margin-bottom:
         10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;
margin:0;margin-bottom:10px;padding:0;text-align:left">${numberOfPackages} Lounge Partner-Paket(e)
          zum Preis von € 24.360.- (zzgl. 19% MwSt.) / Turnier</p>
                              <table class="row" style="border-collapse:collapse;border-spacing:0;display:table;padding
                             :0;position:relative;text-align:left;vertical-align:top;width:100%"><tbody><tr style="
                               padding:0;text-align:left;vertical-align:top"><th class="small-12 large-6 columns first"
                              style="Margin:0 auto;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px
                             ;font-weight:400;line-height:1.3;margin:0 auto;padding:0;padding-bottom:16px;padding-left
                            :0!important;padding-right:0!important;text-align:left;width:50%"><table style="border-
                           collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:
                           100%"><tr style="padding:0;text-align:left;vertical-align:top"><th style="Margin:0;color
                        :#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height
                        :1.3;margin:0;padding:0;text-align:left"><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;
                        font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;
              margin-bottom:10px;padding:0;text-align:left">Firma: ${company}</p><p style="Margin:0;Margin-bottom:10px;
                        color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:
      1.3;margin:0;margin-bottom:10px;padding:0;text-align:left">Name: ${firstName}</p><p style="Margin:0;Margin-bottom
        :10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:
    1.3;margin:0;margin-bottom:10px;padding:0;text-align:left">Vorname: ${lastName}</p><p style="Margin:0;Margin-bottom
          :10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:
        1.3;margin:0;margin-bottom:10px;padding:0;text-align:left">Straße: ${street}</p></th></tr></table></th><th class
            ="small-12 large-6 columns last" style="Margin:0 auto;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif
             ;font-size:14px;font-weight:400;line-height:1.3;margin:0 auto;padding:0;padding-bottom:16px;padding-left
              :0!important;padding-right:0!important;text-align:left;width:50%"><table style="border-collapse:collapse
             ;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%"><tr style="padding:0;text-align:
            left;vertical-align:top"><th style="Margin:0;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:
            14px;font-weight:400;line-height:1.3;margin:0;padding:0;text-align:left"><p style="Margin:0;Margin-bottom:10
           px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin
:0;margin-bottom:10px;padding:0;text-align:left">PLZ, Ort: ${postalCode}</p><p style="Margin:0;Margin-bottom:10px;color:
    #0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;margin
  -bottom:10px;padding:0;text-align:left">Telefon: ${phone}</p><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;font-
   family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;
         padding:0;text-align:left">E-Mail: ${email}</p><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:
            Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;
   padding:0;text-align:left">Fax: ${fax}</p></th></tr></table></th></tr></tbody></table>
   <p style="Margin:0;Margin-bottom:10px;
   color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;
    margin:0;margin-bottom:10px;padding:0;text-align:left">${createdAt}
    </p></th></tr></table></th></tr></tbody></table></td></tr></tbody></table></center></td></tr></table>
    <!-- prevent Gmail on iOS font size manipulation --><div style="display:none;white-space:nowrap;font:
    15px courier;line-height:0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body></html>`,
  }),
  TICKETS_REGISTRATION_CENTER: (
    email: string,
    company: string,
    postalCode: string,
    firstName: string,
    phone: string,
    lastName: string,
    street: string,
    fax: string,
    numberOfPackages: number,
    createdAt: string,
  ) => ({
    from: 'The CGN Team',
    subject: `Ticket Registration Center`,
    text: `CGN Ticket`,
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1
    -transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en" style="background:#f3f3f3
    !important"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport"
    content="width=device-width"><title>My Other Newsletter Email Template Subject</title><style>@media only screen
    {html{min-height:100%;background:#f3f3f3}}@media only screen and (max-width:596px){.small-float-center{margin:0
    auto!important;float:none!important;text-align:center!important}}@media only screen and (max-width:596px)
    {table.body img{width:auto;height:auto}table.body center{min-width:0!important}table.body .container{width:
    95%!important}table.body .columns{height:auto!important;-moz-box-sizing:border-box;-webkit-box-sizing:border
    -box;box-sizing:border-box;padding-left:16px!important;padding-right:16px!important}table.body .columns .columns
    {padding-left:0!important;padding-right:0!important}table.body .collapse .columns{padding-left:0!important;padding
    -right:0!important}th.small-6{display:inline-block!important;width:50%!important}th.small-12{display:inline-block!
    important;width:100%!important}.columns th.small-12{display:block!important;width:100%!important}table.menu{width:
    100%!important}table.menu td,table.menu th{width:auto!important;display:inline-block!important}table.menu.vertical
    td,table.menu.vertical th{display:block!important}table.menu[align=center]{width:auto!important}}</style></head>
    <body style="-ms-text-size-adjust:100%;-webkit-text-size-
    adjust:100%;Margin:0;background:#f3f3f3!important;font-family:Helvetica,Arial,
    sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;min-width:100%;padding:0;text-align:left;width:
    100%!important"><hr><h6 style="Margin:0;Margin-bottom
                              :10px;color:inherit;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:
                              700;line-height:1.3;margin:0;margin-bottom:10px;padding:0;padding-top:30px;text-align:
                              left;word-wrap:normal">BESTELLUNG</h6>
                              <p style="Margin:0;Margin-bottom:
         10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;
margin:0;margin-bottom:10px;padding:0;text-align:left">${numberOfPackages} Center Court zum Preis von € 10.500.-
(zzgl. 19% MwSt.) / Turnier</p>
                              <table class="row" style="border-collapse:collapse;border-spacing:0;display:table;padding
                             :0;position:relative;text-align:left;vertical-align:top;width:100%"><tbody><tr style="
                               padding:0;text-align:left;vertical-align:top"><th class="small-12 large-6 columns first"
                              style="Margin:0 auto;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px
                             ;font-weight:400;line-height:1.3;margin:0 auto;padding:0;padding-bottom:16px;padding-left
                            :0!important;padding-right:0!important;text-align:left;width:50%"><table style="border-
                           collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:
                           100%"><tr style="padding:0;text-align:left;vertical-align:top"><th style="Margin:0;color
                        :#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height
                        :1.3;margin:0;padding:0;text-align:left"><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;
                        font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;
              margin-bottom:10px;padding:0;text-align:left">Firma: ${company}</p><p style="Margin:0;Margin-bottom:10px;
                        color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:
      1.3;margin:0;margin-bottom:10px;padding:0;text-align:left">Name: ${firstName}</p><p style="Margin:0;Margin-bottom
        :10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:
    1.3;margin:0;margin-bottom:10px;padding:0;text-align:left">Vorname: ${lastName}</p><p style="Margin:0;Margin-bottom
          :10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:
        1.3;margin:0;margin-bottom:10px;padding:0;text-align:left">Straße: ${street}</p></th></tr></table></th><th class
            ="small-12 large-6 columns last" style="Margin:0 auto;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif
             ;font-size:14px;font-weight:400;line-height:1.3;margin:0 auto;padding:0;padding-bottom:16px;padding-left
              :0!important;padding-right:0!important;text-align:left;width:50%"><table style="border-collapse:collapse
             ;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%"><tr style="padding:0;text-align:
            left;vertical-align:top"><th style="Margin:0;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:
            14px;font-weight:400;line-height:1.3;margin:0;padding:0;text-align:left"><p style="Margin:0;Margin-bottom:10
           px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin
:0;margin-bottom:10px;padding:0;text-align:left">PLZ, Ort: ${postalCode}</p><p style="Margin:0;Margin-bottom:10px;color:
    #0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;margin
  -bottom:10px;padding:0;text-align:left">Telefon: ${phone}</p><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;font-
   family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;
         padding:0;text-align:left">E-Mail: ${email}</p><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:
            Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;
   padding:0;text-align:left">Fax: ${fax}</p></th></tr></table></th></tr></tbody></table>
   <p style="Margin:0;Margin-bottom:10px;
   color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;
    margin:0;margin-bottom:10px;padding:0;text-align:left">${createdAt}
    </p></th></tr></table></th></tr></tbody></table></td></tr></tbody></table></center></td></tr></table>
    <!-- prevent Gmail on iOS font size manipulation --><div style="display:none;white-space:nowrap;font:
    15px courier;line-height:0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body></html>`,
  }),
  TICKETS_REGISTRATION_BUSSINES: (
    company: string,
    postalCode: string,
    firstName: string,
    phone: string,
    lastName: string,
    email: string,
    street: string,
    fax: string,
    numberOfPackages: number,
    monday: string,
    tuesday: string,
    wednesday: string,
    thursday: string,
    friday: string,
    saturday: string,
    sunday: string,
    createdAt: string,
  ) => ({
    from: 'The CGN Team',
    subject: `Ticket Registration Business`,
    text: `CGN Ticket`,
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-
    transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en" style="background:#f3f3f3!
    important"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport" content
    ="width=device-width"><title>My Other Newsletter Email Template Subject</title><style>@media only screen{html{min
    -height:100%;background:#f3f3f3}}@media only screen and (max-width:596px){.small-float-center{margin:0 auto!
    important;float:none!important;text-align:center!important}}@media only screen and (max-width:596px){table.
    body img{width:auto;height:auto}table.body center{min-width:0!important}table.body .container{width:95%!
    important}table.body .columns{height:auto!important;-moz-box-sizing:border-box;-webkit-box-sizing:border
    -box;box-sizing:border-box;padding-left:16px!important;padding-right:16px!important}table.body .columns
    .columns{padding-left:0!important;padding-right:0!important}table.body .collapse .columns{padding-left:0
    !important;padding-right:0!important}th.small-6{display:inline-block!important;width:50%!important}th.
    small-12{display:inline-block!important;width:100%!important}.columns th.small-12{display:block!important;width:
    100%!important}table.menu{width:100%!important}table.menu td,table.menu th{width:auto!important;display:inline-
    block!important}table.menu.vertical td,table.menu.vertical th{display:block!important}table.menu[align=center]
    {width:auto!important}}</style></head><body style="-moz-box-sizing:border-box;-ms-text-size-adjust:100%;-webkit-
    box-sizing:border-box;-webkit-text-size-adjust:100%;Margin:0;background:#f3f3f3!important;box-sizing:border-box;
    color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;min
    -width:100%;padding:0;text-align:left;width:100%!important">
             <hr><h6 style="Margin:0;Margin-bottom
               :10px;color:inherit;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:
               700;line-height:1.3;margin:0;margin-bottom:10px;padding:0;padding-top:30px;text-align:
               left;word-wrap:normal">BESTELLUNG</h6>
               <p style="Margin:0;Margin-bottom:10px;
    color:#0a0a0a;font-family:Helvetica,Arial,sans-
        serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;
        text-align:left">${numberOfPackages} Business-Seat Pakete á zwei Seats zum Preis von € 390.- (zzgl. 19% MwSt.)
         / Tag</p>
               <table class="row" style="border-collapse:collapse;border-spacing:0;display:table;padding
              :0;position:relative;text-align:left;vertical-align:top;width:100%"><tbody><tr style="
                padding:0;text-align:left;vertical-align:top"><th class="small-12 large-6 columns first"
               style="Margin:0 auto;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px
              ;font-weight:400;line-height:1.3;margin:0 auto;padding:0;padding-bottom:16px;padding-left
             :0!important;padding-right:0!important;text-align:left;width:50%"><table style="border-
            collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:
            100%"><tr style="padding:0;text-align:left;vertical-align:top"><th style="Margin:0;color
         :#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height
         :1.3;margin:0;padding:0;text-align:left"><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;
         font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;
margin-bottom:10px;padding:0;text-align:left">Firma: ${company}</p><p style="Margin:0;Margin-bottom:10px;
         color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:
1.3;margin:0;margin-bottom:10px;padding:0;text-align:left">Name: ${firstName}</p><p style="Margin:0;Margin-bottom
:10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:
1.3;margin:0;margin-bottom:10px;padding:0;text-align:left">Vorname: ${lastName}</p><p style="Margin:0;Margin-bottom
:10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:
1.3;margin:0;margin-bottom:10px;padding:0;text-align:left">Straße: ${street}</p></th></tr></table></th><th class
="small-12 large-6 columns last" style="Margin:0 auto;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif
;font-size:14px;font-weight:400;line-height:1.3;margin:0 auto;padding:0;padding-bottom:16px;padding-left
:0!important;padding-right:0!important;text-align:left;width:50%"><table style="border-collapse:collapse
;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%"><tr style="padding:0;text-align:
left;vertical-align:top"><th style="Margin:0;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:
14px;font-weight:400;line-height:1.3;margin:0;padding:0;text-align:left"><p style="Margin:0;Margin-bottom:10
px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin
:0;margin-bottom:10px;padding:0;text-align:left">PLZ, Ort: ${postalCode}</p><p style="Margin:0;Margin-bottom:10px;color:
#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;margin
-bottom:10px;padding:0;text-align:left">Telefon: ${phone}</p><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;font-
family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;
padding:0;text-align:left">E-Mail: ${email}</p><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:
Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;
padding:0;text-align:left">Fax: ${fax}</p></th></tr></table></th></tr></tbody></table>
<p style="Margin:0;Margin-bottom:
          10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height
          :1.3;margin:0;margin-bottom:10px;padding:0;text-align:left">Für folgende Tage:
          </p><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;font-
  family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:700;line-height:1.3;margin:0;margin-bottom:10px;padding:
  0;text-align:left">${monday ? '<b><u>Montag<u/></b>' : ''}  ${
      tuesday ? '<b><u>Dienstag<u/></b>' : ''
    }  ${wednesday ? '<b><u>Mittwoch<u/></b>' : ''}  ${
      thursday ? '<b><u>Donnerstag<u/></b>' : ''
    }  ${friday ? '<b><u>Freitag<u/></b>' : ''}  ${
      saturday ? '<b><u>Samstag<u/></b>' : ''
    }  ${sunday ? '<b><u>Sonntag<u/></b>' : ''}
<p style="Margin:0;Margin-bottom:10px;
color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;
margin:0;margin-bottom:10px;padding:0;text-align:left">${createdAt}
</p></th></tr></table></th></tr></tbody></table></td></tr></tbody></table></center></td></tr></table>
<!-- prevent Gmail on iOS font size manipulation --><div style="display:none;white-space:nowrap;font:
15px courier;line-height:0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body></html>`,
  }),
  NEW_NEWSLETTER_EMAIL: (email: string) => ({
    from: 'The CGN Team',
    subject: `Newsletter Bestellung:`,
    text: `CGN Newsletter`,
    html: `<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
<style>
body {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

.background {
  object-fit: contain;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.09);
}
.background-image {
	width: 600px;
    height: 250px;
}

.content {
	margin-top: 100px;
    height: 40vh;
    width: 500px;
    border-bottom-style: solid;
    border-bottom-color: #eeeeee;
    border-top-width: 0.5px;
    margin: auto;
    padding-top: 100px;
}

.social-media {
    left: 50%;
    margin-left: -73px;
    margin-top: 4vh;
    margin-bottom: 4vh;
}

.footer {
	width:100%;
    height:80px;
    background-color:#eeeeee;
}

.cpyright {
	color:black;
    font-size:15px;
    text-decoration:none;
    line-height:1.07;
}
</style>
</head>
<body>
<div class="background" style="width:100%;height:167px;">
<img class="background-image" src="https://i.imgur.com/ANfaQP6.png" alt="background">
</div>
<div class="content">
<h2 style="text-align:left;font-size:21px;font-style:italic;line-height:1.19;">herzlich Willkommen bei den
<span style="color:red">COLOGNE OPEN!</span></h2>
<p style="font-size:15px;line-height:1.33;text-align:left;">Wir freuen uns, über Ihr Interesse an unserem WTA International Rheinland. Ab jetzt werden Sie hier mit allen wichtigen Informationen rund um das Turnier versorgt. Egal ob neue Spielerinnen, Partner oder Sonderaktionen – mit unserem Newsletter verpassen Sie nichts mehr.
</p>
<p style="font-size:15px;line-height:1.33;text-align:left;">
Sie wollen nicht nur News zum Turnier, sondern die internationale Weltelite des Damentennis hautnah erleben? Dann schauen Sie gerne in unserem <a href="#" style="text-decoration:underline;color:red;">Ticketshop</a> vorbei. Mit der Ticket-Pre-Registration haben Sie die exklusive Möglichkeit, sich bereits vor dem offiziellen Ticketverkauf, Ihre Tickets für das WTA International Rheinland zu sichern.
</p>
</div>
<div class="social-media">
<img src="https://i.imgur.com/2ckrgBV.png" alt="Avatar" style="width:33px;height:33px;border-radius:30px;margin-right:19px;">
<img src="https://i.imgur.com/U0o1cNC.png" alt="Avatar" style="width:33px;height:33px;border-radius:30px;margin-right:19px;">
<img src="https://i.imgur.com/lqU1l6u.png" alt="Avatar" style="width:33px;height:33px;border-radius:30px;">
</div>
<div class="footer">
<div class="impressum">
<img src="https://i.imgur.com/6MQpeiL.png" alt="Avatar" style="width:17px;height:20px;margin-right:10px;margin-top:13px;">
<a href="http://cologne-open.herokuapp.com/impressum" style="color:black;font-size:15px;text-decoration:none;line-height:1.07;">Impressum und Datenschutz</a>
</div>
<p class="cpyright">@ 2020 cgnopen. All rights reserved.</p>
</div>

</body>
</html>`,
  }),
  NEW_NEWSLETTER_NAME: (firstName: string) => ({
    from: 'The CGN Team',
    subject: `Newsletter Bestellung:`,
    text: `CGN Newsletter`,
    html: `<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
<style>
body {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

.background {
  object-fit: contain;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.09);
}
.background-image {
	width: 600px;
    height: 250px;
}

.content {
	margin-top: 100px;
    height: 40vh;
    width: 500px;
    border-bottom-style: solid;
    border-bottom-color: #eeeeee;
    border-top-width: 0.5px;
    margin: auto;
    padding-top: 100px;
}

.social-media {
    left: 50%;
    margin-left: -73px;
    margin-top: 4vh;
    margin-bottom: 4vh;
}

.footer {
	width:100%;
    height:80px;
    background-color:#eeeeee;
}

.cpyright {
	color:black;
    font-size:15px;
    text-decoration:none;
    line-height:1.07;
}
</style>
</head>
<body>
<div class="background" style="width:100%;height:167px;">
<img class="background-image" src="https://i.imgur.com/ANfaQP6.png" alt="background">
</div>
<div class="content">
<h2 style="text-align:left;font-size:21px;font-style:italic;line-height:1.19;">herzlich Willkommen bei den
<span style="color:red">COLOGNE OPEN!</span></h2>
<p style="font-size:15px;line-height:1.33;text-align:left;">Wir freuen uns, über Ihr Interesse an unserem WTA International Rheinland. Ab jetzt werden Sie hier mit allen wichtigen Informationen rund um das Turnier versorgt. Egal ob neue Spielerinnen, Partner oder Sonderaktionen – mit unserem Newsletter verpassen Sie nichts mehr.
</p>
<p style="font-size:15px;line-height:1.33;text-align:left;">
Sie wollen nicht nur News zum Turnier, sondern die internationale Weltelite des Damentennis hautnah erleben? Dann schauen Sie gerne in unserem <a href="#" style="text-decoration:underline;color:red;">Ticketshop</a> vorbei. Mit der Ticket-Pre-Registration haben Sie die exklusive Möglichkeit, sich bereits vor dem offiziellen Ticketverkauf, Ihre Tickets für das WTA International Rheinland zu sichern.
</p>
</div>
<div class="social-media">
<img src="https://i.imgur.com/2ckrgBV.png" alt="Avatar" style="width:33px;height:33px;border-radius:30px;margin-right:19px;">
<img src="https://i.imgur.com/U0o1cNC.png" alt="Avatar" style="width:33px;height:33px;border-radius:30px;margin-right:19px;">
<img src="https://i.imgur.com/lqU1l6u.png" alt="Avatar" style="width:33px;height:33px;border-radius:30px;">
</div>
<div class="footer">
<div class="impressum">
<img src="https://i.imgur.com/6MQpeiL.png" alt="Avatar" style="width:17px;height:20px;margin-right:10px;margin-top:13px;">
<a href="http://cologne-open.herokuapp.com/impressum" style="color:black;font-size:15px;text-decoration:none;line-height:1.07;">Impressum und Datenschutz</a>
</div>
<p class="cpyright">@ 2020 cgnopen. All rights reserved.</p>
</div>

</body>
</html>`,
  }),
  NEW_CONTACT: (firstName: string, lastName: string) => ({
    from: 'The CGN Team',
    subject: `Anfrage über Kontaktformular`,
    text: `CGN Contact`,
    html: `<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
<style>
body {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

.background {
  object-fit: contain;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.09);
}
.background-image {
	width: 600px;
    height: 250px;
}

.content {
	margin-top: 100px;
    height: 40vh;
    width: 500px;
    border-bottom-style: solid;
    border-bottom-color: #eeeeee;
    border-top-width: 0.5px;
    margin: auto;
    padding-top: 100px;
}

.social-media {
    left: 50%;
    margin-left: -73px;
    margin-top: 4vh;
    margin-bottom: 4vh;
}

.footer {
	width:100%;
    height:80px;
    background-color:#eeeeee;
}

.cpyright {
	color:black;
    font-size:15px;
    text-decoration:none;
    line-height:1.07;
}
</style>
</head>
<body>
<div class="background" style="width:100%;height:167px;">
<img class="background-image" src="https://i.imgur.com/ANfaQP6.png" alt="background">
</div>
<div class="content">
<h2 style="text-align:left;font-size:21px;font-style:italic;line-height:1.19;">herzlich Willkommen bei den
<span style="color:red">COLOGNE OPEN!</span></h2>
<h2 style="text-align:left;font-size:17px;font-style:italic;line-height:1.24;">Vielen Dank für Ihre Nachricht und Ihr Interesse an unserem WTA International Rheinland. Wir werden Ihre Anfrage schnellstmöglich beantworten. </h2>
<p style="font-size:15px;line-height:1.33;text-align:left;">Interesse an Tickets? Dann schauen Sie doch in der Zwischenzeit schon mal hier <a href="#" style="text-decoration:underline;color:red;">Ticketshop</a> in unserem Ticketshop vorbei. Seien Sie dabei, wenn die internationale Weltelite des Damentennis unter dem Motto Dom-Satz-Sieg in der Domstadt aufschlägt und erleben Sie echte Asse hautnah!
</p>
</div>
<div class="social-media">
<img src="https://i.imgur.com/2ckrgBV.png" alt="Avatar" style="width:33px;height:33px;border-radius:30px;margin-right:19px;">
<img src="https://i.imgur.com/U0o1cNC.png" alt="Avatar" style="width:33px;height:33px;border-radius:30px;margin-right:19px;">
<img src="https://i.imgur.com/lqU1l6u.png" alt="Avatar" style="width:33px;height:33px;border-radius:30px;">
</div>
<div class="footer">
<div class="impressum">
<img src="https://i.imgur.com/6MQpeiL.png" alt="Avatar" style="width:17px;height:20px;margin-right:10px;margin-top:13px;">
<a href="http://cologne-open.herokuapp.com/impressum" style="color:black;font-size:15px;text-decoration:none;line-height:1.07;">Impressum und Datenschutz</a>
</div>
<p class="cpyright">@ 2020 cgnopen. All rights reserved.</p>
</div>

</body>
</html>`,
  }),
  NEW_CONTACT_NAME: (firstName: string) => ({
    from: 'The CGN Team',
    subject: `Anfrage über Kontaktformular`,
    text: `CGN Contact`,
    html: `<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
<style>
body {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

.background {
  object-fit: contain;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.09);
}
.background-image {
	width: 600px;
    height: 250px;
}

.content {
	margin-top: 100px;
    height: 40vh;
    width: 500px;
    border-bottom-style: solid;
    border-bottom-color: #eeeeee;
    border-top-width: 0.5px;
    margin: auto;
    padding-top: 100px;
}

.social-media {
    left: 50%;
    margin-left: -73px;
    margin-top: 4vh;
    margin-bottom: 4vh;
}

.footer {
	width:100%;
    height:80px;
    background-color:#eeeeee;
}

.cpyright {
	color:black;
    font-size:15px;
    text-decoration:none;
    line-height:1.07;
}
</style>
</head>
<body>
<div class="background" style="width:100%;height:167px;">
<img class="background-image" src="https://i.imgur.com/ANfaQP6.png" alt="background">
</div>
<div class="content">
<h2 style="text-align:left;font-size:21px;font-style:italic;line-height:1.19;">herzlich Willkommen bei den
<span style="color:red">COLOGNE OPEN!</span></h2>
<h2 style="text-align:left;font-size:17px;font-style:italic;line-height:1.24;">Vielen Dank für Ihre Nachricht und Ihr Interesse an unserem WTA International Rheinland. Wir werden Ihre Anfrage schnellstmöglich beantworten. </h2>
<p style="font-size:15px;line-height:1.33;text-align:left;">Interesse an Tickets? Dann schauen Sie doch in der Zwischenzeit schon mal hier <a href="#" style="text-decoration:underline;color:red;">Ticketshop</a> in unserem Ticketshop vorbei. Seien Sie dabei, wenn die internationale Weltelite des Damentennis unter dem Motto Dom-Satz-Sieg in der Domstadt aufschlägt und erleben Sie echte Asse hautnah!
</p>
</div>
<div class="social-media">
<img src="https://i.imgur.com/2ckrgBV.png" alt="Avatar" style="width:33px;height:33px;border-radius:30px;margin-right:19px;">
<img src="https://i.imgur.com/U0o1cNC.png" alt="Avatar" style="width:33px;height:33px;border-radius:30px;margin-right:19px;">
<img src="https://i.imgur.com/lqU1l6u.png" alt="Avatar" style="width:33px;height:33px;border-radius:30px;">
</div>
<div class="footer">
<div class="impressum">
<img src="https://i.imgur.com/6MQpeiL.png" alt="Avatar" style="width:17px;height:20px;margin-right:10px;margin-top:13px;">
<a href="http://cologne-open.herokuapp.com/impressum" style="color:black;font-size:15px;text-decoration:none;line-height:1.07;">Impressum und Datenschutz</a>
</div>
<p class="cpyright">@ 2020 cgnopen. All rights reserved.</p>
</div>

</body>
</html>`,
  }),
  NEW_CONTACT_EMAIL: (email: string) => ({
    from: 'The CGN Team',
    subject: `Anfrage über Kontaktformular`,
    text: `CGN Contact`,
    html: `<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
<style>
body {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

.background {
  object-fit: contain;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.09);
}
.background-image {
	width: 600px;
    height: 250px;
}

.content {
	margin-top: 100px;
    height: 40vh;
    width: 500px;
    border-bottom-style: solid;
    border-bottom-color: #eeeeee;
    border-top-width: 0.5px;
    margin: auto;
    padding-top: 100px;
}

.social-media {
    left: 50%;
    margin-left: -73px;
    margin-top: 4vh;
    margin-bottom: 4vh;
}

.footer {
	width:100%;
    height:80px;
    background-color:#eeeeee;
}

.cpyright {
	color:black;
    font-size:15px;
    text-decoration:none;
    line-height:1.07;
}
</style>
</head>
<body>
<div class="background" style="width:100%;height:167px;">
<img class="background-image" src="https://i.imgur.com/ANfaQP6.png" alt="background">
</div>
<div class="content">
<h2 style="text-align:left;font-size:21px;font-style:italic;line-height:1.19;">herzlich Willkommen bei den
<span style="color:red">COLOGNE OPEN!</span></h2>
<h2 style="text-align:left;font-size:17px;font-style:italic;line-height:1.24;">Vielen Dank für Ihre Nachricht und Ihr Interesse an unserem WTA International Rheinland. Wir werden Ihre Anfrage schnellstmöglich beantworten. </h2>
<p style="font-size:15px;line-height:1.33;text-align:left;">Interesse an Tickets? Dann schauen Sie doch in der Zwischenzeit schon mal hier <a href="#" style="text-decoration:underline;color:red;">Ticketshop</a> in unserem Ticketshop vorbei. Seien Sie dabei, wenn die internationale Weltelite des Damentennis unter dem Motto Dom-Satz-Sieg in der Domstadt aufschlägt und erleben Sie echte Asse hautnah!
</p>
</div>
<div class="social-media">
<img src="https://i.imgur.com/2ckrgBV.png" alt="Avatar" style="width:33px;height:33px;border-radius:30px;margin-right:19px;">
<img src="https://i.imgur.com/U0o1cNC.png" alt="Avatar" style="width:33px;height:33px;border-radius:30px;margin-right:19px;">
<img src="https://i.imgur.com/lqU1l6u.png" alt="Avatar" style="width:33px;height:33px;border-radius:30px;">
</div>
<div class="footer">
<div class="impressum">
<img src="https://i.imgur.com/6MQpeiL.png" alt="Avatar" style="width:17px;height:20px;margin-right:10px;margin-top:13px;">
<a href="http://cologne-open.herokuapp.com/impressum" style="color:black;font-size:15px;text-decoration:none;line-height:1.07;">Impressum und Datenschutz</a>
</div>
<p class="cpyright">@ 2020 cgnopen. All rights reserved.</p>
</div>

</body>
</html>`,
  }),
};

export default MAIL_OPTIONS;
