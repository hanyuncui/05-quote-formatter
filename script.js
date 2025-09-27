//Get the form element
const form = document.getElementById('form'); //'const' is used because the form element does not change

//Add event listener to the form
form.addEventListener('submit', function(event){
  event.preventDefault(); // Prevent the form from submitting the traditional way

  //Get the values form the input field
  const noun = document.getElementById('noun').value;
  const verb = document.getElementById('verb').value;
  const adjective = document.getElementById('adjective').value;

  //Create the sentence using string concatenation
  const sentence = `The ${adjective} ${noun} had one goal to ${verb}. What happened next was unexpected.`; 
  
  //Display the sentence in the result paragraph
  document.getElementById('result').textContent = sentence;

});