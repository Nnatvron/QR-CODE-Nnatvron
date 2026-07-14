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

  const [countryCode, setCountryCode] = useState("62");
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
          // =========================
          // WEBSITE
          // =========================

          case "website":
            value = text.trim() ? text.trim() : "";
            break;

          // =========================
          // WIFI
          // =========================

          case "wifi":
            value =
              ssid.trim() && password.trim()
                ? `WIFI:T:${security};S:${ssid};P:${password};;`
                : "";
            break;

          // =========================
          // WHATSAPP
          // =========================

          case "whatsapp":
            if (!phone.trim()) {
              value = "";
              break;
            }

            value = `https://wa.me/${countryCode}${phone.replace(
              /\D/g,
              ""
            )}?text=${encodeURIComponent(message)}`;

            break;

          // =========================
          // INSTAGRAM
          // =========================

          case "instagram":
            value = username.trim()
              ? `https://instagram.com/${username
                  .replace("@", "")
                  .trim()}`
              : "";
            break;

          // =========================
          // PDF
          // =========================

          case "pdf":
            value = pdfUrl.trim() ? pdfUrl.trim() : "";
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

        const png = await QRCode.toDataURL(value, options);

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

    // Website
    text,

    // WiFi
    ssid,
    password,
    security,

    // WhatsApp
    countryCode,
    phone,
    message,

    // Instagram
    username,

    // PDF
    pdfUrl,

    // Settings
    foreground,
    background,
    size,
    margin,
    errorLevel,
  ]);

  return {
    // =========================
    // TYPE
    // =========================

    selectedType,
    setSelectedType,

    // =========================
    // WEBSITE
    // =========================

    text,
    setText,

    // =========================
    // WIFI
    // =========================

    ssid,
    setSsid,

    password,
    setPassword,

    security,
    setSecurity,

    // =========================
    // WHATSAPP
    // =========================

    countryCode,
    setCountryCode,

    phone,
    setPhone,

    message,
    setMessage,

    // =========================
    // INSTAGRAM
    // =========================

    username,
    setUsername,

    // =========================
    // PDF
    // =========================

    pdfUrl,
    setPdfUrl,

    // =========================
    // SETTINGS
    // =========================

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

    // =========================
    // RESULT
    // =========================

    qrData,
    svgData,
  };
}

export default useQRCode;