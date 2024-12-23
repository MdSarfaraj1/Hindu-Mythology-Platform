
import Layout from "../Layout";
import Dashboard_Layout from "./Dashboard_Layout"
function Dashboard() {
  
    return ( 
        <Layout children={<Dashboard_Layout/>}/>
     );
}

export default Dashboard;