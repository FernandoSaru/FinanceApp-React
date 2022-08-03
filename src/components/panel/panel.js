import React from 'react';
import PanelItem from './panel-item/pan-item';
import * as C from './panelStyles';
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from "react-icons/fa"



const panel = ({ income, expense, total }) => {
  return  <C.Container>
    <PanelItem title="Income" Icon={FaRegArrowAltCircleUp} value={income} />
    <PanelItem title="Expenses" Icon={FaRegArrowAltCircleDown} value={expense} />
    <PanelItem title="Balance" Icon={FaDollarSign} value={total} />   
  </C.Container>;
};

export default panel;
  
  