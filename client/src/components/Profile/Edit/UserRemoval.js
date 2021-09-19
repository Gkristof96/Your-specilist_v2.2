import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const UserRemoval = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const history = useHistory();

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  }, [history, userInfo]);
  return (
    <div className="delete-card">
      <h1>Jelenleg nincs még lehetőség a felhasználó törlésére</h1>
      <p>
        Ha törölni szeretnéd a fiókod megvan rá a lehetőséged. De mielőtt ezt
        megtennéd arra kérünk jól fontold meg a döntésed mert ha ezt megteszed a
        felhasználod végleg törlésre kerül.
      </p>
      <p>
        A felhasználód törléséhez kérlek ad meg a jelszavad biztonsági okolból
      </p>
      <form>
        <label>Jelszó</label>
        <input type="password" />
        <button type="submit">Törlés</button>
      </form>
    </div>
  );
};

export default UserRemoval;
