import React from "react";
import Select from "react-select";
import {useState} from 'react';
import BgColor from './BgColor.css';

function ColorChanger()
{
    var colors=[
        {
            value:'Lime',
            label:'lime'
        },
        {
            value:'Lavender',
            label:'lavender'
        },
        {
            value:'Crimson',
            label:'crimson'
        },
        {
            value:'Darkblue',
            label:'darkblue'
        },
        {
            value:'Teal',
            label:'teal'
        },
        {
            value:'Red',
            label:'red'
        },
        {
            value:'Green',
            label:'green'
        },
        {
            value:'Aqua Marine',
            label:'aquamarine'
        },
        {
            value:'grey',
            label:'grey'
        },
        {
            value:'Blue',
            label:'blue'
        },
    ];
    var [dropdowncolor, colorvalue]=useState(colors.label)
    var handle= e=>
    {
         colorvalue(e.label);
    }
   return(
    <div className="setframe">
        <h2><b><center>Color Changer</center></b></h2>
       <div className="setdrop">
        <Select options={colors} onChange={handle}>
        </Select>
        </div>

        <style>
            {
                'table {background-color:'+dropdowncolor+';}'
            }
        </style>
        
    <table>
        <tbody>
            <td></td>
        </tbody>
    </table>
    </div>
   )
}
export default ColorChanger;