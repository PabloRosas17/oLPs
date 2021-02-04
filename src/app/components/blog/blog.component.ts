import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Article } from '../../core/entities/article';
import { ArticleService } from '../../core/services/article.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnDestroy {
  article: Article[] = [];
  bloglength = 0;
  counter = 0;

  constructor(private articleservice: ArticleService) {}

  ngOnInit() {
    this.getAllDrupalArticles();
  }

  ngOnDestroy() {
  }

  @HostListener("window:scroll", ["$event"]) scroll() {
    let element = document.documentElement;
    let temp = document.getElementById('navable');
    if (element.scrollTop >= 50) {
      temp.classList.remove('navbar-opaque');
      temp.classList.add('navbar-default');
    }
    if (element.scrollTop < 50) {
      temp.classList.remove('navbar-default');
      temp.classList.add('navbar-opaque');
    }
  }

  getAllDrupalArticles() {
      this.articleservice.getAllArticles().subscribe(r => {
        this.bloglength = r.length;
        this.article.length = r.length;
        this.article = r;
        this.article.forEach( (values, index) => {
            this.article[index].body = values.body;
            this.article[index].created = values.created;
            this.article[index].title = values.title.replace(new RegExp(`^(.{${2}})(.)`)
                , `$1${' style="color:#e8aeb7; text-decoration: none;"'}$2`);
            this.article[index].uid = values.uid;
        });
    });
  }

  getCertainDrupalArticles(){
      this.articleservice.getCertainArticles(this.counter).subscribe(r => {
        this.article.length = r.length;
        this.article = r;
        this.article.forEach( (values, index) => {
            this.article[index].body = values.body;
            this.article[index].created = values.created;
            this.article[index].title = values.title.replace(new RegExp(`^(.{${2}})(.)`)
                , `$1${' style="color:#e8aeb7; text-decoration: none;"'}$2`);
            this.article[index].uid = values.uid;
        });
    });
  }

  fireOlder() {
      if (this.counter < this.bloglength){
        this.counter++;
      }
      if (this.counter <= this.bloglength){
        this.getCertainDrupalArticles();
      }
  }

  fireNewer() {
      if (this.counter > 0){
        this.counter--;
      }
      if (this.counter >= 0){
        this.getCertainDrupalArticles();
      }
  }

}
