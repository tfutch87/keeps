import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SentimentSatisfiedAltRoundedIcon from '@mui/icons-material/SentimentSatisfiedAltRounded';
import ScatterPlotRoundedIcon from '@mui/icons-material/ScatterPlotRounded';
import SelfImprovementRoundedIcon from '@mui/icons-material/SelfImprovementRounded';
import EditCalendarRoundedIcon from '@mui/icons-material/EditCalendarRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';


const actions = [
  { icon: <HomeRoundedIcon />, name: 'home', href:'/' },
  { icon: <EditCalendarRoundedIcon />, name: 'Date Night', href:'/secretCategory/Date Night' },
  { icon: <SelfImprovementRoundedIcon />, name: 'Vulnerability', href:'/secretCategory/Vulnerability' },
  { icon: <SentimentSatisfiedAltRoundedIcon />, name: 'Appreciation', href:'/secretCategory/Appreciation' },
  { icon: <ScatterPlotRoundedIcon />, name: 'Random', href:`/secretCategory/Random` },
];



export default function BasicSpeedDial() {
  return (
    <Box sx={{ height: 350, transform: 'translateZ(0px)', flexGrow: 1, position: 'absolute' }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<MenuRoundedIcon />}
        direction="down"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            href={action.href}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}