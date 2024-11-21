import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './servicios/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'desarrolloWebAngular';

  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  // logout() {
  //   this.authService.logout();
  //   this.router.navigateByUrl('/login')
  // }

  isLoginPage() {
    return this.router.url === '/login';
  }

}
