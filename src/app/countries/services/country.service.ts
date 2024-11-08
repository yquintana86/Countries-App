
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

  searchByCapital(searchCapital:string):Observable<Country[]>{
      const url = `${this.baseUrl}/capital/${searchCapital}`;
      return this.httpClient.get<Country[]>(url)
                    .pipe(
                      catchError(error => of([]))
                    );
  }

  searchByCountry(searchCountry: string) : Observable<Country[]>{
      const country = `${this.baseUrl}/name/${searchCountry}`;
      return this.httpClient.get<Country[]>(country)
                              .pipe(
                                catchError(error => of([]))
                              );
  }


  searchByRegion(searchRegion: string) : Observable<Country[]>{
      const region = `${this.baseUrl}/region/${searchRegion}`;
      return this.httpClient.get<Country[]>(region)
                            .pipe(
                              catchError(error => of([]))
                            );
  }

  searchByAlphaCode(alphaCode: string) : Observable<Country[]>{
    const uri = `${this.baseUrl}/alpha/${alphaCode}`;
    return this.httpClient.get<Country[]>(uri)
                          .pipe(
                            catchError(error => of([]))
                          );
}
}
