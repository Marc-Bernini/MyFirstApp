import { DisplayMoviesDirective } from './display-movies.directive';
import { TemplateRef } from '@angular/core';

describe('DisplayMoviesDirective', () => {
  it('should create an instance', () => {
    const directive = new DisplayMoviesDirective(this.tplRef, this.vwRef);
    expect(directive).toBeTruthy();
  });
});
