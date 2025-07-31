import React from "react";
import Card from "../Card";

import { budgetStats, budgetAmount, budgetSubTitle } from "./style";

const BudgetOverview = () => {
  return (
    <div className="grid grid-4">
      <Card title="Monthly Budget">
        <div css={budgetStats}>
          <p css={budgetAmount}>$2000</p>
        </div>
      </Card>
      <Card title="Total Spent">
        <div css={budgetStats}>
          <p css={budgetAmount}></p>
          <p css={budgetSubTitle}></p>
        </div>
      </Card>
      <Card title="Remaining">
        <div css={budgetStats}>
          <p css={budgetAmount}></p>
          <p css={budgetSubTitle}></p>
        </div>
      </Card>
      <Card title="Daily Allowance">
        <div css={budgetStats}>
          <p css={budgetAmount}></p>
          <p css={budgetSubTitle}></p>
        </div>
      </Card>
    </div>
  );
};

export default BudgetOverview;
