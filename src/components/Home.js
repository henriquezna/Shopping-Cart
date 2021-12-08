import indoorPlant from '../images/indoorPlant.jpg'

function Home () {
  return (
    <div className="Home">
      <img src={indoorPlant} alt="Indoor Plant" width="75%" height="100%" /> 
      <aside>WE HAVE PLANTS Lorem ipsum dolor sit amet</aside>
    </div>
  );
}

export default Home;