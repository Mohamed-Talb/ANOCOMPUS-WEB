import './Badges.css';

interface BadgeProps 
{
  text: string;
  type: 'category' | 'severity' | 'status';
}

export default function Badge({ text, type }: BadgeProps) 
{
  const getClassName = () => {
    if (type === 'category') 
    {
      const categoryColors: Record<string, string> = {
        Finance: 'badge-finance',
        Development: 'badge-development',
        IT: 'badge-it',
        Support: 'badge-support',
        Marketing: 'badge-marketing',
        HR: 'badge-hr',
      };
      return categoryColors[text] || 'badge-default';
    }

    if (type === 'severity') 
    {
      const severityColors: Record<string, string> = 
      {
        High: 'badge-high',
        Medium: 'badge-medium',
        Low: 'badge-low',
      };
      return severityColors[text] || 'badge-default';
    }

    if (type === 'status') {
      const statusColors: Record<string, string> = {
        Pending: 'badge-pending',
        'In Progress': 'badge-in-progress',
        Completed: 'badge-completed',
      };
      return statusColors[text] || 'badge-default';
    }
    return 'badge-default';
  };

  return (
    <span className={`badge ${getClassName()}`}>
      {text}
    </span>
  );
}
