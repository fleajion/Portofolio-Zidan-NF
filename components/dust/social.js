import { FaGithub, FaFacebook, FaMedium, FaInstagram, FaLinkedin, FaNpm } from "react-icons/fa";
import { useState, Fragment } from "react";
import { clsx } from "clsx";

export default function Social({ type }) {
    let [social] = useState([
      {
        href: "https://github.com/fleajion",
        icon: {
          icon: FaGithub,
          fill: clsx('hover:fill-black')
        },
      },
      {
        href: "https://medium.com/@zidannfyourbae999",
        icon: {
          icon: FaMedium,
          fill: clsx("hover:fill-black"),
        },
      },
      {
        href: "https://www.instagram.com/zid4n_np",
        icon: {
          icon: FaInstagram,
          fill: clsx("hover:fill-[url(#instagram-gradient)]"),
        },
      },
      {
        href: "https://linkedin.com/in/zidan-naufal-firmansyah",
        icon: {
          icon: FaLinkedin,
          fill: clsx('hover:fill-blue-500'),
        },
      },
    ]);

    return (
      <>
        <div
          className={`flex text-2xl text-gray-500 ${
            type === "footer"
              ? "space-x-4 ml-2 md:space-x-6"
              : "space-x-7 mt-2 text-center md:text-left"
          }`}
        >
          {social.map(({ href, icon }) => {
            return (
              <Fragment key={href}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <icon.icon
                    className={`${icon.fill} transition delay-150`}
                  />
                </a>
              </Fragment>
            );
          })}
        </div>
      </>
    );
}