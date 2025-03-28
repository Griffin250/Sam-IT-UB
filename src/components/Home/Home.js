import samEydeVgs from "../../assets/otherImages/Sameyde.vgs.jpg";
import BlogPosts from "../../pages/BlogPost";
import Product from "../../pages/Product";
import ShowCase from "../../pages/ShowCase";
import WhoAreWe from "../../pages/WhoAreWe";
import { Button } from "primereact/button";
import ConsultationBanner from "../ConsultationBanner";
import ContactForm from "../ContactForm";
import FaqPage from "../../pages/Faq";
import { useTranslation } from "react-i18next";

const links = [
  { name: "Open roles", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "/aboutUs" },
];
const stats = [
  { name: "Offices ", value: "1" },
  { name: "Dedicated colleagues", value: "4" },
  { name: "Hours per week", value: "25+" },
  { name: "Client Satisfaction", value: "94%" },
];

export default function Example() {
  const { t } = useTranslation()
  return (
    <>
      <WhoAreWe />
      <ShowCase />
      <ConsultationBanner />
      <Product />

      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          alt=""
          src={samEydeVgs}
          className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center opacity-20"
        />
        <div className="absolute inset-0 bg-orange-300 opacity-20 -z-10"></div>
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#f79b54] to-[#e9cf3e] opacity-50 "
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#cb8957] to-[#e18743] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center align-middle justify-center">
          <div className="m-auto max-w-4xl">
            <h2 className="text-2xl font-semibold  text-white sm:text-6xl text-center m-auto">
              {t("digitalJourney.h2")}
            </h2>
            <p className="mt-8 text-pretty text-2xl font-medium justify-center flex text-gray-300 sm:text-xl/8">
            {t("digitalJourney.p")}
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse gap-1">
                  <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                  <dd className="text-4xl font-semibold tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-bl from-blue-200 via-gray-200 to-blue-100 py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
        
          <h2 className="text-3xl md:text-5xl sm:text-4xl font-bold mb-2 text-gray-800">
            {t("dreamsToLife.title")}
          </h2>
       
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
           {t("dreamsToLife.intro1")}<br />
            {t("dreamsToLife.intro2")}
          </p>
        </div>
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {/* Push to Deploy */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer dream_card dream_card">
            <h3 className="text-xl font-bold mb-2 text-gray-700">
            {t("dreamsToLife.1h3")}
              
            </h3>
            <p className=" ">
            {t("dreamsToLife.1p1")}
             <br />
             {t("dreamsToLife.1p2")}
            </p>
          </div>

          {/* SSL Certificates */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer dream_card">
            <h3 className="text-xl font-bold mb-2 text-gray-700">
            {t("dreamsToLife.2h3")}
            </h3>
            <p className="">
            {t("dreamsToLife.2p1")}
              <br />
              {t("dreamsToLife.2p2")}
            </p>
          </div>
          {/* Simple Queues */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer dream_card">
            <h3 className="text-xl font-bold mb-2 text-gray-700">
            {t("dreamsToLife.3h3")}
            </h3>
            <p className="">
            {t("dreamsToLife.3p1")} 
              <br />
              {t("dreamsToLife.3p2")}
            </p>
          </div>
          {/* Advanced Security */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer hover:ease-in-out dream_card">
            <h3 className="text-xl font-bold mb-2 text-gray-700">
            {t("dreamsToLife.4h3")}
            </h3>
            <p className="">
            {t("dreamsToLife.4p1")}
              <br />
            {t("dreamsToLife.4p2")}
            </p>
          </div>
        </div>
      </div>
      <BlogPosts />

      <div className="surface-0 text-700 text-center p-4 sm:p-8 md:p-12 lg:p-20 bg-gradient-to-br from-blue-100 via-blue-200 to-gray-100">
        <div className="bg-gradient-to-r from-blue-600 via-purple-700 80% to-blue-500 bg-clip-text text-transparent font-bold mt-4 mb-8">
          <i className="pi pi-discord text-2xl sm:text-3xl"></i>&nbsp;
          <span className="text-lg sm:text-2xl md:text-3xl bg-gradient-to-r from-orange-600 via-blue-400 to-orange-500 bg-clip-text text-transparent">
            {" "}
            {t("discordBanner.title1")}
          </span>
        </div>

        <div className="text-900 font-bold text-2xl sm:text-4xl md:text-5xl mb-3">
           {t("discordBanner.title2")}
        </div>

        <div className="text-700 text-xl sm:text-2xl mb-4 sm:mb-8 mt-4 sm:mt-5 w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2 m-auto">
        <p> 
        {t("discordBanner.p")}
        </p>
        </div>

        <a href="https://discord.gg/sBrzuMpt" className="" target="blank">
          {" "}
          <Button
            label="Join Now"
            icon="pi pi-discord"
            className="font-bold px-4 sm:px-5 py-3 p-button-raised p-button-rounded white-space-nowrap bg-gradient-to-r from-orange-600 via-purple-700 to-orange-500 hover:bg-gradient-to-r hover:from-purple-600 hover:via-orange-700 hover:to-purple-500 transition duration-75"
          />
        </a>
      </div>
      <FaqPage />
      <ContactForm />
    </>
  );
}
