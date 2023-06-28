import Canvas from "./components/Canvas";
import Header from "./components/Header";

import bgc from "./assets/bg.jpg";
import Footer from "./components/Footer";

function App() {
  const backgroundImage = {
    backgroundImage: `url(${bgc})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
  };

  return (
    <>
      <div style={backgroundImage}>
        <Header />
        <Canvas />
        <Footer />
      </div>
    </>
  );
}

export default App;
