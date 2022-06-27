import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Author } from './author.model';


@Component({
  selector: 'author-details',
  template: `
  <div *ngIf="author">
  {{author.firstName}} {{author.lastName}}
  <button style="margin-left: lrem" (click)="select.emit(author)">Select</button>
  <button style="margin-left: lrem" (click)="delete.emit(author.id)">x</button>
  </div>
  `
})
export class AuthorDetailsComponent {
    @Input() author?: Author;
    @Output() select = new EventEmitter<Author>();
    @Output() delete = new EventEmitter<number>();
}