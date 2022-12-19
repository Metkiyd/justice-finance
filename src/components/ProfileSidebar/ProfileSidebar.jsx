import React from 'react';
import styles from "../ProfileSidebar/styles.module.scss";
import noPhoto from "../../assets/images/noPhoto.png";
import {AddButton} from "../MyUI/MyNavButton";
import SyncAltRoundedIcon from "@mui/icons-material/SyncAltRounded";

const ProfileSidebar = () => {
  return (
    <section className={styles.right_sidebar}>
      <div className={styles.right_sidebar__container}>
        <div className={styles.avatar}>

          <div className={styles.wrap}>
            <div className={styles.img1}>
              <img
                alt="loginImage"
                width="84"
                height="84"
                src={noPhoto}
              />
            </div>


            <div className={styles.img2}>
              <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M96 48C96 57.4935 93.1849 66.7738 87.9105 74.6674C82.6362 82.5609 75.1397 88.7132 66.3688 92.3462C57.5979 95.9792 47.9468 96.9298 38.6357 95.0777C29.3246 93.2256 20.7718 88.654 14.0589 81.9411C7.34595 75.2282 2.7744 66.6754 0.922306 57.3643C-0.929784 48.0532 0.0207761 38.4021 3.65378 29.6312C7.28679 20.8603 13.4391 13.3638 21.3326 8.08946C29.2262 2.81515 38.5065 -1.13209e-07 48 0V2.4C38.9812 2.4 30.1649 5.07439 22.666 10.085C15.1671 15.0956 9.32245 22.2173 5.87109 30.5496C2.41974 38.8819 1.51671 48.0506 3.27619 56.8961C5.03568 65.7417 9.37866 73.8668 15.7559 80.2441C22.1332 86.6213 30.2583 90.9643 39.1039 92.7238C47.9494 94.4833 57.1181 93.5803 65.4504 90.1289C73.7827 86.6776 80.9044 80.8329 85.915 73.334C90.9256 65.8351 93.6 57.0188 93.6 48H96Z"
                  fill="#363636"/>
              </svg>
            </div>
          </div>

          <p className={styles.text_500}>Алексей Иванов</p>
        </div>
        <div>
          <p className={styles.text_500}>Мой баланс</p>
          <div className={styles.add_wallet}>
            <p>Добавьте кошелек</p>
            <AddButton/>

          </div>
        </div>
        <div className={styles.transactions}>
          <p className={styles.text_500}>Последние транзакции</p>
          <div className={styles.transactions__wrapper}>
            <div className={styles.transactions__container}>
              <SyncAltRoundedIcon sx={{fontSize: '32px'}}/>
              <p className={styles.transactions__text}
              >Вы не совершили не одной транзакции</p>

            </div>

          </div>
        </div>
      </div>


    </section>
  );
};

export default ProfileSidebar;