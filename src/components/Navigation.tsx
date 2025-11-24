import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.bg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing(3)} 0;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing(4)};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(2)};
  }
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    gap: ${({ theme }) => theme.spacing(2)};
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const NavLink = styled(Link)<{ $active: boolean }>`
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.text};
  text-decoration: none;
  font-weight: ${({ $active }) => ($active ? '600' : '400')};
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(2)}`};
  border-radius: ${({ theme }) => theme.radius};
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.cardBg};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <Nav>
      <Container>
        <Logo to="/">Gavin Li</Logo>
        <NavLinks>
          <NavLink to="/" $active={isActive('/')}>
            Home
          </NavLink>
          <NavLink to="/work" $active={isActive('/work')}>
            Work
          </NavLink>
          <NavLink to="/skills" $active={isActive('/skills')}>
            Skills
          </NavLink>
          <NavLink to="/resources" $active={isActive('/resources')}>
            Resources
          </NavLink>
          <NavLink to="/setup" $active={isActive('/setup')}>
            Dev Setup
          </NavLink>
        </NavLinks>
      </Container>
    </Nav>
  );
}
