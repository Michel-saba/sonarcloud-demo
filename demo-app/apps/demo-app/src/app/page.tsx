import styles from './page.module.css';
import { AddUser } from './components/add-user/AddUser';
export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>

              Welcome demo-app 👋
            </h1>
          </div>
          <AddUser />
        </div>
      </div>
    </div>
  );
}
