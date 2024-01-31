import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { HomeService } from 'src/app/services/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  token:any;
  name:any;
carouselData:any=[];


  constructor(private homeService: HomeService,private authService:AuthService){}

  ngOnInit(): void {
    this.name=this.authService.name;
    this.carouselData=this.homeService.carouselData;
    this.token=this.authService.token;
  }
  showNav():boolean{
    if(this.token===''||this.token===undefined){
    return false;
  }
    else{return true;}
    
  }
  

  
}
