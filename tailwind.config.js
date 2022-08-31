module.exports = {
    content: [
        './pages/*.{html,ts,tsx,js,jsx}',
        './components/**/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontFamily: {
            sans: ['Arial', 'sans-serif'],
            serif: ['Arial', 'serif'],
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#ffffff',
            pr: '#177EFF',
            gr: '#F5F6FA',
            color1: '#667281',
            red: 'red',
        },
        extend: {
            spacing: {
                '8xl': '96rem',
                '9xl': '128rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
        },
    },
}
