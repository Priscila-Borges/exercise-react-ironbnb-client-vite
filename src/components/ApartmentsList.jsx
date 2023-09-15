import axios from "axios";
import { useEffect, useState } from "react";


function ApartmentsList() {

    const [apartments, setApartments] = useState([])

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/apartments`)
            .then(response => {
                console.log(response)
                setApartments(response.data)
                
            })
            .catch((e) => {
                console.log("Error getting apartments from API", e);
            });
    }, [])

    return (
        <div>
            <h1>Apartment List</h1>
            {apartments.map((apartmentObj) => {
                return (
                    <div key={apartmentObj._id}>
                        <h3>Title: {apartmentObj.title}</h3>
                        <img src={apartmentObj.img} alt={apartmentObj.title} />
                        <h3>Price Per Day{apartmentObj.pricePerDay}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default ApartmentsList;