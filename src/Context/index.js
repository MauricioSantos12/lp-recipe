import React, { createContext, useState, useEffect, useContext } from "react";
import { get as _get } from "lodash";
import { getRecipes } from "../actions/RecipesActions"
import muchim1 from '../assets/Ojingeo-muchim.png';
import muchim5 from '../assets/Ojingeo-muchim-1.png';
import muchim from '../assets/Ojingeo-muchim-5.png';
import cherry from '../assets/cherry.png';
const contextProvider = createContext();


export function ContextProvider(props) {
  const [dataRecipes, setDataRecipes] = useState([])
  
    /// ---------- Queries ---------- ///
  
    useEffect(() => {
        const getData = async () => {
          let recipesBase = [
            {
              image: muchim,
              title: 'Ojingeo',
              secondTitle: 'Muchim',
              healthScore: '5.0',
              servings: '4',
              readyInMinutes: '10',
              chefText: 'fácil'
            },
            {
              image: muchim1,
              title: 'Cola',
              secondTitle: 'Chicken',
              healthScore: '5.0',
              servings: '4',
              readyInMinutes: '10',
              chefText: 'fácil'
            },
            {
              image: muchim5,
              title: 'Roasted',
              secondTitle: 'Carrot',
              healthScore: '4.5',
              servings: '4',
              readyInMinutes: '10',
            },
            {
              image: cherry,
              title: 'Sweet',
              secondTitle: 'Cherries',
              healthScore: '4.0',
              servings: '4',
              readyInMinutes: '10',
            },
          ]
          let data = await getRecipes();
          data = _get(data, "data.recipes", []);
          data.forEach((recipe, index) => {
            let auxTitle = '';
            let auxSecondTitle = '';
            let arrayTitle = recipe.title.split(' ');
            // recipe[index].title = '';
            arrayTitle.forEach((element, indexTitle) => {
              if(indexTitle > (arrayTitle.length - 1)/2){
                auxSecondTitle = auxSecondTitle + ' ' + element
              }else{
                auxTitle = auxTitle + ' ' + element
              }
            });
            data[index].title = auxTitle;
            data[index].secondTitle = auxSecondTitle;
          });
          if(data.length == 0) data = recipesBase;
          setDataRecipes(data);
        }
        getData();
      }, [])

    const value = { dataRecipes, setDataRecipes }
  
    return (
      <contextProvider.Provider value={value} {...props} />
    );
  }
  

export function ContextData(){
    let context = useContext(contextProvider);
    let recipesBase = [
      {
        image: muchim,
        title: 'Ojingeo',
        secondTitle: 'Muchim',
        healthScore: '5.0',
        servings: '4',
        readyInMinutes: '10',
        chefText: 'fácil'
      },
      {
        image: muchim1,
        title: 'Cola',
        secondTitle: 'Chicken',
        healthScore: '5.0',
        servings: '4',
        readyInMinutes: '10',
        chefText: 'fácil'
      },
      {
        image: muchim5,
        title: 'Roasted',
        secondTitle: 'Carrot',
        healthScore: '4.5',
        servings: '4',
        readyInMinutes: '10',
      },
      {
        image: cherry,
        title: 'Sweet',
        secondTitle: 'Cherries',
        healthScore: '4.0',
        servings: '4',
        readyInMinutes: '10',
      },
    ]
    if(!context){
        context = { 
            dataRecipes: recipesBase
        }
    }
    return context;
}
  