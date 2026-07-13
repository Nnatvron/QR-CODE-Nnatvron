import {
  Download,
  QrCode,
  ShieldCheck,
} from "lucide-react";

import QrCSS from "./Qrgenerator.module.css";


function QRPreview({ qrData }) {

  return (
    <div className={QrCSS.previewCard}>

      <div className={QrCSS.cardHeader}>

        <div>
          <h2>
            QR Preview
          </h2>

          <span>
            Live Preview
          </span>
        </div>


        <QrCode size={22} />

      </div>


      <div className={QrCSS.qrBox}>

        {
          qrData ? (

            <img
              src={qrData}
              alt="Generated QR Code"
            />

          ) : (

            <div className={QrCSS.emptyState}>

              <QrCode size={60} />

              <h4>
                No QR Generated
              </h4>

              <p>
                Enter your website URL to generate QR Code instantly.
              </p>

            </div>

          )
        }

      </div>



      <div className={QrCSS.exportInfo}>

        <ShieldCheck size={16} />

        High Quality PNG/SVG Export

      </div>



      <div className={QrCSS.previewFooter}>

        <small>
          Export :
          <strong> PNG</strong>
        </small>


        <small>
          Size :
          <strong> 500 × 500</strong>
        </small>

      </div>



      {
        qrData && (

          <a
            href={qrData}
            download="QR_Code_Studio.png"
            className={QrCSS.downloadBtn}
          >

            <Download size={18} />

            Download PNG

          </a>

        )
      }


    </div>
  );
}


export default QRPreview;