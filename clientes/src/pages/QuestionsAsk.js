import { useState, useEffect } from 'react';
//import axios from 'axios';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

import { useNavigate, useLocation } from 'react-router-dom';

const QuestionsAsk = () => {
  const [editorContent1, setEditorContent1] = useState('');
  const [editorContent2, setEditorContent2] = useState('');
  const [title, setTitle] = useState('');
  const [displayedMergedContent, setDisplayedMergedContent] = useState(''); //테스트용
  const [selectedStep, setSelectedStep] = useState(1);
  const navigate = useNavigate();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const questionId = searchParams.get('id');
  //const baseURL = '{baswe}';
  //const Authorization = localStorage.getItem('token');

  let editor1 = undefined;
  let editor2 = undefined;

  useEffect(() => {
    editor1 = new Editor({
      el: document.querySelector('#editor1'),
      height: 'auto',
      initialEditType: 'markdown',
      initialValue: editorContent1,
      previewStyle: 'tab',
      events: {
        change: () => {
          setEditorContent1(editor1.getMarkdown());
        },
        keydown: () => {
          handleStepChange(2);
        },
      },
    });

    editor2 = new Editor({
      el: document.querySelector('#editor2'),
      height: 'auto',
      initialEditType: 'markdown',
      initialValue: editorContent2,
      previewStyle: 'tab',
      events: {
        change: () => {
          setEditorContent2(editor2.getMarkdown());
        },
        keydown: () => {
          handleStepChange(3);
        },
      },
    });

    return () => {
      editor1.destroy();
      editor2.destroy();
    };
  }, []);

  const handleStepChange = (step) => {
    setSelectedStep(step);
  };

  const handleDiscard = () => {
    setEditorContent1('');
    setEditorContent2('');
    setTitle('');

    console.log(title);
    console.log(editorContent1);
    //window.location.reload();
    navigate(`/questions`);
  };

  useEffect(() => {
    console.log(questionId);
    if (questionId) {
      // axios
      //   .get('${baseURL}/questions/${questionId}')
      //   .then((response) => {
      //     const { title, bodyExpecting, bodyProblem } = response.data;
      //     setTitle(title);
      //     setEditorContent1(bodyProblem);
      //     setEditorContent2(bodyExpecting);
      //   })
      //   .catch((error) => {
      //     // Handle error if needed
      //     console.error(error);
      //   });
    }
  }, [questionId]);

  const handleSubmit = () => {
    const mergedContent = `${editorContent1}\n\n${editorContent2}`; //테스트
    setDisplayedMergedContent(mergedContent); //테스트
    console.log(mergedContent); //테스트

    // if (questionId) {
    //   //Edit question (/ask?id={id})
    //   const dataToSend = {
    //     title: title,
    //     bodyExpecting: editorContent1,
    //     bodyProblem: editorContent2,
    //   };
    //   axios
    //     .patch('${baseURL}/questions/${questionId}', dataToSend, {
    //       headers: {
    //         Authorization: `Bearer ${Authorization}`,
    //       },
    //     })
    //     .then((response) => {
    //       navigate(`/questions/view?id=${questionId}`);
    //     })
    //     .catch((error) => {
    //       // Handle error if needed
    //       console.error(error);
    //       console.error('Error editing a question:', error);
    //     });
    // } else {
    //   //craete question (/ask)
    //   const dataToSend = {
    //     title: title,
    //     bodyExpecting: editorContent1,
    //     bodyProblem: editorContent2,
    //   };
    //   axios
    //     .post('${baseURL}/questions', dataToSend, {
    //       headers: {
    //         Authorization: `Bearer ${Authorization}`,
    //       },
    //     })
    //     .then((response) => {
    //       const newQuestionId = response.headers.location.split('=').pop();
    //       navigate(`/questions/view?id=${newQuestionId}`);
    //     })
    //     .catch((error) => {
    //       // Handle error if needed
    //       console.error('Error posting a question:', error);
    //     });
    // }
  };

  useEffect(() => {
    const viewer = Editor.factory({
      el: document.querySelector('#viewer'),
      initialValue: displayedMergedContent,
      height: 'auto',
      viewer: true,
    });

    return () => {
      viewer.destroy();
    };
  }, [displayedMergedContent]); //테스트

  return (
    <div className="bg-[#F8F9F9]  min-h-screen min-w-full">
      <div className="flex justify-center xl:justify-center pt-20 h-min">
        <div className="felx flex-col px-3 pb-6 lg:px-60 w-full max-w-screen-2xl">
          <div className="">
            <div className="flex justify-between mb-4">
              <h1 className="text-3xl font-semibold">Ask a public question</h1>
              <img
                src="/images/background.svg"
                alt="background"
                className="w-1/2"
              />
            </div>
            <div className="flex flex-col xl:flex-row xl:mx-auto">
              <div className="bg-[#EBF4FB] border rounded-md p-6 w-[95%] xl:w-[68%] mb-8 ">
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
                <ul className="text-sm list-disc list-inside ml-[20px]">
                  <li>Summarize your problem in a one-line title.</li>
                  <li>Describe your problem in more detail.</li>
                  <li>
                    Describe what you tried and what you expected to happen.
                  </li>
                  <li>
                    Add “tags” which help surface your question to members of
                    the community.
                  </li>
                  <li>Review your question and post it to the site.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row xl:mx-auto xl:relative">
            <div className="border rounded-md p-6 mb-4 bg-white w-[95%] xl:w-[68%]">
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
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  onKeyDown={() => handleStepChange(1)}
                />
              </div>
              <button
                className={`flex p-2 mt-6 bg-[#0A95FF] text-white rounded-md text-sm cursor-pointer hover:bg-[#0A95FF]/50 ${
                  title.length > 20 && selectedStep === 1 ? '' : 'hidden'
                }`}
              >
                Next
              </button>
            </div>
            {selectedStep === 1 && (
              <div
                className={`border rounded-md bg-white shadow-md h-auto w-[95%] xl:absolute xl:w-[23%] xl:right-[7%] xl:top-0 
              `}
              >
                <div className="p-3 border-b border-slate-200 bg-[#F8F9F9]">
                  Writing a good title
                </div>
                <div className="flex m-4">
                  <div>
                    <img
                      src="/images/write.png"
                      alt="write"
                      className="xl:min-w-[34px]"
                    />
                  </div>
                  <div className="text-xs mx-2">
                    <p className="mb-3">
                      Your title should summarize the problem.
                    </p>
                    <p className="mb-3">
                      You might find that you have a better idea of your title
                      after writing out the rest of the question.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className=" mt-4 flex flex-col xl:flex-row xl:mx-auto xl:relative">
            <div className="border rounded-md p-6 mb-4 bg-white w-[95%] xl:w-[68%]">
              <div className="font-semibold">
                What are the details of your problem?
                <p className="text-xs font-light">
                  Introduce the problem and expand on what you put in the title.
                  Minimum 20 characters.
                </p>
              </div>
              <div id="editor1"></div>
              <button
                className={`flex p-2 mt-6 bg-[#0A95FF] text-white rounded-md text-sm cursor-pointer hover:bg-[#0A95FF]/50 ${
                  editorContent1.length > 20 && selectedStep === 2
                    ? ''
                    : 'hidden'
                }`}
              >
                Next
              </button>
            </div>
            {selectedStep === 2 && (
              <div
                className={`border rounded-md bg-white shadow-md h-auto w-[95%] xl:absolute xl:w-[23%] xl:right-[7%] xl:top-0 `}
              >
                <div className="p-3 border-b border-slate-200 bg-[#F8F9F9]">
                  Introduce the problem
                </div>
                <div className="flex m-4">
                  <div>
                    <img
                      src="/images/write.png"
                      alt="write"
                      className="xl:min-w-[34px]"
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
            )}
          </div>
          <div className="mt-4 flex flex-col xl:flex-row xl:mx-auto xl:relative">
            <div className="border rounded-md p-6 mb-4 bg-white w-[95%] xl:w-[68%]">
              <div className="font-semibold">
                What did you try and what were you expecting?
                <p className="text-xs font-light">
                  Describe what you tried, what you expected to happen, and what
                  actually resulted. Minimum 20 characters.
                </p>
              </div>
              <div id="editor2"></div>
              <button
                className={`flex p-2 mt-6 bg-[#0A95FF] text-white rounded-md text-sm cursor-pointer hover:bg-[#0A95FF]/50 ${
                  editorContent2.length > 20 && selectedStep === 3
                    ? ''
                    : 'hidden'
                }`}
              >
                Next
              </button>
            </div>
            {selectedStep === 3 && (
              <div
                className={`border rounded-md bg-white shadow-md h-auto w-[95%] xl:absolute xl:w-[23%] xl:right-[7%] xl:top-0 `}
              >
                <div className="p-3 border-b border-slate-200 bg-[#F8F9F9]">
                  Expand on the problem
                </div>
                <div className="flex m-4">
                  <div>
                    <img
                      src="/images/write.png"
                      alt="write"
                      className="xl:min-w-[34px]"
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
                    <p>
                      Please make sure to post code and errors as text directly
                      to the question (and not as images), and format them
                      appropriately.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="mt-4 flex flex-col xl:flex-row xl:mx-auto xl:relative">
            <div className="border rounded-md p-6 mb-4 bg-white w-[95%] xl:w-[68%]">
              <div>
                <div className="font-semibold">Tags</div>
                <div className="text-xs font-light">
                  Add up to 5 tags to describe what your question is about.
                  Start typing to see suggestions.
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="e.g. (mysql json typescript)"
                  className="w-full border rounded-md focus:outline-none focus:border-sky-50 focus:ring-4 pl-2 cursor-not-allowed"
                  data-min-length="15"
                  data-max-length="150"
                  disabled
                />
              </div>
              <button className="flex p-2 mt-6 bg-[#0A95FF] text-white rounded-md text-sm cursor-not-allowed">
                Next
              </button>
            </div>
            {/* <div className="border rounded-md bg-white shadow-md w-[95%] xl:absolute xl:w-[23%] xl:right-[7%] xl:top-0">
              <div className="p-3 border-b border-slate-200 bg-[#F8F9F9]">
                Adding tags
              </div>
              <div className="flex m-4">
                <div>
                  <img
                    src="/images/write.png"
                    alt="write"
                    className="xl:min-w-[34px]"
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
            </div> */}
          </div>
          <div className="flex">
            <button
              className=" ${
                title && editorContent1 && editorContent2 ? 'bg-gray-300 focus:ring focus:outline-none' : ''
              } flex p-2 rounded-md my-4 bg-[#0A95FF] text-white hover:bg-[#0A95FF]/50"
              onClick={handleSubmit}
              disabled={
                title.length < 15 ||
                editorContent1.length < 20 ||
                editorContent2.length < 20
              }
              style={{
                cursor:
                  title && editorContent1 && editorContent2
                    ? 'pointer'
                    : 'not-allowed',
              }}
            >
              Post your question
            </button>
            <button
              className="flex p-2 ml-[1%] rounded-md my-4 text-red-700 hover:bg-red-700/10"
              onClick={handleDiscard}
            >
              Discard draft
            </button>
            {/* 테스트용 */}
            <div
              id="viewer"
              className="my-4 border rounded-md p-3 bg-white"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsAsk;
