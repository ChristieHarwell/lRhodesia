import React from 'react'

export default function Title({name,title}) {
  return (
    <div className="row">
        <div className="col-10 mx-auto my-2 text-center text-title">
              <h1 className="text-cappitalize font-weight-bold">
                {name} <strong className="text-blue">{title}</strong>
              </h1>
        </div>
    </div>
  )
}

export function MainTitle({name,title}) {
  return (
    <div className="row">
        <div className="col-10 mx-auto my-2 text-center text-title">
              <h1 className="text-cappitalize font-weight-bold">
                {name} <strong className="homepage-title">{title}</strong>
              </h1>
        </div>
    </div>
  )
}