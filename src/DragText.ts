import * as PIXI from 'pixi.js';


export class DragText extends PIXI.Text {

    private draffing:boolean;
    constructor(txt:string){
        super(txt,{fontSize:32,fill:"0xffffff"})
        this.anchor.set(0.5)
        this.x = 400;
        this.y = 200;
        this.interactive = true;

        this
        .on('mousedown', this.onDragStart)
        .on('touchstart', this.onDragStart)
        .on('mouseup', this.onDragEnd)
        .on('mouseupoutside', this.onDragEnd)
        .on('touchend', this.onDragEnd)
        .on('touchendoutside', this.onDragEnd)
        .on('mousemove', this.onDragMove)
        .on('touchmove', this.onDragMove)
    }
    onDragStart(event:Event){
        //
    }
    onDragEnd() {
        //
    }
    onDragMove(){
        if (this.dragging) {
            const newPosition = this.data.getLocalPosition(this.parent);
            this.x = newPosition.x;
            this.y = newPosition.y;
        }
    }
}