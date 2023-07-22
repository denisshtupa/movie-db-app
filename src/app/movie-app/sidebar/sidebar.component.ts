import { Component } from '@angular/core';
import { INavItem } from 'src/app/shared/interfaces/general.interfaces';
import { genresList, topGenresList } from 'src/app/shared/utils/constants';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  public topGenresList: INavItem[] = topGenresList;
  public genresList: INavItem[] = genresList;
}
