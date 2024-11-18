import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
 @Input('userId') userId:string='';
 @Input('userName') userName:string='';
 @Input('userAvatar') userAvatar:string='';

 get imagePath()
 {
  return 'assets/users/' + this.userAvatar;
 }
}
