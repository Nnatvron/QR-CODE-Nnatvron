import {
  Camera,
  AtSign,
  ExternalLink,
  Sparkles,
} from "lucide-react";

import QrCSS from "./Qrgenerator.module.css";

function InstagramForm({

  username,
  setUsername,

}) {

  const cleanUsername = username.replace("@", "").trim();

  const profileUrl = cleanUsername
    ? `https://instagram.com/${cleanUsername}`
    : "";

  return (

    <div className={QrCSS.inputCard}>

      {/* HEADER */}

      <div className={QrCSS.inputHeader}>

        <div className={QrCSS.formTitle}>

          <div className={QrCSS.formIcon}>
            <Camera size={22} />
          </div>

          <div>

            <h2>Instagram QR</h2>

            <span>
              Share your Instagram profile instantly
            </span>

          </div>

        </div>

      </div>

      {/* USERNAME */}

      <div className={QrCSS.inputBlock}>

        <label>
          Instagram Username
        </label>

        <div className={QrCSS.inputGroup}>

          <AtSign size={18} />

          <input
            type="text"
            placeholder="yourusername"
            value={username}
            onChange={(e) =>
              setUsername(
                e.target.value
                  .replace("@", "")
                  .replace(/\s/g, "")
              )
            }
          />

        </div>

      </div>

      {/* PREVIEW */}

      <div className={QrCSS.previewBox}>

        <span>
          Username Preview
        </span>

        <strong>

          {
            cleanUsername
              ? `@${cleanUsername}`
              : "No username"
          }

        </strong>

      </div>

      {/* PROFILE LINK */}

      <div className={QrCSS.noticeCard}>

        <ExternalLink size={18} />

        <div>

          <h4>
            Profile Link
          </h4>

          <p>

            {
              profileUrl ||
              "Enter your Instagram username"
            }

          </p>

        </div>

      </div>

      {/* FEATURES */}

      <div className={QrCSS.featureList}>

        <div className={QrCSS.featureItem}>
          <span>✓</span>
          <p>Instant QR Generation</p>
        </div>

        <div className={QrCSS.featureItem}>
          <span>✓</span>
          <p>Open Instagram Profile</p>
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

      {/* TIP */}

      <div className={QrCSS.noticeCard}>

        <Sparkles size={18} />

        <div>

          <h4>
            Tip
          </h4>

          <p>
            Only enter your username without
            @ or instagram.com.
          </p>

        </div>

      </div>

    </div>

  );

}

export default InstagramForm;