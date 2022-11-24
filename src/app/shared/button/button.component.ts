import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as classNames from 'classnames';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  // @Input() color:string = 'primary';
  // @Input() size:string = 'md';
  @Input('customClass') class: string | undefined;
  @Input() disabled: boolean | undefined;
  @Input() properties: any;
  // @Output() getRow = new EventEmitter<any>();
  // @Input() element: any | undefined;
  constructor() { }

  ngOnInit(): void {
    this.properties = new Properties(this.properties);
  }


  getClass() {
    const classes = classNames(
      {
        'bg-transparent hover:bg-primaryHighlight active:bg-primaryHighlight focus:bg-primaryHighlight border border-transparent':
          this.properties.color === 'link',
      },
      {
        'bg-transparent hover:bg-danger active:bg-dangerHighlight focus:bg-dangerHighlight border-0 hover:text-gray-200 active:text-gray-200 focus:text-gray-200':
          this.properties.color === 'link-danger',
      },
      {
        'border border-primary bg-primary hover:bg-primaryDark active:bg-primaryDark focus:bg-primaryDark':
          this.properties.color === 'primary' || !this.properties.color,
      },
      {
        'border border-primary hover:bg-primaryHighlight active:bg-primaryHighlight focus:bg-primaryHighlight':
          this.properties.color === 'outline-primary'
          || this.properties.color === 'secondary'
          || this.properties.color === 'outline-secondary',
      },
      {
        'border border-success bg-success hover:bg-successDark active:bg-successDark focus:bg-successDark':
          this.properties.color === 'success',
      },
      {
        'border border-success hover:bg-success active:bg-success focus:bg-success hover:text-gray-100 active:text-gray-100 focus:text-gray-100':
          this.properties.color === 'outline-success',
      },
      {
        'border border-danger bg-danger hover:bg-dangerDark active:bg-dangerDark focus:bg-dangerDark':
          this.properties.color === 'danger',
      },
      {
        'border border-danger hover:bg-danger active:bg-danger focus:bg-danger hover:text-gray-200 active:text-gray-200 focus:text-gray-200':
          this.properties.color === 'outline-danger',
      },
      {
        'border border-warning bg-warning hover:bg-warningDark active:bg-warningDark focus:bg-warningDark':
          this.properties.color === 'warning',
      },
      {
        'border border-warning hover:bg-warning active:bg-warning focus:bg-warning hover:text-gray-800 active:text-gray-800 focus:text-gray-800':
          this.properties.color === 'outline-warning',
      },
      {
        'border border-teal-500 bg-teal-500 hover:bg-teal-400 active:bg-teal-400 focus:bg-teal-400':
          this.properties.color === 'info',
      },
      {
        'border border-teal-500 hover:bg-teal-500 active:bg-teal-500 focus:bg-teal-500 hover:text-gray-100 active:text-gray-100 focus:text-gray-100':
          this.properties.color === 'outline-info',
      },
      {
        'border border-gray-300 bg-gray-300 hover:bg-gray-200 active:bg-gray-200 focus:bg-gray-200':
          this.properties.color === 'light',
      },
      {
        'border border-gray-300 hover:bg-gray-300 active:bg-gray-300 focus:bg-gray-300 hover:text-gray-900 active:text-gray-900 focus:text-gray-900':
          this.properties.color === 'outline-light',
      },
      {
        'border border-gray-900 bg-gray-900 hover:bg-gray-800 active:bg-gray-800 focus:bg-gray-800':
          this.properties.color === 'dark',
      },
      {
        'border border-gray-900 hover:bg-gray-900 active:bg-gray-900 focus:bg-gray-900 hover:text-gray-100 active:text-gray-100 focus:text-gray-100':
          this.properties.color === 'outline-dark',
      },
      {
        'border bg-white border-info bg-info hover:bg-infoDark active:bg-infoDark focus:bg-infoDark':
          this.properties.color === 'info',
      },
      {
        'border bg-white border-info hover:bg-info active:bg-info focus:bg-info hover:text-white active:text-white focus:text-white':
          this.properties.color === 'outline-info',
      },
      { 'px-2 py-1 text-xs': this.properties.size === 'sm' },
      { 'px-3 py-2 text-sm': this.properties.size === 'md' },
      { 'px-6 py-3 text-base': this.properties.size === 'lg' },
      { 'w-full': this.properties.block },
      { 'opacity-50': this.properties.disabled },
      {
        'text-primary':
            (this.properties.color === 'link'
            || this.properties.color === 'outline-primary'
            || this.properties.color === 'secondary'
            || this.properties.color === 'outline-secondary'),
      },
      { 'text-success': this.properties.color === 'outline-success' },
      {
        'text-danger':
          (this.properties.color === 'outline-danger' || this.properties.color === 'link-danger'),
      },
      { 'text-warning': this.properties.color === 'outline-warning' },
      { 'text-white': this.properties.color === 'info' },
      { 'text-info': this.properties.color === 'outline-info' },
      {
        'text-gray-100':
          (!this.properties.color
            || this.properties.color === 'primary'
            || this.properties.color === 'success'
            || this.properties.color === 'danger'
            || this.properties.color === 'info'
            || this.properties.color === 'dark'),
      },
      { 'text-gray-500': this.properties.color === 'outline-light' },
      { 'text-white': this.properties.color === 'warning' },
      {
        'text-gray-900':
          (this.properties.color === 'light' || this.properties.color === 'outline-dark'),
      },
      { 'text-teal-500': this.properties.color === 'outline-info' },
      'relative focus:outline-none leading-none',
      'rounded',
      this.class
    );
    return classes;
  }

}

class Properties {
   size: string | undefined;
   color: string | undefined;
   disabled: boolean | undefined;
   type: string | undefined;

   constructor(props: any){
    this.size = props.size || 'md';
    this.color = props.color || 'primary';
    this.disabled = props.disabled || false;
    this.type = props.type || 'button';
   }
}

// interface IPropertes {
//   size?: string | undefined;
//   color?: string | undefined;
//   disabled?: boolean | undefined;
//   type?: string | undefined;
// }
