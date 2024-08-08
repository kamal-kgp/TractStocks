import React from 'react';

const Summary = ({data}) => {
  const containerStyle = {
    height: '380px',
    width: '880px',
    margin: '0',
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    fontFamily: 'Arial, sans-serif'
  };

  const innerContainerStyle = {
    width: '100%',
    padding: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px'
  };

  const fieldStyle = {
    marginBottom: '10px'
  };

  const labelStyle = {
    fontWeight: 'bold'
  };

  const valueStyle = {
    marginLeft: '10px',
    fontStyle: 'italic'
  };

  return (
    <div style={containerStyle}>
      <div style={innerContainerStyle}>
        <div style={fieldStyle}>
          <span style={labelStyle}>Website:</span>
          <span style={valueStyle}>{data.website}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Stock name:</span>
          <span style={valueStyle}>MSFT</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Industry:</span>
          <span style={valueStyle}>{data.industry}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Sector:</span>
          <span style={valueStyle}>{data.sector}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Full time employee:</span>
          <span style={valueStyle}>{data.fullTimeEmployees}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Current Price:</span>
          <span style={valueStyle}>{data.currentPrice}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Volume:</span>
          <span style={valueStyle}>{data.volume}</span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
