import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRating } from './star-rating/star-rating';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  imports: [
    CommonModule,
    StarRating,
    NgbModule
  ],
  exports:[
    StarRating
  ]
})
export class FeatureModule { }
