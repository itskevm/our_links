import React from 'react'

const MyLink = (props) => {
  return (
    <p>
      <a
        className="App-link"
        href={props.chosenUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.localizedText}
      </a>
    </p>
  )
}

export default MyLink