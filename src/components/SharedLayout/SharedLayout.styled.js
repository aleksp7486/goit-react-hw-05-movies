import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 900px;
  padding-bottom: 30px;
  @media (max-width: 767px) {
    padding-left: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[4]}px;
  }
`;

export const Header = styled.header`
  padding: ${p => p.theme.space[5]}px 0;
`;
export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`;
export const NavItem = styled.li``;

export const StyledLink = styled(NavLink)`
  display: block;
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: 700;
  text-decoration: none;
  border-bottom: 1px solid #d1d5db;
  transition: color 0.2s linear;
  :hover:not(.active) {
    color: ${p => p.theme.colors.secondary};
  }

  &.active {
    color: ${p => p.theme.colors.accent};
    border: 1px solid #d1d5db;
    border-bottom-color: transparent;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
  }
`;
