let currentQuestion = 0;
let answers = [];

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
      { text: "Helping people", value: "help" },
      { text: "Making content", value: "content" },
      { text: "Building things", value: "build" }
    ]
  },
  {
    q: "What best describes you?",
    options: [
      { text: "Creative", value: "creative" },
      { text: "Outgoing", value: "social" },
      { text: "Tech-savvy", value: "digital" },
      { text: "Hands-on", value: "hands" }
    ]
  },
  {
    q: "What income style do you want?",
    options: [
      { text: "Fast cash", value: "fast" },
      { text: "Steady income", value: "steady" },
      { text: "Big scalable income", value: "scalable" },
      { text: "Passive income", value: "passive" }
    ]
  },
  {
    q: "Where do you prefer working?",
    options: [
      { text: "At home", value: "online" },
      { text: "In my neighborhood", value: "local" },
      { text: "On social media", value: "digital" },
      { text: "Hands-on environments", value: "hands" }
    ]
  },
  {
    q: "What motivates you most?",
    options: [
      { text: "Money", value: "money" },
      { text: "Freedom", value: "freedom" },
      { text: "Creativity", value: "creative" },
      { text: "Helping people", value: "help" }
    ]
  },
  {
    q: "How fast do you want results?",
    options: [
      { text: "Very fast", value: "fast" },
      { text: "Medium speed", value: "medium" },
      { text: "Long-term growth", value: "long" }
    ]
  },
  {
    q: "Best environment?",
    options: [
      { text: "At home", value: "online" },
      { text: "Out in my area", value: "local" },
      { text: "Creative space", value: "creative" }
    ]
  },
  {
    q: "What sounds most exciting?",
    options: [
      { text: "Running a business", value: "sell" },
      { text: "Going viral online", value: "content" },
      { text: "Helping clients", value: "help" },
      { text: "Building a brand", value: "build" }
    ]
  }
];

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
    alert("Please select an answer.");
    return;
  }

  answers.push(selected.value);
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  document.getElementById("quizSection").style.display = "none";
  document.getElementById("resultsSection").style.display = "block";

  const businesses = [
    {
      name: "Babysitting Business",
      tags: ["social", "help", "local"],
      difficulty: "Easy",
      cost: "$0",
      earnings: "$15–25/hour",
      why: "You enjoy helping people and local work.",
      step: "Make a simple flyer and ask 3 neighbors."
    },
    {
      name: "Press-On Nail Business",
      tags: ["creative", "sell", "build"],
      difficulty: "Medium",
      cost: "$20–$100",
      earnings: "$200–$2,000/month",
      why: "You like creativity and selling products.",
      step: "Design 3 nail sets and post them online."
    },
    {
      name: "TikTok Content Creator",
      tags: ["content", "digital", "build"],
      difficulty: "Medium",
      cost: "$0",
      earnings: "$0–$10,000+/month",
      why: "You like social media and content creation.",
      step: "Post 1 video daily for 7 days."
    },
    {
      name: "Dog Walking Business",
      tags: ["local", "help", "social"],
      difficulty: "Easy",
      cost: "$0",
      earnings: "$10–$30/hour",
      why: "You like flexible local work.",
      step: "Ask neighbors if they need dog walking help."
    },
    {
      name: "Digital Etsy Shop",
      tags: ["online", "build", "creative"],
      difficulty: "Medium",
      cost: "$0–$30",
      earnings: "$100–$5,000/month",
      why: "You like online creative work.",
      step: "Create and upload your first digital product."
    },
    {
      name: "Tutoring Business",
      tags: ["help", "social", "steady"],
      difficulty: "Medium",
      cost: "$0",
      earnings: "$20–$40/hour",
      why: "You enjoy helping others learn.",
      step: "Offer tutoring at school or online."
    },
    {
      name: "Car Wash Service",
      tags: ["hands", "local", "fast"],
      difficulty: "Easy",
      cost: "$0–$10",
      earnings: "$15–$50/hour",
      why: "You prefer hands-on local work.",
      step: "Offer car washes to family or neighbors."
    },
    {
      name: "Social Media Manager",
      tags: ["digital", "content", "online"],
      difficulty: "Hard",
      cost: "$0",
      earnings: "$200–$3,000/month",
      why: "You understand social media.",
      step: "Help a small business post content weekly."
    }
  ];

  let scores = {};

  answers.forEach(a => {
    businesses.forEach(b => {
      if (b.tags.includes(a)) {
        scores[b.name] = (scores[b.name] || 0) + 1;
      }
    });
  });

  let ranked = businesses
    .map(b => ({
      ...b,
      score: scores[b.name] || 0
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  document.getElementById("resultsBox").innerHTML = ranked.map(b => `
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
    "Pick ONE idea and start within 24 hours. Action beats planning.";

}
