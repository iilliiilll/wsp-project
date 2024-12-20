import './App.css';
import Header from './Header';
import Footer from './Footer';
import PlayerList from './PlayerList';

function App() {
  return (
    <div>
      <Header />
      <div className="app__player-list">
        <PlayerList />
      </div>
      <Footer />
    </div>
  );
}

export default App;


