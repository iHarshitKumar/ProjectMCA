import React from 'react'
import styles from './App.module.css';
import ReactPlayer from "react-player"


export const Precautions = () => (
  <div className={styles.precautions}>  
      Protect yourself and others around you by knowing the facts and taking appropriate precautions. Follow advice provided by your local public health agency.
    <p className={styles.heading2}><b>To prevent the spread of COVID-19:</b></p>
    <ul>
      <li>Clean your hands often. Use soap and water, or an alcohol-based hand rub.</li>
      <li>Maintain a safe distance from anyone who is coughing or sneezing.</li>
      <li>Don’t touch your eyes, nose or mouth.</li>
      <li>Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.</li>
      <li>Stay home if you feel unwell.</li>
      <li>If you have a fever, a cough, and difficulty breathing, seek medical attention.</li>
    </ul>
        <div className={styles.wrapper}>
          <ReactPlayer className={styles.player}
            url="https://youtu.be/bPITHEiFWLc"
            width='100%'
            height='100%'  
          />
        </div>
      <p>Follow the directions of your local health authority.
      Avoiding unneeded visits to medical facilities allows healthcare systems to operate more effectively, therefore protecting you and others.
      </p> 
  </div>
)