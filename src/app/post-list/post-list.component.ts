import { Component ,Input} from '@angular/core';
import { Post } from '../post'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  @Input() 
  listPost: Array<Post>;

  constructor() { }
}
