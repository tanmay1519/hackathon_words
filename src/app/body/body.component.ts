import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  allCapital:string="";
  reverse:string="";
  capitalPrep:string=""
  constructor() { }
  public first  (val:string) {
    let splitted = val.split(" ")
    let output :string ="" ;
    for (let i=0;i<splitted.length;i++){
     if (splitted[i].length>0) {let x = splitted[i][0];
      let y = splitted[i].slice(1);
      x=x.toUpperCase()
      output= output + (x+y) + " "
}

    }
    console.log(output)
    this.allCapital=output
  }
  public second (val:string)
  {
    val = val.toLowerCase()
    let  newval:string="";
    for (let i=val.length-1;i>=0;i--){
newval+=val[i];
    }
    this.reverse=newval

  }
  public third  (val:string) {
    let splitted = val.split(" ")
    let preposition = ["of","the","in","on"]
    let output :string ="" ;
    for (let i=0;i<splitted.length;i++){
      if (!preposition.includes(splitted[i]))
    { if (splitted[i].length>0) {let x = splitted[i][0];
      let y = splitted[i].slice(1);
      x=x.toUpperCase()
      output= output + (x+y) + " "
}}
else {
  output+=splitted[i]+" " 
}

    }
    console.log(output)
    this.capitalPrep=output
  }


  ngOnInit(): void {
  }

}
