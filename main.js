/* Required External Modules--מודולים שנצטרך לייב
 */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

/** 
 * App Variables--משתנים
 */
//ופע של האקספר דרכו אני נגשת לכל הפונקציות של האקספרס
const app = express()
//
const port = 3000;

//App Configuration--יצירת הAPP והגדרתוץ
//מגדיר לי איזה דף אני רוצה להציג מכל הדפים שיש לי בתוך ה-views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug"); //שימוש במנוע פאג להרצת תצוגה מונעת מידע
app.use(express.static(path.join(__dirname, "public"))); //מחזיר את הקובץ בלי שום שינוי
app.use(bodyParser.urlencoded({ extended: false }));//לוקח את הבקשה וממיר 
app.use(bodyParser.json());//לןקח בקשה וממיר לגסון


/**
 * Routes Definitions-- - ניטוב בקשה --יצירת הרווטנים
 */
app.get('/', (req, res) => {
   //הדף שאני רוצה להציג
   console.log("emeye endalwo")
   res.render("index")
})
app.route('/user')
   .get((req, res) => {
      res.render("errPage")
   })
   .post((req, res) => {
      //הדף שאני רוצה להציג
      console.log(req.body)
      res.render("user", 
      {
         user:
         {
            firstname: req.body.first_Name,
            lastname: req.body.last_Name,
         }
      })
   })

/**
 * Server Activation--הרצת השרת
 */
app.listen(port);