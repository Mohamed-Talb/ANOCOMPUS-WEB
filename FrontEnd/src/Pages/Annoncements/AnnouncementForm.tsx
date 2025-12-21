// AnnouncementForm.tsx
import React, { useState } from 'react';
import './styles/AnnouncementForm.css';

interface AnnouncementFormData {
  title: string;
  description: string;
  eventDate: string;
  eventPlace: string;
  expiryDate: string;
  targetDepartment: string;
  priority: string;
}

const AnnouncementForm: React.FC = () => {
  const [formData, setFormData] = useState<AnnouncementFormData>({
    title: '',
    description: '',
    eventDate: '',
    eventPlace: '',
    expiryDate: '',
    targetDepartment: '',
    priority: '',
  });

  const departments = [
    'R8',
    '1337',
    'Art e Metier',
    'ABS',
    'College of Computing',
  ];

  const priorities = ['Low', 'Medium', 'High', 'Urgent'];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Add your submission logic here
  };

  const handleCancel = () => {
    setFormData({
      title: '',
      description: '',
      eventDate: '',
      eventPlace: '',
      expiryDate: '',
      targetDepartment: '',
      priority: '',
    });
  };

  return (
    <div className="announcement-container">
      <div className="announcement-form">
        <h1 className="form-title">Create New Announcement</h1>

        <section className="form-section">
          <h2 className="section-title">Announcement Details</h2>

          <div className="form-group">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="form-input"
              placeholder="Enter announcement title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="form-textarea"
              placeholder="Provide detailed description of the announcement"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
            />
          </div>
        </section>

        <section className="form-section">
          <h2 className="section-title">Event & Scheduling</h2>

          <div className="form-group">
            <label htmlFor="eventDate" className="form-label">
              Event Date
            </label>
            <div className="input-with-icon">
              <span className="input-icon">📅</span>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                className="form-input with-icon"
                placeholder="Pick an event date"
                value={formData.eventDate}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="eventPlace" className="form-label">
              Event Place
            </label>
            <input
              type="text"
              id="eventPlace"
              name="eventPlace"
              className="form-input"
              placeholder="Specify the event location or platform"
              value={formData.eventPlace}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="expiryDate" className="form-label">
              Expiry Date
            </label>
            <div className="input-with-icon">
              <span className="input-icon">📅</span>
              <input
                type="date"
                id="expiryDate"
                name="expiryDate"
                className="form-input with-icon"
                placeholder="Pick an expiry date"
                value={formData.expiryDate}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </section>

        <section className="form-section">
          <h2 className="section-title">Targeting & Priority</h2>

          <div className="form-group">
            <label htmlFor="targetDepartment" className="form-label">
              Target Department
            </label>
            <select
              id="targetDepartment"
              name="targetDepartment"
              className="form-select"
              value={formData.targetDepartment}
              onChange={handleInputChange}
            >
              <option value="">Select a department</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="priority" className="form-label">
              Announcement Priority
            </label>
            <select
              id="priority"
              name="priority"
              className="form-select"
              value={formData.priority}
              onChange={handleInputChange}
            >
              <option value="">Select priority level</option>
              {priorities.map((priority) => (
                <option key={priority} value={priority}>
                  {priority}
                </option>
              ))}
            </select>
          </div>
        </section>

        <div className="form-actions">
          <button type="button" className="btn-cancel" onClick={handleCancel}>
            Cancel
          </button>
          <button type="button" className="btn-submit" onClick={handleSubmit}>
            Create Announcement
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementForm;