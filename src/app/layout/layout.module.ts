import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { KnowledgeModule } from '../knowledge/knowledge.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { LayoutComponent } from './layout/layout.component'

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    DashboardModule,
    KnowledgeModule
  ]
})
export class LayoutModule { }
