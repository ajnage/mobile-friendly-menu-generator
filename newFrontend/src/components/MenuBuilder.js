import React from 'react'
import Image from 'react-bootstrap/Image'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MenuBuilder() {
  return (
    <div className=' h-100 '>

        <Container fluid className=''>
            <Row>
                    <Col
                        className=' h-25 '
                        style={{ 
                            backgroundImage: "url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80)"
                        }}
                    >
                    </Col>

                    <col
                        className=' bg-danger'
                    >
                        
                    </col>


            </Row>
            
        </Container>
        
        
        
        

           




    </ div>
  )
}

export default MenuBuilder
