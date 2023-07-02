import React from "react";
import { useSelector } from "react-redux";
import { selectOriginals } from "../../Store/selectors/movie.selector";
import { Link } from "react-router-dom";
import {
  MovieContainer,
  MovieContent,
  MovieWrapper,
} from "./Styles/StyledMovieList";

function Originals() {
  const oris = useSelector(selectOriginals);
  return (
    <MovieContainer>
      <h4>Originals</h4>
      <MovieContent>
        {oris?.map((item: any) => {
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

export default Originals;
