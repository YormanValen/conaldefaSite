import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModuleModule } from '../forms-module/forms-module.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, FormsModuleModule],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule {}
