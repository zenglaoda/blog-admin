import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react"

export default function LayoutNavbar() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand className="flex-grow-0">
        Home
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 flex-grow" justify="center">
        <NavbarItem isActive>
          <Link href="#">
            Dict
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground" >
            Series
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}