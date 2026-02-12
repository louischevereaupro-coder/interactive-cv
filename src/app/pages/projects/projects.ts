import { Component } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ProfileService } from '../../core/profile.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  profile$!: ReturnType<ProfileService['getProfile']>;

  constructor(private profileService: ProfileService) {
    this.profile$ = this.profileService.getProfile();
  }
}
