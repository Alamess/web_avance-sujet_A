import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReclamationService } from '../../services/reclamation/reclamation.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  registerForm = this.fb.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    date_naissance: ['', [Validators.required, Validators.pattern(/^\d{2}\/\d{2}\/\d{4}$/)]],
    num_CIN: ['', [Validators.required]],
    RIB: ['', [Validators.required]],
    civId: [1, Validators.required],
  });
  isSubmitted = false;
  civilite = [
    { id: 1, title: 'Single' },
    { id: 2, title: 'Maried' },
  ];
  


  constructor(private fb: FormBuilder , private reclamation : ReclamationService,private router: Router) {}

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    console.log(
      'submitted form',
      this.registerForm.value,
      this.registerForm.invalid
    );
    this.isSubmitted = true;
  }
  Submit()
  {   
    if (
      this.registerForm.value.nom !== '' &&
      this.registerForm.value.prenom !== '' &&
      this.registerForm.value.date_naissance !== '' &&
      this.registerForm.value.num_CIN !== '' &&
      this.registerForm.value.RIB !== ''
    ) {
      this.router.navigate(['/form2'],{ queryParams: { nom: this.registerForm.value.nom, prenom: this.registerForm.value.prenom,date_naissance:this.registerForm.value.date_naissance,civilite:this.civilite.find(c => c.id === this.registerForm.value.civId)?.title,CIN:this.registerForm.value.num_CIN,RIB:this.registerForm.value.RIB } });
    }
        
    }
  
}
