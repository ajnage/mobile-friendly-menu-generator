import React from 'react'
import { useState } from 'react';

import CategoryCards from './CategoryCards';
import SubCategoryCard from './SubCategoryCard';
import InsertCategory from './InsertCategoryForm';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function MenuBuilder() {
    const [showCategoryForm, setShowCategoryForm] = useState(false);

    const [categories, setCategories] = useState([
        {
            id: 1,
            title: 'All Menu'
        },
        {
            id: 2,
            title: 'Pizza'
        },
        {
            id: 3,
            title: 'Main'
        },
        {
            id: 4,
            title: 'Trats'
        },
    ])

    const [SubCategories, SetSubCategories] = useState([
        {
            id: 1,
            title: "Burger",
            description: "",
            image: "https://assets.bonappetit.com/photos/57aceacc1b3340441497532d/1:1/w_2560%2Cc_limit/double-rl-ranch-burger.jpg"   
        },
        {
            id: 2,
            title: "Pizza",
            description: "",
            image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg&q=60"
        },
        {
            id: 3,
            title: "Pasta",
            description: "",
            image: "https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg"
        },
        {
            id: 4,
            title: "Pasta",
            description: "",
            image: "https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg"
        }
    ]);

    const handleShowCategoryForm = () => {     
        setShowCategoryForm(true);
    }

    const handelCloseCategoryForm = () => {
        setShowCategoryForm(false)
    };

    const submitCategoryForm = () => {
        handelCloseCategoryForm();

    }

    const updateCategoryForm = (id, newTitle) => {
        const updatedCategories = categories.map((category) => {
            if (id === category.id) {
                return {...category, title: newTitle}
            }
            return category;
        });
        setCategories(updatedCategories);
    }

    const handelInsertNewCategory = (id, newTitle) => {
        const newCategory = { id: id, title: newTitle}
        setCategories([...categories, newCategory])
    }

    const handleDelete = (categoryId) => {
        console.log("DELETE");
        setCategories(categories.filter((category) => category.id !== categoryId));
    };
    
    return (
        <div className=' h-100'>

            {/* HEADER - BACKGROUND - PHOTO */}
            <div className='h-25 position-relative'>
                <div 
                    className='herebackground position-absolute top-0 start-0 h-100 w-100'
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
                            height: "calc(10vw + 3rem)",
                            width: "calc(10vw + 3rem)",
                            backgroundImage: "url(https://c8.alamy.com/comp/2GRX8GC/chef-avatar-cook-man-working-restaurant-services-profile-user-person-people-icon-vector-illustration-2GRX8GC.jpg)",
                            backgroundSize: "cover",
                            backgroundPosition: "center top"  
                            }}>
                    </div> 
                </div>
            </div>
            
            <div className='container mb-5 mt-3'>
                <Row className=''>
                    <h2>Categories</h2>
                </Row>
                <div className="d-flex px-4 overflow-auto flex-nowrap w-100 py-3">
                    
                    <Button 
                        className=' my-auto  border border-2 btn-light'
                        onClick={handleShowCategoryForm}
                        >
                        +
                    </Button>
                    {showCategoryForm && (
                        <InsertCategory 
                            onCancel={handelCloseCategoryForm} 
                            onSubmit={submitCategoryForm} 
                            showCategoryForm={showCategoryForm}
                            handelInsertNewCategory={handelInsertNewCategory}
                            />
                    )}
                    
                    {categories.map( (category) => {
                        return <CategoryCards 
                                    key={category.id}
                                    id={category.id}
                                    title={category.title} 
                                    updateCategoryForm={updateCategoryForm}
                                    handleDelete={handleDelete}
                                />
                    })}
                </div>
                
                <Row className='mt-4'>
                    <h2>Select Menu</h2>
                </Row>

                <Row lg={5} md={2} sm={2} className=' px-4'>
                    {SubCategories.map( (subCate) => {
                        return <SubCategoryCard 
                                    key={subCate.id}
                                    title={subCate.title} 
                                    description={subCate.description} 
                                    image={subCate.image} />
                    })}
       
                </Row>
            </div>
        </ div>
    )
}

export default MenuBuilder
