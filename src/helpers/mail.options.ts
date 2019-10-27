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
    fax: string
  ) => ({
    // from: 'The CGN Team <no-reply@sandboxc77c3a9be90a494081dad1628d554337.mailgun.org>',
    from: "The CGN Team <vazda18@gmail.com>",
    subject: `CGN Ticket`,
    text: `CGN Ticket`,
    html: `BestellformularBoxen-Paket Centre-Court – COLOGNE PEN 2020
    COLOGNE OPEN GmbH & Co. KGTelefon:+49 (0) 2208 – 921451
    - 0Heumarkt 20
    DE-50667 KölnE-Mail:network@cgnopen.com1.
     BESTELLUNG
     Hiermit bestellt der Kunde (siehe Ziffer 3) bei der COLOGNE OPEN GmbH & Co. KG
     „Boxen-Paket(e) Center Court“* zum Preis von € 10.500.- (zzgl. 19% MwSt.)
      / Turnier*ein Boxen-Paket Center Court beinhaltet folgende Leistungen:
      - sechs Zugänge zum Hospitality-Bereich und dessen Netzwerk
      - Gourmet-Catering (Kalt-Warmes-Buffet, alkoholfreie Getränke, Kölsch, Wein)
      - dauerhaft reservierter Tisch im Hospitality Bereich
      - drei reservierte Parkplätze der besten Kategorie
      - Servicezeit ab 1h vor dem ersten bis 1h nach dem letzten Match
      - eine Sechser-Box direkt am Center-Court
      - sechs Boxen-Karten inkl. Sitzplätze pro Tag
      - Getränke-Service durch Hostess in der Loge am Center Court
      - Nutzung des Hospitality-Eingangs („Fast Lane“) und
      –Empfangs zur täglichen Hinterlegung der Tickets (auch für Ihre Gäste)
      - täglich kostenloses Turnier-Magazin
      - Logodarstellungen im Turnier-Magazin, auf der Tischreservierung und auf dem Logen
      -Schild am Center Court
      - Nennung der Wortmarke auf der Sponsorenseite der Website inkl. Link
      - Sonderpreis im „Offiziellen Tournament Hotel“ für Gäste des Boxen-Partners,
       die im Rahmen des Turniers übernachtenNetzwerk:-
       eine Einladung (mit Begleitung) zu allen offiziellen Anlässen des Turniers
       (Gast aus dem Unternehmen des Lounge-Partners)
       Bitte senden sie das ausgefüllte und unterschriebene Bestellformular
      als eingescanntes Dokument per E-Mail an die oben genannte E-Mail Adresse zurück.
      Die Bestätigung erfolgt durch Rücksendung der Auftragsbestätigung per E-Mail an
      die durch den Kunden in Ziffer 3 angegebene E-Mail Adresse.
      COLOGNE OPEN GmbH & Co. KG | Heumarkt 20 | DE-50667 KölnGeschäftsführung:
       COLOGNE OPEN Verwaltungs GmbH |
        vertreten durch: Geschäftsführer Oliver MuellerHandelsregister Köln HRA 33996 | Sitz der Gesellschaft: Köln
    BestellformularBoxen-Paket Centre-Court – COLOGNE PEN 20202.
     GEGENLEISTUNGDES KUNDENDie
      Zahlung des sich aus Ziffer 1 ergebenden Betrages erfolgt durch Überweisung
      innerhalb von  7 (sieben) Tagen nach Erhalt der Rechnung durch die COLOGNE OPENGmbH & Co.
      KG auf folgendes Bankkonto: COLOGNE OPEN GmbH & Co.
       KG I DEUTSCHE BANKIBAN: DE07 3707 0060 0335 3083 00I
       BIC:DEUTDEDKXXXDie bestellten Tickets werden nur gegen Vorkasse und bis maximal 3 (drei) Tage
        vor dem Spieltag an den Kunden versendet.
      Sollte noch kein Zahlungseingang erfolgt sein,
        oder die Versendung aus Zeitgründen nicht mehr möglich sein, werden die Business-Seat Tickets
        zur Abholung an der Hinterlegungskasse des Turniergeländes am gewählten Veranstaltungstag hinterlegt.
        Für Rückfragen wenden Sie sich bitte an die oben genannte Telefonnummer.
        3. KUNDE, RECHNUNGS- / LIEFERANSCHRIFT
        Firma:${company}PLZ, Ort:${postalCode}
        Name:${firstName}Telefon:${phone}
        Vorname:${lastName}E-Mail:${email}
        Straße:${street}Fax:${fax}
      Mit meiner Unterschrift bestätige ich die Bestellung der aufgelisteten Business-Seat-Tickets und die Richtigkeit
       der vorstehenden Angaben. Außerdem akzeptiere ich die Allgemeinen Ticket-Geschäftsbedingungen (ATGB).
        Bei Widersprüchen zwischen den vorgenannten ATGBs und den Bestimmungen dieses Bestellformulars haben
        die Bestimmungen dieses Bestellformulars Vorrang.Datum,
        Stempel & Unterschrift des Kunden:
        COLOGNE OPEN GmbH & Co. KG | Heumarkt 20 | DE-50667 KölnGeschäftsführung: COLOGNE OPEN Verwaltungs GmbH
        | vertreten durch: Geschäftsführer Oliver MuellerHandelsregister Köln HRA 33996 | Sitz der Gesellschaft: Köln`
  }),
  // NEW_TICKET_EMAIL: (email: string) => ({
  //   from: 'The CGN Team',
  //   subject: `CGN Ticket`,
  //   text: `CGN Ticket`,
  //   html: `Dear ${email}.
  //     CGN Ticket TEMPLATE
  //     Thank You
  //     The CGN Team`,
  // }),
  NEW_TICKET_LOUNGE: (
    company: string,
    postalCode: string,
    firstName: string,
    phone: string,
    lastName: string,
    email: string,
    street: string,
    fax: string
  ) => ({
    from: "The CGN Team",
    subject: `CGN Ticket`,
    text: `CGN Ticket`,
    html: `BestellformularLounge Partner-Paket – COLOGNE OPEN 2020
    COLOGNE OPEN GmbH & Co. KGTelefon:+49 (0) 2208 – 921451
    - 0Heumarkt 20
    DE-50667 KölnE-Mail:network@cgnopen.com1.
     BESTELLUNG
     Hiermit bestellt der Kunde (siehe Ziffer 3) bei der COLOGNE OPEN GmbH & Co. KG
     _____ „Lounge Partner-Paket(e)*“ zum Preis von € 24.360.- (zzgl. 19% MwSt.)
      / Turnier*ein Lounge Partner-Paket beinhaltet folgende Leistungen:
      - eine Lounge im Hospitality Bereich für zwölf Personen zur individuellen
      Austattung und individuellem Branding des Lounge Partners
      - Gourmet-Catering (Kalt-Warmes-Buffet, alkoholfreie Getränke, Kölsch, Wein)
      - sechs reservierte Parkplätze der besten Kategorie
      - dauerhafte Hostess, Servicezeit ab 1h vor dem ersten bis 1h nach dem letzten Match
      - eine Zwölfer-Loge / zwei Sechser-Logen direkt am Center-Court
      - zwölf Logen-Karten inkl. Sitzplätze pro Tag
      - Nutzung des Hospitality-Eingangs und –Empfangs zur täglichen Hinterlegung der Tickets (auch für Ihre Gäste)
      - Überraschungsgeschenk
      - täglich kostenloses Turnier-Magazin
      - Logodarstellungen an der Lounge im Hospitality-Bereich, auf dem Logen-Schild am Center Court,
       im Turnier-Magazin und auf der Sponsorenseite der Website inkl. Link.
       - Sonderpreis im „Offiziellen Tournament Hotel“ für Gäste des Lounge-Partners,
        die im Rahmen des Turniers übernachten
        - Getränke-Service durch Hostess in der Loge am Center CourtNetzwerk:
        - eine Einladung (mit Begleitung) zu allen offiziellen Anlässen des Turniers
        (Gast aus dem Unternehmen des Lounge-Partners)
        Bitte senden sie das ausgefüllte und unterschriebene Bestellformular als eingescanntes
        Dokument per E-Mail an die oben genannte E-Mail Adresse zurück.
        Die Bestätigung erfolgt durch Rücksendung der Auftragsbestätigung per E-Mail
        an die durch den Kunden in Ziffer 3 angegebene E-Mail Adresse.
        COLOGNE OPEN GmbH & Co. KG | Heumarkt 20 | DE-50667 KölnGeschäftsführung:
        COLOGNE OPEN Verwaltungs GmbH | vertreten durch:
        Geschäftsführer Oliver MuellerHandelsregister Köln HRA 33996 | Sitz der Gesellschaft: Köln
    BestellformularLounge Partner-Paket – COLOGNE OPEN 20202.
    GEGENLEISTUNGDES KUNDENDie Zahlung des sich aus Ziffer 1 ergebenden
     Betrages erfolgt durch Überweisung innerhalb von  7 (sieben) Tagen nach Erhalt
      der Rechnung durch die COLOGNE OPENGmbH & Co. KG auf folgendes Bankkonto:
      COLOGNE OPEN GmbH & Co. KG I DEUTSCHE BANKIBAN:
      DE07 3707 0060 0335 3083 00I BIC:DEUTDEDKXXXDie bestellten
      Tickets werden nur gegen Vorkasse und bis maximal 3 (drei) Tage vor dem Spieltag
       an den Kunden versendet. Sollte noch kein Zahlungseingang erfolgt sein, oder die
        Versendung aus Zeitgründen nicht mehr möglich sein, werden die Business-Seat
         Tickets zur Abholung an der Hinterlegungskasse des Turniergeländes am gewählten
          Veranstaltungstag hinterlegt. Für Rückfragen wenden Sie sich bitte an die oben
           genannte Telefonnummer.
           3. KUNDE, RECHNUNGS- / LIEFERANSCHRIFT
           Firma:${company}PLZ, Ort:${postalCode}
           Name:${firstName}Telefon:${phone}
           Vorname:${lastName}E-Mail:${email}
           Straße:${street}Fax:${fax}
           Mit meiner Unterschrift bestätige ich die Bestellung der aufgelisteten Business-Seat-Tickets
            und die Richtigkeit der vorstehenden Angaben. Außerdem akzeptiere ich die Allgemeinen
             Ticket-Geschäftsbedingungen (ATGB). Bei Widersprüchen zwischen den vorgenannten ATGBs
              und den Bestimmungen dieses Bestellformulars haben die Bestimmungen dieses Bestellformulars Vorrang.
              Datum, Stempel & Unterschrift des Kunden: ____________________________________________
              COLOGNE OPEN GmbH & Co. KG | Heumarkt 20 | DE-50667 KölnGeschäftsführung: COLOGNE OPEN
              Verwaltungs GmbH | vertreten durch: Geschäftsführer Oliver MuellerHandelsregister Köln
              HRA 33996 | Sitz der Gesellschaft: Köln`
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
    sunday: string
  ) => ({
    from: "The CGN Team",
    subject: `CGN Ticket`,
    text: `CGN Ticket`,
    html: `BestellformularBusiness Seats – COLOGNE OPEN 2020
COLOGNE OPEN GmbH & Co. KGTelefon:+49 (0) 2208 – 921451
- 0Heumarkt 20DE-50667 KölnE-Mail:network@cgnopen.com1.
 BESTELLUNGHiermit bestellt der Kunde (siehe Ziffer 3) bei der COLOGNE OPEN GmbH & Co. KG
 _____ „Business-Seat Pakete á zwei Seats*“ zum Preis von € 390.- (zzgl. 19% MwSt.) /
 Tag*je zwei komfortable Sitzplätze am Center Court inkl. Zugänge zum Hospitality-Bereich,
  ein reservierter Parkplatz, Gourmet-Catering (Kalt-Warmes-Buffet, alkoholfreie Getränke,
    Kölsch, Wein), Servicezeit ab 1h vor dem ersten bis 1h nach dem letzten Match des Tages,
    Nutzung des Hospitality-Eingangs und –Empfangs (bspw. zur Hinterlegung der Tickets).
    Für folgende Tage (genaue Anzahl der Pakete pro jeweiligem Tag bitte eintragen):
    ${monday} ${tuesday} ${wednesday} ${thursday} ${friday} ${saturday} ${sunday}
    Bitte senden Sie uns das ausgefüllte und unterschriebene Bestellformular als eingescanntesDokument
    per E-Mail an die oben genannte E-Mail Adresse zurück. Die Bestätigungerfolgt durch Rücksendung
    der Auftragsbestätigung per E-Mail an die durch den Kunden in Ziffer 3 angegebene
    E-Mail Adresse.2. GEGENLEISTUNGDES KUNDENDie Zahlung des sich aus Ziffer 1 ergebenden
    Betrages erfolgt durch Überweisung innerhalb von  7 (sieben) Tagen nach Erhalt der Rechnung
    durch die COLOGNE OPENGmbH & Co.
    KG auf folgendes Bankkonto: COLOGNE OPEN GmbH & Co. KG I DEUTSCHE BANKIBAN:
    DE07 3707 0060 0335 3083 00I BIC:DEUTDEDKXXXDie bestellten Business-Seat-Tickets
    werden nur gegen Vorkasse und bis maximal 3 (drei) Tage vor dem Spieltag an den
    Kunden versendet. Sollte noch kein Zahlungseingang erfolgt sein, oder die Versendung
    aus Zeitgründen nicht mehr möglich sein, werden die Business-Seat Tickets zur Abholung
    an der Hinterlegungskasse des Turniergeländes am gewählten Veranstaltungstag hinterlegt.
    Für Rückfragen wenden Sie sich bitte an die oben genannte Telefonnummer.
    3. KUNDE, RECHNUNGS- / LIEFERANSCHRIFT
    Firma:${company}PLZ, Ort:${postalCode}
    Name:${firstName}Telefon:${phone}
    Vorname:${lastName}E-Mail:${email}
    Straße:${street}Fax:${fax}
    Mit meiner Unterschrift bestätige ich die Bestellung der aufgelisteten Business-Seat-Tickets
    und die Richtigkeit der vorstehenden Angaben. Außerdem akzeptiere ich die Allgemeinen
    Ticket-Geschäftsbedingungen (ATGB). Bei Widersprüchen zwischen den vorgenannten ATGBs
    und den Bestimmungen dieses Bestellformulars haben die Bestimmungen dieses Bestellformulars
    Vorrang.COLOGNE OPEN GmbH & Co. KG | Heumarkt 20 | DE-50667 KölnGeschäftsführung:
    COLOGNE OPEN Verwaltungs GmbH | vertreten durch: Geschäftsführer Oliver MuellerHandelsregister
    Köln HRA 33996 | Sitz der Gesellschaft: KölnSamstagSonntagMontagDienstagMittwochDonnerstagFreitagSamstag
BestellformularBusiness Seats – COLOGNE OPEN 2020Datum,
Stempel & Unterschrift des Kunden: ____________________________________________
COLOGNE OPEN GmbH & Co. KG | Heumarkt 20 | DE-50667 KölnGeschäftsführung:
COLOGNE OPEN Verwaltungs GmbH | vertreten durch: Geschäftsführer Oliver MuellerHandelsregister
 Köln HRA 33996 | Sitz der Gesellschaft: Köln`
  }),
  NEW_NEWSLETTER_EMAIL: (email: string) => ({
    from: "The CGN Team",
    subject: `CGN Newsletter`,
    text: `CGN Newsletter`,
    html: `Dear ${email}.
      CGN Newsletter TEMPLATE
      Thank You
      The CGN Team`
  }),
  NEW_NEWSLETTER_NAME: (firstName: string) => ({
    from: "The CGN Team",
    subject: `CGN Newsletter`,
    text: `CGN Newsletter`,
    html: `Dear ${firstName}.
      CGN Newsletter TEMPLATE
      Thank You
      The CGN Team`
  }),
  NEW_CONTACT_NAME: (firstName: string) => ({
    from: "The CGN Team",
    subject: `CGN Contact`,
    text: `CGN Contact`,
    html: `Dear ${firstName}.
      CGN Team received your form.
      Thank You
      The CGN Team`
  }),
  NEW_CONTACT_EMAIL: (email: string) => ({
    from: "The CGN Team",
    subject: `CGN Contact`,
    text: `CGN Contact`,
    html: `Dear ${email}.
      CGN Team received your form.
      Thank You
      The CGN Team`
  })
};

export default MAIL_OPTIONS;
