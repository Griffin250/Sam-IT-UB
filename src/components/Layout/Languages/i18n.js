import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {

      
      //English Translation for Service page
      serviceTitle: "The Service You Deserve,",
      serviceSubtitle: "The Service We Give!",
      serviceDescription:
        "We provide tailored IT solutions with a focus on innovation, security, and scalability. From expert tech support to custom web development, our dedicated team ensures your technology works seamlessly for you.",
      curiousAbout: "Curious about how SAM-IT UB can transform your digital experience?",
      findOutNow: "Find Out",
      exploreWork: "Explore our work in action and see why businesses and individuals trust us to drive their success!",
      liveDemonstartion: "Live Demo",
      ourServices: "Our Services",
      serviceHeading: "The Best Defense is a Good Offense.",
      serviceDetails:
        "As a leading Managed Service Provider in Agder, Sam-IT Technology Solutions partners with clients to take a proactive role in your IT. We mitigate problems before they happen. When issues do arise, your team will have 24/7/365 access to IT support and a live Help Desk.",
      itSupport: "IT Support",
      managedServices: "Managed Services",
      security: "Security",
      helpDesk: "Help Desk",


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

//English Translation for WhoWeAre page

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

       //English Translation for ChooseSamIT UB  section
"chooseSamIT":{
  "h1": "Why choose Sam-IT?",
  "wrapper1": "Each of our clients has a dedicated contact; get the same person every time you call.",
  "wrapper2": "Lost time equals lost revenue. We respond immediately when issues occur.",
  "wrapper3": "A good plan mitigates many possible issues. We tailor your IT plan to meet your needs.",
  "wrapper4": "We are a Certified Solutions Expert for 20+ leading vendors.",
  "wrapper5": "We work as an extension of your team. We’ll help you reach your goals."
},

      //English Translation for About Us page
      about_us: {
        title: "About Sam-IT UB",
        intro1:
          "SAM-IT is a student-driven company offering IT user support and development services for both individuals and businesses. We provide efficient, reliable solutions for your digital needs, whether it’s technical support or web development.",
        intro2:
          "We combine innovative thinking with hands-on expertise to provide high-quality IT services. Our team of dedicated students focuses on scalability, security, and seamless solutions, ensuring your business operates smoothly in today’s tech-driven world. From tailored web applications to personalized support, we’re here to enhance your digital experience and help you succeed.",
        mission_title: "Our Mission",
        mission:
          "Our mission is to empower businesses and individuals with innovative IT strategies and solutions that streamline processes, enhance productivity, and foster growth.",
        vision_title: "Our Vision",
        vision:
          "To be the trusted partner for businesses around Agder, offering cutting-edge IT solutions and consultancy that drive innovation and success.",
        why_choose_us: "Why Choose Us?",
        expert_team_title: "Expert Team",
        expert_team_desc:
          "Work with industry-leading professionals dedicated to providing exceptional IT solutions.",
        tailored_solutions_title: "Tailored Solutions",
        tailored_solutions_desc:
          "Receive customized strategies designed to meet your unique business challenges.",
        proven_results_title: "Proven Results",
        proven_results_desc:
          "Benefit from solutions that deliver measurable success for our clients.",
        cta_title: "Ready to Partner With Us?",
        cta_desc:
          "Let’s transform your business with expert IT solutions and consultancy.",
        contact_us: "Contact Us",
  
      },
      

//English Translation for Product page
  "product": {
    "header": "Discover Your Perfect Gadget",
    "subHeader": "Whether you need a laptop for school, business, gaming, or personal work, our experts can help you choose the best quality product to meet your needs.",
    "imageAlt": "Consultation Service",
    "whyChooseUs": {
      "title": "Why Choose Us?",
      "point1": "Personalized recommendations tailored to your needs.",
      "point2": "Expert guidance to ensure top quality and value.",
      "point3": "Access to exclusive deals and trusted brands.",
      "point4": "Save time and avoid confusion with professional advice."
    },
    "cta": {
      "title": "Still not sure? Let our experts guide you!",
      "subText": "Book a free consultation, and we'll help you make an informed decision based on your specific needs.",
      "buttonText": "Talk to an Expert"
    }
  },


  //English Translation for Faq Page
"faq": {
    "pageTitle": "Frequently Asked Questions",
    "pageDescription": "Answered all frequently asked questions,",
    "pageStillConfused": "Still confused?",
    "contactLinkText": "Feel free to contact us.",
    "servicesQuestion": "What services does your consultancy offer?",
    "servicesAnswer": "We offer a wide range of consultancy services including business strategy, market analysis, financial planning, and operational efficiency.",
    "needConsultantQuestion": "How do I know if I need a consultant?",
    "needConsultantAnswer": "If you're facing challenges in your business, seeking to improve efficiency, or looking for expert advice to drive growth, a consultant can provide valuable insights and solutions.",
    "engagementProcessQuestion": "What is the process for engaging your consultancy services?",
    "engagementProcessAnswer": "The process typically starts with an initial consultation to understand your needs, followed by a detailed proposal outlining our approach, timeline, and costs.",
    "industrySpecificQuestion": "Are your consultancy services industry-specific?",
    "industrySpecificAnswer": "Our consultants have experience across various industries, allowing us to provide tailored solutions that are relevant to your specific business sector.",
    "businessPerformanceQuestion": "How can consultancy services help improve my business performance?",
    "businessPerformanceAnswer": "Consultancy services can identify inefficiencies, provide strategic advice, and implement best practices, all of which contribute to improved business performance and growth."
  },

//English Translation for banner page
"banner":{
  "title1": "When it comes to your IT, everything is mission critical.",
  "title2": "We stand by the expertise and consulting we provide.",
  "bookingBtn": "BOOK A CONSULTATION",
},

 //Enlish Translation for DreamsToLife section
 "dreamsToLife" : {
  "title": " Lets bring your Dreams to Life",
  "intro1": " We provide everything you need to develop, deploy, and maintain your applications seamlessly.",
  "intro2": " Our team is here to help you at every step, from concept to launch, ensuring you have the right tools and support to achieve your goals. ",
  "1h3": " Push to deploy",
  "1p1": " Easily bring your applications to life with our streamlined deployment services. With just a few steps, your app can be live and accessible.",
  "1p2": " Our platform simplifies the deployment process so you can focus on what truly matters — building a great product.",
  "2h3": " SSL certificates",
  "2p1": " We take security seriously. All our services come with SSL certificates to protect your app and user data, ensuring a secure environment and building trust with your users.",
  "2p2": "Enjoy peace of mind knowing your application meets industry security standards. ",
  "3h3": " Reliable Support",
  "3p1": " Our team is dedicated to providing you with responsive, knowledgeable support.",
  "3p2": "   Whether it’s troubleshooting or guidance on best practices, we're here to assist you every step of the way so you can focus on your core business.",
  "4h3": " Advanced security",
  "4p1": " Safeguard your application with advanced security measures tailored to your needs.",
  "4p2": "We provide multi-layered protection, monitoring, and proactive threat management to keep your data and users safe from vulnerabilities. ",

},

 //English Translation for digital Journey banner
 "digitalJourney": {
  "h2": "Empowering Your Digital Journey",
  "p": "We believe in building lasting partnerships with our clients. Our team is dedicated to providing personalized solutions that meet your - unique business needs, delivering exceptional service and support every step of the way."
  },
  
  //English Translation for blog section
"blog" :{
  "blogTitle": "Latest News and Blog Posts",
  "blogDesc": "Stay up to date with what's happening with our latest posts ",
  "blog_1_h2": "Our Office Location ",
  "blog_1_h3": " Welcom to our offices in Arendal",
  "blog_1_p1": "  At Sam-IT UB, we're excited to announce our expanded presence in Arendal, where we continue to offer IT support and solutions to everyone.",
  "blog_1_p2": " Our new office in Arendal serves as a hub for innovation and collaboration, where... ",
  "blogLink": "Learn More...",

"blog_2_h2": " User Support",
"blog_2_h3": "5 Common IT Problems and How to Solve them ",
"blog_2_p": " Sam-IT UB provides reliable IT support services, including troubleshooting, software installation, and cybersecurity. Our team ensures smooth and secure operations... ",



"blog_3_h2": " Upcoming Event!",
"blog_3_h3": " IT Networking Event at Sam Eyde Vgs ",
"blog_3_p": " We at Sam-IT UB are excited to announce that we will be present at the TECH scene's new offices at Sam Eyde High School, where we will... ",

"blog_4_h2": "The Future of IT ",
"blog_4_h3": " Trends to Watch in 2024 and Beyond",
"blog_4_p": "  As technology evolves rapidly, staying ahead of key IT trends in 2024 and beyond is crucial for businesses and individuals to maintain a competitive edge and therefore, Sam-IT is...",

"blog_5_h2": "Are You Hiring an IPS? ",
"blog_5_h3": " What to Look for When Choosing an IT Service Provider",
"blog_5_p": "  It is important to find an employer that aligns with your values and work style. If you value work-life balance, you should...",

"blog_6_h2": "Upcoming Event! ",
"blog_6_h3": "  Slush'D Energy 2025-Are Your Coming?",
"blog_6_p": " Digin is co-hosting Slush'D Energy on March 12, 2025, in Mandal, bringing together startups, investors, and industry leaders to focus on sustainability, clean-tech, energy, AI...",

"blog_7_h2": " Sam-IT UB Day",
"blog_7_h3": "Launching Our Project Posters to the Public ",
"blog_7_p": " Sam-IT UB are thrilled to announce that we will soon begin distributing our project posters as part of our advertising campaign.... ",

"blog_8_h2": "Cyber Security ",
"blog_8_h3": " Cybersecurity Best Practices for Businesses ",
"blog_8_p": "  In today’s digital world, protecting your business from cyber threats is vital. Sam-IT UB wants to share key practices to secure data, prevent breaches, and keep your business...",
  },

  //English Translation for discord banner
  "discordBanner":{
    "title1": "POWERED BY INNOVATION",
    "title2": "Join Our Discord Support Community",
    "p": "Join our community on Discord for seamless tech support and personalized assistance, and experience the difference SAM-IT can make in driving your digital success!"
  },
    },
  },



