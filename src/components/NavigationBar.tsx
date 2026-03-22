import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div className=" border-b border-gray-200 p-2.5 bg-white">
      <div className="w-[90%] max-w-[1300px] mx-auto ">
        <div className="flex justify-between items-center ">
          <Link to="/">
            <h1 className="text-[32px] text-[#3b82f5] font-bold">AsanSınaq</h1>
          </Link>
          <nav className="flex justify-between items-center gap-8">
            <ul className="flex justify-between items-center gap-8">
              <li>
                <a href="#">Kalkulyator</a>
              </li>
              <li>
                <Link to="/yarimillik">
                  Yarimillik
                </Link>
              </li>
              <li>
                <Link to="#">
                  Haqqimizda
                </Link>
              </li>
            </ul>
            <button className="bg-[#3b82f5] text-white px-5 py-2 rounded-xl text-sm font-bold ">
              Giriş
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
