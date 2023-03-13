import React, { useState, useEffect, useRef } from 'react';

interface Props {
    children: (args: { width: number, height: number }) => React.ReactNode;
    className: string;
}

const FullSizer: React.FC<Props> = ({ className, children }) => {
    const targetRef = useRef<HTMLDivElement>(null);
    const [curWidth, setCurWidth] = useState(0);
    const [curHeight, setCurHeight] = useState(0);

    // https://www.pluralsight.com/guides/re-render-react-component-on-window-resize
    useEffect(() => {
        if (targetRef.current) {
            setCurWidth(targetRef.current.offsetWidth);
            setCurHeight(targetRef.current.offsetHeight);
        }
        function handleResize() {
            if (targetRef.current) {
                console.log('handleResize')
                setCurWidth(targetRef.current.offsetWidth);
                setCurHeight(targetRef.current.offsetHeight);
            }
        }
        
        if (window) {
            window.addEventListener('resize', handleResize);
        }

        return () => {
            if (window) {
                window.removeEventListener('resize', handleResize);
            }
        }
    }, [targetRef]);

    return (
        <div ref={targetRef} className={className ?? ''}>
            {
                children({ width: curWidth, height: curHeight })
            }
        </div>
    );
};

export default FullSizer;