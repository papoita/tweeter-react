import React from 'react'; //optional

function TweetForm(){
  const placeholderString = "What are you humming about?";
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <section className="newtweet">
    <form method="post" action="/tweets" className="newtweet__form" onSubmit={handleSubmit}>
      <textarea className="form__textarea" name="text" placeholder={placeholderString}></textarea>
      <input type="submit" value="Tweet" className="form__input" />
      <span className="form__counter">140</span>
    </form>
  </section>

  );
}

export default TweetForm;