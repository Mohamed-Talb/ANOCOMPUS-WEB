import './ReportsComponents.css'
// import Anomaly_Details from '../SharedComponents/Anomaly_Details.tsx'

function ReportsComponents({ status, title, date, onClose }: { status: string; title: string; date: string, onClose: () => void }) {



    return (

        <div className="container-rectangle-el">

            <p className="status-el">{status}</p>
            <h1 className="title-el">{title}</h1>
            <p className="date-el">{date}</p>
            <p className='content-area'></p>

            <button
                className='button-el'
                onClick={onClose}
            >
                Show Details
            </button>

        </div>
    );
}

export default ReportsComponents;