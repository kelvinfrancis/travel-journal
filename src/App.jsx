import Entry from "./components/Entry";
import Header from "./components/Header";

function App() {
  const travels = [
    {
      title: "J A P A N",
      locationTitle: "Mount Fuji",
      locationLink: "",
      date: "12 Jan, 2023 - 24 Jan, 2023",
      details:
        "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
    },
  ];
  return (
    <>
      <Header />
      <main className="container">
      {travels.map((obj) => (
        <Entry
          key={obj.locationTitle}
          title={obj.title}
          location={obj.locationTitle}
          link={obj.locationLink}
          date={obj.date}
          details={obj.details}
        />
      ))}
      </main>
    </>
  );
}

export default App;
