import './App.css'
import {Button} from "@/components/ui/button.tsx";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import {ModeToggle} from "@/components/mode-toggle.tsx";
import {Checkbox} from "@/components/ui/checkbox"



import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"


import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {SheetSide} from "@/components/sheets.tsx";


function App() {

    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

                <div className={"container mx-auto"}>



                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Item 1</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Lorem ipsum dolor
                                            sit
                                            amet.</NavigationMenuLink>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Lorem ipsum
                                            dolor.</NavigationMenuLink>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Item 2</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Lorem ipsum dolor
                                            sit.</NavigationMenuLink>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Lorem ipsum dolor
                                            sit.</NavigationMenuLink>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Item 3</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Lorem ipsum dolor
                                            sit.</NavigationMenuLink>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Lorem ipsum dolor
                                            sit.</NavigationMenuLink>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Item 4</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Lorem ipsum dolor
                                            sit.</NavigationMenuLink>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Lorem ipsum dolor
                                            sit.</NavigationMenuLink>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>


                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>


                    <div>
                        <Menubar className={""}>
                            <MenubarMenu>
                                <MenubarTrigger>File</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem>
                                        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem>New Window</MenubarItem>
                                    <MenubarSeparator/>
                                    <MenubarItem>Share</MenubarItem>
                                    <MenubarSeparator/>
                                    <MenubarItem>Print</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </div>


                    <div>
                        <Button>Click me</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="link">Link</Button>
                        <Button variant="destructive">Destructive</Button>
                    </div>


                    <div className="items-top flex space-x-2">
                        <Checkbox id="terms1"/>
                        <div className="grid gap-1.5 leading-none">
                            <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Accept terms and conditions
                            </label>
                            <p className="text-sm text-muted-foreground">
                                You agree to our Terms of Service and Privacy Policy.
                            </p>
                        </div>
                    </div>


                    <br/>
                    <h1 className="text-3xl font-bold mb-8">Lorem ipsum.</h1>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2">
                            <div className="text-base leading-7 mb-6">Lorem ipsum dolor sit amet, consectetur
                                adipisicing
                                elit. A aliquid architecto beatae delectus eaque eos hic illum libero magni maiores
                                molestiae nam, nihil nisi officiis perferendis quibusdam tempore velit veniam.
                            </div>
                            <div className="text-base leading-7">Accusamus, ad aut autem eius iure maxime neque nisi
                                officia
                                perferendis quisquam quos repellat rerum sint. Animi ea eum perspiciatis quam rerum
                                voluptas? Blanditiis eveniet excepturi impedit optio quia. Magnam!
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="text-base leading-7 mb-6">Accusamus commodi dignissimos dolorem, esse non
                                quas
                                repellat sunt. Aliquam aliquid assumenda beatae debitis dolorem, doloremque dolorum
                                ducimus
                                error facilis, fugit libero neque provident quae, quia repellat reprehenderit
                                repudiandae
                                ullam.
                            </div>
                        </div>
                    </div>



                    <SheetSide/>







                <div className={"float-center"}>
                    <ModeToggle/>
                </div>

            </ThemeProvider>
        </>
    )
}

export default App
