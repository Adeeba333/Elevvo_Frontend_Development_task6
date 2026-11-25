# FreelaAxis – Freelance Client Dashboard

FreelaAxis is a responsive, multi-page freelance dashboard.Built with React, React Router, Tailwind CSS, and Recharts, it provides project tracking, earnings analytics, task visualization, and profile management.

## Features

- **Overview:** Statistics cards, earnings chart, task distribution, and recent activities.
- **Projects:** Project listings with status filtering (All, Active, Pending, Completed, Overdue).
- **Profile:** Editable profile information.
- **Navigation:** Multi-page routing with a shared dashboard layout.
- **Notifications:** Interactive notification dropdown with outside-click dismissal.
- **Theme Switching:** Dark/light mode with localStorage persistence and system preference detection.
- **Responsive Design:** Mobile-friendly sidebar and adaptive project layouts.
- **Scroll to Top:** Button for convenient page navigation.

## Tech Stack

- React 19
- React Router 7
- Tailwind CSS 4
- Recharts
- JavaScript (ES6+)
- Vite 6

## Project Structure

```text
src/
├── components/
│   ├── ActivityList.jsx
│   ├── EarningsChart.jsx
│   ├── Header.jsx
│   ├── NotificationDropdown.jsx
│   ├── ScrollToTopButton.jsx
│   ├── Sidebar.jsx
│   ├── StatCard.jsx
│   ├── StatusBadge.jsx
│   ├── TaskPieChart.jsx
│   └── ThemeToggle.jsx
├── context/
│   └── ThemeContext.jsx
├── data/
│   └── mockData.js
├── layouts/
│   └── DashboardLayout.jsx
├── pages/
│   ├── Overview.jsx
│   ├── Projects.jsx
│   └── Profile.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Getting Started

```bash
# Clone repository
git clone https://github.com/Adeeba333/Elevvo_Frontend_Development_task6.git

# Navigate to project
cd Elevvo_Frontend_Development_task6

# Install dependencies
npm install

# Start development server
npm run dev
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Routes

| Route | Page |
|---|---|
| `/` | Overview |
| `/projects` | Projects |
| `/profile` | Profile |

## Author

**Mahmuda Adeeba Tul Husna**
---

*Developed to strengthen practical skills in React, component architecture, routing, state management, data visualization, and responsive web development.*
