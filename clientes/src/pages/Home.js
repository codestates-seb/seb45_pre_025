import { Link } from 'react-router-dom';
import SideCartegory from '../components/SideCartegory';
import Sidebar from '../components/Sidebar';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

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

const QuestionParams = new URLSearchParams(window.location.search);
const QuestionQuery = QuestionParams.get('id');

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
    title: '제목4',
    body: '본문',
    authorId: 0,
    createdAt: '2023-08-16T23:19:49.0995',
    modifiedAt: '2023-08-16T23:19:49.0995',
  },
];

const Home = () => {
  return (
    <main className="relative top-14  max-w-7xl w-full flex justify-between my-0 mx-auto">
      <SideCartegory />
      <div className="flex flex-row w-full">
        <div className="w-full max-w-5xl m-6">
          <div className="border-b w-full">
            <div className="flex justify-between pb-6">
              <h1 className="text-3xl">Top Questions</h1>
              <Link to="/questions/ask">
                <button className="p-2 bg-[#0A95FF] text-white rounded-md text-sm cursor-pointer">
                  Ask Question
                </button>
              </Link>
            </div>
            <div className="flex justify-end items-center h-16 w-full">
              <div className="flex justify-between items-center text-sm w-auto">
                <div className="flex items-center border border-slate-300 rounded-md h-8">
                  <button className="px-2.5 h-full">
                    <span className="">Interesting</span>
                  </button>
                  <button className="border-l border-r px-2.5 h-full">
                    <span className="">Hot</span>
                  </button>
                  <button className="border-r px-2.5 h-full">
                    <span className="">Week</span>
                  </button>
                  <button>
                    <span className="h-full px-2.5">More</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {answersDetails.map((answer) => (
            <div
              className="text-sm flex p-5 border-b justify-between"
              key={answer.answerId}
            >
              <div className="flex  flex-col justify-start items-end">
                <div className="mx-1 px-1 py-1">
                  <span className="pr-1">0</span>
                  votes
                </div>
                <div className="mx-1 border border-green-600 text-green-600 rounded px-1 py-1">
                  <span className="pr-1">0</span>
                  answers
                </div>
                <div className="mx-1 px-1 py-1 text-yellow-900">
                  <span className="pr-1">0</span>
                  views
                </div>
              </div>

              <div className="w-full ml-4 flex flex-col">
                <Link to={`/questions/id?=${QuestionQuery}`}>
                  {answersDetails.id}
                  <div className="text-blue-700 text-xl">
                    How do atomics larger than the CPU&rsquo;s native support
                    work
                  </div>
                </Link>
                <div className="flex text-xs justify-end mt-4">
                  {answersDetails.authorId}
                  <div className="text-blue-500 font-medium">Daniel Beck</div>
                  <div className="mx-2 font-semibold">20.5k</div>
                  {answersDetails.createdAt}
                  <div className="text-blue-500 font-medium">
                    answered 1 min ago
                  </div>
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

export default Home;
