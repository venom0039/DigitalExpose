import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-nav-bar',
  templateUrl: './general-nav-bar.component.html',
  styleUrls: ['./general-nav-bar.component.scss']
})
export class GeneralNavBarComponent implements OnInit {
  public isLogged: boolean = false;
  public dpImage: string = "";
  public navlinks: number = 0;

  constructor() {
    if((sessionStorage.getItem("token") != undefined) && (sessionStorage.getItem("token") != null)){
      this.isLogged = true;
    }
    this.dpImage = "https://www.sanjayjangam.com/wp-content/uploads/2021/12/beautiful-dp-for-whatsapp.jpg";
  }

  ngOnInit(): void {
  }

  rederectToLogin(){
    window.location.replace("/login");
  }

  //Styled functions
  activeNavigate(id:number) {
    this.navlinks = id;
  }
}
