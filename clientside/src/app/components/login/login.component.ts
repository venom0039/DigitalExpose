import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from "@abacritt/angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "@abacritt/angularx-social-login";
import { CommonService } from '../../servises/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  public user: SocialUser = new SocialUser;
  constructor(private authService: SocialAuthService, private commonService: CommonService) { }

  ngOnInit(): void{
    this.authService.authState.subscribe(usr => {
      this.user = usr;
      console.table(usr);
      this.commonService.login(usr)
      .subscribe(res => console.log(res));
    })
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFacebook(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  rederectToHome(){
    window.location.replace("/");
  }
}
