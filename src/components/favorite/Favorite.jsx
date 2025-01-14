import { StyledSortInput } from 'components/home/Home.styled';
import { RecipeList } from 'components/recipeList/RecipeList';
import debounce from 'debounce';
import { useState } from 'react';

export const Favorite = ({ favoriteRecipe, setRecipes }) => {
  const [filteredText, setFilteredText] = useState('');
  const filteredRecipes = favoriteRecipe.filter(recipe =>
    recipe.name.toLowerCase().includes(filteredText.toLowerCase())
  );
  return (
    <div>
      <StyledSortInput
        type="text"
        onChange={debounce(event => setFilteredText(event.target.value), 300)}
      />
      <RecipeList isFavorite={true} recipes={{ filteredRecipes, setRecipes }} />
    </div>
  );
};
