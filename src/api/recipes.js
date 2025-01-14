import axios from 'axios';

export const getAllRecipe = async () => {
  const response = await axios.get('/recipes');
  return response.data;
};

export const addNewRecipe = async newRecipe => {
  const response = await axios.post(`/recipes`, newRecipe);
  return response;
};

export const editRecipe = async (editedRecipe, recipeId) => {
  const response = await axios.patch(`/recipes/${recipeId}`, editedRecipe);
  return response;
};

export const deleteRecipe = async recipeId => {
  const response = await axios.delete(`/recipes/${recipeId}`);
  return response.data;
};
