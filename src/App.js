import Header from "./component/Header";
import MainContent from "./component/MainContent";
import MainImg from "./component/MainImg";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <MainContent />
        <MainImg />
      </main>
    </div>
  );
}

export default App;