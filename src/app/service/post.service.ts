import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {

text: string = 'Aux débuts du développement web, seul le HTML permet de créer des sites. Les sites web en 1990 ressemblent à des documents texte,';
private	posts: Array<Post> = [
		new Post("Mon premier post", this.text),
		new Post("Mon deuxième post", this.text),
		new Post("Mon troisième post", this.text)
	];

postsSubject = new Subject<Post[]>();

  
constructor(private httpClient: HttpClient) { }

emitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }

savePosts() {
    this.httpClient
      .put('https://angularprooject.firebaseio.com/posts.json', this.posts)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}


addPost(post: Post) {
    this.posts.push(post);
    this.savePosts();
    this.emitPostSubject(); 
  }

  deletePost(i:number){
    console.log(this.posts[i].loveIts)
    this.posts.splice(i,1);
    this.savePosts();
    this.emitPostSubject();
  }  

}
