import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div style={{textAlign:"center", marginTop:"100px"}}>
        <h1>AURA OS</h1>
        <p>Your Life. Organized. Optimized. Automated.</p>
        <p>Created by Aaryan Anand Mudvikar</p>
      </div>
    </div>
  );
}
