import { css } from "@emotion/react";

export const card = css`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  overflow: hidden;
`;

export const cardHeader = css`
  padding: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
  background: #f8fafc;
`;

export const cardTitle = css`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const cardContent = css`
  padding: 1.5rem;
`;

export const count = css`
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
