import { Component } from '@angular/core';
import { PeopleListComponent } from './components/people-list/people-list';

@Component({
  selector: 'app-root',
  imports: [PeopleListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
