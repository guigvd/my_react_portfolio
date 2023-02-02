import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import imgSkill from "../assets/skills-image.png";
import { skills } from "../data";

const SkillCard = ({ title, subtitle, icon, index }) => {
  return (
    <div>
      <div className="flex justify-between">
        <p className="font-playfair font-semibold xs:text-3xl text-4xl">
          {title}
        </p>
        <div className="w-20 h-20">
          <img
            alt={icon}
            src={icon}
            className="w-full h-full object-contain aspect-square"
          />
        </div>
      </div>
      <div>
        <p className="font-playfair text-1xl pt-3">{subtitle}</p>
      </div>
    </div>
  );
};

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-pink">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-10">
            Esta é uma lista das tecnologias com as quais eu tenho experiência e
            que uso para desenvolver soluções avançadas e inovadoras.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
              <img alt="skills" className="z-10" src={imgSkill} />
            </div>
          ) : (
            <img alt="skills" className="z-10" src={imgSkill} />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:flex-wrap md:justify-around mt-16 gap-10">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            className="md:w-[30%] mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <SkillCard key={skill.id} {...skill} index={index} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
