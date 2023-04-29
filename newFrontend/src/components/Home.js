import React from 'react'
import Header from './Header';
import MenuBuilder from './menu_builder/MenuBuilder';

import { useState } from 'react';
import { useNavigate } from "react-router-dom";

// BOOTSTRAP 5
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Home() {
    const [showMenu, setShowMenu] = useState(false);
    
    let navigate = useNavigate(); 


    function handle_Menu_ocClick() {
        setShowMenu(true);
        let path = '/MenuBuilder';
        navigate(path);
        
    }

    return (
    <div>
        < Header/>

        <Container className=' p-5'>
            <Row className=' text-center'>
                <h1 className=' display-1'>Create a Menu, then get a QR code</h1>
            </Row>

            <Row className=' d-flex justify-content-center p-5'>
                <Button onClick={handle_Menu_ocClick} variant="outline-primary" className=' w-50'> <p className=' fs-1'>Try us out!</p> </Button>
                { showMenu && <MenuBuilder />}

                
            </Row>

        </Container>
        
      
    </div>
  )
}

export default Home
