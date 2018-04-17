import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'sorting-arrows',
  templateUrl: './sorting-arrows.component.html',
  styleUrls: ['./sorting-arrows.component.css']
})
export class SortingArrowsComponent implements OnInit {
  @Input()  desiredElement:string;
  @Input()  currentElement:string;
  @Input()  currentDir:string;
  get currentHighlight()
  {
    if(this.currentElement==this.desiredElement)
    {
      if(this.currentDir=="desc")
        return "up";
      else
        return "down";
    }
    return "";
  }

  constructor() { }

  ngOnInit() {
  }

}
