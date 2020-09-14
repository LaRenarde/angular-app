import { Component, OnInit } from '@angular/core';
import { NbAuthJWTToken, NbAuthService  } from '@nebular/auth';
import { bindCallback } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'App Nebular';
  user = {email : ''};

  constructor(private authService: NbAuthService, private route: Router) { }

  logout(): void{
    this.route.navigate(['/auth/logout']);
  }

  ngOnInit(): void {
    this.authService.onTokenChange()
    .subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable 
        console.log(`composant header ${this.user}`)
      }else{
        this.user.email = '';
      }

    });
  }
}
