import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';


export default function Navbar({switchTheme}: {switchTheme: () => void}) {
  const [isSticky, setIsSticky] = useState(false);
  const { t, i18n } = useTranslation()
  const [currentLenguaje, setCurrentLenguaje] = useState(i18n.language)

  const handleLenguaje = () => {
    const newLenguage = currentLenguaje === 'en' ? 'es' : 'en'
    i18n.changeLanguage(newLenguage)
    setCurrentLenguaje(newLenguage)
  }
  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const navbarOffsetTop = (navbar as HTMLElement)?.offsetTop;

    const handleScroll = () => {
      if (window.scrollY > navbarOffsetTop) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <nav className={`navbar fixed top-0 z-[9] backdrop-blur  ${isSticky ? 'shadow bg-base-200/50' : 'bg-transparent'}`}>
      <div className="navbar-start">
        <div className="dropdown relative inline-flex sm:hidden rtl:[--placement:bottom-end]">
          <button
            id="dropdown-default"
            type="button"
            className="dropdown-toggle btn btn-text btn-primary btn-square"
            aria-haspopup="menu"
            aria-expanded="false"
            aria-label="Dropdown"
          >
            <span className="icon-[tabler--menu-2] dropdown-open:hidden size-6"></span>
            <span className="icon-[tabler--x] dropdown-open:block hidden size-6"></span>
          </button>
          <ul
            className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-default"
          >
            <ul className="dropdown relative [--offset:9] [--placement:bottom-end] max-sm:[--placement:bottom]">
              <li><a className="dropdown-item" href="#home">{t('menu.home')}</a></li>
              <li><a className="dropdown-item" href="#aboutme">{t('menu.about')}</a></li>
              <li><a className="dropdown-item" href="#projects">{t('menu.projects')}</a></li>
              <li><a className="dropdown-item" href="#contact">{t('menu.contact')}</a></li>
            </ul>
            <li className="dropdown relative [--offset:9] [--placement:bottom-end] max-sm:[--placement:bottom]">
              <button
                id="dropdown-js-components"
                className="dropdown-toggle dropdown-item dropdown-open:bg-base-content/10 dropdown-open:text-base-content justify-between"
                aria-haspopup="menu"
                aria-expanded="false"
                aria-label="Dropdown"
              >
                {t('menu.languaje')}
                <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4 rtl:rotate-180"></span>
              </button>
              <ul
                className="dropdown-menu dropdown-open:opacity-100 hidden"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="js-components"
              >
                <button className='dropdown-item' type='submit' key='lenguajes' onClick={handleLenguaje}>
                  {t('menu.inverseLenguaje')}
                </button>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center max-sm:hidden">
        <ul className="menu font-medium menu-horizontal gap-1 p-0 text-base rtl:ml-20 bg-transparent">
          <li><a className="dropdown-item" href="#home">{t('menu.home')}</a></li>
          <li><a className="dropdown-item" href="#aboutme">{t('menu.about')}</a></li>
          <li><a className="dropdown-item" href="#projects">{t('menu.projects')}</a></li>
          <li><a className="dropdown-item" href="#contact">{t('menu.contact')}</a></li>
          <li className="dropdown relative [--offset:9] [--placement:bottom-end] max-sm:[--placement:bottom]">
            <button
              id="dropdown-js-components"
              className="dropdown-toggle dropdown-item dropdown-open:bg-base-content/10 dropdown-open:text-base-content justify-between"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Dropdown"
            >
              {t('menu.languaje')}
              <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4 rtl:rotate-180"></span>
            </button>
            <ul
              className="dropdown-menu dropdown-open:opacity-100 hidden"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="js-components"
            >
              <button className='dropdown-item' type='submit' key='lenguajes' onClick={handleLenguaje}>
                {t('menu.inverseLenguaje')}
              </button>
            </ul>
          </li>
        </ul>
      </div>

      <div className="navbar-end items-center gap-4">


        <label className="swap swap-rotate">
            <input type="checkbox" onClick={switchTheme} className="theme-controller" />
          <span className="bg-primary swap-off icon-[fluent--drink-coffee-16-filled] size-7"></span>
          <span className="swap-on icon-[fluent--drink-coffee-16-filled] size-7"></span>
        </label>
      </div>
    </nav>
  );
}
