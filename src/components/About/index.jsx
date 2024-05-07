import { getImageUrl } from "../../utils/helper.js"
function About() {
    return (
      <section className="about-me">
        <div >
          <h2> ABOUT ME </h2>
          <img className="img1"
          src={getImageUrl("pic.png")}
          alt="My Profile"
        />
          <p> I'm Faiza Faisal, currently pursuing a Bachelor of Business alongside a Bachelor of Creative Intelligence and Innovation at the University of Technology. Welcome to my digital space! My path has been an unusual blend of business knowledge and creative enquiry. As a student who is
                enthusiastic about coding and the limitless possibilities it provides, I've gone on an enthralling
                journey of learning and creation.
                I've developed a deep love for coding, discovering a universe of limitless creativity and
                problem-solving within it. This website serves as a canvas for the result of my technological
                endeavours, experiments, and forays.
                It's an exhilarating journey where I'm constantly evolving, driven by a fervor to learn, create, and
                make a meaningful impact. I welcome you to explore the various elements of my work, from coding projects
                to endeavours in innovation, through my portfolio. It's a peek into my universe, where commercial
                insights meet creative endeavours and every line of code tells a tale of discovery and creativity.
          </p>
          
        </div>
      </section>
    );
  }
  
  export default About;