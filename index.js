const express = require('express')
const app = express()

const bodyParser=require("body-parser");
app.use(bodyParser.json())

const QUESTION_TYPE = {
    MYULIPLE_CHIOCE: 1,
    TEXT_INPUT: 2,
};
let questions = [
    { id: 1, text: "האם הצלחתם להתחבר לתוכנה?", background_url: 'https://i.imgur.com/6xrqbvr.jpg', text_color: 'rgba(234, 69, 154, 1)', time_to_answer: 20, type: QUESTION_TYPE.MYULIPLE_CHIOCE, answers: [{ id: 1, text: "כן" }, { id: 2, text: "לא" }] },
    { id: 2, text: "מה אתם יודעים על JavaScript?", background_url: 'https://i.imgur.com/6xrqbvr.jpg', text_color: 'rgba(101, 68, 235, 1)', time_to_answer: 20, type: QUESTION_TYPE.MYULIPLE_CHIOCE, answers: [{ id: 3, text: "הרבה" }, { id: 4, text: "קצת" }, { id: 5, text: "כלום" }] },
    { id: 3, text: "האם מותקן על המחשב האישי שלכם nodejs?", background_url: 'https://i.imgur.com/6xrqbvr.jpg', text_color: 'rgba(68, 235, 146, 1)', time_to_answer: 20, type: QUESTION_TYPE.MYULIPLE_CHIOCE, answers: [{ id: 6, text: "כן" }, { id: 7, text: "לא" }] },
    { id: 4, text: "עם מה אתם מצפים לצאת מהקורס הזה?", background_url: 'https://i.imgur.com/6xrqbvr.jpg', text_color: 'rgba(235, 201, 68, 1)', time_to_answer: 20, type: QUESTION_TYPE.TEXT_INPUT, answers: [{ id: 8, text: "כלום" }, { id: 9, text: "ג'אווה סקריפט נינג'ה" }] }
];
let currentQuestion = 0;
app.get('/nextQuestion', function (req, res) {
    
    if (!questions[currentQuestion]) {
        currentQuestion=0;
    }
    res.send({"question":questions[currentQuestion],"number_of_questions":questions.length,"index":currentQuestion+1});
    currentQuestion++
});
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})
app.post("/post_answer",(req,res)=>{
    console.log(req.body);
    res.sendStatus(200);
})


app.listen(3000, '0.0.0.0');
