import React from "react";
import { useLocation, Link } from "react-router-dom";

export const UserDetail = () => {
    const location = useLocation();
    const user = location.state.user;

    const originalBirthdate = user.dob.date;
    const birthdate = new Date(originalBirthdate);

    const month = birthdate.getMonth() + 1;
    const day = birthdate.getDate();
    const year = birthdate.getFullYear();


    const formatedDate = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}-${year}`;
    console.log(formatedDate);


    return (
        <div>

            {user && (
                <div>
                    <img src={user.picture.large}></img>
                    <p>{user.name.title}: {user.name.first} {user.name.last}</p>
                    <p>Username: {user.login.username}</p>
                    <p>Age: {user.dob.age}</p>
                    <p>Birthdate: {formatedDate}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Gender: {user.gender}</p>
                    <p>Address: Street: {user.location.street.name} {user.location.street.number} Postcode: {user.location.postcode} City: {user.location.city} Country: {user.location.country}</p>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <h2>Back..</h2>
                    </Link>
                </div>
            )}
        </div>
    );
};
