import { useEffect } from 'react';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const QuestionsAsk = () => {
  useEffect(() => {
    const editor1 = new Editor({
      el: document.querySelector('#editor1'),
      height: 'auto',
      initialEditType: 'markdown',
      previewStyle: 'tab',
    });

    const editor2 = new Editor({
      el: document.querySelector('#editor2'),
      height: 'auto',
      initialEditType: 'markdown',
      previewStyle: 'tab',
      //placeholder: ['Write your question here'],
    });

    return () => {
      editor1.destroy();
      editor2.destroy();
    };
  }, []);

  return (
    <div className="flex justify-center bg-[#F8F9F9] pt-20 px-60 w-full">
      <div className="felx flex-col bg-[#F8F9F9] px-3 pb-6 ">
        <div className="">
          <div className="flex justify-between mb-4">
            <h1 className="text-3xl font-semibold">Ask a public question</h1>
            <img
              src="/images/background.svg"
              alt="background"
              className="w-1/2"
            />
          </div>
          <div className="flex">
            <div className="bg-[#EBF4FB] border rounded-md p-6 w-2/3 mb-4">
              <h2 className="text-2xl">Writing a good question</h2>
              <p>
                You’re ready to
                <a
                  href="https://stackoverflow.com/help/how-to-ask"
                  className="text-blue-500"
                >
                  {' '}
                  ask{' '}
                </a>
                a
                <a
                  href="https://stackoverflow.com/help/on-topic"
                  className="text-blue-500"
                >
                  {' '}
                  programming-related question
                </a>
                and this form will help guide you through the process.
              </p>
              <p>
                Looking to ask a non-programming question? See
                <a
                  href="https://stackexchange.com/sites#technology-traffic"
                  className="text-blue-500"
                >
                  {' '}
                  the topics here{' '}
                </a>
                find a relevant site.
              </p>
              <h5 className="font-medium">Steps</h5>
              <ul className="text-sm">
                <li>Summarize your problem in a one-line title.</li>
                <li>Describe your problem in more detail.</li>
                <li>
                  Describe what you tried and what you expected to happen.
                </li>
                <li>
                  Add “tags” which help surface your question to members of the
                  community.
                </li>
                <li>Review your question and post it to the site.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex ">
          <div className="border rounded-md p-6 bg-white w-2/3 mr-6">
            <div>
              <div className="font-semibold">Title</div>
              <div className="text-xs font-light">
                Be specific and imagine you’re asking a question to another
                person.
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                className="w-full border rounded-md focus:outline-none focus:border-sky-50 focus:ring-4 pl-2"
                data-min-length="15"
                data-max-length="150"
              />
            </div>
            <button className="flex p-2 bg-[#0A95FF] text-white rounded-md text-sm cursor-pointer">
              Next
            </button>
          </div>
          <div className="border rounded-md bg-white shadow-md h-auto w-1/4">
            <div className="p-3 border-b border-slate-200 bg-[#F8F9F9]">
              Introduce the problem
            </div>
            <div className="flex m-4">
              <div>
                <img
                  src="/images/write.png"
                  alt="write"
                  className="h-12 w-12"
                />
              </div>
              <div className="text-xs mx-2">
                <p className="mb-3">
                  Explain how you encountered the problem you’re trying to
                  solve, and any difficulties that have prevented you from
                  solving it yourself.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-4 ">
          <div className="border rounded-md p-6 bg-white w-2/3 mr-6">
            <div className="font-semibold">
              What are the details of your problem?
              <p className="text-xs font-light">
                Introduce the problem and expand on what you put in the title.
                Minimum 20 characters.
              </p>
            </div>
            <div id="editor1"></div>
            <button className="flex p-2 bg-[#0A95FF] text-white rounded-md text-sm cursor-pointer">
              Next
            </button>
          </div>
          <div className="border rounded-md bg-white shadow-md w-1/4">
            <div className="p-3 border-b border-slate-200 bg-[#F8F9F9]">
              Expand on the problem
            </div>
            <div className="flex m-4">
              <div>
                <img
                  src="/images/write.png"
                  alt="write"
                  className="h-12 w-12"
                />
              </div>
              <div className="text-xs mx-2">
                <p className="mb-3">
                  Show what you’ve tried, tell us what happened, and why it
                  didn’t meet your needs.
                </p>
                <p className="mb-3">
                  Not all questions benefit from including code, but if your
                  problem is better understood with code you’ve written, you
                  should include a minimal, reproducible example.
                </p>
                <p className="mb-3">
                  Please make sure to post code and errors as text directly to
                  the question (and not as images), and format them
                  appropriately.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-4 ">
          <div className="border rounded-md p-6 bg-white w-2/3 mr-6">
            <div className="font-semibold">
              What did you try and what were you expecting?
              <p className="text-xs font-light">
                Describe what you tried, what you expected to happen, and what
                actually resulted. Minimum 20 characters.
              </p>
            </div>
            <div id="editor2"></div>
            <button className="flex p-2 bg-[#0A95FF] text-white rounded-md text-sm cursor-pointer">
              Next
            </button>
          </div>
          <div className="border rounded-md bg-white shadow-md w-1/4">
            <div className="p-3 border-b border-slate-200 bg-[#F8F9F9]">
              Writing a good tittle
            </div>
            <div className="flex m-4">
              <div>
                <img
                  src="/images/write.png"
                  alt="write"
                  className="h-12 w-12"
                />
              </div>
              <div className="text-xs mx-2">
                <p className="mb-3">Your title should summarize the problem.</p>
                <p className="mb-3">
                  You might find that you have a better idea of your title after
                  writing out the rest of the question.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="border rounded-md p-6 bg-white w-2/3 mr-6">
            <div>
              <div className="font-semibold">Tags</div>
              <div className="text-xs font-light">
                Add up to 5 tags to describe what your question is about. Start
                typing to see suggestions.
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="e.g. (mysql json typescript)"
                className="w-full border rounded-md focus:outline-none focus:border-sky-50 focus:ring-4 pl-2"
                data-min-length="15"
                data-max-length="150"
              />
            </div>
            <button className="flex p-2 bg-[#0A95FF] text-white rounded-md text-sm cursor-pointer">
              Next
            </button>
          </div>
          <div className="border rounded-md bg-white shadow-md w-1/4">
            <div className="p-3 border-b border-slate-200 bg-[#F8F9F9]">
              Adding tags
            </div>
            <div className="flex m-4">
              <div>
                <img
                  src="/images/write.png"
                  alt="write"
                  className="h-12 w-12"
                />
              </div>
              <div className="text-xs mx-2">
                <p className="mb-3">
                  Tags help ensure that your question will get attention from
                  the right people.
                </p>
                <p className="mb-3">
                  Tag things in more than one way so people can find them more
                  easily. Add tags for product lines, projects, teams, and the
                  specific technologies or languages used.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button>Discard draft</button>
        </div>
      </div>
    </div>
  );
};

export default QuestionsAsk;
