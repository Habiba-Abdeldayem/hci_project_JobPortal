import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrl: './edit-user-profile.component.css'
})
export class EditUserProfileComponent {
  userName: string = '';
  userAge: number | null = null;
  userEmail: string = '';
  userPhoneNumber: string = '';
  userDepartment: string = '';
  userInterests: string = '';
  userPhotoUrl: string = '../../assets/images/login_user.jpg';


  // constructor(private userService: UserService) {}

  saveProfile(): void {
  //   // Call user service to save profile changes
  //   this.userService.saveUserProfile({
  //     name: this.userName,
  //     age: this.userAge,
  //     email: this.userEmail,
  //     phoneNumber: this.userPhoneNumber,
  //     department: this.userDepartment,
  //     interests: this.userInterests,
  //     // Add other user properties
  //   }).subscribe(() => {
  //     console.log('Profile updated successfully');
  //   }, error => {
  //     console.error('Error updating profile:', error);
  //   });
  }
}
