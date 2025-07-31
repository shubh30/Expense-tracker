import { css } from "@emotion/react";

export const budgetStats = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const budgetAmount = (isOverBudget = false, color = "#1e293b") => css`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  color: ${isOverBudget ? "#ef4444" : color};
`;

export const budgetSubTitle = css`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
`;

export const editBtnStyle = css`
  width: 10px;
  position: absolute;
  top: 16px;
  right: 20px;
`;

export const cardStyle = css`
  position: relative;
`;

