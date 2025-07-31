# 💰 Expense Tracker

A modern, feature-rich expense tracking application built with React, Redux Toolkit, and Chart.js. Track your daily expenses, manage categories, set budgets, and visualize your spending patterns with beautiful analytics.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20App-green)](https://expense-tracker-henna-delta.vercel.app/)
![Expense Tracker](https://img.shields.io/badge/React-19.1.0-blue)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.8.2-purple)
![Chart.js](https://img.shields.io/badge/Chart.js-4.5.0-green)
![Vite](https://img.shields.io/badge/Vite-7.0.4-orange)

## ✨ Features

### 📊 **Expense Management**
- Add, edit, and delete expenses with detailed information
- Categorize expenses with custom categories
- Date-based expense tracking
- Amount validation and formatting

### 🎯 **Budget Tracking**
- Set monthly budget limits
- Real-time budget vs. spending comparison
- Daily allowance calculation
- Over-budget warnings and indicators

### 📈 **Analytics & Insights**
- Interactive pie chart showing category distribution
- Monthly spending summaries
- Category-wise expense breakdown
- Visual spending patterns

### 🏷️ **Category Management**
- Create custom expense categories
- Color-coded categories for easy identification
- Default categories included (Food, Travel, Bills, Entertainment, Shopping, Health)
- Edit and delete custom categories

### 💾 **Data Persistence**
- Local storage integration for data persistence
- Automatic data synchronization
- No data loss on page refresh

### 🎨 **Modern UI/UX**
- Clean, responsive design
- Tab-based navigation
- Card-based layout
- Emotion CSS-in-JS styling

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd expense-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
expense-tracker/
├── public/                 # Static assets
├── src/
│   ├── Components/         # React components
│   │   ├── Analytics/      # Charts and analytics
│   │   ├── BudgetOverview/ # Budget tracking
│   │   ├── CategoryManager/ # Category management
│   │   ├── Dashboard/      # Main layout
│   │   ├── ExpenseForm/    # Add/edit expenses
│   │   ├── ExpenseList/    # Expense display
│   │   ├── Header/         # App header
│   │   └── Modal/          # Modal components
│   ├── constants/          # App constants
│   ├── hooks/              # Custom React hooks
│   ├── store/              # Redux store and slices
│   └── styles/             # Global styles
├── package.json
└── vite.config.js
```

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - UI library
- **Redux Toolkit 2.8.2** - State management
- **React Redux 9.2.0** - React bindings for Redux
- **Chart.js 4.5.0** - Data visualization
- **React Chart.js 2 5.3.0** - React wrapper for Chart.js

### Styling
- **Emotion 11.14.0** - CSS-in-JS library
- **Emotion Styled 11.14.1** - Styled components

### Build Tools
- **Vite 7.0.4** - Build tool and dev server
- **ESLint 9.30.1** - Code linting

## 📱 Features in Detail

### Expense Tracking
- **Add Expenses**: Fill out a form with date, description, category, and amount
- **Edit Expenses**: Modify existing expenses with inline editing
- **Delete Expenses**: Remove expenses with confirmation
- **Validation**: Ensures all required fields are filled and amounts are valid

### Budget Management
- **Monthly Budget**: Set and track monthly spending limits
- **Real-time Updates**: See spending progress in real-time
- **Daily Allowance**: Calculate remaining daily budget
- **Over-budget Alerts**: Visual indicators when exceeding budget

### Analytics Dashboard
- **Category Distribution**: Pie chart showing spending by category
- **Monthly Summary**: Total spent, remaining budget, and percentage breakdown
- **Interactive Charts**: Hover for detailed information
- **Responsive Design**: Charts adapt to different screen sizes

### Category System
- **Default Categories**: Pre-configured categories (Food, Travel, Bills, etc.)
- **Custom Categories**: Create your own categories with custom colors
- **Color Coding**: Visual distinction between categories
- **Category Management**: Edit and delete custom categories

## 🔧 Configuration

### Default Categories
The app comes with 6 default categories:
- Food (Red)
- Travel (Blue)
- Bills (Orange)
- Entertainment (Purple)
- Shopping (Cyan)
- Health (Green)

### Local Storage Keys
- `finance-dashboard-expenses` - Expense data
- `finance-dashboard-budget` - Budget settings
- `finance-dashboard-categories` - Category data

## 🎨 Customization

### Adding New Categories
1. Navigate to the "Categories" tab
2. Click "Add Category"
3. Enter category name and select a color
4. Save the category

### Modifying Budget
1. Click the edit button (✏️) in the Budget Overview
2. Enter your new monthly budget
3. Save changes

### Styling
The app uses Emotion for styling. You can customize the appearance by modifying the style files in each component directory.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- State management with [Redux Toolkit](https://redux-toolkit.js.org/)
- Charts powered by [Chart.js](https://www.chartjs.org/)
- Styling with [Emotion](https://emotion.sh/)
- Build tool: [Vite](https://vitejs.dev/)

---

**Happy Expense Tracking! 💰📊**
