import Header from "../Header";
import ExpenseForm from "../ExpenseForm";
import ExpenseList from "../ExpenseList";

import {
  appContainer,
  container,
  grid
} from "./style.js";

const Layout = () => {
  return (
    <div css={appContainer}>
      <Header />
      <main css={container}>
        <div css={grid}>
          <ExpenseForm />
          <ExpenseList />
        </div>
      </main>
    </div>
  );
};

export default Layout;
