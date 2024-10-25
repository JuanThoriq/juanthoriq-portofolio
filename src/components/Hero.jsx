// import heroImg from "../assets/imgJo.webp";
import heroImg2 from "../assets/imgJo2.webp";
import { PROFILE } from "../constants";

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col lg:flex-row-reverse gap-6">
      <div className="w-full lg:w-1/2">
        <div className="flex justify-center items-center ">
          <img
            src={heroImg2}
            alt="Profile Picture"
            className="rounded-3xl w-full max-w-lg shadow-lg shadow-indigo-500/40"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col justify-center items-center lg:items-start">
          <h1 className="text-5xl lg:text-7xl xl:text-8xl tracking-tighter">
            {PROFILE.name}
          </h1>
          {/* <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent text-3xl tracking-tight">
            Full Stack Developer
          </span> */}
          <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-3xl tracking-tight mt-2">
            {PROFILE.role}
          </span>
          <p className="tracking-tighter leading-relaxed max-w-lg lg:max-xl:max-w-md text-justify mt-8 lg:text-lg">
            {PROFILE.subheading}
          </p>
          <a
            href="https://drive.google.com/file/d/1yT5_WCCiN4xfTN9SCRgYK5H3UnOefSBn/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="transition ease-out duration-500 bg-white hover:bg-stone-400 p-4 rounded-full text-sm text-stone-800 font-medium my-8"
          >
            Check my CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
