import aboutImg from "../assets/Me Neon.png";
import nameIcon from "../assets/name.webp";
import ageIcon from "../assets/age.webp";
import roleIcon from "../assets/web-developer.webp";

const cards = [
  {
    title: "The Journey 👨‍💻",
    id: 1,
    txt: "I am Sajjad, a 17-year-old self-taught Front-End Developer from Iran. My journey started with a curiosity for how the web works, which quickly turned into a passion for building clean, modern, and user-friendly digital experiences.",
  },
  {
    title: "The Philosophy ✨",
    id: 2,
    txt: " believe that code should be as beautiful as the design. My focus is on writing Clean Code, ensuring Responsive Design across all devices, and constantly refining the User Experience to make every interaction seamless.",
  },
  {
    title: "The Goal 🎯",
    id: 3,
    txt: "Currently deep-diving into the React ecosystem. My mission is to evolve into a Full-Stack Architect, turning complex ideas into scalable, high-performance web applications.",
  },
];

function AboutSection() {
  return (
    <>
      <div id="about" className="about-title">
        <h2 data-aos="fade-up" data-aos-duration="1000">
          About Me
        </h2>
        <h4 data-aos="fade-up" data-aos-duration="1000">
          This Section will be updated, still learning
        </h4>
      </div>
      <div
        className="about-section"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {cards.map((card) => (
          <div className="about-card" key={card.id}>
            <h3 className="about-card-title">{card.title}</h3>
            <p className="about-card-txt">{card.txt}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default AboutSection;
