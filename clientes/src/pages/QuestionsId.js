import { useEffect } from 'react';
//import axios from 'axios';
import { useLocation, Link } from 'react-router-dom';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import Sidebar from '../components/Sidebar';
import SideCartegory from '../components/SideCartegory';
import { format, formatDistanceToNow } from 'date-fns';

const QuestionsId = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const questionId = searchParams.get('id');

  //const [questionDetails, setQuestionDetails] = useState(null);
  //const [answersDetails, setAnswersDetails] = useState(null);
  //const [commentsDetails, setCommentsDetails] = useState(null);
  //const [editorContent, setEditorContent] = useState('');

  const questionDetails = [
    {
      id: 1,
      title: '제목',
      bodyExpecting: '기대하는 바',
      bodyProblem: '문제점',
      authorId: 0,
      createdAt: '2023-08-16T23:19:49.0995',
      modifiedAt: '2023-08-16T23:19:49.0995',
    },
  ];

  //const answersDetails = undefined;

  const answersDetails = [
    {
      answerId: 1,
      content: '답변조회테스트1',
      questionId: 1,
      createdAt: '2023-08-16T23:19:49.0995',
      modifiedAt: '2023-08-16T23:19:49.0995',
    },
    {
      answerId: 2,
      content: '답변조회테스트2',
      questionId: 1,
      createdAt: '2023-08-16T23:19:49.0995',
      modifiedAt: '2023-08-16T23:19:49.0995',
    },
  ];

  const commentsDetails = [
    {
      answerId: 1,
      content: '댓글조회테스트1-1',
      commentId: 1,
      createdAt: '2023-08-16T23:19:49.0995',
      modifiedAt: '2023-08-16T23:19:49.0995',
    },
    {
      answerId: 1,
      content: '댓글조회테스트1-2',
      commentId: 2,
      createdAt: '2023-08-16T23:19:49.0995',
      modifiedAt: '2023-08-16T23:19:49.0995',
    },
    {
      answerId: 2,
      content: '댓글조회테스트2-1',
      commentId: 1,
      createdAt: '2023-08-16T23:19:49.0995',
      modifiedAt: '2023-08-16T23:19:49.0995',
    },
    {
      answerId: 2,
      content: '댓글조회테스트2-2',
      commentId: 1,
      createdAt: '2023-08-16T23:19:49.0995',
      modifiedAt: '2023-08-16T23:19:49.0995',
    },
  ];

  useEffect(() => {
    const questionBody = `${questionDetails[0].bodyExpecting}\n\n${questionDetails[0].bodyProblem}`;
    const question = Editor.factory({
      el: document.querySelector('#question'),
      initialValue: questionBody,
      height: 'auto',
      viewer: true,
    });

    // const answer = Editor.factory({
    //   el: document.querySelector('#answer'), //id={`answer-${answer.answerId}`}
    //   initialValue: answersDetails.content, //answerContent, //answer.content
    //   height: 'auto',
    //   viewer: true,
    // });

    return () => {
      question.destroy();
      //answer.destroy();
    };
  }, [questionDetails]); //테스트용/api 연결하면 수정

  // useEffect(() => {
  //   const apiUrl = `{api-url}/questions/${questionId}`;
  //   axios
  //     .get(apiUrl)
  //     .then((response) => {
  //       setQuestionDetails(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching question details:', error);
  //     });
  // }, []);

  // useEffect(() => {
  //   const fetchAnswersAndComments = async () => {
  //     try {
  //       const answersResponse = await axios.get(`${apiUrl}/${questionId}/answers`);
  //       const fetchedAnswers = answersResponse.data;

  //       setAnswersDetails(fetchedAnswers);

  //       fetchedAnswers.forEach(async (answer) => {
  //         try {
  //           const commentsResponse = await axios.get(`${apiUrl}/answers/${answer.answerId}/comments`);
  //           const commentsForAnswer = commentsResponse.data;
  //           setCommentsDetails((prevComments) => [...prevComments, ...commentsForAnswer]);
  //         } catch (error) {
  //           console.error(`Error fetching comments for answer ${answer.answerId}:`, error);
  //         }
  //       });
  //     } catch (error) {
  //       console.error('Error fetching answers:', error);
  //     }
  //   };

  //   fetchAnswersAndComments();
  // }, [questionId]);

  // useEffect(() => {
  //   const apiUrl = `{api-url}/${questionId}/answers}`;
  //   axios
  //     .get(apiUrl)
  //     .then((response) => {
  //       setAnswersDetails(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching question details:', error);
  //     });
  // }, []);

  // useEffect(() => {
  //   const apiUrl = `{api-url}/answers/${answersDetail.answerId}/comments}`;
  //   axios
  //     .get(apiUrl)
  //     .then((response) => {
  //       setCommentsDetails(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching question details:', error);
  //     });
  // }, []);

  useEffect(() => {
    const editor = new Editor({
      el: document.querySelector('#editor'),
      height: 'auto',
      initialEditType: 'markdown',
      previewStyle: 'tab',
      placeholder:
        'Please be sure to answer the question. Provide details and share your research!',
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
            <div className="mb-2 text-2xl">{questionDetails[0].title}</div>
            <div>
              {/* 로그인 정보 받으면 수정/삭제 버튼 보이게 */}
              <Link to={`/questions/ask?id=${questionId}`}>
                <button className=" p-2 mt-6 bg-[#0A95FF] text-white rounded-md text-sm ">
                  Edit
                </button>
              </Link>
              <button className="p-2 mt-6 bg-[#0A95FF] text-white rounded-md text-sm cursor-not-allowed">
                Delete
              </button>
              <Link to="/questions/ask">
                <button className="p-2 bg-[#0A95FF] text-white rounded-md text-sm cursor-pointer">
                  Ask Question
                </button>
              </Link>
            </div>
          </div>
          <div className="flex mb-2">
            <div className="mr-4 text-xs font-light">
              Asked{' '}
              {formatDistanceToNow(new Date(questionDetails[0].createdAt))} ago
            </div>
            <div className="mr-4 text-xs font-light">
              Modified{' '}
              {formatDistanceToNow(new Date(questionDetails[0].modifiedAt))} ago
            </div>
            {/* <div className="text-xs font-light">{`Viewed`}</div> */}
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="w-3/4">
            <div className="flex grow py-4 min-h-[12%]">
              <div className="flex flex-col items-center pr-4 w-14">
                <button className="p-3 mb-2 border rounded-full hover:bg-orange-500/20 cursor-not-allowed">
                  <img
                    src="/images/vote-up.png"
                    alt="vote-up"
                    className="h-2 w-4"
                  />
                </button>
                <div className="flex font-semibold mb-2">0</div>
                <button className="p-3 mb-2 border rounded-full hover:bg-orange-500/20 cursor-not-allowed">
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
                    className="mb-4 border rounded-md p-3 bg-white"
                  ></div>
                </div>
                {/* <ul className="relative">
                  <li className="inline-block space-x-1 p-1.5 bg-[#E1ECF4] text-[#39739D] rounded-md text-xs">
                    tag
                  </li>
                </ul> */}
                <div className="flex justify-end">
                  <div className="my-4 p-1.5 bg-[#E1ECF4] rounded-md text-xs">
                    <div className="text-[#6A737C]">
                      Asked{' '}
                      {format(
                        new Date(questionDetails[0].createdAt),
                        'MMM d, yyyy',
                      )}{' '}
                      at{' '}
                      {format(new Date(questionDetails[0].createdAt), 'HH:mm')}
                    </div>
                    <div className="flex">
                      <img
                        src="/images/Vector.svg"
                        alt="user"
                        className="h-8 w-8"
                      />
                      <div className="text-[#0074CC] ml-2">
                        {/* {유저이름 받아와야함} */}
                        {questionDetails[0].authorId}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div>
                {answersDetails && (
                  <div className="text-xl">{`${answersDetails.length} Answer${
                    answersDetails.length !== 1 ? 's' : ''
                  }`}</div>
                )}
              </div>
              {answersDetails &&
                answersDetails.map((answer) => (
                  <div className="flex py-4 border-b" key={answer.answerId}>
                    <div className="flex flex-col items-center pr-4 w-14">
                      <button className="p-3 mb-2 border rounded-full hover:bg-orange-500/20 cursor-not-allowed">
                        <img
                          src="/images/vote-up.png"
                          alt="vote-up"
                          className="h-2 w-4"
                        />
                      </button>
                      <div className="flex font-semibold mb-2">0</div>
                      <button className="p-3 mb-2 border rounded-full hover:bg-orange-500/20 cursor-not-allowed">
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
                      {/* <button>
                      <img
                        src="/images/selected.png"
                        alt="selected"
                        className="h-6 w-6"
                      />
                    </button> */}
                    </div>
                    <div className="pr-4 w-full">
                      <div className="pb-6 grow">
                        {/* answer viewer below */}
                        <div className="mb-4 border rounded-md p-3 bg-white text-sm font-light">
                          {answer.content}
                        </div>
                      </div>
                      {/* <ul className="relative">
                    <li className="inline-block space-x-1 p-1.5 bg-[#E1ECF4] text-[#39739D] rounded-md text-xs">
                      tag
                    </li>
                  </ul> */}
                      <div className="flex justify-end">
                        <div className="  my-4 p-1.5 text-[#39739D] text-xs">
                          <div className="text-[#6A737C]">
                            {format(
                              new Date(answer.createdAt),
                              "'answered' MMM d, yyyy 'at' HH:mm",
                            )}
                          </div>
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
                      {commentsDetails
                        .filter(
                          (comment) => comment.answerId === answer.answerId,
                        )
                        .map((comment) => (
                          <div key={comment.commentId}>
                            <div
                              className="w-full border-t"
                              key={comment.commentId}
                            >
                              <div className="flex justify-between py-[1.5%] mr-[.5%] ml-[6%] text-xs">
                                <div>{comment.content}</div>
                                <div className="text-[#6A737C]">
                                  {format(
                                    new Date(comment.createdAt),
                                    "'answered' MMM d, yyyy 'at' HH:mm",
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      <div className="flex">
                        <input
                          placeholder="Add a comment"
                          className="w-full border rounded-md focus:outline-none focus:border-sky-50 focus:ring-4 pl-2"
                        />
                        <button className="flex p-2 ml-[.5%] bg-[#0A95FF]/80 text-white rounded-md text-sm cursor-pointer hover:bg-[#0A95FF]/50">
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              <div></div>
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
