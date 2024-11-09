import { Component, OnDestroy, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/country.service';
import { Region } from '../../interfaces/region.type';
import { Countriescache } from '../../interfaces/countriesCache.interface';
import { CountryCacheService } from '../../services/countryCache.service';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit, OnDestroy {

  public countries: Country[] = [];
  regions: Region[] = ['Africa', 'Americas' , 'Asia' , 'Europe' , 'Oceania'];
  public selectedRegion?:Region;

  constructor(private countriesService: CountriesService,
        	    private countryCacheService: CountryCacheService)
  {}

  ngOnInit(): void {
    const cache =  this.countryCacheService.ByRegion;
    if(cache)
    {
      this.countries = cache.countries;
      this.selectedRegion = cache.searchRegion;
    }
  }

  ngOnDestroy(): void {
    this.countryCacheService.updateCacheByRegion(this.selectedRegion,this.countries);
  }

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
