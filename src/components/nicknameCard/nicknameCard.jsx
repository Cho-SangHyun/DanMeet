import React from 'react';
import styles from "./nicknameCard.module.css";

const NicknameCard = ({nickname}) => {
    return(
        <div className={styles.card}>
            {nickname}
        </div>
    )
};

export default NicknameCard;