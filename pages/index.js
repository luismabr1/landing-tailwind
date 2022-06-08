
import Head from 'next/head'
import Faqs from '../components/Faqs'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Highlighted from '../components/Highlighted'
import Navbar from '../components/Navbar'
import Recomended from '../components/Recomended'



export default function Home() {
/*   const [myElementIsVisible, updateMyElementIsVisible] = useState();
  const myRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      updateMyElementIsVisible(entry.isIntersecting);
    });
    console.log(myRef.current)
     observer.observe(myRef.current);
  }, []); */


/* window.addEventListener('scroll', ()=>{
  console.log('???', myRef.current)
}) */
  

  return (
<>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
{/*           <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" /> */}
          <title>Platzi Travel</title>
        </Head>
            <section className="w-auto h-screen">
              <Navbar/>

              <Hero />

              <div className="w-full h-auto lg:px-2" >
                <Recomended />

                <Highlighted />
                <Faqs />
                
                <Footer/>
              </div>
            </section>

</>
  )
}