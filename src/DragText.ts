import * as PIXI from 'pixi.js';

const f= ""

export class DragText extends PIXI.Text {

    constructor(txt:string){
        super(txt,{fontSize:24,fill:"0xff1010"})
        this.anchor.set(0.5)
    }
}