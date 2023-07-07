import React, { useState, useEffect } from "react";

import AddRestaurantCard from "./AddRestaurant";
import RestaurantCards from "./RestaurantCards";
import { useAuth0 } from "@auth0/auth0-react";
import { IoIosAddCircleOutline } from "react-icons/io";


import { getRestaurants } from "../../axios/API";

import Row from "react-bootstrap/Row";


function ViewRestaurants() {
    const { user, getAccessTokenSilently, isAuthenticated } = useAuth0();
    const [restaurants, setRestaurants] = useState([]);

    const getAllRestaurants = async () => {
        try {
            const token = await getAccessTokenSilently();
            const response = await getRestaurants(token);
            if (response.status === 200) {
                const data = response.data;
                setRestaurants(data.restaurants);
            } else {
                return;
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            getAllRestaurants();
        }
    }, [isAuthenticated]);

    console.log("restaurants:", restaurants);

    const updateRestaurantForm = (id, newTitle) => {
        const updatedRestaurants = restaurants.map((restaurant) => {
            if (id === restaurant.id) {
                return { ...restaurant, title: newTitle };
            }
            return restaurant;
        });
        setRestaurants(updatedRestaurants);
    };


    // If I remove the 'id' from the props, the new category doesn't have a title
    const handleInsertNewRestaurant = (id, newTitle) => {
        const newRestaurant = { id: restaurants.length + 1, title: newTitle };
        setRestaurants([...restaurants, newRestaurant]);
    };

    const handleDelete = (restaurantId) => {
        console.log(restaurants);
        const newRestaurant = restaurants.filter((restaurant) => {
            if (restaurant.id === restaurantId) {
                return false;
            } else {
                return true;
            }
        });
        setRestaurants(newRestaurant);
    };


    return (
        <div className=" h-100">

            <div className="container mb-5 mt-3">

                <div className="d-flex px-4 overflow-auto flex-nowrap w-100 py-3">
                    {restaurants.map((restaurant) => {
                        return (
                            <RestaurantCards
                                key={restaurant.id}
                                id={restaurant.id}
                                title={restaurant.name}
                                updateRestaurantForm={updateRestaurantForm}
                                handleDelete={handleDelete}
                            />
                        );
                    })}
                    <IoIosAddCircleOutline
                        style={{ fontSize: "300px", color: "#FFFFFF" }}
                        onClick={console.log('clicked 1')}
                    />
                    <AddRestaurantCard handleInsertNewRestaurant={handleInsertNewRestaurant}>

                    </AddRestaurantCard>
                    {console.log('clicked 2 ')}

                </div>

            </div>
        </div >
    );
}

export default ViewRestaurants;