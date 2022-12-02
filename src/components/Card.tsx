import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface recipe {
  id: string;
  products: string[];
  title: string;
  description: string;
  image: string;
  steps: {
    image__url: string,
    text: string,
  };
  setCount(lenght: number): void;
}

function Card(props: recipe) {
  const [checked, setChecked] = useState<boolean>();

  let products;
  if (props.products.length > 3) {
    products = props.products.slice(0, 3);
    products = products.join(', ');
    products += '...';
  } else products = props.products.join(', ');

  useEffect(() => {
    if (localStorage.getItem(props.id) == undefined) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  }, []);

  const changeChecked = (e: boolean) => {
    // добавление/удаление в localStorage
    if (e) {
      localStorage.setItem(props.id, JSON.stringify(props));
    } else {
      localStorage.removeItem(props.id);
    }
  };

  return (
    <div className="card">
      <div className="card__title">{props.title}</div>
      <img className="card__image" src={props.image} alt="" />
      <ul className="card__ingredient">
        <li>{products}</li>
      </ul>
      <div className="card__desc">{props.description}</div>
      <div className="favourite">
        <label className="favourite__label">
          <input
            type="checkbox"
            name="favourite"
            id="favourite"
            className="favourite__checkbox"
            checked={checked}
            onChange={(e) => {
              changeChecked(e.target.checked);
              setChecked(e.target.checked);
              props.setCount(localStorage.length);
            }}
          />
          <span className="checkmark"></span>
        </label>
      </div>
      <Link
        to={`/recipe/${props.id}`}
        state={{
          id: props.id,
          title: props.title,
          description: props.description,
          products: props.products,
          image: props.image,
          steps: props.steps,
        }}
      >
        <div className="button__light">Открыть</div>
      </Link>
    </div>
  );
}

function CardList(props: any) {
  const recipeList = props.recipes.map((recipe: any) => {
    return (
      <Card
        id={recipe.id}
        title={recipe.title}
        description={recipe.description}
        products={recipe.products}
        image={
          recipe.main_img_url.startsWith('//') ? 'http:' + recipe.main_img_url : recipe.main_img_url
        }
        steps={recipe.steps}
        setCount={props.setCount}
      />
    );
  });
  return <div>{recipeList}</div>;
}

export default CardList;
