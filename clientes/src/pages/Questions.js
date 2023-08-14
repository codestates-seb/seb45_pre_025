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
            </div>
            <div className="flex space-x-4 mb-2.5 text-sm">
              <div className="flex border border-slate-300 rounded-md">
                <button className="">
                  <span className="p-2.5">Newest</span>
                </button>
                <button className="border-l border-r">
                  <span className="p-2.5">Active</span>
                </button>
                <button className="border-r">
                  <span className="p-2.5">Unanswered</span>
                </button>
                <button>
                  <span className="p-2.5">More</span>
                </button>
              </div>
              <div className="">
                <button className="flex items-center space-x-1 p-1.5 bg-[#E1ECF4] text-[#39739D] rounded-md text-sm">
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
      <div>sidebar component</div>
    </div>
  );
};

export default Questions;
