import * as PIXI from 'pixi.js'
import { Application } from 'pixi.js';







window.onload = () =>{
  //const app = new App()
}
class App {

  private pixi!:PIXI.Application;

  constructor(){

    const app_id = document.getElementById('app')
    if(app_id==null) return
    const app_width = app_id.clientWidth;
    this.pixi = new Application(
      {
        width:app_width,
        height:530,
        background:"white"
      }
    )
    app_id.appendChild(this.pixi)
  }
}