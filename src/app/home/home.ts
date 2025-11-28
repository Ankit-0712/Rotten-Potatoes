import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Header } from "../header/header";
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgbRatingModule } from "@ng-bootstrap/ng-bootstrap";
import { FeatureModule } from "../feature/feature-module";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, CommonModule, NgbRatingModule, FeatureModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit {
  trendingMovies: any[] = [];
  theatreMovies: any[] = [];
  popularMovies: any[]  = [];

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef, private router : Router ) {}

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  }

  getTrendingMovies() {
    this.http.get('/assets/data/trending-movies.json').subscribe({
      next: (movies: any) => {
        // ✅ ensure movies is an array and rating is numeric
        this.trendingMovies = Array.isArray(movies)
          ? movies.map((m) => ({
              ...m,
              rating: Number(m.rating) || 0
            }))
          : [];
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to load trending movies', err);
      }
    });
  }

    getTheatreMovies() {
    this.http.get('/assets/data/theatre-movies.json').subscribe({
      next: (movies: any) => {
        // ✅ ensure movies is an array and rating is numeric
        this.theatreMovies = Array.isArray(movies)
          ? movies.map((m) => ({
              ...m,
              rating: Number(m.rating) || 0
            }))
          : [];
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to load theatre movies', err);
      }
    });
  }
    getPopularMovies() {
    this.http.get('/assets/data/popular-movies.json').subscribe({
      next: (movies: any) => {
        // ✅ ensure movies is an array and rating is numeric
        this.popularMovies = Array.isArray(movies)
          ? movies.map((m) => ({
              ...m,
              rating: Number(m.rating) || 0
            }))
          : [];
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to load popular movies', err);
      }
    });
  }
  

  // ✅ required by ngb-rating
  ariaValueText(current: number, max: number): string {
    return `${current} out of ${max}`;
  }

  goToMovie(type: string, id : string){
    this.router.navigate(['movie', type, id]);
    

  }
}
