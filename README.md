# 📖 3D Book CV

An interactive **3D book-style resume** built with **HTML, CSS, and JavaScript**.  
It simulates a realistic page-flipping effect where your CV/portfolio is presented like a physical book.

---

## 🚀 Demo
👉 [Live Demo](https://your-username.github.io/3d-book-cv/)  
*(Replace with your hosted link)*

---

## ✨ Features
- 📘 Realistic 3D book with page flip animation  
- ⌨️ Keyboard navigation (← →)  
- 📱 Mobile-friendly (optional swipe support)  
- 🖨️ Print-friendly stylesheet for PDF export  
- 🎨 Easily customizable design (colors, fonts, content)  
- ⚡ Lightweight — only HTML, CSS & Vanilla JS  

---

## 🛠️ Tech Stack
- **HTML5**  
- **CSS3** (Flexbox, Grid, 3D transforms)  
- **JavaScript (ES6+)**  

---

## 📂 Project Structure
3d-book-cv/
├─ index.html # Main entry
├─ css/
│ ├─ style.css # Main styles
│ └─ print.css # Print-friendly styles
├─ js/
│ ├─ app.js # Flip logic & navigation
│ └─ utils.js # Helper functions (optional)
├─ assets/
│ ├─ images/ # Profile & icons
│ └─ fonts/ # Custom fonts (if any)
├─ data/
│ └─ resume.json # Optional JSON-based content
└─ README.md


---

## ⚡ Quick Start

1. Clone the repository:
```bash
git clone https://github.com/Shine124-sys/3d-book-cv.git
cd 3d-book-cv


Open index.html directly in your browser
OR run a local server:

# Python 3
python -m http.server 8000
# Visit http://localhost:8000

📝 Usage

Navigation:

Click corners or navigation buttons to flip pages

Use Arrow keys ← → to move

(Optional) swipe left/right on mobile

Editing Content:

Open index.html and replace the text inside .page sections

Or update data/resume.json (if JSON-driven)

Example:

<div class="page page-1">
  <h1>Shoriful Shine</h1>
  <p>Researcher & Engineer</p>
</div>

🎨 Customization

Change colors & sizes in style.css:

:root {
  --book-width: 900px;
  --book-height: 600px;
  --cover-color: #0f172a;
  --paper-color: #fffaf0;
}


Update flip animations with:

transition: transform 0.8s cubic-bezier(.77,.2,.05,1.0);

🌍 Deployment

GitHub Pages: push to main and enable Pages

Netlify/Vercel: drag & drop or connect repo

🔧 Troubleshooting

Pages appear flat → Check transform-style: preserve-3d;

Backface showing → Add backface-visibility: hidden;

Touch not working → Add touch event listeners or use hammer.js