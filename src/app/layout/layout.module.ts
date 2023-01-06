import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { RepeatDirective } from '../directive/repeat.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    FooterComponent,
    RepeatDirective,
  ],
  imports: [CommonModule],
  exports: [HeaderComponent, MainComponent, FooterComponent],
})
export class LayoutModule {}
