'use strict'

import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../store/actions'

import Box from './box'

// Extend will make OribitControls available as a JSX element called orbitControls
extend({ OrbitControls })
const CameraControls = () => {
  const {
    camera,
    gl: { domElement }
  } = useThree()

  const controls = useRef()
  useFrame((state) => controls.current.update())
  return <orbitControls ref={controls} args={[camera, domElement]} />
}

const Canvas = () => {
  const rstate = useSelector(rstate => rstate)
  const dispatch = useDispatch()
  const { appState } = bindActionCreators(actions, dispatch)

  useEffect(() => {
    console.log(rstate.main)
  }, [])


  return (
    <div id="canvas-container" style={{width: '100%', height: '100%', position: 'fixed', top: '0px', zIndex: '-1'}}>
      <Canvas style={{ background: 'black'}}>
        <CameraControls />
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0,0,5]} />
        <Box />
      </Canvas>
    </div>
  )
}

export default Canvas
