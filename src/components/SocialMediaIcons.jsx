
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        href="https://www.linkedin.com/in/guigvd/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-linkedin hover:text-blue transition duration-500 text-4xl xs:text-3xl hover:scale-150"></i>
      </a>

      <a
        href="https://www.instagram.com/guigvd/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-instagram hover:text-orange-600 transition duration-500 text-4xl sm:text-3xl hover:scale-150"></i>
      </a>

      <a
        href="https://github.com/guigvd"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-github hover:text-slate-500 transition duration-500 text-4xl sm:text-3xl hover:scale-150"></i>
      </a>

      <a
        href="/docs/Guilherme_Veloso.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-regular fa-address-card hover:text-black transition duration-500 text-4xl sm:text-3xl hover:scale-150"></i>
      </a>

      <a
        href="https://wa.me/5521983583395"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-whatsapp hover:text-emerald-600 transition duration-500 text-4xl sm:text-3xl hover:scale-150"></i>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
