import { Fragment, useState } from 'react'
import './accordion.css'

function Accordion() {
  const [show, setShow] = useState(false)

  // console.log(useState(0))
  // 👎🏿
  // const { show, setShow } = useState(false)
  return (
    <Fragment>
      <button onClick={() => setShow((prev) => !prev)} className='btn'>
        {show ? 'Yashirish' : "Ko'rsatish"}
      </button>
      <div className={show ? 'show' : 'hide'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
        consectetur! Odio repudiandae fugiat, magni exercitationem ut laboriosam
        voluptates voluptatem sapiente doloribus numquam dolorum repellat,
        aliquam adipisci odit a quia maiores, excepturi iure. Nostrum dolorem
        aliquid dignissimos libero ab! Maiores recusandae veniam, repellat animi
        praesentium, voluptatem vero laudantium consequatur explicabo, eum
        officia ducimus pariatur quod! Alias corporis commodi reiciendis sunt
        aliquam quidem voluptatum placeat, neque maiores aspernatur nisi facilis
        delectus explicabo ipsum mollitia, eius obcaecati nulla sit at illum,
        doloremque amet excepturi culpa? Repudiandae, labore excepturi sequi
        libero reiciendis est earum pariatur cum impedit ab similique enim omnis
        saepe. Hic quis ea neque maxime deserunt, mollitia eius, sed, eaque
        voluptatibus placeat rerum maiores qui tenetur blanditiis harum
        recusandae suscipit laudantium dolor voluptatem incidunt! Quam delectus,
        molestiae repellat quas, quibusdam eligendi ullam soluta minima, et cum
        animi autem omnis deserunt? Asperiores, suscipit perspiciatis quibusdam
        quisquam adipisci voluptatem atque perferendis similique odit officia
        officiis, neque dolorem velit aut, sit commodi facilis voluptatum vitae
        expedita eveniet nam. Maxime enim fugit eos asperiores, voluptate
        recusandae esse, saepe aut quaerat possimus ut id repellendus in,
        tempore velit! Necessitatibus, suscipit tempore nobis itaque tenetur
        architecto mollitia doloribus eum? Nulla quibusdam quia, hic sed vero
        facere autem error laudantium id odit consequatur iste optio,
        exercitationem officia eaque voluptatibus similique tempora expedita.
        Ducimus ut asperiores ratione debitis illo, totam a aperiam animi veniam
        magnam delectus blanditiis vitae. Perspiciatis non corporis fuga tempora
        delectus architecto, aliquam voluptas ipsum doloribus quo cum qui eos
        corrupti similique? Ullam aliquam culpa excepturi non porro. Eos optio
        perferendis minus non aliquam aut est doloribus commodi corrupti debitis
        laudantium deserunt facilis, corporis in, voluptatibus accusantium
        tempore repellendus error. Asperiores nemo sed neque sunt tenetur
        perspiciatis distinctio repudiandae, possimus fuga quae aliquid hic
        praesentium, expedita facere sit nulla magni magnam architecto pariatur
        corrupti beatae quibusdam obcaecati!
      </div>
    </Fragment>
  )
}
export default Accordion
