import { Injectable } from '@angular/core';
import { CounterService } from '../app/counter.service';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService  {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService:CounterService) { }

  onSetToInactive(id: number) {
    this.counterService.display();
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.counterService.display();
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }

}
