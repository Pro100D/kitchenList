import axios from 'axios';

export const getFavoriteRecipes = async () => {
  const response = await axios.get('/recipes/favorite');
  return response.data;
};
