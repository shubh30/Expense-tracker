import React from "react";
import Card from "../../Card";

import {
  summaryList,
  categoryItem,
  categoryInfo,
  categoryColor,
  textRight,
  highlightedText,
  text,
  totalItem,
} from "./style";

const Summary = ({ chartData, totalSpent }) => {
  return (
    <Card title="Category Summary">
      <div css={summaryList}>
        {chartData.map((category) => (
          <div key={category} css={categoryItem}>
            <div css={categoryInfo}>
              <div css={categoryColor(category.color)} />
              <div>
                <h4>{category.name}</h4>
              </div>
            </div>
            <div css={textRight}>
              <div css={highlightedText}>${category.value.toFixed(2)}</div>
              <div css={text}>
                {((category.value / totalSpent) * 100).toFixed(1)}%
              </div>
            </div>
          </div>
        ))}

        <div css={[categoryItem, totalItem]}>
          <span>Total</span>
          <span>${totalSpent.toFixed(2)}</span>
        </div>
      </div>
    </Card>
  );
};

export default Summary;
