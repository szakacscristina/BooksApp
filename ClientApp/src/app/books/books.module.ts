import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';
import { AngularMaterialModule } from '../shared/angular-material.module';

import { BooksRoutingModule } from './books-routing.module';

import { BooksService } from './books.service';

@NgModule({
    declarations: [BooksRoutingModule.routedComponents],
    imports: [
        CommonModule,
        BooksRoutingModule,
        AngularMaterialModule,
        CoreModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [BooksService],
})
export class BooksModule { }
