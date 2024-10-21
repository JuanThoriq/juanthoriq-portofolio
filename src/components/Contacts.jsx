import { CONTACT } from "../constants";

const Contacts = () => {
  return (
    <section id="contact">
      <h2 className="text-2xl lg:text-3xl text-center font-medium mb-8">
        Contacts
      </h2>
      <p className="text-center font-medium">
        Reach me out <br />
        <a href="mailto:juanthoriq@gmail.com" className=" text-center border-b">
          juanthoriq@gmail.com
        </a>
      </p>
      <div className="flex justify-center items-center gap-8 mt-6 text-2xl">
        {CONTACT.map((cont, index) => (
          <a
            key={index}
            target="_blank"
            rel="noopener nopreferrer"
            aria-label={cont.name}
            href={cont.link}
          >
            {cont.logo}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contacts;
