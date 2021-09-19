import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import style from "./LoginCard.module.scss";

import Loader from "../UI/Loader";
import Message from "../UI/Message";
import Button from "../UI/Buttons/Button";
import FormControl from "../Forms/FormControl";

import { login } from "../../actions/userActions";

const LoginCard = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Nem megfelelő email formátum")
      .required("Kötelező kitölteni!"),
    password: Yup.string().required("Kötelező kitölteni!"),
  });
  const onSubmit = (values) => dispatch(login(values.email, values.password));

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/profile");
    }
  }, [history, userInfo]);

  const closeLoginHandler = () => {
    history.replace("/");
  };

  return (
    <div className={style["login-card"]}>
      <h1>Bejelentkezés</h1>
      <FaTimes className={style.icon} onClick={closeLoginHandler} />
      {error && <Message type="error" message={error} />}
      {loading && <Loader />}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <FormControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormControl
              control="input"
              type="password"
              label="Jelszó"
              name="password"
            />
            {/*<div className='login-settings'>
                    <label>
                        <input type='checkbox' />
                        <span>Emlékezz rám!</span>
                    </label>
                    <Link to='/'>
                        elfelejtett jelszó
                    </Link>
                </div>*/}
            <Button type="submit">Küldés</Button>
          </Form>
        )}
      </Formik>
      <p>
        Nincs még felhasználód? <Link to="/auth/signup">Regisztrálj</Link> most!
      </p>
    </div>
  );
};

export default LoginCard;
