import { Link } from 'react-router-dom';
import SideCartegory from '../components/SideCartegory';
import Sidebar from '../components/Sidebar';
// import { useEffect } from 'react';
// import axios from 'axios';

const QuestionParams = new URLSearchParams(window.location.search);
const QuestionQuery = QuestionParams.get('id');
// const [answer, setAnswer] = useState(null);

// useEffect(() => {
//   axios
//     .get('{{baseURL}}/questions?page=1&size=3')
//     .then((response) => {
//       setAnswer(response.data);
//     })
//     .catch((error) => {
//       console.log('Error', error);
//     });
// }, []);

const answersDetails = [
  {
    id: 1,
    title: '제목1',
    body: '본문',
    authorId: 0,
    createdAt: '2023-08-16T23:19:49.0995',
    modifiedAt: '2023-08-16T23:19:49.0995',
  },
  {
    id: 2,
    title: '제목2',
    body: '본문',
    authorId: 0,
    createdAt: '2023-08-16T23:19:49.0995',
    modifiedAt: '2023-08-16T23:19:49.0995',
  },
  {
    id: 3,
    title: '제목3',
    body: '본문',
    authorId: 0,
    createdAt: '2023-08-16T23:19:49.0995',
    modifiedAt: '2023-08-16T23:19:49.0995',
  },
  {
    id: 4,
    title: '제목3',
    body: '본문',
    authorId: 0,
    createdAt: '2023-08-16T23:19:49.0995',
    modifiedAt: '2023-08-16T23:19:49.0995',
  },
];

const Questions = () => {
  return (
    <main className="relative top-14  max-w-7xl w-full flex justify-between my-0 mx-auto">
      <SideCartegory />
      <div className="flex flex-row w-full">
        <div className=" m-6 max-w-5xl w-full">
          <div className="border-b w-full">
            <div className="flex justify-between pb-6">
              <h1 className="text-3xl">All Questions</h1>
              <Link to="/questions/ask">
                <button className="p-2 bg-[#0A95FF] text-white rounded-md text-sm cursor-pointer">
                  Ask Question
                </button>
              </Link>
            </div>
            <div className="flex justify-between items-center h-16 w-full">
              <div className="flex w-1/3 mr-4">
                <h2 className="text-lg text-gray-600 box-content">
                  7,308,283 questions with no upvoted or accepted answers
                </h2>
              </div>
              <div className="flex justify-between items-center text-sm w-auto">
                <div className="flex items-center border border-slate-300 rounded-md h-8">
                  <button className="px-2.5 h-full">
                    <span className="">Newest</span>
                  </button>
                  <button className="border-l border-r px-2.5 h-full">
                    <span className="">Active</span>
                  </button>
                  <button className="border-r px-2.5 h-full">
                    <span className="">Unanswered</span>
                  </button>
                  <button>
                    <span className="h-full px-2.5">More</span>
                  </button>
                </div>
                <div className="">
                  <button className="flex items-center ml-4 space-x-1 h-8 px-4 bg-[#E1ECF4] text-[#39739D] rounded-md text-sm">
                    <img
                      src="/images/Vector.svg"
                      alt="열기 아이콘"
                      className="h-3 w-3"
                    />
                    <span className="">Filter</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {answersDetails.map((answer) => (
            <div className="text-sm flex  p-5 border-b" key={answer.answerId}>
              <div className="flex  flex-col justify-start items-end">
                <div className="mx-1  px-1 py-1">
                  <span className="pr-1">0</span>
                  votes
                </div>
                <div className="mx-1 border border-green-600 text-green-600 rounded px-1 py-1">
                  <span className="pr-1">0</span>
                  answers
                </div>
                <div className="mx-1  px-1 py-1 text-yellow-900">
                  <span className="pr-1">0</span>
                  views
                </div>
              </div>
              <div className="w-auto ml-3">
                <Link to={`/questions/id?=${QuestionQuery}`}>
                  {/* 타이틀 */}
                  <div className="text-blue-900 text-xl">
                    Why does tmap render 80 times faster than ggplot2? [Plotting
                    shapefiles in R with ggplot2::geom_sf(), using XQuartz/X11
                    graphics device on macOS]
                  </div>
                </Link>
                {/* Suv Title */}
                <div className="text-yellow-900 text-sm mt-2">
                  Update/Edit/Reprex: Rendering the same spatial data with the
                  same graphics device takes 1 second with tmap versus 80
                  seconds with ggplot2, even though the tmap plot&rsquo;s R
                  object is 80x larger in size. ...
                </div>
                <div className="flex text-xs justify-end mt-4">
                  {/* 작성자 */}
                  <div>dad 1,335</div>
                  {/* 작성 시간 */}
                  <div>asked Jul 1, 2018 at 18:42</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex py-4 w-[36%]">
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default Questions;
