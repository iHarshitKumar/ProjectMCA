import React from 'react'
import styles from './App.module.css';
import ReactPlayer from "react-player"

export const Symptoms = () => (
  <div className={styles.symptoms}>
    
The COVID-19 virus affects different people in different ways.  COVID-19 is a respiratory disease and most infected people will develop mild to moderate symptoms and recover without requiring special treatment.  People who have underlying medical conditions and those over 60 years old have a higher risk of developing severe disease and death.

<p className={styles.heading2}><b>Common symptoms include:</b></p>
<ul >
  <li>fever</li>
  <li>tiredness</li>
  <li>dry cough.</li>
</ul>

<p className={styles.heading2}><b>Other symptoms include:</b></p>
<ul>
  <li>shortness of breath</li>
  <li>aches and pains</li>
  <li>sore throat</li>
  <li>and very few people will report diarrhoea, nausea or a runny nose.</li>
</ul>
People with mild symptoms who are otherwise healthy should self-isolate and contact their medical provider or a COVID-19 information line for advice on testing and referral.

People with fever, cough or difficulty breathing should call their doctor and seek medical attention.
      <div className={styles.wrapper}>
        <ReactPlayer className={styles.player}
          url="http://youtu.be/1PLdl6NDGDE"
          width='100%'
          height='100%'  
        />
      </div>    
  </div>
)
