import { Component, OnInit, Input } from '@angular/core';
import { RandommUserService } from '../randomm-user.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showFiller = false;
  user: any;
  gender: string;
  name: string;
  location: string;
  picture: string;
  age: string;

  loading = true;
  id: string = "";

  constructor(protected randomUserServcie: RandommUserService,private router: Router, private parameterRoute:ActivatedRoute) {
    this.user = "";
    this.gender = "";
    this.name = "";
    this.location = "";
    this.picture = "";
    this.age = "";
    parameterRoute.params.subscribe(
      params => {
        this.id = params['id'];
        window.history.replaceState({}, document.title, "/Home/" + "");
      }
    );
  }

  ngOnInit() {
    if (this.id == localStorage.getItem("pass")){
      this.makeRequest(0);
    } else{
      this.router.navigate(['./Login']);
    }
  }

  makeRequest(type: number) {
    this.randomUserServcie.getRandomPerson().subscribe(response => {
      this.user = response.results;
      this.gender = this.user[0].gender.toUpperCase();
      this.location = this.user[0].nat;
      this.picture = this.user[0].picture.large;
      this.name = this.user[0].name.first.toUpperCase();
      this.age = this.user[0].registered.age;
      this.loading = false;
    });
    if (type == 1){
      alert("No Match");
    } else if (type == 2) { 
      alert("Match");
    }
  }

  Editar(){
    this.router.navigate(['./Edit']);
  }

  Cerrar(){
    localStorage.setItem('email', "");
    localStorage.setItem('pass', "");
    this.router.navigate(['./Login']);
  }

}
