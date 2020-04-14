import React from 'react';

import ingredientsClass from './BurguerIngredients.module.css';

const burguerIngredients = (props) => {
  let ingredient = null;

  const types = {
    'bread-bottom': () => {
      ingredient = <div className={ingredientsClass.BreadBottom}></div>;
    },
    'bread-top': () => {
      ingredient = (
        <div className={ingredientsClass.BreadTop}>
          <div className={ingredientsClass.Seeds1}></div>
          <div className={ingredientsClass.Seeds2}></div>
        </div>
      );
    },
    'meat': () => {
      ingredient = <div className={ingredientsClass.Meat}></div>;
    },
    'cheese': () => {
      ingredient = <div className={ingredientsClass.Cheese}></div>;
    },
    'bacon': () => {
      ingredient = <div className={ingredientsClass.Bacon}></div>;
    },
    'salad': () => {
      ingredient = <div className={ingredientsClass.Salad}></div>;
    },
    default: () => ingredient = null,
  };
  types[props.type]();
};

export default burguerIngredients;