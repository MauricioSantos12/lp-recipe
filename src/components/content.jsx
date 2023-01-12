import "../css/content.scss"
import React, { useState } from "react";
import { get as _get } from "lodash";
//icons
import star from '../assets/icons/ic_star.svg';
import favorite from '../assets/icons/ic-favorite.svg';
import time from '../assets/icons/ic_time.svg';
import portion from '../assets/icons/ic_portion.svg';
import chef from '../assets/icons/ic_chef.svg'
//media
import muchim from '../assets/Ojingeo-muchim-5.png';
//context
import { ContextData } from '../Context'

const Content = () => {
  // const context = useContext(dataContext);
  const { dataRecipes } = ContextData();
  console.log("dataRecipes", dataRecipes);
  return (
    <div className="middle">
        <h2 className="textContent">Nuevas Recetas</h2>
        <div className="contCarrusel">
            <ul  className="carrusel">
              {
                dataRecipes.map(recipe => {
                  return(
                  <li className="card">
                    <div className="containerImage">
                      <img className="star" src={recipe.image ? recipe.image : muchim} alt={recipe.title}/>
                    </div>
                    <div className="primaryInfo" id="primaryInfo">
                      <div className="nameFood">
                          <span className="food">{recipe.title}</span>
                          <p className="foodDesc">{recipe.secondTitle}</p>
                      </div>
                      <div className="containerScore">
                        <div className="score">
                            <div className="contentStar">
                              <img className="star" src={star}/>
                              <span>{recipe.healthScore}</span>
                            </div>
                            <img className="heart" src={favorite} />
                        </div>
                      </div>
                    </div>
                    <div className="divhover" id="hover">
                      <div className="hoverTarjet">
                        <div className="descriptionHover">
                            <img className="imgHover" src={portion}/>
                            <span className="titleHover">Tamaño de la porción</span>
                            <span className="textHover">{recipe.servings} {' '} raciones</span>
                        </div>
                        <div className="descriptionHover">
                            <img className="imgHover" src={time} />
                            <span className="titleHover">Tiempo de preparación</span>
                            <span className="textHover">{recipe.readyInMinutes} {' '} minutos</span>
                        </div>
                        <div className="descriptionHover">
                            <img className="imgHover" src={chef} />
                            <span className="titleHover">Dificultad</span>
                            <span className="textHover">fácil</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  )
                })
              }
              
            </ul>
        </div>
    </div>
  );
}
export default Content;
