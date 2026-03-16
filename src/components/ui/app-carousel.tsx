import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";


const AppCarousel = ({ children, orientation, className }: PropsWithChildren & {orientation?: "vertical" | "horizontal", className?: string}) => (
    <div className={cn("my-3", className)}>
        <Carousel  orientation={orientation || "horizontal"}>
            <CarouselContent className="gap-2">
                {children}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
);

export default AppCarousel; 