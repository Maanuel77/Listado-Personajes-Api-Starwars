import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleResponse } from '../interfaces/people.interface';

// Servicio que hace la peticion GET de los personajes a la API de Star Wars
@Injectable({ providedIn: 'root' })
export class PeopleService {
  http = inject(HttpClient);
  private baseUrl = 'https://swapi.dev/api/people';

  getPeople(page = 1): Observable<PeopleResponse> {
    return this.http.get<PeopleResponse>(`${this.baseUrl}/?page=${page}`);
  }
}
