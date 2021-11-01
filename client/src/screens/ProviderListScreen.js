import { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import classes from "./ProviderListScreen.module.css";

import ScreenHeader from "../components/UI/ScreenHeader";
import SearchBar from "../components/SearchBar/SearchBar";
import Loader from "../components/UI/Loader";
import Message from "../components/UI/Message";
import ProviderCard from "../components/Provider/ProviderCard";
import Paginate from "../components/UI/Paginate";
import ErrorModal from "../components/UI/Modals/ErrorModal";
import { listProviders } from "../actions/providerActions";

const ProvidersListScreen = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [keyword, setKeyword] = useState({
    city: queryParams.get("city") || "",
    profession: queryParams.get("profession") || "",
  });
  const [isModalOpen, setModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const param = useParams();

  const pageNumber = param.pageNumber;

  const providerList = useSelector((state) => state.providerList);
  const { loading, error, providers, pages, page } = providerList;

  useEffect(() => {
    if (
      location.search === "" &&
      (keyword.city !== "" || keyword.profession !== "")
    ) {
      setKeyword({ city: "", profession: "" });
    }
    dispatch(listProviders(pageNumber, keyword));
  }, [dispatch, pageNumber, keyword, location]);

  const searchProvidersHandler = (city, profession) => {
    if (profession === "" && city === "") {
      setErrorMessage("Kérlek ad meg a települést és a szakmát amit keresel");
      setModalOpen(true);
    } else if (profession === "") {
      setErrorMessage("A szakma mező kitöltése kötelező");
      setModalOpen(true);
    } else {
      setKeyword({ city: city, profession: profession });
    }
  };

  const closeModalHandler = () => setModalOpen(false);

  return (
    <Fragment>
      {isModalOpen && (
        <ErrorModal onClose={closeModalHandler}>
          <Fragment>
            <p>{errorMessage}</p>
          </Fragment>
        </ErrorModal>
      )}
      <ScreenHeader className='large-bg'>
        <h1>Hiába keresel nem találsz szakembert?</h1>
        <p>
          Tégy egy probát nálunk, garantáljuk hogy itt megtalálod azt mester
          akire most szükséged van
        </p>
        <SearchBar onSearchProviders={searchProvidersHandler} />
      </ScreenHeader>
      <section className={classes.providers}>
        <div className={classes.container}>
          {loading ? (
            <Loader size='large' />
          ) : error ? (
            <Message margin='large' type='error' message={error} />
          ) : (
            <Fragment>
              {providers.map((provider, index) => (
                <ProviderCard key={index} provider={provider} />
              ))}
            </Fragment>
          )}
          {pages > 1 && (
            <Paginate pages={pages} page={page} keyword={keyword} />
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default ProvidersListScreen;
