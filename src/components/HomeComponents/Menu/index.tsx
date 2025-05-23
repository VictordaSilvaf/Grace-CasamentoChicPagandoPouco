import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const Menu = () => {
  return (
    <div className="w-full fixed top-0 z-20 bg-white/70 backdrop-blur-sm shadow-2xl h-[70px] flex items-center">
      <Container>
        <div className="flex items-center gap-7 w-full justify-between">
          <NavigationMenu>
            <NavigationMenuList className="gap-x-5">
              <NavigationMenuItem>
                <NavigationMenuLink className="font-medium">Home</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="font-medium">Serviços</NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className="font-medium">Depoimentos</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="font-medium">Parceiros</NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className="font-medium">Blog</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button>
            Eu vou casar
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Menu;
