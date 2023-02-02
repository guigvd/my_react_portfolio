import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="bg-pink h-60">
      <div className="w-5/6 mx-auto pt-5">
        <SocialMediaIcons />

        <div className="md:flex justify-center items-center md:justify-between text-center">
          <p className="font-playfair font-bold text-3xl text-black">
            Guilherme Veloso
          </p>
          <p className="text-base font-playfair">
            ©2023 GUIGVD. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
