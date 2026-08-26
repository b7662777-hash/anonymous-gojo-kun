import "./globals.css";

export const metadata = {
  title: "Anonymous Gojo-Kun — Android · Systems · Apps · Security",
  description:
    "Independent developer portfolio focused on Android ROM development, systems engineering, applications, AI tooling and security research.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}