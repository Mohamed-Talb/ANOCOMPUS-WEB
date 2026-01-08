import React from "react";

interface StatCardProps {
  label: string;
  value: number;
  percentage: number;
  color: "blue" | "pink" | "green" | "yellow";
}

const colorStyles = {
  blue: {
    card: "bg-blue-100 dark:bg-[#2a3040]",
    value: "text-[#6b66ff]",
    stroke: "#6b66ff",
  },
  pink: {
    card: "bg-pink-100 dark:bg-[#3a2a35]",
    value: "text-[#ff6b9d]",
    stroke: "#ff6b9d",
  },
  green: {
    card: "bg-green-100 dark:bg-[#2a3a35]",
    value: "text-[#00d4aa]",
    stroke: "#00d4aa",
  },
  yellow: {
    card: "bg-amber-50 dark:bg-[#3a3525]",
    value: "text-[#ffa726]",
    stroke: "#ffa726",
  },
};

const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  percentage,
  color,
}) => {
  const radius = 25;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  const styles = colorStyles[color];

  return (
    <div className={`rounded-lg p-4 text-center ${styles.card}`}>
      <h3 className="text-base font-bold text-gray-800 dark:text-gray-200 mb-3 whitespace-nowrap font-['Poppins',Arial,Helvetica,sans-serif]">
        {label}
      </h3>
      <div className="flex items-center justify-between gap-3">
        <span className={`text-3xl font-bold font-['Poppins',Arial,Helvetica,sans-serif] ${styles.value}`}>
          {value}
        </span>
        <div className="relative w-20 h-20">
          <svg width="80" height="80" className="-rotate-90">
            <circle
              className="fill-none stroke-[#e8e8f0] dark:stroke-[#3a3f4a]"
              cx="40"
              cy="40"
              r={radius}
              strokeWidth="6"
            />
            <circle
              className="fill-none transition-all duration-500 ease-out"
              cx="40"
              cy="40"
              r={radius}
              strokeWidth="6"
              strokeLinecap="round"
              stroke={styles.stroke}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
            />
          </svg>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-semibold text-gray-800 dark:text-gray-200 font-['Poppins',Arial,Helvetica,sans-serif]">
            {percentage}%
          </span>
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
    <div className="bg-white dark:bg-[#222831] rounded-lg p-6 w-full m-0 shadow-[0_0_5px_rgba(255,255,255,0.8)] box-border border-2 border-white">
      <h2 className="text-xl font-semibold text-[#ff6b35] mb-5 font-['Poppins',Arial,Helvetica,sans-serif]">
        Overview
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
