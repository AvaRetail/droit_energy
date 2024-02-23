import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Blog() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
    <div className="title mb-3 cleaner-h2 pt-5" >
                               <h5 className="text-primary">Latest News</h5>
                   {/* <h1 className="mb-4">Experienced Team Members</h1> */}
                           </div>
   <div className='blog-posts-wrap'>
       
     <a className='post-link' href='#'>
       <div className='post-wrap'>
   
         <div className='post-image' style={{backgroundImage: 'url("https://d29fhpw069ctt2.cloudfront.net/photo/34669/preview/e2ddba22_npreviews_dd6e.jpg")' }}>
         </div>
   
         <div className='post-body'>
           <div className='post-body-primary'>
             <div className='post-meta'>
               <p>by <b>James Lelong</b> on October 10, 2017</p>
             </div>
   
             <div className='post-title'>
               <h2>News Title</h2>
             </div>
   
             <div className='post-text'>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non nunc id nunc elementum hendrerit. Nunc posuere augue nec sagittis porttitor. Sed venenatis purus ut mi laoreet, a efficitur orci dignissim.</p>
             </div>
           </div>
   
           <div className='post-body-secondary'>
             <div className='post-category'>
               <p>India</p>
             </div>
           </div>
   
         </div>
   
       </div>
     </a>
     <a className='post-link' href='#'>
       <div className='post-wrap'>
   
         <div className='post-image' style={{backgroundImage: 'url("https://d29fhpw069ctt2.cloudfront.net/photo/34669/preview/e2ddba22_npreviews_dd6e.jpg")'}}>
           
         </div>
   
         <div className='post-body'>
           <div className='post-body-primary'>
             <div className='post-meta'>
               <p>by <b>James Lelong</b> on October 10, 2017</p>
             </div>
   
             <div className='post-title'>
               <h2>News Title</h2>
             </div>
   
             <div className='post-text'>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non nunc id nunc elementum hendrerit. Nunc posuere augue nec sagittis porttitor. Sed venenatis purus ut mi laoreet, a efficitur orci dignissim.</p>
             </div>
           </div>
   
           <div className='post-body-secondary'>
             <div className='post-category'>
               <p>Lorem ipsum</p>
             </div>
           </div>
   
         </div>
   
       </div>
   </a>
     <a className='post-link' href='#'>
       <div className='post-wrap'>
   
         <div className='post-image' style={{backgroundImage: 'url("https://d29fhpw069ctt2.cloudfront.net/photo/34669/preview/e2ddba22_npreviews_dd6e.jpg")'}}>
         </div>
   
         <div className='post-body'>
           <div className='post-body-primary'>
             <div className='post-meta'>
               <p>by <b>James Lelong</b> on October 10, 2017</p>
             </div>
   
             <div className='post-title'>
               <h2>News Title</h2>
             </div>
   
             <div className='post-text'>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non nunc id nunc elementum hendrerit. Nunc posuere augue nec sagittis porttitor. Sed venenatis purus ut mi laoreet, a efficitur orci dignissim.</p>
             </div>
           </div>
   
           <div className='post-body-secondary'>
             <div className='post-category'>
               <p>Lorem ipsum</p>
             </div>
           </div>
   
         </div>
   
       </div>
     </a>
   </div>
   
   <div className='button-wrap'>
     <a className='button' href='#'>Read More</a>
   </div>
   </>
  );
}

export default Blog;
