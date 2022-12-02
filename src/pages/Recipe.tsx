import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Header from '../components/Header';

function IngredientList(props: any) {
  const ingredientList = props.products.map((item: string) => {
    return (
      <li className="ingredient__item">{item}</li>
    );
  });
  return <div>{ingredientList}</div>;
};
function Steps(props: any) {
  const stepList = props.steps.map((item: {image_url: string, text: string}) => {
    return (
      <li className="algoritm__item">
        <p>{item.text}</p>
        <img src={item.image_url} alt="фото шага" />  
      </li>
    );
  });
  return <div>{stepList}</div>;
};

function Recipe() {
  
  const count = localStorage.length
  let location = useLocation();

  return (
    <div>
      <Header count={count} />
      <div className="recipe">
        <div className="container">
          <Link to="/">
            <div className="link__home">
              <FontAwesomeIcon icon={solid("chevron-left")} />
              <p>Вернуться к поиску</p>
            </div>
          </Link>
          <div className="recipe__title">
            <h2 className="recipe__h2">{location.state.title}</h2>
          </div>
          <div className="recipe__flex">
            <div className="recipe__img">
              <img src={location.state.image} alt="cardImg" />
            </div>
            <div className="recipe__ingredient">
              <div className="ingredient__title">
                <p>Ингредиенты:</p>
              </div>
              <ul className="ingredient__list">
                <IngredientList products={location.state.products} />
              </ul>
            </div>
          </div>
          <div className="recipe__algoritm">
              <div className="algoritm__title">
                <p>Рецепт:</p>
              </div>
              <ul className="algoritm__list">
                <Steps steps={location.state.steps}/>
              </ul>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
