import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  token:any;
  constructor(private authService: AuthService){

  }
  ngOnInit(): void {
    this.token=this.authService.token;
  }

showNav():boolean{
  if(this.token===''||this.token===undefined){
  return false;
}
  else{return true;}
  
}
}
