import styled from 'styled-components';

import { Text } from '../lib';
import { Label } from '../lib';
import { Button } from '../lib';

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing(6)};
  color: ${({ theme }) => theme.colors.text};
`;

const ProjectsGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(6)};
`;

const ProjectCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius};
  padding: ${({ theme }) => theme.spacing(5)};
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.colors.primary};
`;

const ProjectDescription = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  line-height: 1.7;
`;

const Screenshot = styled.div`
  background: ${({ theme }) => theme.colors.border};
  height: 200px;
  border-radius: ${({ theme }) => theme.radius};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => theme.spacing(3)} 0;
  color: ${({ theme }) => theme.colors.disabledText};
  font-style: italic;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(2)};
  margin: ${({ theme }) => theme.spacing(3)} 0;
`;

const TechTag = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(2)}`};
  border-radius: ${({ theme }) => theme.radius};
  font-size: 0.85rem;
  font-weight: 500;
`;

const LinkSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing(3)};
`;

export function Work() {
  return (
    <>
      <PageTitle>My Projects</PageTitle>

      <ProjectsGrid>
        {/* Project 1 */}
        <ProjectCard>
          <ProjectHeader>
            <ProjectTitle>Coding Assignment 11 – Docker File</ProjectTitle>
          </ProjectHeader>

          <Screenshot>
            <img
              src="/a11-screenshot.png"
              alt="Assignment 11"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
          </Screenshot>

          <ProjectDescription>
            <Text>
              This was my first real experience working with Docker. I created a
              simple React app that runs inside a Docker container using Node.js
              20 Alpine as the base image. The app displays a basic heading and
              runs on port 7775.
            </Text>
            <br />
            <Text>
              The main goal was to learn how Docker works - building images,
              running containers, and understanding why containerization helps
              with consistent development environments. I learned how to write a
              Dockerfile with proper build steps and how to manage ports between
              the container and host machine.
            </Text>
          </ProjectDescription>

          <TechList>
            <TechTag>React</TechTag>
            <TechTag>Node.js 20 Alpine</TechTag>
            <TechTag>Docker</TechTag>
          </TechList>

          <LinkSection>
            <Label>GitHub Repository:</Label>
            <br />
            <Button
              bg="#10b981"
              onClick={() =>
                window.open(
                  'https://github.com/gli58/Coding-Assignment-11',
                  '_blank'
                )
              }
            >
              View on GitHub
            </Button>
          </LinkSection>
        </ProjectCard>

        {/* Project 2 */}
        <ProjectCard>
          <ProjectHeader>
            <ProjectTitle>
              Coding Assignment 12 – Web Component Library
            </ProjectTitle>
          </ProjectHeader>

          <Screenshot>
            <img
              src="/a12-screenshot.png"
              alt="Assignment 12"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top',
                borderRadius: '8px',
              }}
            />
          </Screenshot>

          <ProjectDescription>
            <Text>
              For this project, I built a full UI component library from scratch
              using React, TypeScript, and Styled Components. The library
              includes nine reusable components like Button, Label, Text,
              Dropdown, Radio buttons, Card, Image, HeroImage, and a complete
              Table system with header, row, cell, and footer components.
            </Text>
            <br />
            <Text>
              I used Storybook to document all the components and their
              different states. I also wrote Jest tests to make sure everything
              works properly, especially testing disabled states and correct
              rendering. The whole thing was deployed using Docker and Nginx so
              it can be accessed as a web application.
            </Text>
          </ProjectDescription>

          <TechList>
            <TechTag>React</TechTag>
            <TechTag>TypeScript</TechTag>
            <TechTag>Styled Components</TechTag>
            <TechTag>Storybook</TechTag>
            <TechTag>Jest</TechTag>
            <TechTag>Docker</TechTag>
            <TechTag>Nginx</TechTag>
          </TechList>

          <LinkSection>
            <Label>GitHub Repository:</Label>
            <br />
            <Button
              bg="#10b981"
              onClick={() =>
                window.open(
                  'https://github.com/gli58/Coding-Assignment-12',
                  '_blank'
                )
              }
            >
              View on GitHub
            </Button>
          </LinkSection>
        </ProjectCard>

        {/* Project 3 */}
        <ProjectCard>
          <ProjectHeader>
            <ProjectTitle>
              Coding Assignment 13 – UI Component Library (CI/CD)
            </ProjectTitle>
          </ProjectHeader>

          <Screenshot>
            <img
              src="/a13-screenshot.png"
              alt="Assignment 13"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
          </Screenshot>

          <ProjectDescription>
            <Text>
              This project built on Assignment 12 by adding proper development
              workflows and automation. I integrated Husky for Git hooks, ESLint
              for code quality checks, Prettier for consistent formatting, and a
              full GitHub Actions CI pipeline that runs automatically on every
              push.
            </Text>
            <br />
            <Text>
              The CI pipeline checks my code with ESLint, verifies formatting
              with Prettier, runs all Jest tests, and builds the project to make
              sure nothing breaks. I also set up pre-commit hooks so these
              checks run locally before I can even commit code. The Storybook
              documentation is hosted on Docker at port 8018.
            </Text>
          </ProjectDescription>

          <TechList>
            <TechTag>React</TechTag>
            <TechTag>TypeScript</TechTag>
            <TechTag>Styled Components</TechTag>
            <TechTag>Husky</TechTag>
            <TechTag>ESLint</TechTag>
            <TechTag>Prettier</TechTag>
            <TechTag>GitHub Actions</TechTag>
            <TechTag>Docker</TechTag>
          </TechList>

          <LinkSection>
            <Label>GitHub Repository:</Label>
            <br />
            <Button
              bg="#10b981"
              onClick={() =>
                window.open(
                  'https://github.com/gli58/Coding-Assignment-13',
                  '_blank'
                )
              }
            >
              View on GitHub
            </Button>
          </LinkSection>
        </ProjectCard>
      </ProjectsGrid>
    </>
  );
}
