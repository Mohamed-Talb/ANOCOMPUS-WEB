import React from 'react';
import './overview.css';

interface StatCardProps {
  label: string;
  value: number;
  percentage: number;
  color: 'blue' | 'pink' | 'green' | 'yellow';
}

const StatCard: React.FC<StatCardProps> = ({ label, value, percentage, color }) => {
  const radius = 25;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className={`stat-card stat-card-${color}`}>
      <h3 className="stat-label">{label}</h3>
      <div className="stat-content">
        <span className={`stat-value stat-value-${color}`}>{value}</span>
        <div className="circular-progress">
          <svg width="80" height="80" className="progress-ring">
            <circle
              className="progress-ring-circle-bg"
              cx="40"
              cy="40"
              r={radius}
            />
            <circle
              className={`progress-ring-circle progress-ring-${color}`}
              cx="40"
              cy="40"
              r={radius}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
            />
          </svg>
          <span className="percentage-text">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

interface StatsOverviewProps {
  stats?: {
    totalAnomalies: number;
    totalAnomaliesPercentage: number;
    criticalAnomalies: number;
    criticalAnomaliesPercentage: number;
    fixedAnomalies: number;
    fixedAnomaliesPercentage: number;
    pendingAnomalies: number;
    pendingAnomaliesPercentage: number;
  };
}

const StatsOverview: React.FC<StatsOverviewProps> = ({ stats }) => {
  const defaultStats = {
    totalAnomalies: 0,
    totalAnomaliesPercentage: 0,
    criticalAnomalies: 0,
    criticalAnomaliesPercentage: 0,
    fixedAnomalies: 0,
    fixedAnomaliesPercentage: 0,
    pendingAnomalies: 0,
    pendingAnomaliesPercentage: 0,
  };

  const data = stats || defaultStats;

  return (
    <div className="stats-overview">
      <h2 className="overview-title">Overview</h2>
      <div className="stats-grid">
        <StatCard
          label="Total Anomalies"
          value={data.totalAnomalies}
          percentage={data.totalAnomaliesPercentage}
          color="blue"
        />
        <StatCard
          label="Anomalies Critique"
          value={data.criticalAnomalies}
          percentage={data.criticalAnomaliesPercentage}
          color="pink"
        />
        <StatCard
          label="Anomalies Fixed"
          value={data.fixedAnomalies}
          percentage={data.fixedAnomaliesPercentage}
          color="green"
        />
        <StatCard
          label="Pending Anomalies"
          value={data.pendingAnomalies}
          percentage={data.pendingAnomaliesPercentage}
          color="yellow"
        />
      </div>
    </div>
  );
};

export default StatsOverview;