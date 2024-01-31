import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReclamationService } from 'src/app/services/reclamation/reclamation.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  nom:any ;
  prenom:any;
  date_naissance:any;
  civilite:any;
  CIN:any;
  RIB:any;

  registerForm = this.fb.group({
  Texte: [''],
  SujetId: [1, [Validators.required]]
  });
  Sujet = [
    { id: 1, title: 'Account' },
    { id: 2, title: 'Card' },
    { id: 2, title: 'Reception in the agency' },
  ];
  isSubmitted = false;
  token:any;
  constructor(private fb: FormBuilder , private reclamation : ReclamationService,private route: ActivatedRoute,private router:Router) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.nom = params['nom'];
      this.prenom = params['prenom'];
      this.date_naissance = params['date_naissance'];
      this.civilite = params['civilite'];
      this.CIN = params['CIN'];
      this.RIB = params['RIB'];
    });
  }
  
  Submit()
  {   
    this.reclamation.Checkreclamation(this.nom, this.prenom,this.date_naissance,this.civilite,
     this.CIN,this.RIB,
     this.Sujet.find(s => s.id === this.registerForm.value.SujetId)?.title,this.registerForm.value.Texte)
      .subscribe(res =>{
        console.log(res);
        this.registerForm.reset();
        alert("Your message Successfully");
        this.router.navigate(['/home']);
      },(error)=>{
        console.log(error);
      });
    }
}
