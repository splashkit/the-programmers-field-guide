import React from 'react';

export function Caption({children}) {
    return (
      <div
        style={{
          textAlign: 'center',
        }}>
        {children}  
      </div>
    );
}

export function FigureText({children}) {
    return (
      <span
        style={{
          fontWeight: 800,
        }}>
        {children}
      </span>
    );
}



