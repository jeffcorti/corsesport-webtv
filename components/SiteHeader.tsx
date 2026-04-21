import Link from "next/link";

const navLinkStyle: React.CSSProperties = {
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: 700,
  fontSize: "18px",
  padding: "18px 22px",
  display: "inline-block",
};

export function SiteHeader() {
  return (
    <header style={{ width: "100%" }}>
      <div
        style={{
          background: "#f2c500",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "16px 0",
        }}
      >
        <img
          src="/banner-corse-sport.jpg"
          alt="Corse Sport Diffusion"
          style={{
            maxWidth: "1200px",
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </div>

      <nav
        style={{
          background: "#111111",
          borderBottom: "1px solid #222222",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            alignItems: "center",
            paddingLeft: "20px",
          }}
        >
          <Link href="/" style={{ ...navLinkStyle, color: "#f2c500" }}>
            ACCUEIL
          </Link>
          <Link href="/live" style={navLinkStyle}>
            LIVE
          </Link>
          <Link href="/actualites" style={navLinkStyle}>
            ACTUALITÉS
          </Link>
        </div>
      </nav>
    </header>
  );
}