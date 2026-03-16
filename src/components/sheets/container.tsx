
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '../ui/sheet';

const SheetContainer = ({title, trigger, children, width, side}: {title: string, trigger: React.ReactNode, children: React.ReactNode, width?: string, side?: "right" | "left" | "top" | "bottom"}) => {

    return (
        <Sheet>
            <SheetTrigger className='mr-2 max-sm:mr-0'>
                {trigger}
            </SheetTrigger>
            <SheetTitle className='hidden'>
                {title}
            </SheetTitle>
            <SheetDescription className='hidden'/>
            <SheetContent className={cn(`h-full flex flex-col`, width)} side={side || "right"}>
                {children}
            </SheetContent>
        </Sheet>
    )
}; 


export default SheetContainer; 


export const sheet_button_class = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9"