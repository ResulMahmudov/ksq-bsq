import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Smester from './page/Smester';
import Yarimillik from './page/Yarimillik';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='min-h-screen bg-[#f7f5f5]'>
      <NavigationBar />
      <div className="w-[90%] max-w-[1300px] mx-auto my-0">
        <div>
          <Routes>
            <Route path="/" element={<Smester />} />

            <Route path="/yarimillik" element={<Yarimillik />} />

            {/* Səhv link yazılarsa (404), bura istədiyin bir mesajı və ya komponenti qoya bilərsən */}
            <Route
              path="*"
              element={<h1 className="text-center mt-10">Səhifə tapılmadı!</h1>}
            />
          </Routes>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
