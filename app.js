
let currentQuestion = 0;

const questions = [
  {
    q: "What do you enjoy most?",
    options: [
      { text: "Creating/designing", value: "creative" },
      { text: "Talking to people", value: "social" },
      { text: "Using tech/social media", value: "digital" },
      { text: "Working with hands", value: "hands" }
    ]
  },
  {
    q: "How do you prefer to work?",
    options: [
      { text: "Alone", value: "solo" },
      { text: "With others", value: "team" },
      { text: "Online", value: "online" },
      { text: "In-person locally", value: "local" }
    ]
  },
  {
    q: "What sounds most fun?",
    options: [
      { text: "Selling products", value: "sell" },
      { text: "Helping people", value: "service" },
      { text: "Making content", value: "content" },
      { text: "Building things", value: "build" }
    ]
  },
  {
    q: "Your strongest skill?",
    options: [
      { text: "Creativity", value: "creative" },
      { text: "Communication", value: "social" },
      { text: "Tech/social media", value: "digital" },
      { text: "Hands-on skills", value: "hands" }
    ]
  },
  {
    q: "Ideal income style?",
    options: [
      { text: "Quick money", value: "fast" },
      { text: "Steady growth", value: "steady" },
      { text: "Big scalable income", value: "scalable" },
      { text: "Passive income", value: "passive" }
    ]
  },
  {
    q: "Best platform?",
    options: [
      { text: "TikTok/Instagram", value: "digital" },
      { text: "Website", value: "online" },
      { text: "Local community", value: "local" },
      { text: "Etsy/shop", value: "sell" }
    ]
  },
  {
    q: "What motivates you most?",
    options: [
      { text: "Money", value: "money" },
      { text: "Freedom", value: "freedom" },
      { text: "Creativity", value: "creativity" },
      { text: "Helping others", value: "help" }
    ]
  },
  {
    q: "Patience level?",
    options: [
      { text: "Fast results", value: "fast" },
      { text: "Medium", value: "medium" },
      { text: "Long-term build", value: "long" }
    ]
  },
  {
    q: "Best environment?",
    options: [
      { text: "At home", value: "online" },
      { text: "Out locally", value: "local" },
      { text: "Creative space", value: "studio" }
    ]
  },
  {
    q: "Most exciting business?",
    options: [
      { text: "Running a shop", value: "sell" },
      { text: "Going viral", value: "content" },
      { text: "Helping clients", value: "service" },
      { text: "Building a brand", value: "build" }
    ]
  }
];

let answers = [];

function goToQuiz() {
  document.getElementById("quizSection").style.display = "block";
  document.getElementById("quizSection").scrollIntoView({ behavior: "smooth" });
  showQuestion();
}

function showQuestion() {
  let q = questions[currentQuestion];

  let html = `<h3>${q.q}</h3>`;

  q.options.forEach(opt => {
    html += `
      <label>
        <input type="radio" name="q" value="${opt.value}">
        ${opt.text}
      </label><br>
    `;
  });

  document.getElementById("questionBox").innerHTML = html;
}

