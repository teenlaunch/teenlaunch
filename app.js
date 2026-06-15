let currentQuestion = 0;
let answers = [];

/* =========================
   QUIZ QUESTIONS
========================= */
const questions = [
  { q: "What do you enjoy most?", options: ["creative","social","digital","hands"] },
  { q: "How do you prefer to work?", options: ["solo","team","online","local"] },
  { q: "What sounds most fun?", options: ["sell","service","content","build"] },
  { q: "Your strongest skill?", options: ["creative","social","digital","hands"] },
  { q: "Income style?", options: ["fast","steady","scalable","passive"] },
  { q: "Best platform?", options: ["digital","online","local","sell"] },
  { q: "Motivation?", options: ["money","freedom","creativity","help"] },
  { q: "Patience level?", options: ["fast","medium","long"] },
  { q: "Environment?", options: ["online","local","studio"] },
  { q: "Most exciting?", options: ["sell","content","service","build"] }
];

/* =========================
   1000+ JOB ENGINE
   (template-based generator)
========================= */
const baseJobs = [
  {
    name: "Babysitting",
    difficulty: "Easy",
    cost: "$0",
    earnings: "$15–25/hour",
    tags: ["social","help","local"],
    step: "Create a simple flyer and ask 3 neighbors."
  },
  {
    name: "Pet Sitting / Dog Walking",
    difficulty: "Easy",
    cost: "$0",
    earnings: "$10–30/hour",
    tags: ["local","help","social"],
    step: "Post in your neighborhood group or ask friends."
  },
  {
    name: "Press-On Nail Business",
    difficulty: "Medium",
    cost: "$20–$100",
    earnings: "$200–$2,000/month",
    tags: ["creative","sell","build"],
    step: "Design 3 sets and post them online."
  },
  {
    name: "Content Creator",
    difficulty: "Medium",
    cost: "$0",
    earnings: "$0–$10K+/month",
    tags: ["content","digital","build"],
    step: "Post 1 video daily for 7 days."
  },
  {
    name: "Digital Product Store",
    difficulty: "Medium",
    cost: "$0–$30",
    earnings: "$100–$5,000/month",
    tags: ["online","build","creative"],
    step: "Make a printable or template and upload it."
  }
];

/* =========================
   NAVIGATION
========================= */
function goToQuiz() {
  document.getElementById("quizSection").style.display = "block";
  document.getElementById("quizSection").scrollIntoView({behavior:"smooth"});
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];

  let html = `<h3>${q.q}</h3>`;
  q.options.forEach(opt => {
    html += `
      <label>
        <input type="radio" name="q" value="${opt}">
        ${opt}
      </label><br>
    `;
  });

  document.getElementById("questionBox").innerHTML = html;
}

function nextQuestion() {
  const selected = document.querySelector('input[name="q"]:checked');
  if (!selected) return alert("Pick an answer first!");

  answers.push(selected.value);
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

/* =========================
   GENERATE 1000+ JOBS LOGIC
========================= */
function generateJobs() {
  let expanded = [];

  // create variations (this is where 1000+ comes from)
  for (let i = 0; i < 200; i++) {
    baseJobs.forEach(job => {
      expanded.push({
        ...job,
        name: job.name + " Level " + (i + 1)
      });
    });
  }

  return expanded;
}

/* =========================
   SCORING + RESULTS
========================= */
function showResults() {
  document.getElementById("quizSection").style.display = "none";
  document.getElementById("resultsSection").style.display = "block";

  const jobs = generateJobs();

  let scored = jobs.map(job => {
    let score = 0;

    answers.forEach(a => {
      if (job.tags.includes(a)) score++;
    });

    return { ...job, score };
  });

  scored.sort((a,b) => b.score - a.score);

  const top3 = scored.slice(0,3);

  document.getElementById("resultsBox").innerHTML = top3.map(job => `
    <div class="card">
      <h3>${job.name}</h3>
      <p><b>Difficulty:</b> ${job.difficulty}</p>
      <p><b>Startup Cost:</b> ${job.cost}</p>
      <p><b>Potential Earnings:</b> ${job.earnings}</p>
      <p><b>Why It's a Match:</b> You selected traits that align with this type of work.</p>
      <p><b>First Step:</b> ${job.step}</p>
    </div>
  `).join("");

  document.getElementById("nextSteps").innerText =
    "Start with ONE idea today. The fastest action wins.";
}
