import { useEffect, useState } from "react";
import axios from "axios";

import Analysis from "./components/Analysis";
import Chart from "./components/Chart";
import Settings from "./components/Settings";
import Summary from "./components/Summary";
import Statistics from "./components/Statistics";

const menuStyle = {
  height: "100%",
  opacity: "0px",
  fontFamily: "sans-serif",
  fontSize: "18px",
  fontWeight: "400",
  lineHeight: "22.77px",
  cursor: "pointer",
  textAlign: "center",
};

function App() {
  const [actTab, setActTab] = useState("chart");
  const [data, setData] = useState({});
  const [fetching, setFetching] = useState(false);
  
  const options = {
    method: 'GET',
    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-analysis',
    params: {
      symbol: 'MSFT',
      region: 'US'
    },
    headers: {
      'x-rapidapi-key': 'b4d65265d9msha693a38b3747b6cp1982acjsnf8e66503d15b',
      'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
  };

  const fetchData = async () => {
    try {
      setFetching(true);
      const response = await axios.request(options);
      setData(response.data);
      setFetching(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
      fetchData();
  }, []);

  return (
    fetching ? <div style={{ width: "100%", height: "100%", textAlign: "center", fontFamily: "sans-serif", fontSize: "25px", fontWeight: "600", lineHeight: "25px", marginTop: "300px"}}>Loading...</div> :
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "15px",
      }}
    >
      <div
        style={{
          width: "880px",
          height: "750px",
          backgroundColor: "fff",
          padding: "60px",
          margin: "0px",
        }}
      >
        <div
          className="stock-price"
          style={{
            width: "326px",
            height: "122px",
            margin: "0px",
            padding: "0px",
          }}
        >
          <p
            style={{
              margin: "0px",
              padding: "0px",
              height: "89px",
              FontFamily: "sans-serif",
              fontWeight: "400",
              fontSize: "66px",
              lineHeight: "88px",
              color: "#1A243A",
              display: "flex",
            }}
          >
            {data?.financialData?.currentPrice?.fmt}
            <span
              style={{
                width: "49px",
                height: "60px",
                top: "0px",
                gap: "0px",
                opacity: "0px",
                fontFamily: "sans-serif",
                fontSize: "24px",
                fonWeight: "400",
                lineHeight: "30.36px",
                textAlign: "left",
                color: "#BDBEBF",
                paddingTop: "17px"
              }}
            >
              USD
            </span>
          </p>
          <p
            style={{
              width: "141px",
              height: "23px",
              top: "159px",
              left: "60px",
              gap: "0px",
              opacity: "0px",
              fontFamily: "sans-serif",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "22.77px",
              textAlign: "left",
              color: data?.financialData?.currentPrice?.fmt - data?.summaryDetail?.open?.fmt >= 0 ? "#67BF6B" : "red",
            }}
          >
            {(data?.financialData?.currentPrice?.fmt - data?.summaryDetail?.open?.fmt).toFixed(2)} ({((data?.financialData?.currentPrice?.fmt - data?.summaryDetail?.open?.fmt)/data?.summaryDetail?.open?.fmt).toFixed(4)*100}%) 
          </p>
        </div>
        <div
          className="menu"
          style={{
            width: "880px",
            height: "43px",
            opacity: "0px",
            marginTop: "40px",
            borderBottom: "1px solid #EFF1F3",
            display: "flex",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <span
            style={{
              ...menuStyle,
              width: "95px",
              color: actTab === "summary" ? "#1A243A" : "#6F7177",
              borderBottom: actTab === "summary" ? "3px solid #4B40EE" : "none",
            }}
            className="summary"
            onClick={() => setActTab("summary")}
          >
            Summary
          </span>
          <span
            style={{
              ...menuStyle,
              width: "60px",
              color: actTab === "chart" ? "#1A243A" : "#6F7177",
              borderBottom: actTab === "chart" ? "3px solid #4B40EE" : "none",
            }}
            className="chart"
            onClick={() => setActTab("chart")}
          >
            Chart
          </span>
          <span
            style={{
              ...menuStyle,
              width: "95px",
              color: actTab === "statistics" ? "#1A243A" : "#6F7177",
              borderBottom:
                actTab === "statistics" ? "3px solid #4B40EE" : "none",
            }}
            className="statistics"
            onClick={() => setActTab("statistics")}
          >
            Statistics
          </span>
          <span
            style={{
              ...menuStyle,
              width: "97px",
              color: actTab === "analysis" ? "#1A243A" : "#6F7177",
              borderBottom:
                actTab === "analysis" ? "3px solid #4B40EE" : "none",
            }}
            className="analysis"
            onClick={() => setActTab("analysis")}
          >
            Analysis
          </span>
          <span
            style={{
              ...menuStyle,
              width: "97px",
              color: actTab === "settings" ? "#1A243A" : "#6F7177",
              borderBottom:
                actTab === "settings" ? "3px solid #4B40EE" : "none",
            }}
            className="settings"
            onClick={() => setActTab("settings")}
          >
            Settings
          </span>
        </div>
        <div className="content">
          {actTab === "summary" && <Summary data={data} />}
          {actTab === "chart" && <Chart />}
          {actTab === "statistics" && <Statistics data={data} />}
          {actTab === "analysis" && <Analysis data={data} />}
          {actTab === "settings" && <Settings />}
        </div>
      </div>
    </div>
  );
}

export default App;
