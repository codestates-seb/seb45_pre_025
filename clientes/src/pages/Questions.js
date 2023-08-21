import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SideCartegory from '../components/SideCartegory';
import Sidebar from '../components/Sidebar';
import { format } from 'date-fns';
// import axios from 'axios';

const Questions = () => {
  // const [questions, setQuestions] = useState([]);
  // const [totalContents, setTotalContents] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  //const [totalPages, setTotalPages] = useState(0);

  //const apiUrl ='http://ec2-52-79-212-94.ap-northeast-2.compute.amazonaws.com:8080';

  const totalContents = 6;
  const totalPages = 5;
  const questions = [
    {
      id: 6,
      title: '제목',
      bodyProblem: '본문1',
      bodyExpecting: '본문2',
      authorId: 'jimmy',
      views: 0,
      createdAt: '2023-08-20T15:16:38.615824',
      modifiedAt: '2023-08-20T15:16:38.615824',
    },
    {
      id: 5,
      title: '제목',
      bodyProblem: '본문1',
      bodyExpecting: '본문2',
      authorId: 'pepe',
      views: 0,
      createdAt: '2023-08-20T15:16:37.873358',
      modifiedAt: '2023-08-20T15:16:37.873358',
    },
    {
      id: 4,
      title: '제목',
      bodyProblem: '본문1',
      bodyExpecting: '본문2',
      authorId: 'sep',
      views: 0,
      createdAt: '2023-08-20T15:16:36.894058',
      modifiedAt: '2023-08-20T15:16:36.894058',
    },
    {
      id: 3,
      title: '제목',
      bodyProblem: '본문1',
      bodyExpecting: '본문2',
      authorId: 1,
      views: 0,
      createdAt: '2023-08-20T15:15:29.212556',
      modifiedAt: '2023-08-20T15:15:29.212556',
    },
    {
      id: 2,
      title: '제목',
      bodyProblem: '본문1',
      bodyExpecting: '본문2',
      authorId: 1,
      views: 0,
      createdAt: '2023-08-20T15:15:28.335317',
      modifiedAt: '2023-08-20T15:15:28.335317',
    },
    {
      id: 1,
      title: '제목',
      bodyProblem: '본문1',
      bodyExpecting: '본문2',
      authorId: 1,
      views: 0,
      createdAt: '2023-08-20T15:15:27.625862',
      modifiedAt: '2023-08-20T15:15:27.625862',
    },
  ];

  useEffect(() => {
    // const fetchQuestions = async () => {
    //   try {
    //     const response = await fetch(
    //       `${apiUrl}/questions/all?page=${currentPage}&size=${itemsPerPage}`,
    //     );
    //     const data = await response.json();
    //     setQuestions(data.contents);
    //     setTotalContents(data.totalContents);
    //     setTotalPages(data.totalPages);
    //   } catch (error) {
    //     console.error('Error fetching questions:', error);
    //   }
    // };
    // fetchQuestions();
  }, [currentPage, itemsPerPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

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
                  {totalContents} questions with no upvoted or accepted answers
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
          {questions.map((question) => (
            <div className="text-sm flex  p-5 border-b" key={question.id}>
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
                  <span className="pr-1">{question.views}</span>
                  views
                </div>
              </div>
              <div className="w-full ml-3">
                <Link to={`/questions/view?id=${question.id}`}>
                  <div className="text-blue-900 hover:text-blue-500 text-xl cursor-pointer">
                    {question.title}
                  </div>
                </Link>
                <div className="text-yellow-900 text-sm mt-2">
                  {question.bodyProblem}
                </div>
                <div className="flex justify-end text-xs mt-2.5">
                  <div className="text-[#0074CC]">{question.authorId}</div>
                  <div className="ml-2 text-[#6A737C]">
                    asked{' '}
                    {format(
                      new Date(question.createdAt),
                      "MMM d, yyyy 'at' HH:mm",
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center mt-10">
            <div className="flex">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className={`px-4 py-2 mx-1 rounded-md ${
                  currentPage === 1
                    ? 'hidden'
                    : 'hover:bg-gray-200 rounded-md border'
                }`}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 mx-1 rounded-md ${
                    currentPage === index + 1
                      ? 'bg-orange-500 text-white'
                      : 'hover:bg-gray-200 rounded-md border'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className={`px-4 py-2 mx-1 rounded-md ${
                  currentPage === totalPages
                    ? 'hidden'
                    : 'hover:bg-gray-200 rounded-md border'
                }`}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
            <div className="flex justify-end">
              <button
                className={`px-2 py-1 rounded-md border ${
                  itemsPerPage === 15
                    ? 'bg-orange-500 text-white'
                    : 'bg-white hover:bg-gray-200'
                }`}
                onClick={() => handleItemsPerPageChange(15)}
              >
                15
              </button>
              <button
                className={`px-2 py-1 ml-1 rounded-md border ${
                  itemsPerPage === 30
                    ? 'bg-orange-500 text-white'
                    : 'bg-white hover:bg-gray-200'
                }`}
                onClick={() => handleItemsPerPageChange(30)}
              >
                30
              </button>
              <button
                className={`px-2 py-1 ml-1 rounded-md border ${
                  itemsPerPage === 50
                    ? 'bg-orange-500 text-white'
                    : 'bg-white hover:bg-gray-200'
                }`}
                onClick={() => handleItemsPerPageChange(50)}
              >
                50
              </button>
              <div className="ml-3">Per page</div>
            </div>
          </div>
        </div>

        <div className="flex py-4 w-[36%]">
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default Questions;
