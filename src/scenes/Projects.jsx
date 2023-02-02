import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

import { projects } from "../data";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle, icon, github, deploy, index }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-around items-center text-center p-5 text-black`;

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        {/* HEADINGS */}
        <p className="text-2xl font-playfair font-bold">{title}</p>
        <p className="mt-5 overflow-auto">{subtitle}</p>

        {/* DEPLOY AND CODE */}
        <div className="flex justify-between w-full font-semibold pt-4">
          <a href={deploy} target="_blank" rel="noreferrer">
            {deploy ? (
              <i className="fa-solid fa-link" />
            ) : (
              <i className="fa-solid fa-link-slash" />
            )}{" "}
            Deploy
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i> Code
          </a>
        </div>
      </div>
      <img src={icon} alt={title} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-blue">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Nesta seção, você pode ver uma seleção dos meus projetos mais recentes
          e ambiciosos, que mostram a minha paixão e habilidade na área de
          desenvolvimento.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          // key={project.id}
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <Project key={project.id} {...project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
