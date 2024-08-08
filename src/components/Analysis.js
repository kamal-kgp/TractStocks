import React from 'react';

const Analysis = ({data}) => {
  const containerStyle = {
    height: '380px',
    width: '880px',
    margin: '115px 0px 0px 0px',
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
          <span style={labelStyle}>Target High Price :</span>
          <span style={valueStyle}>{data?.financialData?.targetHighPrice?.fmt}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Target Low Price :</span>
          <span style={valueStyle}>{data?.financialData?.targetLowPrice?.fmt}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Target Mean Price :</span>
          <span style={valueStyle}>{data?.financialData?.targetMeanPrice?.fmt}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Target Median Price :</span>
          <span style={valueStyle}>{data?.financialData?.targetMedianPrice?.fmt}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Recommendation Mean :</span>
          <span style={valueStyle}>{data?.financialData?.recommendationMean?.fmt}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Ebitda :</span>
          <span style={valueStyle}>{data?.financialData?.ebitda?.fmt}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Total Debt :</span>
          <span style={valueStyle}>{data?.financialData?.totalDebt?.fmt}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Quick Ratio :</span>
          <span style={valueStyle}>{data?.financialData?.quickRatio?.fmt}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Current Ratio :</span>
          <span style={valueStyle}>{data?.financialData?.currentRatio?.fmt}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Total Cash :</span>
          <span style={valueStyle}>{data?.financialData?.totalCash?.fmt}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Total Revenue :</span>
          <span style={valueStyle}>{data?.financialData?.totalRevenue?.fmt}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Debt To Equity :</span>
          <span style={valueStyle}>{data?.financialData?.debtToEquity?.fmt}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Revenue Per Share :</span>
          <span style={valueStyle}>{data?.financialData?.revenuePerShare?.fmt}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Return On Assets :</span>
          <span style={valueStyle}>{data?.financialData?.returnOnAssets?.fmt}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Return On Equity :</span>
          <span style={valueStyle}>{data?.financialData?.returnOnEquity?.fmt}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Free Cash flow :</span>
          <span style={valueStyle}>{data?.financialData?.freeCashflow?.fmt}</span>
        </div>
        <div style={fieldStyle}>
          <span style={labelStyle}>Operating Cash flow :</span>
          <span style={valueStyle}>{data?.financialData?.operatingCashflow?.fmt}</span>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
