import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/country.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {


  public countries: Country[] = [];

  constructor(private countriesService: CountriesService)
  {}

  searchByRegion(region: string):void
  {
    this.countries = [];
    if(region)
      this.countriesService.searchByRegion(region)
                            .subscribe(countries =>
                            {
                                this.countries = countries;
                            });
  }
}
