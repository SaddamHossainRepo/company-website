

import  { useState, useEffect } from 'react';

const PreLoaderAnimation = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }, []); 

  return (
    <div className='h-screen w-screen'>
      {loading ? (
        <div>
          <img src="/preloader.gif" alt="Loading..." />
        </div>
      ) : (
        <div>
          {/* Your main content goes here */}
          <h1>Welcome to My App!</h1>
          <p>This is the main content of your component.</p>
        </div>
      )}
    </div>
  );
};

export default PreLoaderAnimation;
