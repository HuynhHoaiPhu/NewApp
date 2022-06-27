import { Component, OnInit, OnChanges, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'progress-bar',
  template: `
  <div
    class="progress-bar-container"
    [style.backgroundColor]="backgroundColor"
  >
    <div
      class="progress"
      [style]="{
        backgroundColor: progressColor,
        width: progress + '%'
      }"
    ></div>
  </div>
`,
styles: [
  `
    .progress-bar-container,
    .progress {
      height: 20px;
    }

    .progress-bar-container {
      width: 100%;
    }
  `,
],
})
export class ProgressbarComponent  {
  @Input() backgroundColor = '#ccc';
  @Input() progressColor = 'tomato';
  @Input() set progress(val: number) {
    //validation for val
      this._progress = val;
      console.log({val});
  };
  private _progress = 50;
  get progress() {
    return this._progress;
  }

  constructor() {

  }
  ngOnInit() {}
  ngOnChanges(changes: SimpleChange) {}
};
