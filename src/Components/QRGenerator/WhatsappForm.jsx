import {
  MessageCircle,
  Phone,
  Globe,
  MessageSquare,
  Sparkles,
} from "lucide-react";

import QrCSS from "./Qrgenerator.module.css";

function WhatsappForm({

  countryCode,
  setCountryCode,

  phone,
  setPhone,

  message,
  setMessage,

}) {

  const fullNumber = `+${countryCode}${phone}`;

  return (

    <div className={QrCSS.inputCard}>

      {/* HEADER */}

      <div className={QrCSS.inputHeader}>

        <div className={QrCSS.formTitle}>

          <div className={QrCSS.formIcon}>
            <MessageCircle size={22} />
          </div>

          <div>

            <h2>
              WhatsApp QR
            </h2>

            <span>
              Create instant WhatsApp chat QR
            </span>

          </div>

        </div>

      </div>

      {/* COUNTRY */}

      <div className={QrCSS.inputBlock}>

        <label>
          Country Code
        </label>

        <div className={QrCSS.inputGroup}>

          <Globe size={18} />

          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
          >

            <option value="62">🇮🇩 Indonesia (+62)</option>
            <option value="60">🇲🇾 Malaysia (+60)</option>
            <option value="65">🇸🇬 Singapore (+65)</option>
            <option value="66">🇹🇭 Thailand (+66)</option>
            <option value="63">🇵🇭 Philippines (+63)</option>
            <option value="84">🇻🇳 Vietnam (+84)</option>
            <option value="673">🇧🇳 Brunei (+673)</option>

            <option value="91">🇮🇳 India (+91)</option>
            <option value="92">🇵🇰 Pakistan (+92)</option>
            <option value="880">🇧🇩 Bangladesh (+880)</option>

            <option value="81">🇯🇵 Japan (+81)</option>
            <option value="82">🇰🇷 South Korea (+82)</option>
            <option value="86">🇨🇳 China (+86)</option>

            <option value="61">🇦🇺 Australia (+61)</option>
            <option value="64">🇳🇿 New Zealand (+64)</option>

            <option value="1">🇺🇸 United States (+1)</option>
            <option value="44">🇬🇧 United Kingdom (+44)</option>

            <option value="33">🇫🇷 France (+33)</option>
            <option value="49">🇩🇪 Germany (+49)</option>
            <option value="39">🇮🇹 Italy (+39)</option>
            <option value="34">🇪🇸 Spain (+34)</option>
            <option value="31">🇳🇱 Netherlands (+31)</option>

            <option value="971">🇦🇪 UAE (+971)</option>
            <option value="966">🇸🇦 Saudi Arabia (+966)</option>
            <option value="974">🇶🇦 Qatar (+974)</option>

            <option value="20">🇪🇬 Egypt (+20)</option>
            <option value="27">🇿🇦 South Africa (+27)</option>

            <option value="55">🇧🇷 Brazil (+55)</option>
            <option value="52">🇲🇽 Mexico (+52)</option>

          </select>

        </div>

      </div>

      {/* PHONE */}

      <div className={QrCSS.inputBlock}>

        <label>
          WhatsApp Number
        </label>

        <div className={QrCSS.inputGroup}>

          <Phone size={18} />

          <input
            type="tel"
            placeholder="81234567890"
            value={phone}
            onChange={(e) =>
              setPhone(
                e.target.value.replace(/\D/g, "")
              )
            }
          />

        </div>

      </div>

      {/* NUMBER PREVIEW */}

      <div className={QrCSS.previewBox}>

        <span>
          WhatsApp Number
        </span>

        <strong>

          {
            phone
              ? fullNumber
              : "No phone number"
          }

        </strong>

      </div>

      {/* MESSAGE */}

      <div className={QrCSS.inputBlock}>

        <label>
          Auto Message
        </label>

        <div className={QrCSS.textareaGroup}>

          <MessageSquare size={18} />

          <textarea
            rows={4}
            placeholder="Hello, I would like to ask about..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

        </div>

        <small className={QrCSS.inputHint}>
          {message.length} / 500 Characters
        </small>

      </div>

      {/* LINK PREVIEW */}

      <div className={QrCSS.noticeCard}>

        <Sparkles size={18} />

        <div>

          <h4>
            Preview Link
          </h4>

          <p>
            {
              phone
                ? `https://wa.me/${countryCode}${phone}?text=${encodeURIComponent(message)}`
                : "Enter your WhatsApp number"
            }
          </p>

        </div>

      </div>

      {/* FEATURES */}

      <div className={QrCSS.featureList}>

        <div className={QrCSS.featureItem}>
          <span>✓</span>
          <p>Instant WhatsApp Chat</p>
        </div>

        <div className={QrCSS.featureItem}>
          <span>✓</span>
          <p>Pre-filled Message</p>
        </div>

        <div className={QrCSS.featureItem}>
          <span>✓</span>
          <p>Android & iPhone Compatible</p>
        </div>

        <div className={QrCSS.featureItem}>
          <span>✓</span>
          <p>No Login Required</p>
        </div>

      </div>

    </div>

  );

}

export default WhatsappForm;