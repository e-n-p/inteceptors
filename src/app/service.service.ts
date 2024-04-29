import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  readonly BASE_URL = "https://pokeapi.co/api/v2/";
  

  constructor(private http: HttpClient) { }

  getPokemonById$(id: number | string){
    return this.http.get<any>(`${this.BASE_URL}pokemon/${id}`).pipe(
      tap(res => console.log(res)
      )
    );
  }

}
