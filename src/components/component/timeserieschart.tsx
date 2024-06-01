import { ResponsiveLine } from "@nivo/line"

export function TimeseriesChart() {
    return (
                    <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Total Distance</h3>
                  <p className="text-4xl font-bold">1,234 km</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Total Time</h3>
                  <p className="text-4xl font-bold">120 hrs</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Avg. Pace</h3>
                  <p className="text-4xl font-bold">5:30 min/km</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Avg. Heart Rate</h3>
                  <p className="text-4xl font-bold">145 bpm</p>
                </div>
              </div>
              <div className="mt-6">
                <UserActivityTimeseriesChart className="w-full aspect-[16/9]" />
              </div>
            </div>
    )
}

function UserActivityTimeseriesChart(props) {
  return (
    <div {...props}>
    <ResponsiveLine
    data={[
      {
        id: "Desktop",
        data: [
          { x: "2018-01-01", y: 7 },
          { x: "2018-01-02", y: 5 },
          { x: "2018-01-03", y: 11 },
          { x: "2018-01-04", y: 9 },
          { x: "2018-01-05", y: 12 },
          { x: "2018-01-06", y: 16 },
          { x: "2018-01-07", y: 13 },
        ],
      },
      {
        id: "Mobile",
        data: [
          { x: "2018-01-01", y: 9 },
          { x: "2018-01-02", y: 8 },
          { x: "2018-01-03", y: 13 },
          { x: "2018-01-04", y: 6 },
          { x: "2018-01-05", y: 8 },
          { x: "2018-01-06", y: 14 },
          { x: "2018-01-07", y: 11 },
        ],
      },
    ]}
    margin={{ top: 10, right: 20, bottom: 40, left: 40 }}
    xScale={{
      type: "time",
      format: "%Y-%m-%d",
      useUTC: false,
      precision: "day",
    }}
    xFormat="time:%Y-%m-%d"
    yScale={{
      type: "linear",
      min: 0,
      max: "auto",
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 0,
      tickPadding: 16,
      format: "%d",
      tickValues: "every 1 day",
    }}
    axisLeft={{
      tickSize: 0,
      tickValues: 5,
      tickPadding: 16,
    }}
    colors={["#2563eb", "#e11d48"]}
    pointSize={6}
    useMesh={true}
    gridYValues={6}
    theme={{
      tooltip: {
        chip: {
          borderRadius: "9999px",
        },
        container: {
          fontSize: "12px",
          textTransform: "capitalize",
          borderRadius: "6px",
        },
      },
      grid: {
        line: {
          stroke: "#f3f4f6",
        },
      },
    }}
    role="application"
    />
    </div>
  )
}
