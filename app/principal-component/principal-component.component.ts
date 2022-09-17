import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-principal-component',
  templateUrl: './principal-component.component.html',
  styleUrls: ['./principal-component.component.scss']
})
export class PrincipalComponentComponent implements OnInit {

  @ViewChildren('inputTag') inputElem: ElementRef | undefined;

  firstFC = new FormControl('');
  secondFC = new FormControl('');
  inputtingText = false;
  redText = "";
  greenText = "";
  finished = false;
  constructor() { }

  ngOnInit(): void {
    this.firstFC.valueChanges.subscribe(_ => {
      this.onTextChange()
    })
    this.secondFC.valueChanges.subscribe(_ => {
      this.onTextChange()
    })
  }


  onTextChange() {
    var len_second_string = this.secondFC.value.length
    var len_first_string = this.firstFC.value.length
    let i;
    this.greenText = "";
    this.redText = "";
    for(i=0; i < len_first_string; i++){
      if(i < len_second_string && this.firstFC.value[i]==this.secondFC.value[i]){
        this.greenText += this.firstFC.value[i]
      }
      else{
        break;
      }
    }
    this.redText += this.secondFC.value.slice(i);
    if(this.redText.length == 0) {
      this.finished = true;
    }

  }

  myTabFunction(event:any){
    console.log("here")
    if(event.keyCode===9){
      this.firstFC.setValue(this.firstFC.value + "    ");
      return false;
    }
    return true;
  }

}
 