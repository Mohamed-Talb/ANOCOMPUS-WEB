// import './Anomaly_Details.css'
// import { X } from 'lucide-react';

// function Anomaly_Details({ onClose } : {onClose : () => void}) {
//     return (
//         <div className="popup-overlay" onClick={onClose}>
//             <div className="popup-box" onClick={(e) => e.stopPropagation()}>

//                 <div className='header-el'>
//                     <h1 className='header-title'>Anomaly Details : ID # 1</h1>
//                     <X className='x-el' onClick={onClose} />
//                 </div>

//                 <div className='title-section'>
//                     <label>Title</label>
//                     <input type="text" value="Disruptive behavior in class" readOnly />
//                 </div>

//                 <div className='description-section'>
//                     <label>Description</label>
//                     <textarea readOnly>Join us for our annual summer picnic! Food, games, and fun for the whole family. RSVP by August 1st to ensure we have an accurate headcount. Location details will be shared soon.</textarea>
//                 </div>

//                 <div className='info-grid-three'>
//                     <div className='priority-section'>
//                         <label><span className='icon-circle'></span> Priority</label>
//                         <select className='select-input'>
//                             <option value="critical" selected>Critical</option>
//                             <option value="high" selected>High</option>
//                             <option value="medium">Medium</option>
//                             <option value="low">Low</option>
//                         </select>
//                     </div>

//                     <div className='date-section'>
//                         <label><span className='icon-calendar'></span> Due date</label>
//                         <input type="date" value="" className='date-input' />
//                     </div>

//                     <div className='owner-section'>
//                         <label><span className='icon-user'></span> Owner</label>
//                         <div className='owner-info'>
//                             <div className='avatar'>SI</div>
//                             <span>Staff Ichraq</span>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='attachments-section'>
//                     <label>Attachments</label>
//                     <div className='attachments-list'>
//                         <div className='attachment-item_details'>
//                             <span className='attachment-icon'>📎</span>
//                             <span className='attachment-name'>photo-1.jpg</span>
//                         </div>
//                         <div className='attachment-item_details'>
//                             <span className='attachment-icon'>📎</span>
//                             <span className='attachment-name'>rapport.pdf</span>
//                         </div>
//                     </div>
//                     <button className='add-attachment-btn'>
//                         <span>+</span> Add attachments
//                     </button>
//                 </div>

//                 <div className='status-section-full'>
//                     <label>Update status</label>
//                     <select className='select-input status-select'>
//                         <option value="pending" selected>Pending</option>
//                         <option value="in-progress">In Progress</option>
//                         <option value="fixed">Fixed</option>
//                     </select>
//                 </div>

//                 <div className='category-section'>
//                     <label>Category</label>
//                     <select className='select-input'>
//                         <option value="behavior" selected>Behavior</option>
//                         <option value="infrastructure">Infrastructure</option>
//                         <option value="academic">Academic</option>
//                         <option value="other">Other</option>
//                     </select>
//                 </div>

//                 <div className='fixer-info-section'>
//                     <label>Fixer Information</label>
//                     <div className='fixer-grid'>
//                         <div className='fixer-field'>
//                             <label className='sub-label'>Assign Fixer</label>
//                             <input type="text" placeholder="Enter name" className='text-input' />
//                         </div>
//                         <div className='fixer-field'>
//                             <label className='sub-label'>Phone Number</label>
//                             <input type="tel" placeholder="Enter phone number" className='text-input' />
//                         </div>
//                     </div>
//                 </div>

//                 <div className='comment-section'>
//                     <label>Add a Comment</label>
//                     <div className='comment-box'>
//                         <div className='avatar-small'>👤</div>
//                         <textarea 
//                             className='comment-input' 
//                             placeholder='Add note for staff...'
//                             rows={3}
//                         ></textarea>
//                     </div>
//                     <div className='comment-actions'>
//                         <div className='comment-tools'>
//                             <button className='tool-btn'>
//                                 <span>@</span> Tag
//                             </button>
//                             <button className='tool-btn'>
//                                 <span>😊</span> Emoji
//                             </button>
//                         </div>
//                         <button className='send-btn'>Send</button>
//                     </div>
//                 </div>

