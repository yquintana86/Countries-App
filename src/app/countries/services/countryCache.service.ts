import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country.interface';
import { Countriescache, RegionCountries, TermCountries } from '../interfaces/countriesCache.interface';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root'
})
export class CountryCacheService {

constructor() { }

private cache: Countriescache = {};

get ByCountries() : TermCountries | undefined
{
  return this.cache.ByCountries;
}

get ByCapital() : TermCountries | undefined
{
  return this.cache.ByCapital;
}

get ByRegion() : RegionCountries | undefined
{
  return this.cache.ByRegion;
}

updateCacheByRegion(searchRegion?: Region, countries:Country[] = []) : void
{
  if(!searchRegion)
  {
    this.cache.ByRegion = undefined;
    return;
  }

  this.cache.ByRegion = {searchRegion:searchRegion!, countries:countries };
}

updateCacheByCountries(searchTerm?: string, countries:Country[] = []) : void
{
  if(!searchTerm)
  {
    this.cache.ByCountries = undefined;
    return;
  }

  this.cache.ByCountries = {searchTerm: searchTerm!, countries: countries}
}

updateCacheByCapital(searchTerm?: string, countries:Country[] = []) : void
{
  if(!searchTerm)
  {
    this.cache.ByCapital = undefined;
    return;
  }

  this.cache.ByCapital = { searchTerm: searchTerm!, countries: countries};
}

}
