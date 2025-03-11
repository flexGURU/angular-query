import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { lastValueFrom } from 'rxjs';
import { injectQuery } from '@tanstack/angular-query-experimental';

@Injectable({
  providedIn: 'root',
})
export class UserQueryService {
  constructor(private userService: UserService) {}

  injectUserQuery = injectQuery(() => ({
    queryKey: ['userData'],
    staleTime: 1000 * 7,
    queryFn: () => lastValueFrom(this.userService.getUsers()),
  }));
}
