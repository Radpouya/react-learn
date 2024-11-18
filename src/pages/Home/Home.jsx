import './Home.css';
import {Link} from "react-router-dom";

const Home = () => {
  return (
  <section className='home'>
      <h1 className='title'>You got the travel plans, we got the travel vans.</h1>
      <p className='info'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
      <Link to='vans' className='btn'>Find your van</Link>
  </section>
  )
}

export default Home
