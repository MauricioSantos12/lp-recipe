import axios from 'axios';

export async function getRecipes(){
    try {
      let response = await axios({
        method: "GET",
        url: `https://api.spoonacular.com/recipes/random?number=4&apiKey=${process.env.REACT_APP_API}`,
        headers: { "Content-Type": 'application/json',},
      });
    return response;
    } catch (error) {
      console.log("Error: ", error);
      return error;
    }
  }