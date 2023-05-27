import React, { useState } from "react";

import CategoryCards from "./menu_builder/category/CategoryCards";
import AddCategoryCard from './menu_builder/category/AddCategoryCard'
import Header from "./menu_builder/Header";
import InsertSubCategory from "./menu_builder/sub_category/InsertSubCategory";
import SubCategoryCard from "./menu_builder/sub_category/SubCategoryCard";
import AddSubCategoryCard from './menu_builder/sub_category/AddSubCategoryCard'

import Row from "react-bootstrap/Row";

import { categoriesData, subCategoriesData } from "./menu_builder/dummyData";

function MenuBuilder() {
  const [categories, setCategories] = useState(categoriesData);
  const [subCategories, SetSubCategories] = useState(subCategoriesData);

  const updateCategoryForm = (id, newTitle) => {
    const updatedCategories = categories.map((category) => {
      if (id === category.id) {
        return { ...category, title: newTitle };
      }
      return category;
    });
    setCategories(updatedCategories);
  };

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

  const updateSubCategoryForm = (id, newTitle, newDescription, newImgURL) => {
    const updatedSubCategory = subCategories.map((subCategory) => {
      if (id === subCategory.id) {
        console.log("updateSubCategoryForm");
        return {
          ...subCategory,
          title: newTitle,
          description: newDescription,
          image: newImgURL,
        };
      }
      return subCategory;
    });
    SetSubCategories(updatedSubCategory);
  };

  const handleInsertNewSubCategory = (newTitle, newDescription, newImgURL) => {
    console.log("handleInsertNewSubCategory");
    const newSubCategory = {
      id: subCategories.length + 1,
      title: newTitle,
      description: newDescription,
      image: newImgURL,
    };
    console.log(subCategories);
    console.log(newSubCategory);
    SetSubCategories([...subCategories, newSubCategory]);
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
          {subCategories.map((subCategory) => {
            return (
              <SubCategoryCard
                key={subCategory.id}
                id={subCategory.id}
                title={subCategory.title}
                description={subCategory.description}
                image={subCategory.image}
                updateSubCategoryForm={updateSubCategoryForm}
              />
            );
          })}
          <AddSubCategoryCard handleInsertNewSubCategory={handleInsertNewSubCategory}/>
        </Row>
      </div>
    </div>
  );
}

export default MenuBuilder;
