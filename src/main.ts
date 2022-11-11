import * as PIXI from 'pixi.js';
import { Application } from 'pixi.js';
import { DragText } from './DragText'

window.onload = () =>{

  const delete_btn = document.getElementById('delete');
  const chemica_add = document.getElementById('chemic_add');
  const down_load_btn = document.getElementById('download');

  if(delete_btn==null||down_load_btn==null||chemica_add==null) return

  delete_btn.onclick = pixi_delete
  down_load_btn.onclick = pixi_delete
  const app = new App()

  chemica_add.onclick = app.add_chemical
}
class App {

  private pixi!:PIXI.Application;

  constructor(){

    const app_id = document.getElementById('pixi')
    if(app_id==null) return
    const app_width = app_id.clientWidth;
    this.pixi = new Application(
      {
        width:app_width,
        height:530,
        background:"red",
        // @ts-ignore
        view:app_id,
        resizeTo:app_id
      }
    )
  }
  add_chemical(){
    let chemic_type = document.getElementById('chemicas')
    if(chemic_type==null) return;
    const h = new DragText("H")
    this.pixi.stage.addChild(h)
    //@ts-ignore
    console.log(chemic_type.value)
  }
}
function pixi_delete(){

}

function svg_down_load(){

}