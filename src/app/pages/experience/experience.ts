import { Component } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ProfileService } from '../../core/profile.service';
import { ProfileData } from '../../core/profile.models';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceComponent {

  experiences$!: ReturnType<ProfileService['getProfile']>;

  constructor(private profileService: ProfileService) {
    this.experiences$ = this.profileService.getProfile();
  }
}
