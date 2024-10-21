import { EXPERIENCES } from "../constants";

const Experiences = () => {
  return (
    <section id="work" className="my-32 xl:my-40">
      <h2 className="text-3xl lg:text-4xl text-center font-medium mb-16">
        Experiences
      </h2>

      <div className="flex flex-col mx-auto gap-8 max-w-3xl">
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/4">
              <p className="text-sm lg:text-lg text-stone-400">{exp.year}</p>
            </div>
            <div className="w-full md:3/4">
              <h3 className="text-xl lg:text-2xl font-medium mb-2">
                {exp.role} -{" "}
                <span className="text-sm lg:text-lg bg-gradient-to-r from-stone-400 to-stone-200 bg-clip-text text-transparent">
                  {exp.company}
                </span>
              </h3>
              <p className="text-justify text-sm lg:text-lg text-stone-400">
                {exp.description}
              </p>
              <div className="flex flex-wrap mt-2 gap-2">
                {exp.technologies.map((tech, index) => (
                  <span
                    className="px-2 py-1 bg-stone-900 rounded font-medium text-sm "
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
