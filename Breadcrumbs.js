import Link from 'next/link';
import { useRouter } from 'next/router';
import { getBreadcrumbs } from '../utils/navigation';

export default function Breadcrumbs() {
  const router = useRouter();
  const breadcrumbs = getBreadcrumbs(router.asPath);

  if (!breadcrumbs || breadcrumbs.length <= 1) {
    return null; // No mostrar breadcrumbs en la página principal o si solo hay un nivel
  }

  return (
    <div className="bg-gray-100 py-2 px-4 text-sm">
      <div className="container mx-auto">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            {breadcrumbs.map((breadcrumb, index) => {
              const isLast = index === breadcrumbs.length - 1;
              
              return (
                <li key={breadcrumb.path} className="inline-flex items-center">
                  {index > 0 && (
                    <svg className="w-4 h-4 text-gray-400 mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                  )}
                  
                  {isLast ? (
                    <span className="text-primary-800 font-medium">
                      {breadcrumb.label}
                    </span>
                  ) : (
                    <Link href={breadcrumb.path}>
                      <a className="text-gray-600 hover:text-primary-800 transition-colors">
                        {index === 0 ? (
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                            </svg>
                            {breadcrumb.label}
                          </span>
                        ) : (
                          breadcrumb.label
                        )}
                      </a>
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}