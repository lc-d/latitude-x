import type { Config } from 'tailwindcss'
// import defaultTheme from 'tailwindcss/defaultTheme'
export default <Partial<Config>>{
    theme: {
        fontFamily: {
            sans: ['ProximaNova', 'Helvetica', 'sans-serif']
        },
        colors: {
            'primary': '#57989B',
            'primary-light': '#79BFBF',
            'primary-light-opacity': 'rgba(121,191,191,.5)',
            'primary-dark': '#386B6B',
            'primary-darker': '#294C4B',
            'accent': '#3DEBEA',
            'grey': '#9A9A9A',
            'grey-light': '#D6D6D6',
            'grey-lighter': '#F0F0F0',
            'grey-dark': '#474747',
            'false-white': '#F6FFFF',
            'black': '#0B0B0B',
            'white': '#FFF',
        },
        extend: {
            dropShadow: {
                'text': '0 1px 3px rgba(0, 0, 0, 0.75)',
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography')
    ]
}
