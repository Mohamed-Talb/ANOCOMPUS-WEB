import { Eye, RotateCw, User, Calendar, Clock, History, Archive } from 'lucide-react';
import './ArchiveCard.css';

function ArchiveCard() {
  return (
    <div className="archive-card">

      {/* --- Top HEADER --- */}
      <div className='top-header'>
        <Archive size={40} />
        <h1 className='top-header-title'>Archives 1</h1>
      </div>

      {/* --- HEADER --- */}
      <div className="card-header">
        <div className="header-left">
          <span className="badge badge-green">Archivé</span>
        </div>

        <div className="header-actions">
          <button className="action-btn btn-blue">
            <Eye size={18} />
            <span>Voir</span>
          </button>
          <button className="action-btn btn-orange">
            <RotateCw size={18} />
            <span>Rouvrir</span>
          </button>
        </div>
      </div>

      {/* --- TITLE --- */}
      <h2 className="card-title">
        Remise en état échelle et garde corps palier support réchauffeur d'air
      </h2>

      {/* --- INFO GRID --- */}
      <div className="info-grid">

        {/* Col 1 */}
        <div className="info-item">
          <label>Créé par:</label>
          <div className="info-content">
            <img
              src="https://ui-avatars.com/api/?name=Oussama+Lachhab&background=random"
              alt="User"
              className="user-avatar"
            />
            <span className="text-bold">Oussama Lachhab</span>
          </div>
        </div>

        {/* Col 2 */}
        <div className="info-item">
          <label>Assigné à:</label>
          <div className="info-content">
            <div className="user-placeholder">
              <User size={16} />
            </div>
            <span className="text-gray">Non assigné</span>
          </div>
        </div>

        {/* Col 3 */}
        <div className="info-item">
          <label>Résolu le:</label>
          <div className="info-content">
            <Calendar size={16} className="icon-gray" />
            <span className="text-bold">Non spécifié</span>
          </div>
        </div>

        {/* Col 4 */}
        <div className="info-item">
          <label>Temps résolution:</label>
          <div className="info-content">
            <Clock size={16} className="icon-gray" />
            <span className="text-bold">0 jours</span>
          </div>
        </div>

      </div>

      {/* --- DETAILS ROW --- */}
      <div className="details-row">
        <div className="info-item">
          <label>Équipement:</label>
          <p className="detail-value uppercase">RECHAUFFEUR D'AIR.</p>
        </div>
        <div className="info-item">
          <label>Ordre de travail:</label>
          <p className="detail-value">Non spécifié</p>
        </div>
        <div className="info-item">
          <label>Catégorie:</label>
          <p className="detail-value">Non spécifié</p>
        </div>
      </div>

      {/* --- FOOTER --- */}
      <div className="card-footer">
        <div className="footer-left">
          <History size={14} />
          <span>5 entrée(s) dans l'historique</span>
        </div>

      </div>

    </div>
  );
};

export default ArchiveCard;