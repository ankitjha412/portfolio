# 🌟 Project Portfolio Website

This is a professional portfolio website built using **React + Tailwind CSS** with unique **hover glow effects** and a modern UI.  
The design uses subtle gradients, glassmorphism, and soft glowing hover states to make the UI feel elegant without being overwhelming.

---

## 🚀 Features
- 🎨 **Modern UI Design** – Minimal, clean, and professional look.
- ✨ **Custom Glow Effects** – Unique card hover glow with subtle animation.
- 🌈 **Gradient Text** – Stylish gradient headings using Tailwind utilities.
- 🪟 **Glassmorphism** – Semi-transparent blurred backgrounds.
- 📱 **Responsive** – Fully responsive for desktop, tablet, and mobile.

---

## 📂 Project Structure
project-root/
│── src/
│ ├── components/
│ │ └── Card.jsx
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
│── public/
│── package.json
│── tailwind.config.js
│── README.md

css
Copy code

---

## 🎨 CSS Highlights
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body, #root {
  height: 100%;
  background: linear-gradient(to right, #0f0f0f, #1a1a1a);
}

.gradient-text {
  @apply bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text;
}

.section {
  @apply py-24 md:py-32;
}

.card {
  @apply relative rounded-2xl border border-white/10 bg-neutral-900/50 backdrop-blur shadow-md transition-transform duration-300;
}

.card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 2px;
  background: linear-gradient(135deg, #a855f7, #ec4899, #f87171);
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.card:hover::before {
  opacity: 1;
}

.card:hover {
  transform: translateY(-6px) scale(1.02);
}
⚡ Installation & Usage
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/portfolio.git
cd portfolio
Install dependencies:

bash
Copy code
npm install
Start development server:

bash
Copy code
npm run dev
Build for production:

bash
Copy code
npm run build
📸 Preview
(Add a screenshot or GIF of your project here)

📜 License
This project is licensed under the MIT License – feel free to use and modify it for your own portfolio.

🙌 Acknowledgements
Tailwind CSS

React

Inspiration from modern UI/UX design trends

