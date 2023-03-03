import React from 'react'

import CategoryCards from './CategoryCards';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

function MenuBuilder() {
    return (
        <div className=' h-100'>

            {/* HEADER - BACKGROUND - PHOTO */}
            <div className='h-25 position-relative'>
                <div 
                    className='herebackground bg-danger position-absolute top-0 start-0 h-75 w-100'
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80)',
                    backgroundSize: "cover",
                    backgroundPosition: "center top"                
                    }}
                ></div>
                <div className=' d-flex justify-content-center'>
                    <div 
                        className='position-relative rounded-circle shadow' 
                        style={{
                            top: "20%",
                            height: "10rem",
                            width: "10rem",
                            backgroundImage: "url(https://c8.alamy.com/comp/2GRX8GC/chef-avatar-cook-man-working-restaurant-services-profile-user-person-people-icon-vector-illustration-2GRX8GC.jpg)",
                            backgroundSize: "cover",
                            backgroundPosition: "center top"  
                            }}>
                    </div> 
                </div>
            </div>
            
            <div className='container bg-danger h-100'>
                <Row className=''>
                    <h2>Categories</h2>
                </Row>
                <div className="d-flex overflow-auto flex-nowrap w-100">
                    <CategoryCards />
                    <CategoryCards />
                    <CategoryCards />
                    <CategoryCards />
                    <CategoryCards />
                    <CategoryCards />
                    <CategoryCards />
                    <CategoryCards />
                    <CategoryCards />
                    <CategoryCards />
                    <CategoryCards />
                    <CategoryCards />
                </div>
                
                <Row className='mt-4'>
                    <h2>Select Menu</h2>
                </Row>

                <Row lg={5}>
                    <Col>
                        <Card
                            className=" rounded-5"
                        >
                
                            <Card.Body className=' mx-auto'><h4 className=' fw-bold fs-5'>All Menu</h4></Card.Body>

                        </Card>
                    </Col>

                    <Col>
                        <Card
                            className=" rounded-5"
                        >
                
                            <Card.Body className=' mx-auto'><h4 className=' fw-bold fs-5'>All Menu</h4></Card.Body>

                        </Card>
                    </Col>

                    <Col>
                        <Card
                            className=" rounded-5"
                        >
                
                            <Card.Body className=' mx-auto'><h4 className=' fw-bold fs-5'>All Menu</h4></Card.Body>

                        </Card>
                    </Col>

                    <Col>
                        <Card
                            className=" rounded-5"
                        >
                
                            <Card.Body className=' mx-auto'><h4 className=' fw-bold fs-5'>All Menu</h4></Card.Body>

                        </Card>
                    </Col>

                    <Col>
                        <Card
                            className=" rounded-5"
                        >
                
                            <Card.Body className=' mx-auto'><h4 className=' fw-bold fs-5'>All Menu</h4></Card.Body>

                        </Card>
                    </Col>

                    <Col>
                        <Card
                            className=" rounded-5"
                        >
                
                            <Card.Body className=' mx-auto'><h4 className=' fw-bold fs-5'>All Menu</h4></Card.Body>

                        </Card>
                    </Col>

                    <Col>
                        <Card
                            className=" rounded-5"
                        >
                
                            <Card.Body className=' mx-auto'><h4 className=' fw-bold fs-5'>All Menu</h4></Card.Body>

                        </Card>
                    </Col>

                    <Col>
                        <Card
                            className=" rounded-5"
                        >
                
                            <Card.Body className=' mx-auto'><h4 className=' fw-bold fs-5'>All Menu</h4></Card.Body>

                        </Card>
                    </Col>


                    


                </Row>


                
                            
            </div>








        </ div>
    )
}

export default MenuBuilder


                    {/* <Col
                        className=''
                        style={{
                            backgroundImage: "url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80)"
                            ,height: "25vh"
                        }}
                    >   
                    </Col> */}


                    // <div class="parent">
                    //     <img class="image1" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80" />
                    //     <img class="image2" src="https://c8.alamy.com/comp/2GRX8GC/chef-avatar-cook-man-working-restaurant-services-profile-user-person-people-icon-vector-illustration-2GRX8GC.jpg" />
                    // </div>