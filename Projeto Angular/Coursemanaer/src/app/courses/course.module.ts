import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CoursesinfoComponent } from "./courses-info.component";
import { CourseListComponent } from "./cousesList.component";
import { CommonModule } from "@angular/common";
import { StarModule } from "../shared/component/star/star.module";
import { AppPipeModule } from "../shared/pipe/app-pipe.module";

@NgModule({

    declarations: [
        CourseListComponent,
        CoursesinfoComponent
    ], imports: [
        CommonModule,
        FormsModule,
        StarModule,
        AppPipeModule,
        
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponent
              },
              {
                path: 'courses/info/:id', component: CoursesinfoComponent
              },
        ])
    ]
})
export class CourseModule {

}