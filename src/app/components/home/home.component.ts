import { Component, inject } from '@angular/core';
import { UserService } from '../../services/users/user.service';
import { Users } from '../../types/types.interface';
import { CommonModule } from '@angular/common';
import { CreateQueryResult } from '@tanstack/angular-query-experimental';
import { UserQueryService } from '../../services/users/user-query.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  #userQuery= inject(UserQueryService)
  users!: CreateQueryResult<Users[], Error>;

  getUsers(){
    this.users = (this.#userQuery.injectUserQuery)
    console.log(this.users);
    
  }

}
