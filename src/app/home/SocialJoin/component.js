import React from 'react'
import styles from '../SocialJoin/socialJoin.module.css'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const component = () => {
    return (
        <section style={{background: "#F8F8F8"}}>
            <div className={`container ${styles.container}`}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className={styles.heading}>
                            <p>GET SOCIAL</p>
                            <span>Join the conversation</span>
                            <div className={styles.socialIcon}>
                                <FaXTwitter className={styles.Icon} />
                                <FaFacebookF className={styles.Icon} />
                                <FaInstagram className={styles.Icon} />
                                <FaYoutube className={styles.Icon} />
                                <FaLinkedin className={styles.Icon} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`row mt-3 ${styles.socialrow}`}>
                    <div className={`col-lg-6 ${styles.Youtube}`}>
                        <FaYoutube className={styles.YoutubeIcon} />
                    </div>
                    <div className={`col-lg-2 ${styles.facebook}`}>
                        <FaFacebookF className={styles.YoutubeIcon} />
                    </div>
                    <div className={`col-lg-2 ${styles.facebook2}`}>
                        <FaFacebookF className={styles.YoutubeIcon} />
                    </div>
                    <div className={`col-lg-2 ${styles.instagram}`}>
                        <FaInstagram className={styles.YoutubeIcon} />
                    </div>

                    <div className={`col-lg-2 ${styles.twitter}`}>
                        <FaXTwitter className={styles.YoutubeIcon} />
                    </div>
                    <div className={`col-lg-2 ${styles.instagram2}`}>
                        <FaInstagram className={styles.YoutubeIcon} />
                    </div>
                    <div className={`col-lg-2 ${styles.facebook3}`}>
                        <FaFacebookF className={styles.YoutubeIcon} />
                    </div>
                    <div className={`col-lg-2 ${styles.instagram3}`}>
                        <FaInstagram className={styles.YoutubeIcon} />
                    </div>
                    <div className={`col-lg-2 ${styles.facebook4}`}>
                        <FaInstagram className={styles.YoutubeIcon} />
                    </div>
                    <div className={`col-lg-2 ${styles.instagram}`}>
                        <FaInstagram className={styles.YoutubeIcon} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default component