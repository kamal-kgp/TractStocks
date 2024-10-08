import { useEffect, useState, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";
import fullscreen from "../assets/fullscreen.svg";
import compare from "../assets/compare.svg";

const Chart = () => {
  const [time, setTime] = useState("5d");
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(false);
  const chartRef = useRef(null);
  const [interval, setInterval] = useState("1d");

  const options1 = {
    method: "GET",
    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-chart',
    params: {
      interval: interval,
      symbol: "MSFT",
      range: time,
      region: "US",
      includePrePost: "false",
      useYfid: "true",
      includeAdjustedClose: "true",
      events: "capitalGain,div,split",
    },
    headers: {
      'x-rapidapi-key': 'b4d65265d9msha693a38b3747b6cp1982acjsnf8e66503d15b',
      'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    },
  };

  const fetchData = async () => {
    try {
      setFetching(true);
      const response = await axios.request(options1);
      const res = response.data.chart.result[0].indicators.adjclose[0].adjclose;
      setData(res);
      setFetching(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [time, interval]);

  const handleFullscreen = () => {
    const chartContainer = chartRef.current;
    const chart = document.getElementsByClassName("button");
    const container = document.getElementsByClassName("container");
    if (document.fullscreenElement) {
      chart[0].style.color = "black";
      chart[1].style.color = "black";
      container[0].style.width = "800px";
      container[0].style.height = "508px";
      document.exitFullscreen();
    } else {
      chart[0].style.color = "white";
      chart[1].style.color = "white";
      container[0].style.width = "100%";
      container[0].style.height = "100%";
      chartContainer.requestFullscreen();
    }
  };

  const options = {
    chart: {
      type: "area",
    },
    title: {
      text: " ",
      enabled: false,
    },
    xAxis: {
      labels: {
        enabled: false,
      },
      crosshair: {
        dashStyle: "ShortDash",
        width: 1,
        color: "#999999",
      },
      gridLineWidth: 0.5,
      gridLineColor: "#E2E4E7",
      gridLineDashStyle: "Solid",
    },
    yAxis: {
      title: {
        enabled: false,
      },
      labels: {
        enabled: false,
      },
      crosshair: {
        dashStyle: "ShortDash",
        width: 1,
        color: "#999999",
      },
      gridLineWidth: 0,
    },
    plotOptions: {
      series: {
        allowPointSelect: true,
      },
      area: {
        fillColor: {
          linearGradient: {
            x1: 0.5,
            y1: 0,
            x2: 1,
            y2: 1,
          },
          stops: [
            [0, "#E8E7FF"],
            [1, "rgba(255, 255, 255, 0)"],
          ],
        },
        marker: {
          enabled: false,
        },
      },
      marker: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Data",
        data: data,
        color: "#4B40EE",
      },
    ],
    tooltip: {
      useHTML: true,
      formatter: function () {
        return `<div style="text-align: right;">${this.y}</div>`;
      },
      positioner: function (labelWidth, labelHeight, point) {
        const chart = this.chart;
        return {
          x: chart.plotLeft + chart.plotWidth - 50,
          y: point.plotY + chart.plotTop - labelHeight / 2,
        };
      },
      backgroundColor: "rgba(255, 255, 255, 0.85)",
      borderWidth: 1,
      shadow: false,
      style: {
        color: "#333",
        fontSize: "12px",
      },
    },
  };

  return (
    <div
      className="container"
      style={{
        marginTop: "50px",
        width: "800px",
        height: "508px",
      }}
      ref={chartRef}
    >
      <div
        className="actions"
        style={{
          width: "750px",
          height: "33px",
          top: "325px",
          left: "60px",
          gap: "0px",
          opacity: "0px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0px",
            padding: "0px",
            gap: "30px",
          }}
        >
          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "0px",
              padding: "0px",
              gap: "8px",
              cursor: "pointer",
            }}
            onClick={handleFullscreen}
          >
            <img src={fullscreen} alt="fullscreen" />
            <span
              className="button"
              style={{
                color: "black",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "22px",
                margin: "0px",
                padding: "0px",
              }}
            >
              Fullscreen
            </span>
          </p>
          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "0px",
              padding: "0px",
              gap: "7px",
              cursor: "not-allowed",
            }}
          >
            <img src={compare} alt="compare" />
            <span
              className="button"
              style={{
                color: "black",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "22px",
                margin: "0px",
                padding: "0px",
              }}
            >
              Compare
            </span>
          </p>
        </p>
        <p
          className="time-interval"
          style={{
            display: "flex",
            gap: "10px",
            margin: "0px",
            padding: "0px",
          }}
        >
          <span
            style={{
              ...timeStyle,
              color: time === "1d" ? "#FFFFFF" : "#6F7177",
              backgroundColor: time === "1d" ? "#4B40EE" : "#FFFFFF",
            }}
            onClick={() => {
              setTime("1d");
              setInterval("5m");
            }}
          >
            1d
          </span>
          <span
            style={{
              ...timeStyle,
              color: time === "5d" ? "#FFFFFF" : "#6F7177",
              backgroundColor: time === "5d" ? "#4B40EE" : "#FFFFFF",
            }}
            onClick={() => {
              setTime("5d");
              setInterval("1d");
            }}
          >
            5d
          </span>
          <span
            style={{
              ...timeStyle,
              color: time === "1mo" ? "#FFFFFF" : "#6F7177",
              backgroundColor: time === "1mo" ? "#4B40EE" : "#FFFFFF",
            }}
            onClick={() => {
              setTime("1mo");
              setInterval("1d");
            }}
          >
            1m
          </span>
          <span
            style={{
              ...timeStyle,
              color: time === "3mo" ? "#FFFFFF" : "#6F7177",
              backgroundColor: time === "3mo" ? "#4B40EE" : "#FFFFFF",
            }}
            onClick={() => {
              setTime("3mo");
               setInterval("1d");
            }}
          >
            3m
          </span>
          <span
            style={{
              ...timeStyle,
              color: time === "6mo" ? "#FFFFFF" : "#6F7177",
              backgroundColor: time === "6mo" ? "#4B40EE" : "#FFFFFF",
            }}
            onClick={() => {
              setTime("6mo");
               setInterval("1wk");
            }}
          >
            6m
          </span>
          <span
            style={{
              ...timeStyle,
              color: time === "1y" ? "#FFFFFF" : "#6F7177",
              backgroundColor: time === "1y" ? "#4B40EE" : "#FFFFFF",
            }}
            onClick={() => {
              setTime("1y");
            setInterval("1wk");
            }}
          >
            1y
          </span>
          <span
            style={{
              ...timeStyle,
              color: time === "max" ? "#FFFFFF" : "#6F7177",
              backgroundColor: time === "max" ? "#4B40EE" : "#FFFFFF",
            }}
            onClick={() => {
              setTime("max");
            setInterval("1mo");
            }}
          >
            max
          </span>
        </p>
      </div>
      <div
        className="chart-container"
        style={{
          width: "100%",
          height: "90%",
          gap: "0px",
          opacity: "0px",
          marginTop: "35px",
        }}
      >
        {fetching ? (
          <div style={{ width: "100%", height: "100%", textAlign: "center" }}>
            Loading...
          </div>
        ) : (
          <HighchartsReact highcharts={Highcharts} options={options} />
        )}
      </div>
    </div>
  );
};

export default Chart;

const timeStyle = {
  width: "49px",
  height: "33px",
  top: "325px",
  left: "541px",
  gap: "0px",
  borderRadius: "5px",
  opacity: "0px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "400",
  fontSize: "18px",
  lineHeight: "22px",
  margin: "0px",
  padding: "0px",
  cursor: "pointer",
};
