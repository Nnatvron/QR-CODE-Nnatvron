import {
  Wifi,
  Lock,
  ShieldCheck,
  Router,
  Sparkles,
  Eye,
  EyeOff,
} from "lucide-react";

import { useState } from "react";

import QrCSS from "./Qrgenerator.module.css";

function WifiForm({
  ssid,
  setSsid,

  password,
  setPassword,

  security,
  setSecurity,
}) {

    const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={QrCSS.inputCard}>

      {/* Header */}

      <div className={QrCSS.inputHeader}>

        <div className={QrCSS.formTitle}>

          <div className={QrCSS.formIcon}>

            <Wifi size={22} />

          </div>

          <div>

            <h2>WiFi Network</h2>

            <span>
              Generate a QR Code to connect instantly
            </span>

          </div>

        </div>

      </div>

      {/* SSID */}

      <div className={QrCSS.inputBlock}>

        <label>Network Name (SSID)</label>

        <div className={QrCSS.inputGroup}>

          <Router size={18} />

          <input
            type="text"
            placeholder="Example : Home WiFi"
            value={ssid}
            onChange={(e) => setSsid(e.target.value)}
          />

        </div>

      </div>

      {/* Password */}

<div className={QrCSS.inputBlock}>

  <label>Password</label>

  <div className={QrCSS.inputGroup}>

    <Lock size={18} />

    <input
      type={showPassword ? "text" : "password"}
      placeholder="Enter WiFi password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />

    <button
      type="button"
      className={QrCSS.eyeBtn}
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? (
        <EyeOff size={18} />
      ) : (
        <Eye size={18} />
      )}
    </button>

  </div>

</div>

      {/* Security */}

      <div className={QrCSS.inputBlock}>

        <label>Security Type</label>

        <div className={QrCSS.inputGroup}>

          <ShieldCheck size={18} />

<select
  value={security}
  onChange={(e)=>setSecurity(e.target.value)}
  className={QrCSS.selectModern}
>
  <option value="WPA">WPA/WPA2</option>
  <option value="WEP">WEP</option>
  <option value="nopass">Open Network</option>
</select>

        </div>

      </div>

      {/* Tips */}

      <div className={QrCSS.noticeCard}>

        <Sparkles size={18} />

        <div>

          <h4>Quick Tips</h4>

          <p>
            Anyone who scans this QR Code can connect to
            your WiFi without typing the password manually.
          </p>

        </div>

      </div>

      {/* Features */}

      <div className={QrCSS.featureList}>

        <div className={QrCSS.featureItem}>
          <span>✓</span>
          <p>Android Compatible</p>
        </div>

        <div className={QrCSS.featureItem}>
          <span>✓</span>
          <p>iPhone Compatible</p>
        </div>

        <div className={QrCSS.featureItem}>
          <span>✓</span>
          <p>Instant WiFi Connect</p>
        </div>

        <div className={QrCSS.featureItem}>
          <span>✓</span>
          <p>Secure QR Format</p>
        </div>

      </div>

    </div>
  );
}

export default WifiForm;