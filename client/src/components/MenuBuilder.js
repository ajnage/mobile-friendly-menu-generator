import React, { useState, useEffect } from "react";

import CategoryCards from "./menu_builder/category/CategoryCards";
import AddCategoryCard from './menu_builder/category/AddCategoryCard'
import Header from "./menu_builder/Header";
import InsertSubCategory from "./menu_builder/sub_category/InsertSubCategory";
import SubCategoryCard from "./menu_builder/sub_category/SubCategoryCard";
import AddSubCategoryCard from './menu_builder/sub_category/AddSubCategoryCard'

import Row from "react-bootstrap/Row";
import axios from "axios";
import { categoriesData } from "./menu_builder/dummyData";
import { Button } from "@mui/material";

import {
  getItems,
  postItems
} from "../axios/API";


function MenuBuilder() {
  const [categories, setCategories] = useState(categoriesData);
  const [subCategories, setSubCategories] = useState([])
  const [oldSubCats, setOldSubCats] = useState([])

  useEffect(() => {
    getItems()
      .then(function (response) {
        // handle success
        console.log('Here is the response data', response.data);
        const prices = response.data.map(({ price }) =>
          price
        )
        console.log('Prices: ', prices)
        setOldSubCats(response.data)
        setSubCategories(response.data)
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

  const updateCategoryForm = (id, newTitle) => {
    const updatedCategories = categories.map((category) => {
      if (id === category.id) {
        return { ...category, title: newTitle };
      }
      return category;
    });
    setCategories(updatedCategories);
  };

  const saveData = () => {
    // A comparer used to determine if two entries are equal.
    const isSameItem = (subCategories, oldSubCats) => subCategories.name === oldSubCats.name && subCategories.desc === oldSubCats.desc && subCategories.price === oldSubCats.price && subCategories.image === oldSubCats.image && subCategories.category === oldSubCats.category;

    // Get items that only occur in the left array,
    // using the compareFunction to determine equality.
    const onlyInLeft = (left, right, compareFunction) =>
      left.filter(leftValue =>
        !right.some(rightValue =>
          compareFunction(leftValue, rightValue)));

    const onlyInNew = onlyInLeft(subCategories, oldSubCats, isSameItem);

    const result = [...onlyInNew];

    console.log('This should save data (placeholder)', result[0].category)

    postItems({ category: 'vegetarian', image: result[0].image, price: result[0].price, desc: result[0].desc, name: result[0].name })

    console.log('works? nah')
  }


  // If I remove the 'id' from the props, the new category doesn't have a title
  const handleInsertNewCategory = (id, newTitle) => {
    const newCategory = { id: categories.length + 1, title: newTitle };
    setCategories([...categories, newCategory]);
  };

  const handleDelete = (categoryId) => {
    console.log(categories);
    const newCategory = categories.filter((category) => {
      if (category.id === categoryId) {
        return false;
      } else {
        return true;
      }
    });
    setCategories(newCategory);
  };

  const updateSubCategoryForm = (newTitle, newDescription, newPrice, newImgURL) => {
    const updatedSubCategory = subCategories.map((subCategory) => {
      if (newTitle === subCategories.name) {
        console.log("updateSubCategoryForm");
        return {
          // ...subCategory,
          name: newTitle,
          desc: newDescription,
          price: newPrice,
          image: newImgURL,
        };
      }
      return subCategory;
    });
    setSubCategories(updatedSubCategory);
    console.log('subCategories after updating a subcategory: ', subCategories)
  };

  const handleInsertNewSubCategory = (newTitle, newDescription, newPrice, newImgURL) => {
    console.log("handleInsertNewSubCategory");
    const newSubCategory = {
      id: subCategories.length + 1,
      name: newTitle,
      desc: newDescription,
      price: newPrice,
      image: newImgURL,
    };
    console.log(newSubCategory);
    setSubCategories([...subCategories, newSubCategory]);
    console.log('subCategories after making a subcategory: ', subCategories)
  };

  return (
    <div className=" h-100">
      <Header />

      <div className="container mb-5 mt-3">
        <div className="mt-4 d-flex">
          <h2 className=" pe-3">Categories</h2>

        </div>

        <div className="d-flex px-4 overflow-auto flex-nowrap w-100 py-3">
          {categories.map((category) => {
            return (
              <CategoryCards
                key={category.id}
                id={category.id}
                title={category.title}
                updateCategoryForm={updateCategoryForm}
                handleDelete={handleDelete}
              />
            );
          })}
          <AddCategoryCard handleInsertNewCategory={handleInsertNewCategory} />
        </div>

        <div className="my-4 d-flex">
          <h2 className=" pe-3">Menu</h2>
          <InsertSubCategory
            handleInsertNewSubCategory={handleInsertNewSubCategory}
          />
        </div>

        <Row lg={5} md={2} sm={2} className=" px-4 d-flex" style={{ display: 'flex', alignItems: 'stretch' }}>
          {subCategories.map((dataObj) => {
            return (
              <SubCategoryCard
                key={dataObj.id}
                id={dataObj.id}
                title={dataObj.name}
                description={dataObj.desc}
                price={dataObj.price}
                image={dataObj.image}
                updateSubCategoryForm={updateSubCategoryForm}
              />
            );
          })}
          <AddSubCategoryCard handleInsertNewSubCategory={handleInsertNewSubCategory} />
        </Row>

      </div>
      {/* This should save to to the server the new menu*/}
      <Button variant="contained"
        sx={{
          width: "10vw",
          height: "4vh",
          mt: "5vh",
          ml: '45vw'
        }}
        onClick={saveData}>Save</Button>
    </div>
  );
}

export default MenuBuilder;