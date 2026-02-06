# GitHub User Finder

A React application that searches for GitHub users and displays their profile information and public repositories using the GitHub REST API.

## 🎯 Project Overview

Search for any GitHub user by username and view their profile details, statistics, and complete list of public repositories. Built with React, TypeScript, and Vite.

## 🛠️ Tech Stack

- **React** - Component-based UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast development build tool
- **GitHub REST API** - User and repository data

## ✨ Features

### Planned

- [ ] Search GitHub users by username
- [ ] Display user profile information
- [ ] Show user statistics (followers, following, repos)
- [ ] List user's public repositories
- [ ] Display repository details (name, description, language, stars)
- [ ] Loading states while fetching data
- [ ] Error handling for invalid usernames
- [ ] Clean, responsive UI

## 🚀 Getting Started

### Prerequisites

- Node.js installed

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd github-finder

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

## 📂 Project Structure

```
src/
├── components/
│   ├── SearchForm.tsx        # Username search input
│   ├── UserProfile.tsx       # User info display
│   ├── RepoList.tsx          # Repository list
│   └── RepoCard.tsx          # Individual repo card
├── App.tsx                   # Main app component
└── main.tsx                  # App entry point
```

## 🔌 API Integration

### GitHub REST API

**User Endpoint:**

```
GET https://api.github.com/users/{username}
```

**Repositories Endpoint:**

```
GET https://api.github.com/users/{username}/repos
```

**Note:** No API key required. GitHub allows 60 unauthenticated requests per hour.

## 🧩 Key Concepts Demonstrated

### React Fundamentals

- Component composition
- State management with `useState`
- Async data fetching
- Conditional rendering
- Props and data flow
- List rendering

### TypeScript

- Interface definitions
- Type-safe props
- API response typing

### API Integration

- RESTful API consumption
- Sequential API calls
- Error handling
- Loading states

## 📝 Learning Goals

This project practices:

- Working with external APIs
- Handling complex API responses
- Displaying nested data structures
- User search functionality
- Error handling and user feedback
- TypeScript with React

## 📄 License

MIT
