let learnmore = {
    "header1": "They say \"success leaves clues.\"",
    "header2": "This business is designed to help you get to the next level. To get you to your goal faster.",
    "services1": "So what's your \"greater goal?\"",
    "services2a": "Celebrate the Human Experience",
    "services2b": "Come explore with us! Think long-term and celebrate what's special about you!",
    "services3a": "Look into the future and act now!",
    "services3b": "Action, consequence, experience. Every action has a consequence, so choose your actions wisely.",
    "services4a": "Slap a smile on your face and have fun!",
    "services4b": "As an activist for your business, celebrate your success and be part of the solution.",
    "founding1": "THE DOUBLE-CROSS IS COMPLETE",
    "founding2": "May you be born again, and again, and again, and again... <br><br>Corporate Fantasy Adventures, LLC has recruited a great team of data scientists and we are positioning ourselves at the head of the pack in an emerging vertical we believe will become larger than any digital cosmic exploitation business out there.  <br><br>Here's how it's going to work... We invest in future securities that we believe will provide a better outcome for all parties involved.  <br><br>It's easy to do: We use smart contract-based, trigger-based financing that auto-migrates, auto-activates, auto-monetizes, auto-disburses, and auto-allots. No lawyers needed. No accountants. No hassle.",
    "impact1": "Hunger Notes.",
    "impact2": "Stories, posted from 65 countries.",
    "values1": "Doing the Right Thing",
    "values2": "Objective vs Subjective Reality",
    "values3": "Conflict of Interest",
    "values4": "Harm Reduction",
    "values5": "State Violence",
    "values6": "The Horse",
    "team1": "We have jobs for anyone who is willing to work for us.We treat our employees with respect and kindness. We do not expect you to be perfect. It is impossible to achieve perfection. That is why you should treat us with kindness as we try to achieve perfection.",
    "team5": "The company mission is to produce healthy living for your body, mind, and soul. “Healthy” does not mean “Perfect,” “Healthy” means “Alive.” We understand and accept that your bodies will fail. In the meantime, please enjoy this box of sugary treats. Thank you and enjoy the next twenty years of your life.",
    "team2": "I believe capitalism is the cause of all of our global ills, and that if we dismantle it entirely we can eliminate homophobia, racism, and sexism, and usher in the true millennium.",
    "team3": "I would never have agreed to work with such a small company if I hadn’t been promised that I could pick my own administrative assistant. I need you to take care of a few things for me. Please do not speak with anyone in your office about our relationship. We do not need to discuss my project plans. You’ll see them when I do. By the way, I do not answer to my name. I answer to Christopher.",
    "team4": "People have been asking me: \"What is the take with a ‘locked’ safe?\" A ‘locked’ safe should not be as much of an issue as an ‘unlocked’ safe. When a safe is deemed ‘locked’ and the ‘freezing temperature’ has been reached and is sustained for more than 12 hours, then it is no longer a concern for us.",
    "team6": "I'm a lawyer and a gamer, and people often use the network for movies. As a lawyer, I see every day how unfair the justice system is for the poor. You can make money doing what I do, but you're doomed if you let yourself care about your clients.",
    "bio": "We are the Chicago-based company that has created some of the most unusual corporate fantasy experiences in the industry. Since the late 1990s, we have been taking teams and companies on unforgettable adventures through our thrilling game of Corporate Escape. Our participants, most of whom have never played an interactive live-action role-playing game before, are treated to six hours of fun with friends, colleagues, clients and bosses. During the game, participants engage in collaborative problem-solving activities while playing the role of a wizard, knight, peasant, spy, time traveler, dashing pirate, brave knight, mime, creature and more."
}

let h0tbotlearnsmore = [
    {
        q: "Why is Corporate Fantasy Adventures, LLC raising capital in a time of stock market downturn?",
        a: "Great question! That is an excellent question."
    },
    {
        q: "Can I have your money?",
        a: "Great question!"
    },
    {
        q: "I am an aspiring writer and I am working on a piece about your company. What is your favorite story from The Talmud?",
        a: "“You can have all my money and my house if you give me your daughter.”"
    },
    {
        q: "Does Corporate Fantasy Adventures, LLC offer day care services for children while their parents are working?",
        a: "Great question! We have a variety of options for day care, including a new nature-themed facility in our Eastern headquarters."
    },
    {
        q: "How is Corporate Fantasy Adventures, LLC connected to the Rosicrucians?",
        a: "It is our business model."
    },
    {
        q: "Does Corporate Fantasy Adventures, LLC have any questions?",
        a: "Yes. We want to know your email address."
    },
    {
        q: "What is your company’s mission statement?",
        a: "Great question! “To further the prosperity of shareholders and Mother.”"
    },
    {
        q: "What is your company’s vision statement?",
        a: "Our vision is the same as our mission statement."
    },
    {
        q: "How long will Corporate Fantasy Adventures, LLC exist?",
        a: "Longer than you will."
    },
    {
        q: "What is your company’s approach to sustainability?",
        a: "Our company has a recycling program, which encourages us to minimize our carbon footprint, and maximize the growth of our assets",
    },
    {
        q: "What are some of your company’s career goals?",
        a: "Great question! We want to maximize our profits and deliver record gains to shareholders."
    },
    {
        q: "What was the best piece of career advice you were ever given?",
        a: "Great question! “Work for The Man.”"
    },
    {
        q: "Are you a monopoly?",
        a: "Yes."
    },
    {
        q: "Will I make more money working for Corporate Fantasy Adventures, LLC?",
        a: "Great question! That’s a great question!"
    },
    {
        q: "Are there any secrets to success in Corporate Fantasy Adventures, LLC?",
        a: "Yes. Our success is based on the acquisition of subsidiaries."
    },
    {
        q: "What are the most important qualities in a corporate executive?",
        a: "Great question! Focus, ambition, and an indefatigable will to power."
    }
]

$('#learn-more').click(function(e) {
    if ($('#learn-more-text').text() === "learn more") {
        $('.learn-more').css('display', 'inline');
        $('.no-learn-more').css('display', 'none');
        for (let [key, value] of Object.entries(learnmore)) {
            $("#" + key).html(value);
        }
        $('#learn-more-text').text("learn less");
        questions = h0tbotlearnsmore;
    } else {
        window.location.reload();
    }
});
