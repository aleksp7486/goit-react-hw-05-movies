import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;
export const StyledLink = styled(Link)`
  color: ${p => p.theme.colors.primary};
  /* font-weight: 700; */
  transition: all 0.2s linear;
  :hover {
    color: ${p => p.theme.colors.secondary};
    transform: translatex(${p => p.theme.space[3]}px);
  }
  span {
    margin-right: ${p => p.theme.space[3]}px;
  }
`;
