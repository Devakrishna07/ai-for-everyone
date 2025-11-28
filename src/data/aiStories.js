// src/data/aiStories.js

export const AGE_GROUPS = [
  { id: "all", label: "All Ages" },
  { id: "children", label: "Children (Under 13)" },
  { id: "teens", label: "Teens (13–19)" },
  { id: "young-adults", label: "Young Adults (20–35)" },
  { id: "adults", label: "Adults (36–60)" },
  { id: "seniors", label: "Seniors (60+)" },
];

export const AI_STORIES = [
  // ------------------------------------------------------------
  // CHILDREN (20 Stories)
  // ------------------------------------------------------------
  {
    id: 1,
    name: "Liya",
    ageGroup: "children",
    title: "AI Helped Me Become Better at Reading",
    role: "Grade 4 Student",
    story:
      "Reading long paragraphs used to scare me because I would lose track of lines. With an AI reading buddy, stories became interactive and colorful. It explained difficult words patiently and even made the characters speak. Now I read confidently in class without fear.",
    toolsUsed: ["Reading Helper"],
    location: "Bengaluru, India",
  },
  {
    id: 2,
    name: "Aarav",
    ageGroup: "children",
    title: "Math Became Fun Through AI",
    role: "Grade 5 Student",
    story:
      "I always felt slow in math until AI turned equations into fun games. Each level made me practice important topics without feeling bored. My speed improved and I even started helping my classmates. My teacher said she saw a new confidence in me.",
    toolsUsed: ["Math Puzzle AI"],
    location: "Mumbai, India",
  },
  {
    id: 3,
    name: "Zoya",
    ageGroup: "children",
    title: "AI Helped Me Create Stories",
    role: "Grade 3 Student",
    story:
      "I loved imagining magical worlds but didn’t know how to write them. AI gave me a beginning, a middle, and ideas for endings. It encouraged my creativity instead of correcting me harshly. Now I proudly show my stories to my parents every weekend.",
    toolsUsed: ["Story Maker AI"],
    location: "Dubai, UAE",
  },
  {
    id: 4,
    name: "Nihal",
    ageGroup: "children",
    title: "Science Felt Easy With AI",
    role: "Grade 6 Student",
    story:
      "Science diagrams always confused me because they looked complicated. AI explained each part with 3D animations that I could rotate and zoom. I finally understood how everything works instead of memorizing blindly. My marks improved and revision became fun.",
    toolsUsed: ["Science 3D Tutor"],
    location: "Kochi, India",
  },
  {
    id: 5,
    name: "Mira",
    ageGroup: "children",
    title: "AI Helped Me Improve Handwriting",
    role: "Grade 2 Student",
    story:
      "My letters were messy and uneven until AI handwriting practice taught me shapes slowly. It corrected every curve with animated guidelines. I practiced every day and saw real progress. My teacher praised my neat notebook during inspection.",
    toolsUsed: ["Handwriting AI"],
    location: "Colombo, Sri Lanka",
  },
  {
    id: 6,
    name: "Ali",
    ageGroup: "children",
    title: "Practicing Piano With AI",
    role: "Beginner Pianist",
    story:
      "My piano lessons were once a struggle because I couldn’t play with correct timing. AI listened to my notes and highlighted where I was rushing or slowing down. It made learning feel like a game with rewards. Now I enjoy playing daily.",
    toolsUsed: ["Music Practice AI"],
    location: "Toronto, Canada",
  },
  {
    id: 7,
    name: "Hana",
    ageGroup: "children",
    title: "AI Helped Me With Spelling",
    role: "Grade 3 Student",
    story:
      "I used to spell words wrong and feel shy reading aloud. AI spelling trainer repeated words slowly with simple examples. I practiced until I memorized patterns. My confidence grew and I now participate in class activities happily.",
    toolsUsed: ["Spelling Coach AI"],
    location: "Abu Dhabi, UAE",
  },
  {
    id: 8,
    name: "Krish",
    ageGroup: "children",
    title: "History Became Interesting",
    role: "Grade 5 Student",
    story:
      "Dates and names bored me until AI narrated history like adventure stories. It added voices, maps, and timelines that made everything come alive. I started remembering events easily. My teacher noticed my answers became clearer.",
    toolsUsed: ["History Story AI"],
    location: "Delhi, India",
  },
  {
    id: 9,
    name: "Fatima",
    ageGroup: "children",
    title: "AI Helped Me Learn French",
    role: "Grade 6 Student",
    story:
      "French pronunciation was difficult, but AI corrected me gently each time. It let me repeat words as many times as I wanted. Slowly, I became confident speaking short sentences. My teacher said my accent improved a lot.",
    toolsUsed: ["Language Buddy AI"],
    location: "Paris, France",
  },
  {
    id: 10,
    name: "Ethan",
    ageGroup: "children",
    title: "Learning Geography With AI Maps",
    role: "Grade 4 Student",
    story:
      "Maps looked confusing because everything was tiny and crowded. AI zoomed in and explained each country with colors, facts, and small cartoons. I loved exploring new places every evening. Geography became my favorite subject.",  
    toolsUsed: ["Interactive Map AI"],
    location: "Sydney, Australia",
  },
  {
    id: 11,
    name: "Anika",
    ageGroup: "children",
    title: "AI Helped Me Write Better Essays",
    role: "Grade 6 Student",
    story:
      "I wrote very short essays earlier because I didn’t know how to expand ideas. AI suggested extra sentences and examples to make my writing better. I slowly learned how to describe things myself. My essays now fill the whole page.",
    toolsUsed: ["Writing Helper AI"],
    location: "Hyderabad, India",
  },
  {
    id: 12,
    name: "Tanish",
    ageGroup: "children",
    title: "Practicing Drawing With AI",
    role: "Grade 4 Student",
    story:
      "I loved drawing but struggled with shapes. AI drawing steps made everything easy by showing simple outlines first. I practiced animals, objects, and characters daily. Now my sketches look much more professional.",
    toolsUsed: ["Drawing Tutor AI"],
    location: "Lucknow, India",
  },
  {
    id: 13,
    name: "Sara",
    ageGroup: "children",
    title: "AI Helped Me Prepare for a Quiz",
    role: "Grade 5 Student",
    story:
      "Before tests, I used to panic about remembering everything. AI turned my notes into flashcards and short quizzes. I revised quickly without stress. I scored higher than expected and felt proud.",
    toolsUsed: ["Quiz Maker AI"],
    location: "Sharjah, UAE",
  },
  {
    id: 14,
    name: "Ryu",
    ageGroup: "children",
    title: "AI Made Learning Coding Easy",
    role: "Primary School Student",
    story:
      "Programming looked too hard with strange symbols everywhere. AI explained each block like a friend and showed fun mini-games. I created my first animation within minutes. It made me excited about computers.",
    toolsUsed: ["Kids Coding AI"],
    location: "Osaka, Japan",
  },
  {
    id: 15,
    name: "Inaaya",
    ageGroup: "children",
    title: "AI Helped Me Speak Confidently",
    role: "Primary Student",
    story:
      "Speaking in front of class made me nervous. AI speech coach let me practice without pressure. It corrected pace and pronunciation softly. Now I raise my hand during presentations.",
    toolsUsed: ["Speech Trainer AI"],
    location: "Doha, Qatar",
  },
  {
    id: 16,
    name: "Jaden",
    ageGroup: "children",
    title: "AI Helped Me Memorize Faster",
    role: "Grade 5 Student",
    story:
      "Long answers were hard to remember. AI created rhythm-based memory techniques for me. I repeated them a few times and everything stuck easily. Studying became less stressful.",
    toolsUsed: ["Memory Helper AI"],
    location: "Texas, USA",
  },
  {
    id: 17,
    name: "Pooja",
    ageGroup: "children",
    title: "AI Helped Me Understand Fractions",
    role: "Grade 3 Student",
    story:
      "Fractions confused me until AI explained them using pizzas and chocolates. It showed how parts become whole with colorful visuals. I practiced daily and improved quickly. Math stopped feeling scary.",
    toolsUsed: ["Visual Math AI"],
    location: "Chennai, India",
  },
  {
    id: 18,
    name: "Khalid",
    ageGroup: "children",
    title: "AI Made Revision Fun",
    role: "Grade 6 Student",
    story:
      "Studying felt boring after school. AI transformed my lessons into small games with coins and stars. I revised without realizing time passed. My parents were surprised to see me enjoying homework.",
    toolsUsed: ["Study Game AI"],
    location: "Muscat, Oman",
  },
  {
    id: 19,
    name: "Aria",
    ageGroup: "children",
    title: "AI Helped Me Learn New Words",
    role: "Grade 4 Student",
    story:
      "I struggled to learn new vocabulary. AI showed pictures, meanings, and sentences for each word. I practiced with daily quizzes and improved quickly. Now I use new words confidently.",
    toolsUsed: ["Vocabulary AI"],
    location: "London, UK",
  },
  {
    id: 20,
    name: "Rohan",
    ageGroup: "children",
    title: "AI Helped Me Solve Puzzles",
    role: "Grade 5 Student",
    story:
      "I loved puzzles but had trouble solving hard ones. AI gave hints without giving the full answer. It taught me how to think step by step. I became much better at logic games.",
    toolsUsed: ["Puzzle Helper AI"],
    location: "Delhi, India",
  },

  // ------------------------------------------------------------
  // TEENS (20 Stories)
  // ------------------------------------------------------------
  {
    id: 21,
    name: "Neha",
    ageGroup: "teens",
    title: "AI Helped Me Study Smart",
    role: "10th Grade Student",
    story:
      "I used to read entire chapters again and again without knowing what mattered. AI highlighted key concepts and made simple summaries. I revised faster and remembered more. My stress reduced during exams.",
    toolsUsed: ["Study AI"],
    location: "Bengaluru, India",
  },
  {
    id: 22,
    name: "Alex",
    ageGroup: "teens",
    title: "AI Made Coding Easier",
    role: "School Programmer",
    story:
      "I struggled with bugs and didn’t know where things went wrong. AI explained errors simply and suggested cleaner code. I improved my logic with daily practice. My school project turned out amazing.",
    toolsUsed: ["Code Helper AI"],
    location: "Toronto, Canada",
  },
  {
    id: 23,
    name: "Pavithra",
    ageGroup: "teens",
    title: "Preparing for Board Exams With AI",
    role: "Student",
    story:
      "Board exam syllabus felt overwhelming at first. AI created a personalised study plan for me. It gave quizzes, practice papers, and doubt explanations. I felt in control of my preparation for the first time.",
    toolsUsed: ["Exam Planner AI"],
    location: "Chennai, India",
  },
  {
    id: 24,
    name: "Jasper",
    ageGroup: "teens",
    title: "AI Helped Me Become Better at Art",
    role: "Art Student",
    story:
      "I loved drawing but couldn’t get the proportions right. AI showed step-by-step guides for face and body structure. I practiced every weekend and improved noticeably. My portfolio became stronger.",
    toolsUsed: ["Art Mentor AI"],
    location: "Amsterdam, Netherlands",
  },
  {
    id: 25,
    name: "Simran",
    ageGroup: "teens",
    title: "AI Helped Me Speak English Smoothly",
    role: "Student",
    story:
      "Fluency was my biggest issue because I hesitated while talking. AI conversation partner let me practice anytime. It corrected my grammar gently and gave better phrases. I gained confidence within weeks.",
    toolsUsed: ["Conversation AI"],
    location: "Delhi, India",
  },
  {
    id: 26,
    name: "Diego",
    ageGroup: "teens",
    title: "Learning Guitar With AI",
    role: "Student Musician",
    story:
      "I couldn’t take regular classes so AI became my guitar instructor. It listened to my chords and guided me on finger positions. I learned songs faster than before. Music became a joyful hobby.",
    toolsUsed: ["Guitar Trainer AI"],
    location: "Chile",
  },
  {
    id: 27,
    name: "Kritika",
    ageGroup: "teens",
    title: "AI Helped Me Stay Focused",
    role: "11th Grade Student",
    story:
      "I used to get distracted easily while studying. AI study timer broke my work into small sessions. It tracked my progress and motivated me daily. My productivity improved a lot.",
    toolsUsed: ["Focus AI"],
    location: "Kolkata, India",
  },
  {
    id: 28,
    name: "Leo",
    ageGroup: "teens",
    title: "AI Helped Me Understand Physics",
    role: "Student",
    story:
      "Physics numericals felt impossible until AI explained them step by step. It visualized forces and diagrams in a simple way. I practiced regularly and slowly understood everything. My marks improved drastically.",
    toolsUsed: ["Physics Solver AI"],
    location: "Melbourne, Australia",
  },
  {
    id: 29,
    name: "Hiba",
    ageGroup: "teens",
    title: "AI Helped Me Prepare Better Presentations",
    role: "Student",
    story:
      "I always worried about forgetting points during presentations. AI created clean slides from my rough notes. It also helped me practice speeches confidently. My presentation skills improved a lot.",
    toolsUsed: ["Presentation AI"],
    location: "Doha, Qatar",
  },
  {
    id: 30,
    name: "Rithvik",
    ageGroup: "teens",
    title: "Using AI to Learn Animation",
    role: "Student Animator",
    story:
      "Animation software looked complicated until AI simplified it for me. It taught me how to create movement in small steps. I made my first animated clip within a week. It inspired me to pursue digital arts.",
    toolsUsed: ["Animation AI"],
    location: "Hyderabad, India",
  },

  // TEN MORE TEENS (31–40)
  {
    id: 31,
    name: "Amina",
    ageGroup: "teens",
    title: "AI Helped Me Improve My Writing",
    role: "Student",
    story:
      "Essay writing felt stressful because I didn’t know how to structure ideas. AI gave me outlines and suggestions. I learned how to create strong paragraphs and transitions. My teachers noticed the improvement.",
    toolsUsed: ["Writing Assistant AI"],
    location: "Nairobi, Kenya",
  },
  {
    id: 32,
    name: "Sam",
    ageGroup: "teens",
    title: "AI Improved My Chess Skills",
    role: "Chess Club Member",
    story:
      "I didn’t have strong opponents to practice regularly. AI chess engine played at my level and taught me strategies. I learned patterns I never knew before. I won my school tournament this year.",
    toolsUsed: ["Chess AI"],
    location: "New York, USA",
  },
  {
    id: 33,
    name: "Lea",
    ageGroup: "teens",
    title: "AI Helped Me Learn Chemistry",
    role: "Student",
    story:
      "Chemical equations confused me until AI broke them into simpler parts. It explained reactions with colorful animations. I practiced daily and became more confident. Studying didn’t feel scary anymore.",
    toolsUsed: ["Chemistry Tutor AI"],
    location: "Berlin, Germany",
  },
  {
    id: 34,
    name: "Imran",
    ageGroup: "teens",
    title: "AI Helped Me Stay Organized",
    role: "Student",
    story:
      "I used to forget assignments and deadlines often. AI created a schedule and gentle reminders. My day became more structured and less chaotic. I finished work on time without stress.",
    toolsUsed: ["Schedule AI"],
    location: "Dubai, UAE",
  },
  {
    id: 35,
    name: "Lina",
    ageGroup: "teens",
    title: "AI Helped Me Practice Language Better",
    role: "Student",
    story:
      "Learning Korean was tough at first. AI taught me pronunciation and helped me practice conversations. I improved my fluency with daily practice. It made learning enjoyable.",
    toolsUsed: ["Language Practice AI"],
    location: "Busan, South Korea",
  },
  {
    id: 36,
    name: "Ravi",
    ageGroup: "teens",
    title: "Using AI to Improve My Sketching",
    role: "Student Artist",
    story:
      "I loved sketching but proportions always looked off. AI showed me guidelines and corrections instantly. I applied them and saw major improvement. My art teacher encouraged me to participate in contests.",
    toolsUsed: ["Sketch Coach AI"],
    location: "Delhi, India",
  },
  {
    id: 37,
    name: "Emma",
    ageGroup: "teens",
    title: "AI Helped Me Revise Faster",
    role: "Student",
    story:
      "I got overwhelmed seeing long chapters. AI condensed them into small summaries and quizzes. I revised in half the time and understood better. My exam fear reduced a lot.",
    toolsUsed: ["Revision AI"],
    location: "London, UK",
  },
  {
    id: 38,
    name: "Rohit",
    ageGroup: "teens",
    title: "AI Helped Me Build My First App",
    role: "Student Developer",
    story:
      "I wanted to create an app but didn’t know where to begin. AI guided me through simple steps and explained code. I built a working prototype within days. It boosted my confidence in programming.",
    toolsUsed: ["App Builder AI"],
    location: "Pune, India",
  },
  {
    id: 39,
    name: "Nora",
    ageGroup: "teens",
    title: "AI Helped Me Prepare for Debates",
    role: "Debate Club Member",
    story:
      "I struggled with forming strong arguments. AI gave me facts, counterpoints, and better phrasing. I practiced until I felt confident on stage. I won the interschool debate last month.",
    toolsUsed: ["Argument AI"],
    location: "Copenhagen, Denmark",
  },
  {
    id: 40,
    name: "Ivan",
    ageGroup: "teens",
    title: "AI Helped Me Learn Programming Faster",
    role: "Tech Student",
    story:
      "Debugging frustrated me because I couldn’t find mistakes. AI pointed out issues clearly and explained how to fix them. I learned new concepts quickly. Coding became exciting instead of confusing.",
    toolsUsed: ["Debug AI"],
    location: "Moscow, Russia",
  },

  // ------------------------------------------------------------
  // YOUNG ADULTS (20 Stories)
  // ------------------------------------------------------------
  {
    id: 41,
    name: "Sasha",
    ageGroup: "young-adults",
    title: "AI Helped Me Build My Portfolio",
    role: "Developer",
    story:
      "Creating a portfolio felt overwhelming. AI generated layout ideas and suggested improvements. I customized everything easily and felt proud of my work. It helped me get more interviews.",
    toolsUsed: ["Portfolio AI"],
    location: "Berlin, Germany",
  },
  {
    id: 42,
    name: "Meera",
    ageGroup: "young-adults",
    title: "AI Helped Me Prepare for Interviews",
    role: "Job Seeker",
    story:
      "Interviews always made me nervous. AI conducted mock sessions and gave feedback on my answers. It showed where I needed improvement. I became confident and finally got selected.",
    toolsUsed: ["Interview AI"],
    location: "Chennai, India",
  },
  {
    id: 43,
    name: "Arjun",
    ageGroup: "young-adults",
    title: "AI Helped Me Start Freelancing",
    role: "Designer",
    story:
      "Writing proposals was difficult at first. AI helped me structure messages and present my skills clearly. I started receiving more responses from clients. It gave my career a strong start.",
    toolsUsed: ["Proposal AI"],
    location: "Bengaluru, India",
  },
  {
    id: 44,
    name: "Leila",
    ageGroup: "young-adults",
    title: "Learning Marketing With AI",
    role: "Marketing Intern",
    story:
      "Marketing concepts felt confusing. AI explained strategies through real examples and case studies. I applied them during work and saw results. My boss appreciated my effort.",
    toolsUsed: ["Marketing Tutor AI"],
    location: "Dubai, UAE",
  },
  {
    id: 45,
    name: "Thomas",
    ageGroup: "young-adults",
    title: "AI Helped Me Learn Coding Efficiently",
    role: "Developer",
    story:
      "I switched careers and struggled with advanced concepts. AI broke down difficult topics into simple steps. I practiced daily and improved quickly. Now I feel confident in my new role.",
    toolsUsed: ["Coding Mentor AI"],
    location: "Texas, USA",
  },
  {
    id: 46,
    name: "Mona",
    ageGroup: "young-adults",
    title: "AI Helped Me Grow My Business",
    role: "Small Business Owner",
    story:
      "Managing everything alone was exhausting. AI helped me with social media posts, captions, and product descriptions. It saved me hours and increased engagement. My business grew consistently.",
    toolsUsed: ["Business AI"],
    location: "Nairobi, Kenya",
  },
  {
    id: 47,
    name: "Kartik",
    ageGroup: "young-adults",
    title: "AI Helped Me Learn Finance",
    role: "Student",
    story:
      "Finance concepts always scared me. AI explained topics using short examples and clear visuals. I practiced quizzes to test myself. I now feel more confident in money management.",
    toolsUsed: ["Finance Tutor AI"],
    location: "Pune, India",
  },
  {
    id: 48,
    name: "Samara",
    ageGroup: "young-adults",
    title: "AI Helped Me Stay Fit",
    role: "Student",
    story:
      "I wanted to exercise but didn’t know where to start. AI created simple routines based on my goals. It motivated me daily and tracked progress. I became healthier and more energetic.",
    toolsUsed: ["Workout AI"],
    location: "London, UK",
  },
  {
    id: 49,
    name: "Victor",
    ageGroup: "young-adults",
    title: "AI Helped Me Edit Videos Faster",
    role: "Content Creator",
    story:
      "Editing used to take hours. AI removed noise, cut clips, and suggested transitions quickly. I focused more on creativity than technical issues. My channel started growing faster.",
    toolsUsed: ["Video Editor AI"],
    location: "Los Angeles, USA",
  },
  {
    id: 50,
    name: "Nina",
    ageGroup: "young-adults",
    title: "AI Helped Me Improve My Resume",
    role: "Graduate",
    story:
      "My resume looked plain before AI redesigned it. It optimized phrases and highlighted my strengths. I applied to more jobs with confidence. I received more interview calls than ever.",
    toolsUsed: ["Resume AI"],
    location: "Singapore",
  },

  // TEN MORE YOUNG ADULTS (51–60)
  {
    id: 51,
    name: "Aditya",
    ageGroup: "young-adults",
    title: "AI Helped Me Learn UI/UX",
    role: "Design Student",
    story:
      "Designing interfaces was confusing at first. AI showed me best practices and helped me improve layouts. I built a strong portfolio with its suggestions. My confidence grew as a designer.",
    toolsUsed: ["Design Mentor AI"],
    location: "Delhi, India",
  },
  {
    id: 52,
    name: "Selena",
    ageGroup: "young-adults",
    title: "AI Helped Me Start Blogging",
    role: "Writer",
    story:
      "I wanted to write blogs but didn’t know how to begin. AI generated outlines and improved my grammar. I published posts confidently and gained readers. Writing became enjoyable again.",
    toolsUsed: ["Blog AI"],
    location: "Paris, France",
  },
  {
    id: 53,
    name: "Michael",
    ageGroup: "young-adults",
    title: "AI Helped Me Understand Tough Subjects",
    role: "Engineering Student",
    story:
      "I struggled with circuits and signals until AI explained them with diagrams. It made learning easier and helped me practise problems. I improved steadily in class. Studying felt less overwhelming.",
    toolsUsed: ["Engineering Tutor AI"],
    location: "Berlin, Germany",
  },
  {
    id: 54,
    name: "Ansh",
    ageGroup: "young-adults",
    title: "AI Helped Me Build My First Game",
    role: "Developer",
    story:
      "Game development looked too complicated. AI guided me with logic, assets, and code suggestions. I built my first working game in a week. It encouraged me to learn more.",
    toolsUsed: ["Game Builder AI"],
    location: "Bengaluru, India",
  },
  {
    id: 55,
    name: "Tatiana",
    ageGroup: "young-adults",
    title: "AI Helped Me Improve My Videos",
    role: "Video Creator",
    story:
      "I felt stuck editing long videos manually. AI automated subtitles, trims, and sound balancing. I saved hours of work and uploaded more content. My audience grew steadily.",
    toolsUsed: ["Video AI"],
    location: "Buenos Aires, Argentina",
  },
  {
    id: 56,
    name: "Farid",
    ageGroup: "young-adults",
    title: "AI Helped Me Learn Fast",
    role: "Tech Intern",
    story:
      "There was too much to learn at work. AI created personalised learning paths and explained concepts clearly. I completed tasks faster and impressed my team. It boosted my confidence.",
    toolsUsed: ["Learning AI"],
    location: "Sharjah, UAE",
  },
  {
    id: 57,
    name: "Kiara",
    ageGroup: "young-adults",
    title: "AI Helped Me Manage Time",
    role: "College Student",
    story:
      "My schedule was all over the place. AI built a routine around my classes and deadlines. I followed it and completed assignments on time. Life felt more organized and peaceful.",
    toolsUsed: ["Time Planner AI"],
    location: "Mumbai, India",
  },
  {
    id: 58,
    name: "Jonas",
    ageGroup: "young-adults",
    title: "AI Helped Me Become More Creative",
    role: "Artist",
    story:
      "I often felt blank while creating art. AI generated prompts and new concepts to explore. It pushed my imagination beyond limits. My art became richer and more expressive.",
    toolsUsed: ["Creative AI"],
    location: "Copenhagen, Denmark",
  },
  {
    id: 59,
    name: "Riya",
    ageGroup: "young-adults",
    title: "Using AI for Research",
    role: "Graduate Student",
    story:
      "Academic research overwhelmed me with too many papers. AI summarized articles and extracted key points. It saved me hours of reading and note-taking. My work became more efficient.",
    toolsUsed: ["Research AI"],
    location: "Pune, India",
  },
  {
    id: 60,
    name: "Oliver",
    ageGroup: "young-adults",
    title: "AI Helped Me Learn Public Speaking",
    role: "Student",
    story:
      "Speaking in front of groups was frightening. AI analysed my voice, pauses, and clarity. I improved steadily with practice. I delivered my first confident speech last month.",
    toolsUsed: ["Speech Coach AI"],
    location: "London, UK",
  },

  // ------------------------------------------------------------
  // ADULTS (20 Stories)
  // ------------------------------------------------------------
  {
    id: 61,
    name: "Priya",
    ageGroup: "adults",
    title: "AI Helped Me Organise Work",
    role: "Team Lead",
    story:
      "Managing tasks felt chaotic before. AI scheduled meetings, reminders, and follow-ups. It kept my team organized effortlessly. Work felt less stressful and more structured.",
    toolsUsed: ["Task Organizer AI"],
    location: "Hyderabad, India",
  },
  {
    id: 62,
    name: "Daniel",
    ageGroup: "adults",
    title: "AI Helped Me Grow My Business",
    role: "E-commerce Owner",
    story:
      "Handling product listings and customer messages took hours. AI automated most tasks and improved clarity. My workload reduced and sales increased. I finally found balance in my day.",
    toolsUsed: ["Business Assistant AI"],
    location: "Texas, USA",
  },
  {
    id: 63,
    name: "Linda",
    ageGroup: "adults",
    title: "AI Helped Me With Meal Planning",
    role: "Working Mother",
    story:
      "Cooking after a long day felt exhausting. AI created weekly meal plans and shopping lists based on my ingredients. It saved time and reduced stress. My family enjoyed healthier meals too.",
    toolsUsed: ["Meal Planner AI"],
    location: "Toronto, Canada",
  },
  {
    id: 64,
    name: "Rajnish",
    ageGroup: "adults",
    title: "AI Improved My Productivity",
    role: "Software Developer",
    story:
      "I spent too much time debugging. AI pointed out issues and suggested optimal solutions. It saved hours of work and improved code quality. My project deadlines became easier to meet.",
    toolsUsed: ["Debugging AI"],
    location: "Delhi, India",
  },
  {
    id: 65,
    name: "Mona",
    ageGroup: "adults",
    title: "AI Helped Me Learn New Skills",
    role: "HR Manager",
    story:
      "I wanted to upskill but had little time. AI recommended short personalised lessons daily. Learning became simple and consistent. I feel more confident in my role now.",
    toolsUsed: ["Skill Tutor AI"],
    location: "Dubai, UAE",
  },
  {
    id: 66,
    name: "George",
    ageGroup: "adults",
    title: "AI Helped Me Reduce Stress",
    role: "Accountant",
    story:
      "Work pressure affected my sleep. AI guided me through small meditation sessions. I practiced regularly and felt calmer. It improved both my work and personal life.",
    toolsUsed: ["Wellness AI"],
    location: "London, UK",
  },
  {
    id: 67,
    name: "Ayesha",
    ageGroup: "adults",
    title: "AI Made Work Communication Easier",
    role: "Office Coordinator",
    story:
      "Drafting emails used to consume time. AI wrote clear, polite messages instantly. I edited them slightly and sent confidently. Communication became faster and smoother.",
    toolsUsed: ["Email AI"],
    location: "Muscat, Oman",
  },
  {
    id: 68,
    name: "Ravi",
    ageGroup: "adults",
    title: "AI Helped Me Manage My Finances",
    role: "IT Professional",
    story:
      "I couldn’t keep track of monthly spending. AI categorized expenses and suggested realistic budgets. I saved money without feeling restricted. It improved my financial discipline.",
    toolsUsed: ["Finance AI"],
    location: "Chennai, India",
  },
  {
    id: 69,
    name: "Veronica",
    ageGroup: "adults",
    title: "AI Improved My Writing",
    role: "Content Writer",
    story:
      "Writer’s block made deadlines hard to meet. AI suggested outlines, phrasing, and corrections. I completed articles faster with better quality. My clients appreciated the improvement.",
    toolsUsed: ["Writing AI"],
    location: "Madrid, Spain",
  },
  {
    id: 70,
    name: "Hisham",
    ageGroup: "adults",
    title: "AI Helped With Daily Planning",
    role: "Store Manager",
    story:
      "Daily tasks piled up quickly. AI organised my schedule and reminded me of priorities. I handled customers and staff easily. Work felt more manageable.",
    toolsUsed: ["Planner AI"],
    location: "Riyadh, Saudi Arabia",
  },

  // TEN MORE ADULTS (71–80)
  {
    id: 71,
    name: "Farida",
    ageGroup: "adults",
    title: "AI Helped Me Learn Graphic Design",
    role: "Freelancer",
    story:
      "Learning design tools was intimidating. AI taught me step-by-step and explained color theory. My skills improved quickly and I took client orders. It changed my career path.",
    toolsUsed: ["Design Tutor AI"],
    location: "Cairo, Egypt",
  },
  {
    id: 72,
    name: "Ben",
    ageGroup: "adults",
    title: "AI Helped Me Build Better Presentations",
    role: "Consultant",
    story:
      "Preparing presentations used to take days. AI drafted slides and structured content neatly. I only refined the visuals. Clients appreciated the clarity instantly.",
    toolsUsed: ["Slide Maker AI"],
    location: "Sydney, Australia",
  },
  {
    id: 73,
    name: "Karishma",
    ageGroup: "adults",
    title: "AI Helped Me Balance Work and Home",
    role: "Architect",
    story:
      "Time management was always difficult. AI created a smart routine that fit both work and home tasks. I followed it and felt more balanced. My stress levels went down noticeably.",
    toolsUsed: ["Routine Planner AI"],
    location: "Pune, India",
  },
  {
    id: 74,
    name: "Omar",
    ageGroup: "adults",
    title: "AI Guided Me in Fitness",
    role: "IT Manager",
    story:
      "Going to the gym felt confusing without a plan. AI created workouts and monitored my form. I exercised safely and effectively. My energy levels increased within weeks.",
    toolsUsed: ["Fitness AI"],
    location: "Doha, Qatar",
  },
  {
    id: 75,
    name: "Helena",
    ageGroup: "adults",
    title: "AI Helped Me Run My Boutique",
    role: "Shop Owner",
    story:
      "Managing designs, captions, and pricing was tiring. AI generated quick descriptions and helped me schedule posts. Customers engaged more with my page. My business grew steadily.",
    toolsUsed: ["Business Support AI"],
    location: "Lisbon, Portugal",
  },
  {
    id: 76,
    name: "Ankit",
    ageGroup: "adults",
    title: "AI Made Technical Learning Easier",
    role: "Engineer",
    story:
      "Complex documentation discouraged me. AI summarized pages into easy explanations. I understood frameworks faster than before. Work became smoother and less stressful.",
    toolsUsed: ["Tech Tutor AI"],
    location: "Hyderabad, India",
  },
  {
    id: 77,
    name: "Marina",
    ageGroup: "adults",
    title: "AI Helped Me Plan My Diet",
    role: "Designer",
    story:
      "I struggled to maintain a healthy diet. AI created personalised meal plans with options I enjoyed. I followed them consistently and felt lighter. It improved my lifestyle.",
    toolsUsed: ["Diet Planner AI"],
    location: "Rome, Italy",
  },
  {
    id: 78,
    name: "Jamal",
    ageGroup: "adults",
    title: "AI Helped Me With Accounting",
    role: "Small Business Owner",
    story:
      "Tracking transactions used to take hours. AI automated entries and analyzed expenses. I managed finances more confidently. It saved me from hiring extra help.",
    toolsUsed: ["Accounting AI"],
    location: "Nairobi, Kenya",
  },
  {
    id: 79,
    name: "Catherine",
    ageGroup: "adults",
    title: "AI Improved My Mental Wellness",
    role: "Teacher",
    story:
      "Work stress made it hard to relax. AI guided me through short breathing exercises and calming sessions. My mood improved daily. I felt more present and positive.",
    toolsUsed: ["Mental Health AI"],
    location: "London, UK",
  },
  {
    id: 80,
    name: "Raj",
    ageGroup: "adults",
    title: "AI Helped Me Improve Communication",
    role: "Team Lead",
    story:
      "I often struggled to phrase messages politely. AI suggested better alternatives instantly. My emails became clearer and professional. My team noticed the difference.",
    toolsUsed: ["Communication AI"],
    location: "Delhi, India",
  },

  // ------------------------------------------------------------
  // SENIORS (20 Stories)
  // ------------------------------------------------------------
  {
    id: 81,
    name: "Srinivas",
    ageGroup: "seniors",
    title: "AI Helped Me Use My Smartphone Better",
    role: "Retired Teacher",
    story:
      "I felt nervous pressing buttons on my phone. AI explained features in simple steps. I learned to send photos and video call family. I felt more connected than ever.",
    toolsUsed: ["Phone Guide AI"],
    location: "Chennai, India",
  },
  {
    id: 82,
    name: "Margaret",
    ageGroup: "seniors",
    title: "AI Helped Me Stay in Touch",
    role: "Retired Nurse",
    story:
      "Typing long messages was difficult for me. AI wrote warm messages from my thoughts. My grandchildren loved hearing from me more often. It made my days brighter.",
    toolsUsed: ["Message Assistant AI"],
    location: "London, UK",
  },
  {
    id: 83,
    name: "Anand",
    ageGroup: "seniors",
    title: "AI Helped Me Read Again",
    role: "Retired Engineer",
    story:
      "My eyesight weakened, making reading difficult. AI audio reader narrated books clearly. I enjoyed stories without strain. It felt like rediscovering an old hobby.",
    toolsUsed: ["Reading AI"],
    location: "Mysuru, India",
  },
  {
    id: 84,
    name: "Fatima",
    ageGroup: "seniors",
    title: "AI Helped Me Try New Recipes",
    role: "Home Cook",
    story:
      "I hesitated trying modern dishes. AI suggested recipes and guided me step by step. I cooked confidently and surprised my family. It became a fun daily activity.",
    toolsUsed: ["Recipe AI"],
    location: "Abu Dhabi, UAE",
  },
  {
    id: 85,
    name: "George",
    ageGroup: "seniors",
    title: "AI Helped Me Manage My Health",
    role: "Retired Accountant",
    story:
      "Keeping track of medications was confusing. AI set reminders and organized reports. I followed everything easily and felt less anxious. Doctor visits became smoother.",
    toolsUsed: ["Health Manager AI"],
    location: "New York, USA",
  },
  {
    id: 86,
    name: "Latha",
    ageGroup: "seniors",
    title: "AI Helped Me Return to Singing",
    role: "Retired Music Teacher",
    story:
      "I stopped practicing after retirement. AI voice tutor corrected my pitch gently. I practiced regularly and regained confidence. Singing became joyful again.",
    toolsUsed: ["Voice Tutor AI"],
    location: "Kerala, India",
  },
  {
    id: 87,
    name: "Hiroshi",
    ageGroup: "seniors",
    title: "AI Helped Me Explore More Books",
    role: "Retired Professor",
    story:
      "I loved world literature but language barriers stopped me. AI translated books instantly. I enjoyed stories from many cultures. It expanded my reading world.",
    toolsUsed: ["Translation AI"],
    location: "Osaka, Japan",
  },
  {
    id: 88,
    name: "Carol",
    ageGroup: "seniors",
    title: "AI Helped Me Stay Active Daily",
    role: "Retired Nurse",
    story:
      "I wanted to stay healthy but needed safe exercises. AI suggested gentle routines based on my condition. I followed them daily and felt more energetic. It improved my lifestyle.",
    toolsUsed: ["Exercise AI"],
    location: "Boston, USA",
  },
  {
    id: 89,
    name: "Hamza",
    ageGroup: "seniors",
    title: "AI Helped Me Exercise Safely",
    role: "Retired Driver",
    story:
      "I worried about joint pain. AI guided me through low-impact exercises with correct form. I practiced slowly and felt better. My doctor appreciated my consistency.",
    toolsUsed: ["Fitness AI"],
    location: "Doha, Qatar",
  },
  {
    id: 90,
    name: "Rosa",
    ageGroup: "seniors",
    title: "AI Helped Me Paint Again",
    role: "Retired Artist",
    story:
      "I lacked inspiration after years of not painting. AI suggested themes and color schemes. I created new artwork happily. It brought creativity back into my life.",
    toolsUsed: ["Art Inspiration AI"],
    location: "Lisbon, Portugal",
  },

  // TEN MORE SENIORS (91–100)
  {
    id: 91,
    name: "Vijay",
    ageGroup: "seniors",
    title: "AI Helped Me Manage Daily Tasks",
    role: "Retired Officer",
    story:
      "Remembering small tasks became difficult. AI reminded me gently and organized my list. My days became smoother. I felt more independent.",
    toolsUsed: ["Daily Assistant AI"],
    location: "Delhi, India",
  },
  {
    id: 92,
    name: "Noura",
    ageGroup: "seniors",
    title: "AI Helped Me Stay Connected",
    role: "Grandmother",
    story:
      "I missed my family living abroad. AI helped me send voice messages and photo captions easily. I stayed in touch regularly. It made me feel close despite distance.",
    toolsUsed: ["Chat Helper AI"],
    location: "Cairo, Egypt",
  },
  {
    id: 93,
    name: "Donald",
    ageGroup: "seniors",
    title: "AI Helped Me Understand News",
    role: "Retired Journalist",
    story:
      "Long articles tired me quickly. AI summarized news into short points. I stayed updated without stress. It made my reading easier.",
    toolsUsed: ["News AI"],
    location: "Florida, USA",
  },
  {
    id: 94,
    name: "Lakshmi",
    ageGroup: "seniors",
    title: "AI Helped Me Track My Health",
    role: "Retired Teacher",
    story:
      "Managing health appointments was confusing. AI reminded me of checkups and medication. I felt more secure and responsible. My routine became simpler.",
    toolsUsed: ["Health Tracking AI"],
    location: "Chennai, India",
  },
  {
    id: 95,
    name: "Bruce",
    ageGroup: "seniors",
    title: "AI Helped Me Stay Curious",
    role: "Retired Scientist",
    story:
      "I enjoyed learning but reading papers was tiring. AI explained concepts in simple language. I learned something new every day. Curiosity stayed alive.",
    toolsUsed: ["Explain AI"],
    location: "California, USA",
  },
  {
    id: 96,
    name: "Asha",
    ageGroup: "seniors",
    title: "AI Helped Me Try New Hobbies",
    role: "Retired Nurse",
    story:
      "I became bored after retirement. AI suggested hobbies like gardening and easy crafts. I tried them happily and felt more active. It brought joy into my routine.",
    toolsUsed: ["Hobby AI"],
    location: "Pune, India",
  },
  {
    id: 97,
    name: "Dmitri",
    ageGroup: "seniors",
    title: "AI Helped Me Practice Language",
    role: "Retired Banker",
    story:
      "I wanted to learn English slowly. AI practiced conversations with me daily. I improved without feeling embarrassed. It made me confident.",
    toolsUsed: ["Language Coach AI"],
    location: "Moscow, Russia",
  },
  {
    id: 98,
    name: "Olivia",
    ageGroup: "seniors",
    title: "AI Helped Me Stay Organised",
    role: "Retired Lecturer",
    story:
      "I forgot dates often. AI managed my reminders and saved important information. Life became more manageable. I felt young again.",
    toolsUsed: ["Reminder AI"],
    location: "Melbourne, Australia",
  },
  {
    id: 99,
    name: "Mohammed",
    ageGroup: "seniors",
    title: "AI Helped Me Reduce Loneliness",
    role: "Retired Chef",
    story:
      "Living alone sometimes felt quiet. AI chatted with me and suggested activities. I felt less lonely and more cheerful. It added warmth to my days.",
    toolsUsed: ["Companion AI"],
    location: "Dubai, UAE",
  },
  {
    id: 100,
    name: "Grace",
    ageGroup: "seniors",
    title: "AI Helped Me Stay Mentally Active",
    role: "Retired Professor",
    story:
      "I wanted to keep my brain sharp. AI gave me daily puzzles and memory exercises. I enjoyed solving them with morning tea. It kept my mind lively.",
    toolsUsed: ["Brain Trainer AI"],
    location: "London, UK",
  },
];
