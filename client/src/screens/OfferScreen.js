import { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOffer } from "../actions/offerActions";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import ImageBackground from "../components/UI/ImageBackground";
import Card from "../components/UI/Card";
import style from "./OfferScreen.module.scss";
import Button from "../components/UI/Buttons/Button";
import HeroText from "../components/UI/HeroText";
import Modal from "../components/UI/Modal";
import Loader from "../components/UI/Loader";
import FormControl from "../components/Forms/FormControl";

const OfferScreen = () => {
  const [isModalOpen, SetModalOpen] = useState(false);

  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    city: "",
    profession: "",
    description: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Kötelező kitölteni!")
      .max(32, "Túllépted a karakter limitet (300)!"),
    email: Yup.string()
      .email("Nem megfelelő email formátum")
      .required("Kötelező kitölteni!"),
    city: Yup.string().required("Kötelező kitölteni!"),
    profession: Yup.string().required("Kötelező kitölteni!"),
    description: Yup.string()
      .required("Kötelező kitölteni!")
      .max(300, "Túllépted a karakter limitet (300)!"),
  });

  const onSubmit = (values, onSubmitProps) => {
    dispatch(
      createOffer(
        values.name,
        values.email,
        values.city,
        values.profession,
        values.description
      )
    );
    SetModalOpen(true);
    onSubmitProps.resetForm();
  };

  const offerCreate = useSelector((state) => state.offerCreate);
  const { success, loading } = offerCreate;

  useEffect(() => {
    if (success) {
    }
  }, [success, dispatch]);

  const closeModalHandler = () => SetModalOpen(false);

  return (
    <>
      {isModalOpen && (
        <Modal onClose={closeModalHandler}>
          {loading && <Loader size="large" />}
          {!loading && (
            <Fragment>
              <h1>Köszönjük a levelet!</h1>
              <p>Igyekszünk minél előbb válaszolni.</p>
              <Button onClick={closeModalHandler}>Ok</Button>
            </Fragment>
          )}
        </Modal>
      )}
      <ImageBackground className="large-bg">
        <HeroText>
          <h1>Nem akarsz keresgélni?</h1>
          <p>
            Ebben az esetben adj fel egy megbízást, és majd egy szakember
            megkeres az ajánlatával
          </p>
        </HeroText>
      </ImageBackground>
      <Card flexstart>
        <div className={style.leftbar}>
          <h1>Kérj árajánlatot!</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
        <div className={style.rightbar}>
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
                  control="input"
                  type="text"
                  label="Város"
                  name="city"
                />
                <FormControl
                  control="input"
                  type="text"
                  label="Szakma"
                  name="profession"
                />
                <FormControl
                  control="textarea"
                  label="Munka leírás"
                  name="description"
                />
                <Button type="submit">Küldés</Button>
              </Form>
            )}
          </Formik>
        </div>
      </Card>
    </>
  );
};

export default OfferScreen;
