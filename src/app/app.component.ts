import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'interceptor';
  singlePokemon$!: Observable<any>;
  service = inject(ServiceService)
  constructor () {
    this.singlePokemon$ = this.service.getPokemonById$(25);
  }
}
