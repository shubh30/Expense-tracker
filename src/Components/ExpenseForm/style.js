import { css } from '@emotion/react';

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

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

export const formSelect = formInput;

export const formActions = css`
  display: flex;
  gap: 0.5rem;
`;

export const btn = css`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
  flex: 1;
`;

export const btnPrimary = css`
  background: #3b82f6;
  color: white;
`;
