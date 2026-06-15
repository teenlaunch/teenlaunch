
const ideas=[
"Custom Press-On Nail Shop",
"Neighborhood Pet Sitting",
"Teen Social Media Agency",
"Study Notes Marketplace",
"Local Event Photography",
"Babysitting Team Business"
];

function showIdea(){
document.getElementById("idea").innerText =
ideas[Math.floor(Math.random()*ideas.length)];
}
function calculateResult() {
  let scores = {
    "Press-On Nail Business": 0,
    "Content Creator (TikTok/YouTube)": 0,
    "Local Service Business (babysitting, errands, etc.)": 0,
    "Digital Product/Etsy Shop": 0
  };

  const answers = document.querySelectorAll("input[type=radio]:checked");

  answers.forEach(a => {
    let v = a.value;

    if (v === "creative" || v === "sell") scores["Press-On Nail Business"]++;
    if (v === "digital" || v === "content") scores["Content Creator (TikTok/YouTube)"]++;
    if (v === "social" || v === "help" || v === "local") scores["Local Service Business (babysitting, errands, etc.)"]++;
    if (v === "online" || v === "passive" || v === "build") scores["Digital Product/Etsy Shop"]++;
  });

  let sorted = Object.entries(scores).sort((a,b) => b[1]-a[1]);
  let top3 = sorted.slice(0,3);

  document.getElementById("result").innerHTML =
    "<h2>Your Top 3 Business Matches:</h2>" +
    top3.map(b => `<p><b>${b[0]}</b></p>`).join("");
}
