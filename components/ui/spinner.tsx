import type { ComponentProps } from 'react'

type Variants = 'ring' | 'bar' | 'dot' | 'tadpole'

const RingLoader = (props: ComponentProps<'svg'>) => (
    <svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path
            fill='currentColor'
            d='M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'
            opacity={0.25}
        ></path>
        <path
            fill='currentColor'
            d='M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z'
        >
            <animateTransform
                attributeName='transform'
                dur='0.75s'
                repeatCount='indefinite'
                type='rotate'
                values='0 12 12;360 12 12'
            ></animateTransform>
        </path>
    </svg>
)

const BarLoader = (props: ComponentProps<'svg'>) => (
    <svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <rect width={2.8} height={12} x={1} y={6} fill='currentColor'>
            <animate
                attributeName='y'
                begin='SVGKWB9Ob0W.begin+0.4s'
                calcMode='spline'
                dur='0.6s'
                keySplines='.14,.73,.34,1;.65,.26,.82,.45'
                values='6;1;6'
            ></animate>
            <animate
                attributeName='height'
                begin='SVGKWB9Ob0W.begin+0.4s'
                calcMode='spline'
                dur='0.6s'
                keySplines='.14,.73,.34,1;.65,.26,.82,.45'
                values='12;22;12'
            ></animate>
        </rect>
        <rect width={2.8} height={12} x={5.8} y={6} fill='currentColor'>
            <animate
                attributeName='y'
                begin='SVGKWB9Ob0W.begin+0.2s'
                calcMode='spline'
                dur='0.6s'
                keySplines='.14,.73,.34,1;.65,.26,.82,.45'
                values='6;1;6'
            ></animate>
            <animate
                attributeName='height'
                begin='SVGKWB9Ob0W.begin+0.2s'
                calcMode='spline'
                dur='0.6s'
                keySplines='.14,.73,.34,1;.65,.26,.82,.45'
                values='12;22;12'
            ></animate>
        </rect>
        <rect width={2.8} height={12} x={10.6} y={6} fill='currentColor'>
            <animate
                id='SVGKWB9Ob0W'
                attributeName='y'
                begin='0;SVGCkSt6baQ.end-0.1s'
                calcMode='spline'
                dur='0.6s'
                keySplines='.14,.73,.34,1;.65,.26,.82,.45'
                values='6;1;6'
            ></animate>
            <animate
                attributeName='height'
                begin='0;SVGCkSt6baQ.end-0.1s'
                calcMode='spline'
                dur='0.6s'
                keySplines='.14,.73,.34,1;.65,.26,.82,.45'
                values='12;22;12'
            ></animate>
        </rect>
        <rect width={2.8} height={12} x={15.4} y={6} fill='currentColor'>
            <animate
                attributeName='y'
                begin='SVGKWB9Ob0W.begin+0.2s'
                calcMode='spline'
                dur='0.6s'
                keySplines='.14,.73,.34,1;.65,.26,.82,.45'
                values='6;1;6'
            ></animate>
            <animate
                attributeName='height'
                begin='SVGKWB9Ob0W.begin+0.2s'
                calcMode='spline'
                dur='0.6s'
                keySplines='.14,.73,.34,1;.65,.26,.82,.45'
                values='12;22;12'
            ></animate>
        </rect>
        <rect width={2.8} height={12} x={20.2} y={6} fill='currentColor'>
            <animate
                id='SVGCkSt6baQ'
                attributeName='y'
                begin='SVGKWB9Ob0W.begin+0.4s'
                calcMode='spline'
                dur='0.6s'
                keySplines='.14,.73,.34,1;.65,.26,.82,.45'
                values='6;1;6'
            ></animate>
            <animate
                attributeName='height'
                begin='SVGKWB9Ob0W.begin+0.4s'
                calcMode='spline'
                dur='0.6s'
                keySplines='.14,.73,.34,1;.65,.26,.82,.45'
                values='12;22;12'
            ></animate>
        </rect>
    </svg>
)

const DotLoader = (props: ComponentProps<'svg'>) => (
    <svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <circle cx={4} cy={12} r={1.5} fill='currentColor'>
            <animate
                attributeName='r'
                dur='0.75s'
                repeatCount='indefinite'
                values='1.5;3;1.5'
            ></animate>
        </circle>
        <circle cx={12} cy={12} r={3} fill='currentColor'>
            <animate
                attributeName='r'
                dur='0.75s'
                repeatCount='indefinite'
                values='3;1.5;3'
            ></animate>
        </circle>
        <circle cx={20} cy={12} r={1.5} fill='currentColor'>
            <animate
                attributeName='r'
                dur='0.75s'
                repeatCount='indefinite'
                values='1.5;3;1.5'
            ></animate>
        </circle>
    </svg>
)

const TadPoleLoader = (props: ComponentProps<'svg'>) => (
    <svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path
            fill='currentColor'
            d='M12,23a9.63,9.63,0,0,1-8-9.5,9.51,9.51,0,0,1,6.79-9.1A1.66,1.66,0,0,0,12,2.81h0a1.67,1.67,0,0,0-1.94-1.64A11,11,0,0,0,12,23Z'
        >
            <animateTransform
                attributeName='transform'
                dur='0.75s'
                repeatCount='indefinite'
                type='rotate'
                values='0 12 12;360 12 12'
            ></animateTransform>
        </path>
    </svg>
)

function Spinner({
    variant = 'ring',
    ...props
}: React.ComponentProps<'svg'> & { variant?: Variants }) {
    switch (variant) {
        case 'bar':
            return <BarLoader {...props} />
        case 'dot':
            return <DotLoader {...props} />
        case 'tadpole':
            return <TadPoleLoader {...props} />
        default:
            return <RingLoader {...props} />
    }
}

export { Spinner }
