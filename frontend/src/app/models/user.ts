export interface User {
  id: number,
  nume: string,
  prenume: string,
  datanastere:Date, //string
  email:string,
  cnp:string,
  telefon: string,
  dataadaugare?:Date,
  actiune?:string,
  img:string
}
