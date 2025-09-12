// Typing animation for Home page
const typingText = "Find Your Dream Job";
let i = 0;
function typeWriter() {
  if (document.getElementById("typing")) {
    if (i < typingText.length) {
      document.getElementById("typing").innerHTML += typingText.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }
}
window.onload = typeWriter;

// Job Trends Chart
if (document.getElementById("jobChart")) {
  const ctx = document.getElementById("jobChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["2021", "2022", "2023", "2024", "2025"],
      datasets: [{
        label: "Job Openings",
        data: [120, 180, 250, 300, 400],
        backgroundColor: "rgba(0, 123, 255, 0.6)"
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } }
    }
  });
}
