import "@/style/invite-page.css";

export const metadata = {
  title: "HeliCoin | Invite your friends",
};

export default function RootLayout({ children }) {
  return <div className="invite-page">{children}</div>;
}
