import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db, { collection, getDocs, query } from "../../firebase";
import { setMovie } from "../../Store/slices/MovieSlice";
import { selectUserName } from "../../Store/selectors/user.selector";
import { HomeContainer } from "./Styles/StyledHome";
import ImgSlider from "./ImgSlider";
import HomeViewers from "./HomeViewers";
import Recommended from "./Recommended";
import DisneyNew from "./DisneyNew";
import Originals from "./Originals";
import Trending from "./Trending";
import { Outlet, useMatch } from "react-router-dom";

type mov = {
  id: string;
  content: {
    backgroundImg: string;
    cardImg: string;
    description: string;
    title: string;
    subtitle: string;
    titleImg: string;
    type: string;
  };
};

function Home() {
  const match = useMatch("/home");
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);

  useEffect(() => {
    const fetchMovies = async () => {
      const snapshot = collection(db, "movies");
      const q = query(snapshot);
      const querySnapshot = await getDocs(q);
      const moviesRecommended: Array<mov> = [];
      const moviesOriginals: Array<mov> = [];
      const moviesTrending: Array<mov> = [];
      const moviesNew: Array<mov> = [];
      querySnapshot.forEach((doc) => {
        if (doc.data().type === "recommend") {
          let data = doc.data();
          const id = doc.id;
          data = { ...data, id };
          moviesRecommended.push(data as mov);
        } else if (doc.data().type === "original") {
          let data = doc.data();
          const id = doc.id;
          data = { ...data, id };
          moviesOriginals.push(data as mov);
        } else if (doc.data().type === "new") {
          let data = doc.data();
          const id = doc.id;
          data = { ...data, id };
          moviesNew.push(data as mov);
        } else if (doc.data().type === "trending") {
          let data = doc.data();
          const id = doc.id;
          data = { ...data, id };
          moviesTrending.push(data as mov);
        }
      });

      dispatch(
        setMovie({
          recommended: moviesRecommended,
          newDisney: moviesNew,
          originals: moviesOriginals,
          trending: moviesTrending,
        })
      );
    };
    fetchMovies();
  }, [username]);
  return (
    <>
      <main>
        {match ? (
          <HomeContainer>
            <ImgSlider />
            <HomeViewers />
            <Recommended />
            <DisneyNew />
            <Originals />
            <Trending />
          </HomeContainer>
        ) : (
          <Outlet />
        )}
      </main>
    </>
  );
}

export default Home;
