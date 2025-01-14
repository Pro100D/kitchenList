import { RecipeItem } from 'components/recipeItem/RecipeItem';
import { StyledRecipeList } from './RecipeList.styled';

export const RecipeList = ({ recipes, isFavorite }) => {
  return (
    <StyledRecipeList>
      {recipes.filteredRecipes.map(recipe => (
        <RecipeItem
          recipe={recipe}
          key={recipe._id}
          recipes={recipes}
          isFavorite={isFavorite}
        />
      ))}
    </StyledRecipeList>
  );
};
