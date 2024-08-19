import "/node_modules/flag-icons/css/flag-icons.min.css";
import { Header } from "@/components/header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col gap-2">
      <Header />
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
};

export default Layout;
