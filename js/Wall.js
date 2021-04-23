export default class Wall{

    constructor(taille,pos,id,scene){   
        this.wall = BABYLON.MeshBuilder.CreateBox("wall"+id,taille,scene);        
        this.objectMaterial = new BABYLON.StandardMaterial("groundTexture", scene);
        this.objectMaterial.diffuseTexture = new BABYLON.Texture("images/brick.jpg", scene);
        this.wall.material = this.objectMaterial;
        
        this.wall.position.x = pos.x;
        this.wall.position.y = pos.y;
        this.wall.position.z = pos.z;

        this.wall.checkCollisions = true;
    }


}