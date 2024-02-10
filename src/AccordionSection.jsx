import React, { useState } from 'react'

function AccordionSection({ title, info, uniqueIdentifier }) {
  const [toggleState, setToggle] = useState(null)
  const handleResponse = (uniqueIdentifier) => {
    setToggle((prevToggleState) =>
      prevToggleState !== uniqueIdentifier ? uniqueIdentifier : null
    )
  }
  return (
    <div>
      <div className="accordion">
        <div className="accordion-section">
          <div className="accordion-title">
            <div className="title">{title}</div>
            <span
              className="title-icon"
              type="button"
              onClick={() => handleResponse(uniqueIdentifier)}
            >
              {toggleState === uniqueIdentifier ? '-' : '+'}
            </span>
          </div>
          <div className="accordion-content">
            {toggleState && <p>{info}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccordionSection
