import { getAllRecipe } from 'api';
import { Container } from 'components/container/Container';
import { Home } from 'components/home/Home';
import { useEffect, useState } from 'react';
import { StyledTitle } from './HomePage.styled';

export const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const { data } = await getAllRecipe();
        setRecipes(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecipes();
  }, []);
  return (
    <Container>
      <StyledTitle>Your recipes</StyledTitle>
      <Home recipes={{ recipes, setRecipes }} />
    </Container>
  );
};
