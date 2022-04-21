import styles from "./About.module.css";

import {Link} from "react-router-dom"

const About = () => {
  return (
    <div className={styles.about}>
      <h2>About the <span> Mini Blog</span></h2>
      <p>
        This project is a blog built with React for the front-end and Firebase for the back-end.
      </p>
      <p>You can check the repository here: <a href="https://github.com/brunogomes98/fakeBlog">Github</a></p>
      <Link to="/posts/create" className="btn">
        Create Post
      </Link>
    </div>
  );
};

export default About;
