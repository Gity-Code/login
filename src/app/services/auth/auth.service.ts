import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRouteSnapshot, Router, NavigationExtras } from '@angular/router';
// import { User } from '../../models/user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public _currentUser: any;
  private navigationExtras!: NavigationExtras;

  constructor(private router: Router, private http: HttpClient) {
      // this.currentUser$ = new BehaviorSubject<any>(JSON.parse(localStorage.getItem(constant.currentUser)!));
  }

  async getCurrentUser(): Promise<any> {
    if (!this._currentUser) {
      // this._currentUser = await this.login();
    }
    // need setPermissions
    return this._currentUser;
  }

  public isLogged() {
    return this.getCurrentUser().then(value => {
      return value ? true : false;
    });
  }

  public login( email: any) {
    console.log('signIn' , email); 
    debugger;
    return this.http.get<any>(`${environment.apiUrl}/users/login/${email}`,
    
    ).pipe(map(user => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUser$.next(user);
      return true;
    }))
  }


  public logout() {
    localStorage.removeItem('currentUser');
    this.currentUser$.next(null as any);
  }

 


}
