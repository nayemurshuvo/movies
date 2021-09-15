import React, { Component } from "react";
import Pagination from "../common/pagination.component";
import { getGenres, getMovies } from "../services/newMovies.service";
import MoviesTable from "./movies-table.component";
import Filter from "../common/filtering.component";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: getMovies(),
    genres: [{ name: "All Genres" }, ...getGenres()],
    activePage: 1,
    pageCount: 5,
    selectedGenre: "All Genres",
    sortColumn: { path: 'title', order: 'asc' }
  };

  handleChangePage = (page) => {
    this.setState({ ...this.state, activePage: page });
  };

  paginateMovies = (movies) => {
    const { activePage, pageCount } = this.state;
    const start = (activePage - 1) * pageCount;
    const paginateMovies = movies.slice(start, start + pageCount);
    return paginateMovies;
  };

  filterMovies = () => {
    const { movies, selectedGenre } = this.state;

    const filteredMovies = movies.filter((movies) => {
      if (selectedGenre === "All Genres") return true;
      if (movies.genres.includes(selectedGenre)) return true;
      return false;
    });
    return filteredMovies;
  };

  sortMovies = (movies) => {
    const { sortColumn } = this.state;
    const sortedMovies= _.orderBy(movies, [sortColumn.path], [sortColumn.order]);
    return sortedMovies;
  }

  setYourRating = (title) => {
    const movies = [...this.state.movies];
    movies.forEach((item) => {
      if (item.title === title) {
        item.your_rating = item.your_rating === true ? false : true;
      }
    });
    this.setState({ ...this.state, movies });
  };

  handleClickGenre = (genre) => {
    this.setState({ ...this.state, selectedGenre: genre, activePage: 1 });
  };

  handleSort = sortColumn =>{
      this.setState({...this.state, sortColumn});
  }

  render() {
    const filtered = this.filterMovies();
    const sorted = this.sortMovies(filtered);
    const movies = this.paginateMovies(sorted);
    return (
      <>
        <div className="row">
          <Filter
            filterdItems={this.state.genres.map((genre, idx) => ({
              _id: idx,
              name: genre.name,
            }))}
            onClick={this.handleClickGenre}
            selectedItem={this.state.selectedGenre}
          />
          <div className="col-lg-10">
            <h2>Showing {filtered.length} Movies </h2>
            <br />

            <MoviesTable 
                movies={movies}
                onSort={this.handleSort}
                sortColumn={this.state.sortColumn}
                />

            <Pagination
              totalItems={filtered.length}
              pageCount={this.state.pageCount}
              activePage={this.state.activePage}
              onChangePage={this.handleChangePage}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Movies;
