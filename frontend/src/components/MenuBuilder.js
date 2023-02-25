import React from 'react'
import Category from './Category'

function MenuBuilder() {
  return (
    <div className='menue_builder'>

        {/* BACKGROUND AND LOGO */}
        <div class="containerR">
            <div class="circleR">

            </div>
        </div>



        {/* Featured Items */}
        <Category CategoryTitle="FOOD" subCategoryTitle="BURGERS" />
        <Category CategoryTitle="DRINKS" subCategoryTitle="Special Drinks"/>
        <Category CategoryTitle="HAPPY HOUR" subCategoryTitle="Whats good"/>
        <Category CategoryTitle="DESERT" subCategoryTitle="Cakes"/>

    </div>
  )
}

export default MenuBuilder
