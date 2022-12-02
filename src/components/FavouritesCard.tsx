import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';

function FavCard(props: any) {

  let products;
  if (props.recipe.products.length > 3) {
    products = props.recipe.products.slice(0, 3);
    products = products.join(', ');
    products += '...';
  } else products = props.recipe.products.join(', ');

  const delLocalStorage = () => {
    localStorage.removeItem(props.recipe.id);
    console.log(props.recipe.id)
    props.setDel(props.recipe.id);
  }

  return (
    <div className="card">
      <div className="card__title">{props.recipe.title}</div>
      <img className="card__image" src={props.recipe.image} alt="" />
      <ul className="card__ingredient flex">
        <li>{products}</li>
      </ul>
      <div className="card__desc">{props.recipe.description}</div>
      <div className="delete" onClick={delLocalStorage}>
        <FontAwesomeIcon icon={solid('trash')} />
      </div>
      <Link
        to={`/recipe/${props.recipe.id}`}
        state={{
          id: props.recipe.id,
          title: props.recipe.title,
          description: props.recipe.description,
          products: props.recipe.products,
          image: props.recipe.image,
          steps: props.recipe.steps,
        }}
      >
        <div className="button__light">Открыть</div>
      </Link>
    </div>
  );
}

function FavCardList(props: any) {
  if(props.favRecipes) {
    const favRecipeList = props.favRecipes.map((recipe: any) => {
      return <FavCard setDel={props.setDel} recipe={recipe} />;
    });
    return <div>{favRecipeList}</div>;
  } else {
    return <div></div>
  }
}

export default FavCardList;
