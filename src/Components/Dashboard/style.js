import { css } from "@emotion/react";

export const appContainer = css`
  min-height: 100vh;
`;

export const container = css`
  min-width: 1200px;
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
