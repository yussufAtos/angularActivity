import { Component,Input ,OnInit} from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../service/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {  
  
 @Input() 
  index:number;
  @Input() 
  post: Post;


constructor(private postService: PostService ,private router: Router) { }

ngOnInit() {}

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

onDelete(){
  this.postService.deletePost(this.index);
  this.router.navigate(['/posts']);
  }

}
