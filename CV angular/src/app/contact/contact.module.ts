import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
	declarations: [
		ContactComponent,
		
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		HttpClientModule,
		NoopAnimationsModule,
		MatInputModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [ContactComponent]
})
export class AppModule { }