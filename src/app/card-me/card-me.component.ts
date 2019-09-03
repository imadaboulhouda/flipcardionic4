import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-me',
  templateUrl: './card-me.component.html',
  styleUrls: ['./card-me.component.scss'],
})
export class CardMeComponent implements OnInit {
  @Input() titre;
  @Input() contentHtml;
  @Input() backgroundImage;
  ngOnInit()
  {
    if(!this.titre)
      this.titre = "Hello World";
    if (!this.backgroundImage)
      this.backgroundImage = "https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
      if(!this.contentHtml)
      this.contentHtml = "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores dolore repudiandae facilis asperiores corrupti et quis possimus quae delectus ratione minima natus totam porro modi neque id, optio illum deserunt.</p>";
    console.log(this.titre,this.contentHtml);
    
    console.log('is Working');
  }

  className = "cardBack";
  cardBlock = "cardMe";
  showOther() {
    if (this.className.indexOf("active") == -1)
      this.className += " active";
    if (this.className.indexOf("done") == -1) {
      this.cardBlock = "cardMe heightAuto";
      this.className += " done";
    } else {
      this.cardBlock = "cardMe";
      this.className = "cardBack";
    }


  }
}
