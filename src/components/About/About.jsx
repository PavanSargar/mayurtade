import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import styles from "./About.module.css";

function About(props) {
  return (
    <Container id="about" data-aos={props.animation} className={styles.container}>
      <h2>About</h2>
      <hr />

      <Row className={styles["about-row"]}>
        <Col className={styles["about-img"]}>
          <Image
            className={styles.image}
            src="https://res.cloudinary.com/dsbt1l9sw/image/upload/v1634921310/Mayur%20Tade%20Portfolio%20Images/mayur_tade_gqeniz.png"
          />
        </Col>
        <Col className={styles["about-text"]}>
          <h3>Mayur Tade</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos fuga
            ipsum nobis iure autem doloribus at explicabo dolorem quibusdam enim
            ratione amet officiis ipsa provident distinctio voluptates tenetur
            hic neque, maxime quod architecto. Sequi alias unde, iusto, earum
            odio beatae facere, ex maiores non cumque velit. Inventore iusto
            quasi labore.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
