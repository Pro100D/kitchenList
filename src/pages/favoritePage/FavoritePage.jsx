import { getFavoriteRecipes } from 'api/favorite';
import { Container } from 'components/container/Container';
import { Favorite } from 'components/favorite/Favorite';
import { useEffect, useState } from 'react';
import { StyledTitle } from 'pages/homePage/HomePage.styled';

export const FavoritePage = () => {
  const [favoriteRecipe, setFavoriteRecipe] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const { data } = await getFavoriteRecipes();
        setFavoriteRecipe(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecipes();
  }, []);
  return (
    <Container>
      <StyledTitle>Favorite Recipes</StyledTitle>
      <Favorite
        favoriteRecipe={favoriteRecipe}
        setRecipes={setFavoriteRecipe}
      />
    </Container>
  );
};
