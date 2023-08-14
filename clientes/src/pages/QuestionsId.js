import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const QuestionsId = () => {
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
    <div className="flex justify-center py-20 w-full">
      <div className="py-4">category</div>
      <div className="flex flex-col justify-center px-10 mb-1.5 divide-y divide-slate-200 w-4/6 ">
        <div className="">
          <div className="flex justify-between">
            <div className="mb-2 text-2xl">
              how do you insert data frame to ms sql table faster
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
            <div className="flex grow py-4 h-1/3  min-h-min ">
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
                <div className="grow pb-6">
                  질문뭉치 I am packaging my angular application using electron
                  packager. However, when opening the packaged application then
                  the assets referenced from my custom created .scss files does
                  not load correctly whilst my other assets (referenced directly
                  from the libraries assets folder) loads correctly. The angular
                  project contains applications and libraries. It has the
                  following structure RootProjects Desktop Web Library-1
                  Library-1 Library-2 Library 1 has a fonts.scss file which
                  REFERENCES the fonts: fonts are in library-1/src/assets/fonts
                </div>
                <ul className="relative">
                  <li className="inline-block space-x-1 p-1.5 bg-[#E1ECF4] text-[#39739D] rounded-md text-xs">
                    tag
                  </li>
                </ul>
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
                  <div className="pb-6 grow">답변뭉치</div>
                  <ul className="relative">
                    <li className="inline-block space-x-1 p-1.5 bg-[#E1ECF4] text-[#39739D] rounded-md text-xs">
                      tag
                    </li>
                  </ul>
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
                <button className="flex p-2 bg-[#0A95FF] text-white rounded-md text-sm cursor-pointer">
                  Post Your Answer
                </button>
              </div>
            </div>
          </div>
          <div className="flex py-4 w-1/5">sidebar</div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsId;
