import { useEffect, useState } from "react";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";
import { getApiResource } from "../../utils/network";
import { API_PEOPLE } from "../../constants/api";
import { getPeopleId, getPeopleImg } from "../../services/getPeopleData";
import PeopleList from "../../components/PeoplePage/PeopleList";
import styles from "./PeoplePage.module.scss";

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);

  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImg(id);
        console.log(img);
        return {
          id,
          name,
          img,
        };
      });

      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);

  return (
    <>
      <h1>Navigation</h1>
      {people && <PeopleList people={people} />}
    </>
  );
};

export default withErrorApi(PeoplePage);
