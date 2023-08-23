import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Imovie } from 'src/interfaces/movie.interface';
import { BarmenuComponent } from './barmenu/barmenu.component';
import { MovieService } from './services/movie.service';
import { HomePageComponent } from './home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[ CommonModule,HomePageComponent,BarmenuComponent]
})
export class AppComponent {
      value:string = ''
      searchCriteria(criteria: string){
        console.log(criteria)
        this.value = criteria
      }
}
