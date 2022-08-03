import React from 'react';
import PanelItem from './panel-item/pan-item';
import * as C from './panelStyles';
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from "react-icons/fa"



const panel = () => {
  return  <C.Container>
    <PanelItem title="Income" Icon={FaRegArrowAltCircleUp} value="1000"/>
    <PanelItem title="Expenses" Icon={FaRegArrowAltCircleDown} value="2000"/>
    <PanelItem title="Balance" Icon={FaDollarSign} value="3000"/>   
  </C.Container>;
};

export default panel;
  
  