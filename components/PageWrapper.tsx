export default function PageWrapper({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f4f4f4",
        padding: 40,
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          background: "white",
          padding: 30,
          borderRadius: 20,
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ fontSize: 32 }}>{title}</h1>
        <div style={{ marginTop: 20 }}>{children}</div>

        <div style={{ marginTop: 40 }}>
          <a
            href="/"
            style={{
              display: "inline-block",
              padding: "12px 16px",
              background: "black",
              color: "white",
              borderRadius: 10,
              textDecoration: "none",
            }}
          >
            🔎 Tester un message suspect
          </a>
        </div>
      </div>
    </main>
  );
}