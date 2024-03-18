import React from "react";
import styles from "../../styles/careers.module.css";


const CurrentOpenings = () => {
    return (
        <>
            <div className={`container py-5 ${styles.careersContainer}`}>
                <h2 className={`text-center mb-3 ${styles.mainhead}`}>Current Openings</h2>
                <p className={`text-center mb-3 ${styles.description}`}>
                    Digital Gravity is always on the hunt for passionate, self-confident, enthusiastic, and creative individuals to
                    share their brilliance and expertise in digital transformation.
                </p>
                <span className={`${styles.applicationInfo}`} style={{display: "inline-block",textAlign: "center"}}>
                    All applications should be made via&nbsp;
                    <span className={`${styles.email}`}>careers@digitalgravity.ae</span>
                </span>
                <div className="row py-2">
                    <div className="col-md-6 mt-3">
                        <div className={`p-4 ${styles.openingscard}`}>
                            <h2 className={styles.openingscardTitle}>Business Analyst</h2>
                            <p className={styles.openingscardDescription}>We are looking for a detail-oriented resource to be hired as Business Analyst at our Karachi office.</p>
                            <a className={`${styles.applyButton}`}>Apply Now</a>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <div className={`p-4 ${styles.openingscard}`}>
                            <h2 className={styles.openingscardTitle}>Full Stack Developer</h2>
                            <p className={styles.openingscardDescription}>We are looking for an experienced Full Stack Developer to be added in our Development team.</p>
                            <a className={`${styles.applyButton}`}>Apply Now</a>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6 mt-3">
                        <div className={`p-4 ${styles.openingscard}`}>
                            <h2 className={styles.openingscardTitle}>Microsoft Dynamics 365 Solution Architect</h2>
                            <p className={styles.openingscardDescription}>We are looking for an exceptional resource to be hired in the capacity of Microsoft Dynamics 365 Solution Architect.</p>
                            <a className={`${styles.applyButton}`}>Apply Now</a>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <div className={`p-4 ${styles.openingscard}`}>
                            <h2 className={styles.openingscardTitle}>Node JS Developer</h2>
                            <p className={styles.openingscardDescription}>We are looking for a skilled Node JS Developer to be added in our Development team.</p>
                            <a className={`${styles.applyButton}`}>Apply Now</a>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-6 mt-3">
                        <div className={`p-4 ${styles.openingscard}`}>
                            <h2 className={styles.openingscardTitle}>PHP Developer</h2>
                            <p className={styles.openingscardDescription}>We are looking for a PHP Developer who is experienced in PHP custom-theme Website development.</p>
                            <a className={`${styles.applyButton}`}>Apply Now</a>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <div className={`p-4 ${styles.openingscard}`}>
                            <h2 className={styles.openingscardTitle}>React Js Developer</h2>
                            <p className={styles.openingscardDescription}>We are looking for experienced React Js Developers who can work with us on new ambitious projects and enhance their skills.</p>
                            <a className={`${styles.applyButton}`}>Apply Now</a>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-6 mt-3">
                        <div className={`p-4 ${styles.openingscard}`}>
                            <h2 className={styles.openingscardTitle}>Sales Executive</h2>
                            <p className={styles.openingscardDescription}>We are looking for an energetic Sales Executive to be added in our Sales and Business development team.</p>
                            <a className={`${styles.applyButton}`}>Apply Now</a>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <div className={`p-4 ${styles.openingscard}`}>
                            <h2 className={styles.openingscardTitle}>Senior-Level SQA Engineer</h2>
                            <p className={styles.openingscardDescription}>We are looking for an experienced QA resource to be hired in the role of Senior SQA Engineer.</p>
                            <a className={`${styles.applyButton}`}>Apply Now</a>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-6 mt-3">
                        <div className={`p-4 ${styles.openingscard}`}>
                            <h2 className={styles.openingscardTitle}>Senior UI/UX Designer</h2>
                            <p className={styles.openingscardDescription}>We are looking for a dynamic Senior UI/UX Designer to be added in our Design team.</p>
                            <a className={`${styles.applyButton}`}>Apply Now</a>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <div className={`p-4 ${styles.openingscard}`}>
                            <h2 className={styles.openingscardTitle}>SharePoint Developer</h2>
                            <p className={styles.openingscardDescription}>We are looking for an experienced SharePoint Developer.</p>
                            <a className={`${styles.applyButton}`}>Apply Now</a>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-6 mt-3">
                        <div className={`p-4 ${styles.openingscard}`}>
                            <h2 className={styles.openingscardTitle}>Technical Project Manager</h2>
                            <p className={styles.openingscardDescription}>We are looking for a dynamic Technical Project Manager to be added in our project Management team.</p>
                            <a className={`${styles.applyButton}`}>Apply Now</a>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <div className={`p-4 ${styles.openingscard}`}>
                            <h2 className={styles.openingscardTitle}>UX Designer</h2>
                            <p className={styles.openingscardDescription}>We are looking for a dynamic UX Designer to be added in our Design team.</p>
                            <a className={`${styles.applyButton}`}>Apply Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CurrentOpenings;
