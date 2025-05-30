export interface Rango {
    id: number;
    nombre: string;
    porcentaje: number;
  }
  
  export const rangos: Rango[] = [
    {id : 1, nombre: "Trainne", porcentaje: 5},
    {id : 2, nombre: "Consultant", porcentaje: 8},
    {id : 3, nombre: "Leader", porcentaje: 10},
    //{id : 4, nombre: "Senior Leader", porcentaje: 9.5},
    {id : 4, nombre: "Supervisor", porcentaje: 12},
    //{id : 6, nombre: "Senior supervisor", porcentaje: 10.5},
    {id : 5, nombre: "Manager", porcentaje: 14},
    {id : 6, nombre: "Director", porcentaje: 16},
    //{id : 8, nombre: "Senior Manager", porcentaje: 11.5},
    {id : 7, nombre: "Vice president", porcentaje: 18}
  ];

