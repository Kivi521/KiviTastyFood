import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodDetailGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    //ActivatedRouteSnapshot prameter to provide current route information 
    route: ActivatedRouteSnapshot,
    // RouterStateSnapshot to provde router state information
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //check the route URL and ensure that the ID passed in is valid
    const id = Number(route.paramMap.get("id"));
    if (isNaN(id) || id<1){
      alert('Oops! Invalid food id, try it again!');
      this.router.navigate(['/food']);
      return false;
    }
      return true;
  }
  
}
