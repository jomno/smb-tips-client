import Navbar from "@/components/NavRoot";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
