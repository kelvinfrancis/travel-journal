import Entry from "./components/Entry";
import Header from "./components/Header";
import mountFuji from "./assets/mount-fuji.jpg";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Entry
          img={{
            src: mountFuji,
            alt: "Mount Fuji",
          }}
          title={"J A P A N"}
          location={"Mount Fuji"}
          link={"https://maps.app.goo.gl/urXtw6syDTkpj7LJ8"}
          date={"12 Jan, 2023 - 24 Jan, 2023"}
          details={"Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."}
        />
      </main>
    </>
  );
}

export default App;
