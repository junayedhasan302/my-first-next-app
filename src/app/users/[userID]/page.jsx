import React from 'react';

const UserDetailsPage = async ({params}) => {
    const {userID} = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
    const user = await res.json();
    return (
        <div>
            <h2>User Details Page</h2>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
        </div>
    );
};

export default UserDetailsPage;