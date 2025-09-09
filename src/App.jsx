import Entry from "./components/Entry";
import Header from "./components/Header";
import travelsData from "./travelsData";

function App() {
  const travels = travelsData.map((vacation) => {
    return <Entry key={vacation.id} {...vacation} />;
  });

  return (
    <>
      <Header />
      <main className="container">{travels}</main>
    </>
  );
}

export default App;
