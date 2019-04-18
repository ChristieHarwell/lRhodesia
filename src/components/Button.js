import styled from 'styled-components';

export const buttonContainer = styled.button `
  text-transformation: caplitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.5rem solid var(--lightGrey);
  color: var(--grey);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0.5rem;
  transition: all 0.5 ease-in-out;
  &:hover{
    background: var(--lightGrey);
    color: var(--grey)
  }
  &:focus{
    outline: none;
  }
`;
