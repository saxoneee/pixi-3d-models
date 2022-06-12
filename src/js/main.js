let app = new PIXI.Application({
    backgroundColor: 0xdddddd, resizeTo: window, antialias: true
  })
  document.body.appendChild(app.view)
  
  PIXI3D.LightingEnvironment.main.lights.push(
    Object.assign(new PIXI3D.Light(), { x: -1, z: 3 }))
  

  app.loader.add(
    "teapot.gltf",
    "models/teapot.gltf"
  );

  
  let teapot = null;

  app.loader.load((_, resources) => {
     teapot = app.stage.addChild(
      PIXI3D.Model.from(resources["teapot.gltf"].gltf));
  })

  let rotation = 0
  app.ticker.add(() => {

    if(teapot){
        teapot.rotationQuaternion.setEulerAngles(0, rotation++, 0)
    }
  })