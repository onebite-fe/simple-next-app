export const metadata = { title: "Simple Next App" };

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body style={{ fontFamily: "sans-serif", padding: 40 }}>{children}</body>
    </html>
  );
}
