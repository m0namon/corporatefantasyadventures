let questions = [
  {
    q: "What is Corporate Fantasy Adventures, LLC?",
    a: "Great question! We are leaders, changemakers, and role models. We fight for those at the margins. We fight for profit. And we fight for profit margins."
  },
  {
    q:"I’m organizing a conference. How can I get a speaker from Corporate Fantasy Adventures, LLC?",
    a:"Great question! We have many fantastic speakers available to you. Please get in touch via our email form at the bottom of the site."
  },
  {
    q:"I’m a reporter and I’m wondering how I can get in touch with your press team at Corporate Fantasy Adventures, LLC?",
    a:"Great question! Please reach us at pr@corporatefantasyad.ventures. Please note that response times are subject to change."
  },
  {
    q:"I’m a hard-hitting investigative journalist and I suspect something underhanded is happening at your company. Why won’t you respond to my emails?",
    a:"Great question!"
  },
  {
    q:"How can I invest in your cryptocurrency, CorpCoin?",
    a:"Great question! You can join us on our annual yacht retreat. We meet in the redwoods, then walk to a secret beach, where we are joined by fellow politicians and media figures. You will then be asked to pitch to our team of esteemed technologists, who will make projections."
  },
  {
    q:"I am a Corporate Fantasy Adventures, LLC employee and I am having trouble finding information about your retirement plans.",
    a:"Great question! We support our employees retiring. You can find more information at the bottom of your bimonthly pay stub."
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
