import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

// Component
import { CourseListComponent } from "./components/course-list.component";

// Service
import { CourseService } from './services/course.service';

// Routing
import { StudyHttpRoutingModule } from './study-http-routing.module';



@NgModule({
	imports: [
		StudyHttpRoutingModule,
    HttpModule,
    CommonModule
	],
	declarations: [
		CourseListComponent,
	],
	providers: 	[ CourseService],
})

export class StudyHttpModule { }


