import React, { useState, useEffect } from "react"
import root from 'window-or-global'
export function IsMobile() {
    const [width, setWidth] = useState(root.innerWidth);
    function handleWindowSizeChange() {
        setWidth(root.innerWidth);
    }
    useEffect(() => {
        root.addEventListener('resize', handleWindowSizeChange);
        return () => {
            root.removeEventListener('resize', handleWindowSizeChange);
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

