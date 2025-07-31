import { css, Global } from "@emotion/react";

const globalStyles = css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Rubik", sans-serif;
    background-color: #f8fafc;
    color: #1e293b;
    line-height: 1.6;
  }

  .btn {
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
  }

  .btn-primary {
    background: #3b82f6;
    color: white;
  }

  .btn-primary:hover {
    background: #2563eb;
  }

  .btn-danger {
    background: #ef4444;
    color: white;
  }

  .btn-danger:hover {
    background: #dc2626;
  }

  .btn-ghost {
    background: transparent;
    color: #6b7280;
    border: 1px solid #e5e7eb;
  }

  .btn-ghost:hover {
    background: #f9fafb;
    color: #374151;
  }

  .btn-icon {
    padding: 0.5rem;
    width: 2.5rem;
    height: 2.5rem;
  }

  .grid {
    display: grid;
    gap: 1.5rem;
  }

  .grid-4 {
    grid-template-columns: 1fr;
    @media (min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export const GlobalStyles = () => <Global styles={globalStyles} />;
