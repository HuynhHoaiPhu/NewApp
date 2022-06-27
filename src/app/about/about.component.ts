import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  /* public age; */
  /* public name = '';
  public age = "";
  public id = ""; 
  public title = "";
  public author = "";
  public posts: any[]=[];
  public comments = ""; */
  constructor(private common: CommonService,
              private serverHttp: HttpServerService) {
    /* this.age = common.age; */
   }

  /* IncreaseAge() {
    this.common.age++;
    this.age = this.common.age;
    
  }
  Descrease() {
    this.common.age--;
    this.age = this.common.age;
    
  } */
  ngOnInit(): void {
    /* this.serverHttp.getProfile().subscribe((data) =>{
        console.log("profiles", data);
        this.name = data.name;
        this.age = data.age;
    }); */
    /* this.serverHttp.getPosts().subscribe((data) =>{
      console.log("posts", data); */
     /*  this.id = data.id;
      this.title = data.title;
      this.author = data.author; */
      /* this.posts = data;
  }); */

  /* this.serverHttp.getComments().subscribe((data) =>{
    console.log("comments", data);
    this.comments = data;
});
  } */
  /* public addPosts() {
    const newData = {title : "testing", author: "new author"};
    this.serverHttp.addPosts(newData).subscribe((data) =>{
      console.log("addPosts", data);
      this.posts.push(data);
  }) */
}

} 
