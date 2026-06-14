
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
