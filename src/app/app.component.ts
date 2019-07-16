import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /* Date mis à jour */
  lastUpdate = new Date();

    /* Article en lui même */
  article = [
    {
      title: 'Les Chouettes',
      content: 'De la famille des Strigidaes, les chouettes sont des rapaces dit nocturnes. Vivant en solitaire la plupart du temps. Parmi eux on compte les chevêches qui sont plus petites que les autres chouettes. Contrairement aux hiboux, ils n\'ont pas d\'aigrettes sur la tête.' ,
      loveIts: 0,
      createdat: '16/07/2019'
    },
    {
      title: 'Les Hiboux',
      content: 'On peut dire qu\il y a de la discimination entre les deux espèces. En effet, on utilise le terme "hibou" pour désigner de façon général une partie des différentes espèces de rapaces classés dans la famille des Strigidés. Même en biologie il a un sens ambigü à cause de ce fait.',
      loveIts: 0,
      createdat: '12/07/2019'
    },
    {
      title: 'Les Rapaces',
      content: 'Utilisé pour désigner un oiseau carnivore. Ils ont comme caractéristiques d\'avoir un bec crochu et tranchant, ainsi que des serres. Il y a les rapaces diurnes et ceux nocturnes. C\'est-à-Direct, ceux qui vivent le jour et ceux qui vivent la nuit. Les rapaces diurnes comprennent cinq sous-familles: Falconidae, Cathartidae, Pandionidae, Accipitridae et Sagittariidae. Les nocturnes en ont que deux qui sont les Tytonidae et les Strigidae.',
      loveIts: 0,
      createdat: '05/07/2019'
    }
  ];
}
