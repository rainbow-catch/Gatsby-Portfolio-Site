import React from "react"

function ColorPanel({className, color, ...rest}) {
  return (
    <div {...rest} className={ "p-3 flex flex-col justify-end items-center " + className } style={{ backgroundColor:color}}>
      <p>{ color }</p>
    </div>
  );
}

export default ColorPanel;
