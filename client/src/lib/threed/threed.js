// https://discoverthreejs.com/book/first-steps/animation-loop/
// https://github.com/emreacar/google-fonts-as-json/tree/master/json-files
'use strict'

import { throttle } from 'lodash-es'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import axis from './axis'

import avocado from '../../assets/glb/Avocado.glb'
import font_caviar from '../../assets/fonts/CaviarDreams_Regular.json'

export default class Threed {
  constructor() {
    this.renderer = new THREE.WebGLRenderer({antialias: true})
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize( window.innerWidth, window.innerHeight )

    document.body.appendChild( this.renderer.domElement )
    const canvas = document.body.children[1]
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.position = 'fixed'
    canvas.style.top = '0px'
    canvas.style.zIndex = '-1'
    
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color( '#BBBBBB' )
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
    this.camera.position.z = 10
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.target.set( 0, 0, 0 )
    this.loader = new GLTFLoader()
    this.fonter = new THREE.Font(font_caviar)

    window.addEventListener('resize', throttle(() => this.resize(), 100))
    window.addEventListener('keydown', (e) => this.keydown(e), 10)
  }

  async init() {
    // Lights
    this.loadLights()

    let text = new THREE.Mesh(
      new THREE.ShapeBufferGeometry(this.fonter.generateShapes('Loading...', 1)),
      new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide })
    )
    text.name = 'loading'
    text.position.set(-1.5, 3, 0)
    this.scene.add(text)

    this.renderer.render(this.scene, this.camera)

    await this.loadObjects(['https://s3-us-west-2.amazonaws.com/s.cdpn.io/39255/ladybug.gltf', avocado])

    this.scene.remove(this.scene.getObjectByName('loading'))
    // Objects
    const geometryCube = new THREE.BoxGeometry( 1, 1, 1 )
    const materialCube = new THREE.MeshLambertMaterial( { color: 0x779ab9f } )
    this.cube = new THREE.Mesh( geometryCube, materialCube )
    this.cube.position.set(-5, 5, 0)
    this.scene.add( this.cube )

    this.planeFloor = new THREE.Mesh(
      new THREE.BoxGeometry( 10, 0.25, 10 ), new THREE.MeshLambertMaterial( { color: 0xffeeaa } )
    )
    this.planeFloor.position.set(0, 0, -5)
    this.scene.add(this.planeFloor)

    this.createTree(5, 4, 5)
    axis(this.scene)

    this.animate()
  }

  createTree(x, y, z) {
    const treeTrunk = new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 8, 44, 32), new THREE.MeshBasicMaterial({ color: 0xffff99 }))
    treeTrunk.position.set(x, y, z)

    const treeHead = new THREE.Mesh(new THREE.SphereGeometry(5, 32, 16), new THREE.MeshBasicMaterial({ color: 0x66aa66}))
    treeHead.position.set(x, y*3, z)

    const tree = new THREE.Group()
    tree.add(treeTrunk)
    tree.add(treeHead)
    this.scene.add(tree)
  }

  createGraph(tickers) {
    tickers.forEach(tick => {
      console.log(tick)
    })
  }

  async loadObjects (objs) {
    for (let i = 0; i < objs.length; i++) {
      const ld_obj = await this.loader.loadAsync(
        objs[i],
        (xhr) => this.loadStatus(xhr)
      )
      const ldm_obj = ld_obj.scene.children[0]
      ldm_obj.position.set(3, -2 * i, -5)
      this.scene.add(ldm_obj)
    }
  }

  loadLights () {
    const amblight = new THREE.AmbientLight( 0x404040, 1 )
    this.scene.add(amblight)

    const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 )
    directionalLight.position.y = 15
    this.scene.add( directionalLight )

    this.spotlight = new THREE.SpotLight( 0xffffff )
    this.spotlight.position.set(5, 5, 5)
    this.scene.add( this.spotlight )

    this.pointlight = new THREE.PointLight( 0xff0000, 1, 1 )
    this.pointlight.position.set( -5, -5, -5 )
    this.scene.add( this.pointlight )
  }

  keydown(e) {
    console.log(e.key)
  }

  destroy() {
    window.removeEventListener('resize', throttle(() => this.resize(), 100))
    window.removeEventListener('keydown', (e) => this.keydown(e))
  }

  loadStatus(xhr) {
    // console.log(xhr)
    const loaded = (xhr.loaded / xhr.total) * 100
    // console.log( loaded + '% loaded' )
  }

  animate() {
    this.renderer.setAnimationLoop(() => {
      this.cube.rotation.x += 0.01
      this.cube.rotation.y += 0.01
      this.pointlight.rotation.x += 0.01
      this.pointlight.rotation.y += 0.01
      this.renderer.render(this.scene, this.camera)
    })
  }

  stopAnimate() {
    this.renderer.setAnimationLoop(null)
  }

  resize() {
    const width = window.innerWidth
    const height = window.innerHeight
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(width, height)
  
    const canvas = this.ref.current.children[0]
    const ratio = window.devicePixelRatio
    canvas.width = width * ratio
    canvas.height = height * ratio
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
  }
}
