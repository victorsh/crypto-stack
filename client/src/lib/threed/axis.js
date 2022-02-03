'use strict'
import * as THREE from 'three'

const LoadAxis = (scene) => {
  let axis_material, axis_points
  for(let i = 0; i < 3; i++) {
    switch (i) {
      case 0: {
        axis_material = new THREE.LineBasicMaterial( { color: 0x0000ff } )
        axis_points = [
          new THREE.Vector3( 0, 0, 0 ),
          new THREE.Vector3( 10, 0, 0 )
        ]
      }
      break
      case 1: {
        axis_material = new THREE.LineBasicMaterial( { color: 0x00ff00 } )
        axis_points = [
          new THREE.Vector3( 0, 0, 0 ),
          new THREE.Vector3( 0, 10, 0 )
        ]
      }
      break
      case 2: {
        axis_material = new THREE.LineBasicMaterial( { color: 0xff0000 } )
        axis_points = [
          new THREE.Vector3( 0, 0, 0 ),
          new THREE.Vector3( 0, 0, 10 )
        ]
      }
      break
    }

    const axis_geometry = new THREE.BufferGeometry().setFromPoints( axis_points );
    const axis = new THREE.Line(axis_geometry, axis_material)
    scene.add(axis)
  }
}

export default LoadAxis
