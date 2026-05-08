import Sidebar from "../component/Dashboard/Sidebar";
import TopBar from "../component/Dashboard/Navbar";
import PostForm from "./PostForm";
import styles from "./NewPostPage.module.css";
 
function NewPostPage() {
  return (
    <div className={styles.appWrapper}>
      <Sidebar />
      <div className={styles.mainContent}>
        <TopBar />
        <div className={styles.pageBody}>
          <PostForm />
        </div>
      </div>
    </div>
  );
}
 
export default NewPostPage;