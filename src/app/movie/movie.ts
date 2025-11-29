import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Header } from "../header/header";
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FeatureModule } from "../feature/feature-module";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [Header, FeatureModule, CommonModule],
  templateUrl: './movie.html',
  styleUrls: ['./movie.scss']
})
export class Movie implements OnInit {
  type = '';
  id = '';
  url = '';
  movies: any;
  movie: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];

    if (this.type === 'trending') {
      this.url = '/assets/data/trending-movies.json';
    }
    if (this.type === 'theatre') {
      this.url = '/assets/data/theatre-movies.json';
    }
    if (this.type === 'popular') {
      this.url = '/assets/data/popular-movies.json';
    }

    this.getMovie();
  }

  getMovie() {
    this.http.get<any[]>(this.url).subscribe((movies: any[]) => {
      this.movies = movies;
      let index = this.movies.findIndex((movie: { id: string; }) => movie.id == this.id);

      if (index > -1) {
        this.movie = this.movies[index];
      }
      this.cdr.detectChanges();
    });
  }
}

