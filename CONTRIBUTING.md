# Contributing to Optimal Solutions

Thank you for your interest in contributing to Optimal Solutions! This document provides guidelines and instructions for contributing.

## 📋 Code of Conduct

Please be respectful and professional in all interactions. We're here to build something great together!

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (v6 or higher)
- Git
- Code editor (VS Code recommended)

### Setup Development Environment

1. **Fork the repository**
   ```bash
   # Click "Fork" on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/optimal-solutions.git
   cd optimal-solutions
   ```

3. **Install dependencies**
   ```bash
   # Frontend
   npm install

   # Backend
   cd backend
   npm install
   ```

4. **Setup environment variables**
   ```bash
   # Frontend
   cp .env.example .env

   # Backend
   cd backend
   cp .env.example .env
   ```

5. **Start development servers**
   ```bash
   # Terminal 1 - Frontend
   npm run dev

   # Terminal 2 - Backend
   cd backend
   npm run dev
   ```

## 🔨 Development Workflow

### 1. Create a Branch
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

Branch naming conventions:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Adding tests
- `chore/` - Maintenance tasks

### 2. Make Your Changes

#### Frontend Changes
- Follow existing component patterns
- Use TypeScript
- Add proper types
- Follow Tailwind CSS conventions
- Ensure responsive design
- Add animations where appropriate

#### Backend Changes
- Follow RESTful conventions
- Add input validation
- Include error handling
- Update API documentation
- Add TypeScript types

### 3. Test Your Changes
```bash
# Frontend tests
npm run test

# Backend tests
cd backend
npm run test

# Manual testing
# - Test all affected pages
# - Test on mobile and desktop
# - Test API endpoints with Postman/Insomnia
```

### 4. Commit Your Changes
```bash
git add .
git commit -m "feat: add new feature description"
```

Commit message format:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance

### 5. Push and Create Pull Request
```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

## 📝 Pull Request Guidelines

### Before Submitting
- [ ] Code follows project style guidelines
- [ ] All tests pass
- [ ] No console errors or warnings
- [ ] Responsive design works on all screen sizes
- [ ] Code is properly documented
- [ ] Commits are clear and descriptive

### PR Description Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How did you test these changes?

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] No breaking changes
```

## 🎨 Code Style Guidelines

### TypeScript/JavaScript
```typescript
// Use meaningful variable names
const userEmail = 'user@example.com' // Good
const e = 'user@example.com' // Bad

// Use TypeScript types
interface User {
  name: string
  email: string
}

// Prefer const over let
const API_URL = 'http://localhost:5000'

// Use async/await over promises
async function fetchData() {
  try {
    const data = await apiCall()
    return data
  } catch (error) {
    console.error(error)
  }
}
```

### React Components
```tsx
// Use functional components
const MyComponent: React.FC<Props> = ({ prop1, prop2 }) => {
  return <div>Content</div>
}

// Use meaningful component names
const UserProfileCard = () => {} // Good
const Component1 = () => {} // Bad

// Extract reusable logic into custom hooks
const useAuth = () => {
  // Hook logic
}
```

### CSS (Tailwind)
```tsx
// Use Tailwind classes
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
  
// Prefer custom classes for repeated patterns
// Define in index.css
<div className="card">
```

## 🧪 Testing Guidelines

### Frontend Tests
- Test user interactions
- Test component rendering
- Test edge cases
- Test error states

### Backend Tests
- Test API endpoints
- Test validation
- Test error handling
- Test database operations

## 📚 Documentation

When adding new features:
1. Update relevant README files
2. Add JSDoc comments to functions
3. Update API documentation
4. Add usage examples

Example:
```typescript
/**
 * Fetches user data from the API
 * @param userId - The unique identifier for the user
 * @returns Promise with user data
 * @throws Error if user not found
 */
async function fetchUser(userId: string): Promise<User> {
  // Implementation
}
```

## 🐛 Reporting Bugs

### Bug Report Template
```markdown
**Describe the bug**
Clear description of the bug

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen

**Screenshots**
If applicable

**Environment**
- OS: [e.g. Windows 10]
- Browser: [e.g. Chrome 96]
- Node version: [e.g. 18.0.0]

**Additional context**
Any other information
```

## 💡 Suggesting Features

### Feature Request Template
```markdown
**Feature Description**
Clear description of the feature

**Problem it Solves**
What problem does this solve?

**Proposed Solution**
How would you implement this?

**Alternatives Considered**
Other solutions you've thought about

**Additional Context**
Mockups, examples, etc.
```

## 🏗️ Project Structure

```
website/
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page components
│   ├── App.tsx        # Main app
│   └── index.css      # Global styles
├── backend/
│   ├── src/
│   │   ├── controllers/  # Request handlers
│   │   ├── models/       # Database models
│   │   ├── routes/       # API routes
│   │   └── middleware/   # Custom middleware
└── docs/              # Documentation
```

## 🤝 Community

- Be respectful and inclusive
- Help others when you can
- Share knowledge and best practices
- Give constructive feedback

## ❓ Questions?

- Check existing issues and PRs
- Read the documentation
- Ask in discussions
- Contact maintainers

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Optimal Solutions! 🎉










