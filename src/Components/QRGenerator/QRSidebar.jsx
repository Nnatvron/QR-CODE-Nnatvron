import { ArrowRight } from "lucide-react";
import qrTypes from "./data/qrTypes";
import QrCSS from "./Qrgenerator.module.css";

function QRSidebar({ selectedType, setSelectedType }) {
  return (
    <aside className={QrCSS.sidebar}>
      <h3>QR Types</h3>

      <div className={QrCSS.sidebarList}>
        {qrTypes.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedType(item.id)}
              className={`${QrCSS.sidebarButton} ${
                selectedType === item.id ? QrCSS.active : ""
              }`}
            >
              <div className={QrCSS.sidebarIcon}>
                <Icon size={18} />
              </div>

              <div className={QrCSS.sidebarText}>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </div>

              {selectedType === item.id && <ArrowRight size={16} />}
            </button>
          );
        })}
      </div>
    </aside>
  );
}

export default QRSidebar;