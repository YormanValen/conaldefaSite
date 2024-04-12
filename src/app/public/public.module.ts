import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperComponent } from './swiper/swiper.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [SwiperComponent, HomeComponent],
  imports: [CommonModule],
  exports: [SwiperComponent, HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PublicModule {}
