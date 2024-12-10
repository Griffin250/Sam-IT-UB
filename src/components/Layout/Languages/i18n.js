import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translations
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
      features: {
        itSupport: "IT Support",
        itSupportDescription:
          "Computer & Network Setup, Management and Support. Vendor Coordination.",
        managedServices: "Managed Services",
        managedServicesDescription:
          "IT System Planning and Maintenance. Proactive Monitoring. On-Demand Support.",
        security: "Security",
        securityDescription:
          "Malware Protection. Monitoring. Vulnerability Analysis. Data Recovery Planning.",
        helpDesk: "Help Desk",
        helpDeskDescription: "Direct Support to End Users.",
      },
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
      features: {
        itSupport: "IT-støtte",
        itSupportDescription:
          "Oppsett, administrasjon og støtte for datamaskiner og nettverk. Leverandørkoordinering.",
        managedServices: "Administrerte Tjenester",
        managedServicesDescription:
          "Planlegging og vedlikehold av IT-systemer. Proaktiv overvåking. Støtte på forespørsel.",
        security: "Sikkerhet",
        securityDescription:
          "Beskyttelse mot skadelig programvare. Overvåking. Sårbarhetsanalyse. Planlegging for datagjenoppretting.",
        helpDesk: "Brukerstøtte",
        helpDeskDescription: "Direkte støtte til sluttbrukere.",
      },
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
