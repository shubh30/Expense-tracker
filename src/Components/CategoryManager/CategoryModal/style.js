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

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

export const colorPicker = css`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const colorOption = (isSelected, color) => css`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid transparent;
  background: ${color};
  border-color: ${isSelected ? "#1e293b" : "transparent"};
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const actions = css`
  display: flex;
  gap: 0.5rem;
`;
