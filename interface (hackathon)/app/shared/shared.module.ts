import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ToolbarComponent } from './toolbar/index';
import { NavbarComponent } from './navbar/index';
import { PeopleComponent } from './people/index';
import { HistoryComponent } from './history/index';
import { PingsComponent } from './pings/index';
import { NameListService } from './name-list/index';
import { HistoryListService } from './history-list/index';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ToolbarComponent, NavbarComponent, PeopleComponent, HistoryComponent, PingsComponent],
  exports: [ToolbarComponent, NavbarComponent, PeopleComponent, HistoryComponent, PingsComponent,
    CommonModule, FormsModule, RouterModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NameListService, HistoryListService]
    };
  }
}
