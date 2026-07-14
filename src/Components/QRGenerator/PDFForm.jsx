import {
  FileText,
  Link,
  ExternalLink,
  Sparkles,
} from "lucide-react";

import QrCSS from "./Qrgenerator.module.css";

function PdfForm({

  pdfUrl,
  setPdfUrl,

}) {

  const isValid =
    pdfUrl.startsWith("http://") ||
    pdfUrl.startsWith("https://");

  return (

    <div className={QrCSS.inputCard}>

      {/* HEADER */}

      <div className={QrCSS.inputHeader}>

        <div className={QrCSS.formTitle}>

          <div className={QrCSS.formIcon}>
            <FileText size={22} />
          </div>

          <div>

            <h2>PDF QR</h2>

            <span>
              Share PDF documents instantly
            </span>

          </div>

        </div>

      </div>

      {/* PDF URL */}

      <div className={QrCSS.inputBlock}>

        <label>
          PDF URL
        </label>

        <div className={QrCSS.inputGroup}>

          <Link size={18} />

          <input
            type="url"
            placeholder="https://example.com/file.pdf"
            value={pdfUrl}
            onChange={(e) => setPdfUrl(e.target.value)}
          />

        </div>

      </div>

      {/* Preview */}

      <div className={QrCSS.previewBox}>

        <span>
          PDF Status
        </span>

        <strong>

          {pdfUrl
            ? "Ready to Generate"
            : "No PDF URL"}

        </strong>

      </div>

      {/* Link Preview */}

      <div className={QrCSS.noticeCard}>

        <ExternalLink size={18} />

        <div>

          <h4>
            PDF Preview
          </h4>

          <p>

            {pdfUrl ||
              "Paste your PDF link"}

          </p>

        </div>

      </div>

      {/* Features */}

      <div className={QrCSS.featureList}>

        <div className={QrCSS.featureItem}>
          <span>✓</span>
          <p>Open PDF Instantly</p>
        </div>

        <div className={QrCSS.featureItem}>
          <span>✓</span>
          <p>Works on All Devices</p>
        </div>

        <div className={QrCSS.featureItem}>
          <span>✓</span>
          <p>Unlimited Downloads</p>
        </div>

        <div className={QrCSS.featureItem}>
          <span>✓</span>
          <p>Instant QR Generation</p>
        </div>

      </div>

      {/* Tips */}

      <div className={QrCSS.noticeCard}>

        <Sparkles size={18} />

        <div>

          <h4>
            Tip
          </h4>

          <p>

            Use a public PDF link from Google Drive,
            Dropbox or your own website.

          </p>

        </div>

      </div>

    </div>

  );

}

export default PdfForm;