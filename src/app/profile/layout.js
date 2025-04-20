import "@/style/user-profile-page.css";

export const metadata = {
  title: "HeliCoin | Pilot's Profile",
};

export default function RootLayout({ children }) {
  return <div className="user-profile">{children}</div>;
}
