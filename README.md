# FreelaAxis: Freelance Client Dashboard

A responsive, multi-page admin dashboard for a fictional freelance client, built with **React**, **React Router**, **Recharts**, and **Tailwind CSS**. The sidebar and top header stay fixed while the pages switch without a refresh, and the whole interface supports a **dark / light theme**.

## Features

- **Overview page:** summary cards (Total Projects, Earnings, Tasks Due), a monthly earnings bar chart, a tasks-by-type pie chart, and a recent activity list
- **Projects page:** project name, client, status, and deadline, with status filter buttons. It shows a table on desktop and cards on mobile
- **Profile Settings page:** editable name, email, and password placeholder fields with a mock "Changes saved" message
- **Shared layout:** one sidebar and one header across all pages using a React Router layout route (`Outlet`)
- **Client-side routing:** page changes without a browser refresh
- **Notification dropdown:** shows the 3 most recent activities from mock data and closes when you click outside it
- **Dark / light theme:** toggle in the header, saved in `localStorage`, and it follows the system setting on the first visit
- **Responsive design:** the sidebar becomes a slide-in menu on phones and tablets
- **Conditional rendering:** mobile sidebar, dropdown, empty states, and status badge colors

## Tech Stack

| Tool | Purpose |
|---|---|
| React 19 | UI components and state |
| React Router 7 | Routing and the shared layout |
| Recharts | Bar and pie charts |
| Tailwind CSS 4 | Styling and responsive layout |
| Vite 6 | Dev server and build tool |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/elevvo_frontend-development_task6.git

# 2. Go into the project folder
cd elevvo_frontend-development_task6

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open the link shown in the terminal (usually `http://localhost:5173`).

### Available Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build in `dist/` |
| `npm run preview` | Previews the production build locally |

## Project Structure

```
src/
  main.jsx                      App entry, BrowserRouter and ThemeProvider
  App.jsx                       Route definitions
  index.css                     Tailwind import and theme colors
  context/
    ThemeContext.jsx            Dark/light theme state and chart colors
  layouts/
    DashboardLayout.jsx         Sidebar + header + page outlet
  components/
    Sidebar.jsx                 Navigation links (NavLink)
    Header.jsx                  Top bar with menu button, theme toggle, alerts
    ThemeToggle.jsx             Dark/light switch button
    NotificationDropdown.jsx    Latest 3 activities
    StatCard.jsx                Reusable summary card
    StatusBadge.jsx             Colored project status label
    ActivityList.jsx            Recent activity list
    EarningsChart.jsx           Monthly earnings bar chart
    TaskPieChart.jsx            Tasks by type pie chart
  pages/
    Overview.jsx
    Projects.jsx
    Profile.jsx
  data/
    mockData.js                 All mock projects, activities, and chart data
```

## Routes

| Path | Page |
|---|---|
| `/` | Overview |
| `/projects` | Projects |
| `/profile` | Profile Settings |

## Color Scheme

| Color | Hex | Use |
|---|---|---|
| Canvas | `#f6f6f6` | Page background |
| Line | `#e8e8e8` | Borders and dividers |
| Ink | `#333333` | Text and sidebar |
| Brand | `#990100` | Buttons, active links, charts |
| Brand light | `#b90504` | Hover states and highlights |

The colors are CSS variables in `src/index.css`. The `.dark` class swaps them for dark-theme values, so the interface changes without extra `dark:` classes.

## Customizing the Data

All text and numbers shown in the dashboard live in `src/data/mockData.js`. Edit the `projects`, `activities`, `stats`, `monthlyEarnings`, and `taskTypes` arrays to change what the pages display.

## Key Concepts Practiced

- React components, props, and reusable UI
- `useState`, `useEffect`, and `useRef`
- React Router layout routes, `NavLink`, and `Outlet`
- React Context for global theme state
- Charts with Recharts
- Responsive design with Tailwind breakpoints
- Conditional rendering

## Author

**Mahmuda Adeeba Tul Husna** 