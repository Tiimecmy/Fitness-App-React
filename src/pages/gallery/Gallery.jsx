import "./gallery.css"
import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_3.jpg"

const Gallery = () => {
  const galleryLength = 16;
  const images = []

  for(let i = 1; i < galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }

  console.log(images);

  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia, augue ac laoreet ultricies,
        nulla velit elementum lorem,at aliquam ante leo eu risus. Duis quis magna leo. Suspendisse potenti.
      </Header>
      <section className="gallery">
        <div className="container gallerytocontainer">
          {
            images.map((imagee, index) => {
              return <article key={index}>
                <img src={imagee} alt={`Gallery Image ${index + 1}`} />
              </article>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery