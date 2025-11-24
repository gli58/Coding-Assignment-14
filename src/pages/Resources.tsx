import styled from 'styled-components';

import { Text } from '../lib';
import { Button } from '../lib';

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing(6)};
  color: ${({ theme }) => theme.colors.text};
`;

const Intro = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`;

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing(5)};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    grid-template-columns: 1fr;
  }
`;

const ResourceCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius};
  padding: ${({ theme }) => theme.spacing(4)};
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const IconPlaceholder = styled.div`
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radius};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

const ResourceTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.colors.text};
`;

const ResourceDescription = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  line-height: 1.6;
`;

export function Resources() {
  return (
    <>
      <PageTitle>Helpful Resources</PageTitle>

      <Intro>
        <Text>
          These are some of the resources and documentation sites I use
          regularly when learning and building projects. They&apos;ve been super
          helpful throughout my studies.
        </Text>
      </Intro>

      <ResourcesGrid>
        <ResourceCard>
          <IconPlaceholder>R</IconPlaceholder>
          <ResourceTitle>React Documentation</ResourceTitle>
          <ResourceDescription>
            <Text>
              The official React docs are really well-written and have great
              examples. I use this all the time to understand hooks, components,
              and best practices.
            </Text>
          </ResourceDescription>
          <Button
            onClick={() => window.open('https://react.dev', '_blank')}
            bg="#6b7280"
          >
            Visit Site
          </Button>
        </ResourceCard>

        <ResourceCard>
          <IconPlaceholder>M</IconPlaceholder>
          <ResourceTitle>MDN Web Docs</ResourceTitle>
          <ResourceDescription>
            <Text>
              Mozilla&apos;s documentation for web technologies. Whenever I need
              to look up HTML, CSS, or JavaScript stuff, this is where I go.
              Super detailed and easy to understand.
            </Text>
          </ResourceDescription>
          <Button
            onClick={() =>
              window.open('https://developer.mozilla.org', '_blank')
            }
            bg="#6b7280"
          >
            Visit Site
          </Button>
        </ResourceCard>

        <ResourceCard>
          <IconPlaceholder>TS</IconPlaceholder>
          <ResourceTitle>TypeScript Handbook</ResourceTitle>
          <ResourceDescription>
            <Text>
              TypeScript can be confusing at first, but this handbook breaks
              everything down clearly. I reference it whenever I&apos;m dealing
              with types and interfaces.
            </Text>
          </ResourceDescription>
          <Button
            onClick={() =>
              window.open('https://www.typescriptlang.org/docs/', '_blank')
            }
            bg="#6b7280"
          >
            Visit Site
          </Button>
        </ResourceCard>

        <ResourceCard>
          <IconPlaceholder>SC</IconPlaceholder>
          <ResourceTitle>Styled Components</ResourceTitle>
          <ResourceDescription>
            <Text>
              The docs for Styled Components have tons of examples showing how
              to style React components. Really useful for learning CSS-in-JS
              patterns.
            </Text>
          </ResourceDescription>
          <Button
            onClick={() =>
              window.open('https://styled-components.com', '_blank')
            }
            bg="#6b7280"
          >
            Visit Site
          </Button>
        </ResourceCard>

        <ResourceCard>
          <IconPlaceholder>D</IconPlaceholder>
          <ResourceTitle>Docker Documentation</ResourceTitle>
          <ResourceDescription>
            <Text>
              Docker&apos;s official docs helped me understand containers,
              images, and Dockerfiles. The getting started guide is perfect for
              beginners.
            </Text>
          </ResourceDescription>
          <Button
            onClick={() => window.open('https://docs.docker.com', '_blank')}
            bg="#6b7280"
          >
            Visit Site
          </Button>
        </ResourceCard>

        <ResourceCard>
          <IconPlaceholder>GH</IconPlaceholder>
          <ResourceTitle>GitHub Actions Docs</ResourceTitle>
          <ResourceDescription>
            <Text>
              When I needed to set up CI/CD pipelines, this documentation walked
              me through everything step by step. Great examples of workflows.
            </Text>
          </ResourceDescription>
          <Button
            onClick={() =>
              window.open('https://docs.github.com/en/actions', '_blank')
            }
            bg="#6b7280"
          >
            Visit Site
          </Button>
        </ResourceCard>
      </ResourcesGrid>
    </>
  );
}
