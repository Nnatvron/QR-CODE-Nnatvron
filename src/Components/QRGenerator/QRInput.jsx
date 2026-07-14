import {
  Link,
  X,
  Sparkles,
} from "lucide-react";

import WifiForm from "./WifiForm";
import WhatsappForm from "./WhatsappForm";
import InstagramForm from "./InstagramForm";
import PdfForm from "./PDFForm";
import QrCSS from "./Qrgenerator.module.css";

function QRInput({

  selectedType,

  // Website
  text,
  setText,

  // WiFi
  ssid,
  setSsid,

  password,
  setPassword,

  security,
  setSecurity,

  // WhatsApp
  countryCode,
  setCountryCode,

  phone,
  setPhone,

  message,
  setMessage,

  // Instagram
  username,
  setUsername,

  // PDF
  pdfUrl,
  setPdfUrl,

}) {

  switch (selectedType) {

    // =========================
    // WIFI
    // =========================

    case "wifi":
      return (
        <WifiForm
          ssid={ssid}
          setSsid={setSsid}

          password={password}
          setPassword={setPassword}

          security={security}
          setSecurity={setSecurity}
        />
      );

    // =========================
    // WHATSAPP
    // =========================

    case "whatsapp":
      return (
        <WhatsappForm
          countryCode={countryCode}
          setCountryCode={setCountryCode}

          phone={phone}
          setPhone={setPhone}

          message={message}
          setMessage={setMessage}
        />
      );

    // =========================
    // INSTAGRAM
    // =========================

    case "instagram":
      return (
        <InstagramForm
          username={username}
          setUsername={setUsername}
        />
      );

    // =========================
    // PDF
    // =========================

    case "pdf":
      return (
        <PdfForm
          pdfUrl={pdfUrl}
          setPdfUrl={setPdfUrl}
        />
      );

    // =========================
    // WEBSITE
    // =========================

    case "website":
    default:
      return (

        <div className={QrCSS.inputCard}>

          <div className={QrCSS.inputHeader}>

            <div>

              <h2>
                Website URL
              </h2>

              <span>
                Paste your website link below
              </span>

            </div>

          </div>

          <div className={QrCSS.inputGroup}>

            <Link size={18} />

            <input
              type="url"
              placeholder="https://example.com"
              value={text}
              autoFocus
              onChange={(e) => setText(e.target.value)}
            />

            {text && (

              <button
                type="button"
                className={QrCSS.clearBtn}
                onClick={() => setText("")}
              >

                <X size={16} />

              </button>

            )}

          </div>

          <small className={QrCSS.inputHint}>
            Your QR Code updates automatically while you type.
          </small>

          <div className={QrCSS.featureList}>

            <div className={QrCSS.featureItem}>
              <span>✓</span>
              <p>Instant QR Generation</p>
            </div>

            <div className={QrCSS.featureItem}>
              <span>✓</span>
              <p>High Resolution Export</p>
            </div>

            <div className={QrCSS.featureItem}>
              <span>✓</span>
              <p>Unlimited QR Codes</p>
            </div>

            <div className={QrCSS.featureItem}>
              <span>✓</span>
              <p>Custom QR Settings</p>
            </div>

          </div>

          <div className={QrCSS.noticeCard}>

            <Sparkles size={18} />

            <div>

              <h4>
                More QR Types Available
              </h4>

              <p>
                Switch from the sidebar to create WiFi,
                WhatsApp, Instagram and PDF QR Codes.
              </p>

            </div>

          </div>

        </div>

      );

  }

}

export default QRInput;