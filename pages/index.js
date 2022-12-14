import Head from 'next/head'
import Jumbotorn from '../components/Jumbotorn'
import NavBarHolder from '../components/NavBarHolder'
import Footer from '../components/Footer'
import MurphyContent from '../components/MurphyContent'



export default function Home() {

  const kevinMurhy = [{
    image: "KEVIN.MURPHY_blond.jpg",
    title: "FOR BLOND AND GREY HAIR",
    description: "met consectetur adipisicing elit. Doloremque quos quas quaer",

  },
  {
    image: "KEVIN.MURPHY_MEDRES.jpg",
    title: "COLOR ME",
    description: "met consectetur adipisicing elit. Doloremque quos quas quaerat",

  },
  {
    image: "KEVIN.MURPHY_4.jpg",
    title: "COLOR ME",
    description: "met consectetur adipisicing elit. Doloremque quos quas quaerat",

  },

  ]



  return (
    <>
      <div className="container">
        <Head>
          <title>Place De Paris</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;500;700&display=swap" rel="stylesheet" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet" />
        </Head>

        <NavBarHolder />
      </div>

      <img className="img-fluid logo mx-auto d-block pb-5" alt="Responsive image" src="Logo_placeDeParis.png"></img>

      {/* d-none d-sm-block ?not-dispaly img on phone screen*/}
      <div className="container-fluid main text-center mt-auto px-0 ">
        <Jumbotorn />
      </div>

      <section>
        <div className="container pt-5 text-center">
          <div className="row justify-content-center g-5 pt-5">
            {kevinMurhy.map(function (card) {
              return (
                <MurphyContent
                  image={card.image}
                  description={card.description}
                  title={card.title}
                />
              );
            })}
          </div>
        </div>
      </section>


      <Footer />
    </>

  )
}
