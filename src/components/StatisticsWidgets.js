import { CCol, CRow, CWidgetStatsE } from "@coreui/react";
import { CChartBar, CChartLine } from "@coreui/react-chartjs";
import React, { useEffect, useState } from "react";
import { getUserStats } from "../services/user.service";
import CountUp from 'react-countup';

function StatisticsWidgets() {

  const [dailyVisits, setDailyVisits] = useState(null)
  const [livePlayers, setLivePlayers] = useState(null)

  useEffect(() => {
    getUserStats().then(res => {
      const data = res?.data[0]?.attributes

      setDailyVisits(data?.dailyVisit)
      setLivePlayers(data?.livePlayers)
    })
  }, [])
  
  return (
    <>
      <CRow>
        <CCol md={6} xs={12}>
          <CWidgetStatsE
            className="mb-3"
          
            style={{backgroundColor: '#F2502C'}}
            chart={
              <CChartBar
              
                className="mx-auto"
                style={{ height: "40px", width: "80px", color: '#ffff' }}
                data={{
                  labels: [
                    "M",
                    "T",
                    "W",
                    "T",
                    "F",
                    "S",
                    "S",
                    "M",
                    "T",
                    "W",
                    "T",
                    "F",
                    "S",
                    "S",
                    "M",
                  ],
                  datasets: [
                    {
                      backgroundColor: "#321fdb",
                      borderColor: "transparent",
                      borderWidth: 1,
                      data: [
                        41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67, 45,
                        47,
                      ],
                    },
                  ],
                }}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    x: {
                      display: false,
                    },
                    y: {
                      display: false,
                    },
                  },
                }}
              />
            }
            title={<span style={{color: 'whitesmoke'}}>Daily Visits</span>}
            value={<h1 style={{color: 'whitesmoke', fontWeight: 'bolder'}}><CountUp start={0} duration={4} end={dailyVisits} /></h1>}
          />
        </CCol>
        <CCol md={6} xs={12}>
          <CWidgetStatsE
          style={{backgroundColor: '#DAA403'}}
            className="mb-3"
            chart={
              <CChartLine
                className="mx-auto"
                style={{ height: "40px", width: "80px" }}
                data={{
                  labels: [
                    "M",
                    "T",
                    "W",
                    "T",
                    "F",
                    "S",
                    "S",
                    "M",
                    "T",
                    "W",
                    "T",
                    "F",
                    "S",
                    "S",
                    "M",
                  ],
                  datasets: [
                    {
                      backgroundColor: "transparent",
                      borderColor: "#F2502C",
                      borderWidth: 2,
                      data: [
                        41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67, 45,
                        47,
                      ],
                    },
                  ],
                }}
                options={{
                  maintainAspectRatio: false,
                  elements: {
                    line: {
                      tension: 0.4,
                    },
                    point: {
                      radius: 0,
                    },
                  },
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    x: {
                      display: false,
                    },
                    y: {
                      display: false,
                    },
                  },
                }}
              />
            }
            title={<span style={{color: 'whitesmoke'}}>Live Players</span>}
            value={<h1 style={{color: 'whitesmoke', fontWeight: 'bolder'}}><CountUp start={0} duration={4} end={livePlayers} /></h1>}
          />
        </CCol>
      </CRow>
    </>
  );
}

export default StatisticsWidgets;
