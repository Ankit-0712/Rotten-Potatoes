import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Header } from "../header/header";
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgbRatingModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, CommonModule, NgbRatingModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit {
  trendingMovies: any[] = [];

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getTrendingMovies();
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

  // ✅ required by ngb-rating
  ariaValueText(current: number, max: number): string {
    return `${current} out of ${max}`;
  }
}
