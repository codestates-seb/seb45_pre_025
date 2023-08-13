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
        <div>sidebar component</div>
      </div>
    </main>
  );
};

export default Questions;
