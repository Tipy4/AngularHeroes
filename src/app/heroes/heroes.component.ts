import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Hero } from '../hero';
import {HEROES} from '../mock-heroes';
import {NgFor, NgIf} from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [ NgFor, NgIf, FormsModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  constructor() {
    console.log('Герои загружены:', this.heroes);
  }
  
  onSelect(hero: Hero): void {
    console.log('Выбран герой:', hero);
    this.selectedHero = hero;
  }
}
