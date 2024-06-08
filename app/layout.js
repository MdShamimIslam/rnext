import { Inter } from "next/font/google";
import "./globals.css";
import CustomLink from "./components/CustomLink";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="border-b border-gray-500 p-5">
          <ul className="flex gap-5 justify-center">
            <li>
              <CustomLink path="/">Home</CustomLink>
            </li>
            <li>
              <CustomLink path="/blogs">Blogs</CustomLink>
            </li>
            <li>
              <CustomLink path="/dashboard/analytics">Analytics</CustomLink>
            </li>
            <li>
              <CustomLink prefetch={false} path="/dashboard/settings">Settings</CustomLink>
            </li>
            <li>
              <CustomLink  path="/heavy">Heavy</CustomLink>
            </li>
            <li>
              <CustomLink  path="/contact">Admin-Contact</CustomLink>
            </li>
          </ul>
        </nav>
        {children}
        </body>
    </html>
  );
}
