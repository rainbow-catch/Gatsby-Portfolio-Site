import React, { useState, useEffect } from "react"

export function IsMobile() {
    const [width, setWidth] = useState(window.innerWidth);
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    return (width <= 768);
}

export function BrowserView({ className, children, ...rest }) {
    if(IsMobile()) return "";
    return (
        <div className={className}>
            {children}
        </div>
    );
}

export function MobileView({ className, children, ...rest }) {
    if(!IsMobile()) return "";
    return (
        <div className={className}>
            {children}
        </div>
    );
}

