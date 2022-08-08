import React from "react";
import { Switch } from '@mui/material'
import { styled } from '@mui/material/styles'

const theme = {
   width: 100,
   height: 40,
   padding: 0,
   margin: '0 10px 0 30px',
   borderRadius: 50,
   '& .MuiSwitch-switchBase': {
      border: 'none',
      transform: 'translate(-4px, -4px)',
      '& .MuiSwitch-thumb': {
         width: 30,
         height: 30,
         transition: 'transform 0.25s ease',
      },
      '& .MuiTouchRipple-root': {
         display: 'none'
      },
      '&.Mui-checked': {
         transform: 'translate(56px,-4px)',
         '& .MuiSwitch-thumb': {
            width: 30,
            height: 30,
            color: 'white',
         },
         '& .MuiTouchRipple-root': {
            display: 'none'
         },
         '&+.MuiSwitch-track': {
            opacity: 0.5,
            backgroundColor: 'red',
         },
      },
   },
   '& .MuiSwitch-track': {
      opacity: 0.5,
      backgroundColor: 'grey',
   },
}

const NewSwitch = styled(Switch)(theme)

export default function CustomizedSwitch(props) {
   return <NewSwitch {...props} />
}