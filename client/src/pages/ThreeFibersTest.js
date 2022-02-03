'use strict'

//REACT
import React, { useRef, useEffect, useState } from 'react'
//REDUX
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../store/actions'
//COMPONENTS
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
//THREE
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'

import Controls from '../components/three/controls'
import Box from '../components/three/box'
import Card from '../components/three/card'

import * as randomSentence from 'random-sentence'
import * as cryptojs from 'crypto-js'


// Extend will make OribitControls available as a JSX element called orbitControls
// extend({ OrbitControls })

// const CameraControls = () => {
//   const {
//     camera,
//     gl: { domElement }
//   } = useThree()

//   const controls = useRef()
//   useFrame((state) => controls.current.update())
//   return <orbitControls ref={controls} args={[camera, domElement]} />
// }

const FontLoader = new THREE.FontLoader();

const ThreeFibersTest = () => {
  const rstate = useSelector(rstate => rstate)
  const dispatch = useDispatch()
  const { appState } = bindActionCreators(actions, dispatch)

  useEffect(async () => {
    console.log(rstate.main)
    // await FontLoader.loadAsync()
    let randsentence = await randomSentence({words: 12})
    console.log(randsentence)
    let sha = cryptojs.SHA256(randsentence).toString(cryptojs.enc.Hex)
    console.log(sha)
    console.log(await JSON.stringify(cryptojs.MD5(randsentence)))
  }, [])

  return (
    <>
      <Header />
      <div id="canvas-container" style={{width: '100%', height: '100%', position: 'fixed', top: '0px', zIndex: '-1'}}>
        <Canvas style={{ background: 'black'}}>
          {/* <CameraControls target={[0, 0, 0]} position={[5, 0, 0]}/> */}
          <Controls />
          <ambientLight intensity={0.1} />
          <directionalLight color="white" position={[0,0,5]} />
          <primitive object={new THREE.AxesHelper(10)} />
          <Box />
          <Card />
        </Canvas>
      </div>
      <Footer />
    </>
  )
}

export default ThreeFibersTest
