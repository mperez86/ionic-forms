import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoadingFeedbackComponent } from './loading-feedback/loading-feedback.component';
import { ExpandableContentComponent } from './expandable-content/expandable-content.component';

@NgModule({
  declarations: [
    LoadingFeedbackComponent,
    ExpandableContentComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LoadingFeedbackComponent,
    ExpandableContentComponent
  ]
})
export class ComponentsModule { }
