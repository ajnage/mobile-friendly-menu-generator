import React, { useState, useEffect } from "react";

import AddRestaurantCard from "./AddRestaurant";
import RestaurantCards from "./RestaurantCards";

import { getRestaurants } from "../../axios/API";

import Row from "react-bootstrap/Row";


function ViewRestaurants() {
    const [restaurants, setRestaurants] = useState();
    useEffect(() => {
        getRestaurants()
            .then(function (response) {
                // handle success
                console.log('Here is the response data', response.data);
                setRestaurants(response.data)
                // console.log('data state.price: ', data[1].price)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, [])

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
                                title={restaurant.title}
                                updateCategoryForm={updateRestaurantForm}
                                handleDelete={handleDelete}
                            />
                        );
                    })}
                    <AddRestaurantCard handleInsertNewRestaurant={handleInsertNewRestaurant} />
                </div>

            </div>
        </div>
    );
}

export default ViewRestaurants;