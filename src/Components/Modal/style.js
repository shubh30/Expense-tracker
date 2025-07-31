import { css } from "@emotion/react";

export const overlay = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`;

export const modal = css`
  background: #fff;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const modalHeader = css`
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
`;

export const modalTitle = css`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
`;

export const modalContent = css`
  padding: 1.5rem;
`;

export const modalClose = css`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #6b7280;
`;
