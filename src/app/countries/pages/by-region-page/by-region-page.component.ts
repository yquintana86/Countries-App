import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/country.service';


type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public countries: Country[] = [];
  regions: Region[] = ['Africa', 'Americas' , 'Asia' , 'Europe' , 'Oceania'];
  public selectedRegion?:Region;

  constructor(private countriesService: CountriesService)
  {}

  searchByRegion(region: Region):void
  {
    this.countries = [];
    this.selectedRegion = region;
    if(region)
      this.countriesService.searchByRegion(region.toString())
                            .subscribe(countries =>
                            {
                                this.countries = countries;
                            });
  }
}
