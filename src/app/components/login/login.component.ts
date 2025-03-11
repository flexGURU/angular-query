import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Account } from '../../types/types.interface';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  authService = inject(AuthService);
  account$: Account | null = null;
  // user: string;
  credentials: FormGroup;
  

  constructor(private fb: FormBuilder) {
    this.credentials = this.fb.group({
      username: ['doe18', Validators.required],
      password: ['123456', [Validators.required, Validators.minLength(6)]],
    });
  }

  login(): void {
    // console.log(this.credentials.getRawValue());

    this.authService
      .login(this.credentials.getRawValue())
      .subscribe((response) => {
        console.log(response);
      });
  }

  getAccount(id: number) {
    this.authService.listAccount(id).subscribe((account) => {
      this.account$ = account;
      console.log(this.account$);
    });
  }
}
