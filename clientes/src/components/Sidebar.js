const Sidebar = () => {
  return (
    <div className="text-[#535960]">
      <div>
        <ul className="border text-xs bg-[#FDF7E2] mb-[8%]">
          <li className="bg-[#FBF3DF] font-bold border-b font-medium py-[5%] px-[5%]">
            The Overflow Blog
          </li>
          <li>
            <div className="flex  items-start py-[5%] px-[5%]">
              <svg aria-hidden="true" className="w-[25px]" viewBox="0 0 14 14">
                <path
                  fill="#F1B600"
                  d="m2 10.12 6.37-6.43 1.88 1.88L3.88 12H2v-1.88Z"
                ></path>
                <path
                  fill="#E87C87"
                  d="m11.1 1.71 1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0Z"
                ></path>
              </svg>
              <a
                href="https://stackoverflow.blog/2023/08/11/why-everyone-should-be-an-appsec-specialist-ep-598/?cb=1"
                target="_blank"
                rel="noopener noreferrer"
                className="pl-[5%]"
              >
                Why everyone should be an AppSec specialist (Ep. 598)
              </a>
            </div>
          </li>
          <li className="bg-[#FBF3DF] border-y font-medium py-[5%] px-[5%]">
            Featured on Meta
          </li>
          <li>
            <div className="flex items-start py-[5%] px-[5%]">
              <div className="w-[25px]">&#128483;</div>
              <a
                href="https://meta.stackexchange.com/questions/391847/moderation-strike-results-of-negotiations?cb=1"
                target="_blank"
                rel="noopener noreferrer"
                className="pl-[5%]"
              >
                Moderation strike: Results of negotiations
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-start py-[5%] px-[5%]">
              <div className="w-[25px]">&#128483;</div>
              <a
                href="https://meta.stackexchange.com/questions/392048/our-design-vision-for-stack-overflow-and-the-stack-exchange-network?cb=1"
                target="_blank"
                rel="noopener noreferrer"
                className="pl-[5%]"
              >
                Our Design Vision for Stack Overflow and the Stack Exchange
                network
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-start py-[5%] px-[5%]">
              <svg aria-hidden="true" viewBox="0 0 32 37" className="w-[25px]">
                <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB" />
                <path
                  d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
                  fill="#F48024"
                />
              </svg>
              <a
                href="https://meta.stackoverflow.com/questions/421831/temporary-policy-generative-ai-e-g-chatgpt-is-banned?cb=1"
                target="_blank"
                rel="noopener noreferrer"
                className="pl-[5%]"
              >
                {`Temporary policy: Generative AI (e.g., ChatGPT) is banned`}
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-start py-[5%] px-[5%]">
              <svg aria-hidden="true" viewBox="0 0 32 37" className="w-[25px]">
                <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB" />
                <path
                  d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
                  fill="#F48024"
                />
              </svg>
              <a
                href="https://meta.stackoverflow.com/questions/425766/preview-of-search-and-question-asking-powered-by-genai?cb=1"
                target="_blank"
                rel="noopener noreferrer"
                className="pl-[5%]"
              >
                Preview of Search and Question-Asking Powered by GenAI
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-start py-[5%] px-[5%]">
              <svg aria-hidden="true" viewBox="0 0 32 37" className="w-[25px]">
                <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB" />
                <path
                  d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
                  fill="#F48024"
                />
              </svg>
              <a
                href="https://meta.stackoverflow.com/questions/425872/collections-a-new-feature-for-collectives-on-stack-overflow?cb=1"
                target="_blank"
                rel="noopener noreferrer"
                className="pl-[5%]"
              >
                Collections: A New Feature for Collectives on Stack Overflow
              </a>
            </div>
          </li>
          <li className="bg-[#FBF3DF] border-y font-medium py-[5%] px-[5%]">
            Hot Meta Posts
          </li>
          <li>
            <div className="flex  items-start py-[5%] px-[5%]">
              <div className="w-[25px]">13</div>
              <a
                href="https://meta.stackoverflow.com/questions/426013/what-is-the-edit-policy-today-for-questions-about-obsolete-functionality?cb=1"
                target="_blank"
                rel="noopener noreferrer"
                className="pl-[5%]"
              >
                What is the edit policy today for questions about obsolete
                functionality?
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div className="border rounded-sm mb-[8%]">
        <div className="border-b font-sm py-[5%] px-[7%] bg-[#F8F9F9]">
          Custom Filters
        </div>
        <div className="py-[5%] px-[7%] flex text-sm text-[#0074CC]">
          Create a custom filter
        </div>
      </div>
      <div className="border rounded-sm mb-[8%]">
        <div className="border-b font-sm py-[5%] px-[7%] bg-[#F8F9F9]">
          Watched Tags
        </div>
        <div className="inline-block py-[8%] px-[7%]">
          <span className="bg-[#E1ECF4] text-[#39739D] text-xs rounded-sm px-1.5">
            javascript
          </span>
        </div>
      </div>
      <div className="border rounded-sm mb-[8%]">
        <div className=" border-b font-sm py-[5%] px-[7%] bg-[#F8F9F9]">
          Ignored Tags
        </div>
        <div className="inline-block py-[13%] px-[7%]">
          <span className="bg-[#E1ECF4] text-[#39739D] text-sm rounded-sm p-1.5">
            Add an ignored tag
          </span>
        </div>
      </div>
      <div className="border rounded-sm mb-[8%]">
        <div className="border-b font-sm py-[5%] px-[7%] bg-[#F8F9F9]">
          Collectives
        </div>
        <div className="border-b font-sm py-[5%] px-[7%]">
          <div className="flex mb-[2%]">
            <div className="pt-[2%]">
              <img
                src="https://play-lh.googleusercontent.com/RyoQTmHnxsxPYabsETmWVXHtLorVh_yOO48hsdv2VmI-Uki4qt5c5vV1cicJODV56A4"
                alt="background"
                className="w-[30px]"
              />
            </div>
            <div className="px-2 grow">
              <div>Google Cloud</div>
              <div className="text-xs">45k Members</div>
            </div>
            <div className="">
              <span className="inline-block border rounded-md p-2 text-[#0074CC] border-[#0074CC]">
                Join
              </span>
            </div>
          </div>
          <div className="text-sm">
            Google Cloud provides organizations with leading infrastructure,
            platform capabilities...
          </div>
        </div>
        <div className="border-b font-sm py-[5%] px-[7%]">
          <div className="flex mb-[2%]">
            <div className="pt-[2%]">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAATlBMVEX0TiSBuQABpO//uQL////2Qwr0vbK91ZZ9uACp1vQAofDN36v13qn/twCr2PLu1Zb4NwC605B3twD45N/j7NTb7ff069L13qUAnvLu05DcvaNKAAABIElEQVR4nO3PSRKCQAAEwVEBEfdd//9Rb8LFa4ejWR+oyFJitV3zbtnPUuWAhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhF8obGMdJsLjqU9VulznUXhZxyrNr0dYf4T1R1h/hPX3B8JVruu4vd03qcoQ67Ebhc9trDKPNUyE+0UsQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCws+9AOAEg+8RU74vAAAAAElFTkSuQmCC"
                alt="background"
                className="w-[30px]"
              />
            </div>
            <div className="px-2 grow">
              <div>Microsoft Azure</div>
              <div className="text-xs">11k Members</div>
            </div>
            <div className="">
              <span className="inline-block border rounded-md p-2 text-[#0074CC] border-[#0074CC]">
                Join
              </span>
            </div>
          </div>
          <div className="text-sm">
            On-premises, hybrid, multicloud, or at the edge—build on your terms
            with best-in-class...
          </div>
        </div>
        <div className="border-b font-sm py-[5%] px-[7%]">
          <div className="flex mb-[2%]">
            <div className="pt-[2%]">
              <img
                src="data:image/png;base64,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"
                alt="background"
                className="w-[30px]"
              />
            </div>
            <div className="px-2 grow">
              <div>WSO2</div>
              <div className="text-xs">5k Members</div>
            </div>
            <div className="">
              <span className="inline-block border rounded-md p-2 text-[#0074CC] border-[#0074CC]">
                Join
              </span>
            </div>
          </div>
          <div className="text-sm">
            WSO2 solutions give enterprises the flexibility to deploy
            applications and services on-...
          </div>
        </div>
      </div>
      <div className="m-[100%]"></div>
      <div className="">
        <h4 className="text-md py-[8%]">Hot Network Questions</h4>
        <ul className="text-[11px] text-[#0074CC] hover:text-sky-500">
          <li className="flex items-start py-[2.5%]">
            <div>&#127744;</div>
            <a
              href="https://tex.stackexchange.com/questions/693380/symbol-for-car-brakes"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-[2%]"
            >
              Symbol for car brakes
            </a>
          </li>
          <li className="flex items-start py-[2.5%]">
            <div>&#129351;</div>
            <a
              href="https://emacs.stackexchange.com/questions/78438/converting-day-value-to-a-timestamp"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-[2%]"
            >
              {`Converting 'day' value to a timestamp`}
            </a>
          </li>
          <li className="flex items-start py-[2.5%]">
            <div>&#129356;</div>
            <a
              href="https://mechanics.stackexchange.com/questions/93668/are-there-different-color-uv-dyes"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-[2%]"
            >
              Are there different color UV Dyes?
            </a>
          </li>
          <li className="flex items-start py-[2.5%]">
            <div>&#127744;</div>
            <a
              href="https://travel.stackexchange.com/questions/182917/i-have-a-travel-insurance-policy-that-comes-with-card-a-and-paid-for-the-travel"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-[2%]"
            >
              I have a travel insurance policy that comes with card A, and paid
              for the travel with card B. Is the said travel covered?
            </a>
          </li>
          <li className="flex items-start py-[2.5%]">
            <div>&#9749;</div>
            <a
              href="https://mathematica.stackexchange.com/questions/288770/gradient-fill-on-the-top-surface-of-an-annulus"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-[2%]"
            >
              Gradient fill on the top surface of an annulus
            </a>
          </li>
          <li className="flex items-start py-[2.5%]">
            <div>&#127744;</div>
            <a
              href="https://gaming.stackexchange.com/questions/404001/how-do-increase-the-autosave-frequency"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-[2%]"
            >
              How do increase the autosave frequency?
            </a>
          </li>
          <li className="flex items-start py-[2.5%]">
            <div>&#9939;</div>
            <a
              href="https://raspberrypi.stackexchange.com/questions/144054/unable-to-ssh-into-headless-raspberry-pi"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-[2%]"
            >
              Unable to ssh into headless raspberry pi?
            </a>
          </li>
          <li className="flex items-start py-[2.5%]">
            <div>&#128110;</div>
            <a
              href="https://scifi.stackexchange.com/questions/278120/how-many-police-officers-were-killed-in-the-police-station-in-the-terminator"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-[2%]"
            >
              How many police officers were killed in the police station in The
              Terminator?
            </a>
          </li>
          <li className="flex items-start py-[2.5%]">
            <div>&#9749;</div>
            <a
              href="https://softwareengineering.stackexchange.com/questions/447031/why-is-diamond-problem-a-problem-why-doesnt-the-child-simply-call-both-paren"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-[2%]"
            >
              {`Why is "diamond problem" a problem? Why doesn't the child simply
              call both parent's methods sequentially?`}
            </a>
          </li>
          <li className="flex items-start py-[2.5%]">
            <div>&#9939;</div>
            <a
              href="https://unix.stackexchange.com/questions/753985/need-help-with-a-sed-script-for-specific-word-replacements-in-a-text-file"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-[2%]"
            >
              Need help with a `sed` script for specific word replacements in a
              text file
            </a>
          </li>
          <li className="flex items-start py-[2.5%]">
            <div>&#9939;</div>
            <a
              href="https://dsp.stackexchange.com/questions/89040/amplitude-scaling-of-window-functions-for-fft"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-[2%]"
            >
              Amplitude scaling of window functions for FFT
            </a>
          </li>
          <li className="flex items-start py-[2.5%]">
            <div>&#127744;</div>
            <a
              href="https://math.stackexchange.com/questions/4752721/what-is-the-categorical-construction-for-a-list-of-nested-lists"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-[2%]"
            >
              What is the categorical construction for a list of nested lists?
            </a>
          </li>
          <li className="flex items-start py-[2.5%]">
            <div>&#9939;</div>
            <a
              href="https://serverfault.com/questions/1141526/windows-server-2016-essentials-uses-only-64-gb-even-if-it-sees-the-whole-128gb-i"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-[2%]"
            >
              Windows server 2016 essentials uses only 64 GB even if it sees the
              whole 128GB installed
            </a>
          </li>
          <li className="flex items-start py-[2.5%]">
            <div>&#9749;</div>
            <a
              href="https://langdev.stackexchange.com/questions/2704/to-what-extent-is-type-theory-relevant-to-dynamically-typed-languages"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-[2%]"
            >
              To what extent is type theory relevant to dynamically typed
              languages?
            </a>
          </li>
          <li className="flex items-start py-[2.5%]">
            <div>&#127744;</div>
            <a
              href="https://academia.stackexchange.com/questions/200625/collaboration-outside-pis-lab-and-ethics-dilemma"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-[2%]"
            >
              {`Collaboration outside PI's lab and ethics dilemma`}
            </a>
          </li>
          <li className="flex items-start py-[2.5%]">
            <div>&#127917;</div>
            <a
              href="https://retrocomputing.stackexchange.com/questions/27533/simple-doubling-of-zx80-ram"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-[2%]"
            >
              Simple doubling of ZX80 RAM
            </a>
          </li>
          <li className="flex items-start py-[2.5%]">
            <div>&#128450;</div>
            <a
              href="https://chemistry.stackexchange.com/questions/175596/how-to-distinguish-silver-chloride-bromide-and-iodide"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-[2%]"
            >
              How to distinguish silver chloride, bromide and iodide?
            </a>
          </li>
          <li className="flex items-start py-[2.5%]">
            <div>&#127744;</div>
            <a
              href="https://superuser.com/questions/1803850/if-a-hard-drive-has-sectors-that-are-corrupt-or-physically-damaged-can-those-se"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-[2%]"
            >
              If a hard drive has sectors that are corrupt or physically
              damaged, can those sectors be written over?
            </a>
          </li>
          <li className="flex items-start py-[2.5%]">
            <div>&#9749;</div>
            <a
              href="https://scifi.stackexchange.com/questions/278140/scifi-story-about-a-world-in-intellectual-darkness-suddenly-becoming-enlightened"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-[2%]"
            >
              SciFi story about a world in intellectual darkness suddenly
              becoming enlightened when a filter covering the sun is removed
            </a>
          </li>
          <li className="flex items-start py-[2.5%]">
            <div>&#127744;</div>
            <a
              href="https://stats.stackexchange.com/questions/623879/should-point-estimates-for-a-parameter-always-be-exactly-in-the-middle-of-their"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-[2%]"
            >
              Should point estimates for a parameter always be exactly in the
              middle of their 95% CI or does it depend on the distribution?
            </a>
          </li>
          <li className="flex items-start py-[2.5%]">
            <div>&#128450;</div>
            <a
              href="https://rpg.stackexchange.com/questions/207722/can-i-put-all-points-in-one-ability-with-customized-origins"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-[2%]"
            >
              Can I put all points in one ability with customized origins?
            </a>
          </li>
          <li className="flex items-start py-[2.5%]">
            <div>&#9749;</div>
            <a
              href="https://english.stackexchange.com/questions/611169/can-you-write-mes-the-possessive"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-[2%]"
            >
              {`Can you write "... me's" (the possessive)?`}
            </a>
          </li>
          <li className="flex items-start py-[2.5%]">
            <div>&#128450;</div>
            <a
              href="https://math.stackexchange.com/questions/4752738/joint-pdf-of-the-two-highest-values-extracted-from-a-uniform-distribution"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-[2%]"
            >
              Joint pdf of the two highest values extracted from a uniform
              distribution
            </a>
          </li>
          <li className="flex items-start py-[2.5%]">
            <div>&#9749;</div>
            <a
              href="https://politics.stackexchange.com/questions/80816/what-was-the-tipping-point-district-for-the-2020-presidential-election-under-202"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-[2%]"
            >
              What was the tipping point district for the 2020 presidential
              election under 2022 House lines?
            </a>
          </li>
          <li>
            <div></div>
          </li>
        </ul>
      </div>
      <div className="flex text-sm text-[#0074CC] hover:text-sky-500 mt-2">
        <div className="mr-1">&#128218;</div>Recent questions feed
      </div>
    </div>
  );
};

export default Sidebar;
