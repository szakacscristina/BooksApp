import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';

import { AngularMaterialModule } from './shared/angular-material.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegistrationComponent },

    { path: 'books', loadChildren: './books/books.module#BooksModule' },

    { path: 'reviews', loadChildren: './reviews/reviews.module#ReviewsModule' },

    { path: 'fetch-data/:bookId', loadChildren: './books/books.module#BooksModule' },

    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'counter', component: CounterComponent },
    { path: 'fetch-data', component: FetchDataComponent },
    { path: 'fetch-data/:bookId', component: BookDetailsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
        BookDetailsComponent,
        RegistrationComponent,
        LoginComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
      BrowserAnimationsModule,
      AngularMaterialModule,
      CoreModule
    ],
    exports: [AngularMaterialModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
