/* ==========================================================================
   PORTFOLIO CONTENT — edit this one file to update the whole site.

   • Facts from your resume and UXfolio about page are already filled in.
   • Any text that starts with "TODO:" shows up on the site with a dashed
     pink outline so you can spot what still needs your own words (mostly
     the case-study details your resume doesn't cover: insights, iterations,
     screenshots). Replace the whole string, including "TODO:".
   • Images: drop files into  assets/img/  and put the path in "src",
     e.g.  src: "assets/img/usda-hero.png". An empty src shows a placeholder.
   • Save the file, then refresh the browser tab to see the change.
   ========================================================================== */

window.PORTFOLIO = {
  /* ---------- Profile ---------- */
  profile: {
    firstName: "Layilah",
    lastName: "Campbell",
    title: "UX Research & Design", // shows under your name in the neon logo
    heroTitle: "From Recruiting at Google, Adobe & Meta to UX.", // big cyan line on the home page
    headline: "I spent seven years finding the people who build technology. Now I research people's needs and turn insights into better product experiences.",
    // Text on the player card (home page + About)
    school: "University of Michigan",
    degreeLine: "Master's Candidate - School of Information",
    gradLine: "Expected May 2027",
    status: "Open to opportunities", // HUD pill
    location: "Ann Arbor, MI",
    email: "layilah@umich.edu",
    phone: "240-460-6166",
    linkedin: "", // add your LinkedIn URL here (e.g. "https://www.linkedin.com/in/your-name") and it appears automatically
    uxfolio: "https://uxfol.io/layilahsportfolio",
    resumePdf: "assets/resume.pdf",
    photo: "assets/img/layilah.jpg", // swap this file for a higher-resolution photo any time
    photoAlt:
      "Portrait of Layilah Campbell smiling with long curly dark hair, wearing a navy University of Michigan sweatshirt with her hands on her hips"
  },

  /* ---------- About Me (from your UXfolio) ---------- */
  about: {
    kicker: "From talent to product",
    headline: "I spent 7 years finding the people who build technology. Now I research and design what gets built.",
    paragraphs: [
      "I'm Layilah, a UX Research & Design graduate student at the University of Michigan. After seven years recruiting UX talent, I now pair user research with prototyping and iteration to make products clearer and easier to use."
    ],
    highlights: [
      {
        label: "Big tech perspective",
        value: "7 years in tech",
        text: "Recruited designers, researchers, and engineers at Meta, Adobe, Google, and Southwest Airlines."
      },
      {
        label: "Founder mindset",
        value: "1 global business",
        text: "Built a client-centered coaching brand serving people across the United States and internationally."
      },
      {
        label: "Cross-industry UX",
        value: "4 industries",
        text: "Research and design experience across insurance, healthcare, education technology, and government."
      }
    ],
    // "How I turn insight into product direction"
    toolsHeading: "How I turn insight into product direction",
    tools: ["Figma", "Claude", "VS Code", "Lovable", "Gemini"],
    capabilities: [
      {
        title: "Qualitative & mixed-methods research",
        text: "Interviews, usability testing, surveys, field research, and contextual inquiry."
      },
      {
        title: "Research synthesis & insight generation",
        text: "Thematic analysis, affinity mapping, personas, journey maps, and opportunity framing."
      },
      {
        title: "UX design & prototyping",
        text: "Wireframes, interaction design, Figma prototypes, information architecture, and usability-driven iteration."
      },
      {
        title: "Stakeholder influence",
        text: "Executive storytelling, workshops, product recommendations, prioritization, and cross-functional alignment."
      }
    ],
    // A personal note that connects you to Roblox — write 1–2 sentences (or delete this line).
    whyLanes: "TODO: Write 1–2 sentences on why you love the game and what it taught you about social, player-first design."
  },

  /* ---------- Projects (scoreboard + My Work) ----------
     Each project gets a case study page: project.html?p=<id>
     Frames: Problem → Research → Define → Ideate → Iterate → Execution → Outcome
     Facts below come from your resume; "TODO" lines are for your story.
  ---------------------------------------------------------------------- */
  projects: [
    {
      id: "usda-acir",
      title: "USDA ACIR Portal",
      subtitle: "Usability research on search, navigation and mobile",
      ballColor: "#ff2fb4",
      year: "2026",
      score: "15+",
      scoreLabel: "interviews",
      tags: ["Usability testing", "Interviews", "Surveys"],
      role: "UX Researcher",
      team: "4 USDA stakeholders, weekly check-ins",
      timeline: "Jan – Apr 2026",
      tools: "Usability studies, interviews, surveys",
      hero: { src: "", caption: "TODO: Hero image — portal screens or research artifact" },

      problem: {
        statement:
          "How can importers, brokers, and government officials find — and feel confident interpreting — what they need in USDA's ACIR portal?",
        context:
          "Working weekly with 4 USDA stakeholders, I looked for usability pain points in navigation, search filters, and help resources, with a focus on search functionality and the mobile experience.",
        goal:
          "Understand where search, navigation, and help resources break down for each group, and recommend changes that improve findability and interpretive confidence."
      },
      research: {
        summary: "A mixed-methods study that combined testing, interviews and surveys across three user groups.",
        methods: [
          { name: "Usability testing", detail: "Led sessions with 10+ employees nationwide to identify interaction challenges and workflow inefficiencies." },
          { name: "User interviews", detail: "15+ importers, brokers, and government officials evaluating search functionality and the mobile experience." },
          { name: "Surveys", detail: "Designed and deployed surveys to assess findability and interpretive confidence across users." },
          { name: "Stakeholder check-ins", detail: "Weekly with 4 USDA stakeholders on navigation, search filters, and help resources." }
        ],
        insights: [
          "TODO: Key insight #1 — what surprised you? Add a quote or number.",
          "TODO: Key insight #2",
          "TODO: Key insight #3"
        ],
        image: { src: "", caption: "TODO: Affinity map or research synthesis" }
      },
      define: {
        persona: "TODO: Primary user (e.g. an importer or broker) — goals and frustrations.",
        journey: "TODO: The moment in the journey where search or help breaks down.",
        image: { src: "", caption: "TODO: Persona or journey map" }
      },
      ideate: {
        summary: "TODO: How you turned findings into recommendations for search filters, navigation and help content.",
        image: { src: "", caption: "TODO: Sketches or recommendation map" }
      },
      iterations: [
        { version: "Round 1", change: "TODO: What you tested first.", feedback: "TODO: What participants struggled with.", image: { src: "", caption: "TODO: Round 1 artifact" } },
        { version: "Round 2", change: "TODO: What you changed or recommended.", feedback: "TODO: What improved.", image: { src: "", caption: "TODO: Round 2 artifact" } }
      ],
      execution: {
        summary: "TODO: Walk through your final deliverable (report, readout, prototype).",
        decisions: [
          { title: "TODO: Recommendation #1", why: "TODO: The evidence behind it." },
          { title: "TODO: Recommendation #2", why: "TODO: The evidence behind it." }
        ],
        images: [{ src: "", caption: "TODO: Final deliverable" }],
        prototypeUrl: ""
      },
      outcome: {
        results: [
          { value: "10+", label: "employees in usability tests" },
          { value: "15+", label: "stakeholder interviews" },
          { value: "4", label: "stakeholders, weekly" }
        ],
        reflection: "TODO: What you learned and what you'd do next."
      }
    },

    {
      id: "instructure-elevated",
      title: "Instructure ElevateED",
      subtitle: "Research that built the case for an AI-powered education initiative",
      ballColor: "#27d9f5",
      year: "2025",
      score: "200+",
      scoreLabel: "presented to",
      tags: ["Stakeholder interviews", "Affinity mapping", "Wireframes"],
      role: "UX Researcher",
      team: "Researchers, designers and organization stakeholders",
      timeline: "Aug – Dec 2025",
      tools: "Interviews, affinity walls, prototypes, high-fidelity wireframes",
      hero: { src: "", caption: "TODO: Hero image — ElevateED wireframes" },

      problem: {
        statement:
          "Non-traditional learners face barriers in access, credentialing, and experience — and Instructure needed evidence to expand into inclusive, alternative education pathways.",
        context:
          "The EdTech landscape is evolving quickly. UX research was used to build the case for ElevateED, a strategic AI-powered initiative for Instructure.",
        goal: "Identify the barriers non-traditional learners face and turn them into design recommendations aligned with Instructure's long-term strategy."
      },
      research: {
        summary: "Stakeholder interviews and qualitative synthesis, built up with a cross-functional team.",
        methods: [
          { name: "Stakeholder interviews", detail: "Conducted interviews and analyzed needs across the organization." },
          { name: "Qualitative synthesis", detail: "Synthesized data to identify barriers in access, credentialing, and user experience." },
          { name: "Affinity walls", detail: "Built with researchers, designers and stakeholders to surface patterns." }
        ],
        insights: ["TODO: Key insight #1", "TODO: Key insight #2", "TODO: Key insight #3"],
        image: { src: "", caption: "TODO: Affinity wall" }
      },
      define: {
        persona: "TODO: Non-traditional learner persona — goals and barriers.",
        journey: "TODO: The step in the journey where access or credentialing breaks down.",
        image: { src: "", caption: "TODO: Persona or journey map" }
      },
      ideate: {
        summary: "Prototypes and actionable design recommendations, developed cross-functionally. TODO: add how you narrowed down ideas.",
        image: { src: "", caption: "TODO: Prototype sketches" }
      },
      iterations: [
        { version: "Prototype", change: "TODO: What the first prototype explored.", feedback: "TODO: Feedback from stakeholders.", image: { src: "", caption: "TODO: Early prototype" } },
        { version: "High-fidelity wireframes", change: "Final high-fidelity wireframes presented to all stakeholders.", feedback: "TODO: How stakeholders responded.", image: { src: "", caption: "TODO: High-fidelity wireframes" } }
      ],
      execution: {
        summary: "Presented final deliverables, including high-fidelity wireframes, to drive alignment with Instructure's long-term strategic goals. Recommendations were shared with over 200 students and corporate employees.",
        decisions: [
          { title: "TODO: Design decision #1", why: "TODO: The research behind it." },
          { title: "TODO: Design decision #2", why: "TODO: The research behind it." }
        ],
        images: [{ src: "", caption: "TODO: Final wireframes" }],
        prototypeUrl: ""
      },
      outcome: {
        results: [
          { value: "200+", label: "students & employees presented to" },
          { value: "Hi-fi", label: "wireframes delivered" }
        ],
        reflection: "TODO: What you learned and what you'd do differently."
      }
    },

    {
      id: "robin-nest",
      title: "Robin Nest",
      subtitle: "An AI-driven meal planning app for cancer patients",
      ballColor: "#ffb020",
      year: "2025",
      score: "5",
      scoreLabel: "research methods",
      tags: ["Healthcare", "Accessibility", "Prototyping"],
      role: "UX Designer & Researcher",
      team: "Analysts, information architects and product managers",
      timeline: "Aug – Nov 2025",
      tools: "Personas, journey maps, wireframes, prototypes",
      hero: { src: "", caption: "TODO: Hero image — Robin Nest screens" },

      problem: {
        statement:
          "Cancer patients need meal planning support they can trust. Robin Nest connects them with meal planning services, resources, and support tools.",
        context: "TODO: How the team identified this need.",
        goal: "Design flows that meet patients' nutritional needs while prioritizing accessibility, trust, and ease of use."
      },
      research: {
        summary: "User research to make sure the app meets the nutritional needs of patients.",
        methods: [
          { name: "User interviews", detail: "TODO: Who you interviewed." },
          { name: "Surveys", detail: "TODO: What you asked." },
          { name: "Personas & journey mapping", detail: "Created to ground design decisions in patient needs." },
          { name: "Usability testing", detail: "TODO: What you tested." }
        ],
        insights: ["TODO: Key insight #1", "TODO: Key insight #2", "TODO: Key insight #3"],
        image: { src: "", caption: "TODO: Personas or journey map" }
      },
      define: {
        persona: "TODO: Patient persona — needs and frustrations.",
        journey: "TODO: The point in the journey where support breaks down.",
        image: { src: "", caption: "TODO: Persona" }
      },
      ideate: {
        summary: "Designed and iterated user flows with a team of analysts, information architects, and product managers, aligning decisions with ethical and therapeutic goals.",
        image: { src: "", caption: "TODO: User flow" }
      },
      iterations: [
        { version: "V1 — Wireframes", change: "Built wireframes prioritizing accessibility, trust, and ease of use.", feedback: "TODO: What testing showed.", image: { src: "", caption: "TODO: Wireframes" } },
        { version: "V2 — Prototype", change: "TODO: What you changed.", feedback: "TODO: What improved.", image: { src: "", caption: "TODO: Prototype" } }
      ],
      execution: {
        summary: "TODO: Walk through the final app flows.",
        decisions: [
          { title: "Accessibility", why: "TODO: A specific choice and why." },
          { title: "Trust", why: "TODO: A specific choice and why." },
          { title: "Ease of use", why: "TODO: A specific choice and why." }
        ],
        images: [{ src: "", caption: "TODO: Final screens" }],
        prototypeUrl: ""
      },
      outcome: {
        results: [
          { value: "5", label: "research methods" },
          { value: "3", label: "design priorities" }
        ],
        reflection: "TODO: What you learned about designing for health contexts."
      }
    },

    {
      id: "crowning-calendar",
      title: "Crowning Calendar",
      subtitle: "A scheduling app built from end-to-end UX research",
      ballColor: "#61f29a",
      year: "2025",
      score: "10+",
      scoreLabel: "interviews",
      tags: ["Google UX course", "Figma", "Scheduling"],
      role: "UX Designer & Researcher",
      team: "TODO: e.g. solo project",
      timeline: "Jul – Oct 2025",
      tools: "Figma, interviews, affinity diagrams",
      hero: { src: "", caption: "TODO: Hero image — Crowning Calendar screens" },

      problem: {
        statement: "Consultants and clients struggle with time management and scheduling.",
        context: "Surfaced through 10+ structured interviews with consultants and clients across five states.",
        goal: "Design and test a scheduling/calendar app grounded in research, from first interview to prototype."
      },
      research: {
        summary: "A full research-to-design process built on structured interviews.",
        methods: [
          { name: "Structured interviews", detail: "10+ interviews with consultants and clients across five states to identify pain points in time management and scheduling." },
          { name: "Personas", detail: "Translated raw data into user personas." },
          { name: "Journey maps & affinity diagrams", detail: "Ensured research-driven design outcomes." }
        ],
        insights: ["TODO: Key insight #1", "TODO: Key insight #2", "TODO: Key insight #3"],
        image: { src: "", caption: "TODO: Affinity diagram" }
      },
      define: {
        persona: "TODO: Primary persona — consultant or client.",
        journey: "TODO: The scheduling moment where things break down.",
        image: { src: "", caption: "TODO: Persona or journey map" }
      },
      ideate: {
        summary: "TODO: How you went from affinity diagram to the first wireframes.",
        image: { src: "", caption: "TODO: Sketches" }
      },
      iterations: [
        { version: "V1 — Low-fidelity", change: "Developed and tested low-fidelity wireframes and prototypes in Figma.", feedback: "Iterated based on usability feedback to improve task success rates. TODO: add what you changed.", image: { src: "", caption: "TODO: Low-fidelity wireframes" } },
        { version: "V2 — Refined prototype", change: "TODO: What you refined.", feedback: "TODO: What testing showed.", image: { src: "", caption: "TODO: Refined prototype" } }
      ],
      execution: {
        summary: "TODO: Walk through the final design.",
        decisions: [
          { title: "TODO: Design decision #1", why: "TODO: The research behind it." },
          { title: "TODO: Design decision #2", why: "TODO: The research behind it." }
        ],
        images: [{ src: "", caption: "TODO: Final screens" }],
        prototypeUrl: ""
      },
      outcome: {
        results: [
          { value: "10+", label: "interviews" },
          { value: "5", label: "states represented" }
        ],
        reflection: "TODO: What you learned and what you'd do differently."
      }
    }
  ],

  /* ---------- Resume (from your PDF) ---------- */
  resume: {
    summary:
      "UX Research & Design graduate student at the University of Michigan with seven years in tech recruiting. I pair user research with prototyping and iteration to make products clearer and easier to use.",
    sections: [
      {
        title: "Research & project experience",
        items: [
          {
            role: "UX Researcher",
            org: "United States Department of Agriculture · Remote",
            dates: "Jan 2026 – Apr 2026",
            points: [
              "Lead usability testing with 10+ employees nationwide to identify interaction challenges and workflow inefficiencies.",
              "Conduct user interviews with 15+ importers, brokers, and government officials to evaluate search functionality and mobile experience for the USDA's ACIR portal.",
              "Design and deploy surveys to assess findability and interpretive confidence across users.",
              "Collaborate weekly with 4 USDA stakeholders to uncover usability pain points in navigation, search filters, and help resources."
            ]
          },
          {
            role: "Student Representative",
            org: "Adobe Student Ambassador · Ann Arbor, MI",
            dates: "Jan 2026 – Current",
            points: [
              "Collecting and communicating student feedback to Adobe to inform campus initiatives and improve student experiences.",
              "Representing Adobe on campus by promoting Adobe Creative Cloud and Adobe Express to diverse student communities.",
              "Planning and hosting workshops, demos, and pop-up events to increase student engagement and adoption of Adobe tools.",
              "Serving as a peer resource, providing guidance and support to students learning Adobe tools."
            ]
          },
          {
            role: "UX Researcher",
            org: "Instructure · Ann Arbor, MI",
            dates: "Aug 2025 – Dec 2025",
            points: [
              "Built a case for the creation of ElevateED through UX research, a strategic AI-powered initiative advancing Instructure's expansion into inclusive, alternative education pathways.",
              "Conducted stakeholder interviews, analyzed needs, and synthesized qualitative data to identify barriers in access, credentialing, and user experience for non-traditional learners.",
              "Collaborated cross-functionally with researchers, designers, and organization stakeholders to develop prototypes, affinity walls, and actionable design recommendations presented to over 200 students/corporate employees.",
              "Presented final deliverables to all stakeholders, including high-fidelity wireframes, to drive alignment with Instructure's long-term strategic goals amid the rapidly evolving EdTech landscape."
            ]
          },
          {
            role: "UX Designer and Researcher",
            org: "Robin Nest · Ann Arbor, MI",
            dates: "Aug 2025 – Nov 2025",
            points: [
              "Designed and iterated user flows for Robin Nest, an AI-driven app that connects cancer patients with meal planning services, resources, and support tools.",
              "Conducted user research, including creating user personas, journey mapping, interviews, surveys, and usability testing, to ensure the app meets the nutritional needs of patients.",
              "Collaborated with a diverse team of analysts, information architects, and product managers to align design decisions with ethical and therapeutic goals.",
              "Built wireframes and prototypes that prioritize accessibility, trust, and ease of use for patients navigating the meal planning tool."
            ]
          },
          {
            role: "UX Designer and Researcher",
            org: "Google UX Designer Course · Remote",
            dates: "Jul 2025 – Oct 2025",
            points: [
              "Developed a scheduling application called the “Crowning Calendar” through a comprehensive UX research and design process.",
              "Designed and executed an end-to-end UX research and design process for a scheduling/calendar app.",
              "Conducted 10+ structured interviews with consultants and clients across five states to identify key user pain points in time management and scheduling.",
              "Translated raw data into user personas, journey maps, and affinity diagrams, ensuring research-driven design outcomes.",
              "Developed and tested low-fidelity wireframes and prototypes in Figma, iterating based on usability feedback to improve task success rates."
            ]
          }
        ]
      },
      {
        title: "Work experience",
        items: [
          {
            role: "UX Research Intern",
            org: "Root Insurance · Remote",
            dates: "Jun 2026 – Aug 2026",
            points: [
              "Executed an end-to-end mixed-methods research strategy across 18 sessions, including 12 internal stakeholder interviews and 6 competitor policyholder interviews conducted via User Interviews and Lookback across key competitor cohorts.",
              "Evaluating Lookback session recordings via thematic coding and affinity mapping to create high-fidelity Customer Journey Maps, DIG-based personas, and a prioritized Retention Levers Matrix.",
              "Delivered three executive research readouts to cross-functional stakeholders, including the Director of Design and SVP of Product, presenting research progress, emerging insights, and strategic recommendations to align leadership on retention opportunities and product direction.",
              "Translated research insights into 15 net-new retention concepts in Figma, developing high-fidelity experience recommendations that addressed identified churn drivers and gave Product stakeholders tangible, research-backed opportunities for improving policyholder retention."
            ]
          },
          {
            role: "UX Research Intern",
            org: "UK Digital Health Systems · Ann Arbor",
            dates: "Jun 2026 – Sep 2026",
            points: [
              "Conduct qualitative coding and thematic analysis in NVivo for a mixed-methods health equity study spanning 48 patient and staff interviews (29 patient, 19 staff) and insights from 130+ hours of ethnographic fieldwork examining UK primary care delivery.",
              "Execute Round 2 qualitative coding of staff interviews and field notes using a standardized research protocol, identifying patterns related to digital access, healthcare equity, patient experience, and “Remote by Default” primary care.",
              "Perform transcript verification and de-identification across sensitive healthcare research data, strengthening data accuracy, participant confidentiality, and research integrity prior to formal analysis.",
              "Apply structured codebooks and qualitative coding frameworks across 2 primary research data sources, interviews and ethnographic field notes, documenting coding decisions to improve consistency and reliability across researchers.",
              "Analyze evidence from a 48-interview research corpus to surface barriers and disparities in technology-enabled healthcare access, contributing qualitative findings to a broader mixed-methods research study and future academic publication."
            ]
          },
          {
            role: "Technical/Corporate Recruiter",
            org: "Southwest Airlines · Dallas, TX",
            dates: "Jan 2023 – Jan 2025",
            points: [
              "Recruited and hired 12+ technical and revenue management roles across the U.S. with a 100% candidate acceptance rate, ensuring both organizational fit and positive candidate experience.",
              "Conducted stakeholder interviews with hiring managers and candidates to identify process pain points, using feedback to redesign recruitment workflows and enhance communication across teams.",
              "Designed and implemented organizational tracking tools that streamlined the hiring pipeline, improved recruiter efficiency by 25%, and delivered clearer visibility for team decision-making.",
              "Partnered cross-functionally with HR, immigration specialists, and global mobility teams to map employee onboarding workflows, improving usability and compliance for Green Card and immigration programs."
            ]
          },
          {
            role: "Technical Recruiter",
            org: "Meta · Dallas, TX",
            dates: "Nov 2021 – Nov 2022",
            points: [
              "Managed 50+ Software Engineering interns across 10 U.S. offices, coordinating onboarding, mentorship, and program evaluation.",
              "Partnered with sourcing, recruiting, and DEI teams to integrate diversity and equity strategies into internship pipelines, boosting URM representation.",
              "Delivered a 98% Candidate Review Score (CRS) by consistently monitoring candidate experience touchpoints.",
              "Exceeded hiring goals by 130% in the first 6 months, leveraging data analysis and customized recruiting strategies to improve conversion."
            ]
          },
          {
            role: "DEI Program Lead and University Talent Sourcer",
            org: "Adobe · Austin, TX",
            dates: "Jan 2020 – Nov 2021",
            points: [
              "Designed and launched Adobe's first Diversity Talent Acquisition team, establishing scalable DEI recruiting strategies.",
              "Conducted qualitative and quantitative research to identify talent gaps and presented to the CEO; findings supported Adobe's $3M donation to HBCUs/HSIs.",
              "Program-managed career readiness initiative for 70+ underrepresented students, resulting in 25 internship offers and global adoption of the model.",
              "Partnered with design teams to increase diverse UX design candidates by 200+, expanding pipelines for product and research roles.",
              "Created and facilitated training on diversity hiring and inclusive practices, attended by 500+ recruiters and hiring managers globally.",
              "Designed and delivered a 4-week Career Readiness Program that exceeded hiring goals by producing eight hires, achieved a 100% participant NPS, and was scaled for global adoption to increase underrepresented talent."
            ]
          },
          {
            role: "Recruiting Coordinator and Recruiting Sourcer",
            org: "Google (Onsite through Nelson) · Austin, TX",
            dates: "Aug 2017 – Mar 2019",
            points: [
              "Reviewed and sourced 800+ applications weekly across 7+ technical requisitions for Software Engineering Internship programs, generating 200+ offers extended and 100 hires accepted (50% conversion rate).",
              "Partnered with diversity teams to expand HBCU outreach by 40%, driving a 15% increase in underrepresented minority participation in the Engineering Practicum program.",
              "Coordinated 1,500+ interviews across 17 client groups and 33 offices, maintaining SLA compliance with 80%+ requests actioned within 24 hours.",
              "Received the Google Champ Award (2018) for advancing DEI initiatives and enhancing the candidate experience."
            ]
          }
        ]
      }
    ],
    education: [
      {
        degree: "Master of Science in UX Research and Design",
        school: "University of Michigan · Ann Arbor, MI",
        dates: "May 2027",
        detail: "GPA 4.00"
      },
      {
        degree: "Bachelor of Arts in Psychology",
        school: "Spelman College · Atlanta, GA",
        dates: "May 2017",
        detail: ""
      }
    ],
    coursework: [
      "Advanced Interactive Design",
      "Python",
      "UX Principles",
      "Generative Artificial Intelligence",
      "Web Design and Accessibility",
      "Advanced UX Research",
      "Graphic Design",
      "IoT and AR/VR"
    ],
    skills: {
      Research: ["Usability studies", "Interviews", "Surveys", "Personas", "Journey mapping", "Affinity mapping"],
      "Design & prototyping": ["Prototyping", "Figma", "Miro", "Adobe Photoshop"],
      "Code & data": ["Python", "R", "HTML", "CSS"],
      "AI tools": ["Claude", "ChatGPT", "Copilot", "Gemini"]
    }
  }
};
