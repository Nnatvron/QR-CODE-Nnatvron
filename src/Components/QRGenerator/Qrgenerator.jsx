import {
  Sparkles,
  QrCode,
} from "lucide-react";

import QRSidebar from "./QRSidebar";
import QRPreview from "./QRPreview";
import QRInput from "./QRInput";
import QRSettings from "./QRSettings";
import useQRCode from "./hooks/useQRCode";

import QrCSS from "./Qrgenerator.module.css";

function QRGenerator() {
  const {
    // TYPE
    selectedType,
    setSelectedType,

    // WEBSITE
    text,
    setText,

    // WIFI
    ssid,
    setSsid,

    password,
    setPassword,

    security,
    setSecurity,

    // WHATSAPP
    countryCode,
    setCountryCode,

    phone,
    setPhone,

    message,
    setMessage,

    // INSTAGRAM
    username,
    setUsername,

    // PDF
    pdfUrl,
    setPdfUrl,

    // SETTINGS
    foreground,
    setForeground,

    background,
    setBackground,

    size,
    setSize,

    margin,
    setMargin,

    errorLevel,
    setErrorLevel,

    // RESULT
    qrData,
    svgData,

  } = useQRCode();

  return (
    <section className={QrCSS.container}>

      <div className={QrCSS.blurOne}></div>
      <div className={QrCSS.blurTwo}></div>

      <div className={QrCSS.wrapper}>

        {/* NAVBAR */}

        <nav className={QrCSS.navbar}>

          <div className={QrCSS.logo}>
            <QrCode size={22} />
            <span>QR Code Studio</span>
          </div>

          <div className={QrCSS.navActions}>
            <button>
              <Sparkles size={17} />
              Modern QR
            </button>
          </div>

        </nav>

        {/* HERO */}

        <header className={QrCSS.header}>

          <div className={QrCSS.badge}>
            <Sparkles size={16} />
            <span>Modern QR Platform</span>
          </div>

          <h1>
            Create Beautiful <span>QR Codes</span>
          </h1>

          <p>
            Create professional QR Codes instantly.
            Fast, simple and beautifully designed
            for everyone.
          </p>

          <div className={QrCSS.stats}>

            <div>
              <h3>5+</h3>
              <span>QR Types</span>
            </div>

            <div>
              <h3>PNG / SVG</h3>
              <span>Export</span>
            </div>

            <div>
              <h3>Fast</h3>
              <span>Generation</span>
            </div>

          </div>

        </header>

        {/* DASHBOARD */}

        <div className={QrCSS.dashboard}>

          <QRSidebar
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />

          <main className={QrCSS.content}>

            <QRPreview
              qrData={qrData}
            />

<QRInput
  selectedType={selectedType}
  text={text}
  setText={setText}
  ssid={ssid}
  setSsid={setSsid}
  password={password}
  setPassword={setPassword}
  security={security}
  setSecurity={setSecurity}
  countryCode={countryCode}
  setCountryCode={setCountryCode}
  phone={phone}
  setPhone={setPhone}
  message={message}
  setMessage={setMessage}
  username={username}
  setUsername={setUsername}
  pdfUrl={pdfUrl}
  setPdfUrl={setPdfUrl}
/>

            <QRSettings
              foreground={foreground}
              setForeground={setForeground}

              background={background}
              setBackground={setBackground}

              size={size}
              setSize={setSize}

              margin={margin}
              setMargin={setMargin}

              errorLevel={errorLevel}
              setErrorLevel={setErrorLevel}

              qrData={qrData}
              svgData={svgData}
            />

          </main>

        </div>

        {/* FOOTER */}

        <footer className={QrCSS.footer}>
          <p>
            © {new Date().getFullYear()} QR Code Studio.
            Built with React & QRCode.js.
          </p>
        </footer>

      </div>

    </section>
  );
}

export default QRGenerator;