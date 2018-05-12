import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';
import { Shot } from '../model/shot';

@Directive({
  selector: '[appDownload]'
})
export class DownloadDirective {

  @Input() shot: Shot;

  constructor(private el: ElementRef,
              private renderer: Renderer2) { }

  @HostListener('click', ) downloadShot (shot: Shot) {
    // console.log(shot.id);

    const link = this.renderer.createElement('a');
    const url = 'https://www.nrilegalservices.com/wp-content/uploads/2018/01/revocation-of-transfer-deed.jpg'; // shot.thumbnail;
    link.href = url;
    link.download = 'hui.jpg'; // `{shot.title}.jpg`;
    link.target = '_blank';
    this.renderer.appendChild(this.el.nativeElement, link);
    link.click();
  }

}
