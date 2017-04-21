 import { Component } from '@angular/core';
 import { Hero } from './hero';
 
 
  const HEROES: Hero[] = [
       { id: 1, name: 'Messi' },
       { id: 2, name: 'Suarez' },
       { id: 3, name: 'Neymar' },
       { id: 4, name: 'Iniesta' },
       { id: 5, name: 'Busquets' },
       { id: 6, name: 'Robben' },
       { id: 7, name: 'Pogba' },
       { id: 8, name: 'Dr.Pecock' },
       { id: 9, name: 'Roguu' },
       { id: 10, name: 'PNL' }
     ];
 
 @Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
 })
 export class AppComponent {
   title = 'Tour of heros';
 onSelect(hero: Hero): void 
 {this.selectedHero = hero;};
  selectedHero: Hero;
  heroes = HEROES;
  hero : Hero ={
     id:1 ,
     name:'details!' 
     
   }
   };
