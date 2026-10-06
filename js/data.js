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
    heroTitle: "From Big Tech Recruiting to UX.", // big cyan line on the home page
    headline: "Seven years recruiting at Google, Adobe & Meta shaped how I understand people. Now I bring that perspective to research and design.",
    // Stat readouts under the home photo card. Use the word "projects" to show the live project count.
    stats: [
      { value: "7", label: "Years in tech" },
      { value: "projects", label: "Case studies" },
      { value: "15+", label: "Interviews" }
    ],
    // Text on the player card (home page + About)
    school: "University of Michigan",
    degreeLine: "Master's Candidate - School of Information",
    gradLine: "", // leave empty to hide the third card line
    status: "Open to opportunities", // HUD pill
    location: "Ann Arbor, MI",
    email: "layilah@umich.edu",
    phone: "240-460-6166",
    linkedin: "", // add your LinkedIn URL here (e.g. "https://www.linkedin.com/in/your-name") and it appears automatically
    resumePdf: "assets/resume.pdf",
    photo: "assets/img/layilah.jpg", // swap this file for a higher-resolution photo any time
    photoAlt:
      "Portrait of Layilah Campbell smiling with long curly dark hair, wearing a navy University of Michigan sweatshirt with her hands on her hips"
  },

  /* ---------- About Me (your UXfolio words, laid out as frames) ----------
     Kept separate from the home page on purpose: the home page has the "7 years
     recruiting" story, so About leads with your perspective, your why, and you. */
  about: {
    kicker: "Player profile",
    title: "Meet Layilah",
    pronunciation: "Lay-La",
    lede: "I bring a rare perspective to product work: I understand the people who build technology, the teams making product decisions, and the people who ultimately use those experiences.",
    card: {
      header: "Meet the player",
      title: "Layilah Campbell",
      lines: ["Pronounced Lay-La", "Ann Arbor, MI"],
      photo: "assets/img/layilah-about.jpg",
      photoAlt: "Portrait of Layilah Campbell in a green blazer, one hand resting near her chin"
    },

    // Frame 1 — your path, told as: find the problem, fix it from the hiring side, learn the craft
    path: {
      heading: "My path into UX",
      lead: "It began with a simple realization:",
      quote: "When tools are confusing or inaccessible, people are often expected to adapt to the product.",
      bridge: "I started where I already was: in hiring, finding problems and fixing them.",
      steps: [
        {
          label: "Spot the problem",
          org: "Adobe",
          text: "As Adobe's DEI Program Lead, I ran qualitative and quantitative research to find our talent gaps and presented it to the CEO. The findings supported a $3M donation to HBCUs and HSIs."
        },
        {
          label: "Fix it from the hiring side",
          org: "Adobe",
          text: "I partnered with design teams to add 200+ diverse UX design candidates, widening the pipelines for product and research roles, and trained 500+ recruiters and hiring managers on inclusive hiring."
        },
        {
          label: "Run the research myself",
          org: "Southwest Airlines",
          text: "I interviewed hiring managers and candidates to find process pain points, redesigned the recruiting workflow, and built tracking tools that improved recruiter efficiency by 25%."
        },
        {
          label: "Teach myself the craft",
          org: "Google UX Design Course",
          text: "I built the Crowning Calendar, a scheduling app, end to end: 10+ structured interviews across five states, personas, journey maps and affinity diagrams, then low-fidelity wireframes in Figma refined with usability feedback to improve task success."
        },
        {
          label: "Go all in",
          org: "University of Michigan",
          text: "I'm completing an M.S. in UX Research & Design while doing the work: usability research for the USDA, an AI-powered education initiative at Instructure, and research internships at Root Insurance and UK Digital Health Systems."
        }
      ],
      turn: "Now I want to reverse that relationship, through research, thoughtful design, and solutions that work for more people.",
      extra: "Outside of UX, I also run a global pageant consulting business, which has strengthened my skills in communication, strategy, leadership, and understanding people."
    },

    // Frame 2
    toolsHeading: "How I turn insight into product direction",
    tools: [
      "Figma", "Miro", "Adobe Photoshop",
      "Claude", "ChatGPT", "Copilot", "Gemini", "Lovable",
      "VS Code", "Python", "R", "HTML", "CSS",
      "NVivo", "Lookback", "User Interviews"
    ],
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

    // Frame 3
    educationHeading: "Where I trained",
    education: [
      {
        school: "University of Michigan",
        program: "Master of Science in UX Research & Design · May 2027",
        text: "I'm developing my research and design practice through coursework and client projects in usability testing, interaction design, accessibility, and data analysis. My work connects insights about people with practical product decisions."
      },
      {
        school: "Spelman College",
        program: "Bachelor of Arts in Psychology · 2017",
        text: "My psychology background shaped how I understand human behavior, motivation, and decision-making. Studying positive psychology in Copenhagen expanded my perspective on how context and culture influence people's experiences."
      }
    ],

    // Bonus frame
    moreHeading: "A little more about me",
    more: [
      {
        value: "$5,000+",
        title: "in scholarships",
        text: "Through my consulting business, I've supported young women across the country in pursuing their goals."
      },
      {
        value: "#1",
        title: "Award-winning entrepreneur",
        text: "Named Pageant Planet's #1 pageant coach in 2023 and ranked among the Top 5 for interview and overall coaching in 2024."
      },
      {
        value: "25+",
        title: "countries explored",
        text: "Travel is one of my favorite ways to experience different cultures and perspectives."
      }
    ],
    league: {
      title: "A little friendly competition",
      text: "I joined a bowling league, adding another kind of practice to my weekly routine.",
      tie: "Which may explain why The Lanes is my favorite game on Roblox.",
      image: { src: "assets/img/bowling.jpg", alt: "Layilah releasing a bowling ball down the lane at a bowling alley" }
    }
  },

  /* ---------- Projects (scoreboard + My Work) ----------
     Each project gets a case study page: project.html?p=<id>
     Frames: Problem → Research → Define → Ideate → Iterate → Execution → Outcome
     Facts below come from your resume; "TODO" lines are for your story.
  ---------------------------------------------------------------------- */
  projects: [
    {
      id: "milk-and-froth",
      title: "Milk and Froth Redesign",
      subtitle: "A Detroit-born ice cream brand, reimagined online",
      focus: "Web design",
      approach: "Redesigned the site to spotlight flavors, help people find a shop, and browse by image",
      summary: "A website redesign concept for a Detroit-born ice cream brand, focused on showcasing distinctive flavors, improving location discovery, and creating a more visual browsing experience.",
      ballColor: "#ff5a3c",
      year: "2026",
      tags: ["Web design", "Competitive analysis", "Design system"],
      role: "UX Designer",
      team: "Two designers: Micaela Ciambrone & Layilah Campbell",
      timeline: "Jan – Mar 2026",
      tools: "Competitive analysis, wireframes, component library, brand and type system",
      hero: { src: "assets/img/milk-homepage.jpg", caption: "The redesigned homepage: an image-forward hero for the season's flavors." },

      problem: {
        statement:
          "How can Milk & Froth's website do justice to small-batch ice cream made from scratch, with flavors that stand out, shops that are easy to find, and a more visual way to browse?",
        context:
          "Milk & Froth is a Detroit-born ice cream brand focused on small-batch ice creams made with real ingredients. Every flavor is made from scratch in the Eastern Market kitchen with fresh dairy, premium ingredients and in-house pasteurization, and the shop's bold red interior reflects an energetic, indulgent approach. We started by reviewing the current site and comparing it with other ice cream brands.",
        goal:
          "Redesign the digital experience around three goals, listed below, so the website feels as vibrant and handcrafted as the shop."
      },

      research: {
        summary:
          "We audited the current Milk & Froth site (its homepage, About page and Find Pints page appear in the before and after at the end), then compared four ice cream brands, two local and two nationwide, across eight site features: online ordering, mobile app, search bar, store locator, 404 pages, product catalog, menu navigation bar and contact us.",
        methods: [
          { name: "Current-site review", detail: "Walked through the live homepage, About page and Find Pints page to see how the brand, flavors, story and stockists were presented." },
          { name: "Competitive analysis", detail: "Compared Milkshake Factory, Michigan Creamery, Jeni's and Van Leeuwen across eight features." },
          { name: "TODO: User research", detail: "TODO: Any interviews, surveys or usability tests you ran (and how many people)." }
        ],
        insights: [
          "All four brands offered online ordering and a store locator, so both are expected features rather than differentiators.",
          "Only one of the four, Jeni's, had a mobile app, and one local brand had no search bar, so there was room to stand out on mobile and search.",
          "TODO: What the current site did well or poorly for flavors, shops and browsing."
        ],
        image: [
          { src: "assets/img/milk-competitive.jpg", caption: "Competitive analysis: two local and two nationwide brands across eight features." }
        ]
      },

      define: {
        callout: "The shop already feels vibrant, playful and indulgent. The redesign's job was to carry that same energy, and the craft behind it, into the website.",
        lists: [
          {
            heading: "Three goals",
            items: [
              "Goal 1: Promote Milk & Froth's distinctive flavor profiles and handcrafted ice cream process.",
              "Goal 2: Design a location-focused feature that highlights Milk & Froth storefronts across Michigan, improving store discoverability and helping users quickly find relevant location information.",
              "Goal 3: Design a more intuitive, image-forward website that highlights products visually."
            ]
          }
        ],
      },

      ideate: {
        summary:
          "Wireframes mapped five pages and the content each one needs, with a shared header and footer. Home: a hero, a creamy banner, best sellers, a marquee scroller, a customer quote, Scoop Shops (Ann Arbor and Detroit) and a Who We Are section. Menu: an All Flavors header, filter chips, a dripping-ice-cream banner and product cards. About Us: Who Is Milk & Froth, rotating images and process text. Contact Us: customer service, FAQs, partnerships, wholesale, find a shop, and a message form. E-commerce: a grid of flavors.",
        image: [{ src: "assets/img/milk-wireframes.jpg", fit: "wide", caption: "Wireframes: Home, Menu, About Us and E-commerce, and Contact Us." }]
      },

      iterations: [
        {
          version: "Round 1: Wireframes to a design system",
          change: "Moved from the grey wireframes above to a design system built on the brand: Roasted Strawberry as the primary color, plus a golden secondary, success green, error red and a greyscale. Each color has a 10-step primitive scale and semantic roles (surface, border, text and icon in subtle, lighter, default and darker steps). Type pairs Nunito Sans with Montserrat, with a scale for desktop, tablet and mobile.",
          feedback: "TODO: What feedback or testing showed, and what you changed.",
          palette: [
            { name: "Roasted Strawberry", hex: "#E02B00" },
            { name: "Blushed Froth", hex: "#FFD6D4" },
            { name: "Midnight Cocoa", hex: "#000000" },
            { name: "Sweet Cream", hex: "#FFFFFF" }
          ],
          typefaces: [
            { role: "Primary typeface", name: "Nunito Sans" },
            { role: "Secondary typeface", name: "Montserrat" }
          ],
          image: [
            { src: "assets/img/milk-color-system.jpg", fit: "wide", caption: "Color system: primitives and semantic tokens for primary, secondary, success, error and greyscale." },
            { src: "assets/img/milk-type-scale.png", caption: "Type system: Nunito Sans and Montserrat, with a scale for desktop, tablet and mobile." }
          ]
        },
        {
          version: "Round 2: Components",
          change: "Built the component library on those tokens: primary, secondary and tertiary buttons in three sizes, each with default, hover, selected, focused and disabled states; navigation links; add-to-cart and quantity controls; product cards in grid, list and quick-add layouts; the order summary; and the Churned, Scooped, Chilled, Repeat ticker. Pages were designed for desktop and mobile in a light (blush) and a dark (cocoa) theme.",
          feedback: "TODO: What testing or review showed on the high-fidelity version.",
          image: [
            { src: "assets/img/milk-buttons.jpg", fit: "wide", caption: "Buttons: primary, secondary and tertiary, in three sizes and five states." },
            { src: "assets/img/milk-components.jpg", fit: "wide", caption: "Components: logo lockups, product cards (list, grid and quick-add), order summary, add button and the ticker." },
            { src: "assets/img/milk-cart-mobile.jpg", fit: "phone", caption: "Mobile cart in light mode: a buy-5-get-1-free nudge, quantity controls, a gift-note option and a clear checkout button." }
          ]
        }
      ],

      execution: {
        summary: "The final screens, desktop and mobile. Before and afters are at the end.",
        designs: [
          {
            label: "Homepage",
            images: [
              { src: "assets/img/milk-homepage-desktop.jpg", fit: "full", caption: "Desktop" },
              { src: "assets/img/milk-homepage-mobile.jpg", fit: "full", caption: "Mobile" }
            ]
          },
          {
            label: "Our Flavors",
            images: [{ src: "assets/img/milk-flavors.jpg", fit: "full", caption: "Light (blush) and dark (cocoa) themes." }]
          },
          {
            label: "Find Pints",
            images: [{ src: "assets/img/milk-find-pints.jpg", fit: "full", caption: "A card for each shop, desktop and mobile." }]
          },
          {
            label: "Product pages",
            images: [{ src: "assets/img/milk-product.jpg", fit: "full", caption: "Flavor and item pages, desktop and mobile, light and dark." }]
          },
          {
            label: "About",
            images: [{ src: "assets/img/milk-about-after.jpg", fit: "full", caption: "The redesigned About page." }]
          },
          {
            label: "Cart, checkout and 404",
            images: [{ src: "assets/img/milk-cart-checkout.jpg", fit: "full", caption: "Cart, checkout and a 404 page that stays on brand, desktop and mobile." }]
          }
        ],
        decisions: [],
        images: [],
        prototypeUrl: ""
      },

      outcome: {
        compare: [
          {
            label: "Homepage",
            goal: "Goal 3",
            before: { src: "assets/img/milk-current-home.jpg", caption: "Before: the current homepage." },
            after: [
              { src: "assets/img/milk-homepage-desktop.jpg", fit: "full", caption: "After: desktop. A full-bleed hero, bestsellers, the story, customer quotes and the team." },
              { src: "assets/img/milk-homepage-mobile.jpg", fit: "full", caption: "After: mobile." }
            ]
          },
          {
            label: "Find Pints: the new locations page",
            goal: "Goal 2",
            before: { src: "assets/img/milk-current-locations.jpg", caption: "Before: the current Find Pints page, a text list of markets by city." },
            after: { src: "assets/img/milk-find-pints.jpg", fit: "full", caption: "After: Ann Arbor, Detroit and Royal Oak, each with hours, address, photo and directions. Desktop and mobile." }
          },
          {
            label: "About",
            before: { src: "assets/img/milk-current-about.jpg", caption: "Before: the current About page." },
            after: { src: "assets/img/milk-about-after.jpg", caption: "After: the redesigned About page." }
          },
          {
            label: "Flavors and product pages",
            goal: "Goal 1",
            after: { src: "assets/img/milk-product.jpg", caption: "After: flavor and item pages, desktop and mobile, light and dark." }
          },
          {
            label: "Cart, checkout and 404",
            after: { src: "assets/img/milk-cart-checkout.jpg", caption: "After: cart, checkout and 404 pages, desktop and mobile." }
          }
        ],
        results: [
          { value: "3", label: "design goals, each with a feature" },
          { value: "4", label: "brands compared" },
          { value: "8", label: "features benchmarked" },
          { value: "2", label: "layouts designed: desktop and mobile" }
        ],
        reflection: "TODO: What you learned about designing for a food brand, and what you'd do next (for example, testing the store locator with real customers)."
      }
    },

    {
      id: "crown-code",
      title: "Crown Code",
      subtitle: "Interview prep for pageant contestants",
      focus: "Mobile design",
      approach: "Designed a prep app that brings flashcards, reminders and a readiness dashboard into one place",
      summary: "A mobile app that brings interview flashcards, text-based reminders and a full prep dashboard into one place, helping pageant contestants build a consistent preparation routine.",
      ballColor: "#c6f24a",
      year: "2026",
      tags: ["Mobile app", "Design system", "Light & dark mode"],
      role: "UX Designer",
      team: "Solo project (Layilah Campbell)",
      timeline: "Jan – Apr 2026",
      tools: "Design brief, component library, light and dark mode prototypes",
      hero: { src: "assets/img/crown-home.png", fit: "phone", caption: "Crown Code's home screen: a personal greeting and a path to the day's practice." },

      problem: {
        statement:
          "Pageant contestants often prepare for interviews with scattered tools like paper notes, screenshots, text messages, PDFs and social media advice, which makes it hard to stay organized, practice consistently, and know whether their answers are improving.",
        context:
          "The app is an extension of the Crown Code brand, which already sells interview flashcards. Many contestants also need support beyond interview questions: reminders, readiness tracking, and personalized practice that matches their pageant system and division. TODO: add one line on how you saw this need first-hand (for example through your pageant coaching).",
        goal:
          "Create a single, easy-to-use platform that combines interview preparation, accountability and competition organization, so pageant prep feels manageable, consistent and effective."
      },

      research: {
        summary:
          "The project began from a design brief with an executive summary, problem statement, scope and requirements. TODO: describe the research behind the brief (interviews with contestants or coaches, a competitor review, or your own coaching experience) and what it taught you.",
        methods: [
          { name: "Design brief", detail: "A written brief defining the product, problem, seven core features and ten requirements, including iOS and Android support." },
          { name: "TODO: User research", detail: "TODO: Who you talked to or observed, and how many." },
          { name: "TODO: Competitive review", detail: "TODO: What other prep tools, flashcard apps or reminder apps you looked at." }
        ],
        insights: ["TODO: Key insight #1", "TODO: Key insight #2", "TODO: Key insight #3"],
        image: { src: "", caption: "TODO: Research synthesis, notes or competitor comparison" }
      },

      define: {
        persona:
          "A pageant contestant preparing for interviews and competition, often busy, who needs quick, efficient prep tools and wants support beyond interview questions: reminders, readiness tracking, and practice that matches her pageant system and division.",
        journey:
          "Today, preparation lives in notes, screenshots, texts, PDFs and social media advice. That makes consistent practice, growth tracking and organization hard, and it leaves contestants unsure whether their answers are actually getting better.",
        lists: [
          {
            heading: "Scope: seven core features",
            items: [
              "Interview flashcards and practice: study flashcards that help build thoughtful, polished, confident responses.",
              "Text message practice mode: daily interview questions, weekly confidence prompts, quick-response challenges, reminders and pageant-week check-ins.",
              "Full prep dashboard: a preparation timeline, packing checklist, paperwork reminders, goal tracker, answer bank and pageant-week readiness tracker.",
              "System-specific practice: personalize by pageant type, division and competition focus.",
              "Smarter answer feedback: answer scores, clarity suggestions, stronger rewritten versions, and guidance on confidence, relevance and specificity.",
              "Progress tracking: practice streaks, saved responses, readiness scores and weekly summary reports.",
              "Accountability tools: reminders, nudges and progress-based encouragement to keep users motivated and consistent."
            ]
          },
          {
            heading: "Requirements",
            items: [
              "Works on both iOS and Android.",
              "Secure accounts that keep practice history, saved responses, flashcards and progress.",
              "View, save and interact with digital interview flashcards.",
              "Optional text-message practice: daily questions, reminders, countdown texts and practice prompts.",
              "Personalization by pageant system, division and competition focus.",
              "Answer feedback with scoring and suggestions for improvement.",
              "Progress monitoring of consistency, improvement and readiness over time.",
              "Preparation tools: timelines, checklists, deadline reminders and answer banks.",
              "Push notifications for practice sessions, preparation tasks, deadlines and pageant-week milestones.",
              "A visually clean, easy-to-navigate, supportive interface for busy users."
            ]
          }
        ],
        callout: "The main benefit: a structured, accessible system that makes pageant prep feel manageable, consistent and effective.",
        map: {
          heading: "From the brief to the screens",
          rows: [
            { tag: "Dashboard", need: "Track deadlines, practice and action items in one place", design: "A readiness score with a mastery streak and a practice streak, for structure, visibility and accountability.", where: "Home and Progress" },
            { tag: "Flashcards", need: "Practice interview answers and learn a clear answer structure", design: "Tap-to-reveal flashcards in decks, with an answer structure to build stronger, more confident responses.", where: "Cards" },
            { tag: "Sharing", need: "Get more continuous support from coaches", design: "A readiness profile and a Share Your Journey view, so feedback is personal, timely and tied to real progress.", where: "Profile" }
          ]
        }
      },

      ideate: {
        summary:
          "TODO: How you explored the app's structure: sketches, a flow for practice, feedback and progress, and how you decided on the four main tabs (Home, Cards, Progress, Profile).",
        image: [{ src: "assets/img/crown-sketches.jpg", caption: "Early sketches." }]
      },

      iterations: [
        {
          version: "Round 1 — Sketches & low-fidelity",
          change: "TODO: What the first wireframes explored.",
          feedback: "TODO: What feedback or testing showed, and what you changed.",
          image: { src: "assets/img/crown-lowfi.jpg", caption: "Low-fidelity wireframes." }
        },
        {
          version: "Round 2 — Design system & high fidelity",
          change: "Built a component library (primary, secondary and tertiary buttons in three sizes, navigation, flashcards, progress and readiness cards, top bar and action footer), then designed profile, home and progress, and flashcard screens in light mode, with a dark mode frame for the same screens.",
          feedback: "TODO: What testing or review showed, and what changed as a result.",
          image: [
            { src: "assets/img/crown-components.jpg", caption: "Component library: buttons, navigation, flashcards, progress and readiness cards." },
            { src: "assets/img/crown-screens-light.png", caption: "Screen set, light mode: profile pages, home and progress pages, and flashcards." },
            { src: "assets/img/crown-screens-dark.png", caption: "Screen set, dark mode." }
          ]
        }
      ],

      execution: {
        summary:
          "Three design decisions shaped the app, all in service of one goal: making pageant prep feel more consistent, focused and effective. Together they bring preparation and organization into one place.",
        palette: [
          { name: "Crowning Blue", hex: "#00878A" },
          { name: "Golden Rush", hex: "#E4BD3C" },
          { name: "Stunning Black", hex: "#000000" },
          { name: "Sweet White", hex: "#FFFFFF" }
        ],
        typefaces: [
          { role: "Primary typeface", name: "Manrope" },
          { role: "Secondary typeface", name: "Newsreader" }
        ],
        decisions: [
          {
            title: "Readiness dashboard",
            why: "Built a dashboard to help users track deadlines, practice and action items in one place. This creates more structure, visibility and accountability throughout pageant prep."
          },
          {
            title: "Interview flashcards",
            why: "Designed flashcards that support interview practice while also teaching users a clear answer structure. This helps contestants build stronger, more confident responses."
          },
          {
            title: "Progress sharing",
            why: "Created a readiness profile that users can share with coaches for more continuous support. This makes feedback more personalized, timely, and connected to the user's real progress."
          },
          {
            title: "Brand, type and color",
            why: "TODO: Why teal and gold, and why a Manrope and Newsreader pairing, suit confident, polished prep."
          }
        ],
        images: [
          { src: "assets/img/crown-dashboard.png", fit: "phone", caption: "Readiness dashboard: readiness score, mastery streak and practice streak." },
          { src: "assets/img/crown-flashcards.png", fit: "phone", caption: "Flashcards: tap to reveal, with a clear answer structure." },
          { src: "assets/img/crown-share.png", fit: "phone", caption: "Share Your Journey: a readiness profile to share with coaches." }
        ],
        prototypeUrl: ""
      },

      outcome: {
        results: [
          { value: "7", label: "core features scoped" },
          { value: "10", label: "requirements defined" },
          { value: "2", label: "display modes: light and dark" },
          { value: "1", label: "place for all of pageant prep" }
        ],
        reflection: "TODO: What you learned about designing a focused, motivating prep tool, and what you'd do next (for example usability testing with contestants, or building the answer-feedback flow)."
      }
    },

    {
      id: "root-insurance",
      layout: "research",
      title: "Root Insurance",
      subtitle: "Retention research for 500,000+ policyholders",
      focus: "Retention research",
      approach: "Interviewed customers and stakeholders to find churn drivers, then turned them into 15 retention concepts",
      summary: "Improving retention for 500,000+ policyholders while empowering CS agents with the tools and insights to better support customers.",
      ballColor: "#ff7a45",
      year: "2026",
      tags: ["Mixed-methods", "Journey maps", "Retention"],
      role: "UX Research Intern",
      team: "Cross-functional stakeholders, including the Director of Design and SVP of Product",
      timeline: "Jun – Aug 2026",
      tools: "User Interviews, Lookback, Figma",
      hero: { src: "assets/img/root-ideas.jpg", caption: "Every idea from the brainstorms grouped into themed clusters, then sized as pebbles, rocks, and boulders so we could weigh effort against impact before choosing directions." },

      problem: {
        statement: "Which customer-service moments, non-price benefits and retention levers do Root customers actually value, and how can Root use them to keep customers from leaving?",
        context: "Root's customer-service structure was exposed against nationwide market leaders, in an industry where operational consistency is the real advantage. Voice-of-customer data pointed to the same friction again and again: rigid automated loops, opaque billing messages, little flexibility in support (for example no partial payments), boilerplate explanations for rate increases and app login roadblocks. Each one could trigger a customer's decision to leave.",
        challenge: "Improve retention for 500,000+ policyholders while giving customer-service agents better tools and insights to support them, focusing on two customer groups: Stressful Survivors and Achievers in Control.",
        role: "UX Research Intern. I wrote the research plan and led the CS and retention work: planning, moderating customer interviews, synthesizing findings and presenting readouts, in partnership with a product design intern."
      },
      objectives: {
        summary: "The objective: identify exactly which customer-service touchpoints, non-price benefits and retention levers Root customers value and desire, and use foundational discovery interviews to deliver actionable UX recommendations.",
        items: [
          "Which customer-service touchpoints do customers value, and where does service break down?",
          "Which non-price benefits matter to customers beyond price?",
          "Which retention levers could frontline agents use as proactive \"save\" moves for customers about to leave?",
          "How do we un-break the digital self-service experience?"
        ]
      },
      methods: {
        summary: "A mixed-methods plan across 18 sessions: desk research and stakeholder interviews first, then live customer interviews and concept testing.",
        items: [
          { name: "Desk research", detail: "Audited the support approaches of top carriers and Root's own voice-of-customer data, plus cancellation, retention and rate-shock data by customer segment." },
          { name: "Competitor benchmarking", detail: "Collected screenshots of competitor experiences, grouped under one question: what does it mean to be a member beyond just pricing?" },
          { name: "Stakeholder interviews", detail: "12 interviews with internal stakeholders, more than double the four we first planned, to get deeper cross-functional alignment." },
          { name: "Customer interviews", detail: "6 live, moderated interviews with competitor policyholders on Lookback, after a pilot session." },
          { name: "Concept testing", detail: "Tested early concepts in those interviews, using stimuli and a moderator guide built with the design intern." },
          { name: "Scoping the plan", detail: "Brainstormed ideas, sized them as pebbles, rocks and boulders, and plotted them by how sure we were of the solution and of its value to customers. The most uncertain, highest-value quadrant set the scope." }
        ],
        image: [
          { src: "assets/img/root-benchmark.jpg", caption: "Screenshots from competitor experiences, grouped under the question \"What does it mean to be a member beyond just pricing?\"" },
          { src: "assets/img/root-data.jpg", caption: "Quantitative data reviewed alongside the interviews: cancellations, 30-day retention, rate changes and rate shock by customer segment." },
          { src: "assets/img/root-stakeholder-notes.jpg", caption: "Notes from every stakeholder conversation organized per person, then read across columns to surface the general patterns and hypotheses shared between teams." },
          { src: "assets/img/root-ideas.jpg", caption: "Every idea from the brainstorms grouped into themed clusters, then sized as pebbles, rocks, and boulders so we could weigh effort against impact before choosing directions." },
          { src: "assets/img/root-prioritization.jpg", caption: "Ideas plotted against how sure we were of the solution and of its value to customers. The most uncertain, highest-value quadrant became the scope of the research plan." }
        ]
      },
      findings: {
        summary: "Every interview went into one shared matrix, one column per participant, so patterns could be read across the group instead of living in individual sessions. A poster journey map then followed an auto policyholder from first bind through cancellation, showing where emotions dip.",
        items: [
          "Price came up first: \"I'm more loyal to pricing than anything.\"",
          "Participants liked rewards tied to how long they had stayed, and one wouldn't leave a reputable brand for a small saving.",
          "One participant liked seeing discounts broken out, and disliked a competitor's list that didn't show the breakdown.",
          "Reactions to driving tracking were mixed: some liked earning more for driving well, others were wary of being watched.",
          "Service moments stood out, such as a free ride after an accident and attentive agents."
        ],
        image: [
          { src: "assets/img/root-interview-notes.jpg", caption: "Every interview transcribed into a shared matrix (participants anonymized): one column per participant, rows for pain points, behaviors, quotes and concept reactions, so patterns read across the group instead of living in individual sessions." },
          { src: "assets/img/root-journey-map.jpg", caption: "The Root auto policyholder post-bind experience as a single poster map: stages, actions and the emotional curve across first bind, first drive, the 30-day grace period, payments, claims, renewal and cancellation." }
        ]
      },
      insights: {
        summary: "Two customer groups guided the reading of the data. Stressful Survivors need support and flexibility when money or life gets hard. Achievers in Control value transparency and want to see the math behind their price. Across both, the patterns pointed away from price alone. We turned them into how-might-we questions under five themes: Balancing Value and Communication, Tailoring and Personalization, Timing and Contextual Messaging, Simplifying the Complex, and Community and Social Proof.",
        lists: [
          {
            heading: "Patterns and what they mean",
            items: [
              "Loyalty isn't only price. Customers stay when they feel recognized and when service is attentive, so retention levers can go beyond a lower rate.",
              "Transparency is a retention lever. Showing the math behind a price or a discount builds trust, especially for Achievers in Control.",
              "Care that arrives before the customer asks is remembered. Proactive help around an accident or a renewal says the company is on their side.",
              "Rewards have to feel earned, and tracking needs care. Tenure and good-driving rewards landed, but some customers disliked being watched."
            ]
          },
          {
            heading: "How-might-we questions we prioritized for design",
            items: [
              "How might we gamify the customer experience so that discovering new benefits feels like a reward in itself?",
              "How might we allow customers to curate their own benefit packages, so they inherently understand the value of what they chose?",
              "How might we create an annual \"Year in Review\" that quantifies and visualizes all the benefits a customer used?",
              "How might we visually map out the whole benefit ecosystem so a customer can grasp the full scope of value in under 10 seconds?"
            ]
          }
        ],
        image: [{ src: "assets/img/root-coding.jpg", caption: "Coding the research into themes, then turning each theme into how-might-we questions." }]
      },
      recommendations: {
        summary: "The research shaped the concepts the design partner built. Here is what we heard and the concept it became, then the five concepts from the final shareout.",
        map: {
          heading: "From research to design",
          rows: [
            { tag: "Gamified Tenure Rewards", need: "Participants responded to rewards that grow with how long they stay, and wanted proof they're actually saving money.", design: "A rewards screen with years with Root, total savings and perks that unlock at each milestone.", where: "Interviews" },
            { tag: "Drive for Rewards", need: "Customers liked earning more the better they do, but some were wary of being tracked.", design: "A driving-score reward system where benefits are earned by driving well, with a score customers can see and retake.", where: "Interviews" },
            { tag: "Sympathetic Proactive Communication", need: "Customers noticed when the company showed it cared, and wanted help before they had to ask.", design: "Birthday and renewal gifts, plus gentle payment reminders and one-time passes, that show sympathy through benefits.", where: "Interviews, CS data" },
            { tag: "Discount Opportunities", need: "Customers wanted to see exactly which discounts they have and how much each saves, without doing the math.", design: "A renewal screen that lists every discount (applied, not applied, expired) with total savings.", where: "Interviews" },
            { tag: "Updated Email Comms", need: "Rate-increase and billing messages felt generic and opaque, a pain point in the voice-of-customer data.", design: "Reworded renewal and payment emails that explain why the price changed and point to ways to save.", where: "Voice of customer" }
          ]
        },
        designs: [
          { label: "Gamified Tenure Rewards", images: [{ src: "assets/img/root-concept-tenure.png", fit: "full", caption: "Provide customers with discounts and rewards based off their tenure." }] },
          { label: "Drive for Rewards", images: [{ src: "assets/img/root-concept-drive.png", fit: "full", caption: "A driving score based reward system where customers can gain benefits based on their driving." }] },
          { label: "Sympathetic Proactive Communication", images: [{ src: "assets/img/root-concept-sympathy.png", fit: "full", caption: "Make customers feel valued by showing sympathy through benefits and rewards." }] },
          { label: "Discount Opportunities", images: [{ src: "assets/img/root-concept-discounts.png", fit: "full", caption: "Provide customers with opportunities to lower their rate by showcasing the different discounts that are available." }] },
          { label: "Updated Email Comms", images: [{ src: "assets/img/root-concept-email.png", fit: "full", caption: "Rewording existing email communications to make them more personable and friendly." }] }
        ]
      },
      impact: {
        decisionsHeading: "Where the research reached the business",
        decisions: [
          { title: "Mid-point stakeholder readout", why: "Partnered with the product design intern on a readout for stakeholders, including the Director of Product Design. I opened by synthesizing additional findings and key metrics, and the intern turned them into high-fidelity charts and a concept matrix, giving a data-driven view before customer interviews began." },
          { title: "Updated frontline CS scripts", why: "Worked with the Customer Service team to turn research findings into immediate operational improvements, by updating the scripts agents use today." },
          { title: "Scope pivot: from static maps to a living tool", why: "The first scope included a static journey map and a sitemap. After stakeholder interviews and talks with leadership, it was clear a production-ready version needed more time than the internship allowed, so we delivered a high-fidelity first draft as a foundation. Stakeholders pointed out that static maps go stale almost as soon as they ship, which started an initiative for a dynamic internal tool for end-to-end visibility into the customer experience." },
          { title: "Made research visible", why: "After feedback about broader team engagement, I published 7 insights posts in the team's research Slack channel, on top of the required weekly update." },
          { title: "\"New to Root Research\" onboarding playbook", why: "Co-developed with a teammate so future researchers don't have to rebuild critical context from scattered conversations, Slack history and repository searches. It covers Root and auto-insurance context; key research partners and communication channels; standard operating procedures from intake and planning through evidence handling, analysis, review and handoff; the Voice of the Customer program; a worked NPS example that keeps small samples visible; the customer quote library and retention context; Slack directories and knowledge repositories; and a governed workflow for applying AI research skills to a new dataset." }
        ],
        results: [
          { value: "18", label: "research sessions" },
          { value: "3", label: "executive readouts" },
          { value: "15", label: "net-new retention concepts" },
          { value: "7", label: "insights posts shared" }
        ],
        reflection: "All of the project's goals were met. If I did it again, I'd plan for the unexpected in live fielding. During an outage I kept the session going by moving from Lookback to Google Meet, but I'd rather not depend on a fast fix. Next time I'd set up a Plan B in advance, with backup video links already in the calendar invites and a second recording tool running locally. I'm also keen to track the long-term impact of the CS script updates."
      }
    },

    {
      id: "cancer-nutrition-app",
      title: "AI-Powered Cancer Nutrition App",
      subtitle: "Meal planning for cancer patients",
      focus: "Health UX design",
      approach: "Surveyed 50 caregivers and patients, then designed AI tools for safer, easier meals",
      summary: "Empowering caregivers and cancer patients with compassionate, AI-driven nutrition and treatment-based tools.",
      ballColor: "#ffb020",
      year: "2025",
      tags: ["Healthcare", "Surveys", "Personas", "AI"],
      role: "UX Designer & Researcher",
      team: "Analysts, information architects and product managers",
      timeline: "Aug – Nov 2025",
      tools: "Surveys, interviews, personas, journey mapping, RICE prioritization, wireframes, prototypes",
      hero: { src: "assets/img/nutrition-app-home.png", fit: "phone", caption: "The app's home screen: a warm welcome, a daily tip, and one-tap access to nutrition support." },

      problem: {
        statement:
          "Caregivers and cancer patients often lack access to a specialized nutrition support system that provides personalized AI-driven guidance, community-driven meal planning, and professional 24/7 oncology support.",
        context:
          "Fragmented resources force families to navigate conflicting advice, unsafe food choices, and exhausting meal preparation without clear guidance. Caregivers, already under emotional and logistical strain, struggle to provide safe meals, while patients face serious risks from mismanaged nutrition, including medication interactions and hospital readmissions.",
        goal:
          "Design a compassionate, cancer-focused nutrition platform that lightens the daily burden: safe and personalized, supported by community, and available at any hour. TODO: add one line on your own contribution (e.g. which parts of the research and design you led)."
      },

      research: {
        summary:
          "Our first step was an online survey, distributed across several relevant communities. Within a few days we had 50 responses, and they helped us pinpoint five main pain points that guided every step after.",
        methods: [
          {
            name: "Mixed-methods survey (50 responses)",
            detail: "Open-ended questions, multiple-choice items, and ordinal scale prompts, capturing both quantitative patterns (like how often caregivers feel stressed, and their confidence levels) and qualitative stories about nutrition challenges, emotional strain and unmet needs."
          },
          {
            name: "Customer journey mapping",
            detail: "Five caregiving stages (Aware, Search, Plan & Prep, Check & Verify, Eat & Reflect) to surface emotional and logistical pain points and find opportunities to improve trust, usability and long-term engagement."
          },
          {
            name: "User interviews",
            detail: "TODO: how many people you spoke with, who they were, and what you asked (your resume lists interviews for this project)."
          },
          {
            name: "Usability testing",
            detail: "TODO: how many participants, what you tested (low-fi or high-fi), and the main finding."
          }
        ],
        insights: [
          "88% of caregivers report moderate to severe exhaustion.",
          "56% of cancer patients feel confused about the conflicting nutrition information they're given.",
          "44% of caregivers report a high level of stress due to unmet needs."
        ],
        image: [
          { src: "assets/img/nutrition-survey.png", caption: "The Cancer Care Planning Survey, run as a University of Michigan research study." },
          { src: "assets/img/nutrition-quotes.png", caption: "In their words: pain points from caregivers and cancer patients." }
        ]
      },

      define: {
        persona:
          "Daniel Morris, The Caregiver: 45, married with three kids, a tax manager in Detroit, MI. He worries about what food to cook for his dad (the patient) given his medication needs, and he's exhausted from balancing caregiving, work and family. His wishlist: a centralized dashboard, AI-powered assistance, cancer-specific resources, and simple communication tools.",
        journey:
          "Mapping the journey showed where it breaks: conflicting nutrition advice and unclear first steps (Aware); fear of choosing unsafe foods (Search); the daily burden of meal prep with limited help (Plan & Prep); no simple, reliable way to check food against medications (Check & Verify); and no one to ask at odd hours, leaving emotional and decision fatigue.",
        painPointsHeading: "Five common pain points from the survey",
        painPoints: [
          "Nutrition confusion and safety risks: caregivers and patients struggled with conflicting information and unsafe food choices.",
          "Emotional exhaustion and lack of personal time: caregivers felt isolated and overwhelmed.",
          "Meal preparation burden: daily cooking and diet restrictions were mentally and physically draining.",
          "Financial strain: the costs of care and meal planning added stress.",
          "Need for clearer communication from healthcare providers: caregivers wanted upfront, practical guidance."
        ],
        image: [
          { src: "assets/img/nutrition-persona.png", caption: "Primary persona: Daniel, the caregiver." },
          { src: "assets/img/nutrition-journey-map.png", caption: "Cancer patient and caregiver journey map across five stages: goals, emotions, pain points and opportunities." }
        ]
      },

      ideate: {
        summary:
          "Persona hypotheses, interview questions and problem statements went onto a shared team board, along with candidate features that we scored with RICE (Reach, Impact, Confidence, Effort). The journey map's opportunities fed that list: personalized onboarding, an AI grocery list builder, a community meal train, meal delivery integrations, a food scanner with medication-compatibility checks, and a 24/7 AI assistant with oncology dietitian access. TODO: add two lines on how the team narrowed to the final feature set, and which idea you advocated for.",
        image: [
          { src: "assets/img/nutrition-board.jpg", caption: "Ideation and RICE prioritization board." },
          { src: "assets/img/nutrition-sketches.jpg", caption: "Early sketches." }
        ]
      },

      iterations: [
        {
          version: "Round 1 — Sketches & low-fidelity",
          change: "TODO: What the first sketches or wireframes explored (for example the home screen, the nutrition hub, or the scanner).",
          feedback: "TODO: What testing or critique showed (for example which screens confused people), and what you changed.",
          image: { src: "assets/img/nutrition-lowfi.jpg", caption: "Low-fidelity wireframes." }
        },
        {
          version: "Round 2 — High-fidelity wireframes",
          change: "Six core screens (Home, Nutrition Support, AI Grocery List Builder, AI Assistant, Partner Meal Delivery and Meal Train), tied together by a persistent bottom navigation: Home, Nutrition, Scanner, Dietitian, Profile.",
          feedback: "TODO: What usability testing showed on the high-fidelity version, and the final changes it led to.",
          image: { src: "assets/img/nutrition-wireframes.jpg", caption: "The six high-fidelity screens." }
        }
      ],

      execution: {
        summary:
          "A compassionate platform designed to lighten the daily burdens faced by cancer patients and caregivers through smart, cancer-focused nutrition tools, built around features that matter in moments of vulnerability. Each feature answers a specific pain point from the journey map.",
        decisions: [
          {
            title: "AI Grocery List Builder",
            why: "Provides personalized, safe shopping lists that adapt to individual treatment needs. Diagnosis and treatment type are optional, and symptoms like nausea or loss of appetite are one-tap choices, so a tired caregiver isn't typing. It answers the Search-stage fear of choosing unsafe foods."
          },
          {
            title: "Community Meal Train",
            why: "Lets families and friends coordinate meal support, with dietary notes, allergies and diagnosis kept in one place. It turns concern into meaningful action so no one feels alone, and eases the Plan & Prep burden and caregiver burnout."
          },
          {
            title: "Meal Delivery Partnerships",
            why: "Gives access to nutritious, cancer-friendly meals delivered to the door. Filters such as Low Sodium and High Protein, plus an AI recommendation based on medications and treatment plan, reduce meal-prep stress during difficult times."
          },
          {
            title: "AI Food Scanner",
            why: "Checks food and medication compatibility in seconds, so users can make safer choices and discover healthier options without anxiety. It addresses the Check & Verify gap: no simple, reliable point of truth."
          },
          {
            title: "24/7 AI Assistant and dietitian access",
            why: "Quick-question shortcuts and a path to an oncology dietitian mean expert advice is always within reach, at any hour, providing both reassurance and evidence-based support. It answers 'no one is available at odd hours'."
          },
          {
            title: "A calm, warm visual language",
            why: "TODO: Explain the choice of soft sage greens, warm cream and coral accents, and generous spacing, and why they suit people who are stressed and tired."
          }
        ],
        images: [{ src: "assets/img/nutrition-wireframes.jpg", caption: "The final high-fidelity screens." }],
        prototypeUrl: ""
      },

      outcome: {
        results: [
          { value: "50", label: "survey responses in a few days" },
          { value: "88%", label: "of caregivers report moderate to severe exhaustion" },
          { value: "5", label: "journey stages mapped" },
          { value: "5", label: "core features, each tied to a pain point" }
        ],
        reflection: "TODO: What you learned about designing for health contexts, and what you'd do next (for example, testing with real caregivers or validating the food scanner's safety rules with dietitians)."
      }
    },

    {
      id: "usda-acir",
      layout: "research",
      title: "USDA ACIR Portal",
      subtitle: "Search, navigation & mobile usability",
      focus: "Usability research",
      approach: "Ran usability tests and interviews to find where search, navigation and mobile use break down",
      summary: "Helping 360,000+ USDA ACIR users navigate complex agricultural import requirements with greater speed, clarity, and confidence.",
      ballColor: "#ff2fb4",
      year: "2026",
      tags: ["Usability testing", "Interviews", "Surveys"],
      role: "UX Researcher",
      team: "4 USDA stakeholders, weekly check-ins",
      timeline: "Jan – Apr 2026",
      tools: "Usability studies, interviews, surveys",
      hero: { src: "", caption: "TODO: Hero image — portal screens or research artifact" },

      problem: {
        statement: "How can importers, brokers, and government officials find, and feel confident interpreting, what they need in USDA's ACIR portal?",
        context: "ACIR serves 360,000+ users working through complex agricultural import requirements. I worked weekly with 4 USDA stakeholders to uncover usability pain points in navigation, search filters, and help resources, with a focus on search functionality and the mobile experience.",
        challenge: "Where do search, navigation and help resources break down for each group, and what would improve findability and interpretive confidence?",
        role: "UX Researcher. I led usability testing, conducted the interviews, and designed and deployed the surveys. TODO: add one line on what you presented or recommended."
      },
      objectives: {
        summary: "The goals were to find where the portal's search, navigation and help content get in people's way, and to recommend changes that improve speed, clarity and confidence.",
        items: [
          "Where do search and filters fail importers, brokers and government officials?",
          "How well can users find the information they need, and how confident are they interpreting it?",
          "What does the mobile experience get wrong?",
          "Which help resources are missing or hard to find?"
        ]
      },
      methods: {
        summary: "A mixed-methods study that combined testing, interviews and surveys across three user groups, with weekly check-ins with stakeholders.",
        items: [
          { name: "Usability testing", detail: "Led sessions with 10+ employees nationwide to identify interaction challenges and workflow inefficiencies." },
          { name: "User interviews", detail: "15+ importers, brokers, and government officials evaluating search functionality and the mobile experience." },
          { name: "Surveys", detail: "Designed and deployed surveys to assess findability and interpretive confidence across users." },
          { name: "Stakeholder check-ins", detail: "Weekly with 4 USDA stakeholders on navigation, search filters, and help resources." }
        ]
      },
      findings: {
        summary: "TODO: What you observed across the testing, interviews and surveys, with a quote or number for each finding.",
        items: [
          "TODO: Finding #1, with the evidence behind it (a quote, a task success rate, a survey result).",
          "TODO: Finding #2",
          "TODO: Finding #3"
        ],
        image: [{ src: "", caption: "TODO: Affinity map, findings summary or survey chart" }]
      },
      insights: {
        summary: "TODO: The patterns across groups, and what they mean for the portal.",
        lists: [{ heading: "Patterns and what they mean", items: ["TODO: Insight #1", "TODO: Insight #2", "TODO: Insight #3"] }]
      },
      recommendations: {
        summary: "TODO: The changes you recommended for search filters, navigation and help content, and how you prioritized them.",
        map: {
          heading: "From research to recommendation",
          rows: [
            { tag: "Search", need: "TODO: What users struggled with", design: "TODO: What you recommended", where: "Usability tests" },
            { tag: "Navigation", need: "TODO: What users struggled with", design: "TODO: What you recommended", where: "Interviews" },
            { tag: "Help resources", need: "TODO: What users struggled with", design: "TODO: What you recommended", where: "Surveys" }
          ]
        }
      },
      impact: {
        decisions: [],
        results: [
          { value: "10+", label: "employees in usability tests" },
          { value: "15+", label: "stakeholder interviews" },
          { value: "360,000+", label: "ACIR users the portal serves" }
        ],
        reflection: "TODO: What the research changed, what you learned, and what you'd do next."
      }
    },

    {
      id: "instructure-elevated",
      layout: "research",
      title: "Instructure ElevateED",
      subtitle: "Exploring AI in education",
      focus: "Strategy research",
      approach: "Interviewed stakeholders and synthesized access barriers to make the case for an AI-powered learning initiative",
      summary: "Research that built the case for an AI-powered initiative advancing inclusive, alternative education pathways.",
      ballColor: "#27d9f5",
      year: "2025",
      tags: ["Stakeholder interviews", "Affinity mapping", "Wireframes"],
      role: "UX Researcher",
      team: "Researchers, designers and organization stakeholders",
      timeline: "Aug – Dec 2025",
      tools: "Interviews, affinity walls, prototypes, high-fidelity wireframes",
      hero: { src: "", caption: "TODO: Hero image — ElevateED wireframes" },

      problem: {
        statement: "Non-traditional learners face barriers in access, credentialing and experience, and Instructure needed evidence to expand into inclusive, alternative education pathways.",
        context: "The EdTech landscape is evolving quickly. UX research was used to build the case for ElevateED, a strategic AI-powered initiative for Instructure.",
        challenge: "Identify the barriers non-traditional learners face and turn them into design recommendations aligned with Instructure's long-term strategy.",
        role: "UX Researcher. I conducted stakeholder interviews, analyzed needs, synthesized the qualitative data, and presented the final deliverables. TODO: add one line on what you led."
      },
      objectives: {
        summary: "The research needed to build a case for ElevateED by showing where learners get stuck and what a better pathway could look like.",
        items: [
          "What barriers do non-traditional learners face in access, credentialing and experience?",
          "What do stakeholders need from an inclusive, alternative education pathway?",
          "How can the findings be turned into recommendations that fit Instructure's long-term strategy?"
        ]
      },
      methods: {
        summary: "Stakeholder interviews and qualitative synthesis, built up with a cross-functional team of researchers, designers and organization stakeholders.",
        items: [
          { name: "Stakeholder interviews", detail: "Conducted interviews and analyzed needs across the organization." },
          { name: "Qualitative synthesis", detail: "Synthesized the data to identify barriers in access, credentialing, and user experience for non-traditional learners." },
          { name: "Affinity walls", detail: "Built with researchers, designers and stakeholders to surface patterns." }
        ],
        image: [{ src: "", caption: "TODO: Affinity wall" }]
      },
      findings: {
        summary: "TODO: What you observed, with the evidence for each finding.",
        items: ["TODO: Finding #1", "TODO: Finding #2", "TODO: Finding #3"],
        image: [{ src: "", caption: "TODO: Findings summary or learner journey" }]
      },
      insights: {
        summary: "TODO: The patterns across the barriers, and what they mean for the initiative.",
        lists: [{ heading: "Patterns and what they mean", items: ["TODO: Insight #1", "TODO: Insight #2"] }]
      },
      recommendations: {
        summary: "Prototypes and actionable design recommendations, developed with researchers, designers and organization stakeholders, then presented as high-fidelity wireframes to drive alignment with Instructure's long-term strategic goals.",
        designs: [{ label: "High-fidelity wireframes", images: [{ src: "", caption: "TODO: High-fidelity wireframes" }] }]
      },
      impact: {
        decisionsHeading: "Where the research reached people",
        decisions: [
          { title: "Presented to stakeholders", why: "Presented final deliverables, including high-fidelity wireframes, to all stakeholders to drive alignment with Instructure's long-term strategic goals amid a fast-changing EdTech landscape." },
          { title: "Shared with 200+ people", why: "The recommendations were presented to over 200 students and corporate employees." }
        ],
        results: [
          { value: "200+", label: "students and employees presented to" },
          { value: "Hi-fi", label: "wireframes delivered" }
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
