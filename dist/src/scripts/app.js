import * as BABYLON from 'babylonjs';
function CreateScene(engine, canvas) {
    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.ArcRotateCamera("camera1", 55, 55, 5, new BABYLON.Vector3(1, 1, 1), scene);
    camera.attachControl(canvas, true);
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.7;
    var diceMesh = BABYLON.CreatePolyhedron("diceMesh", { type: 5 }, scene);
    camera.setTarget(diceMesh.absolutePosition);
    return scene;
}
var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);
var scene = CreateScene(engine, canvas);
engine.runRenderLoop(function () {
    scene.render();
});
