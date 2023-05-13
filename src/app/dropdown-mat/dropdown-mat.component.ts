import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-mat',
  templateUrl: './dropdown-mat.component.html',
  styleUrls: ['./dropdown-mat.component.css'],
})
export class DropdownMatComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  options = [
    { label: '1-1000', value: '1-1000' },
    { label: '1001-2000', value: '1001-2000' },
    { label: '2001-3000', value: '2001-3000' },
    // add more options here as needed
  ];
  selectedValue = this.options[0].value;
}
