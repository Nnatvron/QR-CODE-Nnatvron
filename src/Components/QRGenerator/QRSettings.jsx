import { useState } from "react";

import {
  Settings2,
  RotateCcw,
  ChevronDown,
} from "lucide-react";

import QrCSS from "./Qrgenerator.module.css";

function QRSettings({

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

  qrData,
  svgData,

}) {

    const [isOpen, setIsOpen] = useState(false);
    

    const downloadPNG = () => {
  if (!qrData) return;

  const link = document.createElement("a");
  link.href = qrData;
  link.download = "QR_Code.png";
  link.click();
};

const downloadSVG = () => {
  if (!svgData) return;

  const blob = new Blob([svgData], {
    type: "image/svg+xml",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "QR_Code.svg";
  link.click();

  URL.revokeObjectURL(url);
};

  function resetSettings() {
    setForeground("#000000");
    setBackground("#FFFFFF");
    setSize(500);
    setMargin(2);
    setErrorLevel("H");
  }

  return (

    <div className={QrCSS.settingsCard}>

<div
  className={QrCSS.settingsHeader}
  onClick={() => setIsOpen(!isOpen)}
>

  <div className={QrCSS.settingsTitleBox}>

    <div className={QrCSS.settingsIcon}>

      <Settings2 size={18} />

    </div>

    <div>

      <h2>QR Settings</h2>

      <span>
        Customize your QR Code
      </span>

    </div>

  </div>

  <ChevronDown
    size={20}
    className={`${QrCSS.chevron} ${
      isOpen ? QrCSS.chevronOpen : ""
    }`}
  />

</div>

<div
  className={`${QrCSS.settingsContent} ${
    isOpen ? QrCSS.settingsContentOpen : ""
  }`}
>

      {/* QR Color */}

      <div className={QrCSS.settingBlock}>

        <label>QR Color</label>

        <div className={QrCSS.colorRow}>

          <input
            type="color"
            value={foreground}
            onChange={(e) => setForeground(e.target.value)}
          />

          <input
            type="text"
            value={foreground}
            onChange={(e) => setForeground(e.target.value)}
          />

        </div>

      </div>

      {/* Background */}

      <div className={QrCSS.settingBlock}>

        <label>Background</label>

        <div className={QrCSS.colorRow}>

          <input
            type="color"
            value={background}
            onChange={(e) => setBackground(e.target.value)}
          />

          <input
            type="text"
            value={background}
            onChange={(e) => setBackground(e.target.value)}
          />

        </div>

      </div>

      {/* Size */}

      <div className={QrCSS.settingBlock}>

        <div className={QrCSS.settingTitle}>

          <label>QR Size</label>

          <span>{size}px</span>

        </div>

        <input
          className={QrCSS.rangeInput}
          type="range"
          min="250"
          max="1000"
          step="50"
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
        />

      </div>

      {/* Margin */}

      <div className={QrCSS.settingBlock}>

        <div className={QrCSS.settingTitle}>

          <label>Margin</label>

          <span>{margin}</span>

        </div>

        <input
          className={QrCSS.rangeInput}
          type="range"
          min="0"
          max="10"
          value={margin}
          onChange={(e) => setMargin(Number(e.target.value))}
        />

      </div>

      {/* Error Correction */}

      <div className={QrCSS.settingBlock}>

        <label>Error Correction</label>

        <select
          className={QrCSS.selectInput}
          value={errorLevel}
          onChange={(e) => setErrorLevel(e.target.value)}
        >

          <option value="L">Low (L)</option>
          <option value="M">Medium (M)</option>
          <option value="Q">Quartile (Q)</option>
          <option value="H">High (H)</option>

        </select>

      </div>

      {/* Summary */}

      <div className={QrCSS.settingSummary}>

        <div className={QrCSS.summaryItem}>
          <span>Size</span>
          <strong>{size}px</strong>
        </div>

        <div className={QrCSS.summaryItem}>
          <span>Margin</span>
          <strong>{margin}</strong>
        </div>

        <div className={QrCSS.summaryItem}>
          <span>Error</span>
          <strong>{errorLevel}</strong>
        </div>

      </div>

      {/* Buttons */}

      <div className={QrCSS.settingsButtons}>

<div className={QrCSS.actionButtons}>

  <button
    className={QrCSS.secondaryBtn}
    onClick={downloadSVG}
    disabled={!svgData}
  >

    Download SVG

  </button>

    <button
      className={QrCSS.resetBtn}
      onClick={resetSettings}
    >
      <RotateCcw size={18} />

    Reset Settings

  </button>

</div>
      </div>

    </div>
  </div>
  );

}

export default QRSettings;