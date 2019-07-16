import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

    /* Importation pour les dépendances */
    @Input() postsName: string;
    @Input() postsContent: string;
    @Input() postsLoveIts: number;
    @Input() postsDate: string;

  constructor() { }

  ngOnInit() {
  }

  /* Love it / Don't love it */
  onLoveIts() {
    this.postsLoveIts++;
  }
  onDontLoveIts() {
    this.postsLoveIts--;
  }

    /* Couleur des blocs en fonction des love it / don't love it */
  getColor() {
    if(this.postsLoveIts > 0) {
      return '#7bc887';
    } else if(this.postsLoveIts < 0) {
      return '#b76a6a';
    }
  }

}
