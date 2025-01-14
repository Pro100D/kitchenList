import styled from '@emotion/styled';
import { Icon } from 'components/Icon';

export const StyledFormContainer = styled.div`
  position: relative;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledFormLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const StyledFormInput = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #4caf50;
    outline: none;
  }
`;

export const StyledFormTextarea = styled.textarea`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #4caf50;
    outline: none;
  }
`;

export const StyledFormButton = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #4caf50;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #388e3c;
  }
`;

export const StyledFromCancelButton = styled(Icon)`
  position: absolute;
  top: 5px;
  right: 5px;
  fill: rgb(105, 105, 105);

  &:hover {
    fill: rgb(68, 68, 68);
  }
`;
