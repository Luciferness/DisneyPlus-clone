import React from "react";
import { useSelector } from "react-redux";
import { selectRecommended } from "../../Store/selectors/movie.selector";
import { Link } from "react-router-dom";
import {
  MovieContainer,
  MovieContent,
  MovieWrapper,
} from "./Styles/StyledMovieList";

function Recommended() {
  const recos = useSelector(selectRecommended);
  return (
    <MovieContainer>
      <h4>Recommended for you</h4>
      <MovieContent>
        {recos?.map((item: any) => {
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

export default Recommended;
