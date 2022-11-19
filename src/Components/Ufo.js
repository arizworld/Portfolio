import React, { useState,useRef, useEffect } from 'react'
import UFOImg from '../assets/UFO.png'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useWindowSize from '../customHooks/windowSize';
import SpacePoint from './SpacePoint';
import { useNavigate } from 'react-router-dom';

const Ufo = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const [ufoHeight,setUfoHeight] = useState(null)
  const [clickCounter, setClickCounter] = useState(0);
  const { width,height } = useWindowSize();
  const [pageSize,setPageSize] = useState(5);
  const [ufoLeft,setUfoLeft] = useState(null)
  const range = width/pageSize;
  const Ufo = styled.img`
        position : absolute;
        top: ${clickCounter === 0 ?'50%' : height*.8+'px'};
        left: ${clickCounter === 0 ?'35%' : width*.8+'px'};
        width : ${clickCounter === 0 ?'30%' : '15%'};
        cursor: ${clickCounter === 0 ?'pointer' : 'grab'};
        height : auto;
    `;
  const Spaceline = styled.hr`  
      top : ${(ufoHeight/2 )+ (height*.8)}px;
      width: ${width}px;
  `
  const handleRoute = (x) => {
      if(x<((range*4)+50) && x>((range*4)-50)  ){
        navigate('about');
      }else if(x<((range*3)+50) && x>((range*3)-50)  ){
        navigate('projects');
      }
      else{
        console.log('out of range')
      }
  }
  const getCurrentHeight = ()=>{
      setUfoHeight(ref.current?.clientHeight)
  }
  useEffect(()=>{
    getCurrentHeight();
    }
  ,[width,height,clickCounter])
    console.log('window:',height);
    console.log('ufo',ufoHeight)
    console.log((ufoHeight/2 )+ (height*.8))

  return (
    <>
      <Ufo as={motion.img}
      ref={ref}
        drag={clickCounter === 0 ? false : 'x'}
        onDragEnd={(event, info) => { handleRoute(info.point.x) }}
        // dragConstraints={{ left: -width, right: width }}
        // dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        // dragElastic={0.7}
        whileTap={{ cursor: "grabbing" }}
        transition={{ type: "spring", repeat: Infinity, repeatType: "reverse", duration: 2 }}
        src={UFOImg} alt="UFOImg"
      />
      {clickCounter !== 0 && <motion.button className="reset" onClick={() => { setClickCounter(0) }}>Reset</motion.button>}
      {clickCounter === 0 && <motion.button className="reset" onClick={() => { setClickCounter(prevCount=> prevCount+ 1) }}>Start</motion.button>}
      {clickCounter !== 0 && <Spaceline className="spaceline" />}
      {clickCounter !== 0 && <SpacePoint height={(ufoHeight/2)+(height*.8)}/>}

    </>
  )
}

export default Ufo
