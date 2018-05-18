import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {

	constructor() {}

	text: string = 'Aux débuts du développement web, seul le HTML permet de créer des sites. Les sites web en 1990 ressemblent à des documents texte,';
	posts: Array<Post> = [
		new Post("Mon premier post", this.text),
		new Post("Mon deuxième post", this.text),
		new Post("Mon troisième post", this.text)
	];
}
