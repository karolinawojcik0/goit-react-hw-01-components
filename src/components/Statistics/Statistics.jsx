import React from 'react';
import { StatList } from './Statistics.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className="statistics">
        {title && <h2 className="title">{title}</h2>}

        <StatList>
          {stats.map(stat => (
            <li
              key={stat.id}
              className="item"
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}</span>
            </li>
          ))}
        </StatList>
      </section>
    </>
  );
};
