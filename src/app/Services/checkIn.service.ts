import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../Models/user'
import { ok } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class CheckInService {

  constructor(private httpClient: HttpClient) { }

  checkIn(pin: number) {
    return this.httpClient.post(`${environment.apiUrl}/methodName`, pin);
  }

  registerName(newUser: User) {
    if (environment.production == true) {
      return this.httpClient.post(`${environment.apiUrl}/methodName`, newUser);
    }
    else{
      
    }
  }

  weeklyDatasource() {
    if (environment.production == true) {
      return this.httpClient.get(`${environment.apiUrl}/methodName`);
    }
    else {
      var DATA = [
        { name: 'Antonio Nevarez', minutes: 0 },
        { name: 'Miguel Siqueiros', minutes: 15 },
        { name: 'Carlos Rondero', minutes: 26 },
        { name: 'Ernesto Vera', minutes: 39 },
        { name: 'Luis Maldonado', minutes: 52 },
        { name: 'Felipe Padilla', minutes: 62 },
        { name: 'Jesus Campos', minutes: 68 },
        { name: 'Pedro Esparza', minutes: 76 },
        { name: 'Jemmy Preciado', minutes: 83 },
        { name: 'Alfa Venegas', minutes: 92 },
      ];
      return DATA;
    }
  }


  dailyDatasource() {
    if (environment.production == true) {
      return this.httpClient.get(`${environment.apiUrl}/methodName`);
    }
    else {
      var DATA = [
        { name: 'Antonio Nevarez', minutes: 0, pto: false },
        { name: 'Jemmy Preciado', minutes: 1, pto: false },
        { name: 'Ernesto Vera', minutes: 2, pto: false },
        { name: 'Carlos Rondero', minutes: 3, pto: false },
        { name: 'Jesus Campos', minutes: 5, pto: true },
        { name: 'Felipe Padilla', minutes: 6, pto: false },
        { name: 'Luis Maldonado', minutes: 6, pto: false },
        { name: 'Pedro Esparza', minutes: 7, pto: false },
        { name: 'Miguel Siqueiros', minutes: 8, pto: false },
        { name: 'Alfa Venegas', minutes: 9, pto: false },
      ];
      return DATA;
    }
  }

}
