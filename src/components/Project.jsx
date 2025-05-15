import { PROJECTS } from "../constants";

const Project = () => {
  return (
    <section id="projects">
      <h2 className="font-medium text-3xl lg:text-4xl text-center mb-16">
        Projects
      </h2>

      <div className="flex flex-wrap gap-8 justify-center">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="transition ease-out duration-500 hover:scale-105 hover:shadow-xl hover:shadow-stone-500/40  flex flex-col max-w-xs border border-stone-700 rounded-lg shadow-lg shadow-stone-500/40"
          >
            <div className="flex justify-center items-center">
              <img
                src={project.image}
                alt={project.title}
                // width={368}
                // height={80}
                className="rounded-t-lg w-full"
              />
            </div>
            <div className="flex flex-col justify-between flex-grow w-full p-4 relative min-h-[300px]">
              <h3 className="text-xl lg:text-2xl font-medium mb-2">
                {project.title}
              </h3>
              <p className="text-stone-400 text-md lg:text-lg text-justify mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-16">
                {project.technologies.map((tech, index) => (
                  <span
                    className="px-2 py-1 bg-stone-900 text-sm font-medium rounded"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="absolute right-4 bottom-4 flex justify-center items-center gap-4">
                {project.link &&
                  project.link
                    .filter((link) => link.projectlink) // Filter untuk menghindari link null
                    .map((link, index) => (
                      <a
                        href={link.projectlink}
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition ease-out duration-500 text-2xl p-1 bg-stone-800 hover:bg-stone-950 rounded-lg"
                      >
                        {link.projectlogo}
                      </a>
                    ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

//   {project.logoproject.map((logoproject, index) => (
//     <span key={index}>{logoproject};</span>
//   ))}

export default Project;
