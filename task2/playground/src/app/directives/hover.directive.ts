import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
    selector: '[hover]',
    host: {
		'(mouseenter)': 'onMouseEnter()',
		'(mouseleave)': 'onMouseLeave()'
	}
})
export class HoverDirective {

    constructor(private element: ElementRef,
                private renderer: Renderer2,
                private link: string) {
        this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer');
    }

    onMouseEnter(obj: IShot) {
        this.link = obj.avatar;
        console.log(this.element);
    }
    onMouseLeave(obj: IShot) {
        this.link = obj.thumbnail;
    }
}

interface IShot {
    avatar: string;
    thumbnail: string;
}
