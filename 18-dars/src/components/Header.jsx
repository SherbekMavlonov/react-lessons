import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  NavigationMenu,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'
import { Button } from './ui/button'

function Header() {
  const { t, i18n } = useTranslation()

  const navLinks = [
    {
      href: '/',
      label: t('Home'),
    },
    {
      href: '/contact',
      label: t('Contact'),
    },
    {
      href: '/product',
      label: t('Product'),
    },
  ]
  const changeLang = () => {
    const currentLang = localStorage.getItem('lang')
    localStorage.setItem('lang', currentLang == 'uz' ? 'en' : 'uz')
    i18n.changeLanguage(currentLang == 'uz' ? 'en' : 'uz')
  }

  return (
    <div className='w-full bg-gray-300 p-4'>
      <NavigationMenu className={'max-md:hidden  gap-10'}>
        <NavigationMenuList>
          {navLinks.map((link) => (
            <Link
              to={link.href}
              className={navigationMenuTriggerStyle()}
              key={link.label}
            >
              {link.label}
            </Link>
          ))}
        </NavigationMenuList>
        <Button onClick={changeLang} className='ml-auto'>
          {i18n.language}
        </Button>
      </NavigationMenu>
      <Sheet>
        <SheetTrigger className='bg-white md:hidden p-3 rounded'>
          Menu
        </SheetTrigger>
        <SheetContent className={'w-3/4'}>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription className='flex flex-col mx-auto items-center'>
              {navLinks.map((link) => (
                <Link
                  to={link.href}
                  className={navigationMenuTriggerStyle()}
                  key={link.label}
                >
                  {link.label}
                </Link>
              ))}
              <Button onClick={changeLang} className='mx-auto'>
                {i18n.language}
              </Button>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}
export default Header
