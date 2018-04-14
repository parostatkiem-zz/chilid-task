import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import * as moment from 'moment';


@Component({
  selector: 'app-the-table',
  templateUrl: './the-table.component.html',
  styleUrls: ['./the-table.component.css']
})
export class TheTableComponent implements OnInit {

    public data: any[];
    public filterQuery = "";
    public rowsOnPage = 5;
    public sortBy = "id";
    public sortOrder = "asc";

    constructor(private http: Http) {
    }

    ngOnInit(): void {
        this.http.get("assets/dane.json")
            .subscribe((data)=> {
                setTimeout(()=> {
                  //  this.data = data.json();
                  this.data = data.json();
                }, 1000);
            });
    }

    public toInt(num: string) {
        return +num;
    }

    public sortByDate = (a: any) =>
     {
       let m= moment(a.dateOfBirth, "D.M.YYYY H:m");
        return m.toDate();
     }

}
