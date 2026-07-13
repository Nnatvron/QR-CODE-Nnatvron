import { useEffect, useState } from "react";
import QRCode from "qrcode";

function useQRCode() {
  // =========================
  // TYPE
  // =========================

  const [selectedType, setSelectedType] = useState("website");

  // =========================
  // WEBSITE
  // =========================

  const [text, setText] = useState("");

  // =========================
  // WIFI
  // =========================

  const [ssid, setSsid] = useState("");
  const [password, setPassword] = useState("");
  const [security, setSecurity] = useState("WPA");

  // =========================
  // WHATSAPP
  // =========================

  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // =========================
  // INSTAGRAM
  // =========================

  const [username, setUsername] = useState("");

  // =========================
  // PDF
  // =========================

  const [pdfUrl, setPdfUrl] = useState("");

  // =========================
  // QR SETTINGS
  // =========================

  const [foreground, setForeground] = useState("#000000");
  const [background, setBackground] = useState("#FFFFFF");

  const [size, setSize] = useState(500);
  const [margin, setMargin] = useState(2);

  const [errorLevel, setErrorLevel] = useState("H");

  // =========================
  // RESULT
  // =========================

  const [qrData, setQrData] = useState("");
  const [svgData, setSvgData] = useState("");

  useEffect(() => {
    async function generateQRCode() {
      try {
        let value = "";

        switch (selectedType) {
          case "website":
            value = text.trim();
            break;

          case "wifi":
            value = `WIFI:T:${security};S:${ssid};P:${password};;`;
            break;

          case "whatsapp":
            value = `https://wa.me/${phone}?text=${encodeURIComponent(
              message
            )}`;
            break;

          case "instagram":
            value = `https://instagram.com/${username}`;
            break;

          case "pdf":
            value = pdfUrl.trim();
            break;

          default:
            value = "";
        }

        if (!value) {
          setQrData("");
          setSvgData("");
          return;
        }

        const options = {
          width: Number(size),
          margin: Number(margin),
          errorCorrectionLevel: errorLevel,
          color: {
            dark: foreground,
            light: background,
          },
        };

        // PNG
        const png = await QRCode.toDataURL(value, options);

        // SVG
        const svg = await QRCode.toString(value, {
          ...options,
          type: "svg",
        });

        setQrData(png);
        setSvgData(svg);
      } catch (error) {
        console.error(error);
        setQrData("");
        setSvgData("");
      }
    }

    generateQRCode();
  }, [
    selectedType,
    text,
    ssid,
    password,
    security,
    phone,
    message,
    username,
    pdfUrl,
    foreground,
    background,
    size,
    margin,
    errorLevel,
  ]);

  return {
    // Sidebar
    selectedType,
    setSelectedType,

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

    // Settings
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

    // Result
    qrData,
    svgData,
  };
}

export default useQRCode;