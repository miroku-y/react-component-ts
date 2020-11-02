import React from 'react'

export interface Props{
  name:string;
  enthusiasmLevel?:number;
}

const Hello = ({name='miroku',enthusiasmLevel=1}:Props) =>{
return <div>Hello {name + getExclamationMarks(enthusiasmLevel)}</div>
}

export default Hello

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}