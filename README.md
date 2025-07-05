# React + TypeScript + Vite Spreadsheet UI

**Live Demo:** [Click here to view the live app]()

This project is a spreadsheet-like UI built with React, TypeScript, Tailwind CSS, and Vite. It features a custom header, toolbar, spreadsheet table, and tabbed navigation at the bottom.

## Project Structure

```
spreadsheet-ui/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   └── Components/
│       ├── Header.tsx
│       ├── Spreadsheet.tsx
│       ├── TitleRow.tsx
│       └── TopBar.tsx
├── package.json
├── README.md
└── ...
```

---

## Main Files Overview

### `src/App.tsx`

- **Purpose:** Main application component that composes the layout.
- **Structure:** Renders the `Header`, `TopBar`, `Spreadsheet`, and `TitleRow` components inside a flex column layout.

### `src/main.tsx`

- **Purpose:** Entry point for the React app.
- **Functionality:** Uses React 19's `createRoot` to render the `App` component into the DOM.

### `src/Components/Header.tsx`

- **Purpose:** Top navigation bar.
- **Features:**
  - Sidebar toggle icon.
  - Breadcrumb navigation (Workspace > Folder 2 > Spreadsheet 3).
  - Search input.
  - Notification bell with badge.
  - User avatar and profile info.

### `src/Components/Spreadsheet.tsx`

- **Purpose:** Main spreadsheet table UI.
- **Features:**
  - Table with fixed columns and styled headers.
  - Sample data for demonstration.
  - Clickable cells with highlight on selection.
  - Status, priority, and other fields with color coding.
  - Action icons in headers.

### `src/Components/TitleRow.tsx`

- **Purpose:** Tab navigation at the bottom of the UI.
- **Features:**
  - Tabs for "All Orders", "Pending", "Reviewed", "Arrived", and an add (+) button.
  - Highlights the selected tab.
  - Logs navigation actions to the console.

---

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the development server:**
   ```sh
   npm run dev
   ```

3. **Build for production:**
   ```sh
   npm run build
   ```

---

## Scripts

- `dev` – Start Vite development server.
- `build` – Type-check and build for production.
- `lint` – Run ESLint on `.ts` and `.tsx` files.
- `preview` – Preview the production build.
- `format` – Format code with Prettier.
- `type-check` – Run TypeScript type checking.

---

## ESLint & Prettier

- ESLint is set up for React, TypeScript, and accessibility.
- Prettier is used for code formatting.
- See the comments in this file for expanding ESLint configuration.

---

## Dependencies

- **React 19**
- **Vite**
- **Tailwind CSS**
- **React Icons**
- **TypeScript**

---

## File Summaries

### `package.json`
Defines project metadata, scripts, dependencies, and devDependencies.

### `README.md`
Project documentation and setup instructions.

### `src/main.tsx`
App entry point; renders the main `App` component.

### `src/App.tsx`
Main layout; composes header, toolbar, spreadsheet, and tab row.

### `src/Components/Header.tsx`
Top navigation bar with breadcrumbs, search, notifications, and user info.

### `src/Components/Spreadsheet.tsx`
Spreadsheet table UI with sample data, clickable cells, and styled headers.

### `src/Components/TitleRow.tsx`
Bottom tab navigation for switching between order views.

---

## Customization

- Update the sample data in `Spreadsheet.tsx` as needed.
- Adjust Tailwind classes for custom styling.
- Extend components for more features (editing, filtering, etc).

---


