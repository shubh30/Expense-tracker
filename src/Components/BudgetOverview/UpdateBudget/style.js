import { css } from "@emotion/react";

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
