import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  border: 1px solid #d1d5db;
  margin-bottom: ${p => p.theme.space[4]}px;
  @media (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 500px;
  }
`;

export const Input = styled.input`
  flex: 1;
  margin-right: 10px;
  border-color: transparent;
  font-size: inherit;
  padding-left: ${p => p.theme.space[3]}px;
`;

export const Btn = styled.button`
  align-items: center;
  display: flex;
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[2]}px;
  border: 0;
  font-size: inherit;
  background-color: inherit;
  transition: color 0.2s linear;
  :hover {
    color: ${p => p.theme.colors.accent};
  }
  span {
    margin-right: ${p => p.theme.space[2]}px;
  }
`;
