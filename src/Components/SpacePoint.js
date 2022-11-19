import React,{useState} from 'react'
import styled from 'styled-components'
import useWindowSize from '../customHooks/windowSize';

const SpacePoint = ({height}) => {
  const [pageSize,setPageSize] = useState(5);
  const {width} = useWindowSize();
  const left = width/pageSize;
  const SpaceNav = styled.div`
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
    top: ${height-5+2}px;
    z-index: -2;
  `
  const runCallback = (cb) => {
    return cb();
  };
  return (
    <>
        {runCallback(()=>{
            const spaceStations = [];
            for (let index = 1; index < pageSize; index++) {
               spaceStations.push(<SpaceNav key={index} style={{left: ((left*index)-5)+'px'}} className='spaceStation'></SpaceNav>)                 
            }
            return spaceStations;
        })}
    </>
  )
}

export default SpacePoint