//                 <div className='footer-actions'>
//                     <button className='btn-cancel' onClick={onClose}>Cancel</button>
//                     <button className='btn-update'>UPDATE</button>
//                 </div>

//             </div>
//         </div>
//     );
// }

// export default Anomaly_Details;


import { X } from 'lucide-react';

function Anomaly_Details({ onClose }: { onClose: () => void }) {
    
    // Common styles for labels and inputs to ensure consistency
    const labelStyle = "block font-['Poppins'] text-[16px] font-medium text-gray-700 mb-2";
    const inputStyle = "w-full font-['Poppins'] text-[15px] text-gray-900 p-3 bg-[#f9fafb] border border-gray-200 rounded-lg outline-none transition-all duration-200 hover:bg-white hover:border-gray-300 focus:bg-white focus:border-[#ff6b35]";
    const sectionStyle = "px-5 md:px-6 mt-5";

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[1000] p-5 backdrop-blur-[4px]" onClick={onClose}>
            
            {/* Custom Styles for Scrollbar & Animation */}
            <style>{`
                @keyframes slideIn {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .custom-scrollbar::-webkit-scrollbar { width: 8px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: #f3f4f6; margin: 30px 0; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #aeb1b4; border-radius: 10px; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #9ca3af; }
            `}</style>

            <div 
                className="bg-white rounded-2xl w-full max-w-[550px] max-h-[90vh] overflow-y-auto shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] animate-[slideIn_0.3s_ease-out] custom-scrollbar" 
                onClick={(e) => e.stopPropagation()}
            >

                {/* Header */}
                <div className='flex justify-between items-center px-5 py-5 md:px-6 border-b border-gray-200 bg-white sticky top-0 z-10'>
                    <h1 className="font-['Poppins'] text-[1.1rem] md:text-[1.3rem] font-semibold text-gray-900 m-0">
                        Anomaly Details : ID # 1
                    </h1>
                    <X 
                        className='w-6 h-6 cursor-pointer text-gray-500 rounded p-1 hover:bg-gray-100 hover:text-gray-900 transition-colors' 
                        onClick={onClose} 
                    />
                </div>

                {/* Title */}
                <div className={sectionStyle}>
                    <label className={labelStyle}>Title</label>
                    <input type="text" value="Disruptive behavior in class" readOnly className={inputStyle} />
                </div>

                {/* Description */}
                <div className={sectionStyle}>
                    <label className={labelStyle}>Description</label>
                    <textarea 
                        readOnly 
                        className={`${inputStyle} min-h-[100px] resize-y text-[15px] leading-relaxed`}
                    >
                        Join us for our annual summer picnic! Food, games, and fun for the whole family. RSVP by August 1st to ensure we have an accurate headcount. Location details will be shared soon.
                    </textarea>
                </div>

                {/* Info Grid (Priority, Date, Owner) */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-5 md:px-6 mt-5'>
                    <div>
                        <label className={`${labelStyle} flex items-center gap-1.5`}>
                            <span className="text-gray-500 text-base">○</span> Priority
                        </label>
                        <select className={`${inputStyle} py-2.5 px-3 text-[13px] cursor-pointer`}>
                            <option value="critical">Critical</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>

                    <div>
                        <label className={`${labelStyle} flex items-center gap-1.5`}>
                            <span className="text-[14px]">📅</span> Due date
                        </label>
                        <input type="date" className={`${inputStyle} py-2.5 px-3 text-[13px] cursor-pointer`} />
                    </div>

                    <div>
                        <label className={`${labelStyle} flex items-center gap-1.5`}>
                            <span className="text-[14px]">👤</span> Owner
                        </label>
                        <div className='flex items-center gap-2.5 p-2 px-3 bg-[#f9fafb] border border-gray-200 rounded-lg'>
                            <div className='w-8 h-8 rounded-full bg-[#ff6b35] text-white flex items-center justify-center font-semibold text-xs font-["Poppins"]'>
                                SI
                            </div>
                            <span className="font-['Poppins'] text-[13px] text-gray-700">Staff Ichraq</span>
                        </div>
                    </div>
                </div>

                {/* Attachments */}
                <div className={sectionStyle}>
                    <label className={labelStyle}>Attachments</label>
                    <div className='flex gap-3 flex-wrap mb-3 flex-col sm:flex-row'>
                        <div className='flex items-center gap-2 p-2.5 px-3.5 bg-[#f9fafb] border border-gray-200 rounded-lg text-[13px] text-gray-700 font-["Poppins"]'>
                            <span className='text-base'>📎</span>
                            <span>photo-1.jpg</span>
                        </div>
                        <div className='flex items-center gap-2 p-2.5 px-3.5 bg-[#f9fafb] border border-gray-200 rounded-lg text-[13px] text-gray-700 font-["Poppins"]'>
                            <span className='text-base'>📎</span>
                            <span>rapport.pdf</span>
                        </div>
                    </div>
                    <button className='flex items-center justify-center gap-2 w-[70%] mx-auto py-2.5 px-4 bg-white border border-dashed border-gray-700 rounded-[10px] text-sm text-[#333] cursor-pointer transition-all hover:border-[#ff6b35] hover:text-[#ff6b35] hover:bg-orange-50 font-["Poppins"]'>
                        <span className='text-lg'>+</span> Add attachments
                    </button>
                </div>


                {/* Category */}
                <div className={sectionStyle}>
                    <label className={labelStyle}>Category</label>
                    <select className={`${inputStyle} py-2.5 px-3`}>
                        <option value="behavior">Behavior</option>
                        <option value="infrastructure">Infrastructure</option>
                        <option value="academic">Academic</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                {/* Fixer Info */}
                <div className={sectionStyle}>
                    <label className={labelStyle}>Fixer Information</label>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='flex flex-col'>
                            <label className="font-['Poppins'] text-[14px] font-medium text-gray-500 mb-1.5">Assign Fixer</label>
                            <input readOnly type="text" placeholder="Enter name" className={`${inputStyle} py-2.5 px-3`} />
                        </div>
                        <div className='flex flex-col'>
                            <label className="font-['Poppins'] text-[14px] font-medium text-gray-500 mb-1.5">Phone Number</label>
                            <input readOnly type="tel" placeholder="Enter phone number" className={`${inputStyle} py-2.5 px-3`} />
                        </div>
                    </div>
                </div>

                {/* Comments */}
                <div className={`${sectionStyle} mb-0`}>
                    <label className="block font-['Poppins'] text-sm font-medium text-gray-700 mb-3">Add a Comment</label>
                    <div className='flex gap-3 items-start bg-[#f9fafb] border border-gray-200 rounded-xl p-3 mb-3'>
                        <div className='w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-lg shrink-0'>
                            👤
                        </div>
                        <textarea 
                            className="flex-1 font-['Poppins'] text-[13px] text-gray-700 border-none bg-transparent resize-none outline-none py-1 min-h-[60px] placeholder:text-gray-400" 
                            placeholder='Add note for staff...'
                            rows={3}
                        ></textarea>
                    </div>
                    <div className='flex flex-col sm:flex-row justify-between items-center gap-3'>
                        <div className='flex gap-3 w-full sm:w-auto justify-center sm:justify-start'>
                        </div>
                        <button className='w-full sm:w-auto py-2 px-6 bg-[#3964AA] text-white border-none rounded-lg text-[13px] font-medium cursor-pointer transition-all hover:bg-[#394CAA] active:scale-95 font-["Poppins"]'>
                            Send
                        </button>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className='flex flex-col-reverse sm:flex-row justify-between gap-3 p-5 md:p-6 mt-5 border-t border-gray-200'>
                    <button 
                        className='w-full sm:w-auto py-3 px-8 bg-white text-gray-700 border border-gray-300 rounded-lg text-sm font-medium cursor-pointer transition-all hover:bg-gray-50 hover:border-gray-400 font-["Poppins"]' 
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button className='w-full sm:w-auto py-3 px-8 bg-[#ff6b35] text-white border-none rounded-lg text-sm font-medium cursor-pointer transition-all shadow-[0_2px_4px_rgba(255,107,53,0.2)] hover:bg-[#e55a2b] hover:shadow-[0_4px_8px_rgba(255,107,53,0.3)] active:scale-95 font-["Poppins"]'>
                        UPDATE
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Anomaly_Details;