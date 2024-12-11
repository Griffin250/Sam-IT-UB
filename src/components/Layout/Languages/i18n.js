import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      servicesHeading: "Our Services",
      servicesSubtitle: "The Best Defense is a Good Offense.",
      servicesDescription: `
        As a leading Managed Service Provider in Agder, Sam-IT Technology
        Solutions partners with clients to take a proactive role in your IT.
        We mitigate problems before they happen. When issues do arise, your team
        will have 24/7/365 access to IT support and a live Help Desk.`,
      theServiceYouDeserve: "The Service You Deserve",
      theServiceWeGive: "The Service We Give!",
      curiousAboutTransform: "Curious about how SAM-IT UB can transform your digital experience?",
      findOut: "Find Out",
      exploreOurWork: "Explore our work in action and see why businesses and individuals trust us to drive their success!",
      liveDemo: "Live Demo",
      features: {
        itSupport: "IT Support",
        itSupportDescription: "Computer & Network Setup, Management and Support. Vendor Coordination.",
        managedServices: "Managed Services",
        managedServicesDescription: "IT System Planning and Maintenance. Proactive Monitoring. On-Demand Support.",
        security: "Security",
        securityDescription: "Malware Protection. Monitoring. Vulnerability Analysis. Data Recovery Planning.",
        helpDesk: "Help Desk",
        helpDeskDescription: "Direct Support to End Users.",
      },
      whoAreWeTitle: "Who Are We?",
      whoAreWeDescription: `
        SAM-IT UB is a student-driven company offering IT user support and
        development services for both individuals and businesses. We provide
        efficient, reliable solutions for your digital needs, whether it’s
        technical support or web development.`,
      whoAreWeMoreDescription: `
        We combine innovative thinking with hands-on expertise
        to provide high-quality IT services. Our team of dedicated students
        focuses on scalability, security, and seamless solutions, ensuring
        your business operates smoothly in today’s tech-driven world. From
        tailored web applications to personalized support, we’re here to
        enhance your digital experience and help you succeed.`,
      followUs: "Follow Us and Find Out More!",
    },
  },
  no: {
    translation: {
      servicesHeading: "Våre Tjenester",
      servicesSubtitle: "Det beste forsvaret er et godt angrep.",
      servicesDescription: `
        Som en ledende leverandør av administrerte tjenester i Agder, samarbeider
        Sam-IT Technology Solutions med klienter for å ta en proaktiv rolle i deres IT.
        Vi løser problemer før de oppstår. Når problemer oppstår, vil teamet ditt ha
        tilgang til IT-støtte og en live Help Desk 24/7/365.`,
      theServiceYouDeserve: "Tjenesten Du Fortjener",
      theServiceWeGive: "Tjenesten Vi Gir!",
      curiousAboutTransform: "Er du nysgjerrig på hvordan SAM-IT UB kan transformere din digitale opplevelse?",
      findOut: "Finn Ut",
      exploreOurWork: "Utforsk vårt arbeid i aksjon og se hvorfor bedrifter og enkeltpersoner stoler på oss for å drive deres suksess!",
      liveDemo: "Live Demo",
      features: {
        itSupport: "IT-støtte",
        itSupportDescription: "Oppsett, administrasjon og støtte for datamaskiner og nettverk. Leverandørkoordinering.",
        managedServices: "Administrerte Tjenester",
        managedServicesDescription: "Planlegging og vedlikehold av IT-systemer. Proaktiv overvåking. Støtte på forespørsel.",
        security: "Sikkerhet",
        securityDescription: "Beskyttelse mot skadelig programvare. Overvåking. Sårbarhetsanalyse. Planlegging for datagjenoppretting.",
        helpDesk: "Brukerstøtte",
        helpDeskDescription: "Direkte støtte til sluttbrukere.",
      },
      whoAreWeTitle: "Hvem Er Vi?",
      whoAreWeDescription: `
        SAM-IT UB er et studentdrevet selskap som tilbyr IT-brukerstøtte og
        utviklingstjenester for både enkeltpersoner og bedrifter. Vi tilbyr
        effektive, pålitelige løsninger for dine digitale behov, enten det er
        teknisk støtte eller webutvikling.`,
      whoAreWeMoreDescription: `
        Vi kombinerer innovativ tenkning med praktisk ekspertise
        for å tilby høy kvalitet på IT-tjenester. Vårt team av dedikerte studenter
        fokuserer på skalerbarhet, sikkerhet og sømløse løsninger, og sørger for
        at din virksomhet opererer effektivt i dagens teknologi-drevne verden. Fra
        skreddersydde webapplikasjoner til personlig støtte, er vi her for å
        forbedre din digitale opplevelse og hjelpe deg å lykkes.`,
      followUs: "Følg Oss og Finn Ut Mer!",
    },
  },
};

// Initialize i18n
i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
