import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountriesService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
import { CountryCacheService } from '../../services/countryCache.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ' '
})

export class ByCapitalPageComponent implements OnInit, OnDestroy {

  public countries: Country[] = [];
  public lastSearchTermUsed: string = '';

  constructor(private countriesService: CountriesService,
              private countryCacheService: CountryCacheService)
  {}

  ngOnInit(): void {
    const cache = this.countryCacheService.ByCapital;
    if(cache)
    {
      this.lastSearchTermUsed = cache.searchTerm;
      this.countries = cache.countries;
    }
  }

  ngOnDestroy(): void {
   this.countryCacheService.updateCacheByCapital(this.lastSearchTermUsed, [...this.countries]);
  }

  searchByCapital(capital: string):void
  {
    this.lastSearchTermUsed = capital;
    if(capital)
    {
      this.countriesService.searchByCapital(capital)
                            .subscribe(countries =>
                            {
                                this.countries = countries;
                            });
    }
  }

}
