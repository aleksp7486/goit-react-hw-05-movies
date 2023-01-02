import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${p => p.theme.space[4]}px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: ${p => p.theme.space[3]}px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  overflow: hidden;
`;

export const ImageWrap = styled.div`
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Text = styled.p`
  padding: ${p => p.theme.space[3]}px;
  font-weight: 700;
  text-align: center;
`;
