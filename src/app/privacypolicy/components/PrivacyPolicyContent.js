import React from "react";
import styles from "../../styles/privacypolicy.module.css";

const PrivacyPolicyContent = () => {
    return (
        <>
            <section>
                <div className={`${styles.PrivacyPolicyContent} mt-5`}>
                    <h5 className={`${styles.PrivacyPolicyContentheading}`}>Our business complies with the principles to ensure all your personal information remains confidential, protected and maintained. </h5>
                    <p className={`${styles.PrivacyPolicyContentpara}`}>
                        - We will notify the purpose of collecting information in advance or at the time. <br/><br/>
                        - We only collect and use the personal information conforming to the corporate objectives. <br/><br/>
                        - None of the personal data is shared with a third party unless required by the law.<br/><br/>
                        - We only collect personal information in compliance with the law and on consent of the concerned individual.<br/><br/>
                        - Personal information that is irrelevant, incomplete, outdated, inaccurate or non-compliant with the law shall be nullified.<br/><br/>
                        - We ensure maximum protection of the personal data against misuse, theft or loss, unauthorised access, disclosure, duplication and/or modification.<br/><br/>
                    </p>
                </div>
            </section>
        </>
    );
};

export default PrivacyPolicyContent;