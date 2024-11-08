import { Component } from '@angular/core';
import { CountriesService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService)
  {}

  searchByCountry(country: string):void
  {
    this.countries = [];
    if(country)
      this.countriesService.searchByCountry(country)
                            .subscribe(countries =>
                            {
                                this.countries = countries;
                            });
  }

}
