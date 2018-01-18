import React from "react";
import styles from "./index.module.css";
console.log(styles);
import Container from "../components/container";

const Me = props =>
  <div className={styles.me}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.hey}>
        {props.hey}
      </h2>
      <p className={styles.about}>
        {props.about}
      </p>
    </div>
  </div>

export default () =>
  <Container>
    <h1>Personal Blog</h1>
    <p> about software and cinema. </p>
    <Me
      hey="Hi!"
      avatar="http://i.magaimg.net/img/2d5u.jpg"
      about="i am a software developer from Kalkan."
    />

  </Container>
