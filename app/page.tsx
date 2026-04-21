const sectionTitleStyle: React.CSSProperties = {
  textAlign: "center",
  fontSize: "26px",
  fontWeight: 700,
  margin: "0 0 24px 0",
  letterSpacing: "0.5px",
};

const cardStyle: React.CSSProperties = {
  background: "#111111",
  border: "1px solid #222222",
  borderRadius: "10px",
  padding: "28px 22px",
  textAlign: "center",
};

const videoCardStyle: React.CSSProperties = {
  background: "#111111",
  border: "1px solid #222222",
  borderRadius: "10px",
  overflow: "hidden",
  textDecoration: "none",
  color: "#ffffff",
  display: "block",
};

export default function HomePage() {
  const univers = [
    {
      title: "LIVE",
      text: "Suivez nos directs sur YouTube et Facebook.",
      link: "/live",
      linkText: "Accéder au live →",
      icon: "📡",
    },
    {
      title: "ACTUALITÉS",
      text: "Toute l’actualité de la pétanque en Corse et ailleurs.",
      link: "/actualites",
      linkText: "Voir les actualités →",
      icon: "📰",
    },
    {
      title: "VIDÉOS",
      text: "Revivez les meilleurs moments et retrouvez nos replays.",
      link: "/live",
      linkText: "Voir les vidéos →",
      icon: "▶️",
    },
    {
      title: "COMPÉTITIONS",
      text: "Résultats, classements et informations.",
      link: "/actualites",
      linkText: "Voir les compétitions →",
      icon: "🏆",
    },
  ];

  const videos = [
    {
      title: "National de Porto-Vecchio 2024",
      date: "12 mai 2024",
      url: "https://www.youtube.com/@corsesportdiffusion9719",
      image: "/banner-corse-sport.jpg",
    },
    {
      title: "Championnat de Corse Triplette",
      date: "5 mai 2024",
      url: "https://www.youtube.com/@corsesportdiffusion9719",
      image: "/banner-corse-sport.jpg",
    },
    {
      title: "Grand Prix de Balagne",
      date: "28 avril 2024",
      url: "https://www.youtube.com/@corsesportdiffusion9719",
      image: "/banner-corse-sport.jpg",
    },
    {
      title: "Trophée des Villes 2024",
      date: "21 avril 2024",
      url: "https://www.youtube.com/@corsesportdiffusion9719",
      image: "/banner-corse-sport.jpg",
    },
  ];

  return (
    <main
      style={{
        background: "#000000",
        color: "#ffffff",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 20px 40px" }}>
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "30px",
            alignItems: "stretch",
            background: "#050505",
            padding: "40px",
            minHeight: "420px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h1
              style={{
                fontSize: "72px",
                lineHeight: 1.02,
                margin: 0,
                fontWeight: 800,
              }}
            >
              LA WEBTV
              <br />
              DE LA <span style={{ color: "#f2c500" }}>PÉTANQUE</span>
              <br />
              EN CORSE
            </h1>

            <p
              style={{
                marginTop: "28px",
                marginBottom: "30px",
                color: "#dddddd",
                fontSize: "22px",
                lineHeight: 1.5,
                maxWidth: "650px",
              }}
            >
              Lives, replays, actualités et compétitions à suivre toute l’année.
            </p>

            <div style={{ display: "flex", gap: "18px", flexWrap: "wrap" }}>
              <a
                href="/live"
                style={{
                  background: "#f2c500",
                  color: "#000000",
                  textDecoration: "none",
                  fontWeight: 800,
                  fontSize: "20px",
                  padding: "18px 34px",
                  borderRadius: "10px",
                  display: "inline-block",
                }}
              >
                ▶ VOIR LE LIVE
              </a>

              <a
                href="/actualites"
                style={{
                  background: "transparent",
                  color: "#ffffff",
                  textDecoration: "none",
                  fontWeight: 800,
                  fontSize: "20px",
                  padding: "18px 34px",
                  borderRadius: "10px",
                  display: "inline-block",
                  border: "1px solid #666666",
                }}
              >
                AGENDA
              </a>
            </div>
          </div>

          <div
            style={{
              background:
                "radial-gradient(circle at 70% 35%, #3a3a3a 0%, #1a1a1a 25%, #070707 55%, #000000 100%)",
              borderRadius: "8px",
              minHeight: "340px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "260px",
                height: "260px",
                borderRadius: "50%",
                background: "linear-gradient(145deg, #2d2d2d, #0e0e0e)",
                right: "90px",
                top: "70px",
                boxShadow: "0 0 0 4px #1f1f1f inset, 0 0 40px rgba(0,0,0,0.7)",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: "78px",
                height: "78px",
                borderRadius: "50%",
                background: "linear-gradient(145deg, #f2c500, #ae8500)",
                right: "340px",
                top: "270px",
                boxShadow: "0 0 18px rgba(242,197,0,0.25)",
              }}
            />
          </div>
        </section>

        <section style={{ padding: "48px 0 30px" }}>
          <h2 style={sectionTitleStyle}>NOS UNIVERS</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "18px",
            }}
          >
            {univers.map((item) => (
              <div key={item.title} style={cardStyle}>
                <div
                  style={{
                    width: "84px",
                    height: "84px",
                    borderRadius: "50%",
                    border: "3px solid #f2c500",
                    margin: "0 auto 22px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "34px",
                  }}
                >
                  {item.icon}
                </div>

                <div style={{ fontSize: "24px", fontWeight: 800, marginBottom: "14px" }}>
                  {item.title}
                </div>

                <p
                  style={{
                    color: "#d0d0d0",
                    fontSize: "18px",
                    lineHeight: 1.55,
                    minHeight: "84px",
                    margin: "0 0 22px 0",
                  }}
                >
                  {item.text}
                </p>

                <a
                  href={item.link}
                  style={{
                    color: "#f2c500",
                    textDecoration: "none",
                    fontWeight: 800,
                    fontSize: "18px",
                  }}
                >
                  {item.linkText}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: "26px 0 38px" }}>
          <h2 style={sectionTitleStyle}>DERNIÈRES VIDÉOS</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "18px",
            }}
          >
            {videos.map((video) => (
              <a
                key={video.title}
                href={video.url}
                target="_blank"
                rel="noreferrer"
                style={videoCardStyle}
              >
                <img
                  src={video.image}
                  alt={video.title}
                  style={{
                    width: "100%",
                    height: "190px",
                    objectFit: "cover",
                    display: "block",
                    background: "#222222",
                  }}
                />

                <div style={{ padding: "18px" }}>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "22px",
                      lineHeight: 1.3,
                      marginBottom: "10px",
                    }}
                  >
                    {video.title}
                  </div>

                  <div style={{ color: "#bbbbbb", fontSize: "18px" }}>{video.date}</div>
                </div>
              </a>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "28px" }}>
            <a
              href="/live"
              style={{
                display: "inline-block",
                border: "1px solid #666666",
                color: "#ffffff",
                textDecoration: "none",
                padding: "16px 30px",
                borderRadius: "8px",
                fontWeight: 800,
                fontSize: "18px",
              }}
            >
              VOIR TOUTES LES VIDÉOS
            </a>
          </div>
        </section>
      </div>

      <section
        style={{
          background: "#f2c500",
          color: "#000000",
          padding: "34px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "22px",
              alignItems: "center",
              paddingRight: "20px",
              borderRight: "1px solid rgba(0,0,0,0.18)",
            }}
          >
            <div
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                background: "#000000",
                color: "#f2c500",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "42px",
                fontWeight: 800,
              }}
            >
              ▶
            </div>

            <div>
              <div style={{ fontSize: "22px", fontWeight: 800, marginBottom: "10px" }}>
                SUIVEZ-NOUS SUR YOUTUBE
              </div>
              <div style={{ fontSize: "18px", lineHeight: 1.5, marginBottom: "16px" }}>
                Abonnez-vous à la chaîne et activez la cloche pour ne rien manquer !
              </div>
              <a
                href="https://www.youtube.com/@corsesportdiffusion9719?sub_confirmation=1"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  background: "#000000",
                  color: "#ffffff",
                  textDecoration: "none",
                  padding: "14px 28px",
                  borderRadius: "8px",
                  fontWeight: 800,
                  fontSize: "18px",
                }}
              >
                S’ABONNER
              </a>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "22px",
              alignItems: "center",
              paddingLeft: "20px",
            }}
          >
            <div
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                background: "#000000",
                color: "#f2c500",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "46px",
                fontWeight: 800,
              }}
            >
              f
            </div>

            <div>
              <div style={{ fontSize: "22px", fontWeight: 800, marginBottom: "10px" }}>
                SUIVEZ-NOUS SUR FACEBOOK
              </div>
              <div style={{ fontSize: "18px", lineHeight: 1.5, marginBottom: "16px" }}>
                Likez la page, suivez-nous et activez les notifications pour les lives !
              </div>
              <a
                href="https://www.facebook.com/Corsesportdiffusion"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  background: "#000000",
                  color: "#ffffff",
                  textDecoration: "none",
                  padding: "14px 28px",
                  borderRadius: "8px",
                  fontWeight: 800,
                  fontSize: "18px",
                }}
              >
                SUIVRE LA PAGE
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer
        style={{
          background: "#000000",
          color: "#d0d0d0",
          textAlign: "center",
          padding: "20px",
          fontSize: "16px",
          borderTop: "1px solid #222222",
        }}
      >
        © 2024 Corse Sport Diffusion – Tous droits réservés
      </footer>
    </main>
  );
}