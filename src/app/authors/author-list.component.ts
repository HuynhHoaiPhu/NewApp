import { Component, OnInit } from '@angular/core';
import { Author, author } from './author.model';

@Component({
  selector: 'author-list',
  template: ` 
   <author-details *ngFor="let author of authors" [author]="author"
   (select)="onSelected($event)"
   (delete)="onDeleted($event)"
   ></author-details>
   <br>
   <div>
    Current Selected Author: {{currentauthor?.firstName}} {{currentauthor?.lastName}}
   </div>

  `,
})
export class AuthorListComponent  {
authors = author;
currentauthor = author[0];

onSelected(selectedAuthor: Author) {
    this.currentauthor = selectedAuthor;
}
onDeleted(id: number) {
  this.authors = this.authors.filter(author => {
    return author.id != id;
  });
  if(this.currentauthor.id == id) {
    this.currentauthor = this.authors[0];
  }
}
}