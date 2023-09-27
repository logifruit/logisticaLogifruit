import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  isHovered: boolean = false;

  constructor(
    private router: Router,
    public authService: AuthService) {
  }

  logout() {
    this.authService.logout();
    this.redireccionar();
  }

  redireccionar(){
    const redirectUrl = '/login';
    // Redirect the user
    this.router.navigate([redirectUrl]);
  }
  


  showText() {
    this.isHovered = true;
  }

  hideText() {
    this.isHovered = false;
  }


}
