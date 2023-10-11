import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  ngOnInit(): void {
    let listElements = document.querySelectorAll('.list-button-navbar--click');
    listElements.forEach((element: any) => {
      element.addEventListener('click', () => {
        element.classList.toggle('arrow');
        let height = 0;
        let menu = element.nextElementSibling;
        console.log(menu.clientHeight)
        if(menu.clientHeight == 0){
          height = menu.scrollHeight;
        }
        menu.style.height = `${height}px`
      })
    });
  }
}
