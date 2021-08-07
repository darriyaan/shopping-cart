import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()

  constructor() { }

  sendMessage = (product: any) =>
    this.subject.next(product
  ); // triggering an event
  
  getMessage = () => this.subject.asObservable();

}
