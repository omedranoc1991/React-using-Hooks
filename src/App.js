import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'

const items = [
    {title : 'What is React', content : 'React is a java script framework'},
    {title : 'Why use React', content : 'React is a favorite JS library among engeniers'},
    {title : 'How do you use React', content : 'You use React by creating components'}
]

const options = [
  {
   label : 'the color red',
   value : 'red'
  },
  {
    label : 'the color green',
    value: 'green'
  },
  {
    label: 'A shade of blue',
    value: 'blue'
  }
]

const App = () =>{

  const [selected, setSelected] = useState(options[0])

    return(
      <div>
        <Dropdown 
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
        />       
      </div>
    ) 
}

export default App