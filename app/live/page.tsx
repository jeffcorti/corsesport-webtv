export default function LivePage() {
  return (
    <main
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>

        {/* BLOC LIVE */}
        <div
          style={{
            border: "1px solid #f2c500",
            padding: "40px",
            textAlign: "center",
            marginBottom: "30px",
            background: "#111",
          }}
        >
          <h1 style={{ fontSize: "36px", margin: 0 }}>
            OFFLINE ⚫
          </h1>

          <div
            style={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "center",
              gap: "25px",
              flexWrap: "wrap",
            }}
          >
            {/* YOUTUBE */}
            <a
              href="https://www.youtube.com/@corsesportdiffusion9719"
              target="_blank"
              rel="noreferrer"
              style={{
                background: "#FF0000",
                color: "#fff",
                padding: "24px 60px",
                borderRadius: "12px",
                fontSize: "22px",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              YouTube
            </a>

            {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/Corsesportdiffusion"
              target="_blank"
              rel="noreferrer"
              style={{
                background: "#1877F2",
                color: "#fff",
                padding: "24px 60px",
                borderRadius: "12px",
                fontSize: "22px",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Facebook
            </a>
          </div>
        </div>

        {/* ZONE VIDEOS (placeholder en attendant YouTube API) */}
        <div
          style={{
            border: "1px solid #f2c500",
            background: "#111",
            padding: "30px",
            textAlign: "center",
            color: "#ccc",
          }}
        >
          Les vidéos précédentes apparaîtront ici.
        </div>

      </div>
    </main>
  );
}