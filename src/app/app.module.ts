import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignupComponent } from './signup/signup.component';
import { PostJobComponent } from './post-job/post-job.component';
import { ApplyForJobComponent } from './apply-for-job/apply-for-job.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouterModule } from '@angular/router';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';




@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignupComponent,
    PostJobComponent,
    ApplyForJobComponent,
    JobDetailsComponent,
    UserProfileComponent,
    EditUserProfileComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    MatSlideToggleModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
