import { useEffect } from 'react';

function useLazyLoad  () {
    // this is componentDidMount from class Components
    useEffect(() => {
      function handleIntersection(entries) {
      
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            entry.target.classList.add("loaded");
            observer.unobserve(entry.target);
          }
        });
      }
  
      const observer = new IntersectionObserver(handleIntersection);
  
      const images =  document.querySelectorAll('.lazyload');
      images.forEach(image => observer.observe(image));  
    }, [])
}


export default useLazyLoad