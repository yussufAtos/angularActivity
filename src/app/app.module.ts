import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
/*import { HttpModule } from '@angular/http';*/
import { PostService } from './service/post.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { NewPostComponent } from './new-post/new-post.component';
import { Routes ,RouterModule} from '@angular/router';
import { PostViewComponent } from './post-view/post-view.component';

const appRoutes: Routes = [
{ path: 'posts',  component: PostViewComponent },
 { path: '',  component: PostViewComponent },
  { path: 'new',  component: NewPostComponent } 

];



@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
    PostViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    /*HttpModule,*/
     HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
