const Footer = () => {
  return (
    <footer className="relative bottom-0 w-full h-auto mt-20">
      <div className="flex justify-center bg-gray-900 absolute w-full px-4 pt-8 pb-10">
        {/* 로고 */}
        <div className="pr-6">
          <svg
            aria-hidden="true"
            className="native svg-icon iconLogoGlyphMd"
            width="32"
            height="37"
            viewBox="0 0 32 37"
          >
            <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB" />
            <path
              d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
              fill="#F48024"
            />
          </svg>
        </div>
        <nav className="flex">
          <div className="text-gray-200 px-8 text-sm font-bold  w-max">
            <h1 className="pb-3">STACK OVERFLOW</h1>
            <ul className="cursor-not-allowed font-light text-gray-300">
              <li className="mb-1">Questions</li>
              <li>Help</li>
            </ul>
          </div>
          <div className="text-gray-200 px-8 text-sm font-bold  w-max">
            <h1 className="pb-3">PRODUCTS</h1>
            <ul className="cursor-not-allowed font-light text-gray-300">
              <li className="mb-1">Teams</li>
              <li className="mb-1">Advertising</li>
              <li className="mb-1">Collectives</li>
              <li>Talent</li>
            </ul>
          </div>
          <div className="text-gray-200 px-8 text-sm font-bold  w-max">
            <h1 className="pb-3">COMPANY</h1>
            <ul className="cursor-not-allowed font-light text-gray-300">
              <li className="mb-1">About</li>
              <li className="mb-1">Press</li>
              <li className="mb-1">Work Here</li>
              <li className="mb-1">Legal</li>
              <li className="mb-1">Privacy Policy</li>
              <li className="mb-1">Terms of Service</li>
              <li className="mb-1">Contact Us</li>
              <li className="mb-1">Cookie Settings</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div className="text-gray-200 px-8 text-sm font-bold  w-max">
            <h1 className="pb-3">STACK EXCHANGE NETWORK</h1>
            <ul className="cursor-not-allowed font-light text-gray-300">
              <li className="mb-1">Technology</li>
              <li className="mb-1">Culture & recreation</li>
              <li className="mb-1">Life & arts</li>
              <li className="mb-1">Science</li>
              <li className="mb-1">Professional Policy</li>
              <li className="mb-1">Business</li>
              <li className="mt-7 mb-1">API</li>
              <li>Data</li>
            </ul>
          </div>
        </nav>
        <div className="text-gray-400 text-sm flex flex-col justify-between px-8">
          <ul className="flex cursor-not-allowed">
            <li className="mr-4">Blog</li>
            <li className="mr-4">Facebook</li>
            <li className="mr-4">Twitter</li>
            <li className="mr-4">Linkedin</li>
            <li>Instagram</li>
          </ul>
          <div>
            Site design / logo © 2023 Stack Exchange Inc; user contributions
            <br />
            licensed under
            <button className="cursor-not-allowed underline">CC BY-SA. </button>
            rev 2023.8.10.43574
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
