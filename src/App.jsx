import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Page from "./components/Page";
import { useLocation } from "react-router-dom";


function App() {
  const currentPage = useLocation().pathname;

  return (
    <div>
      <Header/>
      <Nav currentPage={currentPage} />
      <Page currentPage={currentPage}/>
      <Footer currentPage={currentPage}/>
    </div>
  );

}

export default App;
