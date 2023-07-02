import React from "react";
import { useSelector } from "react-redux";
import { selectTrending } from "../../Store/selectors/movie.selector";
import { Link } from "react-router-dom";
import {
  MovieContainer,
  MovieContent,
  MovieWrapper,
} from "./Styles/StyledMovieList";

function Trending() {
  const trends = useSelector(selectTrending);
  return (
    <MovieContainer>
      <h4>Trending now</h4>
      <MovieContent>
        {trends?.map((item: any) => {
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

export default Trending;
