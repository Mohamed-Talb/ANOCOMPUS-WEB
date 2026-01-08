/**
 * NoticePopup Component
 * 
 * A modal component that displays notice/announcement details using DynamicInfoItem.
 * 
 * USAGE:
 *   <NoticePopup
 *     isOpen={isModalOpen}
 *     onClose={() => setIsModalOpen(false)}
 *     title="Notice Title"
 *     infoItems={[
 *       { type: 'local', value: 'R8' },
 *       { type: 'date', value: '2025-01-01' },
 *       { type: 'time', value: '13:37' },
 *       { type: 'expiry', value: 'Expired in 1d', isExpired: true }
 *     ]}
 *     details="This is the notice description text..."
 *     onEdit={() => handleEdit()}
 *     onDelete={() => handleDelete()}
 *   />
 */

import React from 'react';
import {FiEdit2, FiTrash2, FiX } from 'react-icons/fi';
import { DynamicInfoItem } from './infoItems';
import './styles/NoticePopup.css';

type InfoItemType = 'local' | 'datetime' | 'expiry';

interface InfoItemData {
  type: InfoItemType;
  value: string;
  isExpired?: boolean;
}

interface NoticePopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  infoItems: InfoItemData[];
  details: string;
  onEdit?: () => void;
  onDelete?: () => void;}

export const NoticePopup: React.FC<NoticePopupProps> = ({
  isOpen,
  onClose,
  title,
  infoItems,
  details,
  onEdit,
  onDelete,
}) => {
  if (!isOpen) return null;

  // Function to parse text and convert URLs to clickable links
  const renderDetailsWithLinks = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    
    return parts.map((part, index) => {
      if (urlRegex.test(part)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="notice-popup__link"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="notice-popup__backdrop"
        onClick={handleBackdropClick}
      />

      {/* Modal Card */}
      <div className="notice-popup__card">
        {/* Close Button */}
        <button
          className="notice-popup__close-btn"
          onClick={onClose}
          aria-label="Close"
        >
          <FiX size={24} />
        </button>

        {/* Title */}
        <h2 className="notice-popup__title">
          {title}
        </h2>

        {/* Info Items Grid */}
        <div className="notice-popup__info-grid">
          {infoItems.map((item, index) => (
            <DynamicInfoItem key={index} type={item.type} value={item.value} isExpired={item.isExpired}/>))}
        </div>

        {/* Details Section */}
        <div className="notice-popup__details">
          <h3 className="notice-popup__details-heading">
            Details
          </h3>
          <p className="notice-popup__details-text">
            {renderDetailsWithLinks(details)}
          </p>
        </div>

        {/* Footer */}
        <div className="notice-popup__footer">
          {/* Action Buttons */}
          <div className="notice-popup__actions">
            {onEdit && (
              <button
                className="notice-popup__edit-btn"
                onClick={onEdit}
              >
                Edit
              </button>
            )}
            {onDelete && (
              <button
                className="notice-popup__delete-btn"
                onClick={onDelete}
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NoticePopup;
