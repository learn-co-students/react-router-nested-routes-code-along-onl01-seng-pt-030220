// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
// import the `MovieShow` component:
import MovieShow from '../components/MovieShow';
 
// Here we add `match` to the arguments so we can access the path information 
// in `routerProps` that is passed from App.js 
 // We also add a `Route` component that will render `MovieShow`
    // when a movie is selected
const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
    {/* <Route path={`${match.url}/:movieId`} component={MovieShow}/> */}
    {/* <Route path={`${match.url}/:movieId`} component={<MovieShow movies={movies} /> }/> */}
    {/* <Route path={`${match.url}/:movieId`} render={routerProps => <MovieShow {...routerProps} movies={movies} /> }/> */}
    <Route exact path={match.url} render={() => <h3>Choose a movie from the list above</h3>}/>
    <Route path={`${match.url}/:movieId`} render={routerProps => <MovieShow {...routerProps} movies={movies} /> }/>
  </div>
)
 
export default MoviesPage