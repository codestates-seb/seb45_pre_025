import SideCartegory from '../components/SideCartegory';

const Users = () => {
  return (
    <main className="relative top-14  max-w-7xl w-full flex justify-between my-0 mx-auto">
      <SideCartegory />
      <div className="flex flex-row w-full">
        <div className="w-full max-w-5xl m-6">
          <div className="w-full">
            {/* 유저 프로필 */}
            <div>
              <div className="flex justify-start pb-6">
                <div className="w-32 h-32 rounded-md bg-yellow-300">
                  <h1 className="text-8xl py-auto leading-normal">🧑‍💻</h1>
                </div>
                <div className="flex flex-col justify-center ml-4">
                  {/* 회원 이름 */}
                  <div>
                    <h1 className="text-4xl">User Name</h1>
                  </div>

                  {/* 회원 상세정보 */}
                  <div className="flex mt-2 text-sm">
                    {/* 가입한지 ~일 */}
                    <div className="flex items-center fill-slate-400 text-slate-400">
                      <svg
                        aria-hidden="true"
                        className="svg-icon iconCake"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                      >
                        <path d="M9 4.5a1.5 1.5 0 0 0 1.28-2.27L9 0 7.72 2.23c-.14.22-.22.48-.22.77 0 .83.68 1.5 1.5 1.5Zm3.45 7.5-.8-.81-.81.8c-.98.98-2.69.98-3.67 0l-.8-.8-.82.8c-.49.49-1.14.76-1.83.76-.55 0-1.3-.17-1.72-.46V15c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-2.7c-.42.28-1.17.45-1.72.45-.69 0-1.34-.27-1.83-.76Zm1.3-5H10V5H8v2H4.25C3 7 2 8 2 9.25v.9c0 .81.91 1.47 1.72 1.47.39 0 .77-.14 1.03-.42l1.61-1.6 1.6 1.6a1.5 1.5 0 0 0 2.08 0l1.6-1.6 1.6 1.6c.28.28.64.43 1.03.43.81 0 1.73-.67 1.73-1.48v-.9C16 8.01 15 7 13.75 7Z" />
                      </svg>
                      <span className="pl-1 pr-2">Member for 8 days</span>
                    </div>
                    {/* 마지막 접속시간 */}
                    <div className="flex items-center fill-slate-400 text-slate-400">
                      <svg
                        aria-hidden="true"
                        className="svg-icon iconClock"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                      >
                        <path d="M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8Zm0-2c3.27 0 6-2.73 6-6s-2.73-6-6-6-6 2.73-6 6 2.73 6 6 6ZM8 5h1.01L9 9.36l3.22 2.1-.6.93L8 10V5Z" />
                      </svg>
                      <span className="pl-1 pr-2">Last seen this week</span>
                    </div>
                    {/* 몇일 연속 / 몇회 방문 */}
                    <div className="flex items-center fill-slate-400 text-slate-400">
                      <svg
                        aria-hidden="true"
                        className="svg-icon iconCalendar"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                      >
                        <path d="M14 2h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h1V0h2v2h6V0h2v2ZM3 6v9h12V6H3Zm2 2h2v2H5V8Zm0 3h2v2H5v-2Zm3 0h2v2H8v-2Zm3 0h2v2h-2v-2Zm0-3h2v2h-2V8ZM8 8h2v2H8V8Z" />
                      </svg>
                      <span className="pl-1 pr-2">
                        Visited 7 days, 4 consecutive
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-max absolute top-0 right-0 mt-6">
                {/* 프로필 수정 */}
                <button className="flex items-center fill-slate-600 text-slate-600 bg-white border border-slate-400  rounded-md p-2 text-sm">
                  <svg
                    aria-hidden="true"
                    className="svg-icon iconPencil"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path d="m2 13.13 8.5-8.5 2.88 2.88-8.5 8.5H2v-2.88Z" />
                    <path d="m13.68 2.15 2.17 2.17c.2.2.2.51 0 .71L14.5 6.39l-2.88-2.88 1.35-1.36c.2-.2.51-.2.71 0Z" />
                  </svg>
                  <span>Edit profile</span>
                </button>

                {/* 네트워크 프로필 */}
                <button className="flex items-center fill-slate-600 text-slate-600 bg-white border border-slate-400  rounded-md p-2 text-sm ml-2">
                  <svg
                    aria-hidden="true"
                    className="native mln2 mr2 svg-icon iconLogoSEXxs"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path
                      d="M3 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2H3Z"
                      fill="#8FD8F7"
                    />
                    <path
                      d="M15 11H3c0 1.1.9 2 2 2h5v3l3-3a2 2 0 0 0 2-2Z"
                      fill="#155397"
                    />
                    <path fill="#46A2D9" d="M3 5h12v2H3z" />
                    <path fill="#2D6DB5" d="M3 8h12v2H3z" />
                  </svg>
                  <span>Network profile</span>
                </button>
              </div>
            </div>
            <div className="flex justify-start items-center h-16 w-full">
              <div className="flex justify-between items-center text-sm w-auto">
                <div className="flex items-center h-8 text-gray-500">
                  <button className="px-2.5 h-full">
                    <span className="">Profile</span>
                  </button>
                  <button className=" px-2.5 h-full">
                    <span className="">Activity</span>
                  </button>
                  <button className=" px-2.5 h-full">
                    <span className="">Saves</span>
                  </button>
                  <button>
                    <span className="h-full px-2.5">Settings</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Users;
