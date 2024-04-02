import React from 'react';
import {
  Label,
  Percentage,
  SectionStatistics,
  StatList,
} from './Statistics.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <SectionStatistics>
        {title && <h2 className="title">{title}</h2>}

        <StatList>
          {stats.map(stat => (
            <li
              key={stat.id}
              className="item"
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <Label>{stat.label}</Label>
              <Percentage>{stat.percentage}</Percentage>
            </li>
          ))}
        </StatList>
      </SectionStatistics>
    </>
  );
};
