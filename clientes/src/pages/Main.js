import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  const texts = [
    'game developer',
    'data scientist',
    'system admin',
    'mobile developer',
    'developer',
  ]; // 반복될 텍스트 배열
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    // 텍스트 변경과 함께 애니메이션 효과 적용
    setAnimationClass('animate-slideOut');
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setAnimationClass('animate-slideOut');
      setTimeout(() => {
        setAnimationClass(''); // 애니메이션 클래스 제거하여 반복 효과를 위해 리셋
      }, 1000); // setTimeout 시간을 더 길게 지정
    }, 2000); // 2초마다 텍스트 변경

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <main className="relative min-h-screen">
      <section>
        <div className="relative top-14 w-full flex justify-between my-0 mx-auto p-12">
          <div className="bg-gray-700 rounded-md flex justify-center flex-col p-8 h-full  w-full">
            {/* 말풍선 박스 */}
            <div className="flex justify-center">
              {/* 왼쪽 배너 */}
              <div className=" flex flex-col w-1/2 max-w-sm relative">
                <div className="bg-orange-100 rounded-t-md rounded-l-md m-4 p-7 flex flex-col items-center">
                  <svg
                    aria-hidden="true"
                    className="fill-orange-500 mb-4 svg-spot spotSearch"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M29.22 38.1a3.4 3.4 0 0 1 4.81-4.82l8.81 8.81a3.4 3.4 0 0 1-4.81 4.81l-8.81-8.8Z"
                      opacity=".2"
                    />
                    <path d="M18.5 5a1 1 0 1 0 0 2c.63 0 1.24.05 1.84.15a1 1 0 0 0 .32-1.98A13.6 13.6 0 0 0 18.5 5Zm7.02 1.97a1 1 0 1 0-1.04 1.7 11.5 11.5 0 0 1 5.44 8.45 1 1 0 0 0 1.98-.24 13.5 13.5 0 0 0-6.38-9.91ZM18.5 0a18.5 18.5 0 1 0 10.76 33.55c.16.57.46 1.12.9 1.57L40 44.94A3.5 3.5 0 1 0 44.94 40l-9.82-9.82c-.45-.45-1-.75-1.57-.9A18.5 18.5 0 0 0 18.5 0ZM2 18.5a16.5 16.5 0 1 1 33 0 16.5 16.5 0 0 1-33 0Zm29.58 15.2a1.5 1.5 0 1 1 2.12-2.12l9.83 9.83a1.5 1.5 0 1 1-2.12 2.12l-9.83-9.83Z" />
                  </svg>
                  <span className="text-center mb-5 text-xl ">
                    Find the best answer to your technical question, help others
                    answer theirs
                  </span>
                  <Link to="/signup">
                    <button className="bg-orange-500 hover:bg-orange-600 rounded-md px-8 py-3">
                      <span className="text-white ">Join the community</span>
                    </button>
                  </Link>
                  <span className="flex mt-3 text-sm">
                    or{' '}
                    <Link to="/questions">
                      <p className="underline ml-1 cursor-pointer hover:text-orange-600">
                        search content
                      </p>
                    </Link>
                  </span>
                </div>
                <div className="absolute -bottom-6 right-4 w-0 h-0 border-t-[20px] border-t-orange-100 border-r-[20px] border-r-orange-100 border-l-[20px] border-l-gray-700 border-b-[20px] border-b-gray-700 rounded-b-lg" />
              </div>

              {/* 오른쪽 배너 */}
              <div className="flex flex-col w-1/2 max-w-sm relative">
                <div className="bg-blue-100 rounded-t-md rounded-r-md m-4 p-7 flex flex-col items-center h-full">
                  <svg
                    aria-hidden="true"
                    className="fill-blue-500 mb-4 svg-spot spotLock"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M12 22a2 2 0 0 0-2 2v19a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V26a4 4 0 0 0-4-4H12Zm6 7a5 5 0 1 1 7.67 4.23l.05.35c.15.84.36 1.8.61 2.86A2.06 2.06 0 0 1 24.35 39h-2.7a2.06 2.06 0 0 1-1.98-2.56c.29-1.2.52-2.3.66-3.2l-.19-.14A5 5 0 0 1 18 29Z"
                      opacity=".2"
                    />
                    <path d="M23 24a5 5 0 0 0-2.86 9.1l.2.13c-.15.91-.38 2-.67 3.21A2.06 2.06 0 0 0 21.65 39h2.7c1.32 0 2.3-1.26 1.98-2.56a46.74 46.74 0 0 1-.6-2.86l-.06-.35A5 5 0 0 0 23 24Zm0 2a3 3 0 0 1 1.76 5.43l-.16.11a2 2 0 0 0-.91 2c.16.98.4 2.12.7 3.37.01.05-.02.09-.04.09h-2.7c-.02 0-.05-.04-.04-.09.3-1.25.54-2.4.7-3.36a2 2 0 0 0-.78-1.92l-.13-.09A3 3 0 0 1 23 26ZM12 12.44V18H9a3 3 0 0 0-3 3v21a3 3 0 0 0 3 3h28a3 3 0 0 0 3-3V21a3 3 0 0 0-3-3h-3v-5.56C34 6.2 29.36 1 23 1S12 6.19 12 12.44ZM23 3c5.14 0 9 4.18 9 9.44V18H14v-5.56C14 7.18 17.86 3 23 3ZM9 20h28a1 1 0 0 1 1 1v21a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V21a1 1 0 0 1 1-1Z" />
                  </svg>
                  <span className="text-center mb-5 text-xl">
                    Want a secure, private space for your technical knowledge?
                  </span>
                  <button className="bg-blue-500 hover:bg-blue-600 rounded-md px-8 py-3 cursor-not-allowed">
                    <span className="text-white">Discover Teams</span>
                  </button>
                </div>
                <div className="absolute -bottom-6 left-4 w-0 h-0 border-t-[20px] border-t-blue-100 border-r-[20px] border-r-gray-700 border-l-[20px] border-l-blue-100 border-b-[20px] border-b-gray-700 rounded-b-lg" />
              </div>
            </div>
            {/* 말풍선 박스 끝 */}

            {/* 움직이는 글자 */}
            <div className="flex flex-col items-center font-Roboto font-bold text-white text-6xl my-20">
              <span className="my-2">Every</span>
              <span
                className={`text-orange-500 my-2 animate-slideOut ${animationClass}`}
              >
                {texts[currentIndex]}
              </span>
              <span className="my-2">has a tab open to</span>
              <span className="my-2">Stack Overflow</span>
            </div>
            {/* 움직이는 글자 끝 */}
            <div className="h-2 w-16 bg-gray-500 rounded-md mx-auto" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
