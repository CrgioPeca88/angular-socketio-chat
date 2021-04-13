// Dependencies
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  constructor() {}

  getSaludo(): void {
    console.log("Sservice works!");
  }

}
