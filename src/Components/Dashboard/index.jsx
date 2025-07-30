import Header from "../Header";
import ExpenseForm from "../ExpenseForm";

import "./style.css";

const Layout = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="container">
        <ExpenseForm />
      </main>
    </div>
  );
};

export default Layout;
