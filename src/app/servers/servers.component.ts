import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
  // 也可以使用下方的方式設定template & style，當元件或設定的屬性很多時會不方便維護
  // 通常會使用上面的方式
  // template:`<button>AA</button>`,
  // styles: ['p{background:green}']
})
export class ServersComponent implements OnInit {
  // Creating Components with the CLI & Nesting Component
  // 指令 ng generate component [name]
  // 或者 ng g c [name]
  // The CLI should update the declaration of app.module.ts automatically

  allowNewServer = false;
  serverCreationStatus = 'No server was Created';
  serverName = '';
  isShow = false;
  log = [];
  constructor() {
    const b = [1, 2, 3];
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was create";
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    // this.serverName = event.target.value;
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  display() {
    this.isShow = !this.isShow;
    this.log.push(this.isShow);
  }

  getColor(index) {
    return index % 2 === 0 ? 'blue' : 'tranparent';
  }

  getClass(index) {
    return index % 2 === 0 ? 'text-white' : 'text-black';
  }

}
