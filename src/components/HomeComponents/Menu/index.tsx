import Container from "@/components/Container";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const Menu = () => {
  return (
    <div className="w-full absolute top-0">
      <Container>
        <div className="flex items-center gap-7">
          {/* <Logo
            srcImg="https://cdn-icons-png.flaticon.com/512/10817/10817310.png"
            altImg="code"
          /> */}
          <NavigationMenu>
            <NavigationMenuList className="gap-x-5">
              <NavigationMenuItem>
                <NavigationMenuLink>Home</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink>Serviços</NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink>Depoimentos</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink>Parceiros</NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink>Blog</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </Container>
    </div>
  );
};

export default Menu;
