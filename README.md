# 💰 Finance Tracker

A modern and responsive personal finance tracker built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Recharts**. Easily track your income and expenses, visualize spending habits, and monitor your monthly savings — all while keeping your data completely private.

> **Note:** This application stores all data locally in your browser using Local Storage. No backend or database is required.

---

## ✨ Features

- 📊 Interactive Dashboard
- 💸 Add Income & Expenses
- 📅 Monthly Financial Tracking
- 📈 Month-over-Month Comparison
- 🥧 Expense Distribution Pie Chart
- 🔍 Search Transactions
- 🏷️ Filter by Transaction Type
- 🗑️ Delete Transactions
- 📱 Fully Responsive Design
- 🌙 Dark Mode Support
- 🔒 Data Stored Locally (Local Storage)

---

## 🛠️ Tech Stack

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Recharts**
- **Lucide React**
- **Local Storage API**

---

## 📂 Folder Structure

```text
app/
├── transactions/
├── privacy/
├── terms/
├── page.tsx

components/
├── cards/
├── charts/
├── modal/

hooks/
└── useLocalStorage.ts

lib/
└── calculations.ts

types/
└── transactions.ts
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/trackerify.git
```

### Navigate into the project

```bash
cd trackertify
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Visit:

```
http://localhost:3000
```

---

## 📊 Dashboard Metrics

The dashboard automatically calculates:

- Total Income
- Total Expenses
- Total Savings
- Savings Rate
- Monthly Growth Percentage
- Expense Distribution by Category

---

## 📈 Expense Distribution

Expenses are grouped by category and visualized using **Recharts Pie Chart**.

Example:

- 🍔 Food
- 🚗 Transport
- 🎮 Gaming
- 👕 Clothing
- 💻 Gadgets
- 🎬 Entertainment

---

## 💾 Data Storage

This project uses the browser's **Local Storage**.

Your data is:

- Stored only on your device
- Never sent to any server
- Available only in your browser
- Removed if browser storage is cleared

---

## 📱 Responsive Design

The application is optimized for:

- Desktop
- Tablet
- Mobile

---

## 🔮 Future Improvements

- Export transactions as CSV
- Import previous data
- Multiple wallets/accounts
- Budget limits
- Monthly goals
- Income & Expense Trends
- Bar & Line Charts
- Category Management
- Authentication
- Cloud Sync

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork the repository and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Developer

Built with ❤️ by **Harmeet Singh**

GitHub: https://github.com/Harmeet03