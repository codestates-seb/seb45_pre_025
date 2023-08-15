const Sidebar = () => {
  return (
    <div>
      <div>
        <ul className="border text-xs bg-[#FDF7E2] mb-[8%]">
          <li className="bg-[#FBF3DF] border-b font-medium text-[#535960] py-[5%] px-[5%]">
            The Overflow Blog
          </li>
          <li>
            <div className="py-[5%] px-[5%] ">
              <a
                href="https://stackoverflow.blog/2023/08/11/why-everyone-should-be-an-appsec-specialist-ep-598/?cb=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Why everyone should be an AppSec specialist (Ep. 598)
              </a>
            </div>
          </li>
          <li className="bg-[#FBF3DF] border-y font-medium text-[#535960] py-[5%] px-[5%]">
            Featured on Meta
          </li>
          <li>
            <div>
              <a
                href="https://meta.stackexchange.com/questions/391847/moderation-strike-results-of-negotiations?cb=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Moderation strike: Results of negotiations
              </a>
            </div>
          </li>
          <li>
            <div>
              <a
                href="https://meta.stackexchange.com/questions/392048/our-design-vision-for-stack-overflow-and-the-stack-exchange-network?cb=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Our Design Vision for Stack Overflow and the Stack Exchange
                network
              </a>
            </div>
          </li>
          <li>
            <div>
              <a
                href="https://meta.stackoverflow.com/questions/421831/temporary-policy-generative-ai-e-g-chatgpt-is-banned?cb=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {`Temporary policy: Generative AI (e.g., ChatGPT) is banned`}
              </a>
            </div>
          </li>
          <li>
            <div>
              <a
                href="https://meta.stackoverflow.com/questions/425766/preview-of-search-and-question-asking-powered-by-genai?cb=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview of Search and Question-Asking Powered by GenAI
              </a>
            </div>
          </li>
          <li>
            <div>
              <a
                href="https://meta.stackoverflow.com/questions/425872/collections-a-new-feature-for-collectives-on-stack-overflow?cb=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Collections: A New Feature for Collectives on Stack Overflow
              </a>
            </div>
          </li>
          <li className="bg-[#FBF3DF] border-y font-medium text-[#535960] py-[5%] px-[5%]">
            Hot Meta Posts
          </li>
          <li>
            13{' '}
            <div>
              <a
                href="https://meta.stackoverflow.com/questions/426013/what-is-the-edit-policy-today-for-questions-about-obsolete-functionality?cb=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                What is the edit policy today for questions about obsolete
                functionality?
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div className="border">
        <div>Custom Filters</div>
        <div>Create a custom filter</div>
      </div>
      <div className="border">
        <div>Watched Tags</div>
        <div>javascript</div>
      </div>
      <div className="border">
        <div>Ignored Tags</div>
        <div>Add an ignored tag</div>
      </div>
      <div className="border">
        <div>Collectives</div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="border">White space</div>
      <div className="border tracking-wide">
        <h4 className="text-md py-[8%]">Hot Network Questions</h4>
        <ul className="text-[11px] text-[#0074CC] hover:text-sky-500">
          <li>
            <div></div>
            <a
              href="https://tex.stackexchange.com/questions/693380/symbol-for-car-brakes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Symbol for car brakes
            </a>
          </li>
          <li>
            <div></div>
            <a
              href="https://emacs.stackexchange.com/questions/78438/converting-day-value-to-a-timestamp"
              target="_blank"
              rel="noopener noreferrer"
            >
              {`Converting 'day' value to a timestamp`}
            </a>
          </li>
          <li>
            <div></div>
            <a
              href="https://mechanics.stackexchange.com/questions/93668/are-there-different-color-uv-dyes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Are there different color UV Dyes?
            </a>
          </li>
          <li>
            <div></div>
            <a
              href="https://travel.stackexchange.com/questions/182917/i-have-a-travel-insurance-policy-that-comes-with-card-a-and-paid-for-the-travel"
              target="_blank"
              rel="noopener noreferrer"
            >
              I have a travel insurance policy that comes with card A, and paid
              for the travel with card B. Is the said travel covered?
            </a>
          </li>
          <li>
            <div></div>
            <a
              href="https://mathematica.stackexchange.com/questions/288770/gradient-fill-on-the-top-surface-of-an-annulus"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gradient fill on the top surface of an annulus
            </a>
          </li>
          <li>
            <div></div>
            <a
              href="https://gaming.stackexchange.com/questions/404001/how-do-increase-the-autosave-frequency"
              target="_blank"
              rel="noopener noreferrer"
            >
              How do increase the autosave frequency?
            </a>
          </li>
          <li>
            <div></div>
            <a
              href="https://raspberrypi.stackexchange.com/questions/144054/unable-to-ssh-into-headless-raspberry-pi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unable to ssh into headless raspberry pi?
            </a>
          </li>
          <li>
            <div></div>
            <a
              href="https://scifi.stackexchange.com/questions/278120/how-many-police-officers-were-killed-in-the-police-station-in-the-terminator"
              target="_blank"
              rel="noopener noreferrer"
            >
              How many police officers were killed in the police station in The
              Terminator?
            </a>
          </li>
          <li>
            <div></div>
            <a
              href="https://softwareengineering.stackexchange.com/questions/447031/why-is-diamond-problem-a-problem-why-doesnt-the-child-simply-call-both-paren"
              target="_blank"
              rel="noopener noreferrer"
            >
              {`Why is "diamond problem" a problem? Why doesn't the child simply
              call both parent's methods sequentially?`}
            </a>
          </li>
          <li>
            <div></div>
            <a
              href="https://unix.stackexchange.com/questions/753985/need-help-with-a-sed-script-for-specific-word-replacements-in-a-text-file"
              target="_blank"
              rel="noopener noreferrer"
            >
              Need help with a `sed` script for specific word replacements in a
              text file
            </a>
          </li>
          <li>
            <div></div>
            <a
              href="https://dsp.stackexchange.com/questions/89040/amplitude-scaling-of-window-functions-for-fft"
              target="_blank"
              rel="noopener noreferrer"
            >
              Amplitude scaling of window functions for FFT
            </a>
          </li>
          <li>
            <div></div>
            <a
              href="https://math.stackexchange.com/questions/4752721/what-is-the-categorical-construction-for-a-list-of-nested-lists"
              target="_blank"
              rel="noopener noreferrer"
            >
              What is the categorical construction for a list of nested lists?
            </a>
          </li>
          <li>
            <div></div>
            <a
              href="https://serverfault.com/questions/1141526/windows-server-2016-essentials-uses-only-64-gb-even-if-it-sees-the-whole-128gb-i"
              target="_blank"
              rel="noopener noreferrer"
            >
              Windows server 2016 essentials uses only 64 GB even if it sees the
              whole 128GB installed
            </a>
          </li>
          <li>
            <div></div>
            <a
              href="https://langdev.stackexchange.com/questions/2704/to-what-extent-is-type-theory-relevant-to-dynamically-typed-languages"
              target="_blank"
              rel="noopener noreferrer"
            >
              To what extent is type theory relevant to dynamically typed
              languages?
            </a>
          </li>
          <li>
            <div></div>
            <a
              href="https://academia.stackexchange.com/questions/200625/collaboration-outside-pis-lab-and-ethics-dilemma"
              target="_blank"
              rel="noopener noreferrer"
            >
              {`Collaboration outside PI's lab and ethics dilemma`}
            </a>
          </li>
          <li>
            <div></div>
            <a
              href="https://retrocomputing.stackexchange.com/questions/27533/simple-doubling-of-zx80-ram"
              target="_blank"
              rel="noopener noreferrer"
            >
              Simple doubling of ZX80 RAM
            </a>
          </li>
          <li>
            <div></div>
            <a
              href="https://chemistry.stackexchange.com/questions/175596/how-to-distinguish-silver-chloride-bromide-and-iodide"
              target="_blank"
              rel="noopener noreferrer"
            >
              How to distinguish silver chloride, bromide and iodide?
            </a>
          </li>
          <li>
            <div></div>
            <a
              href="https://superuser.com/questions/1803850/if-a-hard-drive-has-sectors-that-are-corrupt-or-physically-damaged-can-those-se"
              target="_blank"
              rel="noopener noreferrer"
            >
              If a hard drive has sectors that are corrupt or physically
              damaged, can those sectors be written over?
            </a>
          </li>
          <li>
            <div></div>
            <a
              href="https://scifi.stackexchange.com/questions/278140/scifi-story-about-a-world-in-intellectual-darkness-suddenly-becoming-enlightened"
              target="_blank"
              rel="noopener noreferrer"
            >
              SciFi story about a world in intellectual darkness suddenly
              becoming enlightened when a filter covering the sun is removed
            </a>
          </li>
          <li>
            <div></div>
            <a
              href="https://stats.stackexchange.com/questions/623879/should-point-estimates-for-a-parameter-always-be-exactly-in-the-middle-of-their"
              target="_blank"
              rel="noopener noreferrer"
            >
              Should point estimates for a parameter always be exactly in the
              middle of their 95% CI or does it depend on the distribution?
            </a>
          </li>
          <li>
            <div></div>
            <a
              href="https://rpg.stackexchange.com/questions/207722/can-i-put-all-points-in-one-ability-with-customized-origins"
              target="_blank"
              rel="noopener noreferrer"
            >
              Can I put all points in one ability with customized origins?
            </a>
          </li>
          <li>
            <div></div>
            <a
              href="https://english.stackexchange.com/questions/611169/can-you-write-mes-the-possessive"
              target="_blank"
              rel="noopener noreferrer"
            >
              {`Can you write "... me's" (the possessive)?`}
            </a>
          </li>
          <li>
            <div></div>
            <a
              href="https://math.stackexchange.com/questions/4752738/joint-pdf-of-the-two-highest-values-extracted-from-a-uniform-distribution"
              target="_blank"
              rel="noopener noreferrer"
            >
              Joint pdf of the two highest values extracted from a uniform
              distribution
            </a>
          </li>
          <li>
            <div></div>
            <a
              href="https://politics.stackexchange.com/questions/80816/what-was-the-tipping-point-district-for-the-2020-presidential-election-under-202"
              target="_blank"
              rel="noopener noreferrer"
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
      <div>Recent questions feed</div>
    </div>
  );
};

export default Sidebar;
