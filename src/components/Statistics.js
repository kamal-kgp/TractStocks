import React from 'react';

const Statistics = ({data}) => {
  const containerStyle = {
    height: '380px',
    width: '880px',
    margin: '70px 0px 0px 0px',
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
          <span style={labelStyle}>52 Week Low :</span>
          <span style={valueStyle}>{data.fiftyTwoWeekLow}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>52 Week High :</span>
          <span style={valueStyle}> {data.fiftyTwoWeekHigh} </span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>50 Day Average :</span>
          <span style={valueStyle}>{data.fiftyDayAverage}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>200 Day Average :</span>
          <span style={valueStyle}>{data.twoHundredDayAverage}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Dividend Rate:</span>
          <span style={valueStyle}>{data.dividendRate}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Dividend Yield:</span>
          <span style={valueStyle}>{data.dividendYield}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>exDividend Date:</span>
          <span style={valueStyle}>{data.exDividendDate}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Payout Ratio:</span>
          <span style={valueStyle}>{data.payoutRatio}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>5 Year Avg Dividend Yield:</span>
          <span style={valueStyle}>{data.fiveYearAvgDividendYield}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Beta :</span>
          <span style={valueStyle}>{data.beta}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Trailing PE :</span>
          <span style={valueStyle}>{data.trailingPE}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Forward PE :</span>
          <span style={valueStyle}>{data.forwardPE}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Market Cap :</span>
          <span style={valueStyle}>{data.marketCap}</span>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
