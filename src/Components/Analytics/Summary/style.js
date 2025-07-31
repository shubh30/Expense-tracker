import { css } from "@emotion/react";

export const summaryList = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const categoryItem = css`
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

export const categoryInfo = css`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
`;

export const categoryColor = (color) => css`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${color};
`;

export const textRight = css`
  text-align: right;
`;

export const highlightedText = css`
  font-weight: 600;
`;

export const text = css`
  font-weight: 400;
  color: #6b7280;
`;

export const totalItem = css`
  background: #f3f4f6;
  font-weight: 600;
`;
