import styled from 'styled-components';

export const LoadBtn = styled.button`
  margin-bottom: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[3]}px;
  font: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: 700;
  color: inherit;
  background-color: inherit;
  border: 1px solid #d1d5db;
  border-radius: ${p => p.theme.radii.normal};
  transition: color 0.2s linear;
  :hover {
    color: ${p => p.theme.colors.accent};
  }
`;
