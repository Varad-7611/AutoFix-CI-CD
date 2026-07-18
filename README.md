# AutoFix-CI-CD

An automated CI/CD pipeline project designed to streamline testing, building, and deployment processes.

## Features

- **Automated Testing**: Runs tests via npm test command
- **CI/CD Workflow**: Built with GitHub Actions to execute on every main branch push
- **Error Notification**: Sends alerts to n8n webhook when builds or tests fail
- **Node.js Integration**: Utilizes Express.js for server setup and testing

## Project Structure

- `index.js` - Express server with self-health check
- `test.js` - Test suite that starts server and validates response
- `.github/workflows/main.yml` - CI/CD pipeline configuration
- `package.json` - Project configuration and scripts

## Setup

1. Clone the repository
2. Run `npm install` to install dependencies
3. Configure the following secrets in GitHub repository settings:
   - `N8N_WEBHOOK_URL` - Your n8n webhook endpoint
   - `N8N_WEBHOOK_SECRET` - Secret key for webhook authentication

## Available Scripts

- `npm test` - Run test suite
- `npm run build` - Build the project (runs index.js)

## CI/CD Pipeline

The GitHub Actions workflow (`.github/workflows/main.yml`) executes on every push to main:

1. **Build Job**:
   - Checks out code
   - Sets up Node.js 20
   - Installs dependencies
   - Runs tests (`npm test`)
   - Builds project (`npm run build`)

2. **Notify n8n Job** (runs only on failure):
   - Triggers n8n webhook with failure details
   - Sends run ID, repo, branch, commit, actor, and error message