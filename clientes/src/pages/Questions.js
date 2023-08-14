
import { Link } from 'react-router-dom';

const Questions = () => {
  return (
    <div className="flex justify-center p-20 mb-1.5 ">
      <div className="Question list divide-y divide-slate-200">
        <div className="pl-7">
          <div className="flex justify-between pb-6">
            <h1 className="text-3xl">All Questions</h1>
            <Link to="/questions/ask">
              <button className="p-2 bg-[#0A95FF] text-white rounded-md text-sm cursor-pointer">
                Ask Question
              </button>
            </Link>
          </div>
          <div className="flex justify-between">
            <div>
              <div className="text-xl">1000 Questions</div>
import SideCartegory from '../components/SideCartegory';

const Questions = () => {
  return (
    <main className=" relative top-14 flex justify-between max-w-7xl my-0 mx-auto">
      <SideCartegory />
      <div className="flex w-full">
        <div className="Question list">
          <div className="tittle-wrapper">
            <div className="flex">
              <h1>All Questions</h1>
              <button className="p-2.5">Ask Question</button>
            </div>
            <div className="flex">
              <div>
                <h2>1000 Questions</h2>
              </div>
              <div className="flex">
                <div>
                  <button>Newest</button>
                  <button>Active</button>
                  <button>Unanswered</button>
                  <button>More</button>
                </div>
                <div>
                  <button>Filter</button>
                </div>
              </div>
            </div>
          </div>
          <div>Each Question</div>
        </div>
        <div className="pl-7 ">
          <div>
            <div>votes</div>
            <div>answers</div>
            <div>views</div>
          </div>
          <div>
            <div>
              {/* <div>질문제목.......link to Question</div> */}
              <Link to="/questions/id">
                <div>질문내용 일부.....</div>
              </Link>
            </div>
            <div>
              <div>작성자</div>
              <div>작성시간</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Questions;
