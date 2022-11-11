import * as PIXI from 'pixi.js';

export class DragText extends PIXI.Text {

    constructor(txt:string){
        super(txt,{fontSize:24})
    }
}