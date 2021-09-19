import React from 'react'
import ReactPlayer from "react-player"
import styles from './App.module.css';


export const About = () => (
  <div className={styles.about}>
    COVID19 live tracker app provides the live statistics and data visualization of coronavirus pandemic in the world.
        The COVID-19 is affecting 210 countries and territories around the world.
        Through this app we can keep a live track on the number of INFECTED people, RECOVERED people and number of DEATHS around the globle as well as in each country.
        <div className={styles.heading2}>
          <p><b>COVID19 History</b></p>
        </div>  
<ul>
  <li>A pneumonia of unknown cause detected in Wuhan, China was first reported to the WHO Country Office in China on 31 December 2019.</li>
  <li>WHO is working 24/7 to analyse data, provide advice, coordinate with partners, help countries prepare, increase supplies and manage expert networks.</li>
  <li>The outbreak was declared a Public Health Emergency of International Concern on 30 January 2020.</li>
  <li>The international community has asked for US$675 million to help protect states with weaker health systems as part of its Strategic Preparedness and Response Plan.</li>
</ul>
      <div className={styles.wrapper}>
      <ReactPlayer className={styles.player}
        url="http://youtu.be/mOV1aBVYKGA"
        width='100%'
        height='100%'  
      />
      </div>   
  </div>
)