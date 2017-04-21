 import { Injectable }    from '@angular/core';
   import { Headers, Http } from '@angular/http';
  import 'rxjs/add/operator/toPromise';
  import { Hero } from './hero';
  
  @Injectable()
  export class HeroService {
    
    private headers = new Headers({'Content-Type': 'application/json'});
    private HeroUrl = 'hero.json';  
  
    constructor(private http: Http) { }
    getHero(): Promise<Hero[]> {
      return this.http.get(this.HeroUrl)
                 .toPromise()
                 .then(response => response.json().data as Hero[])
                 .catch(this.handleError);
    }
    getHero(id: number): Promise<Hero> {
      const url = `${this.HeroUrl}/${id}`;
      return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Hero)
        .catch(this.handleError);
    }
  
    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); 
      return Promise.reject(error.message || error);
    }