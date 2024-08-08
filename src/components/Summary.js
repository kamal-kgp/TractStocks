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
          <span style={labelStyle}>Symbol :</span>
          <span style={valueStyle}>MSFT</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Open :</span>
          <span style={valueStyle}>{data?.summaryDetail?.open?.fmt}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Day Low :</span>
          <span style={valueStyle}>{data?.summaryDetail?.dayLow?.fmt}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Day High :</span>
          <span style={valueStyle}>{data?.summaryDetail?.dayHigh?.fmt}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Regular Market Day low :</span>
          <span style={valueStyle}>{data?.summaryDetail?.regularMarketDayLow?.fmt}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Regular Market Day high :</span>
          <span style={valueStyle}>{data?.summaryDetail?.regularMarketDayHigh?.fmt}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Current Price:</span>
          <span style={valueStyle}>{data?.financialData?.currentPrice?.fmt}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Volume:</span>
          <span style={valueStyle}>{data?.summaryDetail?.volume?.longFmt}</span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
