import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { Imovie } from 'src/interfaces/movie.interface';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnChanges {
  cacheMovies: Imovie[] = [];
  movies: Imovie[] = [];
  @Input() criteria: string = '';

  constructor(private movieService: MovieService) {
    this.fetchMovies();
  }

  fetchMovies() {
    return this.movieService
      .getMovies()
      .subscribe((data) => (this.movies = data.results));
  }

  searchMovies(searchCriteria: string) {
    return this.movieService
      .searchMovie(searchCriteria)
      .subscribe((data) => (this.movies = data.results));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (this.criteria !== '') {
      console.log('criteria cambio');
      this.cacheMovies = this.movies;
      this.searchMovies(this.criteria);
    }
    if (this.criteria === '' && this.cacheMovies.length !== 0) {
      this.movies = this.cacheMovies;
    }
  }
}
