window.siteData = {
  "site": {
    "name": "Abhinav Raundhal",
    "affiliation": "Cloudphysician · IIIT Hyderabad",
    "lastUpdated": "30 July 2026",
    "intro": [
      "I am a Computer Vision Engineer at Cloudphysician, where I develop computer vision models for real-time critical care applications. I graduated from IIIT Hyderabad, where I conducted research at the Center for Visual Information Technology (CVIT) and the Robotics Research Center (RRC).",
      "My research interests include computer vision, 3D vision, and robotics. My recent work spans 3D Gaussian Splatting, autonomous exploration and mapping, document understanding, and privacy-preserving 3D scene representations.",
      "Outside of work, I enjoy travelling, photography, painting, and exploring new places. Feel free to sneak into my <a href=\"gallery.html\">Gallery</a> to see some of my recent adventures and artwork!"
    ],
    "profileImage": "./assets/images/profile/profile.png",
    "socials": [
      {
        "label": "Google Scholar",
        "href": "https://scholar.google.com/citations?user=WYD70nAAAAAJ&hl=en&oi=sra",
        "icon": "fa-graduation-cap"
      },
      {
        "label": "Email",
        "href": "mailto:abhinavraundhal7704@gmail.com",
        "icon": "fa-envelope"
      },
      {
        "label": "GitHub",
        "href": "https://github.com/Abhinav7R",
        "icon": "fa-github"
      },
      {
        "label": "LinkedIn",
        "href": "https://www.linkedin.com/in/abhinav-raundhal/",
        "icon": "fa-linkedin-in"
      }
    ],
    "navigation": [
      { "label": "Home", "href": "index.html", "page": "home" },
      { "label": "Publications", "href": "research.html", "page": "research" },
      { "label": "Projects", "href": "projects.html", "page": "projects" },
      { "label": "Experience", "href": "experience.html", "page": "experience" },
      { "label": "Gallery", "href": "gallery.html", "page": "gallery" },
      { "label": "CV", "href": "cv.html", "page": "cv" }
    ]
  },
  "news": [
    {
      "date": "Jul 2026",
      "text": "🎓 Graduated from IIIT Hyderabad with BTech (Honours) in CSE."
    },
    {
      "date": "Jul 2026",
      "text": "🏆 Received Best All-Rounder Award at IIIT Hyderabad."
    },
    {
      "date": "Jun 2026",
      "text": "💻 Joined Cloudphysician as a Computer Vision Engineer."
    },
    {
      "date": "Jun 2026",
      "text": "🎉 Our paper \"Beyond Frontiers: Scene Anomaly Guided Autonomous Exploration\" was accepted to IROS 2026."
    },
    {
      "date": "Nov 2025",
      "text": "🎉 Our paper \"STRinGS: Selective Text Refinement in Gaussian Splatting\" was accepted to WACV 2026."
    },
    {
      "date": "Jan 2025",
      "text": "🤖 Joined the Robotics Research Center (RRC) as an Undergraduate Researcher."
    },
    {
      "date": "May 2024",
      "text": "💻 Joined the Center for Visual Information Technology (CVIT) as an Undergraduate Researcher."
    }
  ],
  "research": {
    "publications": [
      {
        "id": "strings",
        "title": "STRinGS: Selective Text Refinement in Gaussian Splatting",
        "conference": "WACV 2026",
        "authors": "Abhinav Raundhal*, Gaurav Behera*, P. J. Narayanan, Ravi Kiran Sarvadevabhatla, Makarand Tapaswi",
        "summary": "Developed a text-aware selective refinement framework that significantly improves fine-grained text reconstruction in 3DGS, achieving a 63.6% OCR-CER improvement over baseline methods.",
        "projectUrl": "https://strings-official.github.io/",
        "thumbnail": "./assets/images/publications/strings.png",
        "accent": "#6b96d8",
        "codeUrl": "https://github.com/strings-official/strings"
      },
      {
        "id": "beyondfrontiers",
        "title": "Beyond Frontiers: Scene-Anomaly Guided Autonomous Exploration",
        "conference": "IROS 2026",
        "authors": "Akash Kumbar, Abhinav Raundhal, Madhava Krishna",
        "summary": "Developed a scene anomaly-guided autonomous exploration framework that actively targets poorly reconstructed regions for improved mapping. Demonstrated better volumetric coverage and higher-fidelity 3D reconstruction over state-of-the-art baselines.",
        "projectUrl": "https://beyondfrontiers.github.io/",
        "thumbnail": "./assets/images/publications/beyondfrontiers.png",
        "accent": "#6b96d8",
        "codeUrl": "https://github.com/beyondfrontiers/Beyond-Frontiers"
      }
    ]
  },
  "projects": [
    {
      "title": "DistLearn: Federated Learning",
      "slug": "distlearn",
      "description": "Built a federated learning system enabling multiple clients to train locally with data privacy, aggregating model updates using methods like FedSGD, FedAvg, FedAdp and FedModCS with SSL/TLS encryption.",
      "github": "https://github.com/Abhinav7R/DistLearn",
      "tags": ["Federated Learning", "Privacy Preserving ML"],
      "thumbnail": "./assets/images/projects/distlearn.png",
      "accent": "#89c2ff"
    },
    {
      "title": "6DoF Pose Estimation",
      "slug": "6dof-pose-estimation",
      "description": "Developed a framework for 6-DoF pose estimation from meshes using differentiable rendering techniques, focusing on optimizing pose parameters by minimizing silhouette loss.",
      "github": "https://github.com/Abhinav7R/6DOF-Pose-Estimation",
      "tags": ["Graphics", "Meshes", "Optimization"],
      "thumbnail": "./assets/images/projects/6dof.png",
      "accent": "#9fd7c7"
    },
    {
      "title": "Patch Match (NNF)",
      "slug": "patch-match-nnf",
      "description": "Implemented PatchMatc algorithm in Python for tasks like in-painting, watermark, and object removal, optimizing speed and memory using Nearest Neighbour Field (NNF).",
      "github": "https://github.com/Abhinav7R/PatchMatchDIP",
      "tags": ["Digital Image Processing"],
      "thumbnail": "./assets/images/projects/patchmatch.png",
      "accent": "#f0b06d"
    },
    {
      "title": "Simple Renderer",
      "slug": "simple-renderer",
      "description": "Simple renderer in C++ to render scenes using concepts such as Bounding Volume Hierarchy, texture mapping, direct lighting with point and directional lights, Monte Carlo integration for area light sampling.",
      "github": "https://github.com/Abhinav7R/SimpleRenderer",
      "tags": ["Graphics", "Ray Tracing"],
      "thumbnail": "./assets/images/projects/cg.png",
      "accent": "#d8b0ff"
    },
    {
      "title": "Obstacle Avoiding Robot",
      "slug": "obstacle-avoiding-robot",
      "description": "Built a robot capable of autonomously navigating through a given environment while avoiding obstacles detected using ultrasonic sensors. Integrated Thingspeak for data analysis.",
      "github": "https://github.com/Abhinav7R/Obstacle-Avoiding-Robot",
      "tags": ["Embedded Systems", "IOT", "Robotics"],
      "thumbnail": "./assets/images/projects/obstacle-avoiding-robot.png",
      "accent": "#c49bde"
    },
    {
      "title": "AutoClaim",
      "slug": "autoclaim",
      "description": "Built a low-latency end-to-end pipeline for automobile insurance claim assessment. Fake image detection, blur/tampering checks, CLIP-based text-image consistency verification and video support.",
      "github": "https://github.com/Abhinav7R/Megathon25",
      "tags": ["Computer Vision", "Videos", "CLIP"],
      "thumbnail": "./assets/images/projects/megathon-25.png",
      "accent": "#e88d6d"
    },
    {
      "title": "AI Aided Paddy Procurement",
      "slug": "paddy-procurement",
      "description": "Using image processing and CV models for crop identification, detecting fake paddy, and determining the health of paddy. Aided Telangana government to efficiently manage and assess paddy cultivation.",
      "github": "https://github.com/Abhinav7R/Megathon23",
      "tags": ["Computer Vision", "ML", "Agritech"],
      "thumbnail": "./assets/images/projects/paddy.png",
      "accent": "#d8b0ff"
    },
    {
      "title": "Robotics Perception & SLAM",
      "slug": "rob-percep-slam",
      "description": "Implemented core algorithms including ICP point cloud registration, Lie group optimization, pose graph optimization, SLAM, camera extrinsic calibration, and two-view geometry.",
      "github": "https://github.com/Abhinav7R/MobileRobotics",
      "tags": ["Robotics", "SLAM"],
      "thumbnail": "./assets/images/projects/mr.png",
      "accent": "#96ffa2ff"
    },
    {
      "title": "Cart-Pole Swing-Up",
      "slug": "cart-pole-swing-up",
      "description": "Analysed and simulated the cart-pole swing-up problem using numerical trajectory optimization with OptimTraj. Implemented trapezoidal collocation and Hermite-Simpson methods.",
      "github": "https://github.com/Abhinav7R/Cart-Pole-Swing-Up",
      "tags": ["Numerical Optimization"],
      "thumbnail": "./assets/images/projects/cart-pole.png",
      "accent": "#ff9696ff"
    },
    {
      "title": "gRPC-Strife",
      "slug": "strife",
      "description": "A distributed payment gateway using gRPC with client authentication, secure balance transfer, idempotency handling, offline client recovery, and atomic multi-bank transactions via 2PC.",
      "github": "https://github.com/Abhinav7R/gRPC-Distributed-Systems",
      "tags": ["gRPC", "Distributed Systems"],
      "thumbnail": "./assets/images/projects/strife.png",
      "accent": "#6db8c4"
    },
    {
      "title": "TensionFlow",
      "slug": "tensionflow",
      "description": "Developed an NLP-based solution for emotion detection, polarity and concern classification, and intensity analysis with multilingual support and timeline-based sentiment tracking.",
      "github": "https://github.com/Abhinav7R/Megathon24",
      "tags": ["NLP", "Sentiment Analysis"],
      "thumbnail": "./assets/images/projects/megathon-24.png",
      "accent": "#7ec8a0"
    },
    {
      "title": "DFS: Distributed File System",
      "slug": "dfs",
      "description": "A DFS using MPI supporting uploads, downloads, distributed search, chunk-level replication and load balancing. Designed fault-tolerant storage with heartbeat-based node monitoring, recovery mechanisms.",
      "github": "https://github.com/Abhinav7R/MPI-Distributed-Systems",
      "tags": ["MPI", "Distributed Systems", "File System"],
      "thumbnail": "./assets/images/projects/dfs.png",
      "accent": "#d4855e"
    }
  ],
  "experience": {
    "research": [
      {
        "title": "CVIT, IIIT Hyderabad",
        "logo": "./assets/images/experience/cvit.jpeg",
        "role": "Undergraduate Researcher",
        "period": "May 2024 - Jun 2026",
        "description": "Research on 3D vision and document analysis, including work on text-aware scene reconstruction and handwritten document understanding."
      },
      {
        "title": "Robotics Research Center, IIIT Hyderabad",
        "logo": "./assets/images/experience/rrc.png",
        "role": "Undergraduate Researcher",
        "period": "Jan 2025 - Jun 2026",
        "description": "Research at the Robotics Research Center on perception, exploration, and autonomous navigation in 3D environments."
      }
    ],
    "industry": [
      {
        "title": "Cloudphysician",
        "logo": "./assets/images/experience/cloudphysician.jpeg",
        "role": "Computer Vision Engineer",
        "period": "Jun 2026 - Present",
        "description": "Building computer vision models, working on production ML systems for providing critical care to patients."
      },
      {
        "title": "ideaForge",
        "logo": "./assets/images/experience/ideaforge.jpeg",
        "role": "3D Vision Intern",
        "period": "May 2025 - Jul 2025",
        "description": "Developed a 3D reconstruction pipeline optimized for constrained hardware in drone-based computer vision systems."
      },
      {
        "title": "Joly AI",
        "logo": "./assets/images/experience/jolyai.jpeg",
        "role": "CV Intern",
        "period": "Jan 2024 - Apr 2024",
        "description": "Developed CV models to learn photographers’ editing styles for automatic photo enhancement and built a React-based website for streamlined photo editing."
      }
    ],
    "teaching": [
      {
        "course": "Computer Vision (CS7.505)",
        "professor": "Prof. Makarand Tapaswi and Prof. Charu Sharma",
        "semester": "Spring 2026"
      },
      {
        "course": "Statistical Methods in AI (CS7.403)",
        "professor": "Prof. Ravi Kiran S and Prof. Saikiran B",
        "semester": "Monsoon 2025"
      },
      {
        "course": "Computer Graphics (CS7.302)",
        "professor": "Prof. Raghavendra G S",
        "semester": "Spring 2025"
      },
      {
        "course": "Probability and Statistics (MA6.101)",
        "professor": "Prof. Tejas Bodas",
        "semester": "Monsoon 2024"
      }
    ],
    "leadership": [
      {
        "title": "Secretary - Cultural Council, IIITH",
        "description": "Led the planning and execution of major cultural events, coordinating logistics, budgets, and cross-team collaboration to enhance student engagement across campus."
      },
      {
        "title": "Technical Secretary - Students' Parliament, IIITH",
        "description": "Represented the student body on technical matters, revived and maintained the Students' Parliament website, and organized institute-wide technical initiatives."
      },
      {
        "title": "Coordinator - The Dance Crew, IIITH",
        "description": "Organized workshops, rehearsals, performances, and participated in inter-college competitions while coordinating one of the institute's largest clubs."
      },
      {
        "title": "Design Head - Electronics and Robotics Club, IIITH",
        "description": "Designed robotics challenge tracks for events and represented the club as part of the technical and events team at the Technoxian Robotics Competition."
      }
    ],
    "achievements": [
      {
        "title": "Best All Rounder Award at IIITH",
        "description": "Recognized for balanced excellence across academics, extracurriculars, and leadership."
      },
      {
        "title": "Dean's List across 8/8 semesters",
        "description": "Achieved DL1 four times, DL2 three times, and the merit list once at IIIT Hyderabad."
      },
      {
        "title": "Megathon Winner for 3 consecutive years",
        "description": "Won hackathons organized by E-Cell IIITH with problem statements from Chubb, Telangana State Govt, and Mindpeers."
      }
    ]
  },
  "gallery": {
    "paintings": [
      { "src": "./assets/images/gallery/paintings/macaws.png" },
      { "src": "./assets/images/gallery/paintings/trees_impressionist.png" },
      { "src": "./assets/images/gallery/paintings/birds_abstract.png" },
      { "src": "./assets/images/gallery/paintings/boat.png" },
      { "src": "./assets/images/gallery/paintings/horse.png" },
      { "src": "./assets/images/gallery/paintings/cat.png" },
      { "src": "./assets/images/gallery/paintings/krishna.png" },
      { "src": "./assets/images/gallery/paintings/mountains_impressionist.png" },
      { "src": "./assets/images/gallery/paintings/birds.png" },
      { "src": "./assets/images/gallery/paintings/abstract_split.png" },
      { "src": "./assets/images/gallery/paintings/first_painting.png" }
    ],
    "travel": [
      {
        "title": "Arizona, 2026",
        "images": [
          { "src": "./assets/images/gallery/travel/wacv-26/1.png" },
          { "src": "./assets/images/gallery/travel/wacv-26/3.png" },
          { "src": "./assets/images/gallery/travel/wacv-26/4.png" },
          { "src": "./assets/images/gallery/travel/wacv-26/2.png" },
          { "src": "./assets/images/gallery/travel/wacv-26/5.png" },
          { "src": "./assets/images/gallery/travel/wacv-26/6.png" },
          { "src": "./assets/images/gallery/travel/wacv-26/7.png" },
          { "src": "./assets/images/gallery/travel/wacv-26/8.png" },
          { "src": "./assets/images/gallery/travel/wacv-26/9.png" }
        ]
      }
    ]
  },
  "cv": {
    "pdf": "./assets/docs/abhinavraundhal.pdf"
  }
};