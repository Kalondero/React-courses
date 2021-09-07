import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';


function App() {
  return (
    <div className="m-3">
      <Counter title = "Counter 1" value ={1} image1="images/profile.png"  />
      <Counter title = "Counter 2" value ={2} image2="images/chat.jpg"  />
      <Counter title = "Counter 2" value ={3} image3="images/pp.jpg"  />
    </div>
  );
}

export default App;
