import React from 'react';
import * as Icon from 'react-feather';
import styles from '../App.module.css';


export function Footer(props) {
  return (
    <footer className={styles.main}>
        <div className={styles.footer}>
      <h5 >We stand with everyone fighting on the frontlines</h5>
      </div>
      <div className="link">
        <a
          href="https://github.com/covid19india"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </div>
      <div className={styles.github}>
      <a
        href="https://github.com/anaskhan06/COVID19-LIVE_TRACKER_APP"
        className="button github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon.GitHub />
        <span>Open Sourced on GitHub</span>
      </a>
      </div>
      <div className={styles.Linkedin}>
      <a
        href="https://pmnrf.gov.in/en/online-donation"
        target="_blank"
        rel="noopener noreferrer"
        className="button twitter"
        style={{justifyContent: 'center'}}
      >
        <Icon.Link />
        <span> Donate PMNRF India</span>
      </a>
      </div>
      
    </footer>
  );
}
