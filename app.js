
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
    showResults();
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
