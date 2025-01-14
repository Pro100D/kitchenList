import { addNewRecipe, editRecipe } from 'api';
import { useState } from 'react';
import {
  StyledForm,
  StyledFormButton,
  StyledFormContainer,
  StyledFormGroup,
  StyledFormInput,
  StyledFormLabel,
  StyledFormTextarea,
  StyledFromCancelButton,
} from './AddForm.styled';

export const AddForm = ({
  cancelClick,
  recipe,
  isEdit,
  recipes: { setRecipes },
}) => {
  const [title, setTitle] = useState(recipe?.name ?? '');
  const [ingredients, setIngredients] = useState(recipe?.ingredients ?? '');
  const [description, setDescription] = useState(recipe?.description ?? '');
  const [calories, setCalories] = useState(recipe?.calories ?? 0);
  const [weight, setWeight] = useState(recipe?.weight ?? 0);
  const [image, setImage] = useState(recipe?.image);
  const [cooking, setCooking] = useState(recipe?.cooking ?? '');
  const [favorite] = useState(recipe?.favorite ?? false);
  const onSubmitForm = async event => {
    event.preventDefault();

    let base64Image = null;

    if (image && image instanceof File) {
      const reader = new FileReader();
      const fileRead = new Promise(resolve => {
        reader.onload = () => resolve(reader.result.split(',')[1]);
      });
      reader.readAsDataURL(image);
      base64Image = await fileRead;
    }

    const formData = {
      name: title,
      ingredients:
        typeof ingredients === 'string'
          ? ingredients.trim().split(',')
          : ingredients,
      calories: Number(calories),
      weight: Number(weight),
      description,
      favorite,
      cooking,
      image: base64Image || (isEdit ? null : undefined),
    };

    if (!isEdit) {
      const { data } = await addNewRecipe(formData);
      setRecipes(prevState => [data, ...prevState]);
    } else {
      const updateData = { ...formData };
      if (!base64Image) delete updateData.image;

      const { data } = await editRecipe(updateData, recipe.id);

      setRecipes(prevState => [
        ...prevState.map(recipe => (recipe.id === data.id ? data : recipe)),
      ]);
    }

    cancelClick();
  };

  const isModalOpen = () => {
    if (isEdit) {
      return (document.body.style.overflow = 'hidden');
    }
    return (document.body.style.overflow = 'auto');
  };

  isModalOpen();

  return (
    <StyledFormContainer>
      <StyledForm onSubmit={onSubmitForm}>
        <StyledFormGroup>
          <StyledFormLabel htmlFor="title">Recipe Title:</StyledFormLabel>
          <StyledFormInput
            type="text"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </StyledFormGroup>

        <StyledFormGroup>
          <StyledFormLabel htmlFor="ingredients">Ingredients:</StyledFormLabel>
          <StyledFormTextarea
            id="ingredients"
            value={ingredients}
            onChange={e => setIngredients(e.target.value)}
            placeholder="Enter ingredients, one per line"
            required
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledFormLabel htmlFor="description">Description:</StyledFormLabel>
          <StyledFormTextarea
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Describe how to make the dish"
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledFormLabel htmlFor="cooking">Cooking:</StyledFormLabel>
          <StyledFormTextarea
            id="cooking"
            value={cooking}
            onChange={e => setCooking(e.target.value)}
            placeholder="cooking"
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledFormLabel htmlFor="calories">Recipe calories:</StyledFormLabel>
          <StyledFormInput
            type="text"
            id="calories"
            value={calories}
            onChange={e => setCalories(e.target.value)}
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledFormLabel htmlFor="weight">Recipe weight:</StyledFormLabel>
          <StyledFormInput
            type="text"
            id="weight"
            value={weight}
            onChange={e => setWeight(e.target.value)}
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledFormLabel htmlFor="image">Upload an Image:</StyledFormLabel>
          <StyledFormInput
            type="file"
            id="image"
            onChange={e => setImage(e.target.files[0])}
            accept="image/*"
          />
        </StyledFormGroup>
        <StyledFormButton type="submit">Submit Recipe</StyledFormButton>
      </StyledForm>
      <button type="button" onClick={() => cancelClick(false)}>
        <StyledFromCancelButton name="cancel" size="24" color="#e85858" />
      </button>
    </StyledFormContainer>
  );
};
