// Adding elements without using JSX

import React from 'react'

function App()
{
   return React.createElement
   (
        'div',
        {className:'container'},
        React.createElement('h1',{},'My App')
   )
}

// So it's basically React.createElemenet(element_type,class_name,elemennt content,loop )

export default App