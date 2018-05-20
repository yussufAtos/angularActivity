/**
* La classe Post
*/
export class Post {
  loveIts: number;
  created_at: Date;

  constructor(public title: string, public content: string) {
    this.title = title;
    this.content = content;
    this.created_at = new Date();
    this.loveIts = 0;
  }
}
