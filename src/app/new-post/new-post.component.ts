import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Router } from '@angular/router';
import { Post } from '../models/post';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators} from '@angular/forms';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private postService: PostService,
              private router: Router) { }

ngOnInit() {
    this.initForm();
   }

   initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
 });
}

  onSubmitForm() {
    const formValue = this.postForm.value;
    const newPost = new Post(
      formValue['title'],
      formValue['content']
    );
    this.postService.addPost(newPost);
    this.router.navigate(['/posts']);
  }


}
