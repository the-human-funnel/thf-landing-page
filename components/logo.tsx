import { cn } from '@/lib/utils'

// <CHANGE> Created THF funnel logo in lime-400
export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className="flex items-center gap-2">
            <svg
                className={cn('size-8 w-8 text-primary', className)}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V6C22 6.26522 21.8946 6.51957 21.7071 6.70711L15 13.4142V19C15 19.3466 14.8205 19.6684 14.5257 19.8507L10.5257 22.3507C10.0484 22.6396 9.42494 22.4999 9.11612 22.0257C9.04006 21.9143 9 21.7842 9 21.6514V13.4142L2.29289 6.70711C2.10536 6.51957 2 6.26522 2 6V4Z"
                    fill="currentColor"
                />
            </svg>
            <span className="text-xl font-bold">
                <span className="text-foreground">The Human</span>
                <span className="text-primary"> Funnel</span>
            </span>
        </div>
    )
}

export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <div className="flex items-center gap-2">
            <svg
                className={cn('size-8 w-8 text-primary', className)}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V6C22 6.26522 21.8946 6.51957 21.7071 6.70711L15 13.4142V19C15 19.3466 14.8205 19.6684 14.5257 19.8507L10.5257 22.3507C10.0484 22.6396 9.42494 22.4999 9.11612 22.0257C9.04006 21.9143 9 21.7842 9 21.6514V13.4142L2.29289 6.70711C2.10536 6.51957 2 6.26522 2 6V4Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                />
            </svg>
            <span className="text-xl font-bold">
                <span className="text-foreground">The Human</span>
                <span className="text-primary"> Funnel</span>
            </span>
        </div>
    )
}
