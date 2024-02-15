import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>
        { children }
      </main>
    </div>
  )
}