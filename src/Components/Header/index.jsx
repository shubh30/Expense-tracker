import { useDispatch, useSelector } from "react-redux";
import { headerStyle, titleStyle, formInput } from "./style";

import { setSelectedMonth } from "../../store/slices/expensesSlice";

const Header = () => {
  const dispatch = useDispatch();
  const selectedMonth = useSelector((state) => state.expenses.selectedMonth);
  const onMonthChange = (e) => {
    dispatch(setSelectedMonth(e.target.value));
  };
  return (
    <header css={headerStyle}>
      <h1 css={titleStyle}>Expense Tracker</h1>
      <div>
        <input
          type="month"
          id="month-select"
          value={selectedMonth}
          onChange={onMonthChange}
          css={formInput}
        />
      </div>
    </header>
  );
};

export default Header;
