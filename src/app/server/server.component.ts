import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId: String = "使用 {{變數名稱}} 的方式呈現 ";

  serverStatus: String = "使用 {{function名稱}} 的方式呈現 ";

  getServerStatus() {
    return this.serverStatus;
  }
}
