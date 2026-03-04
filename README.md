# JUMAIL.WM — Portfolio Website

Personal portfolio website for **Mohammed Jumail** showcasing skills, projects, experience, education, certifications, and contact details.

## 🔗 Live Demo
- https://jumail-website-0039.vercel.app/

---

## ✨ Features
- Modern responsive UI (dark theme)
- Skills, Projects, Experience, Education & Certifications sections
- Testimonials section
- Contact form + social links
- Smooth animations with Framer Motion

---

## 🛠 Tech Stack
- **Vite**
- **React + TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **Framer Motion**

---

## 🚀 Getting Started (Local Setup)

### 1- Clone the repo
```sh
git clone <YOUR_GIT_URL>
````

### 2) Go to project folder

```sh
cd <YOUR_PROJECT_NAME>
```

### 3- Install dependencies

```sh
npm install
```

### 4- Run dev server

```sh
npm run dev
```

Your site will run on:

* [http://localhost:5173](http://localhost:5173)

---

## 📦 Build for Production

```sh
npm run build
npm run preview
```

---

## ✉️ Contact Form Setup

### Option A: Supabase Edge Function (Current Setup)

If you are using:

```ts
supabase.functions.invoke("send-contact-email", ...)
```

Make sure:

* Supabase project is connected
* `send-contact-email` edge function exists and deployed
* Environment variables are configured in Lovable / hosting

### Option B: Web3Forms (Easy Alternative)

If you want simple HTML/API form:

* Create an access key from Web3Forms
* Replace access key in your form request

---

## 🧩 Project Structure (Important Files)

* `src/components/sections/` → All sections (About, Skills, Projects, Experience, Education, Contact)
* `src/pages/` → Pages (if any)
* `src/integrations/supabase/` → Supabase client (if used)

---

## 🌍 Deploy

### Deploy with Vercal

1. Open the project: https://jumail-website-0039.vercel.app/

### Custom Domain

---

## 👤 Author

**Mohammed Jumail**

* LinkedIn: [https://www.linkedin.com/in/jumail/](https://www.linkedin.com/in/jumail/)
* GitHub: [https://github.com/JUMAIL-WM](https://github.com/JUMAIL-WM)
* Email: [jumailwm@gmail.com](mailto:jumailwm@gmail.com)
* Location: Ninthavur, Sri Lanka

---

## 📄 License

This project is for personal portfolio use.

# JUMAIL-WEBSITE
