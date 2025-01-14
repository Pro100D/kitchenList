import { useEffect, useState } from 'react';
import {
  StyledRecipeButton,
  StyledRecipeImg,
  StyledRecipeItem,
  StyledRecipeItemBtn,
  StyledRecipeItemBtnWrap,
  StyledRecipeItemDescr,
  StyledRecipeItemIcon,
  StyledRecipeName,
  StyledRecipeWrapper,
} from './RecipeItem.styled';
import { Backdrop } from 'components/modalMenu/Backdrop';
import { ModalMenu } from 'components/modalMenu/ModalMenu';
import { deleteRecipe, editRecipe } from 'api';

export const RecipeItem = ({ recipe, recipes, isFavorite }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleCloseOverlay = event => {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
      setIsEdit(false);
    }
  };

  const handleDeleteRecipe = async id => {
    const { data } = await deleteRecipe(id);
    recipes.setRecipes(prevState => [
      ...prevState.filter(recipe => recipe.id !== data.id),
    ]);
  };

  const handleChangeFavorite = async () => {
    const editedRecipe = {
      name: recipe.name,
      calories: recipe.calories,
      description: recipe.description,
      ingredients: recipe.ingredients,
      weight: recipe.weight,
      cooking: recipe.cooking,
      favorite: !recipe.favorite,
    };
    try {
      const { data } = await editRecipe(editedRecipe, recipe.id);
      if (isFavorite) {
        recipes.setRecipes(prevState => [
          ...prevState.filter(recipe => recipe.id !== data.id),
        ]);
      } else {
        recipes.setRecipes(prevState => [
          ...prevState.map(recipe => (recipe.id === data.id ? data : recipe)),
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleCloseEsc = event => {
      if (event.code === 'Escape' && isEdit) {
        setIsOpen(false);
        setIsEdit(false);
        return;
      }
    };
    document.addEventListener('keydown', handleCloseEsc);
    return () => {
      document.removeEventListener('keydown', handleCloseEsc);
    };
  }, [isEdit]);

  const isModalOpen = () => {
    if (isOpen) {
      return (document.body.style.overflow = 'hidden');
    }
    return (document.body.style.overflow = 'auto');
  };

  const iconColor = recipe.favorite ? 'rgb(105, 105, 105)' : '#ffffff';

  isModalOpen();
  return (
    <StyledRecipeItem>
      <StyledRecipeName>{recipe.name}</StyledRecipeName>
      <StyledRecipeWrapper>
        <StyledRecipeItemBtn type="button" onClick={handleChangeFavorite}>
          <StyledRecipeItemIcon name="heart" size="24" color={iconColor} />
        </StyledRecipeItemBtn>
        <StyledRecipeImg src={recipe.image} alt="" />
        <StyledRecipeItemBtnWrap>
          <StyledRecipeButton
            type="button"
            onClick={() => handleDeleteRecipe(recipe.id)}
          >
            <StyledRecipeItemIcon
              name="bin"
              size="24"
              color="rgb(105, 105, 105)"
            />
          </StyledRecipeButton>
          <div>
            <StyledRecipeButton type="button" onClick={() => setIsOpen(true)}>
              <StyledRecipeItemIcon
                name="moreInfo"
                size="20"
                color="rgb(105, 105, 105)"
              />
            </StyledRecipeButton>
            <StyledRecipeButton type="button" onClick={() => setIsEdit(true)}>
              <StyledRecipeItemIcon
                name="pencil"
                size="20"
                color="rgb(105, 105, 105)"
              />
            </StyledRecipeButton>
          </div>
        </StyledRecipeItemBtnWrap>
      </StyledRecipeWrapper>
      {isOpen && (
        <Backdrop onClick={handleCloseOverlay}>
          <ModalMenu recipe={recipe} cancelClick={setIsOpen} />
        </Backdrop>
      )}
      {isEdit && (
        <Backdrop onClick={handleCloseOverlay}>
          <ModalMenu
            recipe={recipe}
            cancelClick={setIsEdit}
            isEdit={isEdit}
            recipes={recipes}
          />
        </Backdrop>
      )}
      <StyledRecipeItemDescr>{recipe.description}</StyledRecipeItemDescr>
    </StyledRecipeItem>
  );
};
