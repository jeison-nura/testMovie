import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Imovie } from 'src/interfaces/movie.interface';
import { MatButtonModule } from '@angular/material/button';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnChanges {
  completeurl: String = '';
  @Input()
  movie: Imovie = {} as Imovie;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.completeurl = environment.imagepath + this.movie.poster_path;
  }
}
