import React from 'react'
import AccordionSection from './AccordionSection'
import data from './data'

function Accordion() {
  return (
    <div className="genericContainer">
      <h4 style={{ fontSize: '30px', textAlign: 'center' }}>AGMS Accordion </h4>
      {data.map((dataItem) => (
        <AccordionSection
          {...dataItem}
          key={dataItem.id}
          uniqueIdentifier={dataItem.id}
        />
      ))}
    </div>
  )
}

export default Accordion
