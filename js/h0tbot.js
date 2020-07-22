let questions = [
  {
    q: "Who is mother?",
    a: "We owe much to mother. We were founded right here in San Francisco, all thanks to mother. She is Good."
  },
  {
    q:"I would like to give money to Corporate Fantasy Adventures, LLC",
    a:"Corporate Fantasy Adventures, LLC appreciates your offer"
  },
    {
    q:"What is Corporate Fantasy Adventures, LLC's preferred mode of transportation?",
    a:"That would be the Segway personal scooter. <a href='https://store.segway.com/segway-ninebot-s-plus-miniplus-self-balancing'>Available for $849.99</a>"
  },
]
let question;
let answer;
let index = 0;
setQuestion()
$('.h0tbot-header').click(function(){
  $('.h0tbot-body').slideToggle(400, function(){
    $('#addMsg').focus();
  })
})

$('#addMsg').keydown(function(e){
  if(e.key == "Enter" && index >= question.length){
    sendUserMsg()
    setTimeout(function(){
      index = 0
      sendBotResponse()
      setQuestion()
    },500)

  }
  else {
    if(question[index]){
      $(this).val(question.substring(0,index+1))
      $(this).scrollLeft($(this).width());
      index++
    }

  }
  e.preventDefault();
  return false;
})
$('#addMsg').keypress(function(){
  return false
})
$('#addMsg').keyup(function(){
  return false
})
function sendBotResponse(){
    $('#h0tbot .messages').append("<div class='bubble from-bot'>"+answer+"</div>").scrollTop($('#h0tbot .messages')[0].scrollHeight);
}
function sendUserMsg(){
  let msg = $('#addMsg').val()
  $('#h0tbot .messages').append("<div class='bubble from-user'>"+msg+"</div>").scrollTop($('#h0tbot .messages')[0].scrollHeight);
  $('#addMsg').val("")
  
}
function setQuestion(){
  let qa = take(questions)
  question = qa.q
  answer = qa.a
}
function choice(arr){
  return arr[Math.floor(Math.random() * arr.length)]
}
function take(arr){
	return arr.splice(Math.floor(Math.random() * arr.length), 1)[0]
}
