import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModuleModule } from '../forms-module/forms-module.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, FormsModuleModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, FormsModuleModule, RouterModule],
})
export class SharedModule {}
