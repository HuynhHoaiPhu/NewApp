import { Component, ErrorHandler, Input, VERSION } from "@angular/core";
import { CommonService } from "../Services/common.service";
@Component({
    selector: 'app-hello',
    templateUrl:'./hello.component.html', 
    styleUrls: ['./hello.component.css']
})
export class HelloComponent {
        public ageservice;
    user = {
        name: "Tiep Phan",
        age: 30,
    };

    categories = {
        vegetable: ["salad","spinach"],
        fruit: ["tomato", "apple","orange",]
    }
    handler() {
        console.log("click me");
        prompt("Profestional");
    }

    author =[ 
    {
        id: 1,
        authorname: "Phu",
        authordate: "07/05/2001",
        author_address: "An Truyen, PA, VA",
        gender: "male"
    },
    {
        id: 2,
        authorname: "Nga",
        authordate: "08/09/2001",
        author_address: "An Truyen, PA, VA",
        gender: "female"
    }
    ]
    isDanger = false;
    isWarning = false;
    isSpecial = true;
    lame = "Angular" + VERSION.major;
    constructor(private common: CommonService) {
        this.ageservice = common.age
    }
    IncreaseAge() {
        this.common.age++;
        this.ageservice = this.common.age;
        
      }
    Descrease() {
        this.common.age--;
        this.ageservice = this.common.age;
        
      }
}

