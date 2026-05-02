'use client';

import { memo } from 'react';

function StatsSection({ dict }) {
  const stats = [
    { value: dict.stats.projects, label: dict.stats.projectsLabel },
    { value: dict.stats.experience, label: dict.stats.experienceLabel },
    { value: dict.stats.cities, label: dict.stats.citiesLabel },
    { value: dict.stats.satisfaction, label: dict.stats.satisfactionLabel },
  ];

  return (
    <section className="stats-section">
      <div className="container stats-bar reveal">
        {stats.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default memo(StatsSection);
