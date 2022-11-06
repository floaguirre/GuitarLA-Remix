import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
  return {
    title : 'GuitarLA - Sobre Nosotros',
    description: 'Venta de guitarras, blog de musica'
  }
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href : styles

    },
    {
      rel: 'preload',
      href: imagen,
      as : 'imagen'
    }
  ]
}

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros"/>

        <div>
          <p>Duis nec iaculis purus, eget auctor diam. Maecenas quis arcu interdum, posuere mi eu, pretium eros. Nam sit amet velit elit. 
            Morbi consectetur orci in leo mollis, et semper odio pharetra. Duis dui orci, fringilla vitae iaculis a, commodo et magna. 
            Proin a justo id neque feugiat facilisis. Nunc euismod sem sed leo vestibulum bibendum. Vivamus vestibulum aliquam hendrerit.
             Ut venenatis quam a metus tincidunt, in imperdiet velit feugiat. Sed eu velit fringilla, sagittis magna non, ultrices quam. 
             Maecenas id enim eu dui scelerisque cursus at vel nulla. Sed a sem a arcu cursus venenatis sed aliquet dui. 
             Integer iaculis massa eros, eu bibendum dolor rutrum eu.
          </p>
          <p>Duis nec iaculis purus, eget auctor diam. Maecenas quis arcu interdum, posuere mi eu, pretium eros. Nam sit amet velit elit. 
            Morbi consectetur orci in leo mollis, et semper odio pharetra. Duis dui orci, fringilla vitae iaculis a, commodo et magna. 
            Proin a justo id neque feugiat facilisis. Nunc euismod sem sed leo vestibulum bibendum. Vivamus vestibulum aliquam hendrerit.
             Ut venenatis quam a metus tincidunt, in imperdiet velit feugiat. Sed eu velit fringilla, sagittis magna non, ultrices quam. 
             Maecenas id enim eu dui scelerisque cursus at vel nulla. Sed a sem a arcu cursus venenatis sed aliquet dui. 
             Integer iaculis massa eros, eu bibendum dolor rutrum eu.
          </p>
          
          
        </div>
      </div>
    </main>
  )
}

export default Nosotros
