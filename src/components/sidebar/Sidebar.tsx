import SidebarMenu from "@/components/sidebar/SidebarMenu";
import styles from './SideBar.module.scss'
export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      Sidebar

      <SidebarMenu />
    </aside>
  )
}