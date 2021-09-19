import { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import style from "./PasswordEdit.module.scss";

import Button from "../../UI/Buttons/Button";
import Loader from "../../UI/Loader";
import Modal from "../../UI/Modal";
import FormControl from "../../Forms/FormControl";

import { getUserData, changePassword } from "../../../actions/userActions";

const PasswordEdit = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const initialValues = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object({
    oldPassword: Yup.string().required("Kötelező kitölteni"),
    newPassword: Yup.string()
      .required("Kötelező kitölteni!")
      .min(8, "Legalább 8 karakter hosszú jelszó szükséges!")
      .max(32, "A jelszó maximális hossza 32 karakter!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), ""], "A két jelszó nem egyezik")
      .required("Kötelező kitölteni!"),
  });
  const onSubmit = (values) => {
    const { password, newPassword } = values;
    setModalOpen(true);
    dispatch(changePassword({ password, newPassword }));
  };

  const history = useHistory();
  const dispatch = useDispatch();

  const userDetail = useSelector((state) => state.userDetail);
  const { provider } = userDetail;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userChangePassword = useSelector((state) => state.userChangePassword);
  const { success, loading } = userChangePassword;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      dispatch(getUserData(userInfo._id));
    }
  }, [dispatch, userInfo, success, history]);

  const closeModalHandler = () => setModalOpen(false);

  return (
    <Fragment>
      {isModalOpen && (
        <Modal onClose={closeModalHandler}>
          {loading && <Loader size="large" />}
          {!loading && (
            <Fragment>
              <h1>Jelszó változtatás sikeres!</h1>
              <p>Legközelebb már az új jelszavaddal tudsz bejelentkezni.</p>
              <Button onClick={closeModalHandler}>Ok</Button>
            </Fragment>
          )}
        </Modal>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form className={style["edit-form"]}>
            <img
              className={style["profile-img"]}
              src={provider.image}
              alt={provider.name}
            />
            <h1 className={style.name}>{provider.name}</h1>
            <label className={style.label}>Régi Jelszó</label>
            <FormControl control="input" type="password" name="oldPassword" />
            <label className={style.label}>Új Jelszó</label>
            <FormControl control="input" type="password" name="newPassword" />
            <label className={style.label}>Új Jelszó újra</label>
            <FormControl
              control="input"
              type="password"
              name="confirmPassword"
            />
            <Button type="submit">Mentés</Button>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default PasswordEdit;
