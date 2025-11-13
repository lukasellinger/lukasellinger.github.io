// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research-topics",
          title: "Research Topics",
          description: "This page presents the research topics I am currently working on and interested in supervising. If you are looking for a Master’s Thesis or Guided Research project, please mention which of the topics below you would like to work on when contacting me.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research-topics/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-adapting-to-the-user-s-writing-style",
          title: 'Adapting to the User’s Writing Style',
          description: "How LLMs align with personal writing distributions without finetuning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/adapting-writing-style/";
            },},{id: "projects-context-clashes",
          title: 'Context Clashes',
          description: "How phrasing and formatting unintentionally shift LLM behavior",
          section: "Projects",handler: () => {
              window.location.href = "/projects/context-clash/";
            },},{id: "projects-granularity-amp-uncertainty-in-llm-responses",
          title: 'Granularity &amp;amp; Uncertainty in LLM Responses',
          description: "How LLMs express, manage, and adapt to uncertainty",
          section: "Projects",handler: () => {
              window.location.href = "/projects/granularity_and_uncertainty_responses/";
            },},{id: "projects-what-could-this-message-mean",
          title: 'What Could This Message Mean?',
          description: "LLMs as external observers generating plausible interpretations of text",
          section: "Projects",handler: () => {
              window.location.href = "/projects/what-could-this-text-mean/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%75%6B%61%73.%65%6C%6C%69%6E%67%65%72@%74%75%6D.%64%65", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/lukas-ellinger", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=EVkusWUAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
