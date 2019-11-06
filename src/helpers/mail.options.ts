export interface IMailOption {
  from: string;
  subject: string;
  text: string;
  html?: string;
}

const MAIL_OPTIONS = {
  NEW_TICKET_CENTER: (
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
    // from: 'The CGN Team <no-reply@sandboxc77c3a9be90a494081dad1628d554337.mailgun.org>',
    from: 'The CGN Team <vazda18@gmail.com>',
    subject: `CGN Center Ticket`,
    text: `CGN Ticket`,
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/
    DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en" style
    ="background:#f3f3f3!important"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width"><title>My Other Newsletter Email Template Subject</title>
    <style>@media only screen{html{min-height:100%;background:#f3f3f3}}@media only screen and (max-width:596px)
    {.small-float-center{margin:0 auto!important;float:none!important;text-align:center!important}}@media only
    screen and (max-width:596px){table.body img{width:auto;height:auto}table.body center{min-width:0!important}
    table.body .container{width:95%!important}table.body .columns{height:auto!important;-moz-box-sizing:border-box;
      -webkit-box-sizing:border-box;box-sizing:border-box;padding-left:16px!important;padding-right:16px!important}
      table.body .columns .columns{padding-left:0!important;padding-right:0!important}table.body .collapse .columns
      {padding-left:0!important;padding-right:0!important}th.small-6{display:inline-block!important;width:50%!important}
      th.small-12{display:inline-block!important;width:100%!important}.columns th.small-12{display:block!important;
        width:100%!important}table.menu{width:100%!important}table.menu td,table.menu th{width:auto!important;display:
          inline-block!important}table.menu.vertical td,table.menu.vertical th{display:block!important}table.menu[align
            =center]{width:auto!important}}</style></head><body style="-moz-box-sizing:border-box;-ms-text-size-adjust:
            100%;-webkit-box-sizing:border-box;-webkit-text-size-adjust:100%;Margin:0;background:#f3f3f3!important;
            box-sizing:border-box;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;
            line-height:1.3;margin:0;min-width:100%;padding:0;text-align:left;width:100%!important"><span class=
            "preheader" style="color:#f3f3f3;display:none!important;font-size:1px;line-height:1px;max-height:0;
            max-width:0;mso-hide:all!important;opacity:0;overflow:hidden;visibility:hidden"></span><table class="body"
             style="Margin:0;background:#f3f3f3!important;border-collapse:collapse;border-spacing:0;color:#0a0a0a;
             font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;height:100%;line-height:1.3;margin:0;
             padding:0;text-align:left;vertical-align:top;width:100%"><tr style="padding:0;text-align:left;
             vertical-align:top"><td class="center" align="center" valign="top" style="-moz-hyphens:auto;
             -webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:
             Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:
             0;text-align:left;vertical-align:top;word-wrap:break-word"><center data-parsed style="min-width:580px;
             width:100%"><table align="center" class="container float-center" style="Margin:0 auto;background:#fefefe;
             border-collapse:collapse;border-spacing:0;float:none;margin:0 auto;padding:0;text-align:center;
             vertical-align:top;width:580px"><tbody><tr style="padding:0;text-align:left;vertical-align:top">
             <td style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:
             #0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;hyphens:auto;line-height:
             1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word"><table class="spacer"
             style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%">
             <tbody><tr style="padding:0;text-align:left;vertical-align:top"><td height="16px" style="-moz-hyphens:auto;
             -webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,
             sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:16px;margin:0;mso-line-height-rule:
             exactly;padding:0;text-align:left;vertical-align:top;word-wrap:break-word">&#xA0;</td></tr></tbody>
             </table><table class="row" style="border-collapse:collapse;border-spacing:0;display:table;padding:0;
             position:relative;text-align:left;vertical-align:top;width:100%"><tbody><tr style="padding:0;text-align:
             left;vertical-align:top"><th class="small-12 large-12 columns first last" style="Margin:0 auto;color:
             #0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0
              auto;padding:0;padding-bottom:16px;padding-left:16px;padding-right:16px;text-align:left;width:564px">
              <table style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;
              width:100%"><tr style="padding:0;text-align:left;vertical-align:top"><th style="Margin:0;color:#0a0a0a;
              font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;padding:0;
              text-align:left"><center data-parsed style="min-width:532px;width:100%"><h2 style="Margin:0;
              Margin-bottom:10px;color:inherit;font-family:Helvetica,Arial,sans-serif;font-size:28px;font-weight:400;
              line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:center;word-wrap:normal" align="center"
              class="float-center">Bestellformular</h2><h4 style="Margin:0;Margin-bottom:10px;color:inherit;font-family:
              Helvetica,Arial,sans-serif;font-size:22px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;
              padding:0;text-align:center;word-wrap:normal" align="center" class="float-center">Boxen-Paket Centre-Court
               – COLOGNE PEN 2020</h4></center></th><th class="expander" style="Margin:0;color:#0a0a0a;font-family:
               Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;padding:0!important;
               text-align:left;visibility:hidden;width:0"></th></tr></table></th></tr></tbody></table><hr style="
               margin:10px 10px"><table class="row" style="border-collapse:collapse;border-spacing:0;display:table;
               padding:0;position:relative;text-align:left;vertical-align:top;width:100%"><tbody><tr style="padding:0;
               text-align:left;vertical-align:top"><th class="small-12 large-6 columns first" style="Margin:0 auto;
               color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;
               margin:0 auto;padding:0;padding-bottom:16px;padding-left:16px;padding-right:8px;text-align:left;width:
               274px"><table style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:
               top;width:100%"><tr style="padding:0;text-align:left;vertical-align:top"><th style="Margin:0;color:
               #0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;
               padding:0;text-align:left"><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:Helvetica,
               Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;
               text-align:left">COLOGNE OPEN GmbH & Co. KG</p><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;
               font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;
               margin-bottom:10px;padding:0;text-align:left">Heumarkt 20</p><p style="Margin:0;Margin-bottom:10px;
               color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;
               margin:0;margin-bottom:10px;padding:0;text-align:left">DE-50667 Köln</p></th></tr></table></th>
               <th class="small-12 large-6 columns last" style="Margin:0 auto;color:#0a0a0a;font-family:Helvetica,
               Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0 auto;padding:0;padding-bottom:
               16px;padding-left:8px;padding-right:16px;text-align:left;width:274px"><table style="border-collapse:
               collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%"><tr style="padding:0;
               text-align:left;vertical-align:top"><th style="Margin:0;color:#0a0a0a;font-family:Helvetica,Arial,
               sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;padding:0;text-align:left">
               <p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;
               font-size:14px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;
               text-align:left">Telefon: +49 (0) 2208 – 921451 - 0</p><p style="Margin:0;Margin-bottom:10px;
               color:#fff;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:
               1.3;margin:0;margin-bottom:10px;padding:0;text-align:left">-</p><p style="Margin:0;Margin-bottom:
               10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:
               1.3;margin:0;margin-bottom:10px;padding:0;text-align:left">E-Mail: network@cgnopen.com</p></th></tr>
               </table></th></tr></tbody></table><hr style="margin:10px 10px"><table class="row" style="border-collapse:
               collapse;border-spacing:0;display:table;padding:0;position:relative;text-align:left;vertical-align:
               top;width:100%"><tbody><tr style="padding:0;text-align:left;vertical-align:top"><th class="small-12
                large-12 columns first last" style="Margin:0 auto;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;
                font-size:14px;font-weight:400;line-height:1.3;margin:0 auto;padding:0;padding-bottom:16px;padding-left:
                16px;padding-right:16px;padding-top:30px;text-align:left;width:564px"><table style="border-collapse:
                collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%"><tr style="padding:0;
                text-align:left;vertical-align:top"><th style="Margin:0;color:#0a0a0a;font-family:Helvetica,Arial,
                sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;padding:0;text-align:left">
                <h6 style="Margin:0;Margin-bottom:10px;color:inherit;font-family:Helvetica,Arial,sans-serif;
                font-size:16px;font-weight:700;line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:
                left;word-wrap:normal">1. BESTELLUNG</h6><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;
                font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;
                margin-bottom:10px;padding:0;text-align:left">Hiermit bestellt der Kunde (siehe Ziffer 3)
                 bei der COLOGNE OPEN GmbH & Co. KG</p><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;
                 font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;
    margin-bottom:10px;padding:0;padding-left:10px;text-align:left">${numberOfPackages} Boxen-Paket(e) Center Court“*
                  zum Preis von € 10.500.- (zzgl. 19% MwSt.) / Turnier</p><p style="Margin:0;Margin-bottom:10px;color:
                  #0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:
                  0;margin-bottom:10px;padding:0;padding-left:10px;text-align:left">*ein Boxen-Paket Center Court
                   beinhaltet folgende Leistungen:</p><ul><li>sechs Zugänge zum Hospitality-Bereich und dessen Netzwerk
                   </li><li>Gourmet-Catering (Kalt-Warmes-Buffet, alkoholfreie Getränke, Kölsch, Wein)</li>
                   <li>dauerhaft reservierter Tisch im Hospitality Bereich</li><li>drei reservierte Parkplätze der
                    besten Kategorie</li><li>Servicezeit ab 1h vor dem ersten bis 1h nach dem letzten Match</li>
                    <li>eine Sechser-Box direkt am Center-Court</li><li>sechs Boxen-Karten inkl. Sitzplätze pro Tag</li>
                    <li>Getränke-Service durch Hostess in der Loge am Center Court</li><li>Nutzung des Hospitality
                    -Eingangs („Fast Lane“) und –Empfangs zur täglichen Hinterlegung der Tickets (auch für Ihre Gäste)
                    </li><li>täglich kostenloses Turnier-Magazin</li><li>Logodarstellungen im Turnier-Magazin, auf der
                     Tischreservierung und auf dem Logen-Schild am Center Court</li><li>Nennung der Wortmarke auf der
                     Sponsorenseite der Website inkl.</li><li>Sonderpreis im „Offiziellen Tournament Hotel“ für Gäste
                      des Boxen-Partners, die im Rahmen des Turniers übernachten</li></ul><p style="Margin:0;Margin
                      -bottom:10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:
                      400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;padding-left:10px;text-align:left">
                      Netzwerk:</p><ul><li>eine Einladung (mit Begleitung) zu allen offiziellen Anlässen des Turniers
                       (Gast aus dem Unternehmen des Lounge-Partners)</li></ul><p style="Margin:0;Margin-bottom:10px;
                       color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height
                       :1.3;margin:0;margin-bottom:10px;padding:0;text-align:left">Bitte senden sie das ausgefüllte und
                        unterschriebene Bestellformular als eingescanntes Dokument per E-Mail an die oben genannte
                        E-Mail Adresse zurück. Die Bestätigung erfolgt durch Rücksendung der Auftragsbestätigung per
                         E-Mail an die durch den Kunden in Ziffer 3 angegebene E-Mail Adresse</p><h6 style="Margin:0;
                         Margin-bottom:10px;color:inherit;font-family:Helvetica,Arial,sans-serif;font-size:16px;
                         font-weight:700;line-height:1.3;margin:0;margin-bottom:10px;padding:0;padding-top:30px;
                         text-align:left;word-wrap:normal">2. GEGENLEISTUNGDES KUNDEN</h6><p style="Margin:0;
                         Margin-bottom:10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;
                         font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:left">
                         Die Zahlung des sich aus Ziffer 1 ergebenden Betrages erfolgt durch Überweisung innerhalb
                          von 7 (sieben) Tagen nach Erhalt der Rechnung durch die COLOGNE OPENGmbH & Co. KG auf
                           folgendes Bankkonto: <span style="font-weight:700">COLOGNE OPEN GmbH & Co. KG </span>|
                            <span style="font-weight:700">DEUTSCHE BANK</span></p><p style="Margin:0;Margin-bottom:
                            10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;
                            line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:left">IBAN: <span style=
                            "font-weight:700">DE07 3707 0060 0335 3083 00 </span>| <span style="font-weight:700">BIC:
                            DEUTDEDKXXX</span></p><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:
                            Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;margin
                            -bottom:10px;padding:0;text-align:left">Die bestellten Tickets werden nur gegen Vorkasse
                             und bis maximal 3 (drei) Tage vor dem Spieltag an den Kunden versendet. Sollte noch kein
                              Zahlungseingang erfolgt sein, oder die Versendung aus Zeitgründen nicht mehr möglich sein
                              , werden die Business-Seat Tickets zur Abholung an der Hinterlegungskasse des
                               Turniergeländes am gewählten Veranstaltungstag hinterlegt. Für Rückfragen wenden Sie sich
                                bitte an die oben genannte Telefonnummer.</p><hr><h6 style="Margin:0;Margin-bottom:10px;
                                color:inherit;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:700;
                                line-height:1.3;margin:0;margin-bottom:10px;padding:0;padding-top:30px;text-align:
                                left;word-wrap:normal">3. KUNDE, RECHNUNGS- / LIEFERANSCHRIFT</h6>
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
    padding:0;text-align:left">Fax: ${fax}</p></th></tr></table></th></tr></tbody></table><p style="Margin:0;Margin
    -bottom:10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line
   -height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:left">Mit meiner Unterschrift bestätige
   ich die Bestellung der aufgelisteten Business-Seat-Tickets und die Richtigkeit der vorstehenden Angaben
  . Außerdem akzeptiere ich die Allgemeinen Ticket-Geschäftsbedingungen (ATGB). Bei Widersprüchen zwischen
   den vorgenannten ATGBs und den Bestimmungen dieses Bestellformulars haben die Bestimmungen dieses
   Bestellformulars Vorrang.</p><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:Helvetica
   ,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;
   text-align:left">Datum, Stempel & Unterschrift des Kunden:</p><p style="Margin:0;Margin-bottom:10px;
   color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;
  margin:0;margin-bottom:10px;padding:0;text-align:left">${createdAt}, ____________________________________________
  </p></th></tr></table></th></tr></tbody></table></td></tr></tbody></table></center></td></tr></table>
   <!-- prevent Gmail on iOS font size manipulation --><div style="display:none;white-space:nowrap;font:
  15px courier;line-height:0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                               &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body></html>`,
  }),
  NEW_TICKET_USER: (email: string) => ({
    from: 'The CGN Team',
    subject: `CGN Ticket`,
    text: `CGN Ticket`,
    html: `Dear ${email}.
      Thank You for buying ticket for CGN tournament!
      We will contact you soon.
      The CGN Team`,
  }),
  NEW_TICKET_LOUNGE: (
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
    subject: `CGN Lounge Ticket`,
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
    <body style="-moz-box-sizing:border-box;-ms-text-size-adjust:100%;-webkit-box-sizing:border-box;-webkit-text-size-
    adjust:100%;Margin:0;background:#f3f3f3!important;box-sizing:border-box;color:#0a0a0a;font-family:Helvetica,Arial,
    sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;min-width:100%;padding:0;text-align:left;width:
    100%!important"><span class="preheader" style="color:#f3f3f3;display:none!important;font-size:1px;line-height:1px;
    max-height:0;max-width:0;mso-hide:all!important;opacity:0;overflow:hidden;visibility:hidden"></span><table class="
    body" style="Margin:0;background:#f3f3f3!important;border-collapse:collapse;border-spacing:0;color:#0a0a0a;font-
    family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;height:100%;line-height:1.3;margin:0;padding:0;
    text-align:left;vertical-align:top;width:100%"><tr style="padding:0;text-align:left;vertical-align:top"><td class=
    "center" align="center" valign="top" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse
    !important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;hyphens:auto;line-
    height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word"><center data-parsed style="
    min-width:580px;width:100%"><table align="center" class="container float-center" style="Margin:0 auto;background:
    #fefefe;border-collapse:collapse;border-spacing:0;float:none;margin:0 auto;padding:0;text-align:center;vertical-
    align:top;width:580px"><tbody><tr style="padding:0;text-align:left;vertical-align:top"><td style="-moz-hyphens:auto
    ;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-
    serif;font-size:14px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-
    align:top;word-wrap:break-word"><table class="spacer" style="border-collapse:collapse;border-spacing:0;padding
    :0;text-align:left;vertical-align:top;width:100%"><tbody><tr style="padding:0;text-align:left;vertical-align:top"
    ><td height="16px" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:
    #0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:16px;margin
    :0;mso-line-height-rule:exactly;padding:0;text-align:left;vertical-align:top;word-wrap:break-word">&#xA0;</td></tr>
    </tbody></table><table class="row" style="border-collapse:collapse;border-spacing:0;display:table;padding:0;position
    :relative;text-align:left;vertical-align:top;width:100%"><tbody><tr style="padding:0;text-align:left;vertical-align:
    top"><th class="small-12 large-12 columns first last" style="Margin:0 auto;color:#0a0a0a;font-family:Helvetica,Arial
    ,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0 auto;padding:0;padding-bottom:16px;padding-left:
    16px;padding-right:16px;text-align:left;width:564px"><table style="border-collapse:collapse;border-spacing:0;padding
    :0;text-align:left;vertical-align:top;width:100%"><tr style="padding:0;text-align:left;vertical-align:top"><th style
    ="Margin:0;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;
    margin:0;padding:0;text-align:left"><center data-parsed style="min-width:532px;width:100%"><h2 style="Margin:0;
    Margin-bottom:10px;color:inherit;font-family:Helvetica,Arial,sans-serif;font-size:28px;font-weight:400;line-height
    :1.3;margin:0;margin-bottom:10px;padding:0;text-align:center;word-wrap:normal" align="center" class="float-center">
    Bestellformular</h2><h4 style="Margin:0;Margin-bottom:10px;color:inherit;font-family:Helvetica,Arial,sans-serif;font
    -size:22px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:center;word-wrap:normal"
align="center" class="float-center">Lounge Partner-Paket – COLOGNE PEN 2020</h4></center></th><th class="expander"
 style="Margin:0;color:#0a0a0a;font-family:
     Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;padding:0!important;
     text-align:left;visibility:hidden;width:0"></th></tr></table></th></tr></tbody></table><hr style="
     margin:10px 10px"><table class="row" style="border-collapse:collapse;border-spacing:0;display:table;
     padding:0;position:relative;text-align:left;vertical-align:top;width:100%"><tbody><tr style="padding:0;
     text-align:left;vertical-align:top"><th class="small-12 large-6 columns first" style="Margin:0 auto;
     color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;
     margin:0 auto;padding:0;padding-bottom:16px;padding-left:16px;padding-right:8px;text-align:left;width:
     274px"><table style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:
     top;width:100%"><tr style="padding:0;text-align:left;vertical-align:top"><th style="Margin:0;color:
     #0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;
     padding:0;text-align:left"><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:Helvetica,
     Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;
     text-align:left">COLOGNE OPEN GmbH & Co. KG</p><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;
     font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;
     margin-bottom:10px;padding:0;text-align:left">Heumarkt 20</p><p style="Margin:0;Margin-bottom:10px;
     color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;
     margin:0;margin-bottom:10px;padding:0;text-align:left">DE-50667 Köln</p></th></tr></table></th>
     <th class="small-12 large-6 columns last" style="Margin:0 auto;color:#0a0a0a;font-family:Helvetica,
     Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0 auto;padding:0;padding-bottom:
     16px;padding-left:8px;padding-right:16px;text-align:left;width:274px"><table style="border-collapse:
     collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%"><tr style="padding:0;
     text-align:left;vertical-align:top"><th style="Margin:0;color:#0a0a0a;font-family:Helvetica,Arial,
     sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;padding:0;text-align:left">
     <p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;
     font-size:14px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;
     text-align:left">Telefon: +49 (0) 2208 – 921451 - 0</p><p style="Margin:0;Margin-bottom:10px;
     color:#fff;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:
     1.3;margin:0;margin-bottom:10px;padding:0;text-align:left">-</p><p style="Margin:0;Margin-bottom:
     10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:
     1.3;margin:0;margin-bottom:10px;padding:0;text-align:left">E-Mail: network@cgnopen.com</p></th></tr>
     </table></th></tr></tbody></table><hr style="margin:10px 10px"><table class="row" style="border-collapse:
     collapse;border-spacing:0;display:table;padding:0;position:relative;text-align:left;vertical-align:
     top;width:100%"><tbody><tr style="padding:0;text-align:
       left;vertical-align:top"><th class="small-12 large-12 columns first last" style="Margin:0 auto;color:#0a0a0a;
       font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0 auto;padding:
       0;padding-bottom:16px;padding-left:16px;padding-right:16px;padding-top:30px;text-align:left;width:564px">
       <table style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:
       100%"><tr style="padding:0;text-align:left;vertical-align:top"><th style="Margin:0;color:#0a0a0a;font-family:
       Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;padding:0;text-align:left">
       <h6 style="Margin:0;Margin-bottom:10px;color:inherit;font-family:Helvetica,Arial,sans-serif;font-size:16px;
       font-weight:700;line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:left;word-wrap:normal">1.
        BESTELLUNG</h6><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;
        font-size:14px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:left">Hiermit
         bestellt der Kunde (siehe Ziffer 3) bei der COLOGNE OPEN GmbH & Co. KG</p><p style="Margin:0;Margin-bottom:
         10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;
margin:0;margin-bottom:10px;padding:0;padding-left:10px;text-align:left">${numberOfPackages} Lounge Partner-Paket(e)*“
          zum Preis von € 24.360.- (zzgl. 19% MwSt.) / Turnier</p><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;
          font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;margin-bottom
          :10px;padding:0;padding-left:10px;text-align:left">*ein Lounge Partner-Paket beinhaltet folgende Leistungen
          :</p><ul><li>eine Lounge im Hospitality Bereich für zwölf Personen zur individuellen Austattung und
           individuellem Branding des Lounge Partners</li><li>Gourmet-Catering (Kalt-Warmes-Buffet, alkoholfreie
             Getränke, Kölsch, Wein)</li><li>sechs reservierte Parkplätze der besten Kategorie</li><li>dauerhafte
              Hostess, Servicezeit ab 1h vor dem ersten bis 1h nach dem letzten Match</li><li>eine Zwölfer-Loge /
               zwei Sechser-Logen direkt am Center-Court</li><li>zwölf Logen-Karten inkl. Sitzplätze pro Tag</li>
               <li>Nutzung des Hospitality-Eingangs und –Empfangs zur täglichen Hinterlegung der Tickets
                (auch für Ihre Gäste)</li><li>Überraschungsgeschenk</li><li>täglich kostenloses Turnier
                -Magazin</li><li>Logodarstellungen an der Lounge im Hospitality-Bereich, auf dem Logen-Schild
                 am Center Court, im Turnier-Magazin und auf der Sponsorenseite der Website inkl. Link.</li>
                 <li>Sonderpreis im „Offiziellen Tournament Hotel“ für Gäste des Lounge-Partners, die im Rahmen
                  des Turniers übernachten</li><li>Getränke-Service durch Hostess in der Loge am Center Court
                  </li></ul><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:Helvetica,Arial,sans
                  -serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;
                  padding-left:10px;text-align:left">Netzwerk:</p><ul><li>eine Einladung (mit Begleitung) zu
                   allen offiziellen Anlässen des Turniers (Gast aus dem Unternehmen des Lounge-Partners)</li>
                   </ul><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;
                   font-size:14px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:
                   left">Bitte senden sie das ausgefüllte und unterschriebene Bestellformular als eingescanntes
                    Dokument per E-Mail an die oben genannte E-Mail Adresse zurück. Die Bestätigung erfolgt durch
                     Rücksendung der Auftragsbestätigung per E-Mail an die durch den Kunden in Ziffer 3 angegebene
                      E-Mail Adresse.</p><h6 style="Margin:0;Margin-bottom:10px;color:inherit;font-family:Helvetica,
                      Arial,sans-serif;font-size:16px;font-weight:700;line-height:1.3;margin:0;margin-bottom:10px;
                      padding:0;padding-top:30px;text-align:left;word-wrap:normal">2. GEGENLEISTUNGDES KUNDEN</h6>
                      <p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;
                      font-size:14px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-
                      align:left">Die Zahlung des sich aus Ziffer 1 ergebenden Betrages erfolgt durch Überweisung
                       innerhalb von 7 (sieben) Tagen nach Erhalt der Rechnung durch die COLOGNE OPENGmbH & Co.
                        KG auf folgendes Bankkonto: <span style="font-weight:700">COLOGNE OPEN GmbH & Co. KG</span>
                         | <span style="font-weight:700">DEUTSCHE BANK</span></p><p style="Margin:0;Margin-bottom:
                         10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;
                         line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:left">IBAN: <span style=
                         "font-weight:700">DE07 3707 0060 0335 3083 00</span> |<span style="font-weight:700"></span>
                          BIC:DEUTDEDKXXX</p><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:
                          Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;margin-
                          bottom:10px;padding:0;text-align:left">Die bestellten Tickets werden nur gegen Vorkasse und
                           bis maximal 3 (drei) Tage vor dem Spieltag an den Kunden versendet. Sollte noch kein
                            Zahlungseingang erfolgt sein, oder die Versendung aus Zeitgründen nicht mehr möglich sein
                            , werden die Business-Seat Tickets zur Abholung an der Hinterlegungskasse des
                             Turniergeländes am gewählten Veranstaltungstag hinterlegt. Für Rückfragen wenden Sie
                              sich bitte an die oben genannte Telefonnummer.</p><hr><h6 style="Margin:0;Margin-bottom
                              :10px;color:inherit;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:
                              700;line-height:1.3;margin:0;margin-bottom:10px;padding:0;padding-top:30px;text-align:
                              left;word-wrap:normal">3. KUNDE, RECHNUNGS- / LIEFERANSCHRIFT</h6>
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
      padding:0;text-align:left">Fax: ${fax}</p></th></tr></table></th></tr></tbody></table><p style="Margin:0;Margin
     -bottom:10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line
     -height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:left">Mit meiner Unterschrift bestätige
    ich die Bestellung der aufgelisteten Business-Seat-Tickets und die Richtigkeit der vorstehenden Angaben
    . Außerdem akzeptiere ich die Allgemeinen Ticket-Geschäftsbedingungen (ATGB). Bei Widersprüchen zwischen
    den vorgenannten ATGBs und den Bestimmungen dieses Bestellformulars haben die Bestimmungen dieses
    Bestellformulars Vorrang.</p><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:Helvetica
   ,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;
   text-align:left">Datum, Stempel & Unterschrift des Kunden:</p><p style="Margin:0;Margin-bottom:10px;
   color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;
    margin:0;margin-bottom:10px;padding:0;text-align:left">${createdAt}, ____________________________________________
    </p></th></tr></table></th></tr></tbody></table></td></tr></tbody></table></center></td></tr></table>
    <!-- prevent Gmail on iOS font size manipulation --><div style="display:none;white-space:nowrap;font:
    15px courier;line-height:0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body></html>`,
  }),
  NEW_TICKET_BUSINESS: (
    company: string,
    postalCode: string,
    firstName: string,
    phone: string,
    lastName: string,
    email: string,
    street: string,
    fax: string,
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
    subject: `CGN Business Ticket`,
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
    -width:100%;padding:0;text-align:left;width:100%!important"><span class="preheader" style="color:#f3f3f3;display
    :none!important;font-size:1px;line-height:1px;max-height:0;max-width:0;mso-hide:all!important;opacity:0;overflow:
    hidden;visibility:hidden"></span><table class="body" style="Margin:0;background:#f3f3f3!important;border-collapse:
    collapse;border-spacing:0;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;height
    :100%;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;width:100%"><tr style="padding:0;text-
    align:left;vertical-align:top"><td class="center" align="center" valign="top" style="-moz-hyphens:auto;-webkit-
    hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;
    font-size:14px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0;text-align:left;vertical-align:
    top;word-wrap:break-word"><center data-parsed style="min-width:580px;width:100%"><table align="center" class="
    container float-center" style="Margin:0 auto;background:#fefefe;border-collapse:collapse;border-spacing:0;float:
    none;margin:0 auto;padding:0;text-align:center;vertical-align:top;width:580px"><tbody><tr style="padding:0;text-
    align:left;vertical-align:top"><td style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse
    !important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;hyphens:auto;line-
    height:1.3;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word"><table class="spacer"
     style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%">
     <tbody><tr style="padding:0;text-align:left;vertical-align:top"><td height="16px" style="-moz-hyphens:auto;
     -webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,
     sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:16px;margin:0;mso-line-height-rule:exactly
     ;padding:0;text-align:left;vertical-align:top;word-wrap:break-word">&#xA0;</td></tr></tbody></table><table
      class="row" style="border-collapse:collapse;border-spacing:0;display:table;padding:0;position:relative;text
      -align:left;vertical-align:top;width:100%"><tbody><tr style="padding:0;text-align:left;vertical-align:top">
      <th class="small-12 large-12 columns first last" style="Margin:0 auto;color:#0a0a0a;font-family:Helvetica,
      Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0 auto;padding:0;padding-bottom:16px;
      padding-left:16px;padding-right:16px;text-align:left;width:564px"><table style="border-collapse:collapse;border
      -spacing:0;padding:0;text-align:left;vertical-align:top;width:100%"><tr style="padding:0;text-align:left;
      vertical-align:top"><th style="Margin:0;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;
      font-weight:400;line-height:1.3;margin:0;padding:0;text-align:left"><center data-parsed style="min-width:532px;
      width:100%"><h2 style="Margin:0;Margin-bottom:10px;color:inherit;font-family:Helvetica,Arial,sans-serif;font-
      size:28px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:center;word-wrap:
      normal" align="center" class="float-center">Bestellformular</h2><h4 style="Margin:0;Margin-bottom:10px;color:
      inherit;font-family:Helvetica,Arial,sans-serif;font-size:22px;font-weight:400;line-height:1.3;margin:0;margin
      -bottom:10px;padding:0;text-align:center;word-wrap:normal" align="center" class="float-center"> Business Seats
      – COLOGNE PEN 2020</h4></center></th><th class="expander" style="Margin:0;color:#0a0a0a;font-family:
               Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;padding:0!important;
               text-align:left;visibility:hidden;width:0"></th></tr></table></th></tr></tbody></table><hr style="
               margin:10px 10px"><table class="row" style="border-collapse:collapse;border-spacing:0;display:table;
               padding:0;position:relative;text-align:left;vertical-align:top;width:100%"><tbody><tr style="padding:0;
               text-align:left;vertical-align:top"><th class="small-12 large-6 columns first" style="Margin:0 auto;
               color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;
               margin:0 auto;padding:0;padding-bottom:16px;padding-left:16px;padding-right:8px;text-align:left;width:
               274px"><table style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-align:
               top;width:100%"><tr style="padding:0;text-align:left;vertical-align:top"><th style="Margin:0;color:
               #0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;
               padding:0;text-align:left"><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:Helvetica,
               Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;
               text-align:left">COLOGNE OPEN GmbH & Co. KG</p><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;
               font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;
               margin-bottom:10px;padding:0;text-align:left">Heumarkt 20</p><p style="Margin:0;Margin-bottom:10px;
               color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;
               margin:0;margin-bottom:10px;padding:0;text-align:left">DE-50667 Köln</p></th></tr></table></th>
               <th class="small-12 large-6 columns last" style="Margin:0 auto;color:#0a0a0a;font-family:Helvetica,
               Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0 auto;padding:0;padding-bottom:
               16px;padding-left:8px;padding-right:16px;text-align:left;width:274px"><table style="border-collapse:
               collapse;border-spacing:0;padding:0;text-align:left;vertical-align:top;width:100%"><tr style="padding:0;
               text-align:left;vertical-align:top"><th style="Margin:0;color:#0a0a0a;font-family:Helvetica,Arial,
               sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;padding:0;text-align:left">
               <p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;
               font-size:14px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;
               text-align:left">Telefon: +49 (0) 2208 – 921451 - 0</p><p style="Margin:0;Margin-bottom:10px;
               color:#fff;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:
               1.3;margin:0;margin-bottom:10px;padding:0;text-align:left">-</p><p style="Margin:0;Margin-bottom:
               10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:
               1.3;margin:0;margin-bottom:10px;padding:0;text-align:left">E-Mail: network@cgnopen.com</p></th></tr>
               </table></th></tr></tbody></table><hr style="margin:10px 10px"><table class="row" style="border-collapse:
               collapse;border-spacing:0;display:table;padding:0;position:relative;text-align:left;vertical-align:
               top;width:100%"><tbody><tr style="
      padding:0;text-align:left;vertical-align:top"><th class="small-12 large-12 columns first last" style="Margin:0
       auto;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;
       margin:0 auto;padding:0;padding-bottom:16px;padding-left:16px;padding-right:16px;padding-top:30px;text-align:
       left;width:564px"><table style="border-collapse:collapse;border-spacing:0;padding:0;text-align:left;vertical-
       align:top;width:100%"><tr style="padding:0;text-align:left;vertical-align:top"><th style="Margin:0;color:
       #0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;
       padding:0;text-align:left"><h6 style="Margin:0;Margin-bottom:10px;color:inherit;font-family:Helvetica,
       Arial,sans-serif;font-size:16px;font-weight:700;line-height:1.3;margin:0;margin-bottom:10px;padding:0;
       text-align:left;word-wrap:normal">1. BESTELLUNG</h6><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a
       ;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;margin-
       bottom:10px;padding:0;text-align:left">Hiermit bestellt der Kunde (siehe Ziffer 3) bei der COLOGNE OPEN
        GmbH & Co. KG</p><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-
        serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;padding-left:
        10px;text-align:left">_____ „Business-Seat Pakete á zwei Seats*“ zum Preis von € 390.- (zzgl. 19% MwSt.)
         / Tag</p><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font
         -size:14px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;padding-left:10px;text-
         align:left">*je zwei komfortable Sitzplätze am Center Court inkl. Zugänge zum Hospitality-Bereich, ein
         reservierter Parkplatz, Gourmet-Catering (Kalt-Warmes-Buffet, alkoholfreie Getränke, Kölsch, Wein),
          Servicezeit ab 1h vor dem ersten bis 1h nach dem letzten Match des Tages, Nutzung des Hospitality
          -Eingangs und –Empfangs (bspw. zur Hinterlegung der Tickets).</p><p style="Margin:0;Margin-bottom:
          10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height
          :1.3;margin:0;margin-bottom:10px;padding:0;text-align:left">Für folgende Tage (genaue Anzahl der Pakete
             pro jeweiligem Tag bitte eintragen):</p><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;font-
  family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:700;line-height:1.3;margin:0;margin-bottom:10px;padding:
  0;text-align:left">${monday ? '<b><u>Montag<u/></b>' : ''}  ${
      tuesday ? '<b><u>Dienstag<u/></b>' : ''
    }  ${wednesday ? '<b><u>Mittwoch<u/></b>' : ''}  ${
      thursday ? '<b><u>Donnerstag<u/></b>' : ''
    }  ${friday ? '<b><u>Freitag<u/></b>' : ''}  ${
      saturday ? '<b><u>Samstag<u/></b>' : ''
    }  ${sunday ? '<b><u>Sonntag<u/></b>' : ''}
             </p><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:Helvetica,Arial,
            sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;text
                              -align:left">Bitte senden Sie uns das ausgefüllte und unterschriebene Bestellformular als
             eingescanntesDokument per E-Mail an die oben genannte E-Mail Adresse zurück. Die Bestätigungerfolgt
              durch Rücksendung der Auftragsbestätigung per E-Mail an die durch den Kunden in Ziffer 3
               angegebene E-Mail Adresse.</p><h6 style="Margin:0;Margin-bottom:10px;color:inherit;font-family:
               Helvetica,Arial,sans-serif;font-size:16px;font-weight:700;line-height:1.3;margin:0;margin-bottom
               :10px;padding:0;padding-top:30px;text-align:left;word-wrap:normal">2. GEGENLEISTUNGDES KUNDEN</
               h6><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;
               font-size:14px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:
               left">Die Zahlung des sich aus Ziffer 1 ergebenden Betrages erfolgt durch Überweisung innerhalb
                von 7 (sieben) Tagen nach Erhalt der Rechnung durch die COLOGNE OPENGmbH & Co. KG auf folgendes
                 Bankkonto: <span style="font-weight:700">COLOGNE OPEN GmbH & Co. KG</span> | <span style="font
                 -weight:700">DEUTSCHE BANK</span></p><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;font
                 -family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;
                 margin-bottom:10px;padding:0;text-align:left">IBAN: <span style="font-weight:700">DE07 3707
                  0060 0335 3083 00</span> |<span style="font-weight:700"></span> BIC:DEUTDEDKXXX</p><p style
                  ="Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size
                  :14px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:left">
                  Die bestellten Tickets werden nur gegen Vorkasse und bis maximal 3 (drei) Tage vor dem Spieltag
                   an den Kunden versendet. Sollte noch kein Zahlungseingang erfolgt sein, oder die Versendung
                    aus Zeitgründen nicht mehr möglich sein, werden die Business-Seat Tickets zur Abholung an
              der Hinterlegungskasse des Turniergeländes am gewählten Veranstaltungstag hinterlegt. Für
          Rückfragen wenden Sie sich bitte an die oben genannte Telefonnummer.</p><hr><h6 style="Margin:0;Margin-bottom
               :10px;color:inherit;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:
               700;line-height:1.3;margin:0;margin-bottom:10px;padding:0;padding-top:30px;text-align:
               left;word-wrap:normal">3. KUNDE, RECHNUNGS- / LIEFERANSCHRIFT</h6>
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
padding:0;text-align:left">Fax: ${fax}</p></th></tr></table></th></tr></tbody></table><p style="Margin:0;Margin
-bottom:10px;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line
-height:1.3;margin:0;margin-bottom:10px;padding:0;text-align:left">Mit meiner Unterschrift bestätige
ich die Bestellung der aufgelisteten Business-Seat-Tickets und die Richtigkeit der vorstehenden Angaben
. Außerdem akzeptiere ich die Allgemeinen Ticket-Geschäftsbedingungen (ATGB). Bei Widersprüchen zwischen
den vorgenannten ATGBs und den Bestimmungen dieses Bestellformulars haben die Bestimmungen dieses
Bestellformulars Vorrang.</p><p style="Margin:0;Margin-bottom:10px;color:#0a0a0a;font-family:Helvetica
,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding:0;
text-align:left">Datum, Stempel & Unterschrift des Kunden:</p><p style="Margin:0;Margin-bottom:10px;
color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.3;
margin:0;margin-bottom:10px;padding:0;text-align:left">${createdAt}, ____________________________________________
</p></th></tr></table></th></tr></tbody></table></td></tr></tbody></table></center></td></tr></table>
<!-- prevent Gmail on iOS font size manipulation --><div style="display:none;white-space:nowrap;font:
15px courier;line-height:0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body></html>`,
  }),
  NEW_NEWSLETTER_EMAIL: (email: string) => ({
    from: 'The CGN Team',
    subject: `CGN Newsletter`,
    text: `CGN Newsletter`,
    html: `Dear ${email}.
      CGN Newsletter TEMPLATE
      Thank You
      The CGN Team`,
  }),
  NEW_NEWSLETTER_NAME: (firstName: string) => ({
    from: 'The CGN Team',
    subject: `CGN Newsletter`,
    text: `CGN Newsletter`,
    html: `Dear ${firstName}.
      CGN Newsletter TEMPLATE
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
