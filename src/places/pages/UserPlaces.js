import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList'

const Dummy_Places =
[
    {
        id:'p1',
        title: 'Eiffel Tower',
        description: 'It  is a wrought-iron lattice tower on the Champ de Mars in Paris, France.',
        imageUrl: 'https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180221130827/iStock-155381519.jpg',
        address: '7th arrondissement, Paris, France',
        location: {
            lat:48.853909,
            lng:2.2825967
        },
        creator: 'u1'
    },
    {
        id:'p2',
        title: 'Taj Mahal',
        description: 'The Taj Mahal was commissioned by Shah Jahan in 1631, to be built in the memory of his wife Mumtaz Mahal',
        imageUrl: 'https://static.dw.com/image/55000481_303.jpg',
        address: 'Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001',
        location: {
            lat:27.1751448,
            lng:78.0399535
        },
        creator: 'u2'
    }
];

const UserPlaces= props => {
   const userId = useParams().userId;
   const loadedPlaces = Dummy_Places.filter(place => place.creator === userId);
    return <PlaceList item={loadedPlaces}/>
};

export default UserPlaces
