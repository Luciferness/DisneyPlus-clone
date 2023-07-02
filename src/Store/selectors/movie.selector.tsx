export const selectRecommended = (state: { movies: { recommended: any } }) =>
  state?.movies?.recommended;
export const selectOriginals = (state: { movies: { originals: any } }) =>
  state?.movies?.originals;
export const selectNewDisney = (state: { movies: { newDisney: any } }) =>
  state?.movies?.newDisney;
export const selectTrending = (state: { movies: { trending: any } }) =>
  state?.movies?.trending;
