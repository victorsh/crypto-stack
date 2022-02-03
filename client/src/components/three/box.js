'use strict'

import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'

import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../store/actions'

const Box = () => {
  const someBox = useRef()
  useFrame(({ clock }) => {
    someBox.current.rotation.x = clock.getElapsedTime()
  })
  return (
    <mesh onPointerEnter={(e) => console.log('in')}
      onPointerLeave={(e) => console.log('out')}
      ref={someBox}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  )
}

export default Box
