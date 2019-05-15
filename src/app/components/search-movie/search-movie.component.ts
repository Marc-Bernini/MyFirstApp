import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {

  hover = true;
  showMovies = false;

  minYear = 1900;
  maxYear = 2019;

  // Variable to get the formBuilder
  searchMovieForm;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.intializeMovieForm();

    this.initializeSheet(); // Launch function at the component's initialisation

    this.searchMovieForm.valueChanges.subscribe(value => { // Listen input's value change
      console.log(value);
    });
  }

  displayMoviesList() {
    this.showMovies = !this.showMovies;
  }

  // Declare all controls with validation rules
  intializeMovieForm() {
    this.searchMovieForm = this.fb.group({

      login: this.fb.group({
        identify: [''],
        title: ['']
      },
      {
        validator: this.isRequiredValidator('identify', 'title')
      }),

      types: ['Série' , Validators.required],
      releaseYear: ['', [Validators.required, this.rangeDateValidator('minYear', 'maxYear')] ],
      sheet: [ {value: '', disabled: true}, Validators.required]
    });
    this.initializeSheet();
  }

  onSubmit() {
    // Get form value as JSON object
    const searchMovie = this.searchMovieForm.value;
    console.log(JSON.stringify(searchMovie));

    this.intializeMovieForm();
  }

  // Function to check if identity or title input are filled
  isRequiredValidator(identify, title): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

      const value1 = control.get(identify).value;

      const value2 = control.get(title).value;

      if (value1 || value2) {
        return null;

      } else {
        return { isRequired: 'L\'un des deux champs \"Identifiant\" ou \"Titre\" doit être renseigné' };

      }
    };
  }

   // Function to validate Dates
  rangeDateValidator(minYear, maxYear): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

      const movieYear = control.value as number;
      minYear = this.minYear;
      maxYear = this.maxYear;

      if (minYear <= movieYear && movieYear <= maxYear) {
        return null;

       } else {
         return { min: { minYear, maxYear } };

       }
    };
  }

  // Function to initialize select control "plug" to "Courte"
  initializeSheet() {
    this.searchMovieForm.patchValue({
      sheet: 'Courte'
    });
  }

  // Function to enable the sheet's select status
  enableSheet() {
    this.searchMovieForm.get('login.identify').value === '' ?
    this.searchMovieForm.get('sheet').disable() : this.searchMovieForm.get('sheet').enable();
  }
}
