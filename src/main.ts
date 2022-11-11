import * as PIXI from 'pixi.js';
import { Application } from 'pixi.js';

window.onload = () =>{

  const delete_btn = document.getElementById('delete');
  const down_load_btn = document.getElementById('download');

  if(delete_btn==null||down_load_btn==null) return

  delete_btn.onclick = pixi_delete
  down_load_btn.onclick = pixi_delete
  const app = new App()
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
        view:app_id
      }
    )
  }
}
function pixi_delete(){

}
function svg_down_load(){

}