import {
  Header,
  RecentSearches,
  SearchResultTable,
  VinForm,
} from "../../components";
import "./MainPage.css";

export const MainPage = () => {
  return (
    <div className="mainPage">
      <Header />
      <main className="main">
        <div className="main__container">
          <section className="decoder">
            <h1 className="decoder__title">
              Розшифруйте ідентифікаційний номер транспортного засобу,
              використовуючи базу даних NHTSA.
            </h1>
            <VinForm />
          </section>
          <section className="decoder__recent-searches">
            <RecentSearches />
          </section>
          <section className="decoder__result">
            <SearchResultTable />
            </section>
          </div>
      </main>
    </div>
  );
};
