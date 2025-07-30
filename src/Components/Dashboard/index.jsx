import Header from "../Header";
import ExpenseForm from "../ExpenseForm";

import {
  appContainer,
  container
} from "./style.js";

const Layout = () => {
  return (
    <div css={appContainer}>
      <Header />
      <main css={container}>
        <ExpenseForm />
      </main>
    </div>
  );
};

export default Layout;
