import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/card.module.css";

export const Card = ({ user, index }) => {
    const [userData, setUserData] = useState(user);
    const key = index;
    const navigate = useNavigate();

    //console.log("Rendering Card:", user);
    console.log(user);
    useEffect(() => {
        setUserData(user);
    }, [user]);


    const handleNavigate = (user) => {
        navigate(`/user/${user.login.uuid}`, { state: { user } });
    };

    return (
        <>
            <div className={`card mb-3 mt-3 shadow ${styles.card}`} >
                <div className="row g-0">
                    <div className={`col-5 ${styles.cardImageDiv}`}>
                        <img
                            src={`${user.picture.large}`}
                            className={`img-fluid rounded-start ${styles.cardImage}`}
                            alt="..." />
                    </div>
                    <div className={`col-7 ${styles.cardContainer}`}>
                        <div className={`card-body container ${styles.cardBody}`}>
                            <h5 className={`card-title ${styles.cardTitle}`}>{`${userData.name.title || ""} ${userData.name.first || ""} ${userData.name.last || ""}`}</h5>
                            <p className="card-text">{`Phone: ${userData.phone || ""}`}</p>
                            <p className="card-text">{`Email: ${userData.email || ""}`}</p>
                            <p className={styles.cardLink} onClick={() => handleNavigate(user)}>Ver más..</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};