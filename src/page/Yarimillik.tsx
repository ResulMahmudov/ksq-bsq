interface ScoreBarProps {
  score: number; // 0-100 arası
}

const Yarimillik = ({ score }: ScoreBarProps) => {
  return (
    <div className=" flex flex-col md:items-start md:justify-start gap-10  items-center justify-center mt-[48px] mb-10">
      <div className=" flex flex-col md:items-start md:justify-start text-center">
        <h1 className="md:text-[32px]  text-[24px] font-bold">
          illik Bal Hesablayıcı
        </h1>
        <p className="text-sm text-gray-400 text-center ">
          Yarımil ballarınızı daxil edərək illik nəticənizi dərhal öyrənin
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex md:flex-row  flex-col md:justify-between md:items-center gap-6">

          <div className="bg-white border border-[#f2f6fa]  border-2 rounded-[12px] p-6 flex flex-col items-center justify-center md:gap-4 gap-2 md:w-[548px]  md:h-[348px] w-[358px] h-[308px] ">
            <div className="flex flex-col items-center justify-center gap-2">
              <h1 className="flex items-center justify-center border-[#d2dffa] border-[4px] border-solid w-[36px] h-[36px] rounded-[6px] text-[16px] text-[#d2dffa] font-medium">
                1
              </h1>
              <h2 className="font-medium md:text-[22px] text-[18px]">I Yarımil</h2>
            </div>
            <div className="flex flex-col items-start justify-start">
              <label className="text-[#93a2b8]  md:text-xl text-sm ">Balı Daxil Edin</label>
              <input
                type="number"
                placeholder="0"
                className=" md:w-[170px] md:h-[60px] w-[128px] h-14 rounded-[16px] font-bold md:text-xl text-[18px] bg-[#f7fafc] text-center  focus:border-[#3b82f5]. "
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="md:w-16 md:h-16  w-12 h-12 rounded-full bg-[#11ba82] flex items-center justify-center text-2xl">
                <h1 className="text-white font-bold text-2xl">5</h1>
              </div>
              <span className="text-[#afbbc9]">Yarımil Qiymət</span>
            </div>
          </div>

          <div className="border border-[#f2f6fa] border-2 bg-white rounded-[12px] flex flex-col items-center justify-center  md:gap-4 gap-2 md:w-[548px] md:h-[348px] w-[358px] h-[308px]">
            <div className="flex flex-col items-center justify-center gap-2">
              <h1 className="flex items-center justify-center border-[#d2dffa] border-[4px] border-solid w-[36px] h-[36px] rounded-[6px] text-[16px] text-[#d2dffa] font-medium">
                2
              </h1>
              <h2 className="font-medium md:text-[22px] text-[18px]">II Yarımil</h2>
            </div>
            <div className="flex flex-col items-start justify-start">
              <label className="text-[#93a2b8] md:text-xl text-sm">Balı Daxil Edin</label>
              <input
                type="number"
                placeholder="0"
                className=" md:w-[170px] md:h-[60px] w-[128px] h-14 rounded-[16px]  font-bold md:text-xl text-[18px] bg-[#f7fafc] text-center focus:border-[#3b82f5]"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="md:w-16 md:h-16  w-12 h-12 rounded-full bg-[#e1e8f0] flex items-center justify-center text-2xl">
                <h1>-</h1>
              </div>
              <span className="text-[#afbbc9]">Yarımil Qiymət</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-10 bg-white md:py-12 md:px-26 p-6 rounded-2xl">
          <div className="flex flex-col items-center justify-center gap-8">
            <span className="text-[#2563EB] text-[16px] font-medium">İllik Nəticə</span>
            <h1 className="text-8xl font-bold">{score}</h1>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <div className="relative md:w-[402px] md:h-[16px]  w-[302px] h-[12px] rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    'linear-gradient(to right, #e74c3c, #e67e22, #f1c40f, #2ecc71)',
                }}
              />

              <div
                className="absolute top-0 right-0 h-full bg-gray-200 dark:bg-gray-700 rounded-r-full transition-all duration-500"
                style={{ width: `${100 - score}%` }}
              />
            </div>
            <div className="flex w-full justify-between items-center">
              <span>0</span>
              <span>50</span>
              <span>100</span>
            </div>
          </div>

          <div className="flex gap-3 items-center justify-center bg-[#ebfcf4] w-[159px] h-10 rounded-full">
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.6 21L5.7 17.8L2.1 17L2.45 13.3L0 10.5L2.45 7.7L2.1 4L5.7 3.2L7.6 0L11 1.45L14.4 0L16.3 3.2L19.9 4L19.55 7.7L22 10.5L19.55 13.3L19.9 17L16.3 17.8L14.4 21L11 19.55L7.6 21ZM8.45 18.45L11 17.35L13.6 18.45L15 16.05L17.75 15.4L17.5 12.6L19.35 10.5L17.5 8.35L17.75 5.55L15 4.95L13.55 2.55L11 3.65L8.4 2.55L7 4.95L4.25 5.55L4.5 8.35L2.65 10.5L4.5 12.6L4.25 15.45L7 16.05L8.45 18.45ZM9.95 14.05L15.6 8.4L14.2 6.95L9.95 11.2L7.8 9.1L6.4 10.5L9.95 14.05Z"
                fill="#059669"
              />
            </svg>
            <h1>Əla Nəticə</h1>
          </div>

          <div className="w-full h-[1px] bg-[#f2f6fa]"></div>

          <div className="flex md:flex-row md:justify-between md:items-center flex-col   gap-4 w-full">
            <div className="md:w-[450px] flex flex-col items-center justify-center bg-[#F8FAFC] p-4 rounded-2xl">
              <span className="text-[#94A3B8] text-[16px] font-medium">I YARIMIL BAL </span>
              <h1 className="text-[22px] font-medium">87.5</h1>
            </div>

            <div className="md:w-[450px] flex flex-col items-center justify-center  bg-[#F8FAFC] p-4 rounded-2xl">
              <span className="text-[#94A3B8] text-[16px] font-medium">II YARIMIL BAL </span>
              <h1 className="text-[22px] font-medium">89.2</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yarimillik;
