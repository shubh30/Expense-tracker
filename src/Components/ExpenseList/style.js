import { css } from "@emotion/react";

export const emptyState = css`
  text-align: center;
  padding: 3rem 1rem;
  color: #6b7280;
`;

export const expenseList = css`
  max-height: 400px;
  overflow-y: auto;
`;

export const expenseItem = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  margin-bottom: 0.75rem;
  transition: background-color 0.2s;

  &:hover {
    background: #f9fafb;
  }
`;

export const expenseInfo = css`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
  min-width: 0;
`;

export const expenseCategoryDot = css`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
`;

export const expenseDetails = css`
  flex: 1;
  min-width: 0;
`;

export const expenseDescription = css`
  font-weight: 500;
  margin: 0 0 0.25rem 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const expenseMeta = css`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
`;

export const expenseActions = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
`;

export const expenseAmount = css`
  font-weight: 600;
  margin-right: 0.5rem;
`;
