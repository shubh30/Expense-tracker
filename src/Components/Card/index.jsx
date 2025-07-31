import { card, cardContent, cardHeader, cardTitle, count } from "./style.js";

const Card = ({ title, extraInfo, style, children }) => {
  return (
    <div css={[card, style]}>
      <div css={cardHeader}>
        <h3 css={cardTitle}>
          {title}
          {extraInfo && <span css={count}>{extraInfo}</span>}
        </h3>
      </div>
      <div css={cardContent}>{children}</div>
    </div>
  );
};

export default Card;
