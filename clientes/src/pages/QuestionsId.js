import { useEffect } from 'react';
//import axios from 'axios';
import { Link } from 'react-router-dom';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import Sidebar from '../components/Sidebar';
import SideCartegory from '../components/SideCartegory';

const QuestionsId = () => {
  //const [editorContent, setEditorContent] = useState('');
  let questionContent = '## 저,, 취업할 수 있을까요?\n`let say = "hello"`';
  let answerContent = `그러게 공부 좀 하지 그랬니,,,,`;
  useEffect(() => {
    const question = Editor.factory({
      el: document.querySelector('#question'),
      initialValue: questionContent,
      height: 'auto',
      viewer: true,
    });

    const answer = Editor.factory({
      el: document.querySelector('#answer'),
      initialValue: answerContent,
      height: 'auto',
      viewer: true,
    });

    return () => {
      question.destroy();
      answer.destroy();
    };
  }, [questionContent, answerContent]);

  useEffect(() => {
    const editor = new Editor({
      el: document.querySelector('#editor'),
      height: 'auto',
      initialEditType: 'markdown',
      previewStyle: 'tab',
    });

    return () => {
      editor.destroy();
    };
  }, []);

  return (
    <div className="flex justify-center py-[2%] w-full">
      <div className="py-4">
        <SideCartegory />
      </div>
      <div className="flex flex-col justify-center pt-14 pl-6 mb-1.5 divide-y divide-slate-200 w-4/6 ">
        <div className="">
          <div className="flex justify-between">
            <div className="mb-2 text-2xl">
              {/* question title below */}
              미리 감사합니다
            </div>
            <Link to="/questions/ask">
              <button className="p-2 bg-[#0A95FF] text-white rounded-md text-sm cursor-pointer">
                Ask Question
              </button>
            </Link>
          </div>
          <div className="flex mb-2">
            <div className="mr-4 text-xs font-light">Asked</div>
            <div className="mr-4 text-xs font-light">Modified</div>
            <div className="text-xs font-light">Viewed</div>
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="w-3/4">
            <div className="flex grow py-4 min-h-[12%]">
              <div className="flex flex-col items-center pr-4 w-14">
                <button className="p-3 mb-2 border rounded-full">
                  <img
                    src="/images/vote-up.png"
                    alt="vote-up"
                    className="h-2 w-4"
                  />
                </button>
                <div className="flex">투표수</div>
                <button className="p-3 mb-2 border rounded-full">
                  <img
                    src="/images/vote-down.png"
                    alt="vote-down"
                    className="h-2 w-4"
                  />
                </button>
                <button>
                  <img
                    src="/images/unbookmarked.png"
                    alt="unbookmarked"
                    className="h-4 w-3"
                  />
                </button>
              </div>
              <div className="pr-4 w-full">
                <div className="pb-2">
                  {/* question viewer below */}
                  <div
                    id="question"
                    className="my-4 border rounded-md p-3 bg-white"
                  ></div>
                </div>
                {/* <ul className="relative">
                  <li className="inline-block space-x-1 p-1.5 bg-[#E1ECF4] text-[#39739D] rounded-md text-xs">
                    tag
                  </li>
                </ul> */}
                <div className="flex justify-end">
                  <div className="my-4 p-1.5 bg-[#E1ECF4] rounded-md text-xs">
                    <div className="text-[#6A737C]">asked when</div>
                    <div className="flex">
                      <img
                        src="/images/Vector.svg"
                        alt="user"
                        className="h-8 w-8"
                      />
                      <div className="text-[#0074CC] ml-2">user name</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div>
                <div className="text-xl">1 Answer</div>
              </div>
              <div className="flex py-4 border-b">
                <div className="flex flex-col items-center pr-4 w-14">
                  <button className="p-3 mb-2 border rounded-full">
                    <img
                      src="/images/vote-up.png"
                      alt="vote-up"
                      className="h-2 w-4"
                    />
                  </button>
                  <div className="flex">투표수</div>
                  <button className="p-3 mb-2 border rounded-full">
                    <img
                      src="/images/vote-down.png"
                      alt="vote-down"
                      className="h-2 w-4"
                    />
                  </button>
                  <button className="mb-2">
                    <img
                      src="/images/unbookmarked.png"
                      alt="unbookmarked"
                      className="h-4 w-3"
                    />
                  </button>
                  <button>
                    <img
                      src="/images/selected.png"
                      alt="selected"
                      className="h-6 w-6"
                    />
                  </button>
                </div>
                <div className="pr-4 w-full">
                  <div className="pb-6 grow">
                    {/* answer viewer below */}
                    <div
                      id="answer"
                      className="my-4 border rounded-md p-3 bg-white"
                    ></div>
                  </div>
                  {/* <ul className="relative">
                    <li className="inline-block space-x-1 p-1.5 bg-[#E1ECF4] text-[#39739D] rounded-md text-xs">
                      tag
                    </li>
                  </ul> */}
                  <div className="flex justify-end">
                    <div className="  my-4 p-1.5 text-[#39739D] text-xs">
                      <div className="text-[#6A737C]">answered when</div>
                      <div className="flex">
                        <img
                          src="/images/Vector.svg"
                          alt="user"
                          className="h-8 w-8"
                        />
                        <div className="text-[#0074CC] ml-2">user name</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <input
                      placeholder="Add a comment"
                      className="w-full border rounded-md focus:outline-none focus:border-sky-50 focus:ring-4 pl-2"
                    ></input>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="pt-5 mb-5 text-2xl">Your Answer</h2>
                <div id="editor" className="pb-5"></div>
                <button className="flex p-2 bg-[#0A95FF] text-white rounded-md text-sm cursor-pointer hover:bg-[#0A95FF]/50">
                  Post Your Answer
                </button>
              </div>
            </div>
          </div>
          <div className="flex py-4 pl-4 w-[30%]">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsId;
