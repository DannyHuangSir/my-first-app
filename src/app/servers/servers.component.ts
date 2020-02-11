import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  // Creating Components with the CLI & Nesting Component
  // 指令 ng generate component [name]
  // 或者 ng g c [name]
  // The CLI should update the declaration of app.module.ts automatically
  constructor() { }

  ngOnInit(): void {
  }

}
