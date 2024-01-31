import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  name : any ;
  constructor(private authService:AuthService) {}
 
  carouselData = [
    {
      title: 'Digital Currency',
      subtitle: 'The Future of Trading.',
      link: '#',
      imagePath: 'assets/slider-img.png',
      reclamation: 'add your reclamation',
    },
    {
     
      title: 'Digital Currency',
      subtitle: 'The Future of Trading.',
      link: '#',
      imagePath: 'assets/slider-img.png',
      reclamation: 'add your reclamation',
    },
    {
      
      title: 'Digital Currency',
      subtitle: 'The Future of Trading.',
      link: '#',
      imagePath: 'assets/slider-img.png',
      reclamation: 'add your reclamation',
    },
    {

      title: 'Digital Currency',
      subtitle: 'The Future of Trading.',
      link: '#',
      imagePath: 'assets/slider-img.png',
      reclamation: 'add your reclamation',
    },
    
  ];
    

}
