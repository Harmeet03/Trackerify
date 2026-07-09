import { ChartArea } from 'lucide-react'

const Loading = () => {
    return(
        <div className='flex items-center justify-center text-2xl gap-1 text-foreground min-h-screen'>
            <ChartArea size={28} color='#00ff00'/>
            <p> Loading... </p>
        </div>
    )
}

export default Loading