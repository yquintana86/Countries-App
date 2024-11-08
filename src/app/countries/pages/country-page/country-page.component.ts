import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'by-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  country?: Country ;

    constructor(private activatedRoute: ActivatedRoute,
                private countriesService: CountriesService,
                private router: Router){}

    ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) =>
      {
        this.searchById(id);
      });
  }

  searchById(code: string) : void
  {
    this.countriesService.searchByAlphaCode(code)
                          .subscribe(countries => {
                            if(countries.length > 0 )
                              this.country = countries[0];
                            else
                              this.router.navigateByUrl('');
                          });
  }





}
