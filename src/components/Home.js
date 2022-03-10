import indoorPlant from '../images/indoorPlant.jpg'

function Home () {
  return (
    <div className="Home">
      <img src={indoorPlant} alt="Indoor Plant" className="home__picture"/> 
      <aside><div className="home__text">WE HAVE PLANTS! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div></aside>
    </div>
  );
}

export default Home;