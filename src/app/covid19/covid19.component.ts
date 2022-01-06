import { CountryReports } from 'src/countryReport';
import { NgblogCovid19Service } from 'src/app/ngblog-covid19.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-country',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})

export class Covid19Component implements OnInit {

  ELEMENT_DATA!: CountryReports[];
  displayedColumns:string[] = ["country","cases","todayCases","deaths","todayDeaths","recovered","todayRecovered","active","critical","casesPerOneMillion","deathsPerOneMillion","tests","testsPerOneMillion"];
  dataSource = new MatTableDataSource<CountryReports>(this.ELEMENT_DATA);

  constructor(private service:NgblogCovid19Service) { }

  ngOnInit(): void {
    this.getAllCountryReports();
  }

  public getAllCountryReports()
  {
    let resp=this.service.covid19Reports('countries');
    resp.subscribe(report=>this.dataSource.data = report as CountryReports[]);
  }



}
