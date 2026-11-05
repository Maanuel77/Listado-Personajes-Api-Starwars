// Respuesta de https://swapi.dev/api/people
export interface PeopleResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: People[];
}

export interface People {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  url: string;
}
