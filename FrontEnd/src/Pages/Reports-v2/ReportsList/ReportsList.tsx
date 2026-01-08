import React, { useState } from 'react';
import { ChevronDown, MapPin, Calendar } from 'lucide-react';
import {sampleReports} from '../IluationData';
import type { Person, Report, Attachment } from '../types';


// Utility Functions
function getFirstLine(description: string): string {
  const lines = description.split('\n');
  return lines[0].length > 80 ? lines[0].substring(0, 80) + '...' : lines[0];
}

function getPriorityColor(priority: string): string 
{
  switch (priority.toLowerCase()) {
    case 'high':
      return 'text-red-400 bg-red-950/50';
    case 'medium':
      return 'text-yellow-400 bg-yellow-950/50';
    case 'low':
      return 'text-green-400 bg-green-950/50';
    default:
      return 'text-gray-400 bg-gray-800';
  }
}

function formatDate(dateString: string): string 
{
  const date = new Date(dateString);
  const now = new Date();
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diff < 3600) {
    const minutes = Math.floor(diff / 60);
    return `${minutes}m ago`;
  } else if (diff < 86400) {
    const hours = Math.floor(diff / 3600);
    return `${hours}h ago`;
  } else {
    const days = Math.floor(diff / 86400);
    return `${days}d ago`;
  }
}

// Priority Badge Component
function PriorityBadge(props: { priority: string }) 
{
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium ${getPriorityColor(props.priority)}`}>
      {props.priority}
    </span>
  );
}

// Report Card Component
function ReportCard(props: { report: Report }) 
{
  const report = props.report;
  return (
    <div className="bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer p-4">
      <div className="flex flex-col gap-3">
        {/* Title and Description */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-base mb-1 truncate">{report.Title}</h3>
          <p className="text-gray-400 text-sm truncate">{getFirstLine(report.Description)}</p>
        </div>

        {/* Footer: Priority, Location, Date */}
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <PriorityBadge priority={report.Priority} />

          <div className="flex items-center gap-1 text-gray-400">
            <MapPin className="w-4 h-4" />
            <span className="text-xs">{report.Location}</span>
          </div>

          <div className="flex items-center gap-1 text-gray-400">
            <Calendar className="w-4 h-4" />
            <span className="text-xs">{formatDate(report.Date)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReportsList() 
{
  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Reports</h1>
          {/* Placeholder buttons for design */}
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors text-sm">
              Sort <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors text-sm">
              Priority <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors text-sm">
              Department <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Reports List */}
        <div className="space-y-3">
          {sampleReports.map(function(report, index) {
            return <ReportCard key={index} report={report} />;
          })}
        </div>
      </div>
    </div>
  );
}
