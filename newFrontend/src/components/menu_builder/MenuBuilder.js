import React from 'react'
import { useState } from 'react';

import Header from './Header';
import CategoryCards from './category/CategoryCards';
import SubCategoryCard from './sub_category/SubCategoryCard';
import InsertCategory from './category/InsertCategoryForm';
import InsertSubCategory from './sub_category/InsertSubCategory';

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

    const [subCategories, SetSubCategories] = useState([
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
        const newCategory = categories.filter((category) => {
            if (category.id === categoryId) {
                return false;
            }
            else { return true; }
        })

        setCategories(newCategory);
    };


    const updateSubCategoryForm = (id, newTitle, newDescription, newImgURL) => {
        const updatedSubCategory = subCategories.map((subCategory) => {
            if (id === subCategory.id) {
                return {...subCategory, title: newTitle, description: newDescription, image: newImgURL}
            }
            return subCategory;
        });
        SetSubCategories(updatedSubCategory);
    }

    const handelInsertNewSubCategory = (id, newTitle, newDescription, newImgURL) => {
        const newSubCategory = { id: id, title: newTitle, description: newDescription, image: newImgURL}
        SetSubCategories([...subCategories, newSubCategory])
    }

    return (
        <div className=' h-100'>     

            <Header />

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
                        return(
                            <CategoryCards 
                                key={category.id}
                                id={category.id}
                                title={category.title} 
                                updateCategoryForm={updateCategoryForm}
                                handleDelete={handleDelete}
                            />
                        )
                    })}
                </div>
                
                <div className='mt-4 d-flex'>
                    <h2 className=' pe-3'>Select Menu </h2>
                    <InsertSubCategory handelInsertNewSubCategory={handelInsertNewSubCategory} />
                </div>
                
                
                <Row lg={5} md={2} sm={2} className=' px-4'>
                    {subCategories.map( (subCategory) => {
                        return(
                            <SubCategoryCard 
                                key={subCategory.id}
                                id={subCategory.id}
                                title={subCategory.title} 
                                description={subCategory.description} 
                                image={subCategory.image}
                                updateSubCategoryForm={updateSubCategoryForm}s
                            />
                        )
                    })}
                </Row>
            </div>
        </ div>
    )
}

export default MenuBuilder
