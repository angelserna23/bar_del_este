const Theme = {
    colors: {
        //Colores base
        bd: "#0B0B0C",
        bg: "#121214",
        text: "#ffffff",
        text_title: "#c5b692",

        //Acents
        gold: "#C6A15B",
        wine: "#6E1F2A",

        // UI Neutrals
        border: "#2A2A2E",
        mutedText: "#f2e9d8b8", // Texto secundario
        overlay: "#0b0b0cb8", // Overlay para hero imagenes
    },

    fonts: {
        heading: `"Cinzel", serif`,
        body: `"Inter", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
    },

    fontSizes: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3.25rem",
    },

    spacing: {
        xxs: "0.25rem",
        xs: "0.5rem",
        sm: "0.75rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
        "3xl": "4rem",
        "4xl": "6rem",
    },

    radii: {
        sm: "10px",
        md: "16px",
        lg: "22px",
        pill: "999px",
    },

    shadows: {
        soft: "0 10px 30px rgba(0,0,0,0.35)",
        hard: "0 16px 40px rgba(0,0,0,0.55)",
    },

    // Breakpoints + helper para media queries
    breakpoints: {
        tablet: "1024px",
        phone: "768px",
    },

    layout: {
        maxWidth: "1200px",
        maxWidthWide: "1400px",
    },

    transitions: {
        fast: "150ms ease",
        base: "250ms ease",
        slow: "400ms ease",
    },
}

export {
    Theme
}