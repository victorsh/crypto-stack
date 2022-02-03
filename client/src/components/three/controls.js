'use strict'

import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'

import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../store/actions'

// Extend will make OribitControls available as a JSX element called orbitControls
extend({ OrbitControls })

const Controls = (props) => {
  const controls = useRef()
  const {
    camera,
    gl: { domElement }
  } = useThree()
  const CameraControls = () => {

    camera.position.set(-5, 0, 0)
  
    return <orbitControls ref={controls} args={[camera, domElement]} />
  }
  useFrame(state => {
    controls.current.update()
    camera.position.x += 0.01
    camera.position.z += 0.01
  })
  return (
    <CameraControls target={[0, 0, 0]} />
  )
}

export default Controls
