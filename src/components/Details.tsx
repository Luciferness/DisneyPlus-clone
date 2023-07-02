import React, { useEffect, useState } from "react";
import {
  ContentMeta,
  Player,
  Controls,
  DetailsBackground,
  DetailsContainer,
  ImageTitle,
  Trailer,
  AddList,
  GroupeW,
  Subtitles,
  Descriptions,
} from "./StyledComponents/StyledDetails";
import play_b from "../assets/images/play-icon-black.png";
import play_w from "../assets/images/play-icon-white.png";
import gpicon from "../assets/images/group-icon.png";
import { useParams } from "react-router-dom";

import db from "../firebase";
import { doc, getDoc } from "firebase/firestore";

type mov = {
  backgroundImg: string;
  cardImg: string;
  description: string;
  title: string;
  subtitle: string;
  titleImg: string;
  type: string;
};

function Details() {
  const { id } = useParams();

  const [MovieDetails, setMovieDetails] = useState<mov>();
  useEffect(() => {
    const fetchMovie = async () => {
      if (!id) {
        return;
      }

      const docRef = doc(db, "movies", id);
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.exists()) {
        // The movie with the provided ID exists
        const movieData = docSnapshot?.data();
        // console.log("effdata", movieData);
        setMovieDetails(movieData as mov);

        // Update the state with the fetched movie data
        // ...
      } else {
        return;
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <>
      {MovieDetails ? (
        <DetailsContainer>
          <DetailsBackground>
            <img src={MovieDetails?.backgroundImg} alt="bg" />
          </DetailsBackground>
          <ImageTitle>
            <img src={MovieDetails?.titleImg} alt="tt" />
          </ImageTitle>
          <ContentMeta>
            <Controls>
              <Player>
                <img src={play_b} alt="" />
                <span>Play</span>
              </Player>
              <Trailer>
                <img src={play_w} alt="" />
                <span>Trailer</span>
              </Trailer>
              <AddList>
                <span />
                <span />
              </AddList>
              <GroupeW>
                <div>
                  <img src={gpicon} alt="" />
                </div>
              </GroupeW>
            </Controls>
            <Subtitles>{MovieDetails?.subtitle}</Subtitles>
            <Descriptions>{MovieDetails?.description}</Descriptions>
          </ContentMeta>
        </DetailsContainer>
      ) : (
        <div>Loading ...</div>
      )}
    </>
  );
}

export default Details;
