import React from 'react'
// import NoSSR from 'react-no-ssr';
import style from './styles/home.module.css'


const page = () => {
  return (
    // <NoSSR>
      <section>
        <div>
          <video controls width="100%">
            <source src="https://player.vimeo.com/video/771916988?h=d7bec5dce4&background=1" />
            {/* Add additional source tags for different video formats if needed */}
          </video>
        </div>
      </section>
    // </NoSSR>
  )
}

export default page