import { useState, useEffect } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green } from '@mui/material/colors';
export default function HealthBar(props) {
  const [progress, setProgress] = useState(props.currentHealth);
  const normalise = (value) => (value * 100) / props.maxHealth;


const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    }
  },
});

  useEffect(() => {
    setProgress(props.currentHealth);
  },[props])

  return (
    <div>
      <ThemeProvider theme={theme}>
      <LinearProgress 
      color="primary"
      sx={{
        height: '20px',
        backgroundColor: 'black',
        borderRadius: 2

      }} variant="determinate" value={normalise(progress)} />
      </ThemeProvider>
      <div>
        {" "}
        {props.currentHealth} / {props.maxHealth}
      </div>
    </div>
  );
}
