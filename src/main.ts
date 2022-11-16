import * as PIXI from 'pixi.js';
import { Application } from 'pixi.js';
import { DragText } from './DragText'

window.onload = () =>{

  const delete_btn = document.getElementById('delete');
  const chemica_add = document.getElementById('chemic_add');
  const down_load_btn = document.getElementById('download');
  const window = document.getElementById('infos');
  const canvas = document.getElementById('pixi');

  if(delete_btn==null||down_load_btn==null||chemica_add==null||canvas==null||window==null) return

  delete_btn.onclick = pixi_delete
  down_load_btn.onclick = pixi_delete
  //@ts-ignore
  canvas.width = window.clientWidth
  const app = new App()

  chemica_add.onclick = app.add_chemical
}
class App {

  private pixi!:PIXI.Application;
  private chemicals!:DragText[]

  constructor(){

    const app_id = document.getElementById('pixi')
    if(app_id==null) return
    const app_width = app_id.clientWidth;
    this.pixi = new Application(
      {
        width:app_width,
        height:500,
        background:"red",
        // @ts-ignore
        view:app_id,
        resizeTo:app_id
      }
    )
  }
  add_chemical(){
    const chemical_type = document.getElementById('chemicas')
    if(chemical_type==null) return;
    let dragText = new DragText("H");
    this.chemicals.push(dragText);
    this.pixi.stage.addChild(dragText);
    //@ts-ignore
    console.log(chemical_type.value)
  }
}
function pixi_delete(){

}

function svg_down_load(){

}