import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../services/movie.service';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-barmenu',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatInputModule, MatFormFieldModule],
  templateUrl: './barmenu.component.html',
  styleUrls: ['./barmenu.component.css'],
})
export class BarmenuComponent {
  @Output() searchCriteriaEvent = new EventEmitter<string>();

  constructor(private movieService: MovieService) {}

  onKey(event: any) {
    this.searchCriteriaEvent.emit(event.target.value || '');
  }

  login() {
    this.movieService.login({});
  }
}
