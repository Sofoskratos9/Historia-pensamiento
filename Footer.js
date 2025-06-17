import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna 1: Acerca de */}
          <div>
            <h3 className="text-xl font-bold mb-4">La Odisea del Pensamiento</h3>
            <p className="text-gray-300 mb-4">
              Una plataforma educativa diseñada para estudiantes de bachillerato que busca fomentar
              el pensamiento crítico y filosófico a través de un recorrido por la historia de la filosofía.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-gray-300 hover:text-accent-400 transition-colors">Inicio</a>
                </Link>
              </li>
              <li>
                <Link href="/mapa">
                  <a className="text-gray-300 hover:text-accent-400 transition-colors">Mapa del curso</a>
                </Link>
              </li>
              <li>
                <Link href="/insignias">
                  <a className="text-gray-300 hover:text-accent-400 transition-colors">Insignias</a>
                </Link>
              </li>
              <li>
                <Link href="/perfil">
                  <a className="text-gray-300 hover:text-accent-400 transition-colors">Perfil</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Información adicional */}
          <div>
            <h3 className="text-xl font-bold mb-4">Información</h3>
            <p className="text-gray-300 mb-2">
              Esta aplicación está diseñada para estudiantes de bachillerato interesados en explorar
              el fascinante mundo de la filosofía a través de un enfoque gamificado y adaptado a sus necesidades.
            </p>
            <p className="text-gray-300">
              Desarrollada como parte de un proyecto educativo para fomentar el pensamiento crítico
              y el análisis filosófico en adolescentes.
            </p>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Copyright */}
        <div className="text-center text-gray-400">
          <p>&copy; {currentYear} La Odisea del Pensamiento. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}