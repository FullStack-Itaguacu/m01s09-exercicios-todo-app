import { Header } from "./components/Header";

import { Home } from "./pages/Home";

export const App = () => {
  return (
    <div>
      <Header />
      <main className="container mt-4">
        <Home />
        {/* <QuemSou /> */}
      </main>
    </div>
  );
};
