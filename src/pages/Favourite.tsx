import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import Header from '../components/Header';
import FixedBg from '../components/FixedBg';
import FavouriteCard from '../components/FavouritesCard';
import { count } from 'console';

function Favourite() {

  const [favRecipes, setFavRecipes] = useState<Array<Object>>([]);
  const [del, setDel] = useState('')
  const [count, setCount] = useState<number>(localStorage.length);

  const readLocalStorage = () => {
    const keys = Object.keys(localStorage);
    const recipe = []
    for (let i = 0; i < keys.length; i++) {
      const recipeData = localStorage.getItem(keys[i]);
      recipe[i] = JSON.parse(recipeData || '');
    }
    setFavRecipes(recipe)
  }

  useEffect( () => {
    readLocalStorage();
    setCount(localStorage.length);
  },[del]);
 

  return (
    <div>
      <Header count={count} />
      <div className="favourite__items">
        <Link to="/">
          <div className="link__home">
            <FontAwesomeIcon icon={solid('chevron-left')} />
            <p>Вернуться к поиску</p>
          </div>
        </Link>
        <FavouriteCard setDel={setDel} favRecipes={favRecipes} />
      </div>
      <FixedBg />
    </div>
  );
}

export default Favourite;
