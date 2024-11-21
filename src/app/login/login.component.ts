import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../servicios/auth.service';
import { AuthResponse } from '../interfaces/auth-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.authForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    if (this.authForm.invalid) {
      return
    }
    this.authService.login(this.authForm.value).subscribe({
      next: (value: AuthResponse) => {
        this.authService.setToken(value.token)
        this.router.navigateByUrl('/listado')
      }, error(err) {
        if (err.status == 401) {
          alert("Credenciales incorrectas")
        } else {
          alert("Error en el servidor")
        }
      }
    })

  }
}
