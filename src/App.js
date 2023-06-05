import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Qualification from "./components/qualification/Qualification";
import ScrollUp from "./components/scrollup/ScrollUp";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Testimonial from "./components/testimonial/Testimonial";
import Work from "./components/work/Work";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApEm0hmq0wlWYuCQS6exqIH9fqJINwbMc",
  authDomain: "portfolio-9eab0.firebaseapp.com",
  projectId: "portfolio-9eab0",
  storageBucket: "portfolio-9eab0.appspot.com",
  messagingSenderId: "981034957892",
  appId: "1:981034957892:web:027215ff649bb4789fd011",
  measurementId: "G-3LCF095QLL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Services />
        <Work />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
