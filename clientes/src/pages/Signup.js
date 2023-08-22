import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const register = () => {
    if (userName === '' || email === '' || password === '') {
      alert('빈칸 없이 모두 작성해주세요');
      return false;
    }
    // 회원이름 2글자 이하면 오류문자 출력
    if (userName.length < 2) {
      alert('이름을 2글자 이상 입력하세요.');
      return false;
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
    // 비밀번호 (8자 이상, 문자(소문자+대문자)와 숫자 조합)
    let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
    if (!reg.test(password)) {
      alert(
        '비밀번호는 최소 1개의 소문자와 대문자 숫자를 포함하여 8자 이상이어야 합니다.',
      );
      return false;
    }

    axios
      .post(
        'http://ec2-52-79-212-94.ap-northeast-2.compute.amazonaws.com:8080/users/signup',
        {
          userName: userName,
          email: email,
          password: password,
        },
      )
      .then((res) => {
        console.log('success!');
        console.log('User profile', res.data.userName);
        console.log('User token', res.data.jwt);
        console.log('jwt', jwt);

        const authHeader = res.headers.authorization;
        const jwt = authHeader ? authHeader.split('')[1] : null;

        localStorage.setItem('token', res.data.jwt);
        localStorage.setItem('token', jwt);
        navigate('/');
      })
      .catch((err) => {
        console.log('error', err.res);
      });
  };

  const handleGoogleSignupClick = () => {
    const url = 'https://accounts.google.com/o/oauth2/v2/auth';
    const queryParams = new URLSearchParams({
      client_id:
        process.env
          .REACT_APP_SPRING_SECURITY_OAUTH2_CLIENT_REGISTRATION_GOOGLE_CLIENT_ID,
      redirect_uri:
        'http://pre-project-deploy.s3-website.ap-northeast-2.amazonaws.com/',
      response_type: 'code',
      scope: 'name email profile',
    });

    const fullUrl = `${url}?${queryParams.toString()}`;

    window.location.href = fullUrl;
  };

  return (
    <main className="w-full relative">
      <div className="absolute top-14 w-full h-screen bg-gray-100 flex flex-wrap justify-center items-center">
        <div className="flex flex-col items-start p-6">
          <h1 className="text-3xl mb-8">Join the Stack Overflow community</h1>
          <div className="flex mb-6">
            <svg width="26" height="26" className="svg-icon mtn2 fill-blue-400">
              <path
                opacity=".5"
                d="M4.2 4H22a2 2 0 012 2v11.8a3 3 0 002-2.8V5a3 3 0 00-3-3H7a3 3 0 00-2.8 2z"
              />
              <path d="M1 7c0-1.1.9-2 2-2h18a2 2 0 012 2v12a2 2 0 01-2 2h-2v5l-5-5H3a2 2 0 01-2-2V7zm10.6 11.3c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2c-.6 0-1.2.4-1.2 1.2 0 .7.5 1.1 1.2 1.2zm2.2-5.4l1-.9c.3-.4.4-.9.4-1.4 0-1-.3-1.7-1-2.2-.6-.5-1.4-.7-2.4-.7-.8 0-1.4.2-2 .5-.7.5-1 1.4-1 2.8h1.9v-.1c0-.4 0-.7.2-1 .2-.4.5-.6 1-.6s.8.1 1 .4a1.3 1.3 0 010 1.8l-.4.3-1.4 1.3c-.3.4-.4 1-.4 1.6 0 0 0 .2.2.2h1.5c.2 0 .2-.1.2-.2l.1-.7.5-.7.6-.4z" />
            </svg>
            <h1 className="ml-2 text-gray-800">Get unstuck — ask a question</h1>
          </div>
          <div className="flex mb-6">
            <svg width="26" height="26" className="svg-icon mtn2 fill-blue-400">
              <path d="M12 .7a2 2 0 013 0l8.5 9.6a1 1 0 01-.7 1.7H4.2a1 1 0 01-.7-1.7L12 .7z" />
              <path
                opacity=".5"
                d="M20.6 16H6.4l7.1 8 7-8zM15 25.3a2 2 0 01-3 0l-8.5-9.6a1 1 0 01.7-1.7h18.6a1 1 0 01.7 1.7L15 25.3z"
              />
            </svg>
            <h1 className="ml-2 text-gray-800">
              Unlock new privileges like voting and commenting
            </h1>
          </div>
          <div className="flex mb-6">
            <svg width="26" height="26" className="svg-icon mtn2 fill-blue-400">
              <path d="M14.8 3a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8l8.2 8.2c.8.8 2 .8 2.8 0l10-10c.4-.4.6-.9.6-1.4V5a2 2 0 00-2-2h-8.2zm5.2 7a2 2 0 110-4 2 2 0 010 4z" />
              <path
                opacity=".5"
                d="M13 0a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8c.1-.2.3-.6.6-.8l10-10a2 2 0 011.4-.6h9.6a2 2 0 00-2-2H13z"
              />
            </svg>
            <h1 className="ml-2 text-gray-800">
              Save your favorite questions, answers, watch tags, and more
            </h1>
          </div>
          <div className="flex mb-6">
            <svg width="26" height="26" className="svg-icon mtn2 fill-blue-400">
              <path d="M21 4V2H5v2H1v5c0 2 2 4 4 4v1c0 2.5 3 4 7 4v3H7s-1.2 2.3-1.2 3h14.4c0-.6-1.2-3-1.2-3h-5v-3c4 0 7-1.5 7-4v-1c2 0 4-2 4-4V4h-4zM5 11c-1 0-2-1-2-2V6h2v5zm11.5 2.7l-3.5-2-3.5 1.9L11 9.8 7.2 7.5h4.4L13 3.8l1.4 3.7h4L15.3 10l1.4 3.7h-.1zM23 9c0 1-1 2-2 2V6h2v3z" />
            </svg>
            <h1 className="ml-2 text-gray-800">Earn reputation and badges</h1>
          </div>
          <span className="text-gray-500 text-sm">
            Collaborate and share knowledge with a private group for FREE.
          </span>
          <button className=" -mt-1">
            <span className="text-blue-500 hover:text-blue-300 text-sm">
              Get Stack Overflow for Teams free for up to 50 users.
            </span>
          </button>
        </div>

        <div className="flex flex-col items-center p-6">
          {/* 구글 회원가입 버튼 */}
          <button onClick={handleGoogleSignupClick}>
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
              <h1 className="pl-1 text-sm">Sign up with Google</h1>
            </div>
          </button>

          {/* 카카오 회원가입 버튼 */}
          <div className="w-72 flex items-center justify-center bg-[#FCEC4F] border border-zinc-200 rounded-md p-2.5 drop-shadow my-1.5 cursor-not-allowed">
            <div>
              <img
                className="w-5 "
                src="/images/Kakao-Icon.png"
                alt="카카오 로그인"
              />
            </div>
            <h1 className="pl-1 text-yellow-900 text-sm">Sign up with Kakao</h1>
          </div>

          {/* 네이버 회원가입 버튼 */}
          <div className="w-72 flex items-center justify-center bg-[#03c75a] border border-zinc-200 rounded-md p-2.5 drop-shadow  my-1.5 mb-4 cursor-not-allowed">
            <div>
              <img
                className="w-3.5 "
                src="/images/Naver-Icons.png"
                alt="네이버 로그인"
              />
            </div>
            <h1 className="pl-1 text-white text-sm">Sign up with Naver</h1>
          </div>
          <div className="w-72 bg-white rounded-md p-6 drop-shadow-lg mb-6">
            <div>
              <h1 className="font-semibold">Display name</h1>

              {/* 회원이름 입력 폼 */}
              <input
                className="border border-zinc-300 rounded-md w-full px-2 py-1 mt-1 font-light"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
            <div className=" mt-4">
              <h1 className="font-semibold">Email</h1>

              {/* 이메일 입력 폼 */}
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
              <div className="flex mt-4">
                <h1 className="font-semibold">Password</h1>
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

              <span className="text-xs tracking-tight text-gray-500 flex my-1">
                비밀번호는 소문자, 대문자, 숫자 조합으로 8자 이상이어야 합니다.
              </span>
            </div>

            {/* 회원가입 클릭 버튼 */}
            <div className="w-full">
              <button
                className="w-full bg-blue-500 hover:bg-blue-600 rounded-md my-4 py-2"
                onClick={() => {
                  register();
                }}
              >
                <h1 className="text-white">Sign up</h1>
              </button>
            </div>
            <div className="text-xs">
              <span className="text-gray-500">
                By clicking “Sign up”, you agree to our terms of service and
                acknowledge that you have read and understand our privacy policy
                and code of conduct.
              </span>
            </div>
          </div>
          <div className="text-sm w-72 mt-2">
            <div className=" flex w-ful justify-center">
              <h1 className="mr-1.5">Already have an account?</h1>
              <Link to="/login">
                <button className="text-blue-500 hover:text-blue-300">
                  Log in
                </button>
              </Link>
            </div>
            <div className="flex justify-center w-ful mt-3">
              <h1>Are you an employer?</h1>
              <Link to="https://talent.stackoverflow.com/users/login">
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
