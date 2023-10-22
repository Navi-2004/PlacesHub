// import {Link} from 'react-router-dom'
// import Header from '../Components/Header'
// export default function IndexPage(){
//     return (
//         <div>
            
//          Index page here
         
      
//     </div>
//     )
// } 


import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Image from "../Components/Image.jsx";

export default function IndexPage() {
  const [places,setPlaces] = useState([]);
  useEffect(() => {
    axios.get('/places').then(response => {
      setPlaces(response.data);
    });
  }, []);
  return (
    <div className="mt-16  ml-12 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
      {places.length > 0 && places.map(place => (
        <Link to={'/place/'+place._id}>
          <div className="bg-gray-500 mb-2 rounded-2xl flex w-64">
            {place.photos?.[0] && (
              <Image className="rounded-2xl object-cover aspect-square w-64 h-64" src={place.photos?.[0]} alt=""/>
            )}
          </div>
          <h2 className="font-bold">{place.address}</h2>
          <h3 className="text-sm text-gray-500">{place.title}</h3>
          <div className="mt-1">
            <span className="font-bold">${place.price}</span> per night
          </div>
        </Link>
      ))}
    </div>
  );
}