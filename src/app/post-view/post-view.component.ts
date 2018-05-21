import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../models/post';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {
 posts:Post[];
 postSubscription: Subscription;

 constructor(private postService: PostService) { }

ngOnInit() {
this.postSubscription = this.postService.postsSubject.subscribe(
      (mesPosts: Post[]) => {
        this.posts = mesPosts;
        }
    );
    this.postService.emitPostSubject();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}
