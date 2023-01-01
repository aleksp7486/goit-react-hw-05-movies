import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Board = styled.div`
  margin-bottom: ${p => p.theme.space[5]}px;
  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    gap: ${p => p.theme.space[5]}px;
  }
`;

export const ImageWrap = styled.div`
  margin: 0 auto;
  width: 300px;
  height: 450px;
  border-radius: ${p => p.theme.space[3]}px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
  @media (min-width: 768px) {
    min-width: 300px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes.l};
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const SectionTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes.l};
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Text = styled.p`
  :not(:last-of-type) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;
export const Item = styled.li`
  :not(:last-of-type) {
    margin-right: ${p => p.theme.space[4]}px;
  }
`;

export const StyledLink = styled(NavLink)`
  color: inherit;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: 700;
  padding: ${p => p.theme.space[3]}px;
  border: 1px solid #d1d5db;
  border-radius: ${p => p.theme.radii.normal};
  transition: all 0.2s linear;
  :hover:not(.active) {
    color: ${p => p.theme.colors.accent};
    transform: scale(1.05);
  }
  &.active {
    color: ${p => p.theme.colors.accent};
  }
`;

export const BackLink = styled(NavLink)`
  display: inline-block;
  margin-bottom: ${p => p.theme.space[5]}px;
  padding: ${p => p.theme.space[3]}px;
  color: inherit;
  border: 1px solid #d1d5db;
  border-radius: ${p => p.theme.radii.normal};
  transition: color 0.2s linear;
  :hover {
    color: ${p => p.theme.colors.accent};
  }
`;
