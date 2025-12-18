import "./globals.css";
import ResponsiveLayoutClient from "./ResponsiveLayoutClient";

export const metadata = {
  title: "Portfolio Admin Dashboard",
  description: "Manage your portfolio content locally",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-200 font-sans">
        <ResponsiveLayoutClient>{children}</ResponsiveLayoutClient>
      </body>
    </html>
  );
}