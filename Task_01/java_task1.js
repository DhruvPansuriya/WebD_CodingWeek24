let home = document.querySelector("#HOME");
let options_all = document.querySelectorAll(".bar2_box");
let popular_box = document.querySelector("#popular_box");
let latest_box = document.querySelector("#latest_box");

// To Show current date
var currentDate = new Date();
var options = { year: 'numeric', month: 'long', day: 'numeric' };
var formattedDate = currentDate.toLocaleDateString('en-US', options);
document.getElementById('date').textContent = formattedDate;

for (let option of options_all) {
    option.addEventListener("mouseenter", () => {
        option.style.backgroundColor = '#140f09';
        option.style.color = 'white';
        home.style.backgroundColor = 'white';
        home.style.color = '#140f09';
    })
    option.addEventListener("mouseleave", () => {
        option.style.backgroundColor = 'white';
        option.style.color = '#140f09';
        home.style.backgroundColor = '#140f09';
        home.style.color = 'white';
    })
}

popular_box.addEventListener("mouseenter", () => {
    popular_box.style.backgroundColor = '#140f09';
    popular_box.style.color = 'white';
    popular_box.style.boxShadow = "4px 4px 8px rgba(0, 0, 0, 0.25)";
    latest_box.style.backgroundColor = 'white';
    latest_box.style.color = '#140f09';
    latest_box.style.boxShadow = "4px 4px 8px rgba(0, 0, 0, 0.1)";
})
popular_box.addEventListener("mouseleave", () => {
    popular_box.style.backgroundColor = 'white';
    popular_box.style.color = '#140f09';
    popular_box.style.boxShadow = "4px 4px 8px rgba(0, 0, 0, 0.1)";
    latest_box.style.backgroundColor = '#140f09';
    latest_box.style.color = 'white';
    latest_box.style.boxShadow = "4px 4px 8px rgba(0, 0, 0, 0.25)";
})