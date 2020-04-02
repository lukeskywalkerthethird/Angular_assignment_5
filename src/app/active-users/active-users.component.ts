import { Component } from '@angular/core';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  activeUsers: string[];
  
  constructor(private usersService: UsersServiceService){
    this.activeUsers = this.usersService.activeUsers;
  }

  onSetToInactive(id:number){
    this.usersService.onSetToInactive(id);
  }
  
}
