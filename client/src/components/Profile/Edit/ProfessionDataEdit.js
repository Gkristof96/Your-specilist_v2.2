import { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import classes from "./ProfessionDataEdit.module.css";

import AutocompleteInput from "../../SearchBar/AutocompleteInput";
import ProfessionBadge from "../../Professions/ProfessionBadge";
import Button from "../../UI/Buttons/Button";
import Modal from "../../UI/Modal";

import { getUserData } from "../../../actions/userActions";
import {
  addProfession,
  deleteProfession,
} from "../../../actions/providerActions";
import { getProfessionData } from "../../../actions/searchActions";

const ProfessionDataEdit = () => {
  const [profession, setProfession] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const providerAddProfession = useSelector(
    (state) => state.providerAddProfession
  );
  const { success: addSuccess } = providerAddProfession;

  const providerDeleteProfession = useSelector(
    (state) => state.providerDeleteProfession
  );
  const { success: deleteSuccess } = providerDeleteProfession;

  const getProfession = useSelector((state) => state.getProfession);
  const { professions } = getProfession;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDetail = useSelector((state) => state.userDetail);
  const { provider } = userDetail;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      dispatch(getProfessionData());
      dispatch(getUserData(userInfo._id));
      if (addSuccess || deleteSuccess) {
        setProfession("");
      }
    }
  }, [addSuccess, deleteSuccess, dispatch, userInfo, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addProfession({ profession }));
  };

  const deleteProfessionHandler = () => {
    dispatch(deleteProfession({ profession }));
    setModalOpen(false);
  };

  const openModalHandler = (profession) => {
    setModalOpen(true);
    setProfession(profession);
  };

  const closeModalHandler = () => setModalOpen(false);

  return (
    <Fragment>
      {isModalOpen && (
        <Modal onClose={closeModalHandler}>
          <h1>Biztos t??r??lni szeretn??d a szakm??t?</h1>
          <Button onClick={closeModalHandler}>M??gse</Button>
          <Button onClick={deleteProfessionHandler}>T??rl??s</Button>
        </Modal>
      )}
      <p>
        Itt tudsz hozz??adni ??j szakm??kat a profilodhoz, vagy t??r??lni is tudod a
        m??r mentett szakm??idat ha azt szeretn??d.
      </p>
      <h1>Szakm??k</h1>
      <div className={classes["profession-container"]}>
        {provider.professions.map((profession, index) => (
          <ProfessionBadge
            onChooseProfession={openModalHandler}
            professionName={profession.name}
            key={index}
          />
        ))}
      </div>
      <form onSubmit={submitHandler}>
        <label className={classes.text}>Adj hozz?? ??j szakm??t</label>
        <AutocompleteInput
          setInput={setProfession}
          items={professions}
          placeholder='Szakma'
          value={profession}
          size='small'
        />
        <Button type='submit'>Hozz??ad</Button>
      </form>
    </Fragment>
  );
};

export default ProfessionDataEdit;
