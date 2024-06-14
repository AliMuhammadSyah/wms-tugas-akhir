import { Contents, Logobar, Navbar, Sidebar } from "../components/PemilikComponent"

const PemilikDashboard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 h-screen">
      <div className="col-span-1 grid grid-rows-9 h-full lg:h-screen">
        <div className="row-span-1">
          <Logobar />
        </div>
        <div className="row-span-8">
          <Sidebar />
        </div>
      </div>
      <div className="col-span-4 grid grid-rows-9 h-full lg:h-screen">
        <div className="row-span-1">
          <Navbar />
        </div>
        <div className="row-span-8 overflow-y-auto">
          <Contents />
        </div>
      </div>
    </div>
  )
}

export default PemilikDashboard
