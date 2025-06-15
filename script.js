function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

window.addEventListener('DOMContentLoaded', () => {
const element = document.querySelector('.section_text_p2');
const length = element.textContent.length;

// Use ch units — 1ch = width of '0' in monospace
element.style.setProperty('--typing-steps', length);
element.style.setProperty('--typing-duration', `${length * 0.1}s`);
element.style.width = `${length}ch`; // Ensures cursor ends at last letter
});

const btn = document.querySelector("#btnemail");
        const btnText = document.querySelector("#btnText");

        btn.onclick = () => {
            btnText.innerHTML = "Thanks";
            btn.classList.add("active");
        };