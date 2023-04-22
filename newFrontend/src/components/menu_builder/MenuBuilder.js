import React from "react";
import { useState } from "react";

import Header from "./Header";
import CategoryCards from "./category/CategoryCards";
import SubCategoryCard from "./sub_category/SubCategoryCard";
import InsertCategory from "./category/InsertCategoryForm";
import InsertSubCategory from "./sub_category/InsertSubCategory";

import Row from "react-bootstrap/Row";

import { categoriesData, subCategoriesData } from "./dummyData";

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

  const handleInsertNewCategory = (id, newTitle) => {
    const newCategory = { id: id, title: newTitle };
    setCategories([...categories, newCategory]);
  };

  const handleDelete = (categoryId) => {
    console.log("DELETE");
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

  const handleInsertNewSubCategory = (
    id,
    newTitle,
    newDescription,
    newImgURL
  ) => {
    const newSubCategory = {
      id: id,
      title: newTitle,
      description: newDescription,
      image: newImgURL,
    };
    SetSubCategories([...subCategories, newSubCategory]);
  };

  return (
    <div className=" h-100">
      <Header />

      <div className="container mb-5 mt-3">
        <div className="mt-4 d-flex">
          <h2 className=" pe-3">Categories</h2>
          <InsertCategory handleInsertNewCategory={handleInsertNewCategory} />
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
        </div>

        <div className="my-4 d-flex">
          <h2 className=" pe-3">Menu</h2>
          <InsertSubCategory
            handleInsertNewSubCategory={handleInsertNewSubCategory}
          />
        </div>

        <Row lg={5} md={2} sm={2} className=" px-4">
          {subCategories.map((subCategory) => {
            return (
              <SubCategoryCard
                key={subCategory.id}
                id={subCategory.id}
                title={subCategory.title}
                description={subCategory.description}
                image={subCategory.image}
                updateSubCategoryForm={updateSubCategoryForm}
                s
              />
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default MenuBuilder;
