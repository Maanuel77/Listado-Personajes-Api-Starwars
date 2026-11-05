import { Component, inject, OnInit, signal } from '@angular/core';
import { People } from '../../interfaces/people.interface';
import { PeopleService } from '../../services/people-service';
import { PeopleItemComponent } from '../people-item/people-item';

// Componente padre: carga la lista y abre un modal con el personaje seleccionado
@Component({
  selector: 'app-people-list',
  imports: [PeopleItemComponent],
  templateUrl: './people-list.html',
  styleUrl: './people-list.css',
})
export class PeopleListComponent implements OnInit {
  peopleService = inject(PeopleService);
  peopleList = signal<People[]>([]);
  selectedPeople = signal<People | null>(null);

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe((resp) => this.peopleList.set(resp.results));
  }

  // Recibe el evento del hijo y abre el modal
  openModal(people: People): void {
    this.selectedPeople.set(people);
  }

  closeModal(): void {
    this.selectedPeople.set(null);
  }
}
