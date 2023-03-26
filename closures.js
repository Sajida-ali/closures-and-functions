//closures:

//Block1:
//הקוד יציג 5
// הסיבה היא שהמשתנה b מוגדר ומאותחל ל-1 מחוץ לפונקציה someFunction() .
//בתוך someFunction(), המשתנה b משויך מחדש ל-5, והפונקציה otherFunction() מוחזרת. כאשר מוחזרת firstResult משימה לתוצאת קריאה ל someFunction(9), זה יחזיר את otherFunction() ו-b יהיה 5. לאחר מכן, משתנה result ישוב לתוצאת הקריאה firstResult(2), המחזירה את ערך b, שהוא 5.

//Block2:
//הקוד יציג 1. הסיבה היא שהמשתנה a מוגדר ומאותחל ל-1 מחוץ לפונקציה b2()
// בתוך  b2()הפונקציה a() מוגדרת, אך אין לה שום השפעה על ערךa .  
// לאחר מכן, a משויך ל-10, אך השיוך הזה הוא מקומי לפונקציה . b2()
//לכן, כאשר מופעל console.log(a), זה יציג את הערך המקורי של a, שהוא 1.

//Block3:
//הקוד יציג את המספר 3, 3 ו-3.
// הסיבה היא ש-let i מוגדר מחוץ ללולאה ומאותחל לא מוגדר. 
//בתוך הלולאה, i מתבצע כל פעם עלייתו מ-0 ל-2. בכל איטרציה של הלולאה, פונקציה log() מוגדרת, המדפיסה את ערך i. 
//לאחר מכן, setTimeout() מתבצע עם log וזמן השהייה של 100 מילישניות.




//functions 
const getRecipeByID = async () => {
  try {
    const IDs = await getIDs();
    console.log(IDs);
    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);
  } catch (error) {
    console.log("It is an error!");
  }
};

getRecipeByID();

