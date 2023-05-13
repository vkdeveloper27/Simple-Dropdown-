import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  options = [
    { label: '1-1000', value: '1-1000' },
    { label: '1001-2000', value: '1001-2000' },
    { label: '2001-3000', value: '2001-3000' },
    // add more options here as needed
  ];

  onChange(event) {
    console.log(event.value);
  }
}
