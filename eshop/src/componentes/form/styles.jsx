import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border-radius: 14px;
  flex-direction: column;
  padding: 14px;
  background-color: white;
  gap: 20px;
  width: 300px;
  height: 300px;
`;

export const Botao = styled.button`
background-color: #1f1f1f;
  color: white;
  padding: 10px 18px;
  border-radius: 10px;
  height: 42px;
  font-weight: 400;
  font-size: 0.8em;
  border: none;
  margin-top:20px;

  &:hover {
    cursor: pointer;
    background-color: #383838;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f9;
  border-radius: 8px;
`;

export const Input = styled.input`
  padding: 6px;
  border-radius: 4px;
  font-size: 1em;
  border: none;
  margin-top: 4px;

  &:focus {
    border-color: #00ff9d;
  }
`;

export const Label = styled.label`
  margin-top: 4px;
  font-size: 0.8em;
  font-weight: bold;
  color: #333;
`;
