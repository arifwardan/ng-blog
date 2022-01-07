import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AllReport } from 'src/allReports';
import { NgblogCovid19Service } from 'src/app/ngblog-covid19.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  ELEMENT_DATA!: AllReport[];
  displayedColumns:string[] = [
    "updated",
    "cases",
    "todayCases",
    "deaths",
    "todayDeaths",
    "recovered",
    "todayRecovered",
    "active",
    "critical",
    "casesPerOneMillion",
    "deathsPerOneMillion",
    "tests",
    "testsPerOneMillion",
    "population",
    "oneCasePerPeople",
    "oneDeathPerPeople",
    "oneTestPerPeople",
    "activePerOneMillion",
    "recoveredPerOneMillion",
    "criticalPerOneMillion",
    "affectedCountries",
];
  dataSource = new MatTableDataSource<AllReport>(this.ELEMENT_DATA);

  constructor(private service:NgblogCovid19Service) { }

  ngOnInit(): void {
    this.getAllCountryReports('countries');
  }

  public getAllCountryReports(param: any)
  {
    let resp=this.service.covid19Reports(param);
    resp.subscribe(report=>this.dataSource.data = report as AllReport[]);
  }

}
