import React from 'react';
import styles from "./userInfoCard.module.css";

const UserInfoCard = ({classOf, major}) => {
    return(
        <div className={styles.card}>
            {classOf}
            {major}
        </div>
    )   
}

export default UserInfoCard;