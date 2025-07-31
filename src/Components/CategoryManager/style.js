import { css } from "@emotion/react";

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

export const h4Style = css`
  margin: 0 0 0.25rem 0;
  font-weight: 500;
`;

export const pStyle = css`
  margin: 0;
  font-size: 0.875rem;
  color: #6b7280;
`;

export const badge = css`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  background: #e5e7eb;
  color: #374151;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 4px;
  margin-left: 0.5rem;
`;

export const cardStyle = css`
  position: relative;
`;

export const addCategoryCta = css`
  position: absolute;
  top: 18px;
  right: 24px;
`;

export const categoryActions = css`
  display: flex;
  gap: 0.5rem;
`;
