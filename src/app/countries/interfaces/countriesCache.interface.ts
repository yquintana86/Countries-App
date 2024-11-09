import { Country } from "./country.interface";
import { Region } from "./region.type";

export interface Countriescache
{
  ByCapital?: TermCountries;
  ByCountries?:TermCountries;
  ByRegion?: RegionCountries;
}

export interface TermCountries
{
  searchTerm: string;
  countries: Country[];
}

export interface RegionCountries
{
  searchRegion: Region;
  countries: Country[];
}
