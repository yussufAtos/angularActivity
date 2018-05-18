import { Component,Input } from '@angular/core';
import { Post } from '../post'

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent {  
  @Input() 
  post: Post;

  constructor() {}

  compterYes(): void {
  	this.post.loveIts++;
  }

  compterNo(): void {
  	this.post.loveIts--;
  }

  getColor(): string {
    if (this.post.loveIts >0) {
      return 'green';
    } else if(this.post.loveIts<0 ) {
    return 'red';
  }
}






}
