import { AddForm } from 'components/addForm/AddForm';
import {
  StyledModalMenuCloseButton,
  StyledModalMenuDesc,
  StyledModalMenuDetails,
  StyledModalMenuIcon,
  StyledModalMenuIngr,
  StyledModalMenuTitle,
  StyledModalMenuWrap,
  StyledModalMenuWrapText,
  StyledModelMenu,
} from './ModalMenu.styled';
import { StyledRecipeImg } from 'components/recipeItem/RecipeItem.styled';

export const ModalMenu = ({ cancelClick, recipe, isEdit, recipes }) => {
  return (
    <>
      {isEdit ? (
        <AddForm
          cancelClick={cancelClick}
          recipe={recipe}
          isEdit={isEdit}
          recipes={recipes}
        />
      ) : (
        <StyledModelMenu>
          <StyledModalMenuCloseButton
            type="button"
            onClick={() => cancelClick(false)}
            autoFocus={true}
          >
            <StyledModalMenuIcon
              name="cancel"
              size="24"
              color="rgb(105, 105, 105)"
            />
          </StyledModalMenuCloseButton>
          <StyledModalMenuTitle>{recipe.name}</StyledModalMenuTitle>
          <StyledModalMenuWrap>
            <StyledModalMenuIngr>
              {recipe.ingredients.map(ingredient => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </StyledModalMenuIngr>
            <StyledRecipeImg src={recipe.image} />
          </StyledModalMenuWrap>
          <StyledModalMenuWrapText>
            <StyledModalMenuDesc>{recipe.description}</StyledModalMenuDesc>
            <p>Cooking: {recipe.cooking}</p>
          </StyledModalMenuWrapText>
          <StyledModalMenuDetails>
            <p>Calories: {recipe.calories} kcal</p>
            <p>Weight: {recipe.weight} g</p>
          </StyledModalMenuDetails>
        </StyledModelMenu>
      )}
    </>
  );
};
