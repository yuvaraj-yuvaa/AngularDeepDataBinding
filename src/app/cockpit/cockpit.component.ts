import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef,  } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  //newServerContent = '';

  @ViewChild('serverContent') serverInputContent : ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput: HTMLInputElement) {
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    //console.log(serverNameInput.value)
      this.serverCreated.emit({
      serverName: serverNameInput.value, //this.newServerName,
      serverContent: this.serverInputContent.nativeElement.value
    })

  }

  onAddBlueprint() {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });

      this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.serverInputContent.nativeElement.value
    })

  }

}
