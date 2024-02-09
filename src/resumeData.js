let resumeData = {
  name: 'Piyush Raj',
  role: 'Software Engineer',
  linkedinId: 'https://www.linkedin.com/in/piyush-raj-1272b320b/',
  skypeid: 'live:piyush',
  roleDescription:
  "I am a final year undergraduate currently pursuing a B.Tech in Electrical Engineering from IIT(ISM) Dhanbad. I aspire to become a Software Engineer. My hobbies include playing chess and badminton, as well as engaging in competitive coding in my free time.",
  socialLinks: [
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/piyush-raj-1272b320b/',
      className: 'fa fa-linkedin',
    },
    {
      name: 'github',
      url: 'https://github.com/razzPiyush',
      className: 'fa fa-github',
    },
    {
      name: 'facebook',
      url: 'https://www.facebook.com/profile.php?id=100009064647138',
      className: 'fa fa-facebook',
    },
    {
      name: 'mail',
      url: 'mailto:piyushrazz0019@gmail.com',
      className: 'fa fa-envelope',
    },
    {
      name: 'instagram',
      url: 'https://www.instagram.com/raz.piyush/',
      className: 'fa fa-instagram',
    }
  ],
  aboutme:
  "I am a final year undergraduate currently pursuing a B.Tech in Electrical Engineering from IIT(ISM) Dhanbad. I aspire to become a Software Engineer. My hobbies include playing chess and badminton, as well as engaging in competitive coding in my free time.",
  address: 'India',
  website: 'https://github.com/razzPiyush',
  education: [
    {
      UniversityName: 'Indian Institute of Technology (ISM) Dhanbad',
      specialization: 'B.Tech in Electrical Engineering',
      duration: 'Nov 2020 - May 2024',
      //Achievements: 'CGPA - 7.14',
    },
    {
      UniversityName: 'R.P.S Public School',
      specialization: 'Science(PCM)',
      duration: 'April 2019 - May 2020',
      Achievements: 'Scored 90.40%',
    },
  ],
  work: [   
    {
      companyName: 'Samsung Research Institute Bangalore',
      position: 'Software Engineer Intern',
      duration: 'June 2023 - Aug 2023',
      desc:
        'Worked on addressing data transfer issues from User Equipment (UE) to eNodeB/gNodeB in Beyond 5G team.',
      companyLink: 'https://research.samsung.com/sri-b',
    },    
  ],
  skillsDescription: 'Your skills here',
  skills: [
    {
      category: 'Programming Languages',
      list: [
        {
          img: './images/c.png',
          name: 'C',
        },
        {
          img: './images/cpp.png',
          name: 'C++',
        },
        {
          img:
            './images/javascript-icon-png-23.jpg',
          name: 'JavaScript',
        },
        {
          img: './images/python.png',
          name: 'Python',
        },
        // {
        //   img: '/images/java.png',
        //   name: 'Java',
        // },                
        // {
        //   img: '/images/ts.png',
        //   name: 'Typescript',
        // }
      ],
    },
    {
      category: 'Databases',
      list: [
        {
          img: './images/mongo.png',
          name: 'mongoDB',
        },
        {
          img: './images/mysql.png',
          name: 'MYSQL',
        },
      ],
    },
    {
      category: 'Web Development',
      list: [
        {
          img: './images/react.png',
          name: 'React',
        },
        {
          img:
            'http://pluspng.com/img-png/nodejs-logo-png-nice-images-collection-node-js-desktop-wallpapers-370.png',
          name: 'Node.js',
        },
        // {
        //   img: '/images/react-native.png',
        //   name: 'React_Native',
        // },
        // {
        //   img: '/images/flask.png',
        //   name: 'Flask',
        // },
        {
          img: './images/bootstrap.png',
          name: 'Bootstrap',
        },
        // {
        //   img: '/images/NET_Core_Logo.svg.png',
        //   name: '.NET Core'
        // },
        // {
        //   img: '/images/jquery.png',
        //   name: 'JQuery',
        // },
        {
          img:
            './images/html-5-logo-png-transparent.png',
          name: 'HTML',
        },
        {
          img: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg',
          name: 'CSS',
        }
      ],
    },
    // {
    //   category: 'Programming Handle',
    //   list: [
    //     {
    //       img: '/images/cf.png',
    //       name: 'PyTorch',
    //     },
    //     {
    //       img: '/images/keras.png',
    //       name: 'Keras',
    //     },
    //   ],
    // },
    {
      category: 'Others',
      list: [
        // {
        //   img: '/images/docker.png',
        //   name: 'Docker',
        // },        
        {
          img: './images/git.png',
          name: 'Git',
        },
        {
          img: './images/postman.svg',
          name: 'Postman',
        },
      ],
    },
  ],
  portfolio: [
    {
      title: 'Shooting circle',
      intro:
        "A shooting game application in which user must hit the target and maximize their score. ",
      des:
        ' ',
      points: [
        'Created a web game allowing users to earn points by hitting targets with projectiles.',
        'The game concludes if any target successfully hits the user.',
        'Employed Object-Oriented Programming, creating classes like Player, Projectile, Enemy, and Particle.',
      ],
      imgurl: './images/portfolio/shooting_circle.jpg',
      techstack: ['HTML', 'CSS','JavaScript', 'Canvas', 'OOPs'],
      links: {
        launch: 'https://razzpiyush.github.io/JS-Canvas-Game',
        github: 'https://github.com/razzPiyush/JS-Canvas-Game',
      },
    },
    {
      title: 'RJ Blogs',
      intro:
        "A blog application in which users can add their blogs and specific users which are currently logged in can edit and delete their blogs as well.",
      des:
        'Developed a blog application using the MERN stack.',
      points: [
        'Implemented secure login/signup functionality to ensure user authentication.',
        'Implemented CRUD operations for user-controlled blog creation, editing, and deletion.',    
        'Users could seamlessly explore and view blogs authored by others in a user-friendly interface.',
        'Implemented auto-login for users with stored credentials by checking local storage for user ID.',
      ],
      imgurl: './images/portfolio/rj_blogs.jpg',
      techstack: ['React.js', 'Bootstrap', 'Node.js', 'Express.js', 'MongoDB'],
      links: {
        launch: 'https://raj-blogs-frontend.vercel.app/',
        github: 'https://github.com/razzPiyush/Raj-blogs',
      },
    },
    {
      title: 'Manthan',
      intro:
        'A Web Application which facilitates the users to listen songs.  ',
      points: [
       'A Web Application which facilitates the users to listen songs.',
      ],
      imgurl: './images/portfolio/manthan.PNG',
      techstack: ['HTML', 'CSS', 'JavaScript'],
      links: {
        launch: 'https://razzpiyush.github.io/MusicWebsite/',
        github: 'https://github.com/razzPiyush/MusicWebsite',
      },
    }, 
    // {
    //   title: 'Covid Vaccine Distribution System',
    //   intro:
    //     'Prioritized vaccine delivery using AI/ML and developed a web interface for the entire distribution system. This was recognized as best project idea in Hackfest 2021, by PhonePe.',
    //   des: 'It has the following features : ',
    //   points: [
    //     'Allows a user to find the nearest vaccination center from his location.',
    //     'Uses medical, demographic and socio-economic Covid data to cluster similar regions in India.',
    //     'Uses regression models on local medical data to allot a fatality score to each registered individual based on which vaccines would be distributed.',
    //     'Vaccination centers send schedules to the users based on priority score and stock of vaccines.',
    //     "A Covid chatbot that provides the accurate information regarding Covid, from trusted sources.",
    //   ],
    //   imgurl: '/images/portfolio/covid-vaccine.jpeg',
    //   techstack: ['Flask', 'React', 'PostgreSQL', 'React', 'PyTorch'],
    //   links: {
    //     launch: 'https://youtu.be/z92IZQF5epA',
    //     github: 'https://github.com/NBNARADHYA/hackfest-2021',
    //   },
    // },           
    // {
    //   title: 'Click ISM',
    //   intro:
    //     "A campus portal that provides a Market Hub with some unique features of 'unrestricted bidding' and 'product verification'.",
    //   des:
    //     'It is a buying and selling website where students can sell used items, to other students. It has the following features : ',
    //   points: [
    //     'Once a student uploads a product, the admin verifies that it is not a fake product. And if the verification is successful, then only the product is visible publicly.',
    //     ' Students can also allow bidding on their products to earn maximum profit.',
    //     'Students can place a bid on these products, so that the owner gets to know the details of the ones interested in buying his product and he can contact them.',
    //     ' For the contact details, the user can set what contact details (like mobile no., email, room no.) should be kept confidential in edit profile option.',
    //   ],
    //   imgurl: '/images/portfolio/Click_ism.jpg',
    //   techstack: ['Node.js', 'React', 'AWS S3', 'mongoDB', 'Redux'],
    //   links: {
    //     launch: 'https://click-ism.herokuapp.com/',
    //     github: 'https://github.com/cjchirag7/click-ism',
    //   },
    // },
    // {
    //   title: 'Library Management App',
    //   intro:
    //     'A web app for the management of books, users, the issuing, returning and fine calculation for books in a library',
    //   des: 'The website has the following features : ',
    //   points: [
    //     'The admin can add new books, issue books to some existing users and mark return for their pre-issued books.',
    //     'The admin can also view the stats of library, such as total books present, books not returned yet, number of users, etc.',
    //     'The students can create their account, search for books, edit their profile and view their issue history.',
    //   ],
    //   imgurl: '/images/portfolio/lib_manage.jpg',
    //   techstack: ['Node.js', 'React', 'mongoDB', 'Express', 'Redux'],
    //   links: {
    //     launch: 'https://lib-manage.herokuapp.com/',
    //     github: 'https://github.com/cjchirag7/lib_management',
    //   },
    // },
    // {
    //   title: 'Video Streaming Web App',
    //   intro:
    //     'A progressive web app to serve as video streaming site for IIT (ISM). It has features to like, share, comment, suggest a video, submit feedback',
    //   des:
    //     'A website made using react to display the videos of all the cultural and technical fests of IIT (ISM). The data for videos is stored on a firebase DB. Users can sign in via Email, Facebook, GitHub, etc. and can like, comment, suggest a video and submit feedback.',
    //   imgurl: '/images/portfolio/ismvid.jpg',
    //   techstack: ['React', 'Firebase', 'Bootstrap'],
    //   links: {
    //     launch: 'https://ismvid-eeeee.firebaseapp.com/',
    //     github: 'https://github.com/cjchirag7/ismvid',
    //   },
    // },
    // {
    //   title: 'Quizzing Website',
    //   intro:
    //     'A quizzing website made in vanilla JS. The user gets to know the explanation of each answer that he made wrong, at the end.',
    //   des:
    //     'The user can either give a timed quiz or a timer-free quiz and select any of the available subjects. The user gets to know the correct answers and explanation of each question, at the end.',
    //   imgurl: '/images/portfolio/quiz.jpg',
    //   techstack: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    //   links: {
    //     launch: 'https://cjchirag7.github.io/quiz/',
    //     github: 'https://github.com/cjchirag7/quiz',
    //   },
    // },
    // {
    //   title: 'Chatroom Application',
    //   intro:
    //     'A multi-threaded client-server chat application written in C++ that uses sockets to communicate.',
    //   des: 'The app has the following features :',
    //   points: [
    //     'Users can send and receive messages simultaneously',
    //     'Multiple users can send messages simultaneously',
    //   ],
    //   imgurl: '/images/portfolio/chatroom.png',
    //   techstack: ['C++','Multi-threading','Sockets'],
    //   links: {
    //     launch: 'https://github.com/cjchirag7/chatroom-cpp/blob/main/screenshot.png',        
    //     github: 'https://github.com/cjchirag7/chatroom-cpp',
    //   },
    // },
    // // {
    // //   title: 'Brick Breaker Game',
    // //   intro:
    // //     'A simple brick breaker game using vanilla JS and canvas from HTML5',
    // //   des: 'Rules of the game :',
    // //   points: [
    // //     'There are 2 types of bricks - red brick breaks in 2 hits and blue brick breaks in a single hit.',
    // //     'The user has 3 lives.',
    // //     ' The score is calculated using the number of successful hits made by the user, before losing all his lives',
    // //   ],
    // //   imgurl: '/images/portfolio/brickgame.png',
    // //   techstack: ['JavaScript', 'HTML', 'CSS'],
    // //   links: {
    // //     launch: 'https://cjchirag7.github.io/break_the_brick/',
    // //     github: 'https://github.com/cjchirag7/break_the_brick',
    // //   },
    // // },
    // {
    //   title: 'IIT(ISM) Gymkhana website',
    //   intro:
    //     'Made a responsive website for the cultural clubs of IIT (ISM) Gymkhana.',
    //   des: 'The website is mading using HTML, CSS, Javascript and Bootstrap.',
    //   imgurl: '/images/portfolio/gymkhana.jpg',
    //   techstack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    //   links: {
    //     launch: 'https://cjchirag7.github.io/ismClubs/',
    //     github: 'https://github.com/cjchirag7/ismClubs',
    //   },
    // },
    // {
    //   title: 'My ML Library',
    //   intro:
    //     'Created my own library for various machine learning algorithms and compared its accuracy with Sci-kit Learn library',
    //   des: 'Contains modularised implementation of following algorithms: ',
    //   points: [
    //     'Linear Regression',
    //     'Logistic Regression',
    //     'Neural Networks Multi-Class Classifier (Multilayer)',
    //     'K-nearest neighbours',
    //     'K means Clustering',
    //     "Decision Trees (using 'gini')",
    //   ],
    //   imgurl: '/images/portfolio/ML_lib.png',
    //   techstack: ['Python', 'Numpy', 'MatPlotlib'],
    //   links: {
    //     launch: 'https://github.com/cjchirag7/My-ML-Library',
    //     github: 'https://github.com/cjchirag7/My-ML-Library',
    //   },
    // },
    // {
    //   title: 'Brain Opener',
    //   intro:
    //     'An educational portal software made using C++ using the concept of OOPs and file handling. It has a unique feature of creating the same difficulty level quiz consisting of random questions, each time.',
    //   des: 'The software has the following features :',
    //   points: [
    //     'There are 2 types of users - students and teachers',
    //     'Only authorised teachers can log in, create the study material and create or modify the question bank for quiz  (Data-security)',
    //     'Similarly, a student can also create an account, view the study material and take a quiz on whichever chapters he desires.',
    //     "A special feature of the quiz is that the teacher can mark the difficulty level of a question as 'Easy', 'Medium' and 'Difficult' so that all the students get the same level of questions, though the questions being randomly selected.",
    //   ],
    //   imgurl: '/images/portfolio/edu_portal.jpg',
    //   techstack: ['C++', 'OOPs'],
    //   links: {
    //     launch: 'https://youtu.be/NIOP4gkVPJQ',
    //     github: 'https://github.com/cjchirag7/EDUCATION-PORTAL',
    //   },
    // },
  ],
  // testimonials: [
  //   {
  //     description: 'This is a sample testimonial',
  //     name: 'Some technical guy',
  //   },
  //   {
  //     description: 'This is a sample testimonial',
  //     name: 'Some technical guy',
  //   },
  // ],
};

  export default resumeData