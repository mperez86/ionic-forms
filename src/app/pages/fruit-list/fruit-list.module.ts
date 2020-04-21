import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FruitListPageRoutingModule } from './fruit-list-routing.module';

import { FruitListPage } from './fruit-list.page';
import { FruitsService } from 'src/app/services/fruits.service';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FruitListPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FruitListPage],
  providers: [FruitsService]
})
export class FruitListPageModule {}
