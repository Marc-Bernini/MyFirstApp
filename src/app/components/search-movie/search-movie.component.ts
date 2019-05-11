import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {

    // Declare all controls with validation rules
    searchMovieForm = this.fb.group({

      login: this.fb.group({
        identify: [''],
        title: ['']
      },
      {
        validator: this.isRequiredValidator('identify', 'title')
      }),

      type: ['Séries', Validators.required],
      releaseYear: ['', Validators.required],
      plug: ['', Validators.required],
    });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initializePlug(); // Launch function at the component's initialisation
  }

  onSubmit() {
    // Get form value as JSON object
    const searchMovie = this.searchMovieForm.value;
    console.log('user : ' + searchMovie.type);
  }

  // Function to check if identity or title input are filled
  isRequiredValidator(identify, title): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

      const value1 = control.get(identify).value;

      const value2 = control.get(title).value;

      if (value1 || value2) {
        return null;

      } else {
        return {isRequired: 'L\'un des deux champs \"Identifiant\" ou \"Titre\" doit être renseigné' };

      }
    };
  }

  // Function to initialize select control "plug" to "Courte"
  initializePlug() {
    this.searchMovieForm.patchValue({
      plug: 'Courte'
    });
  }
}