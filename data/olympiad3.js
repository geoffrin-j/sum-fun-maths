// Class 3 Olympiad practice (maths and reasoning), separate from the ICSE classes.
// Same schema as grade3.js. "kind: olympiad" puts it in its own section on the home page,
// and "openAll: true" opens every chapter and lesson (no unlocking order).
window.SUM_FUN_DATA = window.SUM_FUN_DATA || {};
window.SUM_FUN_DATA.olympiad3 = {
  grade: 3,
  kind: "olympiad",
  openAll: true,
  title: "Class 3 Olympiad",
  intro: [
    "Every topic is open. Chapters and topics go from fastest to slowest, so start at the top.",
    "In a real paper, do the fast types first: Number Sense, Missing Number, Estimation, Fractions, Alphabet Test, Analogy, Temperature, Number Names and Roman Numerals.",
    "Save the slowest for last: Nth-term Patterns, Magic Squares, Venn Diagrams, Counting, Spatial Reasoning, Hidden Shapes, Figure Matrix and Paper Folding."
  ],
  topics: [
    {
      id: "numbers",
      title: "Chapter 1: Numbers",
      subtopics: [
        {
          id: "estimation",
          title: "Estimation & Rounding",
          explanation: "Estimating means finding a quick answer that is close to the real one, without working it out exactly.\n\nRound each number first, then do the sum. In multiple-choice questions, this rules out wrong options fast.",
          workedExample: {
            problem: "Which is closest to 198 + 305: 400, 500, 600 or 700?",
            steps: [
              "Round each number to the nearest hundred: 198 becomes 200 and 305 becomes 300.",
              "200 + 300 = 500."
            ],
            answer: "500"
          },
          tips: [
            "Round each number first, then do the operation.",
            "Look at the next digit to round: 5 or more goes up.",
            "Use estimation to cross out wrong options before working anything out exactly."
          ],
          targetTime: "15–25 seconds",
          timeLimit: 25,
          questions: [
            { q: "Estimate 397 + 205 to the nearest hundred.", type: "number", answer: 600, explain: "400 + 200 = 600" },
            { q: "Estimate 52 × 9 by rounding 52 to the nearest ten first.", type: "number", answer: 450, explain: "50 × 9 = 450" },
            { q: "Which is closest to 89 + 31?", type: "mcq", options: ["100", "120", "140"], answer: "120", shuffle: false, explain: "90 + 30 = 120" },
            { q: "Round 673 to the nearest hundred.", type: "number", answer: 700, time: 15 },
            { q: "Estimate 198 − 95 by rounding both to the nearest ten.", type: "number", answer: 100, explain: "200 − 100 = 100" },
            { q: "Round 349 to the nearest hundred.", type: "number", answer: 300, time: 15 },
            { q: "Round 551 to the nearest hundred.", type: "number", answer: 600, time: 15 },
            { q: "Round 84 to the nearest ten.", type: "number", answer: 80, time: 15 },
            { q: "Round 1,260 to the nearest hundred.", type: "number", answer: 1300, time: 20 },
            { q: "Estimate 489 + 311 (nearest hundred).", type: "number", answer: 800, explain: "500 + 300 = 800" },
            { q: "Estimate 38 + 41 (nearest ten).", type: "number", answer: 80, explain: "40 + 40 = 80" },
            { q: "Estimate 603 − 198 (nearest hundred).", type: "number", answer: 400, explain: "600 − 200 = 400" },
            { q: "Estimate 77 − 29 (nearest ten).", type: "number", answer: 50, explain: "80 − 30 = 50" },
            { q: "Estimate 19 × 4 by rounding 19 to 20.", type: "number", answer: 80 },
            { q: "Estimate 31 × 6 by rounding 31 to 30.", type: "number", answer: 180 },
            { q: "Estimate 98 × 5 by rounding 98 to 100.", type: "number", answer: 500 },
            { q: "Which is closest to 62 ÷ 8?", type: "mcq", options: ["6", "8", "10"], answer: "8", shuffle: false, explain: "64 ÷ 8 = 8, and 62 is close to 64." },
            { q: "Which is closest to 297 + 402?", type: "mcq", options: ["600", "700", "800"], answer: "700", shuffle: false },
            { q: "Which is closest to 51 × 2?", type: "mcq", options: ["50", "100", "150"], answer: "100", shuffle: false },
            { q: "Which is closest to 500 − 198?", type: "mcq", options: ["200", "300", "400"], answer: "300", shuffle: false },
            { q: "Estimate 1,000 − 396 (nearest hundred).", type: "number", answer: 600, explain: "1,000 − 400 = 600" },
            { q: "Estimate 251 + 249 (nearest hundred).", type: "number", answer: 500, explain: "300 + 200 = 500" },
            { q: "Estimate 72 + 28 + 51 (nearest ten).", type: "number", answer: 150, explain: "70 + 30 + 50 = 150", time: 30 },
            { q: "A shop sold 198 pens and 305 pencils. Estimate the total (nearest hundred).", type: "number", answer: 500, time: 30 },
            { q: "Ravi has ₹98. He buys things costing ₹41 and ₹52. Estimate his change (round each to the nearest ten).", type: "money", answer: 10, explain: "₹100 − ₹40 − ₹50 = ₹10", time: 35 }
          ]
        },
        {
          id: "number-sense",
          title: "Number Sense & Place Value",
          explanation: "Olympiad papers test reading and writing numbers up to 5 digits, expanded form, comparing, odd and even, and rounding.\n\nFor biggest and smallest number questions, think about which digit should go in each place.",
          workedExample: {
            problem: "What is the largest 3-digit number you can make using 4, 0 and 7 (each used once)?",
            steps: [
              "To make the largest number, put the biggest digit first.",
              "7 is the biggest, so it goes in the hundreds place.",
              "Arrange the rest from largest to smallest: 4, then 0."
            ],
            answer: "740"
          },
          tips: [
            "For the largest number, arrange digits big to small, but never put 0 first.",
            "For the smallest number, put the smallest non-zero digit first, then 0, then the rest in order.",
            "Even numbers end in 0, 2, 4, 6 or 8. Check only the last digit."
          ],
          targetTime: "20–30 seconds",
          timeLimit: 30,
          questions: [
            { q: "What is the smallest 3-digit number using the digits 3, 0, 5?", type: "number", answer: 305, explain: "0 can't go first, so start with 3: 305." },
            { q: "Write 4,072 in expanded form.", type: "text", answer: "4,000 + 70 + 2", accept: ["4,000 + 0 + 70 + 2"], placeholder: "e.g. 1,000 + 200 + 30 + 4", time: 40 },
            { q: "Round 486 to the nearest ten.", type: "number", answer: 490, time: 20 },
            { q: "Which is greater?", type: "mcq", options: ["3,099", "3,100"], answer: "3,100", time: 20 },
            { q: "How many odd numbers are there between 20 and 30?", type: "number", answer: 5, explain: "21, 23, 25, 27 and 29." },
            { q: "What is the largest 3-digit number using 2, 9, 5 once each?", type: "number", answer: 952 },
            { q: "What is the smallest 3-digit number using 7, 0, 4 once each?", type: "number", answer: 407, explain: "0 can't go first, so start with 4: 407." },
            { q: "Round 7,368 to the nearest hundred.", type: "number", answer: 7400, time: 20 },
            { q: "Round 645 to the nearest ten.", type: "number", answer: 650, time: 20 },
            { q: "What is the place value of 6 in 3,614?", type: "number", answer: 600, time: 20 },
            { q: "Write 5,308 in expanded form.", type: "text", answer: "5,000 + 300 + 8", accept: ["5,000 + 300 + 0 + 8"], placeholder: "e.g. 1,000 + 200 + 30 + 4", time: 40 },
            { q: "Is 7,462 even or odd?", type: "mcq", options: ["Even", "Odd"], answer: "Even", shuffle: false, time: 15 },
            { q: "Is 1,359 even or odd?", type: "mcq", options: ["Even", "Odd"], answer: "Odd", shuffle: false, time: 15 },
            { q: "Which is smaller?", type: "mcq", options: ["4,505", "4,550"], answer: "4,505", time: 20 },
            { q: "What is the largest 4-digit number using 1, 6, 0, 3 once each?", type: "number", answer: 6310 },
            { q: "What is the smallest 4-digit number using 1, 6, 0, 3 once each?", type: "number", answer: 1036, explain: "Start with 1, then 0, then 3 and 6." },
            { q: "How many even numbers are there between 11 and 21?", type: "number", answer: 5, explain: "12, 14, 16, 18 and 20." },
            { q: "Round 2,951 to the nearest thousand.", type: "number", answer: 3000, time: 20 },
            { q: "What number comes just after 4,999?", type: "number", answer: 5000, time: 15 },
            { q: "What is 1,000 more than 3,456?", type: "number", answer: 4456, time: 20 },
            { q: "What is 100 less than 5,070?", type: "number", answer: 4970, time: 25 },
            { q: "Write 8,000 + 600 + 5 as a number.", type: "number", answer: 8605, time: 20 },
            { q: "Arrange in ascending order (smallest first).", type: "order", answer: ["5,342", "5,423", "5,432"] },
            { q: "How many digits does the number 10,000 have?", type: "number", answer: 5, time: 15 },
            { q: "Which digit is in the thousands place of 6,284?", type: "number", answer: 6, time: 15 }
          ]
        },
        {
          id: "number-names",
          title: "Number Names",
          explanation: "Write numbers in words and words in figures using place value.\n\nSay the thousands part first, then the hundreds, tens and ones as one group.",
          workedExample: {
            problem: "Write 3,406 in words.",
            steps: [
              "Break it by place value: 3 thousands, 4 hundreds, 0 tens, 6 ones.",
              "Say the thousands part, then the rest as one group."
            ],
            answer: "Three thousand four hundred six"
          },
          tips: [
            "A 0 is skipped when you say the number, but you must keep it when you write the figures.",
            "Numbers from 21 to 99 take a hyphen: forty-five, sixty-three.",
            "Writing \"and\" (three thousand four hundred and six) is also fine."
          ],
          targetTime: "20–30 seconds",
          timeLimit: 45,
          questions: [
            { q: "Write 3,406 in words.", type: "text", answer: "Three thousand four hundred six", placeholder: "e.g. three thousand four hundred six" },
            { q: "Write 5,280 in words.", type: "text", answer: "Five thousand two hundred eighty", placeholder: "e.g. three thousand four hundred six" },
            { q: "Write 7,005 in words.", type: "text", answer: "Seven thousand five", placeholder: "e.g. three thousand four hundred six" },
            { q: "Write 9,090 in words.", type: "text", answer: "Nine thousand ninety", placeholder: "e.g. three thousand four hundred six" },
            { q: "Write 12,345 in words.", type: "text", answer: "Twelve thousand three hundred forty-five", placeholder: "e.g. three thousand four hundred six", time: 50 },
            { q: "Write 20,008 in words.", type: "text", answer: "Twenty thousand eight", placeholder: "e.g. three thousand four hundred six" },
            { q: "Write 41,500 in words.", type: "text", answer: "Forty-one thousand five hundred", placeholder: "e.g. three thousand four hundred six" },
            { q: "Write 60,060 in words.", type: "text", answer: "Sixty thousand sixty", placeholder: "e.g. three thousand four hundred six" },
            { q: "Write 85,309 in words.", type: "text", answer: "Eighty-five thousand three hundred nine", placeholder: "e.g. three thousand four hundred six", time: 50 },
            { q: "Write 99,999 in words.", type: "text", answer: "Ninety-nine thousand nine hundred ninety-nine", placeholder: "e.g. three thousand four hundred six", time: 50 },
            { q: "Write in figures: two thousand six hundred four.", type: "number", answer: 2604, time: 25 },
            { q: "Write in figures: four thousand forty.", type: "number", answer: 4040, time: 25 },
            { q: "Write in figures: eight thousand eight.", type: "number", answer: 8008, time: 25 },
            { q: "Write in figures: fifteen thousand two hundred.", type: "number", answer: 15200, time: 25 },
            { q: "Write in figures: thirty thousand three.", type: "number", answer: 30003, time: 25 },
            { q: "Write in figures: fifty-six thousand seven hundred eighty.", type: "number", answer: 56780, time: 25 },
            { q: "Write in figures: seventy thousand seventy.", type: "number", answer: 70070, time: 25 },
            { q: "Write in figures: ninety thousand nine hundred nine.", type: "number", answer: 90909, time: 25 },
            { q: "Write in figures: eleven thousand eleven.", type: "number", answer: 11011, time: 25 },
            { q: "Write in figures: sixty-three thousand five hundred twelve.", type: "number", answer: 63512, time: 25 },
            { q: "Which is greater?", type: "mcq", options: ["Four thousand five hundred", "Four thousand fifty"], answer: "Four thousand five hundred", explain: "4,500 is more than 4,050.", time: 25 },
            { q: "Write the number name of the number just after 4,999.", type: "text", answer: "Five thousand", placeholder: "e.g. three thousand four hundred six", time: 30 },
            { q: "Write the number name of the number just before 10,000.", type: "text", answer: "Nine thousand nine hundred ninety-nine", placeholder: "e.g. three thousand four hundred six" },
            { q: "Write 10,000 in words.", type: "text", answer: "Ten thousand", placeholder: "e.g. three thousand four hundred six", time: 25 },
            { q: "How many digits are there in \"twenty-five thousand six hundred two\"?", type: "number", answer: 5, explain: "25,602 has 5 digits.", time: 30 }
          ]
        },
        {
          id: "roman-numerals",
          title: "Roman Numerals (up to 50)",
          explanation: "Roman numerals use letters for numbers: I = 1, V = 5, X = 10 and L = 50.\n\nA smaller symbol after a bigger one is added (VI = 6). A smaller symbol before a bigger one is taken away (IV = 4, IX = 9, XL = 40).",
          workedExample: {
            problem: "Write 14 in Roman numerals.",
            steps: [
              "14 = 10 + 4.",
              "Ten is X. Four is IV (I before V means 5 − 1)."
            ],
            answer: "XIV"
          },
          tips: [
            "Learn I = 1, V = 5, X = 10, L = 50.",
            "Smaller after bigger means add. Smaller before bigger means take away.",
            "Never write the same symbol more than 3 times in a row: use IV, not IIII."
          ],
          targetTime: "20–30 seconds",
          timeLimit: 30,
          questions: [
            { q: "Write 14 in Roman numerals.", type: "text", answer: "XIV", placeholder: "e.g. XIV" },
            { q: "Write 3 in Roman numerals.", type: "text", answer: "III", placeholder: "e.g. XIV" },
            { q: "Write 7 in Roman numerals.", type: "text", answer: "VII", placeholder: "e.g. XIV" },
            { q: "Write 9 in Roman numerals.", type: "text", answer: "IX", placeholder: "e.g. XIV" },
            { q: "Write 11 in Roman numerals.", type: "text", answer: "XI", placeholder: "e.g. XIV" },
            { q: "Write 16 in Roman numerals.", type: "text", answer: "XVI", placeholder: "e.g. XIV" },
            { q: "Write 19 in Roman numerals.", type: "text", answer: "XIX", placeholder: "e.g. XIV" },
            { q: "Write 22 in Roman numerals.", type: "text", answer: "XXII", placeholder: "e.g. XIV" },
            { q: "Write 25 in Roman numerals.", type: "text", answer: "XXV", placeholder: "e.g. XIV" },
            { q: "Write 28 in Roman numerals.", type: "text", answer: "XXVIII", placeholder: "e.g. XIV" },
            { q: "Write 34 in Roman numerals.", type: "text", answer: "XXXIV", placeholder: "e.g. XIV" },
            { q: "Write 39 in Roman numerals.", type: "text", answer: "XXXIX", placeholder: "e.g. XIV" },
            { q: "Write 40 in Roman numerals.", type: "text", answer: "XL", placeholder: "e.g. XIV" },
            { q: "Write 45 in Roman numerals.", type: "text", answer: "XLV", placeholder: "e.g. XIV" },
            { q: "Write 49 in Roman numerals.", type: "text", answer: "XLIX", placeholder: "e.g. XIV" },
            { q: "Write VIII as a number.", type: "number", answer: 8, time: 20 },
            { q: "Write XII as a number.", type: "number", answer: 12, time: 20 },
            { q: "Write XV as a number.", type: "number", answer: 15, time: 20 },
            { q: "Write XXI as a number.", type: "number", answer: 21, time: 20 },
            { q: "Write XXIV as a number.", type: "number", answer: 24 },
            { q: "Write XXXII as a number.", type: "number", answer: 32 },
            { q: "Write XLVI as a number.", type: "number", answer: 46, explain: "XL = 40 and VI = 6." },
            { q: "XVIII + II = ? (answer in Roman numerals)", type: "text", answer: "XX", placeholder: "e.g. XIV", explain: "18 + 2 = 20, which is XX." },
            { q: "Which is bigger?", type: "mcq", options: ["XIV", "XL"], answer: "XL", shuffle: false, explain: "XIV = 14 and XL = 40." },
            { q: "Write the Roman numeral for the number just after XXIX.", type: "text", answer: "XXX", placeholder: "e.g. XIV", explain: "XXIX = 29, so the next number is 30 = XXX." }
          ]
        },
        {
          id: "sum-of-digits",
          title: "Sum of Digits Tricks",
          explanation: "The digit sum of a number means adding its digits: the digit sum of 47 is 4 + 7 = 11.\n\nDigit sums help you check numbers quickly. A number divides exactly by 3 if its digit sum does, and by 9 if its digit sum does.",
          workedExample: {
            problem: "Find a 2-digit even number whose digits add up to 12 and whose tens digit is bigger than its units digit.",
            steps: [
              "Digit pairs that add to 12: (9, 3), (8, 4), (7, 5), (6, 6).",
              "Tens bigger than units: 93, 84, 75.",
              "It must be even: only 84 ends in an even digit."
            ],
            answer: "84"
          },
          tips: [
            "\"Sum of digits\" means adding each digit separately.",
            "Divisible by 3 if the digit sum is divisible by 3. Divisible by 9 if the digit sum is divisible by 9.",
            "With several clues, use them one at a time and cross out options as you go."
          ],
          targetTime: "40–60 seconds",
          timeLimit: 55,
          questions: [
            { q: "What is the digit sum of 758?", type: "number", answer: 20, time: 25 },
            { q: "What is the smallest 2-digit number whose digits add up to 9?", type: "number", answer: 18 },
            { q: "Is 141 divisible by 3? Use the digit-sum trick.", type: "mcq", options: ["Yes", "No"], answer: "Yes", shuffle: false, explain: "1 + 4 + 1 = 6, and 6 divides by 3.", time: 35 },
            { q: "Find a 3-digit number with a digit sum of 6 where all the digits are the same.", type: "number", answer: 222 },
            { q: "What is the smallest 2-digit odd number whose digits add up to 10 and whose tens digit is smaller than its units digit?", type: "number", answer: 19, time: 60 },
            { q: "What is the digit sum of 346?", type: "number", answer: 13, time: 25 },
            { q: "What is the digit sum of 909?", type: "number", answer: 18, time: 25 },
            { q: "What is the digit sum of 1,234?", type: "number", answer: 10, time: 25 },
            { q: "Is 252 divisible by 3?", type: "mcq", options: ["Yes", "No"], answer: "Yes", shuffle: false, explain: "2 + 5 + 2 = 9, which divides by 3.", time: 35 },
            { q: "Is 124 divisible by 3?", type: "mcq", options: ["Yes", "No"], answer: "No", shuffle: false, explain: "1 + 2 + 4 = 7, which does not divide by 3.", time: 35 },
            { q: "Is 729 divisible by 9?", type: "mcq", options: ["Yes", "No"], answer: "Yes", shuffle: false, explain: "7 + 2 + 9 = 18, which divides by 9.", time: 35 },
            { q: "Is 458 divisible by 9?", type: "mcq", options: ["Yes", "No"], answer: "No", shuffle: false, explain: "4 + 5 + 8 = 17, which does not divide by 9.", time: 35 },
            { q: "What is the largest 2-digit number whose digits add up to 10?", type: "number", answer: 91 },
            { q: "What is the smallest 2-digit number whose digits add up to 10?", type: "number", answer: 19 },
            { q: "What is the largest 2-digit number whose digits add up to 12?", type: "number", answer: 93 },
            { q: "What is the smallest 3-digit number whose digits add up to 5?", type: "number", answer: 104 },
            { q: "What is the largest 3-digit number whose digits add up to 4?", type: "number", answer: 400 },
            { q: "A 2-digit number's digits add up to 7, and its tens digit is 1 more than its units digit. What is the number?", type: "number", answer: 43, time: 60 },
            { q: "How many 2-digit numbers have a digit sum of 3?", type: "number", answer: 3, explain: "12, 21 and 30." },
            { q: "A 2-digit number is odd, is a multiple of 5 and has a digit sum of 8. What is it?", type: "number", answer: 35, time: 60 },
            { q: "What is the digit sum of 9,999?", type: "number", answer: 36, time: 25 },
            { q: "Which is divisible by 3?", type: "mcq", options: ["214", "315", "416"], answer: "315", explain: "3 + 1 + 5 = 9." },
            { q: "Which is divisible by 9?", type: "mcq", options: ["234", "235", "236"], answer: "234", explain: "2 + 3 + 4 = 9." },
            { q: "What is the digit sum of the largest 3-digit number?", type: "number", answer: 27, explain: "The largest 3-digit number is 999, and 9 + 9 + 9 = 27." },
            { q: "What is the smallest 3-digit number divisible by 9?", type: "number", answer: 108, explain: "1 + 0 + 8 = 9." }
          ]
        }
      ]
    },
    {
      id: "measures-time-data",
      title: "Chapter 2: Measures, Time & Data",
      subtopics: [
        {
          id: "temperature",
          title: "Temperature",
          explanation: "Temperature tells us how hot or cold something is. We measure it in degrees Celsius (°C) with a thermometer.\n\nWater freezes at 0°C and boils at 100°C. Normal body temperature is about 37°C.",
          workedExample: {
            problem: "Which is colder: 15°C or 5°C?",
            steps: [
              "A smaller number on the Celsius scale means colder.",
              "5 is smaller than 15."
            ],
            answer: "5°C is colder"
          },
          tips: [
            "Water freezes at 0°C, room temperature is about 20–25°C, body temperature is about 37°C, and water boils at 100°C.",
            "A bigger number means hotter. Below 0°C is colder than freezing.",
            "On a thermometer, read the scale first."
          ],
          targetTime: "25–35 seconds",
          timeLimit: 30,
          questions: [
            { q: "Which is hotter?", type: "mcq", options: ["30°C", "18°C"], answer: "30°C", time: 20 },
            { q: "Is 0°C the freezing point or the boiling point of water?", type: "mcq", options: ["Freezing point", "Boiling point"], answer: "Freezing point", shuffle: false, time: 20 },
            { q: "A thermometer shows 37°C. Is this close to normal body temperature?", type: "mcq", options: ["Yes", "No"], answer: "Yes", shuffle: false, time: 20 },
            { q: "Which is colder?", type: "mcq", options: ["−2°C", "3°C"], answer: "−2°C", explain: "Below zero is colder than above zero." },
            { q: "Room temperature is 22°C and outside is 8°C. Which is warmer?", type: "mcq", options: ["Room temperature", "Outside"], answer: "Room temperature", shuffle: false, time: 25 },
            { q: "Which is hotter?", type: "mcq", options: ["5°C", "25°C"], answer: "25°C", time: 20 },
            { q: "Which is colder?", type: "mcq", options: ["12°C", "8°C"], answer: "8°C", time: 20 },
            { q: "At what temperature does water boil?", type: "number", unit: "°C", answer: 100, time: 20 },
            { q: "At what temperature does water freeze?", type: "number", unit: "°C", answer: 0, time: 20 },
            { q: "What is normal human body temperature?", type: "number", unit: "°C", answer: 37, time: 20 },
            { q: "Which is warmer?", type: "mcq", options: ["0°C", "10°C"], answer: "10°C", time: 20 },
            { q: "Which is the coldest?", type: "mcq", options: ["15°C", "−3°C", "5°C"], answer: "−3°C" },
            { q: "Arrange from coldest to hottest.", type: "order", answer: ["5°C", "12°C", "20°C"] },
            { q: "The temperature rises from 20°C to 28°C. By how many degrees did it rise?", type: "number", unit: "°C", answer: 8 },
            { q: "The temperature falls from 30°C to 22°C. By how many degrees did it fall?", type: "number", unit: "°C", answer: 8 },
            { q: "It is 18°C in the morning and 31°C in the afternoon. How much warmer is the afternoon?", type: "number", unit: "°C", answer: 13 },
            { q: "At night it is 9°C and in the day it is 24°C. What is the difference?", type: "number", unit: "°C", answer: 15 },
            { q: "Which is a good temperature for a hot drink?", type: "mcq", options: ["5°C", "70°C"], answer: "70°C", time: 20 },
            { q: "At what temperature does ice melt?", type: "number", unit: "°C", answer: 0, time: 20 },
            { q: "A child has a temperature of 39°C. Is this above or below normal body temperature?", type: "mcq", options: ["Above", "Below"], answer: "Above", shuffle: false, explain: "Normal is about 37°C.", time: 25 },
            { q: "Which is more likely on a summer day in Kerala?", type: "mcq", options: ["35°C", "5°C"], answer: "35°C", time: 20 },
            { q: "Snow forms when the temperature is below how many °C?", type: "number", unit: "°C", answer: 0, time: 25 },
            { q: "Which unit measures temperature?", type: "mcq", options: ["kg", "°C", "cm"], answer: "°C", time: 20 },
            { q: "What is the instrument that measures temperature called?", type: "mcq", options: ["Thermometer", "Ruler", "Weighing scale", "Clock"], answer: "Thermometer", time: 20 },
            { q: "The temperature is 3°C and it falls by 5°C. What is it now?", type: "number", unit: "°C", answer: -2, explain: "3 − 5 = −2. It goes 2 degrees below zero.", time: 40 }
          ]
        },
        {
          id: "fractions-intro",
          title: "Fractions",
          explanation: "A fraction is a part of a whole cut into equal parts. The bottom number (denominator) is how many equal parts there are. The top number (numerator) is how many parts we mean.\n\nTo find a fraction of a number, divide by the bottom number, then multiply by the top number.",
          workedExample: {
            problem: "A pizza is cut into 8 equal slices. 3 slices are eaten. What fraction is left?",
            steps: [
              "There are 8 slices, so the denominator is 8.",
              "Left: 8 − 3 = 5 slices."
            ],
            answer: "5/8"
          },
          tips: [
            "The bottom number is the total number of equal parts.",
            "With the same denominator, the bigger numerator is bigger: 3/8 > 2/8.",
            "With the same numerator, fewer parts means bigger pieces: 1/2 > 1/4."
          ],
          targetTime: "30–45 seconds",
          timeLimit: 40,
          questions: [
            { q: "A chocolate bar has 6 equal pieces. 2 are eaten. What fraction is left?", type: "text", answer: "4/6", accept: ["2/3"], placeholder: "e.g. 3/4" },
            { q: "Which is bigger?", type: "mcq", options: ["3/5", "4/5"], answer: "4/5", time: 25 },
            { q: "A shape has 4 equal parts and 1 is shaded. What fraction is shaded?", type: "text", answer: "1/4", placeholder: "e.g. 3/4", time: 30 },
            { q: "1/2 of a cake is eaten. The cake had 10 slices. How many slices were eaten?", type: "number", unit: "slices", answer: 5, time: 30 },
            { q: "Which is bigger?", type: "mcq", options: ["1/2", "1/4"], answer: "1/2", time: 25 },
            { q: "Which is bigger?", type: "mcq", options: ["3/8", "5/8"], answer: "5/8", time: 25 },
            { q: "A shape has 8 equal parts and 3 are shaded. What fraction is shaded?", type: "text", answer: "3/8", placeholder: "e.g. 3/4", time: 30 },
            { q: "A shape has 8 equal parts and 3 are shaded. What fraction is NOT shaded?", type: "text", answer: "5/8", placeholder: "e.g. 3/4" },
            { q: "What is 1/2 of 14?", type: "number", answer: 7, time: 25 },
            { q: "What is 1/4 of 20?", type: "number", answer: 5, time: 25 },
            { q: "What is 1/3 of 18?", type: "number", answer: 6, time: 25 },
            { q: "What is 3/4 of 8?", type: "number", answer: 6, explain: "8 ÷ 4 = 2, and 2 × 3 = 6." },
            { q: "1/2 = ?/4", type: "number", answer: 2, time: 25 },
            { q: "1/2 = ?/8", type: "number", answer: 4, time: 25 },
            { q: "How many quarters make 1 whole?", type: "number", answer: 4, time: 20 },
            { q: "2/2 is equal to how many wholes?", type: "number", answer: 1, time: 20 },
            { q: "Which is bigger?", type: "mcq", options: ["1/3", "1/5"], answer: "1/3", explain: "Thirds are bigger pieces than fifths." },
            { q: "Which is the smallest?", type: "mcq", options: ["1/2", "1/4", "1/8"], answer: "1/8" },
            { q: "Arrange in ascending order (smallest first).", type: "order", answer: ["1/6", "3/6", "5/6"], time: 35 },
            { q: "A cake is cut into 10 slices and 4 are eaten. What fraction is left?", type: "text", answer: "6/10", accept: ["3/5"], placeholder: "e.g. 3/4" },
            { q: "There are 12 mangoes and 1/4 of them are ripe. How many are ripe?", type: "number", answer: 3 },
            { q: "A day has 24 hours. Rita sleeps for 1/3 of the day. How many hours does she sleep?", type: "number", unit: "hours", answer: 8, explain: "24 ÷ 3 = 8" },
            { q: "5/5 is equal to how many wholes?", type: "number", answer: 1, time: 20 },
            { q: "Are 2/6 and 1/3 equal?", type: "mcq", options: ["Yes", "No"], answer: "Yes", shuffle: false, explain: "Divide the top and bottom of 2/6 by 2 to get 1/3." },
            { q: "A pizza has 8 slices. Ravi eats 1/4 of the pizza. How many slices does he eat?", type: "number", unit: "slices", answer: 2, explain: "8 ÷ 4 = 2" }
          ]
        },
        {
          id: "data-handling",
          title: "Data Handling",
          explanation: "Graphs and tables show information. A pictograph uses symbols, and the key tells you what each symbol is worth. A bar graph uses bars, read against the scale.\n\n\"In total\" means add. \"How many more\" or \"fewer\" means subtract.",
          workedExample: {
            problem: "Pictograph: Apples 🍎🍎🍎 and Bananas 🍌🍌🍌🍌, with each symbol = 2 fruits. How many more bananas than apples?",
            steps: [
              "Apples: 3 symbols × 2 = 6.",
              "Bananas: 4 symbols × 2 = 8.",
              "8 − 6 = 2."
            ],
            answer: "2 more bananas"
          },
          tips: [
            "Always check the key first. This is where most marks are lost.",
            "For bar graphs, read the value from the scale, not by guessing.",
            "\"In total\" means add. \"How many more or fewer\" means subtract."
          ],
          targetTime: "30–45 seconds",
          timeLimit: 40,
          questions: [
            { q: "Pictograph (each symbol = 2 fruits):\nApples 🍎🍎🍎 · Bananas 🍌🍌🍌🍌 · Oranges 🍊🍊🍊🍊🍊\n\nHow many apples are there in total?", type: "number", answer: 6, explain: "3 symbols × 2 = 6" },
            { q: "Pictograph (each symbol = 2 fruits):\nApples 🍎🍎🍎 · Bananas 🍌🍌🍌🍌 · Oranges 🍊🍊🍊🍊🍊\n\nHow many oranges are there in total?", type: "number", answer: 10, explain: "5 symbols × 2 = 10" },
            { q: "Pictograph (each symbol = 2 fruits):\nApples 🍎🍎🍎 · Bananas 🍌🍌🍌🍌 · Oranges 🍊🍊🍊🍊🍊\n\nHow many apples, bananas and oranges are there altogether?", type: "number", answer: 24, explain: "6 + 8 + 10 = 24" },
            { q: "Pictograph (each symbol = 2 fruits):\nApples 🍎🍎🍎 · Bananas 🍌🍌🍌🍌 · Oranges 🍊🍊🍊🍊🍊\n\nWhich fruit has the most?", type: "mcq", options: ["Apples", "Bananas", "Oranges"], answer: "Oranges", shuffle: false, time: 25 },
            { q: "Pictograph (each symbol = 2 fruits):\nApples 🍎🍎🍎 · Bananas 🍌🍌🍌🍌 · Oranges 🍊🍊🍊🍊🍊\n\nIf each banana symbol meant 3 bananas instead, how many bananas would there be?", type: "number", answer: 12, explain: "4 × 3 = 12" },
            { q: "Pictograph (each symbol = 2 fruits):\nApples 🍎🍎🍎 · Bananas 🍌🍌🍌🍌 · Oranges 🍊🍊🍊🍊🍊\n\nHow many bananas are there?", type: "number", answer: 8, time: 30 },
            { q: "Pictograph (each symbol = 2 fruits):\nApples 🍎🍎🍎 · Bananas 🍌🍌🍌🍌 · Oranges 🍊🍊🍊🍊🍊\n\nHow many more oranges than bananas?", type: "number", answer: 2, explain: "10 − 8 = 2" },
            { q: "Pictograph (each symbol = 2 fruits):\nApples 🍎🍎🍎 · Bananas 🍌🍌🍌🍌 · Oranges 🍊🍊🍊🍊🍊\n\nHow many fewer apples than oranges?", type: "number", answer: 4, explain: "10 − 6 = 4" },
            { q: "Pictograph (each symbol = 2 fruits):\nApples 🍎🍎🍎 · Bananas 🍌🍌🍌🍌 · Oranges 🍊🍊🍊🍊🍊\n\nHow many apples and bananas are there together?", type: "number", answer: 14, explain: "6 + 8 = 14" },
            { q: "Pictograph (each symbol = 2 fruits):\nApples 🍎🍎🍎 · Bananas 🍌🍌🍌🍌 · Oranges 🍊🍊🍊🍊🍊\n\nWhich fruit has the least?", type: "mcq", options: ["Apples", "Bananas", "Oranges"], answer: "Apples", shuffle: false, time: 25 },
            { q: "Pictograph (each symbol = 2 fruits):\nApples 🍎🍎🍎 · Bananas 🍌🍌🍌🍌 · Oranges 🍊🍊🍊🍊🍊\n\nIf 1 more apple symbol is added, how many apples are there?", type: "number", answer: 8, explain: "4 symbols × 2 = 8" },
            { q: "Pictograph (each symbol = 2 fruits):\nApples 🍎🍎🍎 · Bananas 🍌🍌🍌🍌 · Oranges 🍊🍊🍊🍊🍊\n\nHow many symbols are needed to show 12 fruits?", type: "number", answer: 6, explain: "12 ÷ 2 = 6" },
            { q: "Pictograph (each symbol = 2 fruits):\nApples 🍎🍎🍎 · Bananas 🍌🍌🍌🍌 · Oranges 🍊🍊🍊🍊🍊\n\nIf each symbol meant 5 fruits, how many oranges would there be?", type: "number", answer: 25, explain: "5 × 5 = 25" },
            { q: "Pictograph (each symbol = 2 fruits):\nApples 🍎🍎🍎 · Bananas 🍌🍌🍌🍌 · Oranges 🍊🍊🍊🍊🍊\n\nHow many symbols are there in all?", type: "number", answer: 12, explain: "3 + 4 + 5 = 12" },
            { q: "Pictograph (each symbol = 2 fruits):\nApples 🍎🍎🍎 · Bananas 🍌🍌🍌🍌 · Oranges 🍊🍊🍊🍊🍊\n\nIf each symbol meant 10 fruits, how many fruits would all the symbols show?", type: "number", answer: 120, explain: "12 symbols × 10 = 120" },
            { q: "Bar graph of votes for favourite sport:\nCricket 12 · Football 9 · Tennis 6 · Hockey 3\n\nHow many votes did football get?", type: "number", answer: 9, time: 25 },
            { q: "Bar graph of votes for favourite sport:\nCricket 12 · Football 9 · Tennis 6 · Hockey 3\n\nWhich sport got the most votes?", type: "mcq", options: ["Cricket", "Football", "Tennis", "Hockey"], answer: "Cricket", shuffle: false, time: 25 },
            { q: "Bar graph of votes for favourite sport:\nCricket 12 · Football 9 · Tennis 6 · Hockey 3\n\nWhich sport got the fewest votes?", type: "mcq", options: ["Cricket", "Football", "Tennis", "Hockey"], answer: "Hockey", shuffle: false, time: 25 },
            { q: "Bar graph of votes for favourite sport:\nCricket 12 · Football 9 · Tennis 6 · Hockey 3\n\nHow many votes were there in total?", type: "number", answer: 30, explain: "12 + 9 + 6 + 3 = 30" },
            { q: "Bar graph of votes for favourite sport:\nCricket 12 · Football 9 · Tennis 6 · Hockey 3\n\nHow many more votes did cricket get than tennis?", type: "number", answer: 6, explain: "12 − 6 = 6" },
            { q: "Bar graph of votes for favourite sport:\nCricket 12 · Football 9 · Tennis 6 · Hockey 3\n\nHow many votes did football and hockey get together?", type: "number", answer: 12, explain: "9 + 3 = 12" },
            { q: "Bar graph of votes for favourite sport:\nCricket 12 · Football 9 · Tennis 6 · Hockey 3\n\nHow many sports got more than 5 votes?", type: "number", answer: 3, explain: "Cricket, football and tennis." },
            { q: "Bar graph of votes for favourite sport:\nCricket 12 · Football 9 · Tennis 6 · Hockey 3\n\nWhat is the difference between the highest and the lowest number of votes?", type: "number", answer: 9, explain: "12 − 3 = 9" },
            { q: "Bar graph of votes for favourite sport:\nCricket 12 · Football 9 · Tennis 6 · Hockey 3\n\nIf 5 more children vote for hockey, how many votes will hockey have?", type: "number", answer: 8 },
            { q: "Bar graph of votes for favourite sport:\nCricket 12 · Football 9 · Tennis 6 · Hockey 3\n\nWhat is half of the votes for cricket?", type: "number", answer: 6 }
          ]
        },
        {
          id: "measurement-time-money",
          title: "Measurement, Time & Money",
          explanation: "Know your conversions: 1 hour = 60 minutes, 1 minute = 60 seconds, 1 m = 100 cm, 1 kg = 1,000 g and 1 L = 1,000 mL.\n\nWhen adding time, add the hours and minutes separately, then fix it if the minutes go past 60.",
          workedExample: {
            problem: "A movie starts at 3:45 PM and lasts 1 hour 30 minutes. What time does it end?",
            steps: [
              "Add the hour first: 3:45 + 1 hour = 4:45.",
              "Then add 30 minutes: 4:45 + 30 minutes = 5:15."
            ],
            answer: "5:15 PM"
          },
          tips: [
            "Add hours and minutes separately, then fix it if the minutes go past 60.",
            "1 hour = 60 min, 1 m = 100 cm, 1 kg = 1,000 g, 1 L = 1,000 mL.",
            "For money, count the biggest notes first."
          ],
          targetTime: "35–50 seconds",
          timeLimit: 50,
          questions: [
            { q: "Convert 2 hours 15 minutes into minutes.", type: "number", unit: "minutes", answer: 135, explain: "120 + 15 = 135" },
            { q: "A class starts at 9:20 AM and ends at 10:05 AM. How long is the class?", type: "number", unit: "minutes", answer: 45 },
            { q: "How many centimetres are in 3.5 metres?", type: "number", unit: "cm", answer: 350, explain: "3 m = 300 cm, and half a metre = 50 cm." },
            { q: "Sam has 2 notes of ₹10, 3 notes of ₹5 and 4 coins of ₹1. How much money does he have in all?", type: "money", answer: 39, explain: "₹20 + ₹15 + ₹4 = ₹39" },
            { q: "A bottle holds 750 mL. How many mL are needed to fill 2 bottles?", type: "number", unit: "mL", answer: 1500, time: 35 },
            { q: "How many minutes are in 3 hours?", type: "number", unit: "minutes", answer: 180, time: 25 },
            { q: "How many minutes are in 1 hour 20 minutes?", type: "number", unit: "minutes", answer: 80, time: 30 },
            { q: "A show starts at 4:15 PM and lasts 45 minutes. When does it end?", type: "text", answer: "5:00 PM", accept: ["5:00 p.m.", "5 pm", "5.00 pm", "5:00", "5 o'clock"], placeholder: "e.g. 4:30 PM" },
            { q: "Convert 4 m to cm.", type: "number", unit: "cm", answer: 400, time: 25 },
            { q: "Convert 2 kg 500 g to g.", type: "number", unit: "g", answer: 2500, time: 30 },
            { q: "Convert 3 L to mL.", type: "number", unit: "mL", answer: 3000, time: 25 },
            { q: "How many seconds are in 2 minutes?", type: "number", unit: "seconds", answer: 120, time: 25 },
            { q: "A pencil box costs ₹45 and a bag costs ₹120. What is the total cost?", type: "money", answer: 165, time: 35 },
            { q: "Anu has ₹100 and buys a toy for ₹64. How much change should she get?", type: "money", answer: 36, time: 35 },
            { q: "How many ₹5 coins make ₹50?", type: "number", answer: 10, time: 30 },
            { q: "Which is longer?", type: "mcq", options: ["2 m", "150 cm"], answer: "2 m", explain: "2 m = 200 cm.", time: 30 },
            { q: "Which is heavier?", type: "mcq", options: ["1,500 g", "1 kg"], answer: "1,500 g", explain: "1 kg = 1,000 g.", time: 30 },
            { q: "How much is 2 notes of ₹50 and 3 notes of ₹20?", type: "money", answer: 160, explain: "₹100 + ₹60 = ₹160", time: 35 },
            { q: "A bus leaves at 7:45 AM and arrives at 9:15 AM. How long is the journey?", type: "text", answer: "1 hour 30 minutes", accept: ["1 h 30 min", "1 hr 30 min", "90 minutes", "1 hour 30 mins"], placeholder: "e.g. 1 hour 20 minutes" },
            { q: "3 m 40 cm + 2 m 80 cm = ?", type: "text", answer: "6 m 20 cm", accept: ["620 cm"], placeholder: "e.g. 2 m 45 cm" },
            { q: "5 kg − 2 kg 300 g = ?", type: "text", answer: "2 kg 700 g", accept: ["2700 g"], placeholder: "e.g. 2 kg 500 g" },
            { q: "A jug holds 1 L. How many 200 mL cups can it fill?", type: "number", unit: "cups", answer: 5, explain: "1,000 ÷ 200 = 5" },
            { q: "How many days are in 3 weeks?", type: "number", unit: "days", answer: 21, time: 25 },
            { q: "School starts at 8:30 AM and the first break is at 10:15 AM. How long is that?", type: "text", answer: "1 hour 45 minutes", accept: ["1 h 45 min", "1 hr 45 min", "105 minutes", "1 hour 45 mins"], placeholder: "e.g. 1 hour 20 minutes" },
            { q: "Ria buys 3 notebooks at ₹28 each. How much does she pay?", type: "money", answer: 84, time: 40 }
          ]
        },
        {
          id: "calendar",
          title: "Calendar Problems",
          explanation: "Days of the week repeat every 7 days. Dates that are 7, 14, 21 or 28 days apart fall on the same day.\n\nFor other gaps, divide the number of days by 7. The remainder tells you how many days to move on.",
          workedExample: {
            problem: "The 1st of a month is a Monday. What day is the 15th?",
            steps: [
              "15 − 1 = 14 days later.",
              "14 ÷ 7 = 2 with no remainder, so it is the same day."
            ],
            answer: "Monday"
          },
          tips: [
            "Subtract the dates, divide by 7 and use the remainder. Remainder 0 means the same day.",
            "Dates 7, 14, 21 or 28 days apart fall on the same day.",
            "Check by counting forward 7 days at a time."
          ],
          targetTime: "40–60 seconds",
          timeLimit: 50,
          questions: [
            { q: "The 1st is a Wednesday. What day is the 8th?", type: "mcq", options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], answer: "Wednesday", shuffle: false, time: 30 },
            { q: "The 3rd is a Friday. What day is the 10th?", type: "mcq", options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], answer: "Friday", shuffle: false, time: 30 },
            { q: "The 1st is a Sunday. What day is the 22nd?", type: "mcq", options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], answer: "Sunday", shuffle: false, explain: "21 days later is exactly 3 weeks." },
            { q: "Today is Tuesday. What day will it be in 10 days?", type: "mcq", options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], answer: "Friday", shuffle: false, explain: "10 ÷ 7 = 1 R 3, and Tuesday + 3 days = Friday." },
            { q: "The 5th is a Monday. What day was the 1st?", type: "mcq", options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], answer: "Thursday", shuffle: false, explain: "Count back 4 days from Monday." },
            { q: "The 2nd is a Monday. What day is the 9th?", type: "mcq", options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], answer: "Monday", shuffle: false, time: 30 },
            { q: "The 1st is a Friday. What day is the 3rd?", type: "mcq", options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], answer: "Sunday", shuffle: false, time: 30 },
            { q: "The 5th is a Thursday. What day is the 12th?", type: "mcq", options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], answer: "Thursday", shuffle: false, time: 30 },
            { q: "The 1st is a Saturday. What day is the 15th?", type: "mcq", options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], answer: "Saturday", shuffle: false, explain: "14 days later is exactly 2 weeks." },
            { q: "The 1st is a Tuesday. What day is the 10th?", type: "mcq", options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], answer: "Thursday", shuffle: false, explain: "9 days later: 9 ÷ 7 = 1 R 2, and Tuesday + 2 = Thursday." },
            { q: "The 1st is a Monday. What day is the 20th?", type: "mcq", options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], answer: "Saturday", shuffle: false, explain: "19 days later: 19 ÷ 7 = 2 R 5, and Monday + 5 = Saturday." },
            { q: "The 7th is a Sunday. What day is the 1st?", type: "mcq", options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], answer: "Monday", shuffle: false, explain: "6 days earlier than Sunday is Monday." },
            { q: "The 10th is a Wednesday. What day is the 1st?", type: "mcq", options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], answer: "Monday", shuffle: false, explain: "9 days earlier: 7 days back is Wednesday again, then 2 more back is Monday." },
            { q: "Today is Friday. What day will it be after 3 days?", type: "mcq", options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], answer: "Monday", shuffle: false, time: 30 },
            { q: "Today is Sunday. What day will it be after 15 days?", type: "mcq", options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], answer: "Monday", shuffle: false, explain: "15 ÷ 7 = 2 R 1, and Sunday + 1 = Monday." },
            { q: "Today is Wednesday. What day was it 4 days ago?", type: "mcq", options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], answer: "Saturday", shuffle: false, time: 30 },
            { q: "A month has 28 days and starts on a Monday. How many Mondays does it have?", type: "number", answer: 4, explain: "28 days is exactly 4 weeks." },
            { q: "A month of 30 days starts on a Saturday. How many Saturdays does it have?", type: "number", answer: 5, explain: "Saturdays fall on the 1st, 8th, 15th, 22nd and 29th." },
            { q: "A month of 31 days starts on a Thursday. Which days of the week happen 5 times? Pick all.", type: "multi", options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], answer: ["Thursday", "Friday", "Saturday"], explain: "4 full weeks is 28 days. The 3 extra days (29, 30, 31) are Thursday, Friday and Saturday.", time: 70 },
            { q: "25 December is a Monday. What day is 1 January next?", type: "mcq", options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], answer: "Monday", shuffle: false, explain: "1 January is 7 days after 25 December." },
            { q: "15 August is a Saturday. What day is 1 August?", type: "mcq", options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], answer: "Saturday", shuffle: false, explain: "1 August is 14 days earlier." },
            { q: "How many days are there from the 3rd to the 24th of a month?", type: "number", unit: "days", answer: 21, explain: "24 − 3 = 21" },
            { q: "How many weeks are there from the 5th to the 26th of a month?", type: "number", unit: "weeks", answer: 3, explain: "26 − 5 = 21 days = 3 weeks." },
            { q: "The 1st of a month is a Sunday. Which dates are Sundays? Pick all.", type: "multi", options: ["1", "7", "8", "14", "15", "21", "22", "28", "29"], answer: ["1", "8", "15", "22", "29"], explain: "Add 7 each time: 1, 8, 15, 22, 29." },
            { q: "Raj's birthday is 20 days after a Monday. Which day is it?", type: "mcq", options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], answer: "Sunday", shuffle: false, explain: "20 ÷ 7 = 2 R 6, and Monday + 6 = Sunday." }
          ]
        }
      ]
    },
    {
      id: "letters-words",
      title: "Chapter 3: Letters & Words",
      subtopics: [
        {
          id: "alphabet-test",
          title: "Alphabet Test",
          explanation: "Know where each letter sits in the alphabet: A is 1st, B is 2nd, and so on up to Z, the 26th.\n\nThe \"opposite\" letter pairs are A and Z, B and Y, C and X... Their positions always add up to 27.",
          workedExample: {
            problem: "Which letter is 4 places after F?",
            steps: [
              "\"4 places after\" doesn't count F itself.",
              "F → G (1) → H (2) → I (3) → J (4)."
            ],
            answer: "J"
          },
          tips: [
            "Learn positions in blocks of 5: A–E (1–5), F–J (6–10), K–O (11–15), P–T (16–20), U–Z (21–26).",
            "Opposite letters add up to 27. D is 4th, so its opposite is the 23rd letter, W.",
            "\"4 places after\" usually doesn't count the starting letter."
          ],
          targetTime: "30–45 seconds",
          timeLimit: 40,
          questions: [
            { q: "Which letter comes 3 places after C?", type: "mcq", options: ["C", "D", "E", "F"], answer: "F", shuffle: false },
            { q: "Which letter is 5 places before K?", type: "mcq", options: ["C", "D", "E", "F"], answer: "F", shuffle: false, explain: "K is 11th, and 11 − 5 = 6, which is F." },
            { q: "What is the opposite letter of E?", type: "mcq", options: ["S", "T", "U", "V"], answer: "V", shuffle: false, explain: "E is 5th, and 27 − 5 = 22, which is V." },
            { q: "Which two letters are in the middle of the alphabet (13th and 14th)? Pick both.", type: "multi", options: ["L", "M", "N", "O"], answer: ["M", "N"], time: 40 },
            { q: "Which letter do you reach if you go 6 letters after M?", type: "mcq", options: ["Q", "R", "S", "T"], answer: "S", shuffle: false, explain: "M is 13th, and 13 + 6 = 19, which is S." },
            { q: "Which letter comes 2 places after J?", type: "mcq", options: ["K", "L", "M", "N"], answer: "L", shuffle: false, time: 30 },
            { q: "Which letter is 4 places before P?", type: "mcq", options: ["K", "L", "M", "N"], answer: "L", shuffle: false, explain: "P is 16th, and 16 − 4 = 12, which is L." },
            { q: "What is the position of the letter T in the alphabet?", type: "number", answer: 20, time: 30 },
            { q: "What is the opposite letter of A?", type: "mcq", options: ["W", "X", "Y", "Z"], answer: "Z", shuffle: false, time: 25 },
            { q: "What is the opposite letter of M?", type: "mcq", options: ["K", "L", "M", "N"], answer: "N", shuffle: false, explain: "M is 13th, and 27 − 13 = 14, which is N." },
            { q: "What is the opposite letter of H?", type: "mcq", options: ["Q", "R", "S", "T"], answer: "S", shuffle: false, explain: "H is 8th, and 27 − 8 = 19, which is S." },
            { q: "What is the opposite letter of Y?", type: "mcq", options: ["A", "B", "C", "D"], answer: "B", shuffle: false, explain: "Y is 25th, and 27 − 25 = 2, which is B." },
            { q: "Which is the 7th letter of the alphabet?", type: "mcq", options: ["E", "F", "G", "H"], answer: "G", shuffle: false, time: 30 },
            { q: "Which is the 5th letter from the end of the alphabet?", type: "mcq", options: ["S", "T", "U", "V"], answer: "V", shuffle: false, explain: "Count back from Z: Z, Y, X, W, V." },
            { q: "How many letters are there between D and J?", type: "number", answer: 5, explain: "E, F, G, H and I." },
            { q: "How many letters are there between A and Z?", type: "number", answer: 24, explain: "26 letters minus A and Z = 24." },
            { q: "Which letter comes just before R?", type: "mcq", options: ["Q", "R", "S", "T"], answer: "Q", shuffle: false, time: 25 },
            { q: "Which letter is exactly midway between C and I?", type: "mcq", options: ["C", "D", "E", "F"], answer: "F", shuffle: false, explain: "C is 3rd and I is 9th. The middle is 6th, which is F." },
            { q: "What is the sum of the positions of A, B and C?", type: "number", answer: 6, explain: "1 + 2 + 3 = 6", time: 30 },
            { q: "Which is the 10th letter?", type: "mcq", options: ["G", "H", "I", "J"], answer: "J", shuffle: false, time: 30 },
            { q: "Which letter is the 3rd vowel?", type: "mcq", options: ["A", "E", "I", "O", "U"], answer: "I", shuffle: false, explain: "The vowels are A, E, I, O, U.", time: 30 },
            { q: "How many vowels are there in the alphabet?", type: "number", answer: 5, time: 25 },
            { q: "Which letter is 4 places after P?", type: "mcq", options: ["S", "T", "U", "V"], answer: "T", shuffle: false },
            { q: "Which letter comes between X and Z?", type: "mcq", options: ["W", "X", "Y", "Z"], answer: "Y", shuffle: false, time: 25 },
            { q: "What is the opposite letter of K?", type: "mcq", options: ["O", "P", "Q", "R"], answer: "P", shuffle: false, explain: "K is 11th, and 27 − 11 = 16, which is P." }
          ]
        },
        {
          id: "analogy-classification",
          title: "Analogy & Classification",
          explanation: "An analogy compares two pairs: \"Puppy is to Dog as Kitten is to Cat\". Find how the first pair is linked, then use the same link.\n\nIn \"odd one out\" questions, find the group most of the items belong to. The one that doesn't fit is the answer.",
          workedExample: {
            problem: "Puppy is to Dog as Kitten is to ___?",
            steps: [
              "Say the link as a sentence: a puppy is a baby dog.",
              "Use the same sentence: a kitten is a baby ___."
            ],
            answer: "Cat"
          },
          tips: [
            "Say the link out loud as a sentence, then use the same sentence for the second pair.",
            "For odd one out, check groups one at a time: animals? colours? shapes?",
            "Common links: baby–parent, part–whole, tool–use, opposites, home."
          ],
          targetTime: "30–45 seconds",
          timeLimit: 35,
          questions: [
            { q: "Foot is to Leg as Hand is to ___?", type: "mcq", options: ["Arm", "Finger", "Glove", "Head"], answer: "Arm" },
            { q: "Which is the odd one out?", type: "mcq", options: ["Apple", "Banana", "Carrot", "Mango"], answer: "Carrot", shuffle: false, explain: "A carrot is a vegetable. The others are fruits.", time: 30 },
            { q: "Bird is to Nest as Bee is to ___?", type: "mcq", options: ["Hive", "Flower", "Honey", "Tree"], answer: "Hive" },
            { q: "Which is the odd one out?", type: "mcq", options: ["Triangle", "Square", "Circle", "Red"], answer: "Red", shuffle: false, explain: "Red is a colour. The others are shapes.", time: 30 },
            { q: "Fish is to Water as Bird is to ___?", type: "mcq", options: ["Sky", "Nest", "Tree", "Feather"], answer: "Sky" },
            { q: "Hot is to Cold as Day is to ___?", type: "mcq", options: ["Night", "Sun", "Morning", "Week"], answer: "Night" },
            { q: "Up is to Down as Left is to ___?", type: "mcq", options: ["Right", "Up", "Side", "Back"], answer: "Right" },
            { q: "Bird is to Fly as Fish is to ___?", type: "mcq", options: ["Swim", "Walk", "Jump", "Sing"], answer: "Swim" },
            { q: "Eye is to See as Ear is to ___?", type: "mcq", options: ["Hear", "Smell", "Talk", "Touch"], answer: "Hear" },
            { q: "Cow is to Calf as Horse is to ___?", type: "mcq", options: ["Foal", "Kid", "Lamb", "Puppy"], answer: "Foal", explain: "A baby horse is a foal." },
            { q: "Pen is to Write as Knife is to ___?", type: "mcq", options: ["Cut", "Eat", "Draw", "Cook"], answer: "Cut" },
            { q: "Teacher is to School as Doctor is to ___?", type: "mcq", options: ["Hospital", "Shop", "Farm", "Bank"], answer: "Hospital" },
            { q: "Which is the odd one out?", type: "mcq", options: ["Dog", "Cat", "Cow", "Car"], answer: "Car", shuffle: false, explain: "A car is not an animal.", time: 30 },
            { q: "Which is the odd one out?", type: "mcq", options: ["Red", "Blue", "Green", "Chair"], answer: "Chair", shuffle: false, explain: "A chair is not a colour.", time: 30 },
            { q: "Which is the odd one out?", type: "mcq", options: ["2", "4", "7", "8"], answer: "7", shuffle: false, explain: "7 is the only odd number.", time: 30 },
            { q: "Which is the odd one out?", type: "mcq", options: ["Rose", "Lily", "Tulip", "Mango"], answer: "Mango", shuffle: false, explain: "A mango is a fruit. The others are flowers.", time: 30 },
            { q: "Which is the odd one out?", type: "mcq", options: ["Hand", "Foot", "Eye", "Shirt"], answer: "Shirt", shuffle: false, explain: "A shirt is not a part of the body.", time: 30 },
            { q: "Which is the odd one out?", type: "mcq", options: ["Monday", "Tuesday", "March", "Friday"], answer: "March", shuffle: false, explain: "March is a month. The others are days.", time: 30 },
            { q: "Which is the odd one out?", type: "mcq", options: ["Circle", "Square", "Cube", "Triangle"], answer: "Cube", shuffle: false, explain: "A cube is a solid shape. The others are flat.", time: 30 },
            { q: "Which is the odd one out?", type: "mcq", options: ["Milk", "Juice", "Water", "Bread"], answer: "Bread", shuffle: false, explain: "Bread is not a drink.", time: 30 },
            { q: "Wheel is to Car as Wing is to ___?", type: "mcq", options: ["Aeroplane", "Road", "Engine", "Driver"], answer: "Aeroplane" },
            { q: "Chair is to Sit as Bed is to ___?", type: "mcq", options: ["Sleep", "Eat", "Read", "Run"], answer: "Sleep" },
            { q: "Finger is to Hand as Toe is to ___?", type: "mcq", options: ["Foot", "Leg", "Shoe", "Knee"], answer: "Foot" },
            { q: "Which is the odd one out?", type: "mcq", options: ["Sparrow", "Crow", "Eagle", "Bat"], answer: "Bat", shuffle: false, explain: "A bat is a mammal. The others are birds.", time: 30 },
            { q: "1 is to One as 2 is to ___?", type: "mcq", options: ["Two", "Second", "Twice", "Pair"], answer: "Two" }
          ]
        },
        {
          id: "coding-decoding",
          title: "Coding-Decoding",
          explanation: "In a code, letters are swapped for numbers or other letters. The most common code is A = 1, B = 2 ... Z = 26.\n\nIn a shift code, every letter moves the same number of places along the alphabet.",
          workedExample: {
            problem: "If A = 1, B = 2, C = 3 ... Z = 26, what word does 3-1-20 spell?",
            steps: [
              "Change each number back to its letter: 3 = C, 1 = A, 20 = T.",
              "Put them together."
            ],
            answer: "CAT"
          },
          tips: [
            "Write A to Z with 1 to 26 on scratch paper first.",
            "For shift codes, work out the shift from one known pair, then use it on the rest.",
            "Watch for reverse codes (Z = 1, Y = 2 ...)."
          ],
          targetTime: "45–70 seconds",
          timeLimit: 55,
          questions: [
            { q: "Using A = 1, B = 2 ... Z = 26, what number stands for J?", type: "number", answer: 10, time: 30 },
            { q: "Decode: 8-9 (A = 1, B = 2 ...)", type: "text", answer: "HI", placeholder: "e.g. CAT", time: 40 },
            { q: "Each letter moves forward by 1. What does CAT become?", type: "text", answer: "DBU", placeholder: "e.g. CAT" },
            { q: "Decode: 4-15-7 (A = 1, B = 2 ...)", type: "text", answer: "DOG", placeholder: "e.g. CAT" },
            { q: "In a reverse code where Z = 1, Y = 2 ... A = 26, what number stands for Z?", type: "number", answer: 1, time: 30 },
            { q: "Using A = 1, B = 2 ..., what number stands for M?", type: "number", answer: 13, time: 35 },
            { q: "Using A = 1, B = 2 ..., what number stands for Z?", type: "number", answer: 26, time: 30 },
            { q: "Decode: 2-1-7 (A = 1, B = 2 ...)", type: "text", answer: "BAG", placeholder: "e.g. CAT" },
            { q: "Decode: 3-1-14 (A = 1, B = 2 ...)", type: "text", answer: "CAN", placeholder: "e.g. CAT" },
            { q: "Decode: 15-14-5 (A = 1, B = 2 ...)", type: "text", answer: "ONE", placeholder: "e.g. CAT" },
            { q: "Using A = 1, B = 2 ..., write the code for BED.", type: "text", answer: "2-5-4", placeholder: "e.g. 3-1-20" },
            { q: "Using A = 1, B = 2 ..., write the code for DAD.", type: "text", answer: "4-1-4", placeholder: "e.g. 3-1-20" },
            { q: "Each letter moves forward by 1. What does DOG become?", type: "text", answer: "EPH", placeholder: "e.g. CAT" },
            { q: "Each letter moves forward by 1. What does SUN become?", type: "text", answer: "TVO", placeholder: "e.g. CAT" },
            { q: "Each letter moves forward by 2. What does CAT become?", type: "text", answer: "ECV", placeholder: "e.g. CAT" },
            { q: "Each letter moves backward by 1. What does DBU become?", type: "text", answer: "CAT", placeholder: "e.g. CAT" },
            { q: "Each letter moves forward by 1. What does BAD become?", type: "text", answer: "CBE", placeholder: "e.g. CAT" },
            { q: "Each letter moves forward by 3. What does ABC become?", type: "text", answer: "DEF", placeholder: "e.g. CAT" },
            { q: "In a code, A = 2, B = 4, C = 6, D = 8. What is E?", type: "number", answer: 10, explain: "Each letter is double its position: E is 5th, so 10." },
            { q: "Using A = 1, B = 2 ..., what is the sum of the numbers for the letters in CAB?", type: "number", answer: 6, explain: "3 + 1 + 2 = 6" },
            { q: "In a code, MAP is written as NBQ. How is TOP written in the same code?", type: "text", answer: "UPQ", placeholder: "e.g. CAT", explain: "Each letter moves forward by 1." },
            { q: "In the reverse code (Z = 1, Y = 2 ... A = 26), what number stands for A?", type: "number", answer: 26, time: 35 },
            { q: "In the reverse code (Z = 1, Y = 2 ... A = 26), what number stands for B?", type: "number", answer: 25, time: 35 },
            { q: "In the reverse code (Z = 1, Y = 2 ... A = 26), which letter stands for 3?", type: "mcq", options: ["W", "X", "Y", "C"], answer: "X", shuffle: false, explain: "Z = 1, Y = 2, X = 3." },
            { q: "Using A = 1, B = 2 ..., what is the sum of the numbers for the letters in ACE?", type: "number", answer: 9, explain: "1 + 3 + 5 = 9" }
          ]
        }
      ]
    },
    {
      id: "word-problems-puzzles",
      title: "Chapter 4: Word Problems & Number Puzzles",
      subtopics: [
        {
          id: "missing-number",
          title: "Missing Number",
          explanation: "Find the number hidden in the box by undoing what was done to it.\n\nThe opposite of + is −, and the opposite of × is ÷.",
          workedExample: {
            problem: "☐ × 4 = 28. Find ☐.",
            steps: [
              "The opposite of multiplying is dividing.",
              "☐ = 28 ÷ 4."
            ],
            answer: "7"
          },
          tips: [
            "Undo + with −, and × with ÷ (and the other way round).",
            "For two steps, like ☐ × 3 + 2 = 17, undo in reverse: take away 2 (15), then divide by 3 (5).",
            "Check by putting your answer back into the sum."
          ],
          targetTime: "25–40 seconds",
          timeLimit: 35,
          questions: [
            { q: "☐ + 18 = 25. What is ☐?", type: "number", answer: 7, time: 25 },
            { q: "☐ − 9 = 16. What is ☐?", type: "number", answer: 25, time: 25 },
            { q: "☐ ÷ 5 = 6. What is ☐?", type: "number", answer: 30, time: 25 },
            { q: "☐ × 2 + 3 = 15. What is ☐?", type: "number", answer: 6, explain: "15 − 3 = 12, and 12 ÷ 2 = 6." },
            { q: "20 − ☐ = 8. What is ☐?", type: "number", answer: 12, time: 25 },
            { q: "☐ + 27 = 50. What is ☐?", type: "number", answer: 23, time: 25 },
            { q: "☐ − 14 = 31. What is ☐?", type: "number", answer: 45, time: 25 },
            { q: "9 × ☐ = 63. What is ☐?", type: "number", answer: 7, time: 25 },
            { q: "☐ ÷ 4 = 8. What is ☐?", type: "number", answer: 32, time: 25 },
            { q: "50 − ☐ = 18. What is ☐?", type: "number", answer: 32, time: 25 },
            { q: "36 ÷ ☐ = 6. What is ☐?", type: "number", answer: 6, time: 25 },
            { q: "☐ × 5 + 4 = 29. What is ☐?", type: "number", answer: 5, explain: "29 − 4 = 25, and 25 ÷ 5 = 5." },
            { q: "☐ × 3 − 2 = 19. What is ☐?", type: "number", answer: 7, explain: "19 + 2 = 21, and 21 ÷ 3 = 7." },
            { q: "☐ ÷ 2 + 5 = 12. What is ☐?", type: "number", answer: 14, explain: "12 − 5 = 7, and 7 × 2 = 14." },
            { q: "☐ + ☐ = 18. Both boxes hold the same number. What is it?", type: "number", answer: 9, time: 25 },
            { q: "☐ × ☐ = 49. Both boxes hold the same number. What is it?", type: "number", answer: 7, time: 25 },
            { q: "100 − ☐ = 64. What is ☐?", type: "number", answer: 36, time: 25 },
            { q: "7 × ☐ = 84. What is ☐?", type: "number", answer: 12 },
            { q: "45 + ☐ = 100. What is ☐?", type: "number", answer: 55, time: 25 },
            { q: "☐ − 38 = 47. What is ☐?", type: "number", answer: 85, time: 25 },
            { q: "☐ × 10 = 360. What is ☐?", type: "number", answer: 36, time: 25 },
            { q: "5 × ☐ − 3 = 22. What is ☐?", type: "number", answer: 5, explain: "22 + 3 = 25, and 25 ÷ 5 = 5." },
            { q: "☐ + 15 = 3 × 9. What is ☐?", type: "number", answer: 12, explain: "3 × 9 = 27, and 27 − 15 = 12." },
            { q: "72 ÷ ☐ = 9. What is ☐?", type: "number", answer: 8, time: 25 },
            { q: "If ☐ + 6 = 15, what is ☐ × 2?", type: "number", answer: 18, explain: "☐ = 9, and 9 × 2 = 18." }
          ]
        },
        {
          id: "word-problems",
          title: "Word Problems (+, −, ×, ÷)",
          explanation: "Olympiad word problems often need two or more steps, using different operations.\n\nWork out one small step at a time and write each one down.",
          workedExample: {
            problem: "Ravi has 3 boxes of pencils with 8 pencils in each. He gives 5 pencils to his friend. How many pencils does he have left?",
            steps: [
              "Find the total first: 3 × 8 = 24 pencils.",
              "Take away what he gave: 24 − 5 = 19."
            ],
            answer: "19 pencils"
          },
          tips: [
            "\"Total\" or \"altogether\" means add or multiply. \"Left\" or \"fewer\" means subtract. \"Each\" or \"share equally\" means divide.",
            "Do × and ÷ before + and −, unless the problem says \"then\".",
            "Write one small sum for each step."
          ],
          targetTime: "40–60 seconds",
          timeLimit: 60,
          questions: [
            { q: "A baker makes 6 trays of 12 cupcakes each. He sells 45. How many are left?", type: "number", answer: 27, explain: "6 × 12 = 72, and 72 − 45 = 27." },
            { q: "Maria had ₹50. She bought 3 books at ₹8 each. How much money does she have now?", type: "money", answer: 26, explain: "3 × ₹8 = ₹24, and ₹50 − ₹24 = ₹26." },
            { q: "45 students are split equally into 9 groups. How many students are in each group?", type: "number", answer: 5, time: 30 },
            { q: "A farmer has 7 rows of 15 plants. If 20 plants die, how many are left?", type: "number", answer: 85, explain: "7 × 15 = 105, and 105 − 20 = 85." },
            { q: "Tom saves ₹4 every day. How much will he save in 2 weeks?", type: "money", answer: 56, explain: "2 weeks = 14 days, and 14 × ₹4 = ₹56." },
            { q: "A box has 12 chocolates. Ria buys 4 boxes and eats 9 chocolates. How many are left?", type: "number", answer: 39, explain: "4 × 12 = 48, and 48 − 9 = 39." },
            { q: "There are 36 children. 8 leave. The rest sit in rows of 7. How many rows are there?", type: "number", unit: "rows", answer: 4, explain: "36 − 8 = 28, and 28 ÷ 7 = 4." },
            { q: "Ravi has ₹100. He buys 3 pens at ₹15 each. How much money is left?", type: "money", answer: 55, explain: "3 × ₹15 = ₹45, and ₹100 − ₹45 = ₹55." },
            { q: "A bus has 45 seats. 3 full buses and a van with 12 more children go on a trip. How many children travel in all?", type: "number", answer: 147, explain: "3 × 45 = 135, and 135 + 12 = 147." },
            { q: "A shop has 9 packets with 8 biscuits in each. 25 biscuits are sold. How many are left?", type: "number", answer: 47, explain: "9 × 8 = 72, and 72 − 25 = 47." },
            { q: "Meena reads 12 pages a day for 6 days, then 15 pages on the 7th day. How many pages does she read in all?", type: "number", answer: 87, explain: "6 × 12 = 72, and 72 + 15 = 87." },
            { q: "Tom shares 56 marbles equally among 7 friends, then gives 4 more to one friend. How many marbles does that friend have?", type: "number", answer: 12, explain: "56 ÷ 7 = 8, and 8 + 4 = 12." },
            { q: "A ribbon 90 cm long is cut into 6 equal pieces. Anu uses 2 pieces. How much ribbon does she use?", type: "number", unit: "cm", answer: 30, explain: "90 ÷ 6 = 15 cm, and 2 × 15 = 30 cm." },
            { q: "5 friends each pay ₹24 for a gift. The gift costs ₹100. How much money is left over?", type: "money", answer: 20, explain: "5 × ₹24 = ₹120, and ₹120 − ₹100 = ₹20." },
            { q: "A farmer has 4 baskets with 25 apples in each. He sells 38 apples. How many are left?", type: "number", answer: 62, explain: "4 × 25 = 100, and 100 − 38 = 62." },
            { q: "Sam is 8 years old. His father is 4 times as old as Sam. How old is his father?", type: "number", unit: "years", answer: 32, time: 30 },
            { q: "A hall has 7 rows of 9 chairs. 15 chairs are broken. How many chairs can be used?", type: "number", answer: 48, explain: "7 × 9 = 63, and 63 − 15 = 48." },
            { q: "A pencil costs ₹6 and a notebook costs ₹25. What is the cost of 4 pencils and 2 notebooks?", type: "money", answer: 74, explain: "4 × ₹6 = ₹24, 2 × ₹25 = ₹50, and ₹24 + ₹50 = ₹74." },
            { q: "63 stickers are shared equally among 9 children. Each child then loses 2 stickers. How many does each child have now?", type: "number", answer: 5, explain: "63 ÷ 9 = 7, and 7 − 2 = 5." },
            { q: "A train has 6 coaches with 50 seats each. 245 passengers are on board. How many seats are empty?", type: "number", answer: 55, explain: "6 × 50 = 300, and 300 − 245 = 55." },
            { q: "A baker bakes 3 trays of 24 buns and 2 trays of 18 buns. How many buns is that in all?", type: "number", answer: 108, explain: "3 × 24 = 72, 2 × 18 = 36, and 72 + 36 = 108." },
            { q: "Riya saves ₹5 on each weekday and ₹10 on each weekend day. How much does she save in one week?", type: "money", answer: 45, explain: "5 weekdays × ₹5 = ₹25, 2 weekend days × ₹10 = ₹20, and ₹25 + ₹20 = ₹45." },
            { q: "A tank holds 120 L of water. 45 L is used in the morning and 38 L in the evening. How much is left?", type: "number", unit: "L", answer: 37, explain: "45 + 38 = 83, and 120 − 83 = 37." },
            { q: "A shopkeeper packs 144 eggs in boxes of 12. He sells 5 boxes. How many boxes are left?", type: "number", unit: "boxes", answer: 7, explain: "144 ÷ 12 = 12 boxes, and 12 − 5 = 7." },
            { q: "Maya has 3 times as many stickers as Leena. Leena has 14. How many do they have together?", type: "number", answer: 56, explain: "Maya has 3 × 14 = 42, and 42 + 14 = 56." }
          ]
        },
        {
          id: "symbol-substitution",
          title: "Symbol Substitution",
          explanation: "In these puzzles the maths signs have swapped meanings. First rewrite the sum with the real signs, then work it out in the normal way.",
          workedExample: {
            problem: "If '+' means '×', '×' means '−' and '−' means '+', solve: 6 + 2 × 3",
            steps: [
              "Rewrite with the real signs: 6 × 2 − 3.",
              "Work it out: 6 × 2 = 12, then 12 − 3 = 9."
            ],
            answer: "9"
          },
          tips: [
            "Always rewrite the whole sum with the new signs first.",
            "Make a small key: old sign → new sign.",
            "After rewriting, do × and ÷ before + and −, as usual."
          ],
          targetTime: "40–60 seconds",
          timeLimit: 55,
          questions: [
            { q: "If '+' means '−' and '−' means '+', solve: 8 + 3 − 2", type: "number", answer: 7, explain: "8 − 3 + 2 = 7" },
            { q: "If '×' means '+' and '+' means '×', solve: 5 + 2 × 3", type: "number", answer: 13, explain: "5 × 2 + 3 = 13" },
            { q: "If A means '+', B means '−' and C means '×', solve: 10 A 4 B 2", type: "number", answer: 12, explain: "10 + 4 − 2 = 12" },
            { q: "If '÷' means '×' and '×' means '÷', solve: 12 × 3 ÷ 2", type: "number", answer: 8, explain: "12 ÷ 3 × 2 = 8" },
            { q: "If '+' means '×', '−' means '÷' and '×' means '+', solve: 4 + 3 − 6 × 2", type: "number", answer: 4, explain: "4 × 3 ÷ 6 + 2 = 2 + 2 = 4", time: 70 },
            { q: "If '+' means '×', solve: 3 + 4", type: "number", answer: 12, time: 30 },
            { q: "If '−' means '+', solve: 9 − 5", type: "number", answer: 14, time: 30 },
            { q: "If '×' means '−', solve: 10 × 3", type: "number", answer: 7, time: 30 },
            { q: "If '÷' means '+', solve: 12 ÷ 4", type: "number", answer: 16, time: 30 },
            { q: "If '+' means '−' and '−' means '+', solve: 15 + 5 − 3", type: "number", answer: 13, explain: "15 − 5 + 3 = 13" },
            { q: "If '+' means '×' and '×' means '+', solve: 2 + 3 × 4", type: "number", answer: 10, explain: "2 × 3 + 4 = 10" },
            { q: "If '+' means '−' and '×' means '+', solve: 20 + 6 × 2", type: "number", answer: 16, explain: "20 − 6 + 2 = 16" },
            { q: "If '−' means '×' and '+' means '−', solve: 8 − 3 + 4", type: "number", answer: 20, explain: "8 × 3 − 4 = 20" },
            { q: "If '÷' means '×' and '×' means '÷', solve: 8 ÷ 2 × 4", type: "number", answer: 4, explain: "8 × 2 ÷ 4 = 4" },
            { q: "If '+' means '−' and '−' means '÷', solve: 18 + 6 − 3", type: "number", answer: 16, explain: "18 − 6 ÷ 3 = 18 − 2 = 16. Divide before you subtract." },
            { q: "If A means '+' and B means '−', solve: 20 A 5 B 8", type: "number", answer: 17, explain: "20 + 5 − 8 = 17" },
            { q: "If A means '×' and B means '+', solve: 4 A 5 B 6", type: "number", answer: 26, explain: "4 × 5 + 6 = 26" },
            { q: "If P means '+' and Q means '×', solve: 6 P 2 Q 3", type: "number", answer: 12, explain: "6 + 2 × 3 = 6 + 6 = 12. Multiply before you add." },
            { q: "If '×' means '+' and '+' means '×', solve: 3 × 4 + 2", type: "number", answer: 11, explain: "3 + 4 × 2 = 3 + 8 = 11. Multiply before you add." },
            { q: "If '−' means '×' and '×' means '−', solve: 9 − 2 × 5", type: "number", answer: 13, explain: "9 × 2 − 5 = 13" },
            { q: "If '+' means '÷', solve: 24 + 6", type: "number", answer: 4, time: 30 },
            { q: "If '÷' means '−', solve: 30 ÷ 12", type: "number", answer: 18, time: 30 },
            { q: "If '+' means '×' and '−' means '+', solve: 5 + 3 − 4", type: "number", answer: 19, explain: "5 × 3 + 4 = 19" },
            { q: "If '+' means '−', '−' means '×' and '×' means '+', solve: 12 + 3 − 2 × 4", type: "number", answer: 10, explain: "12 − 3 × 2 + 4 = 12 − 6 + 4 = 10", time: 70 },
            { q: "If '×' means '÷' and '÷' means '×', solve: 6 × 3 ÷ 2", type: "number", answer: 4, explain: "6 ÷ 3 × 2 = 4" }
          ]
        },
        {
          id: "working-backwards",
          title: "Working Backwards",
          explanation: "Some puzzles tell you what happened to a mystery number and what the answer was. Undo each step, starting from the last one, to find the start.",
          workedExample: {
            problem: "I thought of a number, added 5, then doubled it and got 22. What was my number?",
            steps: [
              "The last step was doubling, so halve: 22 ÷ 2 = 11.",
              "Before that I added 5, so take away 5: 11 − 5 = 6.",
              "Check: 6 + 5 = 11, and 11 × 2 = 22 ✓"
            ],
            answer: "6"
          },
          tips: [
            "Reverse the order of the steps and the operations (+ becomes −, × becomes ÷).",
            "Write the steps as a list before reversing them.",
            "Check by running your answer forward through the steps."
          ],
          targetTime: "45–65 seconds",
          timeLimit: 60,
          questions: [
            { q: "I thought of a number, subtracted 4, then tripled it and got 15. What was my number?", type: "number", answer: 9, explain: "15 ÷ 3 = 5, and 5 + 4 = 9." },
            { q: "A number was doubled, then 6 was added, giving 20. What was the number?", type: "number", answer: 7, explain: "20 − 6 = 14, and 14 ÷ 2 = 7." },
            { q: "I added 10 to a number, then divided by 2 and got 9. What was the number?", type: "number", answer: 8, explain: "9 × 2 = 18, and 18 − 10 = 8." },
            { q: "A number was multiplied by 3, then 2 was subtracted, giving 13. What was the number?", type: "number", answer: 5, explain: "13 + 2 = 15, and 15 ÷ 3 = 5." },
            { q: "I halved a number, then added 7 and got 12. What was the number?", type: "number", answer: 10, explain: "12 − 7 = 5, and 5 × 2 = 10." },
            { q: "I thought of a number, added 7 and got 20. What was my number?", type: "number", answer: 13, time: 30 },
            { q: "I thought of a number, subtracted 5 and got 12. What was my number?", type: "number", answer: 17, time: 30 },
            { q: "I doubled a number and got 18. What was the number?", type: "number", answer: 9, time: 30 },
            { q: "I tripled a number and got 27. What was the number?", type: "number", answer: 9, time: 30 },
            { q: "I halved a number and got 8. What was the number?", type: "number", answer: 16, time: 30 },
            { q: "I added 6 to a number, then doubled it and got 30. What was the number?", type: "number", answer: 9, explain: "30 ÷ 2 = 15, and 15 − 6 = 9." },
            { q: "I doubled a number, then added 6 and got 30. What was the number?", type: "number", answer: 12, explain: "30 − 6 = 24, and 24 ÷ 2 = 12." },
            { q: "I subtracted 3 from a number, then multiplied by 4 and got 28. What was the number?", type: "number", answer: 10, explain: "28 ÷ 4 = 7, and 7 + 3 = 10." },
            { q: "I multiplied a number by 5, then subtracted 4 and got 21. What was the number?", type: "number", answer: 5, explain: "21 + 4 = 25, and 25 ÷ 5 = 5." },
            { q: "I added 9 to a number, then halved it and got 10. What was the number?", type: "number", answer: 11, explain: "10 × 2 = 20, and 20 − 9 = 11." },
            { q: "A number was divided by 3, then 5 was added, giving 11. What was the number?", type: "number", answer: 18, explain: "11 − 5 = 6, and 6 × 3 = 18." },
            { q: "A number was doubled, then 1 was subtracted, giving 15. What was the number?", type: "number", answer: 8, explain: "15 + 1 = 16, and 16 ÷ 2 = 8." },
            { q: "Ravi got 8 more marbles, then gave away 5, and now has 20. How many did he start with?", type: "number", answer: 17, explain: "20 + 5 − 8 = 17" },
            { q: "Meena spent ₹40, was then given ₹25, and now has ₹60. How much did she start with?", type: "money", answer: 75, explain: "₹60 − ₹25 + ₹40 = ₹75" },
            { q: "A bus had some passengers. 12 got off and 7 got on, leaving 30. How many were on the bus at the start?", type: "number", answer: 35, explain: "30 − 7 + 12 = 35" },
            { q: "I doubled a number, added 10 and got 50. What was the number?", type: "number", answer: 20, explain: "50 − 10 = 40, and 40 ÷ 2 = 20." },
            { q: "A number was multiplied by 4, then divided by 2, giving 14. What was the number?", type: "number", answer: 7, explain: "14 × 2 = 28, and 28 ÷ 4 = 7." },
            { q: "I added 12 to a number, then subtracted 7 and got 20. What was the number?", type: "number", answer: 15, explain: "20 + 7 − 12 = 15" },
            { q: "I halved a number, then tripled the result and got 18. What was the number?", type: "number", answer: 12, explain: "18 ÷ 3 = 6, and 6 × 2 = 12." },
            { q: "A number plus itself plus 3 is 17. What is the number?", type: "number", answer: 7, explain: "17 − 3 = 14, and 14 ÷ 2 = 7." }
          ]
        }
      ]
    },
    {
      id: "patterns-series",
      title: "Chapter 5: Patterns & Series",
      subtopics: [
        {
          id: "patterns-sequences",
          title: "Patterns & Sequences",
          explanation: "A pattern follows a rule. Number patterns may add, take away, multiply, or have a gap that grows. Letter patterns move through the alphabet.",
          workedExample: {
            problem: "3, 7, 11, 15, __, __. Find the next two numbers.",
            steps: [
              "Find the gaps: 7 − 3 = 4, 11 − 7 = 4, 15 − 11 = 4.",
              "The rule is add 4.",
              "15 + 4 = 19, and 19 + 4 = 23."
            ],
            answer: "19, 23"
          },
          tips: [
            "Check the gap between at least the first 3 numbers before deciding on the rule.",
            "Some gaps grow: for 2, 4, 7, 11 the gaps are 2, 3, 4, so the next is 11 + 5 = 16.",
            "For letters, write the alphabet positions (A = 1, B = 2, ...) to see the jumps."
          ],
          targetTime: "25–35 seconds",
          timeLimit: 35,
          questions: [
            { q: "What comes next? 2, 4, 8, 16, __", type: "number", answer: 32, explain: "Each number is doubled." },
            { q: "What are the next two numbers? 50, 45, 40, __, __", type: "text", answer: "35, 30", placeholder: "e.g. 3, 6" },
            { q: "What comes next? 1, 4, 9, 16, __", type: "number", answer: 25, explain: "These are 1 × 1, 2 × 2, 3 × 3, 4 × 4, so next is 5 × 5." },
            { q: "What comes next? A, B, A, B, A, __", type: "mcq", options: ["A", "B", "C"], answer: "B", shuffle: false, time: 15 },
            { q: "What comes next? 5, 8, 12, 17, 23, __", type: "number", answer: 30, explain: "The gaps are 3, 4, 5, 6, so the next gap is 7." },
            { q: "What comes next? 3, 6, 9, 12, __", type: "number", answer: 15, time: 20 },
            { q: "What comes next? 100, 95, 90, 85, __", type: "number", answer: 80, time: 20 },
            { q: "What comes next? 1, 2, 4, 8, 16, __", type: "number", answer: 32, explain: "Each number is doubled." },
            { q: "What comes next? 2, 3, 5, 8, 12, __", type: "number", answer: 17, explain: "The gaps are 1, 2, 3, 4, so the next gap is 5." },
            { q: "What comes next? 81, 72, 63, 54, __", type: "number", answer: 45, explain: "Take away 9 each time." },
            { q: "Fill the gap: 5, 10, 15, __, 25", type: "number", answer: 20, time: 20 },
            { q: "What comes next? 1, 3, 6, 10, __", type: "number", answer: 15, explain: "The gaps are 2, 3, 4, so the next gap is 5." },
            { q: "What comes next? 64, 32, 16, __", type: "number", answer: 8, explain: "Each number is halved." },
            { q: "What comes next? 10, 20, 40, 80, __", type: "number", answer: 160, explain: "Each number is doubled." },
            { q: "What comes next? 3, 5, 9, 15, 23, __", type: "number", answer: 33, explain: "The gaps are 2, 4, 6, 8, so the next gap is 10." },
            { q: "What comes next? A, C, E, G, __", type: "mcq", options: ["H", "I", "J"], answer: "I", shuffle: false, explain: "Skip one letter each time: G, (H), I." },
            { q: "What comes next? Z, X, V, T, __", type: "mcq", options: ["S", "R", "Q"], answer: "R", shuffle: false, explain: "Go back two letters each time: T, (S), R." },
            { q: "Fill the gap: 2, 4, 6, 8, __, 12", type: "number", answer: 10, time: 20 },
            { q: "What comes next? 9, 18, 27, 36, __", type: "number", answer: 45, time: 20 },
            { q: "What comes next? 1, 1, 2, 3, 5, 8, __", type: "number", answer: 13, explain: "Add the two numbers before: 5 + 8 = 13." },
            { q: "Fill the gap: 200, 190, 180, __, 160", type: "number", answer: 170, time: 20 },
            { q: "Fill the gap: 7, 14, 21, __, 35", type: "number", answer: 28, time: 20 },
            { q: "What comes next? 4, 9, 16, 25, __", type: "number", answer: 36, explain: "These are 2 × 2, 3 × 3, 4 × 4, 5 × 5, so next is 6 × 6." },
            { q: "What comes next? 1, 2, 4, 7, 11, 16, __", type: "number", answer: 22, explain: "The gaps are 1, 2, 3, 4, 5, so the next gap is 6." },
            { q: "What comes next? 1,000, 900, 800, __", type: "number", answer: 700, time: 20 }
          ]
        },
        {
          id: "alpha-numeric-series",
          title: "Alpha-Numeric Series",
          explanation: "These series mix letters and numbers. Split each term into its letter part and its number part, and find the rule for each part separately.",
          workedExample: {
            problem: "A1, B2, C3, D4, ___?",
            steps: [
              "Letters: A, B, C, D move forward by 1, so next is E.",
              "Numbers: 1, 2, 3, 4 go up by 1, so next is 5.",
              "Put them together."
            ],
            answer: "E5"
          },
          tips: [
            "Split a mixed series into letters and numbers and solve each part.",
            "The letters and numbers can change at different speeds.",
            "Check each rule against at least 3 terms."
          ],
          targetTime: "35–50 seconds",
          timeLimit: 45,
          questions: [
            { q: "What comes next? A2, C4, E6, ___", type: "text", answer: "G8", placeholder: "e.g. B4", explain: "Letters skip one each time. Numbers go up by 2." },
            { q: "What comes next? Z1, Y2, X3, ___", type: "text", answer: "W4", placeholder: "e.g. B4", explain: "Letters go backwards. Numbers go up by 1." },
            { q: "What comes next? B5, D10, F15, ___", type: "text", answer: "H20", placeholder: "e.g. B4", explain: "Letters skip one. Numbers go up by 5." },
            { q: "What comes next? K1, J3, I5, ___", type: "text", answer: "H7", placeholder: "e.g. B4", explain: "Letters go backwards. Numbers go up by 2." },
            { q: "What comes next? A10, B8, C6, ___", type: "text", answer: "D4", placeholder: "e.g. B4", explain: "Letters go forward. Numbers go down by 2." },
            { q: "What comes next? P1, Q2, R3, ___", type: "text", answer: "S4", placeholder: "e.g. B4" },
            { q: "What comes next? B2, C3, D4, ___", type: "text", answer: "E5", placeholder: "e.g. B4" },
            { q: "What comes next? A3, B6, C9, ___", type: "text", answer: "D12", placeholder: "e.g. B4", explain: "Numbers go up by 3." },
            { q: "What comes next? M2, N4, O6, ___", type: "text", answer: "P8", placeholder: "e.g. B4" },
            { q: "What comes next? Z5, Y10, X15, ___", type: "text", answer: "W20", placeholder: "e.g. B4", explain: "Letters go backwards. Numbers go up by 5." },
            { q: "What comes next? C5, E10, G15, ___", type: "text", answer: "I20", placeholder: "e.g. B4", explain: "Letters skip one. Numbers go up by 5." },
            { q: "What comes next? A1, C3, E5, ___", type: "text", answer: "G7", placeholder: "e.g. B4" },
            { q: "What comes next? D4, F6, H8, ___", type: "text", answer: "J10", placeholder: "e.g. B4" },
            { q: "What comes next? A10, B20, C30, ___", type: "text", answer: "D40", placeholder: "e.g. B4" },
            { q: "What comes next? Q8, R6, S4, ___", type: "text", answer: "T2", placeholder: "e.g. B4", explain: "Letters go forward. Numbers go down by 2." },
            { q: "What comes next? B1, D2, F3, ___", type: "text", answer: "H4", placeholder: "e.g. B4" },
            { q: "What comes next? A5, B10, C15, D20, ___", type: "text", answer: "E25", placeholder: "e.g. B4" },
            { q: "What comes next? J10, K9, L8, ___", type: "text", answer: "M7", placeholder: "e.g. B4" },
            { q: "What comes next? Y1, W2, U3, ___", type: "text", answer: "S4", placeholder: "e.g. B4", explain: "Letters go back two each time. Numbers go up by 1." },
            { q: "What comes next? AB1, CD2, EF3, ___", type: "text", answer: "GH4", placeholder: "e.g. B4" },
            { q: "What comes next? A1B, C2D, E3F, ___", type: "text", answer: "G4H", placeholder: "e.g. B4" },
            { q: "What comes next? A, 2, B, 4, C, 6, ___", type: "mcq", options: ["D", "7", "8", "E"], answer: "D", shuffle: false, explain: "Letters and even numbers take turns. After 6 comes a letter: D." },
            { q: "What comes next? A, 2, B, 4, C, 6, D, ___", type: "number", answer: 8, explain: "After D comes a number: 8." },
            { q: "What comes next? 1A, 2B, 3C, ___", type: "text", answer: "4D", placeholder: "e.g. B4" },
            { q: "What comes next? 2A, 4C, 6E, ___", type: "text", answer: "8G", placeholder: "e.g. B4", explain: "Numbers go up by 2. Letters skip one." }
          ]
        },
        {
          id: "nth-term-patterns",
          title: "Nth-term Patterns",
          explanation: "A classic olympiad trap: what is the 50th item of a repeating pattern? You don't need to draw it all out.\n\nDivide the position by the size of the repeating block. The remainder tells you the place in the block. A remainder of 0 means the last item in the block.",
          workedExample: {
            problem: "Red, Blue, Green repeats. What colour is the 20th item?",
            steps: [
              "The block has 3 colours: Red (1), Blue (2), Green (3).",
              "20 ÷ 3 = 6 R 2.",
              "Remainder 2 means the 2nd item in the block."
            ],
            answer: "Blue"
          },
          tips: [
            "Always find the block size first.",
            "Remainder 1 is the 1st item, remainder 2 the 2nd, and so on. Remainder 0 is the last item.",
            "This is the hardest type, so in a real paper save it for later."
          ],
          targetTime: "60–90 seconds",
          timeLimit: 75,
          questions: [
            { q: "Star, Star, Moon repeats. What is the 14th shape?", type: "mcq", options: ["Star", "Moon"], answer: "Star", shuffle: false, explain: "14 ÷ 3 = 4 R 2, so it is the 2nd in the block." },
            { q: "1, 2, 3, 4 repeats. What is the 30th number?", type: "number", answer: 2, explain: "30 ÷ 4 = 7 R 2, so it is the 2nd in the block." },
            { q: "Letters A, B, C, D, E repeat. What is the 23rd letter?", type: "mcq", options: ["A", "B", "C", "D", "E"], answer: "C", shuffle: false, explain: "23 ÷ 5 = 4 R 3, so it is the 3rd in the block." },
            { q: "Red, Red, Blue, Green repeats. What colour is the 100th item?", type: "mcq", options: ["Red", "Blue", "Green"], answer: "Green", shuffle: false, explain: "100 ÷ 4 = 25 R 0, so it is the last in the block." },
            { q: "Mon, Tue, Wed repeats, and Day 1 is Mon. Which is Day 25?", type: "mcq", options: ["Mon", "Tue", "Wed"], answer: "Mon", shuffle: false, explain: "25 ÷ 3 = 8 R 1, so it is the 1st in the block." },
            { q: "Red, Blue repeats. What colour is the 15th?", type: "mcq", options: ["Red", "Blue"], answer: "Red", shuffle: false, explain: "Red is in odd places. 15 is odd." },
            { q: "○ △ □ repeats. What is the 10th shape?", type: "mcq", options: ["○", "△", "□"], answer: "○", shuffle: false, explain: "10 ÷ 3 = 3 R 1, so it is the 1st in the block." },
            { q: "2, 4, 6 repeats. What is the 20th number?", type: "number", answer: 4, explain: "20 ÷ 3 = 6 R 2, so it is the 2nd in the block." },
            { q: "A, B, C repeats. What is the 17th letter?", type: "mcq", options: ["A", "B", "C"], answer: "B", shuffle: false, explain: "17 ÷ 3 = 5 R 2, so it is the 2nd in the block." },
            { q: "A, B, C, D repeats. What is the 30th letter?", type: "mcq", options: ["A", "B", "C", "D"], answer: "B", shuffle: false, explain: "30 ÷ 4 = 7 R 2, so it is the 2nd in the block." },
            { q: "Cat, Dog, Cow, Hen repeats. What is the 22nd animal?", type: "mcq", options: ["Cat", "Dog", "Cow", "Hen"], answer: "Dog", shuffle: false, explain: "22 ÷ 4 = 5 R 2, so it is the 2nd in the block." },
            { q: "Red, Green, Blue repeats. What colour is the 30th?", type: "mcq", options: ["Red", "Green", "Blue"], answer: "Blue", shuffle: false, explain: "30 ÷ 3 = 10 R 0, so it is the last in the block." },
            { q: "★ ● ● repeats. What is the 25th shape?", type: "mcq", options: ["★", "●"], answer: "★", shuffle: false, explain: "25 ÷ 3 = 8 R 1, so it is the 1st in the block." },
            { q: "1, 3, 5, 7 repeats. What is the 18th number?", type: "number", answer: 3, explain: "18 ÷ 4 = 4 R 2, so it is the 2nd in the block." },
            { q: "Today is Monday. What day will it be after 50 days?", type: "mcq", options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], answer: "Tuesday", shuffle: false, explain: "50 ÷ 7 = 7 R 1, so it is 1 day after Monday." },
            { q: "P, Q, R, S, T repeats. What is the 49th letter?", type: "mcq", options: ["P", "Q", "R", "S", "T"], answer: "S", shuffle: false, explain: "49 ÷ 5 = 9 R 4, so it is the 4th in the block." },
            { q: "A, B repeats. What is the 100th letter?", type: "mcq", options: ["A", "B"], answer: "B", shuffle: false, explain: "B is in even places. 100 is even." },
            { q: "1, 2, 3, 4, 5, 6 repeats. What is the 40th number?", type: "number", answer: 4, explain: "40 ÷ 6 = 6 R 4, so it is the 4th in the block." },
            { q: "Red, Blue, Green repeats. How many Reds are in the first 20 items?", type: "number", answer: 7, explain: "Red is at 1, 4, 7, 10, 13, 16 and 19." },
            { q: "★ ★ ● repeats. How many ★ are in the first 12 items?", type: "number", answer: 8, explain: "12 items is 4 blocks, with 2 stars in each." },
            { q: "▲ ■ repeats. What is the 51st shape?", type: "mcq", options: ["▲", "■"], answer: "▲", shuffle: false, explain: "▲ is in odd places. 51 is odd." },
            { q: "5, 10, 15 repeats. What is the 14th number?", type: "number", answer: 10, explain: "14 ÷ 3 = 4 R 2, so it is the 2nd in the block." },
            { q: "Red, Red, Blue repeats. What is the 16th colour?", type: "mcq", options: ["Red", "Blue"], answer: "Red", shuffle: false, explain: "16 ÷ 3 = 5 R 1, so it is the 1st in the block." },
            { q: "R, G, B, Y repeats. Which place in the block (1 to 4) is the 37th item?", type: "number", answer: 1, explain: "37 ÷ 4 = 9 R 1, so it is the 1st in the block (R)." },
            { q: "A, B, C, D, E repeats. What is the 10th letter?", type: "mcq", options: ["A", "B", "C", "D", "E"], answer: "E", shuffle: false, explain: "10 ÷ 5 = 2 R 0, so it is the last in the block." }
          ]
        },
        {
          id: "magic-squares",
          title: "Magic Squares",
          explanation: "In a magic square, every row, column and diagonal adds up to the same total, called the magic total.\n\nFind the magic total from a full line first. Then use a line with only one gap: the missing number is the magic total minus the numbers you know.",
          workedExample: {
            problem: "A magic square has rows 2 7 ? / 9 5 1 / 4 3 8. Find the missing number.",
            steps: [
              "Use the full middle row: 9 + 5 + 1 = 15, so the magic total is 15.",
              "Top row: 2 + 7 + ? = 15, so ? = 15 − 9.",
              "Check a diagonal: 2 + 5 + 8 = 15 ✓"
            ],
            answer: "6"
          },
          tips: [
            "Find the magic total from any complete row, column or diagonal.",
            "Use a line with only ONE missing number.",
            "In a 3 × 3 magic square using 1 to 9, the centre is always 5 and opposite corners add up to 10."
          ],
          targetTime: "60–90 seconds",
          timeLimit: 60,
          questions: [
            { q: "In a 3 × 3 magic square using 1 to 9, what is the magic total?", type: "number", answer: 15, time: 30 },
            { q: "A row 4, ?, 8 adds up to 15. Find the missing number.", type: "number", answer: 3, time: 30 },
            { q: "A column 9, 5, ? adds up to 15. Find the missing number.", type: "number", answer: 1, time: 30 },
            { q: "In a magic square using 1 to 9, the centre is 5 and one corner is 2. What is the opposite corner?", type: "number", answer: 8, explain: "Opposite corners add up to 10." },
            { q: "A diagonal 6, 5, ? adds up to 15. Find the missing number.", type: "number", answer: 4, time: 30 },
            { q: "In a magic square using 1 to 9, which number is in the centre?", type: "number", answer: 5, time: 30 },
            { q: "A row 2, 7, ? adds up to 15. Find the missing number.", type: "number", answer: 6, time: 30 },
            { q: "A row 8, 1, ? adds up to 15. Find the missing number.", type: "number", answer: 6, time: 30 },
            { q: "A column 4, ?, 2 adds up to 15. Find the missing number.", type: "number", answer: 9, time: 30 },
            { q: "A diagonal 8, 5, ? adds up to 15. Find the missing number.", type: "number", answer: 2, time: 30 },
            { q: "A row 6, 1, ? adds up to 15. Find the missing number.", type: "number", answer: 8, time: 30 },
            { q: "A row 3, 5, ? adds up to 15. Find the missing number.", type: "number", answer: 7, time: 30 },
            { q: "In a magic square using 1 to 9, one corner is 4. What is the opposite corner?", type: "number", answer: 6, explain: "Opposite corners add up to 10." },
            { q: "In a magic square using 1 to 9, one corner is 8. What is the opposite corner?", type: "number", answer: 2, explain: "Opposite corners add up to 10." },
            { q: "A magic square has a total of 12. A row has 3, 5, ?. Find the missing number.", type: "number", answer: 4 },
            { q: "Magic square:\n4  9  2\n3  5  7\n8  1  6\n\nWhat is the sum of the first row?", type: "number", answer: 15, time: 30 },
            { q: "Magic square:\n4  9  2\n3  5  7\n8  1  6\n\nWhat is the sum of the middle column?", type: "number", answer: 15, time: 30 },
            { q: "Magic square:\n4  9  2\n3  5  7\n8  1  6\n\nWhat is the sum of the diagonal 4, 5, 6?", type: "number", answer: 15, time: 30 },
            { q: "Magic square:\n4  9  2\n3  5  7\n8  1  6\n\nWhat is the sum of all 9 numbers?", type: "number", answer: 45, explain: "3 rows of 15: 3 × 15 = 45." },
            { q: "The numbers 1 to 9 add up to 45. If they fill 3 rows with equal totals, what is each row's total?", type: "number", answer: 15, explain: "45 ÷ 3 = 15" },
            { q: "A magic square has a total of 18. A row has 7, ?, 5. Find the missing number.", type: "number", answer: 6 },
            { q: "A magic square has a total of 18. A row has 9, 6, ?. Find the missing number.", type: "number", answer: 3 },
            { q: "A magic square has a total of 21. A row has 10, 8, ?. Find the missing number.", type: "number", answer: 3 },
            { q: "Magic square:\n2  7  6\n9  5  1\n4  3  8\n\nWhich number is directly below 7?", type: "number", answer: 5, time: 30 },
            { q: "Magic square:\n2  7  6\n9  5  1\n4  3  8\n\nWhich number is directly to the right of 4?", type: "number", answer: 3, time: 30 }
          ]
        }
      ]
    },
    {
      id: "shapes-space",
      title: "Chapter 6: Shapes & Space",
      subtopics: [
        {
          id: "geometry-shapes",
          title: "Geometry & Shapes",
          explanation: "Perimeter is the distance all the way around a shape: add up the outside sides. Area is the space inside: count the unit squares, or multiply rows by columns.\n\nA shape has a line of symmetry if you can fold it so both halves match exactly.",
          workedExample: {
            problem: "A rectangle is 8 cm long and 5 cm wide. What is its perimeter?",
            steps: [
              "Perimeter = 2 × (length + width).",
              "2 × (8 + 5) = 2 × 13 = 26."
            ],
            answer: "26 cm"
          },
          tips: [
            "Perimeter means adding the outer sides. Area means counting the squares inside.",
            "Square: perimeter = 4 × side. Rectangle: perimeter = 2 × (length + width).",
            "A square has 4 lines of symmetry. A rectangle has 2."
          ],
          targetTime: "30–45 seconds",
          timeLimit: 45,
          questions: [
            { q: "A square has a side of 6 cm. What is its perimeter?", type: "number", unit: "cm", answer: 24, explain: "4 × 6 = 24", time: 30 },
            { q: "How many sides does a hexagon have?", type: "number", answer: 6, time: 20 },
            { q: "A rectangle is made of 4 rows of 5 unit squares. What is its area?", type: "number", unit: "square units", answer: 20, explain: "4 × 5 = 20", time: 30 },
            { q: "How many lines of symmetry does a square have?", type: "number", answer: 4, time: 25 },
            { q: "A shape has 3 sides and 3 corners. What is it called?", type: "mcq", options: ["Triangle", "Square", "Rectangle", "Circle"], answer: "Triangle", time: 20 },
            { q: "What is the perimeter of a rectangle 10 cm long and 4 cm wide?", type: "number", unit: "cm", answer: 28, explain: "2 × (10 + 4) = 28" },
            { q: "What is the perimeter of a square with a side of 9 cm?", type: "number", unit: "cm", answer: 36, explain: "4 × 9 = 36", time: 30 },
            { q: "What is the perimeter of a triangle with sides 5 cm, 6 cm and 7 cm?", type: "number", unit: "cm", answer: 18, explain: "5 + 6 + 7 = 18", time: 30 },
            { q: "A rectangle is made of 6 rows of 3 unit squares. What is its area?", type: "number", unit: "square units", answer: 18, time: 30 },
            { q: "How many sides does an octagon have?", type: "number", answer: 8, time: 20 },
            { q: "How many corners does a pentagon have?", type: "number", answer: 5, time: 20 },
            { q: "How many lines of symmetry does a rectangle (that is not a square) have?", type: "number", answer: 2, explain: "One across the middle and one down the middle." },
            { q: "How many lines of symmetry does an equilateral triangle (all sides equal) have?", type: "number", answer: 3 },
            { q: "How many lines of symmetry does the letter A have?", type: "number", answer: 1, explain: "Only one, straight down the middle." },
            { q: "Which shape has 4 equal sides and 4 right angles?", type: "mcq", options: ["Triangle", "Square", "Rectangle", "Circle"], answer: "Square", time: 20 },
            { q: "A square has a perimeter of 20 cm. How long is one side?", type: "number", unit: "cm", answer: 5, explain: "20 ÷ 4 = 5" },
            { q: "A rectangle is 7 cm long and has a perimeter of 24 cm. What is its width?", type: "number", unit: "cm", answer: 5, explain: "Half the perimeter is 12 = 7 + width, so the width is 5.", time: 60 },
            { q: "A square is made of 5 rows of 5 unit squares. What is its area?", type: "number", unit: "square units", answer: 25, time: 30 },
            { q: "How many small squares are there in a 3 × 3 grid?", type: "number", answer: 9, time: 25 },
            { q: "How many squares of all sizes are there in a 2 × 2 grid?", type: "number", answer: 5, explain: "4 small squares + 1 big square = 5." },
            { q: "A line from one corner of a triangle to the opposite side splits it into 2 smaller triangles. How many triangles are there in all, counting the big one?", type: "number", answer: 3 },
            { q: "How many right angles does a rectangle have?", type: "number", answer: 4, time: 20 },
            { q: "How many sides do a triangle and a square have together?", type: "number", answer: 7, time: 25 },
            { q: "A rectangular garden is 12 m long and 8 m wide. What is its perimeter?", type: "number", unit: "m", answer: 40, explain: "2 × (12 + 8) = 40" },
            { q: "A square tile has a side of 15 cm. What is its perimeter?", type: "number", unit: "cm", answer: 60, explain: "4 × 15 = 60" }
          ]
        },
        {
          id: "water-images",
          title: "Water Images",
          explanation: "A water image is what you see reflected in a still pond below. It flips top to bottom.\n\nA mirror image is different: it flips left to right.",
          workedExample: {
            problem: "What does the letter \"b\" look like as a water image?",
            steps: [
              "A water image flips upside down.",
              "\"b\" has its stem going up on the left and the round part at the bottom.",
              "Flipped, the stem goes down on the left and the round part is at the top."
            ],
            answer: "p"
          },
          tips: [
            "Mirror = left/right flip. Water = up/down flip.",
            "Imagine turning the letter upside down by flipping it over its bottom edge.",
            "B, C, D, E, H, I, K, O and X look the same in a water image."
          ],
          targetTime: "30–45 seconds",
          timeLimit: 40,
          questions: [
            { q: "What is the water image of the letter M?", type: "mcq", options: ["M", "W", "N"], answer: "W", shuffle: false, time: 30 },
            { q: "What is the water image of the letter d?", type: "mcq", options: ["b", "p", "q"], answer: "q", shuffle: false, time: 30 },
            { q: "Does the letter H change in a water image?", type: "mcq", options: ["Yes", "No"], answer: "No", shuffle: false, explain: "H looks the same flipped top to bottom.", time: 25 },
            { q: "Does the number 3 look the same in a water image?", type: "mcq", options: ["Yes, it looks the same", "No, it changes"], answer: "Yes, it looks the same", shuffle: false, explain: "3 looks the same flipped top to bottom.", time: 30 },
            { q: "What is the water image of the word OX?", type: "mcq", options: ["OX", "XO"], answer: "OX", shuffle: false, explain: "O and X both look the same flipped top to bottom.", time: 30 },
            { q: "What is the water image of the letter p?", type: "mcq", options: ["b", "d", "q"], answer: "b", shuffle: false, time: 30 },
            { q: "What is the water image of the letter q?", type: "mcq", options: ["b", "d", "p"], answer: "d", shuffle: false, time: 30 },
            { q: "What is the water image of the letter W?", type: "mcq", options: ["M", "W", "V"], answer: "M", shuffle: false, time: 30 },
            { q: "Does the letter B look the same in a water image?", type: "mcq", options: ["Yes, it looks the same", "No, it changes"], answer: "Yes, it looks the same", shuffle: false, time: 30 },
            { q: "What is the water image of the letter E?", type: "mcq", options: ["E", "F", "L"], answer: "E", shuffle: false, time: 30 },
            { q: "Does the letter C look the same in a water image?", type: "mcq", options: ["Yes, it looks the same", "No, it changes"], answer: "Yes, it looks the same", shuffle: false, time: 30 },
            { q: "What is the water image of the letter D?", type: "mcq", options: ["D", "P", "Q"], answer: "D", shuffle: false, time: 30 },
            { q: "Does the letter K look the same in a water image?", type: "mcq", options: ["Yes, it looks the same", "No, it changes"], answer: "Yes, it looks the same", shuffle: false, time: 30 },
            { q: "Which letters stay the same in a water image? Pick all.", type: "multi", options: ["A", "E", "F", "H"], answer: ["E", "H"], time: 40 },
            { q: "What is the water image of the word OH?", type: "mcq", options: ["OH", "HO"], answer: "OH", shuffle: false, time: 30 },
            { q: "What is the water image of the word HI?", type: "mcq", options: ["HI", "IH"], answer: "HI", shuffle: false, time: 30 },
            { q: "What is the water image of the word BOX?", type: "mcq", options: ["BOX", "XOB"], answer: "BOX", shuffle: false, time: 30 },
            { q: "What is the water image of the word ID?", type: "mcq", options: ["ID", "DI"], answer: "ID", shuffle: false, time: 30 },
            { q: "Is the water image of the letter E the same as E?", type: "mcq", options: ["Yes", "No"], answer: "Yes", shuffle: false, time: 25 },
            { q: "What is the water image of the letter u?", type: "mcq", options: ["n", "u", "v"], answer: "n", shuffle: false, time: 30 },
            { q: "What is the water image of the letter n?", type: "mcq", options: ["n", "u", "h"], answer: "u", shuffle: false, time: 30 },
            { q: "Which kind of image flips top to bottom?", type: "mcq", options: ["A mirror image", "A water image"], answer: "A water image", shuffle: false, time: 25 },
            { q: "What is the water image of the number 8?", type: "mcq", options: ["8", "B", "3"], answer: "8", shuffle: false, time: 30 },
            { q: "What is the water image of the number 0?", type: "mcq", options: ["0", "O", "6"], answer: "0", shuffle: false, time: 30 },
            { q: "What is the water image of the word DOCK?", type: "mcq", options: ["DOCK", "KCOD"], answer: "DOCK", shuffle: false, explain: "D, O, C and K all look the same flipped top to bottom.", time: 30 }
          ]
        },
        {
          id: "cubes-dice",
          title: "Cubes & Dice",
          explanation: "On a standard die, opposite faces always add up to 7: 1 and 6, 2 and 5, 3 and 4.\n\nThis one fact makes most dice questions quick, however the die is turned.",
          workedExample: {
            problem: "A die shows 1 on top, 2 facing you and 3 on the right. What number is on the bottom?",
            steps: [
              "Opposite faces add up to 7.",
              "1 is on top, so the bottom is 7 − 1."
            ],
            answer: "6"
          },
          tips: [
            "Opposite faces of a standard die add up to 7.",
            "All 6 faces together add up to 21.",
            "For hidden faces, find the opposite of each face you can see."
          ],
          targetTime: "45–70 seconds",
          timeLimit: 50,
          questions: [
            { q: "If 4 is on the top of a die, what number is on the bottom?", type: "number", answer: 3, time: 25 },
            { q: "If 1 is on the top of a die, what number is on the bottom?", type: "number", answer: 6, time: 25 },
            { q: "Two dice are stacked. The bottom face of the top die shows 2. What number is on the top face of the top die?", type: "number", answer: 5, explain: "Opposite faces add up to 7: 7 − 2 = 5." },
            { q: "A die shows 6 on top. Which number is on the bottom, touching the table?", type: "number", answer: 1, time: 25 },
            { q: "Three faces meeting at a corner show 1, 2 and 3. Which numbers are on the hidden faces? Pick all.", type: "multi", options: ["1", "2", "3", "4", "5", "6"], answer: ["4", "5", "6"], explain: "The opposites of 1, 2 and 3 are 6, 5 and 4." },
            { q: "If 1 is on the top of a die, what number is on the bottom?", type: "number", answer: 6, time: 25 },
            { q: "If 5 is on the top of a die, what number is on the bottom?", type: "number", answer: 2, time: 25 },
            { q: "If 3 is on the top of a die, what number is on the bottom?", type: "number", answer: 4, time: 25 },
            { q: "What number is opposite 2 on a die?", type: "number", answer: 5, time: 25 },
            { q: "What number is opposite 6 on a die?", type: "number", answer: 1, time: 25 },
            { q: "What number is opposite 4 on a die?", type: "number", answer: 3, time: 25 },
            { q: "Are 1 and 6 on opposite faces of a standard die?", type: "mcq", options: ["Yes", "No"], answer: "Yes", shuffle: false, time: 25 },
            { q: "Can 2 and 3 be on opposite faces of a standard die?", type: "mcq", options: ["Yes", "No"], answer: "No", shuffle: false, explain: "They add up to 5, not 7.", time: 30 },
            { q: "Which pair is on opposite faces?", type: "mcq", options: ["3 and 4", "2 and 6"], answer: "3 and 4", time: 30 },
            { q: "What is the sum of the numbers on all 6 faces of a die?", type: "number", answer: 21, explain: "1 + 2 + 3 + 4 + 5 + 6 = 21" },
            { q: "What is the sum of the top face and the bottom face of a die?", type: "number", answer: 7, time: 25 },
            { q: "If 1 is on top, what is the sum of the four side faces?", type: "number", answer: 14, explain: "21 − 1 − 6 = 14" },
            { q: "If 4 is on top, what is the sum of the four side faces?", type: "number", answer: 14, explain: "21 − 4 − 3 = 14" },
            { q: "Three faces meeting at a corner show 2, 3 and 6. Which numbers are on the hidden faces? Pick all.", type: "multi", options: ["1", "2", "3", "4", "5", "6"], answer: ["1", "4", "5"], explain: "The opposites of 2, 3 and 6 are 5, 4 and 1." },
            { q: "Three faces meeting at a corner show 1, 2 and 3. What is the total of the three hidden faces?", type: "number", answer: 15, explain: "6 + 5 + 4 = 15" },
            { q: "Three faces meeting at a corner show 4, 5 and 6. What is the total of the three hidden faces?", type: "number", answer: 6, explain: "3 + 2 + 1 = 6" },
            { q: "A die is rolled and shows 4 on top. What number is on the face touching the table?", type: "number", answer: 3, time: 25 },
            { q: "Two dice show 3 and 5 on top. What numbers are on their bottom faces?", type: "mcq", options: ["4 and 2", "3 and 5", "6 and 1", "2 and 3"], answer: "4 and 2" },
            { q: "The top face of a die shows 6. What is on the bottom face?", type: "number", answer: 1, time: 25 },
            { q: "Two dice show 6 and 4 on top. What is the total of the numbers on their bottom faces?", type: "number", answer: 4, explain: "1 + 3 = 4" }
          ]
        },
        {
          id: "embedded-figures",
          title: "Counting Hidden Shapes",
          explanation: "Hidden shapes can be inside bigger figures. Questions often ask how many triangles, squares or rectangles there are in all.\n\nDraw each figure on paper as you read the question. Count the smallest shapes first, then shapes made of 2 pieces, then 3, and so on.",
          workedExample: {
            problem: "A triangle has 1 line drawn from the top corner to the base. How many triangles are there in all?",
            steps: [
              "The line makes 2 small triangles.",
              "The 2 small triangles together make the whole triangle: 1 more.",
              "2 + 1 = 3."
            ],
            answer: "3 triangles"
          },
          tips: [
            "Count the smallest shapes first, then bigger ones made of 2, 3 or more pieces.",
            "Go in order so you don't miss any or count twice.",
            "Trace each shape with your finger to check all its sides are really there."
          ],
          targetTime: "50–70 seconds",
          timeLimit: 60,
          questions: [
            { q: "A square is split into 4 equal small squares by one line across and one line down. How many squares are there in all (count the big one)?", type: "number", answer: 5, explain: "4 small + 1 big = 5." },
            { q: "A grid has 3 rows and 3 columns of small squares. How many small squares are there?", type: "number", answer: 9, time: 30 },
            { q: "In a 3 × 3 grid, how many 2 × 2 squares can you find?", type: "number", answer: 4 },
            { q: "In a 3 × 3 grid, how many 3 × 3 squares are there?", type: "number", answer: 1, time: 30 },
            { q: "How many squares of all sizes are there in a 3 × 3 grid?", type: "number", answer: 14, explain: "9 small + 4 of size 2 × 2 + 1 big = 14." },
            { q: "A row has 3 squares side by side. How many squares are there?", type: "number", answer: 3, time: 30 },
            { q: "A row has 3 squares side by side. How many rectangles are there, counting single squares as rectangles?", type: "number", answer: 6, explain: "3 single + 2 made of two + 1 made of three = 6." },
            { q: "A row has 4 squares side by side. How many rectangles are there in all, counting single squares and the whole row?", type: "number", answer: 10, explain: "4 + 3 + 2 + 1 = 10" },
            { q: "A 2 × 2 grid of small squares. How many rectangles are there in all, counting squares as rectangles?", type: "number", answer: 9, explain: "4 small + 2 across + 2 down + 1 big = 9." },
            { q: "A triangle has 1 line from the top corner to the base. How many triangles are there in all?", type: "number", answer: 3, explain: "2 small + 1 big = 3." },
            { q: "A triangle has 2 lines from the top corner to the base. How many triangles are there in all?", type: "number", answer: 6, explain: "3 + 2 + 1 = 6" },
            { q: "A triangle has 3 lines from the top corner to the base. How many triangles are there in all?", type: "number", answer: 10, explain: "4 + 3 + 2 + 1 = 10" },
            { q: "A square has one diagonal drawn. How many triangles are there?", type: "number", answer: 2, time: 30 },
            { q: "A square has both diagonals drawn. How many triangles are there in all, small and big?", type: "number", answer: 8, explain: "4 small + 4 made of two small ones = 8." },
            { q: "A rectangle has one diagonal drawn. How many triangles are there?", type: "number", answer: 2, time: 30 },
            { q: "A triangle is split into 4 equal small triangles by joining the middles of its sides. How many triangles are there in all?", type: "number", answer: 5, explain: "4 small + 1 big = 5." },
            { q: "A hexagon is divided by joining the centre to each corner. How many triangles are there?", type: "number", answer: 6 },
            { q: "A square is divided into 4 equal small squares. How many small squares are there?", type: "number", answer: 4, time: 30 },
            { q: "A plus sign is made of 5 equal small squares. How many squares are there in all?", type: "number", answer: 5, explain: "No bigger squares can be made, so just the 5 small ones." },
            { q: "A grid has 2 rows and 3 columns of small squares. How many squares of all sizes are there?", type: "number", answer: 8, explain: "6 small + 2 of size 2 × 2 = 8." },
            { q: "How many squares of all sizes are there in a 4 × 4 grid?", type: "number", answer: 30, explain: "16 + 9 + 4 + 1 = 30", time: 75 },
            { q: "A row of 5 small squares. How many squares are there?", type: "number", answer: 5, time: 30 },
            { q: "A rectangle is split into 2 equal squares by a line down the middle. How many rectangles are there in all, counting squares?", type: "number", answer: 3, explain: "2 squares + 1 whole rectangle = 3." },
            { q: "A big triangle is divided into small triangles in 3 rows: 1, 3 and 5 small triangles. How many small triangles are there?", type: "number", answer: 9, explain: "1 + 3 + 5 = 9" },
            { q: "A big triangle is divided into 9 small triangles in rows of 1, 3 and 5. How many triangles of all sizes are there?", type: "number", answer: 13, explain: "9 small + 3 medium + 1 big = 13.", time: 75 }
          ]
        },
        {
          id: "spatial-reasoning",
          title: "Spatial Reasoning",
          explanation: "These questions test how well you picture things in your head: blocks of cubes, mirror images and folded paper.\n\nFor blocks, count one layer (rows × columns), then multiply by the number of layers.",
          workedExample: {
            problem: "A flat layer of unit cubes has 3 rows and 3 columns. How many cubes are there?",
            steps: [
              "It is one flat layer, so count rows × columns.",
              "3 × 3 = 9.",
              "With a second layer on top it would be 9 × 2 = 18."
            ],
            answer: "9 cubes"
          },
          tips: [
            "A mirror flips left and right but not up and down.",
            "A, H, I, M, O, T, U, V, W, X and Y look the same in a mirror. B, E, R and S look backwards.",
            "Count cubes layer by layer: rows × columns × layers."
          ],
          targetTime: "50–80 seconds",
          timeLimit: 50,
          questions: [
            { q: "How many unit cubes are in a 2 × 2 flat layer (one layer)?", type: "number", answer: 4, time: 25 },
            { q: "How many unit cubes are in a 2 × 2 × 2 cube (2 layers of 2 × 2)?", type: "number", answer: 8, time: 30 },
            { q: "Does the letter A look the same in a mirror?", type: "mcq", options: ["Yes", "No"], answer: "Yes", shuffle: false, time: 25 },
            { q: "Does the letter B look the same in a mirror?", type: "mcq", options: ["Yes", "No"], answer: "No", shuffle: false, time: 25 },
            { q: "A block has 4 rows, 4 columns and 3 layers. How many unit cubes are there?", type: "number", answer: 48, explain: "4 × 4 = 16 in each layer, and 16 × 3 = 48." },
            { q: "How many unit cubes are in a 3 × 3 flat layer?", type: "number", answer: 9, time: 25 },
            { q: "How many unit cubes are in a block that is 3 × 3 × 2?", type: "number", answer: 18, explain: "9 in each layer × 2 layers." },
            { q: "How many unit cubes are in a block that is 2 × 3 × 2?", type: "number", answer: 12, explain: "6 in each layer × 2 layers." },
            { q: "How many unit cubes are in a block that is 5 × 2 × 1?", type: "number", answer: 10, time: 30 },
            { q: "How many unit cubes are in a 3 × 3 × 3 cube?", type: "number", answer: 27, explain: "9 in each layer × 3 layers." },
            { q: "A 4 × 4 layer of cubes is stacked 2 layers high. How many unit cubes?", type: "number", answer: 32, explain: "16 × 2 = 32" },
            { q: "Does the letter H look the same in a mirror?", type: "mcq", options: ["Yes", "No"], answer: "Yes", shuffle: false, time: 25 },
            { q: "Does the letter E look the same in a mirror?", type: "mcq", options: ["Yes", "No"], answer: "No", shuffle: false, time: 25 },
            { q: "Does the letter M look the same in a mirror?", type: "mcq", options: ["Yes", "No"], answer: "Yes", shuffle: false, time: 25 },
            { q: "Does the letter R look the same in a mirror?", type: "mcq", options: ["Yes", "No"], answer: "No", shuffle: false, time: 25 },
            { q: "Does the letter T look the same in a mirror?", type: "mcq", options: ["Yes", "No"], answer: "Yes", shuffle: false, time: 25 },
            { q: "Does the letter S look the same in a mirror?", type: "mcq", options: ["Yes", "No"], answer: "No", shuffle: false, time: 25 },
            { q: "Which letter looks the same in a mirror?", type: "mcq", options: ["A", "B", "C"], answer: "A", shuffle: false, time: 25 },
            { q: "How many faces does a cube have?", type: "number", answer: 6, time: 15 },
            { q: "A stack has 3 layers: 9 cubes at the bottom, 4 in the middle and 1 on top. How many cubes in all?", type: "number", answer: 14 },
            { q: "A stack has 4 layers with 6 cubes in each. How many cubes in all?", type: "number", answer: 24, time: 30 },
            { q: "How many small cubes are needed to build a 2 × 2 × 2 cube?", type: "number", answer: 8, time: 30 },
            { q: "A cuboid has 2 layers, and each layer has 3 rows of 4 cubes. How many cubes in all?", type: "number", answer: 24, explain: "3 × 4 = 12 in each layer, and 12 × 2 = 24." },
            { q: "A paper is folded in half twice and then opened out. How many equal parts does it have?", type: "number", answer: 4 },
            { q: "A paper is folded in half three times and then opened out. How many equal parts does it have?", type: "number", answer: 8, explain: "2 × 2 × 2 = 8" }
          ]
        },
        {
          id: "figure-matrix",
          title: "Figure Matrix",
          explanation: "A figure matrix is a grid of shapes or numbers that follows a rule. Find the rule and work out the missing piece.\n\nHere the figures are described in words. Draw the grid on paper to see the rule.",
          workedExample: {
            problem: "A 2 × 2 grid: top-left 1 circle, top-right 2 circles, bottom-left 2 circles, bottom-right ?",
            steps: [
              "Across the rows: 1 circle becomes 2 circles, so add 1.",
              "Down the columns: 1 circle becomes 2 circles, so add 1.",
              "Bottom-right = 2 + 1."
            ],
            answer: "3 circles"
          },
          tips: [
            "Check both directions: across each row and down each column.",
            "Common rules: the count goes up, a shape turns, shading changes, or the last item is the sum of the first two.",
            "Cover the missing box and say out loud what changes from box to box."
          ],
          targetTime: "60–90 seconds",
          timeLimit: 60,
          questions: [
            { q: "A 2 × 2 grid has 1 star, 2 stars on the top row, and 2 stars, ? on the bottom row. Rows and columns each add 1. How many stars are missing?", type: "number", answer: 3 },
            { q: "A shape turns a quarter turn clockwise each box. Box 1 points UP, Box 2 points RIGHT. Which way does Box 3 point?", type: "mcq", options: ["Up", "Right", "Down", "Left"], answer: "Down", shuffle: false },
            { q: "A shape turns clockwise: UP, RIGHT, DOWN, ?", type: "mcq", options: ["Up", "Right", "Down", "Left"], answer: "Left", shuffle: false },
            { q: "Shading: empty, half, full, empty, half, ?", type: "mcq", options: ["Empty", "Half", "Full"], answer: "Full", shuffle: false, time: 30 },
            { q: "Size: small, medium, large, small, medium, ?", type: "mcq", options: ["Small", "Medium", "Large"], answer: "Large", shuffle: false, time: 30 },
            { q: "Rows: 1, 2, 3 / 2, 3, 4 / 3, 4, ?. Find the missing number.", type: "number", answer: 5 },
            { q: "Rows: 2, 4, 6 / 3, 6, 9 / 4, 8, ?. Find the missing number.", type: "number", answer: 12, explain: "Each row counts in its first number: 4, 8, 12." },
            { q: "In each row the last number = first + second. Rows: 2, 3, 5 / 1, 4, 5 / 3, 2, ?. Find the missing number.", type: "number", answer: 5 },
            { q: "In each row the last number = first + second. Rows: 1, 4, 5 / 2, 3, 5 / 6, 2, ?. Find the missing number.", type: "number", answer: 8 },
            { q: "In each row the last number = first − second. Rows: 10, 4, 6 / 9, 5, 4 / 8, 3, ?. Find the missing number.", type: "number", answer: 5 },
            { q: "Columns: 2, 3, 4 / 4, 5, 6 / 6, 7, ?. Find the missing number.", type: "number", answer: 8 },
            { q: "Arrows turn clockwise: ↑ → ↓ ← ?  What comes next?", type: "mcq", options: ["↑", "→", "↓", "←"], answer: "↑", shuffle: false },
            { q: "Rows: 1, 3, 5 / 2, 4, 6 / 3, 5, ?. Find the missing number.", type: "number", answer: 7 },
            { q: "Row 1: ○ □ △. Row 2: □ △ ○. Row 3: △ ○ ?  Which shape is missing?", type: "mcq", options: ["○", "□", "△"], answer: "□", shuffle: false, explain: "Each row and column has one of each shape." },
            { q: "Row 1: ○ △ □. Row 2: △ □ ○. Row 3: □ ○ ?  Which shape is missing?", type: "mcq", options: ["○", "□", "△"], answer: "△", shuffle: false, explain: "Each row and column has one of each shape." },
            { q: "Row 1: red, blue, green. Row 2: blue, green, red. Row 3: green, red, ?  Which colour is missing?", type: "mcq", options: ["Red", "Blue", "Green"], answer: "Blue", shuffle: false, explain: "Each row and column has one of each colour." },
            { q: "Shapes gain one side each step: triangle, square, pentagon, ?", type: "mcq", options: ["Hexagon", "Octagon", "Circle"], answer: "Hexagon", shuffle: false, time: 30 },
            { q: "Number of sides: 3, 4, 5, ?", type: "number", answer: 6, time: 30 },
            { q: "A dot moves one corner clockwise each box: top-left, top-right, bottom-right, ?", type: "mcq", options: ["Top-left", "Top-right", "Bottom-right", "Bottom-left"], answer: "Bottom-left", shuffle: false },
            { q: "A dot moves one corner clockwise each box. What comes after bottom-left?", type: "mcq", options: ["Top-left", "Top-right", "Bottom-right", "Bottom-left"], answer: "Top-left", shuffle: false },
            { q: "Shaded squares out of 4: 1, 2, 3, ? How many are shaded next?", type: "number", answer: 4, time: 30 },
            { q: "Stars in each box: 1, 3, 5, 7, ?", type: "number", answer: 9, time: 30 },
            { q: "Rows: 2, 4, 6 / 3, 5, 7 / 4, 6, ?. Find the missing number.", type: "number", answer: 8 },
            { q: "Rows: 5, 10, 15 / 6, 12, 18 / 7, 14, ?. Find the missing number.", type: "number", answer: 21 },
            { q: "Rows: 1, 2, 4 / 2, 4, 8 / 3, 6, ?. Find the missing number.", type: "number", answer: 12, explain: "Each number is double the one before." }
          ]
        },
        {
          id: "paper-folding",
          title: "Paper Folding & Cutting",
          explanation: "When you fold paper and cut it, then unfold it, the fold line becomes a mirror line. Every cut shows up on each layer.\n\nTry these with real paper and scissors first.",
          workedExample: {
            problem: "A square paper is folded in half and a small triangle is cut out with one side on the fold. What does it look like when unfolded?",
            steps: [
              "The fold line becomes a line of symmetry, so the cut is mirrored onto the other half.",
              "The two triangles touch along the fold.",
              "Together they make one bigger shape."
            ],
            answer: "One diamond-shaped hole in the middle"
          },
          tips: [
            "The fold line always becomes a mirror line when you unfold.",
            "A cut away from the fold makes separate holes, one per layer. A cut on the fold makes joined holes.",
            "1 fold = 2 layers, 2 folds = 4 layers, 3 folds = 8 layers."
          ],
          targetTime: "60–90 seconds",
          timeLimit: 60,
          questions: [
            { q: "A paper is folded in half and a half-circle is cut with its flat side on the fold. What shape is the hole when unfolded?", type: "mcq", options: ["A full circle", "Two half-circles", "A square"], answer: "A full circle", shuffle: false },
            { q: "A paper is folded twice (into quarters) and a small triangle is cut from a corner away from all the folds. How many triangle holes appear when unfolded?", type: "number", answer: 4, explain: "2 folds make 4 layers, so 4 triangles." },
            { q: "A paper is folded in half and a small square is cut away from the fold. How many squares appear when unfolded?", type: "number", answer: 2 },
            { q: "A paper is folded into quarters and a small shape is cut at the corner where all the folds meet. How many holes appear when unfolded?", type: "number", answer: 1, explain: "The 4 cut pieces join up at the centre into one hole." },
            { q: "A paper is folded in half and a triangle is cut away from the fold. How many triangles appear when unfolded?", type: "number", answer: 2 },
            { q: "A paper is folded once and 1 small circle is cut away from the fold. How many circles appear when unfolded?", type: "number", answer: 2, time: 40 },
            { q: "A paper is folded twice and 1 small circle is cut away from the folds. How many circles appear when unfolded?", type: "number", answer: 4, time: 40 },
            { q: "A paper is folded three times and 1 small hole is cut away from the folds. How many holes appear when unfolded?", type: "number", answer: 8, explain: "3 folds make 8 layers." },
            { q: "A paper is folded once and 3 small holes are cut away from the fold. How many holes appear when unfolded?", type: "number", answer: 6, explain: "3 holes × 2 layers = 6." },
            { q: "A paper is folded twice and 2 small holes are cut away from the folds. How many holes appear when unfolded?", type: "number", answer: 8, explain: "2 holes × 4 layers = 8." },
            { q: "A paper is folded in half and a triangle is cut with one side on the fold. How many sides does the unfolded hole have?", type: "number", answer: 4, explain: "Two triangles joined on the fold make a diamond, which has 4 sides." },
            { q: "A paper is folded in half and a small rectangle is cut with one long side on the fold. What shape is the unfolded hole?", type: "mcq", options: ["A rectangle twice as wide", "Two small rectangles", "A triangle"], answer: "A rectangle twice as wide", shuffle: false },
            { q: "A paper is folded in half and a hole is cut near the open edge, far from the fold. How many holes appear when unfolded?", type: "number", answer: 2 },
            { q: "A square paper is folded in half twice. How many layers of paper are there?", type: "number", answer: 4, time: 40 },
            { q: "A paper is folded in half three times. How many layers are there?", type: "number", answer: 8, time: 40 },
            { q: "A paper has 8 layers and one hole is cut through all of them, away from the folds. How many holes appear when unfolded?", type: "number", answer: 8, time: 40 },
            { q: "A paper is folded in half. Which line becomes the line of symmetry when it is unfolded?", type: "mcq", options: ["The fold line", "The top edge", "The bottom edge"], answer: "The fold line", shuffle: false, time: 30 },
            { q: "A paper is folded in half and a hole is cut 2 cm from the fold. After unfolding, how far apart are the two holes?", type: "number", unit: "cm", answer: 4, explain: "Each hole is 2 cm from the fold, on opposite sides: 2 + 2 = 4 cm." },
            { q: "A paper is folded in half and a hole is cut 3 cm from the fold. After unfolding, how far apart are the two holes?", type: "number", unit: "cm", answer: 6, explain: "3 + 3 = 6 cm" },
            { q: "A paper is folded in half twice (into quarters) and one hole is cut away from the folds. How many holes appear when unfolded?", type: "number", answer: 4, time: 40 },
            { q: "A paper is folded in half 4 times. How many layers are there?", type: "number", answer: 16, explain: "2 × 2 × 2 × 2 = 16" },
            { q: "Folding a paper in half twice makes how many equal parts?", type: "number", answer: 4, time: 30 },
            { q: "A square paper is folded in half along a diagonal. What shape is the folded paper?", type: "mcq", options: ["Triangle", "Rectangle", "Square"], answer: "Triangle", shuffle: false, time: 30 },
            { q: "A rectangle is folded in half lengthwise. What shape is the folded paper?", type: "mcq", options: ["Triangle", "Rectangle", "Circle"], answer: "Rectangle", shuffle: false, time: 30 },
            { q: "A square paper is folded in half to make a rectangle, then folded in half again the other way. What shape is the folded paper?", type: "mcq", options: ["Triangle", "Rectangle", "Square"], answer: "Square", shuffle: false }
          ]
        }
      ]
    },
    {
      id: "logic-reasoning",
      title: "Chapter 7: Logic & Reasoning",
      subtopics: [
        {
          id: "blood-relations",
          title: "Blood Relations",
          explanation: "Work out how two people in a family are related from a description.\n\nStart with the person speaking, and follow one relationship at a time.",
          workedExample: {
            problem: "Pointing to a boy, a woman says, \"He is the son of my son.\" How is the boy related to the woman?",
            steps: [
              "Break it into a chain: woman → her son → his son (the boy).",
              "\"My son's son\" is my grandson."
            ],
            answer: "Grandson"
          },
          tips: [
            "Draw a tiny family tree with arrows.",
            "Follow one relationship at a time towards the person you're asked about.",
            "Father's brother = uncle, mother's sister = aunt, brother's son = nephew, uncle's child = cousin."
          ],
          targetTime: "45–60 seconds",
          timeLimit: 55,
          questions: [
            { q: "Pointing to a girl, a man says, \"She is the daughter of my mother's only son.\" The man has no brothers. How is the girl related to him?", type: "mcq", options: ["Sister", "Daughter", "Niece", "Cousin"], answer: "Daughter", shuffle: false, explain: "His mother's only son is the man himself, so the girl is his daughter." },
            { q: "A woman says, \"This boy is my brother's son.\" How is the boy related to her?", type: "mcq", options: ["Son", "Nephew", "Cousin", "Brother"], answer: "Nephew", shuffle: false },
            { q: "Riya's mother is Sam's sister. How is Sam related to Riya?", type: "mcq", options: ["Father", "Uncle", "Brother", "Cousin"], answer: "Uncle", shuffle: false, explain: "Your mother's brother is your uncle." },
            { q: "A man looks at a photo and says, \"Her father is my father's only son.\" The man has no brothers. Whose photo is it?", type: "mcq", options: ["His sister's", "His daughter's", "His mother's", "His niece's"], answer: "His daughter's", shuffle: false, explain: "His father's only son is the man himself, so the girl in the photo is his daughter.", time: 75 },
            { q: "Tina says, \"He is my father's father.\" How is he related to Tina?", type: "mcq", options: ["Uncle", "Grandfather", "Father", "Brother"], answer: "Grandfather", shuffle: false, time: 35 },
            { q: "Your mother's brother is your ___.", type: "mcq", options: ["Uncle", "Cousin", "Nephew", "Grandfather"], answer: "Uncle", shuffle: false, time: 30 },
            { q: "Your father's sister is your ___.", type: "mcq", options: ["Aunt", "Sister", "Niece", "Grandmother"], answer: "Aunt", shuffle: false, time: 30 },
            { q: "Your mother's mother is your ___.", type: "mcq", options: ["Aunt", "Grandmother", "Mother", "Sister"], answer: "Grandmother", shuffle: false, time: 30 },
            { q: "Your uncle's son is your ___.", type: "mcq", options: ["Brother", "Nephew", "Cousin", "Uncle"], answer: "Cousin", shuffle: false, time: 30 },
            { q: "Your brother's daughter is your ___.", type: "mcq", options: ["Sister", "Niece", "Cousin", "Daughter"], answer: "Niece", shuffle: false, time: 30 },
            { q: "Your sister's son is your ___.", type: "mcq", options: ["Brother", "Son", "Nephew", "Cousin"], answer: "Nephew", shuffle: false, time: 30 },
            { q: "Your father's father is your ___.", type: "mcq", options: ["Uncle", "Grandfather", "Brother", "Father"], answer: "Grandfather", shuffle: false, time: 30 },
            { q: "Your mother's husband is your ___.", type: "mcq", options: ["Uncle", "Father", "Grandfather", "Brother"], answer: "Father", shuffle: false, time: 30 },
            { q: "Your sister's husband is your ___.", type: "mcq", options: ["Brother", "Uncle", "Brother-in-law", "Cousin"], answer: "Brother-in-law", shuffle: false, time: 30 },
            { q: "Pointing to a girl, Ria says, \"She is the daughter of my mother.\" How is the girl related to Ria?", type: "mcq", options: ["Sister", "Cousin", "Aunt", "Niece"], answer: "Sister", shuffle: false, explain: "Ria isn't pointing at herself, so the girl is her sister." },
            { q: "Pointing to a man, Anu says, \"He is the brother of my father.\" How is he related to Anu?", type: "mcq", options: ["Uncle", "Brother", "Grandfather", "Cousin"], answer: "Uncle", shuffle: false, time: 35 },
            { q: "Raj says, \"That woman is my mother's mother.\" How is she related to Raj?", type: "mcq", options: ["Aunt", "Grandmother", "Mother", "Sister"], answer: "Grandmother", shuffle: false, time: 35 },
            { q: "A girl says, \"He is my father's only son.\" How is he related to her?", type: "mcq", options: ["Brother", "Father", "Uncle", "Cousin"], answer: "Brother", shuffle: false, explain: "Her father's only son is her brother (she is a girl, so it isn't her)." },
            { q: "A boy says, \"She is the sister of my father.\" How is she related to him?", type: "mcq", options: ["Aunt", "Sister", "Mother", "Cousin"], answer: "Aunt", shuffle: false, time: 35 },
            { q: "A is B's brother, and B is C's mother. How is A related to C?", type: "mcq", options: ["Father", "Uncle", "Brother", "Grandfather"], answer: "Uncle", shuffle: false, explain: "A is the brother of C's mother, so A is C's uncle." },
            { q: "P is Q's father, and Q is R's sister. R is a boy. How is P related to R?", type: "mcq", options: ["Father", "Uncle", "Grandfather", "Brother"], answer: "Father", shuffle: false, explain: "Q and R are brother and sister, so they have the same father." },
            { q: "Ravi's mother has 3 children: Ravi, Sam and Tina. Ravi and Sam are boys. How many brothers does Tina have?", type: "number", answer: 2 },
            { q: "Two fathers and two sons are in a car, but there are only 3 people. Who are they?", type: "mcq", options: ["A grandfather, his son and his grandson", "Three brothers", "Two cousins and an uncle"], answer: "A grandfather, his son and his grandson", shuffle: false, explain: "The middle person is both a father and a son." },
            { q: "Priya's mother's only brother is Vikram. How is Priya related to Vikram?", type: "mcq", options: ["Daughter", "Niece", "Sister", "Cousin"], answer: "Niece", shuffle: false, explain: "Vikram is Priya's uncle, so Priya is his niece." },
            { q: "Your uncle's wife is your ___.", type: "mcq", options: ["Aunt", "Mother", "Sister", "Cousin"], answer: "Aunt", shuffle: false, time: 30 }
          ]
        },
        {
          id: "ranking",
          title: "Ranking & Position in a Line",
          explanation: "These questions ask how many people are in a line, or where someone stands, from clues like \"5th from the left\".\n\nTotal = position from the left + position from the right − 1, because the person is counted from both ends.",
          workedExample: {
            problem: "Ravi is 5th from the left and 8th from the right in a line. How many children are in the line?",
            steps: [
              "Adding 5 + 8 counts Ravi twice.",
              "Total = 5 + 8 − 1."
            ],
            answer: "12 children"
          },
          tips: [
            "Total = left position + right position − 1.",
            "Position from the other end = total − position + 1.",
            "Children between two people: subtract their positions, then subtract 1 more."
          ],
          targetTime: "45–65 seconds",
          timeLimit: 55,
          questions: [
            { q: "Meera is 3rd from the left and 6th from the right. How many children are in the line?", type: "number", answer: 8, explain: "3 + 6 − 1 = 8" },
            { q: "In a line of 20 students, Tom is 7th from the left. What is his position from the right?", type: "number", answer: 14, explain: "20 − 7 + 1 = 14" },
            { q: "Priya is 4th from the right and 10th from the left. How many students are there in all?", type: "number", answer: 13, explain: "4 + 10 − 1 = 13" },
            { q: "In a row of 15 kids, Sam is 6th from the left. How many kids are to his right?", type: "number", answer: 9, explain: "15 − 6 = 9" },
            { q: "Ana is 5th from the left in a line of 9 kids. What is her position from the right?", type: "number", answer: 5, explain: "9 − 5 + 1 = 5" },
            { q: "Ravi is 4th from the left and 7th from the right. How many children are in the line?", type: "number", answer: 10, explain: "4 + 7 − 1 = 10" },
            { q: "Anu is 6th from the left and 6th from the right. How many children are in the line?", type: "number", answer: 11, explain: "6 + 6 − 1 = 11" },
            { q: "In a line of 15, Tom is 9th from the left. What is his position from the right?", type: "number", answer: 7, explain: "15 − 9 + 1 = 7" },
            { q: "In a line of 25, Meena is 10th from the right. What is her position from the left?", type: "number", answer: 16, explain: "25 − 10 + 1 = 16" },
            { q: "Raj is 1st from the left in a line of 12. What is his position from the right?", type: "number", answer: 12, explain: "12 − 1 + 1 = 12" },
            { q: "In a row of 18 kids, Sam is 7th from the left. How many kids are to his right?", type: "number", answer: 11, explain: "18 − 7 = 11" },
            { q: "In a line of 12, Ana is 4th from the left. How many kids are to her left?", type: "number", answer: 3, time: 35 },
            { q: "In a line of 30, Priya is 12th from the left. How many kids are to her right?", type: "number", answer: 18, explain: "30 − 12 = 18" },
            { q: "How many children are between the 3rd and the 9th child in a line?", type: "number", answer: 5, explain: "The 4th, 5th, 6th, 7th and 8th: 9 − 3 − 1 = 5." },
            { q: "How many children are between the 5th and the 12th child from the left?", type: "number", answer: 6, explain: "12 − 5 − 1 = 6" },
            { q: "Dev is 8th from the left and Esha is 15th from the left. How many children are between them?", type: "number", answer: 6, explain: "15 − 8 − 1 = 6" },
            { q: "In a race, Sam finishes 3rd. How many runners finished before him?", type: "number", answer: 2, time: 30 },
            { q: "In a race of 10 runners, Tom came 4th from last. What was his position from the start?", type: "number", answer: 7, explain: "10 − 4 + 1 = 7" },
            { q: "In a class of 40, Ria is 15th from the top. What is her position from the bottom?", type: "number", answer: 26, explain: "40 − 15 + 1 = 26" },
            { q: "Mani is 12th from the front and 9th from the back. How many students are in the line?", type: "number", answer: 20, explain: "12 + 9 − 1 = 20" },
            { q: "In a line of 20, Kiran is 10th from the left and Leela is 10th from the right. How many children are between them?", type: "number", answer: 0, explain: "Leela is 11th from the left, so they stand next to each other.", time: 75 },
            { q: "In a line of 9 children, which position from the left is the middle child?", type: "number", answer: 5, time: 35 },
            { q: "In a line of 15 children, which position from the left is the middle child?", type: "number", answer: 8, time: 35 },
            { q: "Priya is 5th from the left. Neha stands 4 places to the right of Priya. What is Neha's position from the left?", type: "number", answer: 9, explain: "5 + 4 = 9" },
            { q: "In a line of 14, Vikram is 3rd from the right. What is his position from the left?", type: "number", answer: 12, explain: "14 − 3 + 1 = 12" }
          ]
        },
        {
          id: "logical-reasoning",
          title: "Logical Reasoning & Puzzles",
          explanation: "These puzzles ask you to put people or things in order, work out ages, or decide what must be true.\n\nDraw a quick ladder or table on paper instead of holding it all in your head.",
          workedExample: {
            problem: "Amy is taller than Ben. Ben is taller than Chris. Who is the shortest?",
            steps: [
              "Write it as a chain: Amy > Ben > Chris.",
              "The one at the end of the chain is the shortest."
            ],
            answer: "Chris"
          },
          tips: [
            "Draw a ladder with the names stacked in order.",
            "For ages (\"in 5 years...\"), make a small table: Now / Later.",
            "\"Cannot say\" is a real answer when the facts don't tell you."
          ],
          targetTime: "45–70 seconds",
          timeLimit: 60,
          questions: [
            { q: "Priya is older than Raj. Raj is older than Sam. Who is the oldest?", type: "mcq", options: ["Priya", "Raj", "Sam"], answer: "Priya", shuffle: false, time: 35 },
            { q: "Today Leo is 8. In 6 years, how old will he be?", type: "number", unit: "years", answer: 14, time: 30 },
            { q: "In a race, Nina finishes before Omar, and Omar finishes before Priya. Who finishes last?", type: "mcq", options: ["Nina", "Omar", "Priya"], answer: "Priya", shuffle: false, time: 40 },
            { q: "All cats are animals. Tom is a cat. Is Tom an animal?", type: "mcq", options: ["Yes", "No"], answer: "Yes", shuffle: false, time: 30 },
            { q: "Five friends sit in a row. Ana is at the left end, Dan is at the right end and Sam is in the middle. Ben sits between Ana and Sam. Cara is the only one left. Who sits between Sam and Dan?", type: "mcq", options: ["Ana", "Ben", "Cara"], answer: "Cara", shuffle: false, explain: "The row is Ana, Ben, Sam, Cara, Dan.", time: 75 },
            { q: "Tom is taller than Raj. Raj is taller than Sam. Who is the tallest?", type: "mcq", options: ["Tom", "Raj", "Sam"], answer: "Tom", shuffle: false, time: 35 },
            { q: "Tom is taller than Raj. Raj is taller than Sam. Who is the shortest?", type: "mcq", options: ["Tom", "Raj", "Sam"], answer: "Sam", shuffle: false, time: 35 },
            { q: "Nina is older than Omar. Omar is older than Priya. Who is the youngest?", type: "mcq", options: ["Nina", "Omar", "Priya"], answer: "Priya", shuffle: false, time: 35 },
            { q: "Anu is 9. Her brother is 4 years older. How old is her brother?", type: "number", unit: "years", answer: 13, time: 30 },
            { q: "Ravi is 10. How old was he 3 years ago?", type: "number", unit: "years", answer: 7, time: 30 },
            { q: "In 5 years, Meena will be 14. How old is she now?", type: "number", unit: "years", answer: 9, time: 35 },
            { q: "A red ball is heavier than a blue ball. The blue ball is heavier than a green ball. Which ball is the lightest?", type: "mcq", options: ["Red", "Blue", "Green"], answer: "Green", shuffle: false, time: 40 },
            { q: "All dogs are animals. Bruno is a dog. Is Bruno an animal?", type: "mcq", options: ["Yes", "No"], answer: "Yes", shuffle: false, time: 30 },
            { q: "All roses are flowers. A tulip is a flower. Is a tulip a rose?", type: "mcq", options: ["Yes", "No", "Cannot say"], answer: "Cannot say", shuffle: false, explain: "Being a flower doesn't make something a rose. The facts don't say." },
            { q: "A is taller than B, B is taller than C, and C is taller than D. Who is the second tallest?", type: "mcq", options: ["A", "B", "C", "D"], answer: "B", shuffle: false },
            { q: "In a race of 3, Sam finishes before Tom but after Raj. Who wins?", type: "mcq", options: ["Sam", "Tom", "Raj"], answer: "Raj", shuffle: false, explain: "The order is Raj, Sam, Tom." },
            { q: "In a race of 3, Sam finishes before Tom but after Raj. Who finishes last?", type: "mcq", options: ["Sam", "Tom", "Raj"], answer: "Tom", shuffle: false, explain: "The order is Raj, Sam, Tom." },
            { q: "Ann is older than Bob but younger than Cara. Who is the oldest?", type: "mcq", options: ["Ann", "Bob", "Cara"], answer: "Cara", shuffle: false, explain: "The order is Cara, Ann, Bob." },
            { q: "Today is Monday. What day was it 2 days ago?", type: "mcq", options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], answer: "Saturday", shuffle: false, time: 30 },
            { q: "Riya has 3 more stickers than Meena. Meena has 12. How many does Riya have?", type: "number", answer: 15, time: 30 },
            { q: "Anu and Binu are twins. Anu is 7. How old is Binu?", type: "number", unit: "years", answer: 7, time: 25 },
            { q: "A father is 30 years older than his son. The son is 8. How old is the father?", type: "number", unit: "years", answer: 38, time: 30 },
            { q: "Which is heavier: 1 kg of cotton or 1 kg of iron?", type: "mcq", options: ["1 kg of cotton", "1 kg of iron", "Both are the same"], answer: "Both are the same", shuffle: false, explain: "Both weigh 1 kg.", time: 30 },
            { q: "Three boxes are stacked. The red box is on top of the blue box, and the green box is under the blue box. Which box is in the middle?", type: "mcq", options: ["Red", "Blue", "Green"], answer: "Blue", shuffle: false },
            { q: "Which is the odd one out?", type: "mcq", options: ["2", "4", "6", "9", "8"], answer: "9", explain: "9 is the only odd number.", time: 30 }
          ]
        },
        {
          id: "direction-sense",
          title: "Direction Sense",
          explanation: "Follow someone's moves North, South, East and West to find where they end up.\n\nWhen the path makes a right angle of 3 and 4, the straight-line distance back is 5. The same works for 6, 8, 10 and 9, 12, 15.",
          workedExample: {
            problem: "Ravi walks 4 m North, then 3 m East. How far is he from home in a straight line?",
            steps: [
              "The path makes a right angle: 4 m one way and 3 m the other.",
              "This is the 3-4-5 triangle, so the straight line is the longest side."
            ],
            answer: "5 m"
          },
          tips: [
            "Draw it! A rough sketch with N, S, E and W arrows stops most mix-ups.",
            "Remember 3-4-5 and its doubles: 6-8-10 and 9-12-15.",
            "Turning right from North goes to East. Turning left goes to West."
          ],
          targetTime: "50–70 seconds",
          timeLimit: 55,
          questions: [
            { q: "Sam walks 5 m East, then 5 m West. How far is he from the start?", type: "number", unit: "m", answer: 0, explain: "He is back where he started.", time: 35 },
            { q: "Priya walks 6 m North, then 8 m East. How far is she from the start in a straight line?", type: "number", unit: "m", answer: 10, explain: "6-8-10 is double 3-4-5." },
            { q: "You face North and turn right once. Which way do you face?", type: "mcq", options: ["North", "South", "East", "West"], answer: "East", shuffle: false, time: 25 },
            { q: "Tom walks 2 m South, then 2 m North. Where is he?", type: "mcq", options: ["Back at the start", "2 m South", "4 m North"], answer: "Back at the start", shuffle: false, time: 30 },
            { q: "You face East and turn right twice. Which way do you face?", type: "mcq", options: ["North", "South", "East", "West"], answer: "West", shuffle: false, explain: "East → South → West", time: 35 },
            { q: "You face North and turn left. Which way do you face?", type: "mcq", options: ["North", "South", "East", "West"], answer: "West", shuffle: false, time: 25 },
            { q: "You face South and turn left. Which way do you face?", type: "mcq", options: ["North", "South", "East", "West"], answer: "East", shuffle: false, time: 30 },
            { q: "You face West and turn right. Which way do you face?", type: "mcq", options: ["North", "South", "East", "West"], answer: "North", shuffle: false, time: 30 },
            { q: "You face East and turn left. Which way do you face?", type: "mcq", options: ["North", "South", "East", "West"], answer: "North", shuffle: false, time: 30 },
            { q: "You face North and make a half turn. Which way do you face?", type: "mcq", options: ["North", "South", "East", "West"], answer: "South", shuffle: false, time: 25 },
            { q: "You face East and make a full turn. Which way do you face?", type: "mcq", options: ["North", "South", "East", "West"], answer: "East", shuffle: false, explain: "A full turn brings you back to where you started.", time: 30 },
            { q: "Ravi walks 3 m North, then 3 m South. How far is he from the start?", type: "number", unit: "m", answer: 0, time: 30 },
            { q: "Meena walks 5 m East, then 2 m East. How far is she from the start?", type: "number", unit: "m", answer: 7, time: 30 },
            { q: "A boy walks 4 m North, then 3 m East. What is his straight-line distance from the start?", type: "number", unit: "m", answer: 5 },
            { q: "A girl walks 3 m West, then 4 m South. What is her straight-line distance from the start?", type: "number", unit: "m", answer: 5 },
            { q: "A man walks 8 m North, then 6 m East. What is his straight-line distance from the start?", type: "number", unit: "m", answer: 10 },
            { q: "A woman walks 9 m East, then 12 m North. What is her straight-line distance from the start?", type: "number", unit: "m", answer: 15, explain: "9-12-15 is 3-4-5 times 3." },
            { q: "Ravi walks 10 m South, then 4 m North. Where is he from the start?", type: "mcq", options: ["6 m South", "6 m North", "14 m South", "4 m North"], answer: "6 m South", shuffle: false, explain: "10 − 4 = 6, still on the South side." },
            { q: "A boy walks 5 m East, 5 m North, then 5 m West. Where is he from the start?", type: "mcq", options: ["5 m North", "5 m East", "5 m South", "Back at the start"], answer: "5 m North", shuffle: false },
            { q: "A girl walks 2 m North, 2 m East, 2 m South, then 2 m West. Where is she?", type: "mcq", options: ["Back at the start", "2 m North", "2 m East", "4 m East"], answer: "Back at the start", shuffle: false, explain: "She walked round a square." },
            { q: "The sun rises in the East. If you face the rising sun, which way does your left hand point?", type: "mcq", options: ["North", "South", "East", "West"], answer: "North", shuffle: false, time: 40 },
            { q: "The sun sets in the West. If you face the sunset, which way does your right hand point?", type: "mcq", options: ["North", "South", "East", "West"], answer: "North", shuffle: false, time: 40 },
            { q: "A is 3 m East of B. B is 4 m North of C. What is the straight-line distance from A to C?", type: "number", unit: "m", answer: 5, explain: "3-4-5 triangle." },
            { q: "The school is North of home. The park is East of the school. In which direction is the park from home?", type: "mcq", options: ["North-east", "North-west", "South-east", "South-west"], answer: "North-east", shuffle: false, time: 45 },
            { q: "You face North, turn right, then turn right again. Which way do you face?", type: "mcq", options: ["North", "South", "East", "West"], answer: "South", shuffle: false, explain: "North → East → South", time: 35 }
          ]
        },
        {
          id: "dot-situation",
          title: "Dot Situation",
          explanation: "A dot sits somewhere among overlapping shapes. Work out which shapes it is inside, or which part it must be in.\n\nThis is the same idea as Venn diagrams: \"inside both\" is the overlap.",
          workedExample: {
            problem: "A circle and a triangle overlap. A dot is inside both the circle and the triangle. Which part is it in?",
            steps: [
              "\"Inside both\" means where the two shapes overlap.",
              "Not in either shape alone."
            ],
            answer: "The overlapping (middle) part"
          },
          tips: [
            "\"Inside both\" is the overlap. \"Only in A\" is the part of A outside the overlap.",
            "Sketch the shapes and shade the part being asked about.",
            "Say the condition out loud: \"in the circle but NOT in the triangle\"."
          ],
          targetTime: "50–70 seconds",
          timeLimit: 55,
          questions: [
            { q: "A square and a circle overlap. A dot is in the square but NOT in the circle. Which part is it in?", type: "mcq", options: ["Only in the square", "Only in the circle", "In both", "Outside both"], answer: "Only in the square", shuffle: false },
            { q: "A circle, a triangle and a square all overlap in the middle. A dot is in all three. Which part is it in?", type: "mcq", options: ["The middle part shared by all three", "Only in the circle", "Outside all three"], answer: "The middle part shared by all three", shuffle: false },
            { q: "Two circles overlap slightly. A dot is in the overlapping part. Is it inside both circles or just one?", type: "mcq", options: ["Both circles", "Just one circle"], answer: "Both circles", shuffle: false },
            { q: "A triangle is completely inside a bigger circle. A dot is inside the triangle. Is it also inside the circle?", type: "mcq", options: ["Yes", "No"], answer: "Yes", shuffle: false },
            { q: "A circle, a square and a triangle overlap. A dot is inside the circle and the square but NOT the triangle. Where is it?", type: "mcq", options: ["Where the circle and square overlap, outside the triangle", "Only in the circle", "In all three shapes"], answer: "Where the circle and square overlap, outside the triangle", shuffle: false },
            { q: "A circle and a triangle overlap. A dot is inside the circle but not inside the triangle. Which part is it in?", type: "mcq", options: ["Only in the circle", "Only in the triangle", "In both", "Outside both"], answer: "Only in the circle", shuffle: false },
            { q: "A dot is outside both a circle and a triangle. Which part is it in?", type: "mcq", options: ["Only in the circle", "Only in the triangle", "In both", "Outside both"], answer: "Outside both", shuffle: false, time: 35 },
            { q: "Two circles overlap. A dot is in the part of the left circle that does not overlap. Is it inside the right circle?", type: "mcq", options: ["Yes", "No"], answer: "No", shuffle: false },
            { q: "Two circles overlap. A dot is in the overlap. Is it inside the left circle?", type: "mcq", options: ["Yes", "No"], answer: "Yes", shuffle: false, time: 40 },
            { q: "Two circles overlap. How many parts are there, counting the area outside both circles?", type: "number", answer: 4, explain: "Only left, only right, both, and outside." },
            { q: "Two circles overlap. How many parts are there inside the circles?", type: "number", answer: 3 },
            { q: "Three circles overlap so that all three share a middle part. How many parts are there inside the circles?", type: "number", answer: 7, explain: "3 single parts + 3 shared by two + 1 shared by all three = 7.", time: 70 },
            { q: "A square sits inside a bigger circle. A dot is inside the circle but outside the square. Where is it?", type: "mcq", options: ["In the circle only, around the square", "Inside the square", "Outside the circle"], answer: "In the circle only, around the square", shuffle: false },
            { q: "A square is completely inside a circle. Can a dot be inside the square but outside the circle?", type: "mcq", options: ["Yes", "No"], answer: "No", shuffle: false, explain: "Everything inside the square is also inside the circle." },
            { q: "A triangle is inside a circle. A dot is inside the triangle. How many shapes contain the dot?", type: "number", answer: 2 },
            { q: "A small square is inside a bigger square, which is inside a circle. A dot is inside the small square. How many shapes contain the dot?", type: "number", answer: 3 },
            { q: "A small square is inside a bigger square. A dot is inside the bigger square but outside the small one. How many squares contain the dot?", type: "number", answer: 1 },
            { q: "Shapes A and B overlap. There are 5 dots in A only, 3 in both and 2 in B only. How many dots are inside A?", type: "number", answer: 8, explain: "5 + 3 = 8" },
            { q: "Shapes A and B overlap. There are 5 dots in A only, 3 in both and 2 in B only. How many dots are inside B?", type: "number", answer: 5, explain: "2 + 3 = 5" },
            { q: "Shapes A and B overlap. There are 5 dots in A only, 3 in both and 2 in B only. How many dots are inside at least one shape?", type: "number", answer: 10, explain: "5 + 3 + 2 = 10" },
            { q: "Shapes A and B overlap. There are 5 dots in A only, 3 in both and 2 in B only. How many dots are inside both shapes?", type: "number", answer: 3, time: 40 },
            { q: "Shapes A and B overlap. There are 5 dots in A only, 3 in both and 2 in B only. How many dots are inside exactly one shape?", type: "number", answer: 7, explain: "5 + 2 = 7" },
            { q: "A dot is in the overlap of a circle and a triangle. Is it inside the triangle?", type: "mcq", options: ["Yes", "No"], answer: "Yes", shuffle: false, time: 40 },
            { q: "A dot is in the circle-only part. Is it inside the triangle?", type: "mcq", options: ["Yes", "No"], answer: "No", shuffle: false, time: 40 },
            { q: "A dot is outside the circle but inside the triangle. Which part is it in?", type: "mcq", options: ["Only in the circle", "Only in the triangle", "In both", "Outside both"], answer: "Only in the triangle", shuffle: false }
          ]
        },
        {
          id: "venn-diagrams",
          title: "Venn Diagrams",
          explanation: "Two overlapping circles show two groups. The middle part is for things in both groups.\n\n\"Only A\" = all of A − both. The total in at least one group = A + B − both, because adding A and B counts the middle twice.",
          workedExample: {
            problem: "15 kids like mango, 10 like apple and 4 like both. How many like only mango?",
            steps: [
              "The 15 who like mango already include the 4 who like both.",
              "Only mango = 15 − 4."
            ],
            answer: "11"
          },
          tips: [
            "Draw two overlapping circles and fill in the middle (both) first.",
            "Only A = total A − both. Only B = total B − both.",
            "At least one = only A + only B + both. Neither = everyone − at least one."
          ],
          targetTime: "60–90 seconds",
          timeLimit: 70,
          questions: [
            { q: "20 kids like football, 15 like cricket and 6 like both. How many like only football?", type: "number", answer: 14, explain: "20 − 6 = 14" },
            { q: "20 kids like football, 15 like cricket and 6 like both. How many like only cricket?", type: "number", answer: 9, explain: "15 − 6 = 9" },
            { q: "20 kids like football, 15 like cricket and 6 like both. How many like at least one of them?", type: "number", answer: 29, explain: "20 + 15 − 6 = 29" },
            { q: "In a class of 30, everyone likes reading or drawing or both. 18 like reading. How many like only drawing?", type: "number", answer: 12, explain: "30 − 18 = 12" },
            { q: "25 kids like tea, 20 like coffee and 40 like at least one. How many like both?", type: "number", answer: 5, explain: "25 + 20 − 40 = 5" },
            { q: "12 kids like tea, 8 like coffee and 3 like both. How many like only tea?", type: "number", answer: 9, time: 45 },
            { q: "12 kids like tea, 8 like coffee and 3 like both. How many like only coffee?", type: "number", answer: 5, time: 45 },
            { q: "12 kids like tea, 8 like coffee and 3 like both. How many like at least one?", type: "number", answer: 17, explain: "12 + 8 − 3 = 17" },
            { q: "25 kids like cricket, 18 like football and 10 like both. How many like only cricket?", type: "number", answer: 15, time: 45 },
            { q: "25 kids like cricket, 18 like football and 10 like both. How many like only football?", type: "number", answer: 8, time: 45 },
            { q: "25 kids like cricket, 18 like football and 10 like both. How many like at least one?", type: "number", answer: 33, explain: "25 + 18 − 10 = 33" },
            { q: "In a class of 40, 22 like maths, 18 like art and 5 like both. How many like at least one?", type: "number", answer: 35, explain: "22 + 18 − 5 = 35" },
            { q: "In a class of 40, 22 like maths, 18 like art and 5 like both. How many like neither?", type: "number", answer: 5, explain: "35 like at least one, and 40 − 35 = 5." },
            { q: "Of 30 kids, 17 have a dog, 14 have a cat and 6 have both. How many have only a dog?", type: "number", answer: 11, time: 45 },
            { q: "Of 30 kids, 17 have a dog, 14 have a cat and 6 have both. How many have only a cat?", type: "number", answer: 8, time: 45 },
            { q: "Of 30 kids, 17 have a dog, 14 have a cat and 6 have both. How many have at least one pet?", type: "number", answer: 25, explain: "17 + 14 − 6 = 25" },
            { q: "Of 30 kids, 17 have a dog, 14 have a cat and 6 have both. How many have no pet?", type: "number", answer: 5, explain: "30 − 25 = 5" },
            { q: "In a class of 20, 12 like pizza and 9 like pasta. Everyone likes at least one. How many like both?", type: "number", answer: 1, explain: "12 + 9 − 20 = 1" },
            { q: "15 kids like red and 10 like blue. Nobody likes both. How many like at least one colour?", type: "number", answer: 25, time: 40 },
            { q: "In a Venn diagram, only A = 7, both = 4 and only B = 6. How many are in A in total?", type: "number", answer: 11, explain: "7 + 4 = 11", time: 45 },
            { q: "In a Venn diagram, only A = 7, both = 4 and only B = 6. How many are in B in total?", type: "number", answer: 10, explain: "6 + 4 = 10", time: 45 },
            { q: "In a Venn diagram, only A = 7, both = 4 and only B = 6. How many are in A or B altogether?", type: "number", answer: 17, explain: "7 + 4 + 6 = 17", time: 45 },
            { q: "Of 50 people, 30 speak English and 25 speak Hindi. Everyone speaks at least one. How many speak both?", type: "number", answer: 5, explain: "30 + 25 − 50 = 5" },
            { q: "10 kids like only apple, 6 like only mango and 4 like both. How many like apple in all?", type: "number", answer: 14, explain: "10 + 4 = 14", time: 45 },
            { q: "Of 100 children, 60 play football, 50 play cricket and 20 play both. How many play neither?", type: "number", answer: 10, explain: "60 + 50 − 20 = 90 play at least one, and 100 − 90 = 10." }
          ]
        },
        {
          id: "counting",
          title: "Counting & Combinations",
          explanation: "Count handshakes, outfits and arrangements without listing them all.\n\nFor handshakes with n people, add (n − 1) + (n − 2) + ... + 1. For choosing one of each thing, multiply the number of choices.",
          workedExample: {
            problem: "4 friends each shake hands with every other friend once. How many handshakes are there?",
            steps: [
              "Friend 1 shakes 3 hands, friend 2 shakes 2 new hands, friend 3 shakes 1 new hand.",
              "3 + 2 + 1 = 6."
            ],
            answer: "6 handshakes"
          },
          tips: [
            "Handshakes or matches: count down, (n − 1) + (n − 2) + ... + 1.",
            "One of each (shirt and trousers): multiply the choices.",
            "Lining up in order: 3 people = 3 × 2 × 1, 4 people = 4 × 3 × 2 × 1."
          ],
          targetTime: "60–90 seconds",
          timeLimit: 70,
          questions: [
            { q: "5 friends each shake hands with every other friend once. How many handshakes?", type: "number", answer: 10, explain: "4 + 3 + 2 + 1 = 10" },
            { q: "How many 2-digit numbers can be made using the digits 1, 2, 3 if no digit repeats?", type: "number", answer: 6, explain: "12, 13, 21, 23, 31, 32" },
            { q: "Amy, Ben and Cara line up for a photo. How many different orders are possible?", type: "number", answer: 6, explain: "3 × 2 × 1 = 6" },
            { q: "Using the digits 4 and 7, how many 2-digit numbers can you make if digits can repeat?", type: "number", answer: 4, explain: "44, 47, 74, 77" },
            { q: "6 teams each play every other team once. How many matches are played?", type: "number", answer: 15, explain: "5 + 4 + 3 + 2 + 1 = 15" },
            { q: "3 friends each shake hands with every other friend once. How many handshakes?", type: "number", answer: 3, time: 45 },
            { q: "6 friends each shake hands with every other friend once. How many handshakes?", type: "number", answer: 15, explain: "5 + 4 + 3 + 2 + 1 = 15" },
            { q: "7 friends each shake hands with every other friend once. How many handshakes?", type: "number", answer: 21, explain: "6 + 5 + 4 + 3 + 2 + 1 = 21" },
            { q: "Using the digits 2 and 5 once each, how many 2-digit numbers can you make?", type: "number", answer: 2, explain: "25 and 52", time: 40 },
            { q: "Using the digits 1, 2, 3, how many 2-digit numbers can you make if digits can repeat?", type: "number", answer: 9, explain: "3 choices for tens × 3 for ones = 9." },
            { q: "Using the digits 1, 2, 3, 4, how many 2-digit numbers can you make if no digit repeats?", type: "number", answer: 12, explain: "4 × 3 = 12" },
            { q: "Tara has 3 shirts and 2 pairs of trousers. How many different outfits can she make?", type: "number", answer: 6, explain: "3 × 2 = 6", time: 45 },
            { q: "Tara has 4 shirts and 3 pairs of trousers. How many different outfits can she make?", type: "number", answer: 12, explain: "4 × 3 = 12", time: 45 },
            { q: "A meal has 2 starters, 3 mains and 2 desserts to choose from. How many different meals (one of each) are possible?", type: "number", answer: 12, explain: "2 × 3 × 2 = 12" },
            { q: "4 kids line up in a row. How many different orders are possible?", type: "number", answer: 24, explain: "4 × 3 × 2 × 1 = 24" },
            { q: "In how many ways can the letters A and B be arranged in a row?", type: "number", answer: 2, explain: "AB and BA", time: 35 },
            { q: "In how many ways can the letters A, B and C be arranged in a row?", type: "number", answer: 6, explain: "3 × 2 × 1 = 6", time: 45 },
            { q: "5 teams each play every other team once. How many matches?", type: "number", answer: 10, explain: "4 + 3 + 2 + 1 = 10" },
            { q: "4 teams each play every other team once. How many matches?", type: "number", answer: 6, explain: "3 + 2 + 1 = 6" },
            { q: "A coin is tossed twice. How many different outcomes are possible?", type: "number", answer: 4, explain: "HH, HT, TH, TT", time: 45 },
            { q: "A coin is tossed three times. How many different outcomes are possible?", type: "number", answer: 8, explain: "2 × 2 × 2 = 8" },
            { q: "A die is rolled and a coin is tossed. How many different outcomes are possible?", type: "number", answer: 12, explain: "6 × 2 = 12" },
            { q: "How many 3-digit numbers can be made using the digits 1, 2, 3 once each?", type: "number", answer: 6, explain: "3 × 2 × 1 = 6" },
            { q: "How many different pairs of ice-cream flavours can be chosen from 4 flavours? Order doesn't matter.", type: "number", answer: 6, explain: "Like handshakes: 3 + 2 + 1 = 6." },
            { q: "A teacher picks 1 boy from 5 boys and 1 girl from 4 girls. How many different boy-girl pairs are possible?", type: "number", answer: 20, explain: "5 × 4 = 20" }
          ]
        }
      ]
    }
  ]
};
