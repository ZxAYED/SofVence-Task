import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import facebook from "../../../public/facebook.svg";
import instagram from "../../../public/instagram.svg";
import linkedin from "../../../public/linkedin.svg";
import tiktok from "../../../public/tiktok.svg";
import twitter from "../../../public/twitter.svg";
import youtube from "../../../public/youtube.svg";

export function Footer() {
  const footerSections = [
    {
      title: "Get Support",
      links: [
        { label: "Help Center", href: "/help-center" },
        { label: "Live chat", href: "/live-chat" },
        { label: "Check order status", href: "/check-order-status" },
        { label: "Refunds", href: "/refunds" },
        { label: "Report abuse", href: "/report-abuse" },
      ],
    },
    {
      title: "Payment and protections",
      links: [
        { label: "Safe and easy payments", href: "/safe-and-easy-payments" },
        { label: "Money-back policy", href: "/money-back-policy" },
        { label: "On-time shipping", href: "/on-time-shipping" },
        { label: "After-order protections", href: "/after-order-protections" },
        {
          label: "Product monitoring services",
          href: "/product-monitoring-services",
        },
      ],
    },
    {
      title: "Get Support",
      links: [
        { label: "Request for Quotation", href: "/request-for-quotation" },
        { label: "Membership program", href: "/membership-program" },
        { label: "Forgot.com Logistics", href: "/forgot-logistics" },
        { label: "Sales tax and VAT", href: "/sales-tax-and-vat" },
        { label: "Forgot.com Reads", href: "/forgot-reads" },
      ],
    },
    {
      title: "Get Support",
      links: [
        { label: "Start selling", href: "/start-selling" },
        { label: "Sales Central", href: "/sales-central" },
        {
          label: "Become a verified Supplier",
          href: "/become-verified-supplier",
        },
        { label: "Partnership", href: "/partnership" },
        {
          label: "Download the app for Suppliers",
          href: "/download-app-suppliers",
        },
      ],
    },
  ];

  const socialIcons = [
    { icon: facebook, href: "#" },
    { icon: instagram, href: "#" },
    { icon: linkedin, href: "#" },
    { icon: youtube, href: "#" },
    { icon: tiktok, href: "#" },
    { icon: twitter, href: "#" },
  ];

  return (
    <footer className="bg-[#0B1321] pb-20 mt-20 sm:pb-32 text-white py-12 px-6">
      <div className="max-w-[1520px] pt-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-2xl font-medium pb-2">{section.title}</h3>
              <ul className="space-y-4 mt-6">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        to={link.href}
                        className="text-[#E5E5E5] hover:text-[#FCAB3F] font-medium  transition-colors duration-200 text-md"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row justify-between  gap-6 md:pt-20">
          <div className="flex  justify-start items-center  gap-1 sm:gap-4">
            <div className="flex gap-3 justify-start">
              {socialIcons.map((social, index) => (
                <Link
                  key={index}
                  to={social.href}
                  className="w-10  rounded-full flex items-center justify-start transition-colors duration-200"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img src={social.icon} alt={social.href} />
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:flex justify-between items-center mt-10 w-full">
          <div className="w-full">
            <img
              className="h-[52px] w-[128px] object-cover rounded-md"
              src="../../../public/logo.jpg"
              alt="logo"
            />
          </div>
          <div className="sm:flex    gap-5 w-full justify-end relative top-10">
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#0D8EF6] text-white  transition-colors duration-200  text-sm md:text-md  px-10 py-3
             rounded-4xl flex items-center md:font-semibold gap-2"
            >
              Download For iOS
              <img
                className="object-cover rounded-md w-6 h-6"
                src="../../../public/apple.svg"
                alt="apple"
              />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className=" text-[#E5E5E5] mt-4 sm:mt-0 text-md  bg-black hover:text-white px-10  py-3 rounded-4xl flex items-center gap-2 text-sm
md:text-md md:font-semibold"
            >
              Download for Android
              <img
                className="object-cover rounded-md w-6 h-6"
                src="../../../public/playstore.svg"
                alt="playstore"
              />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
