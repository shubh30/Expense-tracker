import {
  headerStyle,
  titleStyle
} from "./style"

const Header = () => {

  return (
    <header css={headerStyle}
    >
      <h1 css={titleStyle}>Expense Tracker</h1>
    </header>
  );
};

export default Header;
