import React from 'react'
import pup from "../Image/pup.jpg"


function Image() {
  return (
    // <div>
    //   <h1>Hellow </h1>
    //    <img src={pup} />

    // </div>
    <div class="max-w-4xl mx-auto py-10 px-4">

      <div class="flex flex-col sm:flex-row sm:items-center gap-8">

        
        <div class="flex justify-center sm:justify-start w-full sm:w-auto">
          <img src="https://picsum.photos/200"
            class="w-32 h-32 rounded-full border-4 border-gray-300 object-cover" />
        </div>
      </div>
    </div>
      )
}

      export default Image
