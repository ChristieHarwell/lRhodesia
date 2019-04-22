import styled from 'styled-components';

export const ButtonContainer = styled.button `
  text-transform: caplitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightGrey);
  border-color: ${props => props.cart ? "var(--green)" : "var(--blue)"};
  color: ${prop => prop.cart ? "var(--green)" : "var(--blue)"};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0.5rem;
  transition: all 0.5 ease-in-out;
  &:hover{
    background: ${prop => prop.cart ? "var(--green)" : "var(--blue)"};
    color: var(--white);
  }
  &:focus{
    outline: none;
  }
`;

export const ButtonContainer2 = styled.button `
  text-transform: caplitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightGrey);
  color: var(--blue);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0.5rem;
  transition: all 0.5 ease-in-out;
  &:hover{
    background: var(--green);
    color: var(--white)
  }
  &:focus{
    outline: none;
  }
`;