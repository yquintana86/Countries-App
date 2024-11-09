
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, Observable, of } from 'rxjs';

import { Country } from './../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})

export class CountriesService {

baseUrl: string = 'https://restcountries.com/v3.1';


  constructor(private httpClient: HttpClient) { }


  private getCountriesbyRequest(url: string) : Observable<Country[]>
  {
      return this.httpClient.get<Country[]>(url)
                            .pipe(
                              catchError( error => of([]))
                            );
  }

  searchByCapital(searchCapital:string):Observable<Country[]>{
      const uri = `${this.baseUrl}/capital/${searchCapital}`;
      return this.getCountriesbyRequest(uri);
  }

  searchByCountry(searchCountry: string) : Observable<Country[]>{
      const uri = `${this.baseUrl}/name/${searchCountry}`;
      return this.getCountriesbyRequest(uri);
  }


  searchByRegion(searchRegion: string) : Observable<Country[]>{
      const uri = `${this.baseUrl}/region/${searchRegion}`;
      return this.getCountriesbyRequest(uri);
  }

  searchByAlphaCode(alphaCode: string) : Observable<Country[]>{
    const uri = `${this.baseUrl}/alpha/${alphaCode}`;
    return this.getCountriesbyRequest(uri);
}
}
