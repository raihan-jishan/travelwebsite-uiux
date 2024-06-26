import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "../constants/index";
import { hilinklogo } from "../utils/images";
import { FooterColumn } from "./index";

const Footer = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  // useEffect hook
  useEffect(() => {
    if (!["/account", "/aboutus", "/contactus"].includes(location.pathname)) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, []);

  return (
    <div>
      {show && (
        <footer className="flexCenter mb-24">
          <div className="padding-container max-container flex w-full flex-col gap-14">
            <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
              <Link to={"/"} className="mb-10">
                <img
                  src={hilinklogo}
                  alt="logo was not found!"
                  width={74}
                  height={29}
                />
              </Link>

              <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
                {FOOTER_LINKS.map((columns, index) => (
                  <FooterColumn title={columns.title} key={index}>
                    <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                      {columns.links.map((link, index) => (
                        <Link to={"/"} key={index}>
                          {link}
                        </Link>
                      ))}
                    </ul>
                  </FooterColumn>
                ))}

                <div className="flex flex-col gap-5">
                  <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                    {FOOTER_CONTACT_INFO.links.map((link, index) => (
                      <Link
                        to={"/"}
                        key={index}
                        className="flex gap-4 md:flex-col lg:flex-row"
                      >
                        <p className="whitespace-nowrap">{link.label}</p>
                        <p className="whitespace-nowrap medium-14 text-blue-70">
                          {link.value}
                        </p>
                      </Link>
                    ))}
                  </FooterColumn>
                </div>

                <div className="flex flex-col gap-5">
                  <FooterColumn title={SOCIALS.title}>
                    <ul className="regular-14 flex gap-4 text-gray-30">
                      {SOCIALS.links.map((link, index) => (
                        <Link to={"/"} key={index}>
                          <img
                            src={link}
                            alt="logo was not found!"
                            width={24}
                            height={24}
                          />
                        </Link>
                      ))}
                    </ul>
                  </FooterColumn>
                </div>
              </div>
            </div>

            <div className="border bg-gray-20" />
            <p className="regular-14 w-full text-center text-gray-30">
              {new Date().getFullYear()} Hilink | All rights reserved
            </p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Footer;
