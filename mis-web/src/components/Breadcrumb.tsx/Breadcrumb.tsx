import { Route } from "routes";

interface BreadcrumbProps {
  route: Route;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ route }) => {
  const { path, Icon, children } = route;

  return (
    <nav className="flex px-8 mt-5" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a
            href={`/${path}`}
            className={`inline-flex items-center text-lg capitalize hover:text-sky-600 ${
              window.location.pathname === `/${path}`
                ? "text-sky-600"
                : "text-gray-500"
            }`}
          >
            {Icon && <Icon className="mr-2 h-5 w-5" />}
            {path}
          </a>
        </li>
        {children?.map((child, i) => {
          if (window.location.pathname === `/${child.path}`) {
            return (
              <li key={i}>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p className="ml-1 text-lg capitalize font-medium text-sky-600">
                    {child.name}
                  </p>
                </div>
              </li>
            );
          }
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
