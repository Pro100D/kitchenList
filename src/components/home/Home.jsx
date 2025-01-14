import { RecipeList } from 'components/recipeList/RecipeList';
import {
  StyledHomeBtnAdd,
  StyledHomeWrap,
  StyledSortInput,
} from './Home.styled';
import { useEffect, useState } from 'react';
import { AddForm } from 'components/addForm/AddForm';
import { Backdrop } from 'components/modalMenu/Backdrop';
import debounce from 'debounce';
import { StyledRecipeItemIcon } from 'components/recipeItem/RecipeItem.styled';

export const Home = ({ recipes }) => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [filteredText, setFilteredText] = useState('');

  const handleCloseOverlay = event => {
    if (event.target === event.currentTarget) {
      setIsOpenForm(prevState => !prevState);
    }
  };

  const filteredRecipes = recipes.recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(filteredText.toLowerCase())
  );

  useEffect(() => {
    const handleCloseEsc = event => {
      if (event.code === 'Escape') {
        setIsOpenForm(false);
        return;
      }
    };
    document.addEventListener('keydown', handleCloseEsc);
    return () => {
      document.removeEventListener('keydown', handleCloseEsc);
    };
  }, []);

  const isModalOpen = () => {
    if (isOpenForm) {
      return (document.body.style.overflow = 'hidden');
    }
    return (document.body.style.overflow = 'auto');
  };

  isModalOpen();

  return (
    <StyledHomeWrap>
      <StyledSortInput
        type="text"
        onChange={debounce(event => setFilteredText(event.target.value), 300)}
      />
      <RecipeList
        recipes={{ filteredRecipes, setRecipes: recipes.setRecipes }}
      />
      <StyledHomeBtnAdd type="button" onClick={() => setIsOpenForm(true)}>
        <StyledRecipeItemIcon name="plus" size="32" color="#696969" />
      </StyledHomeBtnAdd>
      {isOpenForm && (
        <Backdrop onClick={handleCloseOverlay}>
          <AddForm cancelClick={() => setIsOpenForm(false)} recipes={recipes} />
        </Backdrop>
      )}
    </StyledHomeWrap>
  );
};
