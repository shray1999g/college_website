import GlobalHeader from './Components/GlobalHeader.jsx';
import { HashRouter } from 'react-router-dom';
import { useState } from 'react';
import PageContainer from './Components/PageContainer.jsx';
import Footer from './Components/Footer.jsx';





function App() {
  const [shouldHeaderCollaps, setShouldHeaderCollaps] = useState(false)

  const OnPageScroll = (event) => {
    if (event.target.scrollTop > 100 && shouldHeaderCollaps === false) {
      setShouldHeaderCollaps(true)
    }
    else if (event.target.scrollTop < 100 && shouldHeaderCollaps === true) {
      setShouldHeaderCollaps(false)
    }
  }

  return (
    <HashRouter>
      <div id='App'>
        <GlobalHeader shouldCollaps={shouldHeaderCollaps} />
        <div id='AppBody' onScroll={OnPageScroll}>
          <div className="Page">
            <PageContainer />
            <Footer />
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
