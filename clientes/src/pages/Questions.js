const Questions = () => {
  return (
    <div className="flex justify-center p-24">
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
  );
};

export default Questions;
