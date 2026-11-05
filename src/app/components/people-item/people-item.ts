import { Component, input, output } from '@angular/core';
import { People } from '../../interfaces/people.interface';

// Componente hijo: pinta un personaje y avisa al padre cuando se hace click
@Component({
  selector: 'app-people-item',
  imports: [],
  templateUrl: './people-item.html',
  styleUrl: './people-item.css',
})
export class PeopleItemComponent {
  people = input.required<People>();
  // Evento que se emite al padre con el personaje seleccionado
  peopleClick = output<People>();

  onClick(): void {
    this.peopleClick.emit(this.people());
  }
}
