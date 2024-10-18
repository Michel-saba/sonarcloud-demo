import styles from './page.module.css';
import { AddUser } from './components/add-user/AddUser';
export default function Index() {

  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              Welcome demo SonarCloud analysis
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
