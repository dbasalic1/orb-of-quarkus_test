export default function HealthBar (props) {
    
    const containerStyles = {
      height: 20,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: 50
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${props.completed}%`,
      backgroundColor: `${props.bgcolor}`,
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }

    const infoStyles = {
      textAlign: 'center'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}></div>
        <div style={infoStyles}>{props.completed} / 100</div>
      </div>
    )
  }
  

  