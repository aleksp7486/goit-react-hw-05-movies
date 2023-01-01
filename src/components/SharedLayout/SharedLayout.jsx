import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, NavList, StyledLink } from './SharedLayout.styled';

function SharedLayout(props) {
  return (
    <Container>
      <Header>
        <nav>
          <NavList>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="movies">Movies</StyledLink>
            </li>
          </NavList>
        </nav>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
}

export default SharedLayout;
