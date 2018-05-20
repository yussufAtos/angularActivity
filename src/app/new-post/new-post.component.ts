import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Router } from '@angular/router';
import { Post } from '../models/post';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

constructor(private postService: PostService,private router: Router) { }

  ngOnInit() {}

onSubmit(form: NgForm) {
    const titre = form.value['titre'];
    const contenu = form.value['contenu'];
 
    const newPost = new Post(titre,contenu);
    this.postService.addPost(newPost);
    this.router.navigate(['/posts']);
  }

}
