import "@/style/signup-signin.css";

export const metadata = {
  title: "HeliCoin | Create an account",
};

export default function RootLayout({ children }) {
  return <div className="signup-signin">{children}</div>;
}
