import './App.css';
import { useEffect,useState,useRef } from 'react';

import NavBar from './components/nav_bar';
import AboutUs from './components/About_us';
import ContactUs from './components/Contact_us';
import Products from './components/Products';



function App() {
  const [pagePosition,setPagePosition] = useState("about-us")
  const [navScrolled,setNavScrolled] = useState(false)

  const OurProductRef = useRef()
  const ContactUsRef = useRef()
  const AboutUsRef = useRef()

  const updatePagePosition=position=>{
    if (pagePosition !== position){
      setPagePosition(position)
    }
  }


  const goToPage=page=>{

    let element = null
    if (page === 'about-us'){
      element = AboutUsRef.current
    }else if(page === 'our-products'){
      element = OurProductRef.current
    }else{
      element = ContactUsRef.current
    }

    const topPos = element.getBoundingClientRect().top + window.pageYOffset

    window.scrollTo({
      top: (topPos-50), // scroll so that the element is at the top of the view
      behavior: 'smooth' // smooth scroll
    })
  }

  const handleScroll=() => {
    let productPosition = OurProductRef.current.getBoundingClientRect()
    const contactPosition = ContactUsRef.current.getBoundingClientRect().top + productPosition.height + 250
    // const productHeight = productPosition.top + productPosition.height + 200 
    productPosition = productPosition.top

    const offset=window.scrollY;
    
    if(offset > 60){
      if(navScrolled!==true){
        setNavScrolled(true)
      }
    }else{
      setNavScrolled(false)
    }


    if (offset >= productPosition && offset < contactPosition){
      updatePagePosition('our-products')
    }else if(offset >= contactPosition){
      updatePagePosition('contact-us')
    }else{
      updatePagePosition('about-us')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  return (
    <div className="App">
          <NavBar position={pagePosition} scroll_to={goToPage} navScrolled={navScrolled}/>
          <AboutUs 
            myRef={AboutUsRef} 
            scroll_to={goToPage}
          />
          <Products myRef={OurProductRef}/>
          <ContactUs myRef={ContactUsRef}/>
    </div>
  );
}

export default App;
