import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import style from "./RatingForm.module.scss";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import Button from "../UI/Buttons/Button";
import Modal from "../UI/Modal";
import Loader from "../UI/Loader";
import FormControl from "../Forms/FormControl";

import { createProviderReview } from "../../actions/providerActions";

const RatingForm = (props) => {
  const ratingOptions = [
    { key: "Kérlek válasz egy opciót", value: "" },
    { key: "1 csillag", value: 1 },
    { key: "2 csillag", value: 2 },
    { key: "3 csillag", value: 3 },
    { key: "4 csillag", value: 4 },
    { key: "5 csillag", value: 5 },
  ];

  const [isModalOpen, setModalOpen] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    rating: "",
    message: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Kötelező kitölteni!")
      .max(32, "Túllépted a karakter limitet (300)!"),
    email: Yup.string()
      .email("Nem megfelelő email formátum")
      .required("Kötelező kitölteni!"),
    rating: Yup.string().required("Kötelező kitölteni!"),
    message: Yup.string()
      .required("Kötelező kitölteni!")
      .max(300, "Túllépted a karakter limitet (300)!"),
  });

  const onSubmit = (values, onSubmitProps) => {
    const { name, email, rating, message } = values;
    dispatch(
      createProviderReview(props.id, {
        name,
        email,
        rating,
        message,
      })
    );
    setModalOpen(true);
    onSubmitProps.resetForm();
  };

  const history = useHistory();
  const dispatch = useDispatch();

  const providerReviewCreate = useSelector(
    (state) => state.providerReviewCreate
  );
  const { loading } = providerReviewCreate;

  const closeModalHandler = () => {
    setModalOpen(false);
    history.push(`/provider/${props.id}`);
  };
  return (
    <Fragment>
      {isModalOpen && (
        <Modal onClose={closeModalHandler}>
          {loading && <Loader size="large" />}
          {!loading && (
            <Fragment>
              <h1>Értékelés rögzítve!</h1>
              <p>
                Köszönjük hogy értékelted a szakemberünk, reméljük megvoltál
                elégedve a munkájával.
              </p>
              <Button onClick={closeModalHandler}>Ok</Button>
            </Fragment>
          )}
        </Modal>
      )}
      <div className={style.rating}>
        <h3>Értékelés</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form>
              <FormControl
                control="input"
                type="text"
                label="Teljes név"
                name="name"
              />
              <FormControl
                control="input"
                type="email"
                label="Email"
                name="email"
              />
              <FormControl
                control="select"
                options={ratingOptions}
                label="Értékelés"
                name="rating"
              />
              <FormControl control="textarea" label="Üzenet" name="message" />
              <Button type="submit">Küldés</Button>
            </Form>
          )}
        </Formik>
      </div>
    </Fragment>
  );
};

export default RatingForm;
