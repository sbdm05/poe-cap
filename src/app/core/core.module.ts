import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { IconsModule } from '../icons/icons.module';
import { RouterModule } from '@angular/router';
import { TemplatesModule } from '../templates/templates.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, NavComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [UiModule, HeaderComponent, NavComponent, FooterComponent,
  IconsModule],
})
export class CoreModule {}