function nextQuestion() {
  let selected = document.querySelector('input[name="q"]:checked');

  if (!selected) {
    alert("Pick an answer first!");
    return;
  }

  answers.push(selected.value);
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
  function showResults() {
  document.getElementById("quizSection").style.display = "none";
  document.getElementById("resultsSection").style.display = "block";

  let scoreMap = {};

  // HUGE expanded business database (this is what makes it "generate more jobs")
  const businesses = [
    {
      name: "Babysitting Business",
      tags: ["social", "help", "local"],
      difficulty: "Easy",
      cost: "$0",
      earnings: "$15–25/hour",
      why: "You selected childcare, people skills, or local work.",
      step: "Create a flyer and ask 3 neighbors if they need help."
    },
    {
      name: "Press-On Nail Business",
      tags: ["creative", "sell", "build"],
      difficulty: "Medium",
      cost: "$20–$100",
      earnings: "$200–$2,000/month",
      why: "You like creativity and selling products online.",
      step: "Design 3 nail sets and post them on TikTok or Etsy."
    },
    {
      name: "TikTok Content Creator",
      tags: ["content", "digital", "build"],
      difficulty: "Medium",
      cost: "$0",
      earnings: "$0–$10,000+/month",
      why: "You chose content creation or social media.",
      step: "Post 1 video daily for 7 days and track views."
    },
    {
      name: "Dog Walking / Pet Sitting",
      tags: ["local", "help", "social"],
      difficulty: "Easy",
      cost: "$0",
      earnings: "$10–$30/hour",
      why: "You prefer local, flexible, people-facing work.",
      step: "Ask neighbors or post on a community board."
    },
    {
      name: "Digital Product Shop (Etsy)",
      tags: ["online", "build", "creative"],
      difficulty: "Medium",
      cost: "$0–$30",
      earnings: "$100–$5,000/month",
      why: "You like online work and building systems.",
      step: "Create 1 digital planner or template and upload it."
    },
    {
      name: "Tutoring Business",
      tags: ["help", "social", "steady"],
      difficulty: "Medium",
      cost: "$0",
      earnings: "$20–$40/hour",
      why: "You enjoy helping others learn.",
      step: "Offer help in a subject you’re strong in at school."
    },
    {
      name: "Car Wash / Cleaning Service",
      tags: ["local", "hands", "fast"],
      difficulty: "Easy",
      cost: "$0–$10",
      earnings: "$15–$50/hour",
      why: "You prefer hands-on, local work.",
      step: "Offer services to neighbors or family friends."
    },
    {
      name: "Social Media Manager (Starter)",
      tags: ["digital", "content", "online"],
      difficulty: "Hard",
      cost: "$0",
      earnings: "$200–$3,000/month",
      why: "You like social media and digital work.",
      step: "Help a small business post 3 times a week."
    }
  ];

  // scoring system
  answers.forEach(ans => {
    businesses.forEach(b => {
      if (b.tags.includes(ans)) {
        scoreMap[b.name] = (scoreMap[b.name] || 0) + 1;
      }
    });
  });

  // rank results
  let ranked = businesses
    .map(b => ({
      ...b,
      score: scoreMap[b.name] || 0
    }))
    .sort((a, b) => b.score - a.score);

  let top3 = ranked.slice(0, 3);

  // render results in your requested format
  document.getElementById("resultsBox").innerHTML =
    top3.map(b => `
      <div class="card">
        <h3>${b.name}</h3>
        <p><b>Difficulty:</b> ${b.difficulty}</p>
        <p><b>Startup Cost:</b> ${b.cost}</p>
        <p><b>Potential Earnings:</b> ${b.earnings}</p>
        <p><b>Why It's a Match:</b> ${b.why}</p>
        <p><b>First Step:</b> ${b.step}</p>
      </div>
    `).join("");

  document.getElementById("nextSteps").innerText =
    "Pick ONE idea and start within 24 hours. Speed beats perfection when building your first business.";
}
  }
}

function showResults() {
  document.getElementById("quizSection").style.display = "none";
  document.getElementById("resultsSection").style.display = "block";

  let scores = {
    "Press-On Nail Business": 0,
    "Content Creator": 0,
    "Local Service Business": 0,
    "Digital/Etsy Business": 0
  };

  answers.forEach(v => {
    if (v === "creative" || v === "sell") scores["Press-On Nail Business"]++;
    if (v === "content" || v === "digital") scores["Content Creator"]++;
    if (v === "social" || v === "help" || v === "local") scores["Local Service Business"]++;
    if (v === "online" || v === "build" || v === "passive") scores["Digital/Etsy Business"]++;
  });

  let sorted = Object.entries(scores).sort((a,b) => b[1]-a[1]);
  let top3 = sorted.slice(0,3);

  document.getElementById("resultsBox").innerHTML =
    top3.map(b => `<p><b>${b[0]}</b></p>`).join("");

  document.getElementById("nextSteps").innerText =
    "Start small, test your idea, and post your progress online daily to grow faster.";
}

function sendEmail() {
  let email = document.getElementById("emailInput").value;

  if (!email.includes("@")) {
    alert("Enter a valid email");
    return;
  }

  alert("Results sent to " + email + " (demo version — connect backend later)");
}
