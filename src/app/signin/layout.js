import "@/style/signup-signin.css";

export const metadata = {
  title: "HeliCoin | Signin",
};

export default function RootLayout({ children }) {
  return <div className="signup-signin">{children}</div>;
}
