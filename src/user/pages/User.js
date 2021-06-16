import React from 'react'
import UsersList from '../components/UsersList'
//import UserItem from '../components/UserItem';
const User = () => {
    const USERS= [
    {
     id: 'u1',
     name: 'Debleena Sarkar',
     image: 'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/ae3qqfev6j7hzhxw6if3', 
     places:3
    }
];

    return <UsersList items={USERS}/>
}

export default User
