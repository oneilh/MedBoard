import styles from "./user.module.css";

const User = () => {
  const users = [
    {
      id: 1,
      name: "Doctors",
      no: 4567,
      icon: "",
    },
    {
      id: 2,
      name: "Nurses",
      no: 4567,
      icon: "",
    },
    {
      id: 3,
      name: "Patients",
      no: 4567,
      icon: "",
    },
    {
      id: 4,
      name: "Pharmacist",
      no: 4567,
      icon: "",
    },
  ];

  

  return (
    <>
      {users.map((user) => {
        const itemNo = `item_${user.id}`;
        return (
          <div className={`${styles.user} ${styles[itemNo]}`} key={user.id}>
            <div className={styles.userInfo}>
              <h3>{user.name}</h3>
              <p>{user.no}</p>
            </div>
            <div className={styles.user_icon}></div>
          </div>
        );
      })}
    </>
  );
};

export default User;