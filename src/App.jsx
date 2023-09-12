import './App.css';
import Profil from './components/Profil';

function App() {
  return (
    <>
      <h1>hello</h1>
      <main className="content">
        <Profil
          name="suzan Do"
          img="https://blush.design/api/download?shareUri=OUUkodZu6wdJau6c&c=Backdrop_0%7Eebad7f_Hair_0%7Eb58143_Skin_0%7Eeac7a8_Top_0%7Ee65f5e&w=800&h=800&fm=png"
          phone="11315214"
        />

        <Profil
          name="suzan Do2"
          img="https://blush.design/api/download?shareUri=Z_6liIgYXKkIkB3j&c=Backdrop_0%7Eebad7f_Hair_0%7Eb58143_Skin_0%7Eeac7a8_Top_0%7Ee65f5e&w=800&h=800&fm=png"
          phone="11315214"
        />
      </main>
    </>
  );
}

export default App;
