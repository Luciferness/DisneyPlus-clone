import React from "react";
import { useSelector } from "react-redux";
import { selectNewDisney } from "../../Store/selectors/movie.selector";
import { Link } from "react-router-dom";
import {
  MovieContainer,
  MovieContent,
  MovieWrapper,
} from "./Styles/StyledMovieList";

function DinseyNew() {
  const newdis = useSelector(selectNewDisney);
  return (
    <MovieContainer>
      <h4>New On Disney</h4>
      <MovieContent>
        {newdis?.map((item: any) => {
          return (
            <MovieWrapper key={item.title}>
              <Link to={`/details/${item.id}`}>
                <img src={item.cardImg} alt={item.title} />
              </Link>
            </MovieWrapper>
          );
        })}
      </MovieContent>
    </MovieContainer>
  );
}

export default DinseyNew;
