import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PROFILE_DATA } from './profile.data';
import { ProfileData } from './profile.models';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  getProfile(): Observable<ProfileData> {
    // Plus tard : on remplacera ce "of" par un appel HTTP vers l'API Spring Boot
    return of(PROFILE_DATA);
  }
}
