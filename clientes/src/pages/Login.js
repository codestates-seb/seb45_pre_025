import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const register = () => {
    if (email === '' || password === '') {
      alert('빈칸 없이 모두 작성해주세요');
      return;
    }
    // 이메일에 ('@', '.', '5글자 이하')이면 오류문자 출력
    if (
      email.indexOf('@') === -1 ||
      email.indexOf('.') === -1 ||
      email.length <= 5
    ) {
      alert('잘못된 이메일 형식입니다.');
      return false;
    }

    axios
      .post(
        'http://ec2-52-79-212-94.ap-northeast-2.compute.amazonaws.com:8080/auth/login',
        {
          email: email,
          password: password,
        },
      )
      .then((res) => {
        console.log(res);
        const authHeader = res.headers['Authorization'];

        console.log('test authHeader', authHeader);

        const jwt = authHeader ? authHeader.split(' ')[1] : null;

        console.log('token test', jwt);
        console.log('authHeader test', authHeader);

        localStorage.setItem('token', jwt);

        console.log('token', jwt);
        console.log('authHeader', authHeader);

        navigate('/');
      })

      .catch((err) => {
        console.log('error', err.res);
      });
  };

  return (
    <main className="w-full relative">
      <div className="absolute top-14 w-full h-screen bg-gray-100 flex flex-wrap justify-center items-center">
        <div className="flex flex-col items-center p-6">
          <svg
            aria-hidden="true"
            className="native svg-icon iconLogoGlyphMd w-8 h-9  mb-6"
            viewBox="0 0 32 37"
          >
            <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB" />
            <path
              d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
              fill="#F48024"
            />
          </svg>

          {/* 구글 로그인 버튼 */}
          <a href="/oauth2/authorization/google">
            <div className="w-72 flex items-center justify-center bg-white  border border-zinc-200 rounded-md p-2.5 drop-shadow my-1.5 cursor-pointer">
              <div>
                <svg
                  aria-hidden="true"
                  className="native svg-icon iconGoogle"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path
                    fill="#4285F4"
                    d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"
                  />
                  <path
                    fill="#34A853"
                    d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z"
                  />
                  <path
                    fill="#EA4335"
                    d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"
                  />
                </svg>
              </div>
              <h1 className="pl-1 text-sm"> Log in with Google</h1>
            </div>
          </a>

          {/* 카카오 로그인 버튼 */}
          <div className="w-72 flex items-center justify-center bg-[#FCEC4F] border border-zinc-200 rounded-md p-2.5 drop-shadow my-1.5 cursor-not-allowed">
            <div>
              <img
                className="w-5 "
                src="/images/Kakao-Icon.png"
                alt="카카오 로그인"
              />
            </div>
            <h1 className="pl-1 text-yellow-900 text-sm"> Log in with Kakao</h1>
          </div>

          {/* 네이버 로그인 버튼 */}
          <div className="w-72 flex items-center justify-center bg-[#03c75a] border border-zinc-200 rounded-md p-2.5 drop-shadow  my-1.5 mb-4 cursor-not-allowed">
            <div>
              <img
                className="w-3.5 "
                src="/images/Naver-Icons.png"
                alt="네이버 로그인"
              />
            </div>
            <h1 className="pl-1 text-white text-sm"> Log in with Naver</h1>
          </div>
          <div className="w-72 bg-white rounded-md p-6 drop-shadow-lg mb-6">
            <div>
              {/* 이메일 입력폼 */}
              <h1 className="font-semibold">Email</h1>
              <input
                className="border border-zinc-300 rounded-md w-full px-2 py-1 mt-1 font-light"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
            <div>
              <div className="flex justify-between items-center mt-4">
                <h1 className="font-semibold">Password</h1>
                <span className="text-xs text-blue-500  cursor-pointer">
                  Forgot password?
                </span>
              </div>

              {/* 비밀번호 입력 폼 */}
              <input
                type="password"
                className="border border-zinc-300 rounded-md w-full px-2 py-1 mt-1 font-light"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
            <div className="w-full">
              {/* 로그인 버튼 */}
              <button
                className="w-full bg-blue-500 hover:bg-blue-600 rounded-md my-4 py-2"
                onClick={() => {
                  register();
                }}
              >
                <h1 className="text-white">Log in</h1>
              </button>
            </div>
          </div>
          <div className="text-sm w-72 mt-2">
            <div className=" flex w-ful justify-center">
              <h1 className="mr-1.5">Don&rsquo;t have an account?</h1>
              <Link to="/signup">
                <button className="text-blue-500 hover:text-blue-300">
                  Sign up
                </button>
              </Link>
            </div>
            <div className="flex justify-center w-ful mt-3">
              <h1>Are you an employer?</h1>
              <a href="https://talent.stackoverflow.com/users/login">
                <button className="text-blue-500 hover:text-blue-300 fill-blue-500 hover:fill-blue-300 flex items-center w-ful">
                  <h1 className="mx-1.5">Sign up on Talent</h1>
                  <svg
                    aria-hidden="true"
                    className="va-text-bottom sm:d-none svg-icon iconShareSm w-3.5 h-3.5 "
                    viewBox="0 0 14 14"
                  >
                    <path d="M5 1H3a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9h-2v2H3V3h2V1Zm2 0h6v6h-2V4.5L6.5 9 5 7.5 9.5 3H7V1Z" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
