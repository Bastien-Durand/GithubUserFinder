# GitHub User Finder

A React application that searches for GitHub users by username and displays their profile information and public repositories using the GitHub REST API.

## 🎯 Project Overview

Search for any GitHub user and view their complete profile including bio, statistics, and a detailed list of all public repositories. Built with React, TypeScript, and Vite with a clean, GitHub-inspired design.

## 🛠️ Tech Stack

- **React** - Component-based UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast development build tool
- **GitHub REST API** - User and repository data
- **CSS Modules** - Scoped component styling

## ✨ Features

### Completed

- ✅ Search GitHub users by username
- ✅ Display user profile with avatar and bio
- ✅ Show user statistics (followers, repos, gists, location)
- ✅ List all public repositories
- ✅ Repository details (name, description, language, stars)
- ✅ Direct links to GitHub repos
- ✅ Loading states while fetching
- ✅ Error handling for invalid usernames
- ✅ Clears previous results on new search
- ✅ Fully typed with TypeScript interfaces
- ✅ GitHub-inspired design system
- ✅ Responsive layout

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
│   ├── GithubUserSearch.tsx           # Search form component
│   ├── GithubUserSearch.module.css
│   ├── GithubUserProfile.tsx          # User profile display
│   ├── GithubUserProfile.module.css
│   ├── GithubUserRepos.tsx            # Repository list
│   └── GithubUserRepos.module.css
├── types/
│   └── GitHub.ts                      # TypeScript interfaces
├── App.tsx                            # Main app with state management
├── App.module.css
└── main.tsx                           # App entry point
```

## 🔌 API Integration

### GitHub REST API Endpoints

**User Data:**

```
GET https://api.github.com/users/{username}
```

Returns: avatar, name, bio, location, company, email, followers, repos count, etc.

**User Repositories:**

```
GET https://api.github.com/users/{username}/repos
```

Returns: array of repos with name, description, language, stars, URL, etc.

**Note:** No API key required. GitHub allows 60 unauthenticated requests per hour per IP address.

### API Call Flow

```
User enters username
    ↓
Search form submits
    ↓
Fetch user data (first API call)
    ↓
If successful → Fetch user's repos (second API call)
    ↓
Display both user profile and repositories
```

**Sequential API Calls:** Repo fetch only happens after successful user fetch to avoid wasted requests.

## 🧩 Key Concepts Demonstrated

### React Fundamentals

- Component composition and separation of concerns
- State management with `useState`
- Async data fetching with `async/await`
- Conditional rendering (loading, error, data states)
- Props and data flow (parent → child)
- List rendering with `.map()`
- Event handling (form submission, input changes)

### TypeScript

- Interface definitions for API responses
- Type-safe props with proper interfaces
- Optional properties (`?`) for nullable fields
- Generic types with useState
- Proper event typing

### Data Management

- Sequential API calls (dependent requests)
- Loading state management
- Error handling with try/catch
- Clearing stale data between searches
- Separating user data from repo data

### Best Practices

- CSS Modules for scoped styling
- Controlled form inputs
- Early returns for conditional rendering
- Destructuring props for cleaner code
- Semantic HTML structure

## 🎨 Design System

Uses a GitHub-inspired color palette and design:

- **Primary:** `#24292e` (GitHub dark)
- **Secondary:** `#0969da` (GitHub blue)
- **Background:** `#f6f8fa` (GitHub gray)
- **Borders:** `#d0d7de`
- **Text:** `#57606a`

Features:

- Card-based layouts with subtle shadows
- Hover effects on interactive elements
- Responsive grid for user stats
- Clean typography hierarchy
- Rounded corners and modern spacing

## 📝 Learning Goals

This project was built to practice:

- Working with external REST APIs
- Handling complex, nested API responses
- Sequential vs parallel API calls
- TypeScript with React
- Component architecture
- Loading and error states
- CSS Modules organization
- User input validation

## 🔄 Data Flow

```
GithubUserSearch (user input)
    ↓
onSubmit → fetchUser()
    ↓
App.tsx → getProfileData()
    ↓
Fetch user → setGithubData()
    ↓
Fetch repos → setGithubRepos()
    ↓
GithubUserProfile (renders user)
GithubUserRepos (renders repos)
```

## 🚧 Potential Enhancements

Future additions could include:

- Pagination for users with many repos
- Sort repos by stars, forks, or date
- Filter repos by language
- Search repo names within user's repos
- Show commit activity graphs
- Display followers/following lists
- Compare two users side-by-side
- Dark mode toggle
- Save favorite users to localStorage

## 📄 License

MIT

---

**Note:** This app uses the GitHub REST API which has rate limits for unauthenticated requests (60 per hour). For production use, consider implementing GitHub OAuth authentication for higher limits.
