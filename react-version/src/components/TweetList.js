import React from 'react'; //optional
import Tweet from './components/Tweet'

  function TweetList(){
    
    return (
      <section className="tweets">

      <Tweet/>
      <Tweet/>

    </section>
    );
  }

  export default TweetList;