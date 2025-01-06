import { ChevronRight } from "lucide-react";
import styles from "./Breadcrumb.module.css";

const Breadcrumb = () => {
  return (
    <nav className={styles.breadcrumb}>
      <div className={styles.main}>
        <p>Identities</p>
      </div>
      <ChevronRight size={20} className={styles.chevron} />
      <div className={styles.sub}>
        <p>Create wallet</p>
      </div>
    </nav>
  );
};

export default Breadcrumb;
