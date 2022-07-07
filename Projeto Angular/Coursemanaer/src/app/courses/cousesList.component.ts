import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './cousesList.component.html'
})

export class CourseListComponent implements OnInit {

    _courses: Course[] = [];
    _filteredCourses: Course[] = [];
    _filterBy: string = '';

    constructor(private courseService: CourseService) { }

    ngOnInit(): void {
        this.retrieveAll();
    }

    retrieveAll(): void {
        this.courseService.retriveAll().subscribe({
            next: courses => {
                this._courses = courses;
                this._filteredCourses = this._courses;
            },
            error: err => console.log('Error', err)
        })
    }

    deleteById(courseId: number): void {
        this.courseService.deleteById(courseId).subscribe({
            next: ()=> {
                console.log('Deleted with sucesses');
                this.retrieveAll();
            },
            error: err => console.log('error', err)
        })
    }


    set filter(value: string) {
        this._filterBy = value;
        this._filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() {
        return this._filterBy;
    }

}

