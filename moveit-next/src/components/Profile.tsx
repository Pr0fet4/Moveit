import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const {level} = useContext(ChallengesContext);
  
  return (
    <div className={styles.profileContainer}>
      <img src="http://github.com/pr0fet4.png" alt="Ítalo Cruz"></img>
      <div>
        <strong>Ítalo Cruz</strong>
        <p>
          <img src="icons/level.svg" alt=""/>
          Level {level}
        </p>
      </div>
    </div>
  );
}