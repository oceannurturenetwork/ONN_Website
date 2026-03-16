// event type 
import { EventType } from '@/types';
import { Card } from '../ui/card';
import AppImage from './app-image';


const Event = ({event}: {event: EventType}) => {

    return (
        <Card className='flex-1 h-[350px] lg:h-[450px] relative overflow-hidden p-0 cursor-pointer'>
            <AppImage 
                alt={event.title}
                title={event.title}
                src={event.banner}
                fill
                objectFit="cover"
            />
        </Card>
    )
};

export default Event; 