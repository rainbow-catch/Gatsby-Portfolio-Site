import React from "react"

function PanelOverlay({ children }) {
    return (
        <div className="absolute opacity-0 hover:opacity-100 top-0 min-h-full min-w-full bg-semiTransparentBlack flex flex-col justify-center items-center">
            <p className="text-white font-bold text-4xl mb-10">{children}</p>
            <button className="seconderyFontWhite">View Case</button>
        </div>
    );
}

export default PanelOverlay;