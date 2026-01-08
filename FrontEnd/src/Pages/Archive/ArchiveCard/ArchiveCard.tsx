import { Eye, RotateCw, User, Calendar, Clock, Archive } from "lucide-react";

interface DataCard {
  id: string;
  title: string;
  createdBy: string;
  assignedTo: string;
  fixedIn: string;
  timeOfResolution: string;
  equipement: string;
  workOrder: string;
  category: string;
  onClose: () => void;
}

function ArchiveCard({ Data }: { Data: DataCard }) {
  return (
    // Container: .archive-card
    <div className="bg-[#222831] border border-slate-200 rounded-2xl p-6 shadow-[0_0_5px_rgba(255,255,255,0.8)] font-['Poppins'] max-w-[1170px] w-full mx-auto my-1">
      {/* --- Top HEADER (Context) --- */}
      <div className="flex justify-start items-start gap-2.5 mb-5 border-b border-slate-400 w-full text-slate-100">
        <Archive size={32} className="text-white" />
        <div className="w-full pb-1.5">
          <h1 className="text-2xl font-normal text-white">
            Archives{" "}
            <span className="text-m py-1 align-middle ml-2">{Data.id}</span>
          </h1>
        </div>
      </div>

      {/* --- CARD HEADER (ID & Actions) --- */}
      <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
        {/* Left: ID, UUID, Status badges */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* .badge .badge-green */}
          <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
            Archivé
          </span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-6">
          {/* .action-btn .btn-blue */}
          <button
            onClick={Data.onClose}
            className="flex items-center gap-1.5 bg-transparent border-none text-[#51C5F0] hover:text-blue-400 text-sm font-medium cursor-pointer transition-colors"
          >
            <Eye size={18} />
            <span>Voir</span>
          </button>

          {/* .action-btn .btn-orange */}
          <button className="flex items-center gap-1.5 bg-transparent border-none text-orange-500 hover:text-orange-600 text-sm font-medium cursor-pointer transition-colors">
            <RotateCw size={18} />
            <span>Rouvrir</span>
          </button>
        </div>
      </div>

      {/* --- TITLE --- 
          Matches .card-title 
      */}
      <h2 className="text-lg- text-white font-medium mb-8 mt-0">
        {Data.title}
      </h2>

      {/* --- INFO GRID --- 
          Matches .info-grid and responsive media query 
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Col 1 */}
        <div>
          <p className="text-slate-100 text-xs mb-2">Créé par:</p>
          <div className="flex items-center gap-2">
            {/* .user-avatar */}
            <img
              src="https://ui-avatars.com/api/?name=Oussama+Lachhab&background=random"
              alt="User"
              className="w-8 h-8 rounded-full object-cover"
            />
            {/* .text-bold */}
            <span className="font-semibold text-slate-100 text-sm">
              {Data.createdBy}
            </span>
          </div>
        </div>

        {/* Col 2 */}
        <div>
          <p className="text-slate-100 text-xs mb-2">Assigné à:</p>
          <div className="flex items-center gap-2">
            {/* .user-placeholder */}
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
              <User size={16} />
            </div>
            {/* .text-gray */}
            <span className="text-slate-100 text-sm">{Data.assignedTo}</span>
          </div>
        </div>

        {/* Col 3 */}
        <div>
          <p className="text-slate-100 text-xs mb-2">Résolu le:</p>
          <div className="flex items-center gap-2">
            {/* .icon-gray */}
            <Calendar size={16} className="text-slate-100" />
            {/* .text-bold */}
            <span className="text-slate-100 text-sm font-medium">
              {Data.fixedIn}
            </span>
          </div>
        </div>

        {/* Col 4 */}
        <div>
          <p className="text-slate-100 text-xs mb-2">Temps résolution:</p>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-slate-100" />
            <span className="text-slate-100 text-sm font-medium">
              {Data.timeOfResolution}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArchiveCard;
