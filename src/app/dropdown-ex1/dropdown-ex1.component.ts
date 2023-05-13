import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-ex1',
  templateUrl: './dropdown-ex1.component.html',
  styleUrls: ['./dropdown-ex1.component.css'],
})
export class DropdownEx1Component {
  dropdownOpen = false;

  options = [
    { label: '1-1000', value: '1-1000' },
    { label: '1001-2000', value: '1001-2000' },
    { label: '2001-3000', value: '2001-3000' },
    { label: '3001-4000', value: '3001-4000' },
    { label: '4001-5000', value: '4001-5000' },
    { label: '5001-6000', value: '5001-6000' },
    { label: '6001-7000', value: '6001-7000' },
    { label: '7001-8000', value: '7001-8000' },
    { label: '8001-9000', value: '8001-9000' },
    // add more options here as needed
  ];
  selectedValue = this.options[0].value;
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectColor(color: string) {
    this.selectedValue = color;
    this.toggleDropdown();
  }
}
