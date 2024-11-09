import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountriesService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
import { CountryCacheService } from '../../services/countryCache.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit, OnDestroy {

  public countries: Country[] = [];
  public lastSearchTermUsed: string = '';

  constructor(private countriesService: CountriesService,
              private countryCacheService: CountryCacheService)
  {}

  ngOnInit(): void {
    const cache = this.countryCacheService.ByCountries;
    if(cache)
    {
        this.countries = cache.countries;
        this.lastSearchTermUsed = cache.searchTerm;
    }
  }
  ngOnDestroy(): void {
    this.countryCacheService.updateCacheByCountries(this.lastSearchTermUsed, [...this.countries]);
  }

  searchByCountry(country: string):void
  {
    this.lastSearchTermUsed = country;
    if(country)
      this.countriesService.searchByCountry(country)
                            .subscribe(countries =>
                            {
                                this.countries = countries;
                            });
  }

}
