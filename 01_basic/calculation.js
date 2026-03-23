/* Rule you must remember
+ → If string is involved → concatenation
- → Always numeric operation
Evaluation happens left to right

Easy Trick (Interview Tip)

👉 Once a string enters with + → everything becomes string
👉 But - forces conversion back to number

Rules Reminder
"string" - number → converted to number
+ with string → concatenation
- → always numeric
Execution is left to right

console.log("1"-4+"3"+ 5-7+"6"-"5");-3431

* and / → always numeric
They have higher priority than + and -
Then apply left → right

First solve:

4*"3" → 12
"6"/"5" → 1.2

👉 Then everything becomes numbers:

"1" - 12 + 5 - 7 + 1.2

* / % → same level → left to right
👉 + - → same level → left to right
*/