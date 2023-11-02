import React, { useEffect, useState } from "react";
import { Card } from "../components/card";


export const Home = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const response = await fetch("https://randomuser.me/api?results=5&noinfo", {
                method: 'GET',
            });

            const data = await response.json()

            if (response.status === 200) {
                //console.log(data.results)
                setUsers(data.results);
            } else {
                console.error('Error fetching users:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

    useEffect(() => {

        getUsers();

    }, []);
    return (
        <div className="container">
            <div className="contactList row ">
                {
                    users.map((user, index) => {
                        return (
                            <div className={`col-md-6 `} key={index}>
                                <Card user={user} index={index} />
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}