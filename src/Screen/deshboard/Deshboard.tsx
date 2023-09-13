import BarChart from "../../components/Chart/BarChart";
import PopChart from "../../components/Chart/PopChart";
import PieChart from "../../components/Chart/PieChart";
import RadialChart from "../../components/Chart/RadialChart";
import Card from "../../components/Card";
import Paper from "@mui/material/Paper";
import { BsCurrencyDollar } from "react-icons/bs";

const Dashboard = () => {
  return (
    <div className="Main_Container">
      <div className="dashboard_heading">
        <h1>reverseaction-earth Admin-Dashboard</h1>
        <p>Welcome Select an option below to manage your Organization</p>
      </div>
      {/* Card */}
      <div className="dashboard_card">
        <h6>Get Started</h6>
        <div className="sub_dashboard_card">
          <h3>Create a challenge</h3>
          <p style={{textAlign:'center',marginBottom: 10 }}>Set up a challenge to get your organization involved {"\n"} <br /> and have a bigger impact</p>
          <button>Create a Challenge</button>
        </div>
      </div>
      {/* End Card */}
      
      <div className="dash-card" style={{display: "none"}}>
        
        <Card
          title="Your balance"
          amount="$1,000"
          icon={<BsCurrencyDollar />}
        />
      </div>
      <div className="chart-area">
        <Paper elevation={1}>
          <div className="graph">
            <PopChart />
          </div>
        </Paper>
        <Paper elevation={1}>
          <div className="graph">
            <BarChart />
          </div>
        </Paper>
      </div>
      <div>
        <Paper className="graph-2">
          <div></div>
          <div>
            <PieChart />
          </div>
          <div>
            <RadialChart />
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default Dashboard;
