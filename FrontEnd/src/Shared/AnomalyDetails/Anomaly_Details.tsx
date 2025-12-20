import { Divide } from 'lucide-react';
import './Anomaly_Details.css'
import { X } from 'lucide-react';

function Anomaly_Details({ onClose } : {onClose : () => void}) {
    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-box" onClick={(e) => e.stopPropagation()}>

                <div className='header-el'>
                    <h1 className='header-title'>Anomaly Details : ID # 1</h1>
                    <X className='x-el' onClick={onClose} />
                </div>

                <div className='title-section'>
                    <label>Title</label>
                    <input type="text" value="Disruptive behavior in class" readOnly />
                </div>

                <div className='description-section'>
                    <label>Description</label>
                    <textarea readOnly>Join us for our annual summer picnic! Food, games, and fun for the whole family. RSVP by August 1st to ensure we have an accurate headcount. Location details will be shared soon.</textarea>
                </div>

                <div className='info-grid-three'>
                    <div className='priority-section'>
                        <label><span className='icon-circle'></span> Priority</label>
                        <select className='select-input'>
                            <option value="critical" selected>Critical</option>
                            <option value="high" selected>High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>

                    <div className='date-section'>
                        <label><span className='icon-calendar'></span> Due date</label>
                        <input type="date" value="" className='date-input' />
                    </div>

                    <div className='owner-section'>
                        <label><span className='icon-user'></span> Owner</label>
                        <div className='owner-info'>
                            <div className='avatar'>SI</div>
                            <span>Staff Ichraq</span>
                        </div>
                    </div>
                </div>

                <div className='attachments-section'>
                    <label>Attachments</label>
                    <div className='attachments-list'>
                        <div className='attachment-item'>
                            <span className='attachment-icon'>📎</span>
                            <span className='attachment-name'>photo-1.jpg</span>
                        </div>
                        <div className='attachment-item'>
                            <span className='attachment-icon'>📎</span>
                            <span className='attachment-name'>rapport.pdf</span>
                        </div>
                    </div>
                    <button className='add-attachment-btn'>
                        <span>+</span> Add attachments
                    </button>
                </div>

                <div className='status-section-full'>
                    <label>Update status</label>
                    <select className='select-input status-select'>
                        <option value="pending" selected>Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="fixed">Fixed</option>
                    </select>
                </div>

                <div className='category-section'>
                    <label>Category</label>
                    <select className='select-input'>
                        <option value="behavior" selected>Behavior</option>
                        <option value="infrastructure">Infrastructure</option>
                        <option value="academic">Academic</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className='fixer-info-section'>
                    <label>Fixer Information</label>
                    <div className='fixer-grid'>
                        <div className='fixer-field'>
                            <label className='sub-label'>Assign Fixer</label>
                            <input type="text" placeholder="Enter name" className='text-input' />
                        </div>
                        <div className='fixer-field'>
                            <label className='sub-label'>Phone Number</label>
                            <input type="tel" placeholder="Enter phone number" className='text-input' />
                        </div>
                    </div>
                </div>

                <div className='comment-section'>
                    <label>Add a Comment</label>
                    <div className='comment-box'>
                        <div className='avatar-small'>👤</div>
                        <textarea 
                            className='comment-input' 
                            placeholder='Add note for staff...'
                            rows={3}
                        ></textarea>
                    </div>
                    <div className='comment-actions'>
                        <div className='comment-tools'>
                            <button className='tool-btn'>
                                <span>@</span> Tag
                            </button>
                            <button className='tool-btn'>
                                <span>😊</span> Emoji
                            </button>
                        </div>
                        <button className='send-btn'>Send</button>
                    </div>
                </div>

                <div className='footer-actions'>
                    <button className='btn-cancel' onClick={onClose}>Cancel</button>
                    <button className='btn-update'>UPDATE</button>
                </div>

            </div>
        </div>
    );
}

export default Anomaly_Details;