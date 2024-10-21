// import {
//   RiReactjsLine,
//   RiNextjsFill,
//   RiHtml5Fill,
//   RiCss3Fill,
//   RiTailwindCssFill,
//   RiBootstrapFill,
//   RiJavascriptFill,
//   RiJavaFill,
//   RiNodejsFill,
// } from "react-icons/ri";
// import { SiMysql } from "react-icons/si";
// import { FaPython } from "react-icons/fa";
// import { Icon } from "@iconify/react";
import { TECHNOLOGIES } from "../constants";

const Technologies = () => {
  return (
    <section className="my-32 xl:my-40" id="technologies">
      <h2 className="text-3xl lg:text-4xl text-center mb-16 font-medium">
        Technologies
      </h2>
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {TECHNOLOGIES.map((tech, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <p className="text-4xl">{tech.icon}</p>
              <p className="text-lg font-medium lg:text-xl">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
