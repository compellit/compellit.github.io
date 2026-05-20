// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-people",
          title: "people",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-resources",
          title: "resources",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resources/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-the-compel-project-starts-today",
          title: 'The COMPEL project starts today',
          description: "",
          section: "News",},{id: "news-presentation-at-ai-and-complexity-round-table",
          title: 'Presentation at AI and complexity round table',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/ia-and-complexity-round-table/";
            },},{id: "news-poster-at-ii-clariah-gal-workshop",
          title: 'Poster at II CLARIAH-GAL Workshop',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/ii-clariah-gal-workshop/";
            },},{id: "news-presentation-at-msca-pf-information-session",
          title: 'Presentation at MSCA-PF information session',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/usc-msca-pf-training/";
            },},{id: "news-pauline-moreau-39-s-internship-starts",
          title: 'Pauline Moreau&amp;#39;s internship starts',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/internship-start-20250710/";
            },},{id: "news-galician-metrical-analyzer-online",
          title: 'Galician Metrical Analyzer online',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/galician-metrical-analyzer-online/";
            },},{id: "news-presentation-at-hdh-compartir-pantalla-series",
          title: 'Presentation at HDH Compartir Pantalla series',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/tutorial-hdh-llms/";
            },},{id: "news-popular-voices-computational-analysis-of-poetry-and-song",
          title: 'Popular Voices: Computational Analysis of Poetry and Song',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/volume-popular-voices/";
            },},{id: "news-anxo-alonso-joins-the-project",
          title: 'Anxo Alonso joins the project',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/new-collaborator-20260108/";
            },},{id: "news-automatic-scansion-paper-accepted-at-propor",
          title: 'Automatic scansion paper accepted at PROPOR',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/paper-accepted-PROPOR/";
            },},{id: "news-transformers-and-scansion-paper-at-llms4ssh-lrec",
          title: 'Transformers and scansion paper at LLMs4SSH @LREC',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/paper-accepted-llms4ssh-at-lrec/";
            },},{id: "news-talk-at-creativités-artificielles-approches-critiques-de-l-39-ia",
          title: 'Talk at Creativités Artificielles : Approches Critiques de l&amp;#39;IA',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/creativites-artificielles-participation/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},];
