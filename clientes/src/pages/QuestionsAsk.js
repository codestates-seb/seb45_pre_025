import { useState, useEffect } from 'react';
//import axios from 'axios';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const QuestionsAsk = () => {
  const [editorContent1, setEditorContent1] = useState('');
  const [editorContent2, setEditorContent2] = useState('');
  const [title, setTitle] = useState('');
  //const [step, setStep] = useState(1);
  const [displayedMergedContent, setDisplayedMergedContent] = useState('');

  let editor1 = undefined;
  let editor2 = undefined;
  useEffect(() => {

    editor1 = new Editor({
      el: document.querySelector('#editor1'),
      height: 'auto',
      initialEditType: 'markdown',
      previewStyle: 'tab',
      autofocus: true,
      events: {
        change: () => {
          setEditorContent1(editor1.getMarkdown());
        },
        blur: () => {
          const content = editor1.getMarkdown();
          if (content.length < 20) {
            console.log('Editor 1: Content must be at least 20 characters.');
          }
        },
        focus: () => {
          //console.log('Editor 1 focused');
          //editor1.focus();
        },
      },
    });

    editor2 = new Editor({
      el: document.querySelector('#editor2'),
      height: 'auto',
      initialEditType: 'markdown',
      previewStyle: 'tab',
      events: {
        change: () => {
          setEditorContent2(editor2.getMarkdown());
        },
        blur: () => {
          //editor1.blur();
        },
        focus: () => {
          //console.log('Editor 2 focused');
          // editor2.focus();
        },
      },
      //placeholder: ['Write your question here'],
    });

    return () => {
      editor1.destroy();
      editor2.destroy();
    };
  }, []);

  // const handleEditor1Next = () => {
  //   const content = editor1.getMarkdown();
  //   setEditorContent1(content);
  //   setStep(step + 1);
  //   // Move to the next step or perform other actions
  // };

  // const handleEditor2Next = () => {
  //   const content = editor2.getMarkdown();
  //   setEditorContent2(content);
  //   //setStep(step + 1);
  //   // Move to the next step or perform other actions
  // };

  const handleSubmit = () => {
    const mergedContent = `${editorContent1}\n\n${editorContent2}`;
    console.log(mergedContent);
    console.log(title);
    setDisplayedMergedContent(mergedContent);

    // const dataToSend = {
    //   title: title,
    //   content: mergedContent,
    // };

    // axios
    //   .post('/your-server-endpoint', dataToSend)
    //   .then((response) => {
    //     // Handle server response if needed
    //   })
    //   .catch((error) => {
    //     // Handle error if needed
    //   });
  };
  useEffect(() => {
    const viewer = new Editor({
      el: document.querySelector('#viewer'),
      initialValue: displayedMergedContent,
      initialEditType: 'markdown',
      previewStyle: 'tab',
      usageStatistics: false, // Optional: Disable usage statistics tracking
    });

    return () => {
      viewer.destroy();
    };
  }, [displayedMergedContent]);

  return (
    <div className="bg-[#F8F9F9] min-h-screen">
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
                  data-min-length="15"
                  data-max-length="150"
                  onChange={(event) => setTitle(event.target.value)}
                />
              </div>
              <button className="flex p-2 mt-6 bg-[#0A95FF] text-white rounded-md text-sm cursor-pointer">
                Next
              </button>
            </div>
            <div className="border rounded-md bg-white shadow-md h-auto w-[95%] xl:absolute xl:w-[23%] xl:right-[7%] xl:top-0">
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
              <button className="flex p-2 mt-6 bg-[#0A95FF] text-white rounded-md text-sm cursor-pointer">
                Next
              </button>
            </div>
            <div className="border rounded-md bg-white shadow-md w-[95%] xl:absolute xl:w-[23%] xl:right-[7%] xl:top-0">
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
                  <p className="mb-3">
                    Please make sure to post code and errors as text directly to
                    the question (and not as images), and format them
                    appropriately.
                  </p>
                </div>
              </div>
            </div>
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
              <button className="flex p-2 mt-6 bg-[#0A95FF] text-white rounded-md text-sm cursor-pointer">
                Next
              </button>
            </div>
            <div className="border rounded-md bg-white shadow-md w-[95%] xl:absolute xl:w-[23%] xl:right-[7%] xl:top-0">
              <div className="p-3 border-b border-slate-200 bg-[#F8F9F9]">
                Writing a good tittle
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
            <div className="border rounded-md bg-white shadow-md w-[95%] xl:absolute xl:w-[23%] xl:right-[7%] xl:top-0">
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
            </div>
          </div>
          <div className="flex">
            <button
              className="flex p-2 rounded-md my-4 bg-[#0A95FF] text-white hover:bg-[#0A95FF]/50  focus:ring focus:ring-black focus:outline-none"
              onClick={handleSubmit}
            >
              Post your question
            </button>
            <button className="flex p-2 ml-[1%] rounded-md my-4 text-red-700 hover:bg-red-700/10">
              Discard draft
            </button>
            <div>{displayedMergedContent}</div>
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
