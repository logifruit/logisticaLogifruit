import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent { 
  loginForm: FormGroup;
  jwt!: string;
  
  //message!: string;

  constructor(private formBuilder: FormBuilder, 
    private loginService: LoginService, 
    private router: Router,
    public authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      username: ['upv', Validators.required],
      password: ['CovidSQL19', Validators.required]
    });
  }

  onSubmit() {
    
    if (this.loginForm.invalid) {
      return;
    }

    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    this.loginService.login(username, password)
    .subscribe({
      next: (response) => {
        //Obtener el JWT del servicio de inicio de sesión
        this.jwt = response.token;
        // Realizar llamada a la API de autenticación y obtener el token
        const token = 'token-generado'; // Ejemplo
        // Guardar el token en la sesión del navegador
        sessionStorage.setItem('accessToken', response.token);
        // Navegar a la página principal
        // Notificar inicio exitoso y navegar a pagina principal
        this.login();
      },
      error: (error) => {
        console.error("ERRRRR::::.....", error);
        //this.router.navigate(['/main']);
      }
    });
  }


  login() {
    this.authService.login().subscribe(() => {
      //this.message = this.getMessage();
      if (this.authService.isLoggedIn) {
        // Usually you would use the redirect URL from the auth service.
        // However to keep the example simple, we will always redirect to `/admin`.
        const redirectUrl = '/apk';
        // Redirect the user
        this.router.navigate([redirectUrl]);
      }
    });
  }

  // getMessage() {
  //   return 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  // }
}
