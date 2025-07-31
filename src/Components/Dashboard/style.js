import { css } from "@emotion/react";

export const appContainer = css`
  min-height: 100vh;
`;

export const container = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1rem 1.5rem 1rem;
`;

export const grid = css`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const budgetOverviewContainer = css`
  margin-bottom: 1.5rem;
`;

export const tabs = css`
  width: 100%;
`;

export const tabsList = css`
  display: flex;
  background: #f1f5f9;
  border-radius: 6px;
  padding: 0.25rem;
  margin-bottom: 1.5rem;
`;

export const tabCta = (isActive) => css`
  flex: 1;
  padding: 0.75rem 1rem;
  background: ${isActive ? "#fff" : "transparent"};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
  color: ${isActive ? "#1e293b" : "#64748b"};
  box-shadow: ${isActive ? "0 1px 3px rgba(0, 0, 0, 0.1)" : "none"};
`;
