import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';
import styles from './TextContainer.module.css';

const TextContainer = ({ users }) => (
  <div className={styles.textContainer}>
    <div>
      <h1>Realtime Chat with Doctor/Physiatrist <span role="img" aria-label="emoji">💬</span></h1>
    </div>
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className={styles.activeContainer}>
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;