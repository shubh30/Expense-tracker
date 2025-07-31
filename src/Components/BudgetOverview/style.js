import { css } from "@emotion/react";

export const budgetStats = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const budgetAmount = (isOverBudget = false) => css`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  color: ${isOverBudget ? "#ef4444" : "#1e293b"};
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

export const form = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const formGroup = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const formLabel = css`
  font-weight: 500;
  color: #374151;
  font-size: 0.875rem;
`;

export const formInput = css`
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;
`;

export const action = css`
  display: flex;
  gap: 0.5rem;
`;
