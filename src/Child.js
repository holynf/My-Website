import React from 'react'

const Child = () => {
  const user = {
    name:"abolfazl",
    family:"safaei",
    age:21
  }
  console.log(user.name);
  return (
    <div>
        <h1>Hello</h1>
    </div>
  )
}

export default Child