import styled from 'styled-components';
import { Text } from '../lib';
import { Label } from '../lib';

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing(6)};
  color: ${({ theme }) => theme.colors.text};
`;

const SetupGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(5)};
`;

const SetupSection = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius};
  padding: ${({ theme }) => theme.spacing(5)};
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  color: ${({ theme }) => theme.colors.primary};
`;

export function DeveloperSetup() {
  return (
    <>
      <PageTitle>My Development Setup</PageTitle>

      <Text>
        This is a quick overview of the tools and setup I normally use when
        working on school projects. I try to keep everything simple and easy to
        work with.
      </Text>

      <br />
      <br />

      <SetupGrid>
        <SetupSection>
          <SectionTitle>Code Editor – VS Code</SectionTitle>
          <Text>
            I use Visual Studio Code for all of my assignments. It&apos;s easy
            to use and has everything I need built in.
          </Text>
          <br />
          <Label>Theme:</Label>
          <Text>Light+ (default light theme)</Text>
          <br />
          <br />
          <Label>Extensions I Actually Use:</Label>
          <Text>ESLint — shows errors and warnings</Text>
          <Text>Prettier — formats the code</Text>
          <Text>Docker Extension — useful when working with containers</Text>
          <Text>GitHub Extension — checking commits and pushes in VS Code</Text>
        </SetupSection>

        <SetupSection>
          <SectionTitle>Terminal Setup</SectionTitle>
          <Text>
            I usually just use the terminal inside VS Code. Since I&apos;m on
            Windows, the default PowerShell works for most commands.
          </Text>
          <br />
          <Label>Common Commands I Use:</Label>
          <Text>npm start – start the React development server</Text>
          <Text>npm run build – build production files</Text>
          <Text>npm test – run project tests</Text>
          <Text>git status – check Git changes</Text>
          <Text>docker build … – build Docker images</Text>
          <Text>docker run … – run containers</Text>
        </SetupSection>

        <SetupSection>
          <SectionTitle>Font & Display</SectionTitle>
          <Text>
            I don&apos;t customize my fonts. I just use the default VS Code
            settings.
          </Text>
          <br />
          <Label>Font:</Label>
          <Text>Default</Text>
          <br />
          <Label>Font Size:</Label>
          <Text>Default</Text>
          <br />
          <Label>Line Height:</Label>
          <Text>Default</Text>
        </SetupSection>

        <SetupSection>
          <SectionTitle>Other Tools I Use</SectionTitle>
          <Text>
            These are the tools I actually use while doing my assignments:
          </Text>
          <br />
          <Text>Chrome DevTools — checking layout, logs, and debugging</Text>
          <Text>GitHub — pushing and reviewing code</Text>
          <Text>Docker Desktop — running containers for my assignments</Text>
        </SetupSection>
      </SetupGrid>
    </>
  );
}
