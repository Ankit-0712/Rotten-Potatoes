import { Component, Input, OnInit } from '@angular/core';
import { NgbRating } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-star-rating',
  imports: [NgbRating],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.scss'
})
export class StarRating implements OnInit {

  @Input() rating : any;
  @Input() isReadOnly : boolean = false;


  constructor(){}

  ngOnInit(): void {
      
  }

}
