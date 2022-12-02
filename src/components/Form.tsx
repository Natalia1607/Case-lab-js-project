import React, { useState, useEffect } from 'react';

function Form(props: any) {
  const url = 'http://178.250.159.176:3000/';

  let kitchen = 'Все';
  let type = 'Все';

  const [searchInput, setSearchInput] = useState('');
  const [types , setTypes] = useState([{_id:'127364',name:'Все'}]);
  const [kitchens, setKitchens] = useState([{_id:'fvtg6yik7',name:'Все'}]);


  const handleButton = async (e: any) => {
    e.preventDefault();
    const dataRecipes = await fetch(`${url}api? + (searchInput ? products=${searchInput} : '') + (kitchen != 'Все' ? &kitchen=${kitchen} : '') + (type != 'Все' ? &type=${type} : '')`);

    const recipes = await dataRecipes.json();
    props.props.setRecipes(recipes);
    console.log(recipes)
  };

  useEffect(() => {

    fetch(url + 'api/kitchens')
    .then(e => e.json())
    .then((json) => {
      setKitchens([...kitchens,...json]);
    });
    fetch(url + 'api/types')
    .then(e => e.json())
    .then((json) => {
      setTypes([...types,...json]);
    });
  }, []);

  return (
    <div className="main">
      <div className="container">
        <form className="search__form">
          <label>Желаемые ингредиенты:</label>
          <input type="text" id="searchMeal" className="search__meal" placeholder='памидора, агуречег' onChange={e => {setSearchInput(e.target.value)}} />
          <div className="select__wrapp">
            <div className="select">
              <label>Кухня:</label>
              <select name="selectKitchen" id="selectKitchen" className="select__kitchen" onChange={e => {kitchen = e.target.value}}>
                { kitchens.map(e => <option key={e._id  + '1'} value={e.name}> {e.name} </option>) }
              </select>
            </div>
            <div className="select">
              <label>Тип блюда:</label>
              <select name="selectDish" id="selectDish" className="select__dish" onChange={e => {type = e.target.value}}>
              { types.map(e => <option key={e._id} value={e.name}> {e.name} </option>) }
              </select>
            </div>
          </div>
          <button className="button__dark" type="submit" onClick={handleButton}>
            Найти рецепты
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;