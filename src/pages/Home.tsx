import styled from 'styled-components';
import { Button } from '../lib';
import { HeroImage } from '../lib';
import { Text } from '../lib';
import { useNavigate } from 'react-router-dom';

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing(8)};
`;

const IntroSection = styled(Section)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing(6)} 0;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: ${({ theme }) => theme.spacing(4)} 0;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing(3)};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.div`
  max-width: 700px;
  margin: 0 auto ${({ theme }) => theme.spacing(4)};
  line-height: 1.7;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(4)};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: column;
    align-items: center;
  }
`;

export function Home() {
  const navigate = useNavigate();

  return (
    <>
      <HeroImage
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=400&fit=crop"
        title="Welcome to My Portfolio"
        height={400}
      />

      <IntroSection>
        <Title>Hi, I&apos;m Gavin Li</Title>
        <Subtitle>Full-Stack Developer | Winnipeg, MB</Subtitle>
        <Description>
          <Text>
            I&apos;m a Full-Stack Web Development student at Red River College.
            This portfolio demonstrates my proficiency in React, TypeScript,
            Docker, and modern CI/CD workflows. I&apos;ve built reusable
            component libraries, implemented automated testing pipelines, and
            deployed containerized applications using industry-standard tools.
          </Text>
          <br />
          <Text>
            Through my coursework, I&apos;ve gained hands-on experience with
            Create React App, Styled Components, Storybook documentation,
            ESLint/Prettier code quality tools, and GitHub Actions for
            continuous integration. I&apos;m passionate about writing clean,
            maintainable code and following best practices in component-driven
            development and DevOps automation.
          </Text>
        </Description>

        <ButtonGroup>
          <Button onClick={() => navigate('/work')}>View My Work</Button>
          <Button onClick={() => navigate('/skills')} bg="#6b7280">
            See My Skills
          </Button>
        </ButtonGroup>
      </IntroSection>
    </>
  );
}
