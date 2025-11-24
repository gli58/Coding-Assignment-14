import { ReactNode } from 'react';
import styled from 'styled-components';
import { Navigation } from './Navigation';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(4)};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: ${({ theme }) => theme.spacing(4)}
      ${({ theme }) => theme.spacing(3)};
  }
`;

const Footer = styled.footer`
  background: ${({ theme }) => theme.colors.cardBg};
  padding: ${({ theme }) => theme.spacing(4)};
  text-align: center;
  color: ${({ theme }) => theme.colors.disabledText};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <PageContainer>
      <Navigation />
      <Main>{children}</Main>
      <Footer>
        <p>&copy; 2025 Gavin Li. All rights reserved.</p>
      </Footer>
    </PageContainer>
  );
}
