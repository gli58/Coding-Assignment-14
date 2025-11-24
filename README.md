# Gavin Li - Portfolio Website

This is my portfolio website for Assignment 14. It's built with React and shows the projects I've done in this course. The site runs in a Docker container using Nginx.

## What This Project Does

This portfolio website has five pages that show my coursework:
- A home page with my introduction
- A work section showing my previous assignments (11, 12, and 13)
- A skills page listing what I've learned
- A resources page with links to documentation I use
- A developer setup page showing my VS Code configuration

The site reuses components from Assignment 12 and Assignment 13, and uses Docker for deployment like we learned in class.

## Tech I Used

- React 18 with TypeScript
- React Router for navigation
- Styled Components (same as Assignment 12/13)
- Docker with Nginx for hosting
- ESLint and Prettier for code quality
- GitHub Actions for automatic testing
- Husky for pre-commit checks

## Running It Locally

If you want to run this on your computer:

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open http://localhost:3000 in your browser

## Docker Setup

The site needs to run on port 5575 in a Docker container.

### Build the Docker Image

```bash
docker build -t li_gavin_coding_assignment14 .
```

The Dockerfile does a two-stage build:
- First it builds the React app with Node.js
- Then it copies the files to an Nginx container to serve them

### Run the Container

```bash
docker run -p 5575:5575 li_gavin_coding_assignment14
```

This will:
- Create a container named `li_gavin_coding_assignment14`
- Use `/Li_Gavin_final_site` as the working directory
- Run on port 5575

### Access the Site

Open your browser and go to:
```
http://127.0.0.1:5575
```

### Stop the Container

```bash
docker stop $(docker ps -q --filter ancestor=li_gavin_coding_assignment14)
```

## Other Commands

- `npm test` - Run the tests
- `npm run lint` - Check code with ESLint
- `npm run format` - Format code with Prettier
- `npm run build` - Build production files

## GitHub Actions

I set up a GitHub Actions workflow that automatically runs when I push code. It checks:
- ESLint (code quality)
- Prettier (formatting)
- Tests
- Build (makes sure it compiles)

You can see it in `.github/workflows/ci.yml`.

## Components I Reused

From Assignment 12 and 13, I'm using:
- Button component
- Text component
- Label component
- Card component
- HeroImage component

They're all in the `src/lib/components` folder.

## Project Structure

```
portfolio-assignment14/
├── src/
│   ├── components/      # Navigation and Layout
│   ├── lib/             # Reused components from A12/A13
│   ├── pages/           # The five pages
│   └── App.tsx          # Main app
├── public/              # Static files
├── Dockerfile           # Docker build instructions
├── nginx.conf           # Nginx configuration
└── package.json         # Dependencies
```

## Notes

- The container name must be `li_gavin_coding_assignment14`
- Working directory inside container is `/Li_Gavin_final_site`
- Port must be 5575
- Everything is tested and working

## About Me

I'm a Full-Stack Web Development student at Red River College. This portfolio shows the work I've done in this course so far.

GitHub: https://github.com/gli58

---

This project builds on Assignment 11 (Docker basics), Assignment 12 (component library), and Assignment 13 (CI/CD setup).
