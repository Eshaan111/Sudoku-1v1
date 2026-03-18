import React from 'react'
import {test1, test2, test3, test4,test5,test6} from './test_filter_maps.jsx'


function Cell({value,index}) {
    let show_map = Array(81).fill()
    let isInitial = false;
    let isSelected = false;
    if(test1[index]){
        isInitial = true;
    }
    return (
    <div className={`cell ${isInitial ? 'initial' : ''} ${isSelected ? 'selected' : ''}`}>
        {isInitial?value:""}
    </div>
  )
}

export default Cell
