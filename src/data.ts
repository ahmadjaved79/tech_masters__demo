import { FeatureCard, BenefitCard, Testimonial, FAQItem, AudienceCategory } from "./types";

export const CURRICULUM_DATA: FeatureCard[] = [
  {
    id: "learn-1",
    title: "Python Essentials for Problem Solving",
    description: "Master variables, high-level built-ins (Lists, Dicts, Sets), dynamic typing, list comprehensions, and Pythonic writing to streamline code.",
    duration: "15 Mins",
    topics: ["Lists & Sets Complexity", "Python Dictionary Magic", "Slicing & Comprehensions", "Optimal Syntax Tricks"]
  },
  {
    id: "learn-2",
    title: "Data Structures in Depth Using Python",
    description: "Deep dive into visual construction, manipulation, and pointer logic of Linked Lists, Stacks, Queues, and dynamic Array allocations.",
    duration: "25 Mins",
    topics: ["List Implementation", "Stack & Queue Mechanics", "Pointer Transformations", "Custom Node Classes"]
  },
  {
    id: "learn-3",
    title: "Algorithms & Problem-Solving Techniques",
    description: "Optimize operations with two-pointer techniques, sliding windows, interactive binary search, and recursive call stacks.",
    duration: "20 Mins",
    topics: ["Binary Search Mechanics", "Sliding Window Pattern", "Recursion Visualizer", "Two-Pointer Strategy"]
  },
  {
    id: "learn-4",
    title: "Time & Space Complexity Analysis",
    description: "De-mystify Big-O notation. Learn how to compute execution steps and gauge local memory requirements during high-pressure coding interviews.",
    duration: "15 Mins",
    topics: ["Best/Avg/Worst Cases", "Recurrence Relations", "Space Bounds", "FAANG Constraints"]
  },
  {
    id: "learn-5",
    title: "Practical Coding Patterns & Real Problems",
    description: "Build robust solutions to recurring LeetCode, CodeChef, and HackerRank questions under strict time bounds.",
    duration: "15 Mins",
    topics: ["Dynamic Array Hacks", "Frequency Maps", "Interview Walkthrough", "Live Code Run"]
  }
];

export const BENEFITS_DATA: BenefitCard[] = [
  {
    id: "benefit-1",
    title: "Learn DSA from Scratch",
    description: "Absolutely no prior DSA background required. We lay out the brickwork row-by-row, building your muscle memory.",
    iconName: "Code2"
  },
  {
    id: "benefit-2",
    title: "Improve Coding Skills",
    description: "Write clean, elegant, and highly performant code obeying Python's standard PEP 8 standards.",
    iconName: "Cpu"
  },
  {
    id: "benefit-3",
    title: "Crack Technical Interviews",
    description: "Decode interviewer hints, articulate your computational thoughts, and traverse trees on a whiteboard.",
    iconName: "SearchCode"
  },
  {
    id: "benefit-4",
    title: "Placement Preparation",
    description: "Tailored to hit target requirements of campus rounds, product scale-ups, and global technical companies.",
    iconName: "Briefcase"
  },
  {
    id: "benefit-5",
    title: "Real Coding Practice",
    description: "Skip theoretical reading; follow live programming examples, trace inputs, and run code in real-time.",
    iconName: "Keyboard"
  },
  {
    id: "benefit-6",
    title: "Industry Guidance",
    description: "Learn practical tips, algorithmic patterns, and optimization cheats used by senior Engineers in FAANG.",
    iconName: "UserCheck"
  },
  {
    id: "benefit-7",
    title: "Problem Solving Mastery",
    description: "Adopt systemic thinking — convert verbose text-based problem descriptions into robust runtime calculations.",
    iconName: "Award"
  }
];

export const AUDIENCE_DATA: AudienceCategory[] = [
  {
    id: "aud-1",
    title: "B.Tech Students",
    description: "CSE, IT, ECE & Core branches gearing up to ace upcoming placement seasons and technical challenges.",
    iconName: "GraduationCap"
  },
  {
    id: "aud-2",
    title: "MCA Students",
    description: "Postgraduates preparing to stand out with deep analytical skills and optimal development practices.",
    iconName: "BookOpen"
  },
  {
    id: "aud-3",
    title: "BCA Students",
    description: "Undergraduates looking to bypass conventional roadblocks and secure top dev positions.",
    iconName: "Laptop"
  },
  {
    id: "aud-4",
    title: "Diploma Students",
    description: "Ambitious scholars striving to transition to full-time specialized software roles.",
    iconName: "Layers"
  },
  {
    id: "aud-5",
    title: "Fresh Graduates",
    description: "2025, 2026, and 2027 graduates determined to pass tech screening screens with confidence.",
    iconName: "Milestone"
  },
  {
    id: "aud-6",
    title: "Job Seekers",
    description: "Career switchers and professionals training to successfully interview at modern product companies.",
    iconName: "TrendingUp"
  },
  {
    id: "aud-7",
    title: "Python Beginners",
    description: "Coders who know basic variables and loops, looking to apply loops to solve complex DSA structures.",
    iconName: "Terminal"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "Amit Sharma",
    role: "Secured SDE-1 Offer",
    college: "MSRIT Bangalore",
    company: "Amazon India",
    rating: 5,
    text: "This 90-minute Python DSA Masterclass saved me weeks of aimless study. The simple visual analogies on Stack and recursion depth were game-changers for my preparation. I was able to explain the recurrence logic during my final Amazon round!",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "test-2",
    name: "Priya Nair",
    role: "Placement Drive Success",
    college: "VIT Vellore",
    company: "Accenture Premium",
    rating: 5,
    text: "At just ₹49, I was skeptical, but the quality of illustrations and step-by-step Big O comparisons are higher than ₹10,000 online courses. Highly structured, focused completely on cracking coding rounds rather than dry theories.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "test-3",
    name: "Rohan Das",
    role: "System Engineer",
    college: "JNTU Hyderabad",
    company: "Cognizant Specialized",
    rating: 5,
    text: "The sliding window pattern demonstrated using Python sub-arrays clicked instantly. I immediately solved three medium-level LeetCode problems the very next morning. This is the ultimate starter pack for any Python enthusiast!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "Is this workshop beginner-friendly?",
    answer: "Absolutely. We assume no deep prior knowledge of Data Structures. We begin with raw conceptual abstractions (analogy with real life) and build the Python syntax step-by-step."
  },
  {
    id: "faq-2",
    question: "Do I need prior Python knowledge?",
    answer: "A very basic understanding of inputs, variables, and loop structures in Python is ideal. But don't worry! We spend the first 15 minutes reviewing fundamental Pythonic code constructs to make sure everybody is aligned."
  },
  {
    id: "faq-3",
    question: "Will I receive a certificate of completion?",
    answer: "Yes! Every registered candidate who is present in the Zoom session will receive an official verifiable 'DSA with Python Masterclass Certificate of Excellence' issued by Academy of Tech Masters, perfect for your resume."
  },
  {
    id: "faq-4",
    question: "How do I join the Zoom session?",
    answer: "Upon completing the ₹49 checkout secure registration, your seat is reserved immediately. You'll instantly receive a customized confirmation on-screen containing your digital pass and your private Zoom entry credentials. We also send copies via Email and WhatsApp."
  },
  {
    id: "faq-5",
    question: "Will recordings be provided?",
    answer: "Yes, you will get complete high-definition session recordings and annotated Jupyter code notebooks with 1-year access, so you can rewatch and practice anytime."
  }
];
