import { ArrowRight } from "lucide-react";
import qrTypes from "./data/qrTypes";
import QrCSS from "./Qrgenerator.module.css";

function QRSidebar({ selectedType, setSelectedType }) {
  return (
    <aside className={QrCSS.sidebar}>

      <h3>QR Types</h3>

      <div className={QrCSS.sidebarList}>

        {qrTypes.map(({ id, title, description, icon: Icon }) => (

          <button
            key={id}
            type="button"
            onClick={() => setSelectedType(id)}
            className={`${QrCSS.sidebarButton} ${
              selectedType === id ? QrCSS.active : ""
            }`}
          >

            <div className={QrCSS.sidebarIcon}>
              <Icon size={18} />
            </div>

            <div className={QrCSS.sidebarText}>
              <strong>{title}</strong>
              <span>{description}</span>
            </div>

            {selectedType === id && (
              <ArrowRight size={16} />
            )}

          </button>

        ))}

      </div>

    </aside>
  );
}

export default QRSidebar;