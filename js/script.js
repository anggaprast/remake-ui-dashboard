const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["02-06-2024", "09-06-2024", "16-06-2024", "23-06-2024", "30-06-2024"],
    datasets: [
      {
        label: "Plan",
        data: [0, 0, 100, 100, 100],
        borderWidth: 3,
        backgroundColor: "#9BD0F5",
        borderColor: "#9BD0F5",
        radius: 5,
      },
      {
        label: "Actual",
        data: [0, 0, 30],
        borderWidth: 3,
        backgroundColor: "#FF6384",
        borderColor: "#FF6384",
        radius: 5,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    responsive: true,
  },
});
