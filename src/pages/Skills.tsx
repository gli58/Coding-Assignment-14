import styled from 'styled-components';
import { Card } from '../lib';
import { Text } from '../lib';

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing(6)};
  color: ${({ theme }) => theme.colors.text};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing(5)};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  padding: ${({ theme }) => theme.spacing(2)} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: none;
  }
`;

const SkillName = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const SkillLevel = styled.span`
  float: right;
  color: ${({ theme }) => theme.colors.disabledText};
  font-size: 0.9rem;
`;

export function Skills() {
  return (
    <>
      <PageTitle>My Skills</PageTitle>

      <SkillsGrid>
        <Card title="Languages & Frameworks">
          <SkillCategory>
            <SkillList>
              <SkillItem>
                <SkillName>JavaScript / TypeScript</SkillName>
                <SkillLevel>Intermediate</SkillLevel>
              </SkillItem>
              <SkillItem>
                <SkillName>React</SkillName>
                <SkillLevel>Intermediate</SkillLevel>
              </SkillItem>
              <SkillItem>
                <SkillName>HTML & CSS</SkillName>
                <SkillLevel>Intermediate</SkillLevel>
              </SkillItem>
              <SkillItem>
                <SkillName>Styled Components</SkillName>
                <SkillLevel>Intermediate</SkillLevel>
              </SkillItem>
              <SkillItem>
                <SkillName>Node.js</SkillName>
                <SkillLevel>Beginner</SkillLevel>
              </SkillItem>
              <SkillItem>
                <SkillName>Python</SkillName>
                <SkillLevel>Beginner</SkillLevel>
              </SkillItem>
              <SkillItem>
                <SkillName>Java</SkillName>
                <SkillLevel>Beginner</SkillLevel>
              </SkillItem>
            </SkillList>
          </SkillCategory>
        </Card>

        <Card title="Tools & Technologies">
          <SkillCategory>
            <SkillList>
              <SkillItem>
                <SkillName>Git & GitHub</SkillName>
                <SkillLevel>Intermediate</SkillLevel>
              </SkillItem>
              <SkillItem>
                <SkillName>Docker</SkillName>
                <SkillLevel>Intermediate</SkillLevel>
              </SkillItem>
              <SkillItem>
                <SkillName>GitHub Actions (CI/CD)</SkillName>
                <SkillLevel>Beginner</SkillLevel>
              </SkillItem>
              <SkillItem>
                <SkillName>VS Code</SkillName>
                <SkillLevel>Intermediate</SkillLevel>
              </SkillItem>
              <SkillItem>
                <SkillName>npm / yarn</SkillName>
                <SkillLevel>Intermediate</SkillLevel>
              </SkillItem>
              <SkillItem>
                <SkillName>ESLint & Prettier</SkillName>
                <SkillLevel>Intermediate</SkillLevel>
              </SkillItem>
              <SkillItem>
                <SkillName>Jest (Testing)</SkillName>
                <SkillLevel>Beginner</SkillLevel>
              </SkillItem>
              <SkillItem>
                <SkillName>Storybook</SkillName>
                <SkillLevel>Beginner</SkillLevel>
              </SkillItem>
              <SkillItem>
                <SkillName>Nginx</SkillName>
                <SkillLevel>Beginner</SkillLevel>
              </SkillItem>
            </SkillList>
          </SkillCategory>
        </Card>
      </SkillsGrid>

      <div style={{ marginTop: '3rem' }}>
        <Text>
          I&apos;m always working on improving my skills and learning new
          technologies. Right now I&apos;m focused on getting better at React
          and TypeScript, and I&apos;m starting to explore backend development
          with Node.js and database management.
        </Text>
      </div>
    </>
  );
}
