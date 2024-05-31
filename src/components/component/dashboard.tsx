import Link from "next/link"
import { ResponsiveLine } from "@nivo/line"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

export function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-[#fc5200] py-4 px-6 text-white">
        <div className="container mx-auto flex items-center justify-between">
          <Link className="text-xl font-bold" href="#">
            Fitness Sync
          </Link>
          <nav className="space-x-4">
            <Link className="hover:underline" href="#">
              Dashboard
            </Link>
            <Link className="hover:underline" href="#">
              Goals
            </Link>
            <Link className="hover:underline" href="#">
              Training
            </Link>
            <Link className="hover:underline" href="#">
              Settings
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 bg-[#00000] py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                <TimeseriesChart className="w-full aspect-[16/9]" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Goals</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Distance Goal</h3>
                  <Progress value={75} />
                  <p className="text-gray-500 text-sm mt-2">1,500 km</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Time Goal</h3>
                  <Progress value={60} />
                  <p className="text-gray-500 text-sm mt-2">150 hrs</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Pace Goal</h3>
                  <Progress value={85} />
                  <p className="text-gray-500 text-sm mt-2">5:00 min/km</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Heart Rate Goal</h3>
                  <Progress value={90} />
                  <p className="text-gray-500 text-sm mt-2">150 bpm</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Training Recommendations</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Interval Training</h3>
                  <p className="text-gray-500">
                    Improve your speed and endurance with high-intensity interval training.
                  </p>
                  <Button className="mt-2 bg-[#fc5200] text-white hover:bg-[#fc5200]/90">View Workout</Button>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Hill Repeats</h3>
                  <p className="text-gray-500">Strengthen your leg muscles and boost your climbing power.</p>
                  <Button className="mt-2 bg-[#fc5200] text-white hover:bg-[#fc5200]/90">View Workout</Button>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Recovery Run</h3>
                  <p className="text-gray-500">Allow your body to rest and recover between intense workouts.</p>
                  <Button className="mt-2 bg-[#fc5200] text-white hover:bg-[#fc5200]/90">View Workout</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-[#fc5200] py-4 text-white">
        <div className="container mx-auto text-center">
          <p>© 2023 Fitness Sync. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function TimeseriesChart(props) {
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
