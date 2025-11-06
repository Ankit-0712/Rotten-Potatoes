import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Header } from "../header/header";
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, CommonModule],
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
        this.trendingMovies = Array.isArray(movies) ? movies : [];
        console.log(this.trendingMovies);
        this.cdr.detectChanges(); // 👈 tell Angular to refresh the UI
      },
      error: (err) => {
        console.error('Failed to load trending movies', err);
      }
    });
  }
}
