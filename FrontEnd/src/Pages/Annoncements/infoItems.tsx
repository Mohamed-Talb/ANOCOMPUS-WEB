/**
 * DynamicInfoItem Component
 * 
 * A reusable component that displays metadata with an icon + label + value pattern.
 * 
 * USAGE:
 *   <DynamicInfoItem type="local" value="R8" />
 *   <DynamicInfoItem type="date" value="2025-01-01" />
 *   <DynamicInfoItem type="time" value="13:37" />
 *   <DynamicInfoItem type="expiry" value="Expired in 1d" isExpired={true} />
 * 
 * HOW TO ADD A NEW ITEM TYPE:
 *   1. Add the new type to InfoType: type InfoType = '...' | 'newType';
 *   2. Import the icon: import { ..., BsNewIcon } from 'react-icons/bs';
 *   3. Add a case in getConfig():
 *      case 'newType':
 *        return { icon: <BsNewIcon />, label: 'Label:' };
 *   4. Use it: <DynamicInfoItem type="newType" value="..." />
 */

import React from 'react';
import { 
  BsGeoAlt, 
  BsCalendar3, 
  BsShieldX 
} from 'react-icons/bs';
import './infoItems.css';

type InfoType = 'local' | 'datetime' | 'expiry';

interface DynamicInfoItemProps {
  type: InfoType;
  value: string;
  isExpired?: boolean;
}

export const DynamicInfoItem: React.FC<DynamicInfoItemProps> = ({ 
  type, 
  value, 
  isExpired = false 
}) => {
  const getConfig = () => {
    switch (type) {
      case 'local':
        return { icon: <BsGeoAlt />, label: 'Local:' };
      case 'datetime':
        return { icon: <BsCalendar3 />, label: 'Date:' };
      case 'expiry': 
        return { icon: <BsShieldX />, label: '' };
      default: 
        return { icon: null, label: '' };
    }
  };

  const getValueClass = () => {
    if (type === 'expiry') {
      return isExpired ? 'info-item__value--expired' : 'info-item__value--valid';
    }
    return 'info-item__value--default';
  };

  const config = getConfig();

  return (
    <div className="info-item">
      <div className="info-item__icon">
        {config.icon}
      </div>
      <div className="info-item__content">
        {config.label && (
          <span className="info-item__label">
            {config.label}
          </span>
        )}
        <span className={`info-item__value ${getValueClass()}`}>
          {value}
        </span>
      </div>
    </div>
  );
};

export default DynamicInfoItem;