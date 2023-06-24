import React, { useEffect } from "react";
import { Paper, Container, Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const RestaurantPage = () => {
    const makeRestaurant = () => {
        console.log('something')
    }

    // Testing for now - will be using legit restaurants user creates
    // TODO -> Add axios req for restaurants and get data from that to display in restaurants page
    const getAllRestaurants = [
        {
            name: 'Restaurant 1',
            createdDate: '01/01/23',
            categories: [
                'category1',
                'category2',
                'category3',
            ]
        },
        {
            name: 'Restaurant 2',
            createdDate: '01/01/23',
            categories: [
                'category1',
                'category2',
                'category3',
            ]
        },
        {
            name: 'Restaurant 3',
            createdDate: '01/01/23',
            categories: [
                'category1',
                'category2',
                'category3',
            ]
        }
    ]

    return (
        <Container sx={{ height: "100vh" }}>
            <Button
                onClick={makeRestaurant}
                className="qrImagePagePrintButton"
                sx={{ my: "3vh", height: "10vh", fontSize: "25px", mt: '10vh' }}
                variant="contained"
            >
                MAKE RESTAURANT!
            </Button>

            <Typography variant="h1" sx={{ mb: '10vh' }}>Restaurants: </Typography>
            <Paper
                elevation={20}
                sx={{
                    height: "45vh",
                    width: "auto",
                    display: "flex",
                    flexDirection: "row",
                    flexGrow: "4",
                    flexWrap: "wrap",
                    pl: "1vw",
                    pr: "1vw",
                    ml: "-7.5vw",
                    justifyContent: "space-between",
                    alignSelf: "center",
                    bgcolor: "primary.verydark",
                    overflow: "hidden",
                    mb: "100px",
                }}
            >
                {getAllRestaurants.map(restaurant => {
                    return (
                        <Paper elevation={10} key={restaurant.name} sx={{ height: "20vh", width: "10vw", mt: "6vh", ml: "3vw" }} >
                            {/* This link would direct the user to the restaurant they chose */}
                            <Link
                                to={`/`}
                                sx={{
                                    display: { xs: "flex", md: "flex" },
                                    pl: 1,
                                }}
                                style={{ textDecoration: 'none', }}

                                overflow={"auto"}
                            >
                                <Typography
                                    variant="h5"
                                    align="center"
                                    color="primary.verydark"
                                    gutterBottom
                                    sx={{ pt: 5 }}
                                    fontWeight={"bold"}
                                >
                                    {restaurant.name}
                                </Typography>

                                <Typography variant="body1" align="center" color="primary.verydark">
                                    {restaurant.createdDate}
                                </Typography>

                                <Typography variant="body1" align="center" color="primary.verydark" sx={{ pt: 5 }}>
                                    {restaurant.categories.join(', ')}
                                </Typography>
                            </Link>

                        </Paper>

                    )
                })}

            </Paper>

        </Container >
    );
};

export default RestaurantPage;
