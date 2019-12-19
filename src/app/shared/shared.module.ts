import { NgModule } from '@angular/core';
import { PagesComponent } from '../pages/pages.component';

import { NotpagefoundComponent } from './notpagefound/notpagefound.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';


@NgModule({
    declarations: [
        NotpagefoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent
    ],
    exports: [
        NotpagefoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NotpagefoundComponent
    ]
})
export class SharedModule {}
