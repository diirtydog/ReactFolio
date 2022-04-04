import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import './App.css';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  
  const [categories] = useState([
    {
      name: "portfolio",
      description:
        "Photos and links to some of my favorite pojects I've completed so far!",
    },
    {
      name: "resume",
      description: "The Full Monty"
    },
]);
const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
            <Resume></Resume>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
