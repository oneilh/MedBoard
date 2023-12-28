import styles from "./home.module.css";
import User from "../../components/user/User";
import ANH from "../../components/ANH/ANH";
import Docprofile from "../../components/doc_profile/Docprofile";
import Calendar from "../../components/calendar/Calendar";
import Hospital from "../../components/Hos";

const Home = () => {
  return (
    <main className={styles.layout}>
      <User />
      <ANH />
      <Calendar />
      <Docprofile />
      {/* <Hospital />  */}
    </main>
  );
};

export default Home;