//.......................................................................................................//

//.......................................................................................................//


//Nosrk Translation for Service page
  no: {
    translation: {
      serviceTitle: "Tjenesten du fortjener,",
      serviceSubtitle: "Tjenesten vi gir!",
      serviceDescription:
        "Vi tilbyr skreddersydde IT-løsninger med fokus på innovasjon, sikkerhet og skalerbarhet. Fra ekspert teknisk støtte til tilpasset webutvikling, vårt dedikerte team sørger for at teknologien fungerer sømløst for deg.",
      curiousAbout: "Nysgjerrig på hvordan SAM-IT UB kan transformere din digitale opplevelse?",
      findOutNow: "Finn ut",
      exploreWork: "Utforsk arbeidet vårt i praksis og se hvorfor bedrifter og enkeltpersoner stoler på oss for å drive deres suksess!",
      liveDemonstartion: "Live Demo",
      ourServices: "Våre tjenester",
      serviceHeading: "Det beste forsvaret er et godt angrep.",
      serviceDetails:
        "Som en ledende tjenesteleverandør i Agder samarbeider Sam-IT Technology Solutions med kunder for å ta en proaktiv rolle i din IT. Vi begrenser problemer før de oppstår. Når problemer oppstår, vil teamet ditt ha tilgang til IT-støtte og en live Help Desk hele døgnet.",
      itSupport: "IT-støtte",
      managedServices: "Administrerte tjenester",
      security: "Sikkerhet",
      helpDesk: "Hjelp",


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



    //Norsk Translation for WhoWeAre page
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

      //Norsk Translation for ChooseSamIT UB  section
"chooseSamIT":{
  "h1": "Hvorfor Velge Sam-IT?",
  "wrapper1": "Hver av våre kunder har en dedikert kontakt; få samme person hver gang du Ringer.",
  "wrapper2": "Tapt tid er lik tapt inntekt. Vi svarer umiddelbart når problemer oppstår!.",
  "wrapper3": "En god plan reduserer mange mulige problemer. Vi skreddersyr din IT-plan for å møte dine behov.",
  "wrapper4": "Vi jobber som en forlengelse av teamet ditt. Vi hjelper deg med å nå dine mål",
},

 //Norsk Translation for About Us page
      about_us: {
        title: "Om Sam-IT UB",
        intro1:
          "SAM-IT er et studentdrevet selskap som tilbyr IT-brukerstøtte og utviklingstjenester for både enkeltpersoner og bedrifter. Vi tilbyr effektive, pålitelige løsninger for dine digitale behov, enten det gjelder teknisk support eller webutvikling.",
        intro2:
          "Vi kombinerer innovativ tenkning med praktisk ekspertise for å levere IT-tjenester av høy kvalitet. Vårt team av dedikerte studenter fokuserer på skalerbarhet, sikkerhet og sømløse løsninger, og sørger for at din virksomhet fungerer problemfritt i dagens teknologidrevne verden. Fra skreddersydde webapplikasjoner til personlig støtte, er vi her for å forbedre din digitale opplevelse og hjelpe deg å lykkes.",
        mission_title: "Vårt Oppdrag",
        mission:
          "Vårt oppdrag er å styrke bedrifter og enkeltpersoner med innovative IT-strategier og løsninger som effektiviserer prosesser, øker produktiviteten og fremmer vekst.",
        vision_title: "Vår Visjon",
        vision:
          "Å være den pålitelige partneren for bedrifter i Agder, som tilbyr banebrytende IT-løsninger og rådgivning som driver innovasjon og suksess.",
        why_choose_us: "Hvorfor Velge Oss?",
        expert_team_title: "Ekspertteam",
        expert_team_desc:
          "Jobb med bransjeledende fagfolk som er dedikert til å levere eksepsjonelle IT-løsninger.",
        tailored_solutions_title: "Skreddersydde Løsninger",
        tailored_solutions_desc:
          "Få tilpassede strategier designet for å møte dine unike forretningsutfordringer.",
        proven_results_title: "Beviste Resultater",
        proven_results_desc:
          "Dra nytte av løsninger som gir målbar suksess for våre kunder.",
        cta_title: "Klar til å Samarbeide Med Oss?",
        cta_desc:
          "La oss transformere virksomheten din med ekspert IT-løsninger og rådgivning.",
        contact_us: "Kontakt Oss",
      },

//Nosrk Translation for Product page
"product": {
    "header": "Finn den perfekte Dingsen",
    "subHeader": "Enten du trenger en bærbar PC til skole, jobb, gaming eller personlig bruk, kan våre eksperter hjelpe deg med å velge det beste produktet for dine behov.",
    "imageAlt": "Konsultasjonstjeneste",
    "whyChooseUs": {
      "title": "Hvorfor velge oss?",
      "point1": "Personlige anbefalinger tilpasset dine behov.",
      "point2": "Ekspertråd for å sikre topp kvalitet og verdi.",
      "point3": "Tilgang til eksklusive tilbud og pålitelige merker.",
      "point4": "Spar tid og unngå forvirring med profesjonelle råd."
    },
    "cta": {
      "title": "Fortsatt usikker? La våre eksperter veilede deg!",
      "subText": "Bestill en gratis konsultasjon, så hjelper vi deg med å ta en informert beslutning basert på dine spesifikke behov.",
      "buttonText": "Snakk med en ekspert"
    }
  },

  //Norsk Translation for Faq Page
  "faq": {
    "pageTitle": "Ofte Stilte Spørsmål",
    "pageDescription": "Svar på de vanligste spørsmålene,",
    "pageStillConfused": "Er du fortsatt forvirret?",
    "contactLinkText": "Kontakt oss gjerne.",
    "servicesQuestion": "Hvilke tjenester tilbyr konsulentene deres?",
    "servicesAnswer": "Vi tilbyr et bredt spekter av konsulenttjenester, inkludert forretningsstrategi, markedsanalyse, økonomisk planlegging og operasjonell effektivitet.",
    "needConsultantQuestion": "Hvordan vet jeg om jeg trenger en konsulent?",
    "needConsultantAnswer": "Hvis du står overfor utfordringer i virksomheten din, ønsker å forbedre effektiviteten eller leter etter ekspertråd for å drive vekst, kan en konsulent gi verdifulle innsikter og løsninger.",
    "engagementProcessQuestion": "Hva er prosessen for å engasjere konsulenttjenester?",
    "engagementProcessAnswer": "Prosessen starter vanligvis med en innledende konsultasjon for å forstå dine behov, etterfulgt av et detaljert forslag som skisserer vår tilnærming, tidslinje og kostnader.",
    "industrySpecificQuestion": "Er konsulenttjenestene deres bransjespesifikke?",
    "industrySpecificAnswer": "Våre konsulenter har erfaring fra ulike bransjer, noe som gjør at vi kan tilby skreddersydde løsninger som er relevante for din spesifikke virksomhet.",
    "businessPerformanceQuestion": "Hvordan kan konsulenttjenester bidra til å forbedre virksomhetens ytelse?",
    "businessPerformanceAnswer": "Konsulenttjenester kan identifisere ineffektivitet, gi strategiske råd og implementere beste praksis, noe som bidrar til forbedret forretningsytelse og vekst."
  },
  

  //Norsk Translation for Consultation banner Page
    "banner": {
      "title1": "Når det gjelder IT-en din, er alt kritisk for suksess.",
      "title2": "Vi står bak den ekspertisen og rådgivningen vi tilbyr.",
      "bookingBtn": "BESTILL EN KONSULTASJON",
    },
 //Norsk Translation for digital Journey banner
  "digitalJourney": {
    "h2": "Styrk Din Digitale Reise",
    "p": "Vi tror på å bygge varige partnerskap med våre kunder. Vår teamet er dedikert til å tilby personlige løsninger som møtes dine - unike forretningsbehov, levere eksepsjonell service og støtte hvert steg på veien."
    },
    
 //Norsk Translation for DreamsToLife section
 "dreamsToLife" : {
  "title": " La oss gjøre Drømmene dine til Virkelighet ",
  "intro1": " Vi tilbyr alt du trenger for å utvikle, distribuere og vedlikeholde applikasjonene dine sømløst.",
  "intro2": " Teamet vårt er her for å hjelpe deg på hvert trinn, fra konsept til lansering, for å sikre at du har de riktige verktøyene og støtten for å nå dine mål. ",
  "1h3": " Trykk for å Distribuere",
  "1p1": " Få applikasjonene dine til live med våre strømlinjeformede distribusjonstjenester. Med bare noen få trinn kan appen din være live og tilgjengelig.",
  "1p2": " Plattformen vår forenkler distribusjonsprosessen slik at du kan fokusere på det som virkelig betyr noe – å bygge et flott produkt.",
  "2h3": " SSL Sertifikater",
  "2p1": " Vi tar sikkerhet på alvor. Alle tjenestene våre kommer med SSL-sertifikater for å beskytte appen og brukerdataene dine, for å sikre et sikkert miljø og bygge tillit hos brukerne dine.",
  "2p2": "Nyt trygghet når du vet at applikasjonen din oppfyller bransjesikkerhetsstandarder.",
  "3h3": " Pålitelig Støtte",
  "3p1": " Teamet vårt er dedikert til å gi deg responsiv, kunnskapsrik støtte.",
  "3p2": "Enten det er feilsøking eller veiledning om beste praksis, er vi her for å hjelpe deg hele veien slik at du kan fokusere på kjernevirksomheten din.",
  "4h3": " Avansert Sikkerhet",
  "4p1": " Beskytt applikasjonen din med avanserte sikkerhetstiltak skreddersydd for dine behov.",
  "4p2": "Vi tilbyr flerlags beskyttelse, overvåking og proaktiv trusselhåndtering for å holde dataene dine og brukerne dine trygge mot sårbarheter.",

},
//Norsk Translation for blog section
"blog" :{
"blogTitle": " Siste Nyheter og Blogginnlegg ",
"blogDesc": "Hold deg oppdatert på hva som skjer med våre siste innlegg ",
"blog_1_h2": "Vårt kontorsted",
"blog_1_h3": "Velkommen til våre kontorer i Arendal",
"blog_1_p1": "På Sam-IT UB er vi glade for å kunngjøre vår utvidede tilstedeværelse i Arendal, hvor vi fortsetter å tilby IT-støtte og løsninger til alle.",
"blog_1_p2": "Vårt nye kontor i Arendal fungerer som et knutepunkt for innovasjon og samarbeid, hvor... ",
"blogLink": "Les Mer...",

"blog_2_h2": " Brukerstøtte",
"blog_2_h3": " 5 Vanlige IT-problemer og hvordan du løser dem",
"blog_2_p": "Sam-IT UB tilbyr pålitelige IT-støttetjenester, inkludert feilsøking, programvareinstallasjon og cybersikkerhet. Teamet vårt sørger for jevn og sikker drift...",

"blog_3_p1": " ",
"blog_3_h3": " IT Nettverksarrangement på Sam Eyde Vgs",
"blog_3_h2": "Kommende Arrangement! ",
"blog_3_p": " Vi i Sam-IT UB er glade for å annonsere at vi vil være tilstede på TECH-scenens nye kontorer ved Sam Eyde videregående skole, hvor vi...",

"blog_4_h2": "Fremtiden til IT ",
"blog_4_h3": "Trender å se i 2024 og utover ",
"blog_4_p": " Ettersom teknologien utvikler seg raskt, er det avgjørende for bedrifter og enkeltpersoner å holde seg i forkant av viktige IT-trender i 2024 og fremover for å opprettholde et konkurransefortrinn, og derfor er Sam-IT...",

"blog_5_h2": "Ansetter du en IPS? ",
"blog_5_h3": "Hva du bør se etter når du velger en IT-tjenesteleverandør ",
"blog_5_p": " Det er viktig å finne en arbeidsgiver som er i tråd med dine verdier og arbeidsstil. Hvis du verdsetter balanse mellom arbeid og privatliv, bør du...",

"blog_6_h2": " Kommende Arrangement!",
"blog_6_h3": "Slush'D Energy 2025 – Kommer du? ",
"blog_6_p": " Digin er vertskap for Slush'D Energy 12. mars 2025 i Mandal, og samler startups, investorer og industriledere for å fokusere på bærekraft, clean-tech, energi, AI...",

"blog_7_h2": " Sam-IT UB-dagen",
"blog_7_h3": "Lansering av prosjektplakatene våre for publikum ",
"blog_7_p": " Sam-IT UB er glade for å kunngjøre at vi snart vil begynne å distribuere prosjektplakatene våre som en del av vår reklamekampanje....",

"blog_8_h2": " Cyber Sikkerhet",
"blog_8_h3": " Beste praksis for cybersikkerhet for bedrifter",
"blog_8_p": " I dagens digitale verden er det viktig å beskytte virksomheten din mot cybertrusler. Sam-IT UB ønsker å dele nøkkelpraksis for å sikre data, forhindre brudd og holde virksomheten din... ",
},

//Norsk Translation for discord banner
    "discordBanner":{
      "title1": "DREVET AV INNOVASJON",
      "title2": "Bli med i Discord Support Community",
      "p": "Bli med i fellesskapet vårt på Discord for sømløs teknisk støtte og personlig assistanse, og opplev forskjellen SAM-IT kan gjøre i å drive din digitale suksess!"
    },
      
    },
  },
};


// Initialize i18n
i18n.use(initReactI18next).init({
  resources,
  lng: "no", // Default language
  fallbackLng: "no",
  interpolation: {
    escapeValue: false, 
  },
});

export default i18n;
