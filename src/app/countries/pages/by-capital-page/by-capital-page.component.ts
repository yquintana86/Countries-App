import { Component } from '@angular/core';
import { CountriesService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ' '
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService)
  {}

  searchByCapital(capital: string):void
  {
    this.countries = [];
    if(capital)
      this.countriesService.searchByCapital(capital)
                            .subscribe(countries =>
                            {
                                this.countries = countries;
                            });
  }

}
