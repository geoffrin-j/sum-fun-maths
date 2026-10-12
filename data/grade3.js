// Class 3 content. See CLAUDE.md for the full schema.
// Time limits: "timeLimit" on a lesson is the default seconds per question;
// "time" on a question overrides it for harder or easier questions.
window.SUM_FUN_DATA = window.SUM_FUN_DATA || {};
window.SUM_FUN_DATA.grade3 = {
  grade: 3,
  title: "Class 3",
  topics: [
    {
      id: "numbers",
      title: "Chapter 1: Numbers",
      subtopics: [
        {
          id: "place-face-value",
          title: "Place Value & Face Value",
          explanation: "Every digit in a number has two values. Its face value is simply the digit itself.\n\nIts place value depends on where it sits: ones, tens, hundreds, thousands or ten-thousands. Each step to the left makes a digit worth 10 times more.",
          workedExample: {
            problem: "Find the place value and face value of 7 in 57,382.",
            steps: [
              "Find where the 7 sits: 5 (ten-thousands), 7 (thousands), 3 (hundreds), 8 (tens), 2 (ones).",
              "The 7 is in the thousands place, so its place value is 7 × 1,000 = 7,000.",
              "Face value is just the digit: 7."
            ],
            answer: "Place value 7,000 and face value 7"
          },
          tips: [
            "Face value never changes. Place value changes with position.",
            "A 0 always has place value 0."
          ],
          targetTime: "10–15 seconds",
          timeLimit: 15,
          questions: [
            { q: "Face value of 5 in 8,534.", type: "number", answer: 5 },
            { q: "Place value of 5 in 8,534.", type: "number", answer: 500 },
            { q: "Place value of 3 in 8,534.", type: "number", answer: 30 },
            { q: "Place value of 8 in 8,534.", type: "number", answer: 8000 },
            { q: "Place value of 4 in 24,917.", type: "number", answer: 4000 },
            { q: "Face value of 9 in 24,917.", type: "number", answer: 9 },
            { q: "Place value of 2 in 24,917.", type: "number", answer: 20000 },
            { q: "Place value of 1 in 24,917.", type: "number", answer: 10 },
            { q: "Place value of 7 in 24,917.", type: "number", answer: 7 },
            { q: "Which digit is in the hundreds place of 63,258?", type: "number", answer: 2 },
            { q: "Which digit is in the ten-thousands place of 63,258?", type: "number", answer: 6 },
            { q: "Which digit is in the thousands place of 63,258?", type: "number", answer: 3 },
            { q: "What is the place value of 0 in 40,706?", type: "number", answer: 0 },
            { q: "Write 36,204 in expanded form.", type: "text", answer: "30,000 + 6,000 + 200 + 4", placeholder: "e.g. 10,000 + 2,000 + 300 + 40 + 5", time: 45 },
            { q: "Write 70,000 + 5,000 + 300 + 20 + 8 as a number.", type: "number", answer: 75328, time: 20 },
            { q: "Write 9,000 + 40 + 6 as a number.", type: "number", answer: 9046, time: 20 },
            { q: "Difference between the place value and face value of 6 in 6,521.", type: "number", answer: 5994, explain: "6,000 − 6 = 5,994", time: 25 },
            { q: "In 3,636, find the sum of the place values of the two 6s.", type: "number", answer: 606, explain: "600 + 6 = 606", time: 25 },
            { q: "Which digit of 85,473 has place value 5,000?", type: "number", answer: 5 },
            { q: "A number has 7 in ten-thousands, 0 in thousands, 3 in hundreds, 5 in tens and 1 in ones. Write it.", type: "number", answer: 70351, time: 25 },
            { q: "Place value of 9 in 59,206.", type: "number", answer: 9000 },
            { q: "Face value of 2 in 59,206.", type: "number", answer: 2 },
            { q: "Which digit is in the tens place of 78,415?", type: "number", answer: 1 },
            { q: "Write 60,000 + 800 + 5 as a number.", type: "number", answer: 60805, time: 20 },
            { q: "Find the sum of the face values of all the digits in 3,421.", type: "number", answer: 10, explain: "3 + 4 + 2 + 1 = 10", time: 20 }
          ]
        },
        {
          id: "abacus-reading-writing",
          title: "Abacus & Reading/Writing Numbers",
          explanation: "An abacus shows a number with beads on rods: ten-thousands (TTh), thousands (Th), hundreds (H), tens (T) and ones (O). The number of beads on a rod is the digit for that place.\n\nWe read big numbers in two parts: the part before the comma plus the word \"thousand\", then the rest.",
          workedExample: {
            problem: "An abacus has TTh 4, Th 0, H 7, T 2, O 6. Read the number.",
            steps: [
              "Write the digits in order: 4, 0, 7, 2, 6, so the number is 40,726.",
              "Say the part before the comma plus \"thousand\", then the rest: Forty thousand seven hundred twenty-six."
            ],
            answer: "40,726 (Forty thousand seven hundred twenty-six)"
          },
          tips: [
            "An empty rod means 0.",
            "Never skip a 0 when writing the number."
          ],
          targetTime: "15–20 seconds",
          timeLimit: 20,
          questions: [
            { q: "What number does this abacus show?", type: "number", abacus: [2, 5, 3, 1, 4], answer: 25314, time: 15 },
            { q: "What number does this abacus show?", type: "number", abacus: [3, 0, 6, 2, 9], answer: 30629, time: 15 },
            { q: "What number does this abacus show?", type: "number", abacus: [1, 4, 0, 0, 7], answer: 14007, time: 15 },
            { q: "What number does this abacus show?", type: "number", abacus: [5, 5, 5, 5, 5], answer: 55555, time: 15 },
            { q: "What number does this abacus show?", type: "number", abacus: [9, 0, 0, 0, 0], answer: 90000, time: 15 },
            { q: "What number does this abacus show?", type: "number", abacus: [7, 8, 2, 0, 1], answer: 78201, time: 15 },
            { q: "What number does this abacus show?", type: "number", abacus: [0, 6, 0, 4, 8], answer: 6048, time: 15 },
            { q: "What number does this abacus show?", type: "number", abacus: [8, 6, 3, 9, 0], answer: 86390, time: 15 },
            { q: "Write in figures: forty-two thousand five hundred sixteen.", type: "number", answer: 42516 },
            { q: "Write in figures: eighteen thousand nine.", type: "number", answer: 18009 },
            { q: "Write in figures: seventy thousand three hundred.", type: "number", answer: 70300 },
            { q: "Write in figures: ninety-nine thousand nine hundred ninety-nine.", type: "number", answer: 99999 },
            { q: "Write in figures: twelve thousand twelve.", type: "number", answer: 12012 },
            { q: "Write 36,204 in words.", type: "text", answer: "Thirty-six thousand two hundred four", time: 45 },
            { q: "Write 50,070 in words.", type: "text", answer: "Fifty thousand seventy", time: 45 },
            { q: "Write 8,605 in words.", type: "text", answer: "Eight thousand six hundred five", time: 45 },
            { q: "Write 19,990 in words.", type: "text", answer: "Nineteen thousand nine hundred ninety", time: 45 },
            { q: "How many beads are on the Hundreds rod for 47,329?", type: "number", answer: 3, time: 15 },
            { q: "How many beads are on the Ten-thousands rod for 47,329?", type: "number", answer: 4, time: 15 },
            { q: "Which rods are empty for 30,709?", type: "multi", options: ["Ten-thousands", "Thousands", "Hundreds", "Tens", "Ones"], answer: ["Thousands", "Tens"] },
            { q: "Write in figures: sixty thousand six.", type: "number", answer: 60006 },
            { q: "Write 40,500 in words.", type: "text", answer: "Forty thousand five hundred", time: 45 },
            { q: "What number does this abacus show?", type: "number", abacus: [6, 2, 0, 0, 5], answer: 62005, time: 15 },
            { q: "How many beads are on the Ones rod for 58,903?", type: "number", answer: 3, time: 15 },
            { q: "Write 90,090 in words.", type: "text", answer: "Ninety thousand ninety", time: 45 }
          ]
        },
        {
          id: "compare-arrange-build",
          title: "Comparing, Arranging & Building Numbers",
          explanation: "To compare numbers, first count the digits: more digits means a bigger number. If they have the same number of digits, compare from the left, one place at a time, until two digits are different.\n\nWe can also build the greatest or smallest number from a set of digits by choosing which digit goes in each place.",
          workedExample: {
            problem: "Compare 45,320 and 45,230.",
            steps: [
              "Both have 5 digits, so compare from the left.",
              "4 = 4, 5 = 5, then 3 is bigger than 2.",
              "So 45,320 > 45,230."
            ],
            answer: "45,320 > 45,230"
          },
          tips: [
            "More digits means a bigger number.",
            "For the greatest number, put the biggest digits first.",
            "For the smallest, put the smallest non-zero digit first, then 0, then the rest in order."
          ],
          targetTime: "15–25 seconds",
          timeLimit: 20,
          questions: [
            { q: "8,432 ☐ 8,423", type: "compare", answer: ">", time: 15 },
            { q: "56,781 ☐ 56,871", type: "compare", answer: "<", time: 15 },
            { q: "9,999 ☐ 10,000", type: "compare", answer: "<", time: 15 },
            { q: "23,450 ☐ 23,450", type: "compare", answer: "=", time: 15 },
            { q: "7,305 ☐ 7,350", type: "compare", answer: "<", time: 15 },
            { q: "Which is the greatest?", type: "mcq", options: ["6,543", "6,534", "6,453", "6,435"], answer: "6,543" },
            { q: "Which is the smallest?", type: "mcq", options: ["12,509", "12,059", "12,950", "12,095"], answer: "12,059" },
            { q: "Arrange in ascending order (smallest first).", type: "order", answer: ["7,025", "7,052", "7,205", "7,250"], time: 30 },
            { q: "Arrange in descending order (biggest first).", type: "order", answer: ["12,453", "12,435", "12,354", "12,345"], time: 30 },
            { q: "Arrange in ascending order (smallest first).", type: "order", answer: ["498", "4,908", "9,408", "49,080"], time: 30 },
            { q: "Greatest 4-digit number using 3, 0, 8, 5 once each.", type: "number", answer: 8530, time: 25 },
            { q: "Smallest 4-digit number using 3, 0, 8, 5 once each.", type: "number", answer: 3058, time: 25 },
            { q: "Greatest 5-digit number using 2, 7, 0, 4, 9 once each.", type: "number", answer: 97420, time: 25 },
            { q: "Smallest 5-digit number using 2, 7, 0, 4, 9 once each.", type: "number", answer: 20479, time: 25 },
            { q: "Greatest 4-digit number with all different digits.", type: "number", answer: 9876, time: 25 },
            { q: "Smallest 4-digit number with all different digits.", type: "number", answer: 1023, time: 25 },
            { q: "Number just before 20,000.", type: "number", answer: 19999, time: 15 },
            { q: "Number just after 34,699.", type: "number", answer: 34700, time: 15 },
            { q: "Smallest 5-digit number minus greatest 4-digit number.", type: "number", answer: 1, explain: "10,000 − 9,999 = 1", time: 25 },
            { q: "Using 5, 0, 7 once each, how many 3-digit numbers can be made?", type: "number", answer: 4, explain: "507, 570, 705 and 750. 0 can't go first.", time: 40 },
            { q: "7,654 ☐ 7,645", type: "compare", answer: ">", time: 15 },
            { q: "Arrange in ascending order (smallest first).", type: "order", answer: ["3,009", "3,099", "3,909", "3,990"], time: 30 },
            { q: "Greatest 3-digit number using 4, 0, 9 once each.", type: "number", answer: 940 },
            { q: "Smallest 3-digit number using 4, 0, 9 once each.", type: "number", answer: 409, explain: "0 can't go first, so start with 4: 409." },
            { q: "Which number lies between 4,560 and 4,570?", type: "mcq", options: ["4,556", "4,565", "4,575"], answer: "4,565" }
          ]
        }
      ]
    },
    {
      id: "addition",
      title: "Chapter 2: Addition",
      subtopics: [
        {
          id: "add-3digit-carry",
          title: "Adding 3-Digit Numbers (Carrying)",
          explanation: "We add column by column, starting from the ones.\n\nWhen a column adds up to 10 or more, we write the ones digit and carry the tens digit to the next column on the left.",
          workedExample: {
            problem: "458 + 367",
            steps: [
              "Ones: 8 + 7 = 15. Write 5, carry 1.",
              "Tens: 5 + 6 + 1 = 12. Write 2, carry 1.",
              "Hundreds: 4 + 3 + 1 = 8."
            ],
            answer: "825"
          },
          tips: [
            "Always add the carried digit before moving on.",
            "In \"make 1,000\" pairs like 376 + 624, the tens and ones make 100 and the hundreds make 9."
          ],
          targetTime: "30–40 seconds",
          timeLimit: 40,
          questions: [
            { q: "234 + 125 = ?", type: "number", answer: 359, time: 30 },
            { q: "345 + 278 = ?", type: "number", answer: 623 },
            { q: "506 + 387 = ?", type: "number", answer: 893 },
            { q: "479 + 256 = ?", type: "number", answer: 735 },
            { q: "628 + 195 = ?", type: "number", answer: 823 },
            { q: "749 + 183 = ?", type: "number", answer: 932 },
            { q: "267 + 358 = ?", type: "number", answer: 625 },
            { q: "190 + 305 + 408 = ?", type: "number", answer: 903, time: 55 },
            { q: "267 + 358 + 114 = ?", type: "number", answer: 739, time: 55 },
            { q: "999 + 111 = ?", type: "number", answer: 1110, time: 25 },
            { q: "450 + 550 = ?", type: "number", answer: 1000, time: 25 },
            { q: "376 + 624 = ?", type: "number", answer: 1000, time: 25 },
            { q: "285 + 398 = ?", type: "number", answer: 683 },
            { q: "504 + 496 = ?", type: "number", answer: 1000, time: 25 },
            { q: "Find the missing digit: 4☐6 + 237 = 683", type: "number", answer: 4, time: 45 },
            { q: "Find the missing digit: 3☐5 + 148 = 523", type: "number", answer: 7, time: 45 },
            { q: "A shop sold 348 pens on Monday and 275 on Tuesday. How many in all?", type: "number", answer: 623, time: 45 },
            { q: "A library has 456 storybooks and 379 science books. How many books?", type: "number", answer: 835, time: 45 },
            { q: "A train carried 487, 396 and 205 passengers on three trips. Total?", type: "number", answer: 1088, time: 60 },
            { q: "A school has 524 boys and 487 girls. How many students?", type: "number", answer: 1011, time: 45 },
            { q: "468 + 359 = ?", type: "number", answer: 827 },
            { q: "275 + 275 = ?", type: "number", answer: 550, time: 30 },
            { q: "199 + 299 = ?", type: "number", answer: 498, time: 30 },
            { q: "537 + 285 = ?", type: "number", answer: 822 },
            { q: "A shop earned ₹486 on Monday and ₹395 on Tuesday. What was the total?", type: "money", answer: 881, time: 45 }
          ]
        },
        {
          id: "estimating-sums",
          title: "Estimating Sums",
          explanation: "Estimating means finding an answer that is close enough, quickly. We round each number to the nearest ten or hundred first, then add the rounded numbers.\n\nEstimates are also handy for checking whether an exact answer makes sense.",
          workedExample: {
            problem: "Estimate 298 + 403 to the nearest hundred.",
            steps: [
              "298 is close to 300, and 403 is close to 400.",
              "300 + 400 = 700.",
              "The exact answer, 701, confirms it."
            ],
            answer: "700"
          },
          tips: [
            "Nearest 10: look at the ones digit. 5 or more goes up.",
            "Nearest 100: look at the tens digit. 5 or more goes up."
          ],
          targetTime: "15–20 seconds",
          timeLimit: 25,
          questions: [
            { q: "Round 47 to the nearest ten.", type: "number", answer: 50, time: 15 },
            { q: "Round 63 to the nearest ten.", type: "number", answer: 60, time: 15 },
            { q: "Round 385 to the nearest ten.", type: "number", answer: 390, time: 15 },
            { q: "Round 672 to the nearest hundred.", type: "number", answer: 700, time: 15 },
            { q: "Round 349 to the nearest hundred.", type: "number", answer: 300, time: 15 },
            { q: "Round 450 to the nearest hundred.", type: "number", answer: 500, time: 15 },
            { q: "Estimate 298 + 403 (nearest hundred).", type: "number", answer: 700 },
            { q: "Estimate 47 + 62 + 31 (nearest ten).", type: "number", answer: 140, time: 30 },
            { q: "Estimate 582 + 217 (nearest ten).", type: "number", answer: 800 },
            { q: "Estimate 389 + 411 (nearest hundred).", type: "number", answer: 800 },
            { q: "Estimate 198 + 205 (nearest hundred).", type: "number", answer: 400 },
            { q: "Estimate 76 + 24 (nearest ten).", type: "number", answer: 100 },
            { q: "Estimate 642 + 158 (nearest hundred).", type: "number", answer: 800 },
            { q: "Estimate 515 + 289 (nearest hundred).", type: "number", answer: 800 },
            { q: "Estimate 93 + 48 + 19 (nearest ten).", type: "number", answer: 160, time: 30 },
            { q: "Estimate 837 + 162 (nearest ten).", type: "number", answer: 1000 },
            { q: "Best estimate for 389 + 212?", type: "mcq", options: ["500", "600", "700"], answer: "600", time: 20 },
            { q: "Which is closest to 497 + 503?", type: "mcq", options: ["900", "1,000", "1,100"], answer: "1,000", time: 20 },
            { q: "Ravi has 295 stickers and Meena has 308. Estimate the total to the nearest hundred.", type: "number", answer: 600, time: 30 },
            { q: "A shop sold 189 pencils and 412 pens. Estimate the total to the nearest ten.", type: "number", answer: 600, time: 30 },
            { q: "Round 925 to the nearest hundred.", type: "number", answer: 900, time: 15 },
            { q: "Estimate 249 + 351 (nearest hundred).", type: "number", answer: 600, explain: "249 rounds to 200 and 351 rounds to 400. 200 + 400 = 600." },
            { q: "Estimate 38 + 52 (nearest ten).", type: "number", answer: 90 },
            { q: "Estimate 704 + 296 (nearest hundred).", type: "number", answer: 1000 },
            { q: "Which is closest to 395 + 108?", type: "mcq", options: ["400", "500", "600"], answer: "500", time: 20 }
          ]
        },
        {
          id: "adding-money",
          title: "Currency & Adding Money",
          explanation: "Indian money uses rupees (₹) and paise, and 100 paise make ₹1.\n\nTo add money, line up the decimal points. Add the paise first. If the paise add up to 100 or more, carry ₹1 to the rupees.",
          workedExample: {
            problem: "₹12.35 + ₹8.90",
            steps: [
              "Line up the decimal points.",
              "Paise: 35 + 90 = 125 paise = ₹1 and 25 paise. Write 25, carry ₹1.",
              "Rupees: 12 + 8 + 1 = 21."
            ],
            answer: "₹21.25"
          },
          tips: [
            "100 paise = ₹1.",
            "When adding notes and coins, count the large ones first.",
            "Look for pairs that make a round number, like 75p + 25p."
          ],
          targetTime: "25–40 seconds",
          timeLimit: 35,
          questions: [
            { q: "100 paise = ₹?", type: "money", answer: 1, time: 15 },
            { q: "How many paise are in ₹3?", type: "number", unit: "paise", answer: 300, time: 15 },
            { q: "How many paise are in ₹2.50?", type: "number", unit: "paise", answer: 250, time: 15 },
            { q: "Write 250 paise in rupees.", type: "money", answer: 2.50, time: 15 },
            { q: "75 paise + 25 paise = ₹?", type: "money", answer: 1, time: 15 },
            { q: "₹4.50 + ₹2.75 = ?", type: "money", answer: 7.25 },
            { q: "₹6.40 + ₹3.60 = ?", type: "money", answer: 10 },
            { q: "₹12.35 + ₹8.90 = ?", type: "money", answer: 21.25 },
            { q: "₹25 + ₹14.60 + ₹9.40 = ?", type: "money", answer: 49, time: 45 },
            { q: "₹7.85 + ₹2.15 = ?", type: "money", answer: 10 },
            { q: "₹18.50 + ₹6.75 = ?", type: "money", answer: 25.25 },
            { q: "₹32.45 + ₹17.80 = ?", type: "money", answer: 50.25 },
            { q: "₹56.30 + ₹43.70 = ?", type: "money", answer: 100 },
            { q: "₹125.50 + ₹74.50 = ?", type: "money", answer: 200 },
            { q: "Ria bought a bag for ₹185.50 and a bottle for ₹64.75. Total spent?", type: "money", answer: 250.25, time: 45 },
            { q: "A pen costs ₹12.50, a pencil ₹3.25 and an eraser ₹2.75. Total?", type: "money", answer: 18.50, time: 50 },
            { q: "Meena has 2 notes of ₹10, 3 coins of ₹5 and 4 coins of ₹1. How much money?", type: "money", answer: 39, time: 45 },
            { q: "How much is 5 notes of ₹20 and 2 coins of ₹10?", type: "money", answer: 120, time: 30 },
            { q: "Which is more?", type: "mcq", options: ["₹5.50 + ₹3.25", "₹4.75 + ₹4.25", "Both are the same"], answer: "₹4.75 + ₹4.25", explain: "₹8.75 and ₹9.00, so the second is more.", time: 45 },
            { q: "Anu paid ₹150.75 for a book and ₹49.25 for a pen. Total?", type: "money", answer: 200, time: 40 },
            { q: "₹9.50 + ₹0.50 = ?", type: "money", answer: 10, time: 25 },
            { q: "₹3.45 + ₹4.55 = ?", type: "money", answer: 8 },
            { q: "₹60.25 + ₹39.75 = ?", type: "money", answer: 100 },
            { q: "A kite costs ₹24.50 and thread costs ₹15.75. Total?", type: "money", answer: 40.25, time: 40 },
            { q: "Ram has ₹50.50 and Sita has ₹49.50. How much do they have together?", type: "money", answer: 100, time: 40 }
          ]
        }
      ]
    },
    {
      id: "subtraction",
      title: "Chapter 3: Subtraction",
      subtopics: [
        {
          id: "subtract-3digit-borrow",
          title: "3-Digit Subtraction with Borrowing",
          explanation: "We subtract column by column, starting from the ones.\n\nWhen the top digit is smaller than the bottom digit, borrow 1 from the next column on the left. If that column is 0, borrow from the next non-zero digit and pass it down.",
          workedExample: {
            problem: "702 − 365",
            steps: [
              "Ones: 2 is smaller than 5, and the tens digit is 0, so borrow from the hundreds instead.",
              "Hundreds become 6, tens become 10. Lend 1 from the tens to the ones, so tens are 9 and ones are 12.",
              "Ones: 12 − 5 = 7. Tens: 9 − 6 = 3. Hundreds: 6 − 3 = 3.",
              "Check: 337 + 365 = 702 ✓"
            ],
            answer: "337"
          },
          tips: [
            "When a 0 blocks the borrow, borrow from the next non-zero digit and pass it down.",
            "Check by adding the answer to the smaller number. You should get the bigger number back."
          ],
          targetTime: "30–40 seconds",
          timeLimit: 40,
          questions: [
            { q: "745 − 328 = ?", type: "number", answer: 417 },
            { q: "600 − 257 = ?", type: "number", answer: 343 },
            { q: "832 − 459 = ?", type: "number", answer: 373 },
            { q: "504 − 178 = ?", type: "number", answer: 326 },
            { q: "900 − 467 = ?", type: "number", answer: 433 },
            { q: "761 − 395 = ?", type: "number", answer: 366 },
            { q: "308 − 129 = ?", type: "number", answer: 179 },
            { q: "400 − 163 = ?", type: "number", answer: 237 },
            { q: "905 − 748 = ?", type: "number", answer: 157 },
            { q: "674 − 289 = ?", type: "number", answer: 385 },
            { q: "580 − 294 = ?", type: "number", answer: 286 },
            { q: "800 − 399 = ?", type: "number", answer: 401, time: 30 },
            { q: "450 − 189 = ?", type: "number", answer: 261 },
            { q: "703 − 456 = ?", type: "number", answer: 247 },
            { q: "999 − 456 = ?", type: "number", answer: 543, time: 25 },
            { q: "1,000 − 375 = ?", type: "number", answer: 625 },
            { q: "Find the missing number: 523 − ☐ = 268", type: "number", answer: 255, explain: "523 − 268 = 255", time: 45 },
            { q: "Find the missing digit: 7☐2 − 358 = 394", type: "number", answer: 5, explain: "394 + 358 = 752, so the missing digit is 5.", time: 45 },
            { q: "Which addition checks 612 − 247 = 365?", type: "mcq", options: ["365 + 247 = 612", "612 + 247 = 859", "365 + 612 = 977"], answer: "365 + 247 = 612", time: 30 },
            { q: "A shop had 650 notebooks and sold 287. How many are left?", type: "number", answer: 363, time: 45 },
            { q: "640 − 275 = ?", type: "number", answer: 365 },
            { q: "503 − 247 = ?", type: "number", answer: 256 },
            { q: "910 − 468 = ?", type: "number", answer: 442 },
            { q: "1,000 − 489 = ?", type: "number", answer: 511 },
            { q: "A school had 802 books. 365 were issued. How many remain?", type: "number", answer: 437, time: 45 }
          ]
        },
        {
          id: "estimating-differences",
          title: "Estimating Differences",
          explanation: "To estimate a difference, round both numbers first, then subtract the rounded numbers.\n\nAn estimate is a quick way to check an exact answer. If they are far apart, look for a mistake.",
          workedExample: {
            problem: "Estimate 703 − 298 to the nearest hundred.",
            steps: [
              "703 is close to 700, and 298 is close to 300.",
              "700 − 300 = 400.",
              "The exact answer, 405, confirms it."
            ],
            answer: "400"
          },
          tips: [
            "Round each number first, then subtract.",
            "If your exact answer is far from your estimate, look for a mistake."
          ],
          targetTime: "15–20 seconds",
          timeLimit: 25,
          questions: [
            { q: "Round 86 to the nearest ten.", type: "number", answer: 90, time: 15 },
            { q: "Round 41 to the nearest ten.", type: "number", answer: 40, time: 15 },
            { q: "Round 645 to the nearest ten.", type: "number", answer: 650, time: 15 },
            { q: "Round 289 to the nearest ten.", type: "number", answer: 290, time: 15 },
            { q: "Round 703 to the nearest hundred.", type: "number", answer: 700, time: 15 },
            { q: "Round 850 to the nearest hundred.", type: "number", answer: 900, time: 15 },
            { q: "Estimate 604 − 297 (nearest hundred).", type: "number", answer: 300 },
            { q: "Estimate 86 − 41 (nearest ten).", type: "number", answer: 50, explain: "90 − 40 = 50" },
            { q: "Estimate 645 − 289 (nearest ten).", type: "number", answer: 360, explain: "650 − 290 = 360", time: 30 },
            { q: "Estimate 912 − 389 (nearest hundred).", type: "number", answer: 500 },
            { q: "Estimate 500 − 198 (nearest hundred).", type: "number", answer: 300 },
            { q: "Estimate 78 − 32 (nearest ten).", type: "number", answer: 50, explain: "80 − 30 = 50" },
            { q: "Estimate 826 − 415 (nearest hundred).", type: "number", answer: 400 },
            { q: "Estimate 594 − 207 (nearest hundred).", type: "number", answer: 400 },
            { q: "Estimate 731 − 268 (nearest ten).", type: "number", answer: 460, explain: "730 − 270 = 460", time: 30 },
            { q: "Estimate 1,000 − 395 (nearest hundred).", type: "number", answer: 600 },
            { q: "Best estimate for 689 − 211?", type: "mcq", options: ["300", "400", "500"], answer: "500", time: 20 },
            { q: "Which is closest to 805 − 399?", type: "mcq", options: ["300", "400", "500"], answer: "400", time: 20 },
            { q: "A school has 487 children and 198 are in the hall. Estimate how many are not in the hall (nearest hundred).", type: "number", answer: 300, time: 30 },
            { q: "A shop had 912 eggs and sold 596. Estimate how many are left (nearest hundred).", type: "number", answer: 300, time: 30 },
            { q: "Round 357 to the nearest hundred.", type: "number", answer: 400, time: 15 },
            { q: "Estimate 502 − 198 (nearest hundred).", type: "number", answer: 300 },
            { q: "Estimate 94 − 58 (nearest ten).", type: "number", answer: 30, explain: "90 − 60 = 30" },
            { q: "Estimate 1,000 − 598 (nearest hundred).", type: "number", answer: 400 },
            { q: "Best estimate for 797 − 305?", type: "mcq", options: ["300", "400", "500"], answer: "500", time: 20 }
          ]
        },
        {
          id: "subtract-money-word-problems",
          title: "Subtracting Money & Word Problems",
          explanation: "Money is subtracted like numbers, with the decimal points lined up. Write whole rupees as ₹__.00 first.\n\nIn mixed sums with + and −, work from left to right. \"How much is left\" and \"how much more\" both mean subtract.",
          workedExample: {
            problem: "₹50 − ₹23.75",
            steps: [
              "Write ₹50 as ₹50.00.",
              "Paise: 0 is smaller than 75, so borrow ₹1 (100 paise). 100 − 75 = 25 paise.",
              "Rupees: 49 − 23 = 26."
            ],
            answer: "₹26.25"
          },
          tips: [
            "Line up the decimal points and write whole rupees as ₹__.00 before subtracting.",
            "In mixed questions, work from left to right."
          ],
          targetTime: "25–40 seconds",
          timeLimit: 40,
          questions: [
            { q: "₹50 − ₹23.75 = ?", type: "money", answer: 26.25 },
            { q: "₹100 − ₹64.50 = ?", type: "money", answer: 35.50 },
            { q: "₹8.20 − ₹3.65 = ?", type: "money", answer: 4.55 },
            { q: "₹20 − ₹7.25 = ?", type: "money", answer: 12.75 },
            { q: "₹15.40 − ₹9.90 = ?", type: "money", answer: 5.50 },
            { q: "₹75.60 − ₹28.35 = ?", type: "money", answer: 47.25 },
            { q: "₹200 − ₹149.50 = ?", type: "money", answer: 50.50 },
            { q: "₹10 − ₹4.05 = ?", type: "money", answer: 5.95 },
            { q: "358 + 245 − 190 = ?", type: "number", answer: 413, time: 45 },
            { q: "700 − 215 + 128 = ?", type: "number", answer: 613, time: 45 },
            { q: "450 − 175 + 225 = ?", type: "number", answer: 500, time: 45 },
            { q: "600 − 250 − 135 = ?", type: "number", answer: 215, time: 45 },
            { q: "820 − 395 + 175 = ?", type: "number", answer: 600, time: 45 },
            { q: "Anu had ₹500 and spent ₹347.50. How much is left?", type: "money", answer: 152.50, time: 45 },
            { q: "Ravi paid ₹50 for a pen costing ₹18.50. How much change should he get?", type: "money", answer: 31.50, time: 45 },
            { q: "A toy costs ₹135.75 and a doll costs ₹89.25. How much more does the toy cost?", type: "money", answer: 46.50, time: 50 },
            { q: "A bus had 245 passengers. 98 got off and 126 got on. How many are on the bus now?", type: "number", answer: 273, explain: "245 − 98 = 147, then 147 + 126 = 273", time: 55 },
            { q: "A shop had 650 notebooks. It sold 287 on Monday and 156 on Tuesday. How many are left?", type: "number", answer: 207, time: 55 },
            { q: "Meena had ₹250. She bought a book for ₹120.50 and a bag for ₹99.75. How much is left?", type: "money", answer: 29.75, time: 60 },
            { q: "Tom has ₹85.50 and Ria has ₹62.75. How much more does Tom have?", type: "money", answer: 22.75, time: 45 },
            { q: "₹30 − ₹12.40 = ?", type: "money", answer: 17.60 },
            { q: "₹5.00 − ₹2.35 = ?", type: "money", answer: 2.65, time: 30 },
            { q: "900 − 450 + 150 = ?", type: "number", answer: 600, time: 30 },
            { q: "Sam had ₹120.50. He spent ₹45.25 on a game. How much is left?", type: "money", answer: 75.25, time: 45 },
            { q: "A tank had 480 L of water. 150 L was used in the morning and 90 L in the evening. How much is left?", type: "number", unit: "L", answer: 240, time: 50 }
          ]
        }
      ]
    },
    {
      id: "multiplication",
      title: "Chapter 4: Multiplication",
      subtopics: [
        {
          id: "tables-arrays",
          title: "Tables, ×0 and ×1, Arrays & Patterns",
          explanation: "Multiplication is repeated addition: 3 × 4 means 4 + 4 + 4.\n\nAn array shows rows and columns. The number of things is rows × columns. Learn your tables and the rules for 0 and 1.",
          workedExample: {
            problem: "Find 7 × 8.",
            steps: [
              "Start from a fact you know well: 7 × 7 = 49.",
              "Add one more group of 7: 49 + 7 = 56."
            ],
            answer: "56"
          },
          tips: [
            "Any number × 0 = 0, and any number × 1 = the same number.",
            "For × 5, halve the number and multiply by 10: 8 × 5 is 4 × 10 = 40.",
            "Order doesn't matter: 7 × 8 = 8 × 7."
          ],
          targetTime: "5–10 seconds",
          timeLimit: 10,
          questions: [
            { q: "0 × 58 = ?", type: "number", answer: 0 },
            { q: "1 × 436 = ?", type: "number", answer: 436 },
            { q: "7 × 8 = ?", type: "number", answer: 56 },
            { q: "9 × 6 = ?", type: "number", answer: 54 },
            { q: "8 × 5 = ?", type: "number", answer: 40 },
            { q: "8 × 9 = ?", type: "number", answer: 72 },
            { q: "7 × 7 = ?", type: "number", answer: 49 },
            { q: "6 × 8 = ?", type: "number", answer: 48 },
            { q: "10 × 37 = ?", type: "number", answer: 370 },
            { q: "Which is the same as 5 × 4?", type: "mcq", options: ["4 + 4 + 4 + 4 + 4 = 20", "5 + 4 = 9", "5 + 5 + 5 = 15"], answer: "4 + 4 + 4 + 4 + 4 = 20", time: 20 },
            { q: "Which is the same as 3 × 7?", type: "mcq", options: ["7 + 7 + 7 = 21", "3 + 7 = 10", "3 + 3 + 3 = 9"], answer: "7 + 7 + 7 = 21", time: 20 },
            { q: "9 × 1 = 9, 9 × 2 = 18, 9 × 3 = 27, 9 × 4 = ?", type: "number", answer: 36, time: 15 },
            { q: "7 × 9 = ?", type: "number", answer: 63 },
            { q: "8 × 8 = ?", type: "number", answer: 64 },
            { q: "What comes next? 6, 12, 18, 24, __", type: "number", answer: 30, time: 15 },
            { q: "What comes next? 7, 14, 21, 28, __", type: "number", answer: 35, time: 15 },
            { q: "5 × 0 × 9 = ?", type: "number", answer: 0 },
            { q: "☐ × 8 = 72. What is ☐?", type: "number", answer: 9, time: 15 },
            { q: "6 × ☐ = 42. What is ☐?", type: "number", answer: 7, time: 15 },
            { q: "7 × 8 is the same as 8 × 7. What is the value?", type: "number", answer: 56 },
            { q: "An array has 4 rows with 6 dots in each row. How many dots?", type: "number", answer: 24, time: 15 },
            { q: "Which is right for an array of 3 rows and 8 columns?", type: "mcq", options: ["3 × 8 = 24", "3 + 8 = 11", "3 × 8 = 38"], answer: "3 × 8 = 24", time: 15 },
            { q: "A hall has 5 rows with 7 chairs in each row. How many chairs?", type: "number", answer: 35, time: 15 },
            { q: "Which gives the same answer as 6 × 4?", type: "mcq", options: ["4 × 6", "6 + 4"], answer: "4 × 6", time: 15 },
            { q: "An egg tray has 2 rows of 6 eggs. Which is right?", type: "mcq", options: ["2 × 6 = 12", "2 + 6 = 8", "2 × 6 = 26"], answer: "2 × 6 = 12", time: 15 }
          ]
        },
        {
          id: "multiply-2-3-digit",
          title: "Multiplying 2-Digit and 3-Digit Numbers",
          explanation: "To multiply a bigger number by one digit, multiply each place by that digit, starting from the ones.\n\nWhen an answer is 10 or more, write the ones digit and carry the rest to the next place. Add the carry after you multiply.",
          workedExample: {
            problem: "427 × 6",
            steps: [
              "Ones: 7 × 6 = 42. Write 2, carry 4.",
              "Tens: 2 × 6 = 12, plus 4 = 16. Write 6, carry 1.",
              "Hundreds: 4 × 6 = 24, plus 1 = 25."
            ],
            answer: "2,562"
          },
          tips: [
            "Multiply ones first, then tens, then hundreds, and always add the carry.",
            "To multiply by 10, add a 0 at the end.",
            "A 0 in the middle (like 306) still counts: 0 × the digit, plus any carry."
          ],
          targetTime: "30–50 seconds",
          timeLimit: 45,
          questions: [
            { q: "12 × 4 = ?", type: "number", answer: 48, time: 20 },
            { q: "23 × 5 = ?", type: "number", answer: 115, time: 30 },
            { q: "35 × 6 = ?", type: "number", answer: 210, time: 30 },
            { q: "47 × 8 = ?", type: "number", answer: 376, time: 30 },
            { q: "64 × 9 = ?", type: "number", answer: 576, time: 30 },
            { q: "58 × 7 = ?", type: "number", answer: 406, time: 30 },
            { q: "86 × 3 = ?", type: "number", answer: 258, time: 30 },
            { q: "99 × 5 = ?", type: "number", answer: 495, time: 30 },
            { q: "125 × 3 = ?", type: "number", answer: 375 },
            { q: "214 × 4 = ?", type: "number", answer: 856 },
            { q: "306 × 5 = ?", type: "number", answer: 1530 },
            { q: "352 × 7 = ?", type: "number", answer: 2464 },
            { q: "248 × 8 = ?", type: "number", answer: 1984 },
            { q: "509 × 4 = ?", type: "number", answer: 2036 },
            { q: "135 × 9 = ?", type: "number", answer: 1215 },
            { q: "346 × 10 = ?", type: "number", answer: 3460, time: 20 },
            { q: "Find the missing digit: 4☐ × 6 = 264", type: "number", answer: 4, explain: "44 × 6 = 264", time: 50 },
            { q: "76 × 4 = ?", type: "number", answer: 304, time: 30 },
            { q: "8 × 123 = ?", type: "number", answer: 984 },
            { q: "305 × 7 = ?", type: "number", answer: 2135 },
            { q: "18 × 3 = ?", type: "number", answer: 54, time: 25 },
            { q: "65 × 4 = ?", type: "number", answer: 260, time: 30 },
            { q: "134 × 5 = ?", type: "number", answer: 670 },
            { q: "217 × 3 = ?", type: "number", answer: 651 },
            { q: "406 × 6 = ?", type: "number", answer: 2436 }
          ]
        },
        {
          id: "estimate-multiply-money",
          title: "Estimating Products, Money & Word Problems",
          explanation: "To estimate a product, round the bigger number first, then multiply.\n\nFor money, multiply the rupees and the paise separately, then add. Words like \"each\", \"every\" and \"in all\" usually mean multiply.",
          workedExample: {
            problem: "Estimate 48 × 7.",
            steps: [
              "Round 48 to the nearest ten: 50.",
              "50 × 7 = 350.",
              "The exact answer, 336, is close."
            ],
            answer: "350"
          },
          tips: [
            "Estimate first so you can catch silly mistakes.",
            "For money, split into rupees and paise, multiply each, then add."
          ],
          targetTime: "25–40 seconds",
          timeLimit: 40,
          questions: [
            { q: "Round 48 to the nearest ten.", type: "number", answer: 50, time: 15 },
            { q: "Round 198 to the nearest hundred.", type: "number", answer: 200, time: 15 },
            { q: "Estimate 48 × 7 (round 48 to the nearest ten).", type: "number", answer: 350, time: 25 },
            { q: "Estimate 198 × 4 (round 198 to the nearest hundred).", type: "number", answer: 800, time: 25 },
            { q: "Estimate 52 × 9 (round 52 to the nearest ten).", type: "number", answer: 450, time: 25 },
            { q: "Estimate 31 × 6 (round 31 to the nearest ten).", type: "number", answer: 180, time: 25 },
            { q: "Estimate 89 × 5 (round 89 to the nearest ten).", type: "number", answer: 450, time: 25 },
            { q: "Estimate 302 × 3 (round 302 to the nearest hundred).", type: "number", answer: 900, time: 25 },
            { q: "Estimate 397 × 2 (round 397 to the nearest hundred).", type: "number", answer: 800, time: 25 },
            { q: "Best estimate for 62 × 8?", type: "mcq", options: ["400", "480", "560"], answer: "480", explain: "62 is about 60, and 60 × 8 = 480.", time: 25 },
            { q: "₹15.50 × 4 = ?", type: "money", answer: 62 },
            { q: "₹12.25 × 3 = ?", type: "money", answer: 36.75 },
            { q: "₹8.75 × 6 = ?", type: "money", answer: 52.50 },
            { q: "₹25.50 × 5 = ?", type: "money", answer: 127.50 },
            { q: "₹2.50 × 8 = ?", type: "money", answer: 20, time: 30 },
            { q: "There are 8 boxes with 24 pencils in each. How many pencils in all?", type: "number", answer: 192 },
            { q: "A bus carries 45 passengers. How many can 6 such buses carry?", type: "number", answer: 270 },
            { q: "A notebook costs ₹18. What do 7 notebooks cost?", type: "money", answer: 126 },
            { q: "Rita reads 35 pages a day. How many pages does she read in 9 days?", type: "number", answer: 315 },
            { q: "A packet has 125 sweets. How many sweets are in 6 packets?", type: "number", answer: 750 },
            { q: "Estimate 19 × 5 (round 19 to the nearest ten).", type: "number", answer: 100, time: 25 },
            { q: "Estimate 103 × 6 (round 103 to the nearest hundred).", type: "number", answer: 600, time: 25 },
            { q: "₹6.50 × 4 = ?", type: "money", answer: 26, time: 30 },
            { q: "A pencil box costs ₹45. What do 5 pencil boxes cost?", type: "money", answer: 225 },
            { q: "Each cinema row has 18 seats. Estimate the seats in 5 rows by rounding 18 to 20.", type: "number", answer: 100, time: 30 }
          ]
        }
      ]
    },
    {
      id: "division",
      title: "Chapter 5: Division",
      subtopics: [
        {
          id: "division-facts",
          title: "Division Facts, Methods & Properties",
          explanation: "Division means sharing equally, or making equal groups. It is the opposite of multiplication: if 8 × 9 = 72, then 72 ÷ 8 = 9.\n\nFor bigger numbers, divide from the left, one step at a time, and bring down the next digit.",
          workedExample: {
            problem: "138 ÷ 6",
            steps: [
              "6 into 13: 6 × 2 = 12, remainder 1. Write 2.",
              "Bring down 8 to make 18. 6 × 3 = 18, remainder 0. Write 3.",
              "Check: 23 × 6 = 138 ✓"
            ],
            answer: "23"
          },
          tips: [
            "For 72 ÷ 8, ask \"8 times what makes 72?\"",
            "Any number ÷ 1 = itself, any number ÷ itself = 1, and 0 ÷ any number = 0.",
            "Always check by multiplying the answer by the number you divided by."
          ],
          targetTime: "15–25 seconds",
          timeLimit: 25,
          questions: [
            { q: "56 ÷ 7 = ?", type: "number", answer: 8, time: 15 },
            { q: "81 ÷ 9 = ?", type: "number", answer: 9, time: 15 },
            { q: "96 ÷ 8 = ?", type: "number", answer: 12 },
            { q: "75 ÷ 5 = ?", type: "number", answer: 15 },
            { q: "174 ÷ 6 = ?", type: "number", answer: 29, time: 40 },
            { q: "245 ÷ 5 = ?", type: "number", answer: 49, time: 40 },
            { q: "372 ÷ 4 = ?", type: "number", answer: 93, time: 40 },
            { q: "648 ÷ 8 = ?", type: "number", answer: 81, time: 40 },
            { q: "0 ÷ 9 = ?", type: "number", answer: 0, time: 15 },
            { q: "47 ÷ 1 = ?", type: "number", answer: 47, time: 15 },
            { q: "63 ÷ 63 = ?", type: "number", answer: 1, time: 15 },
            { q: "72 ÷ 9 = ?", type: "number", answer: 8, time: 15 },
            { q: "45 ÷ 5 = ?", type: "number", answer: 9, time: 15 },
            { q: "100 ÷ 4 = ?", type: "number", answer: 25 },
            { q: "224 ÷ 7 = ?", type: "number", answer: 32, time: 40 },
            { q: "360 ÷ 6 = ?", type: "number", answer: 60 },
            { q: "85 ÷ 5 = ?", type: "number", answer: 17 },
            { q: "☐ ÷ 6 = 7. What is ☐?", type: "number", answer: 42, explain: "6 × 7 = 42" },
            { q: "48 ÷ ☐ = 6. What is ☐?", type: "number", answer: 8, explain: "6 × 8 = 48" },
            { q: "If 8 × 9 = 72, what is 72 ÷ 8?", type: "number", answer: 9, time: 15 },
            { q: "56 ÷ 8 = ?", type: "number", answer: 7, time: 15 },
            { q: "Is 12 ÷ 3 the same as 3 ÷ 12?", type: "mcq", options: ["Yes", "No"], answer: "No", shuffle: false, explain: "Order matters in division. 12 ÷ 3 = 4, but 3 ÷ 12 is less than 1.", time: 15 },
            { q: "If 6 × 7 = 42, what is 42 ÷ 6?", type: "number", answer: 7, time: 15 },
            { q: "Any number (not 0) divided by itself gives what?", type: "number", answer: 1, time: 15 },
            { q: "144 ÷ 12 = ?", type: "number", answer: 12 }
          ]
        },
        {
          id: "remainders",
          title: "Remainders & Checking",
          explanation: "When a number doesn't divide exactly, the amount left over is the remainder. The remainder is always smaller than the number you divide by.\n\nWrite the answer as the quotient, then R, then the remainder. For example, 47 ÷ 5 = 9 R 2.",
          workedExample: {
            problem: "47 ÷ 5",
            steps: [
              "Which 5-table fact is closest without going over 47? 5 × 9 = 45.",
              "Leftover: 47 − 45 = 2.",
              "Check: 5 × 9 + 2 = 47 ✓"
            ],
            answer: "9 R 2 (quotient 9, remainder 2)"
          },
          tips: [
            "Dividend = Divisor × Quotient + Remainder.",
            "Ask \"which table gets me closest without going over?\" That gives the quotient.",
            "Type answers like 9 R 2."
          ],
          targetTime: "20–30 seconds",
          timeLimit: 30,
          questions: [
            { q: "29 ÷ 4 = ? (write it like 9 R 2)", type: "text", answer: "7 R 1", accept: ["Q 7 R 1", "7 remainder 1"], placeholder: "e.g. 9 R 2" },
            { q: "83 ÷ 6 = ? (write it like 9 R 2)", type: "text", answer: "13 R 5", accept: ["Q 13 R 5", "13 remainder 5"], placeholder: "e.g. 9 R 2" },
            { q: "100 ÷ 7 = ? (write it like 9 R 2)", type: "text", answer: "14 R 2", accept: ["Q 14 R 2", "14 remainder 2"], placeholder: "e.g. 9 R 2" },
            { q: "59 ÷ 8 = ? (write it like 9 R 2)", type: "text", answer: "7 R 3", accept: ["Q 7 R 3", "7 remainder 3"], placeholder: "e.g. 9 R 2" },
            { q: "38 ÷ 9 = ? (write it like 9 R 2)", type: "text", answer: "4 R 2", accept: ["Q 4 R 2", "4 remainder 2"], placeholder: "e.g. 9 R 2" },
            { q: "65 ÷ 8 = ? (write it like 9 R 2)", type: "text", answer: "8 R 1", accept: ["Q 8 R 1", "8 remainder 1"], placeholder: "e.g. 9 R 2" },
            { q: "150 ÷ 4 = ? (write it like 9 R 2)", type: "text", answer: "37 R 2", accept: ["Q 37 R 2", "37 remainder 2"], placeholder: "e.g. 9 R 2", time: 40 },
            { q: "200 ÷ 9 = ? (write it like 9 R 2)", type: "text", answer: "22 R 2", accept: ["Q 22 R 2", "22 remainder 2"], placeholder: "e.g. 9 R 2", time: 40 },
            { q: "365 ÷ 7 = ? (write it like 9 R 2)", type: "text", answer: "52 R 1", accept: ["Q 52 R 1", "52 remainder 1"], placeholder: "e.g. 9 R 2", time: 45 },
            { q: "500 ÷ 6 = ? (write it like 9 R 2)", type: "text", answer: "83 R 2", accept: ["Q 83 R 2", "83 remainder 2"], placeholder: "e.g. 9 R 2", time: 45 },
            { q: "Check 59 ÷ 8 = 7 R 3. What is 8 × 7 + 3?", type: "number", answer: 59, explain: "56 + 3 = 59, so the division is right." },
            { q: "What is the largest possible remainder when dividing by 6?", type: "number", answer: 5, time: 20 },
            { q: "What is the smallest possible remainder in any division?", type: "number", answer: 0, time: 20 },
            { q: "Can the remainder be 7 when dividing by 7?", type: "mcq", options: ["Yes", "No"], answer: "No", shuffle: false, explain: "The remainder must be smaller than 7.", time: 20 },
            { q: "A number divided by 4 gives quotient 12 and remainder 3. Find the number.", type: "number", answer: 51, explain: "4 × 12 + 3 = 51", time: 40 },
            { q: "A number divided by 7 gives quotient 8 and remainder 5. Find the number.", type: "number", answer: 61, explain: "7 × 8 + 5 = 61", time: 40 },
            { q: "Which has no remainder?", type: "mcq", options: ["45 ÷ 6", "54 ÷ 6", "50 ÷ 6"], answer: "54 ÷ 6", explain: "6 × 9 = 54" },
            { q: "235 mangoes are packed in boxes of 6. How many full boxes, and how many mangoes are left?", type: "mcq", options: ["39 boxes, 1 left", "38 boxes, 7 left", "39 boxes, 5 left", "40 boxes, 0 left"], answer: "39 boxes, 1 left", explain: "6 × 39 = 234, and 235 − 234 = 1.", time: 50 },
            { q: "50 children are put in teams of 8. How many full teams, and how many children are left?", type: "mcq", options: ["6 teams, 2 left", "7 teams, 0 left", "5 teams, 10 left", "6 teams, 4 left"], answer: "6 teams, 2 left", time: 40 },
            { q: "A ribbon 100 cm long is cut into pieces of 9 cm. How many pieces, and how much ribbon is left?", type: "mcq", options: ["11 pieces, 1 cm left", "10 pieces, 10 cm left", "11 pieces, 2 cm left", "12 pieces, 0 cm left"], answer: "11 pieces, 1 cm left", explain: "9 × 11 = 99, and 100 − 99 = 1.", time: 50 },
            { q: "47 ÷ 6 = ? (write it like 9 R 2)", type: "text", answer: "7 R 5", accept: ["Q 7 R 5", "7 remainder 5"], placeholder: "e.g. 9 R 2" },
            { q: "90 ÷ 8 = ? (write it like 9 R 2)", type: "text", answer: "11 R 2", accept: ["Q 11 R 2", "11 remainder 2"], placeholder: "e.g. 9 R 2" },
            { q: "205 ÷ 4 = ? (write it like 9 R 2)", type: "text", answer: "51 R 1", accept: ["Q 51 R 1", "51 remainder 1"], placeholder: "e.g. 9 R 2", time: 40 },
            { q: "A number divided by 5 gives quotient 9 and remainder 4. Find the number.", type: "number", answer: 49, explain: "5 × 9 + 4 = 49", time: 40 },
            { q: "30 sweets are put in bags of 7. How many full bags, and how many sweets are left?", type: "mcq", options: ["4 bags, 2 left", "3 bags, 9 left", "4 bags, 3 left", "5 bags, 0 left"], answer: "4 bags, 2 left", time: 40 }
          ]
        },
        {
          id: "divide-money-word-problems",
          title: "Dividing Money & Word Problems",
          explanation: "To divide money, change it to paise, divide, then change it back to rupees.\n\nWords like \"shared equally\", \"each\" and \"per\" usually mean divide. When you need to fit everything in (like buses or boxes), a remainder means you need one more.",
          workedExample: {
            problem: "₹45.60 shared equally among 4 people.",
            steps: [
              "Change to paise: ₹45.60 = 4,560 paise.",
              "4,560 ÷ 4 = 1,140 paise.",
              "Change back: 1,140 paise = ₹11.40."
            ],
            answer: "₹11.40 each"
          },
          tips: [
            "For money division, convert to paise, divide, then convert back.",
            "For \"how many are needed\" questions, a remainder usually means you need one more."
          ],
          targetTime: "30–45 seconds",
          timeLimit: 45,
          questions: [
            { q: "₹96 is shared equally among 8 children. How much does each get?", type: "money", answer: 12, time: 30 },
            { q: "₹36.80 ÷ 4 = ?", type: "money", answer: 9.20 },
            { q: "₹75 ÷ 5 = ?", type: "money", answer: 15, time: 30 },
            { q: "₹10.50 ÷ 5 = ?", type: "money", answer: 2.10 },
            { q: "₹84.60 ÷ 6 = ?", type: "money", answer: 14.10 },
            { q: "₹100 ÷ 8 = ?", type: "money", answer: 12.50 },
            { q: "₹63.75 ÷ 3 = ?", type: "money", answer: 21.25 },
            { q: "₹2.40 ÷ 6 = ?", type: "money", answer: 0.40, explain: "240 paise ÷ 6 = 40 paise = ₹0.40" },
            { q: "₹120 ÷ 5 = ?", type: "money", answer: 24, time: 30 },
            { q: "₹18.90 ÷ 9 = ?", type: "money", answer: 2.10 },
            { q: "156 students stand in 4 equal rows. How many in each row?", type: "number", answer: 39 },
            { q: "144 eggs are packed in trays of 12. How many trays?", type: "number", answer: 12, unit: "trays" },
            { q: "90 pencils are shared equally among 6 children. How many each?", type: "number", answer: 15 },
            { q: "A pack of 6 pens costs ₹48. What is the cost of one pen?", type: "money", answer: 8, time: 30 },
            { q: "5 friends share a bill of ₹275 equally. How much does each pay?", type: "money", answer: 55 },
            { q: "A rope 144 m long is cut into 9 equal pieces. How long is each piece?", type: "number", unit: "m", answer: 16 },
            { q: "250 laddoos are packed 6 to a box. How many full boxes, and how many laddoos are left?", type: "mcq", options: ["41 boxes, 4 left", "42 boxes, 0 left", "41 boxes, 6 left", "40 boxes, 10 left"], answer: "41 boxes, 4 left", explain: "6 × 41 = 246, and 250 − 246 = 4.", time: 50 },
            { q: "A book has 192 pages. Rita reads 8 pages a day. In how many days will she finish?", type: "number", unit: "days", answer: 24 },
            { q: "3 notebooks cost ₹45. How much do 7 notebooks cost?", type: "money", answer: 105, explain: "One notebook costs ₹45 ÷ 3 = ₹15. 7 × ₹15 = ₹105.", time: 50 },
            { q: "A bus holds 45 passengers. 230 people need to travel. How many buses are needed?", type: "number", unit: "buses", answer: 6, explain: "5 buses carry 225 people, so a sixth bus is needed for the last 5.", time: 50 },
            { q: "₹72 ÷ 6 = ?", type: "money", answer: 12, time: 30 },
            { q: "₹5.40 ÷ 6 = ?", type: "money", answer: 0.90, explain: "540 paise ÷ 6 = 90 paise = ₹0.90" },
            { q: "₹48.60 ÷ 9 = ?", type: "money", answer: 5.40 },
            { q: "4 pens cost ₹60. What is the cost of 1 pen?", type: "money", answer: 15, time: 30 },
            { q: "200 children travel in buses that hold 30 each. How many buses are needed?", type: "number", unit: "buses", answer: 7, explain: "6 buses carry 180 children, so a seventh bus is needed for the last 20.", time: 50 }
          ]
        }
      ]
    },
    {
      id: "geometry",
      title: "Chapter 6: Geometry",
      subtopics: [
        {
          id: "solid-shapes",
          title: "Solid Shapes",
          explanation: "Solid shapes have faces, edges and corners. Some faces are flat and some are curved.\n\nCube and cuboid: 6 flat faces, 12 edges, 8 corners.\nCylinder: 2 flat faces, 1 curved surface, 2 edges, 0 corners.\nCone: 1 flat face, 1 curved surface, 1 edge, 1 corner.\nSphere: 1 curved surface, no edges, no corners.",
          workedExample: {
            problem: "A tin of beans has two flat circular faces and one curved side. Which solid is it?",
            steps: [
              "Count flat faces: 2. Count curved surfaces: 1.",
              "2 flat faces and 1 curved surface is a cylinder."
            ],
            answer: "Cylinder"
          },
          tips: [
            "Solids with a curved surface can roll. Solids with only flat faces slide but don't roll.",
            "Learn the list. Most questions are lookups."
          ],
          targetTime: "10–15 seconds",
          timeLimit: 15,
          questions: [
            { q: "How many faces does a cube have?", type: "number", answer: 6 },
            { q: "How many edges does a cuboid have?", type: "number", answer: 12 },
            { q: "How many corners does a cube have?", type: "number", answer: 8 },
            { q: "Which solid has only a curved surface?", type: "mcq", options: ["Cube", "Cylinder", "Cone", "Sphere"], answer: "Sphere" },
            { q: "Which solid has 2 flat faces and 1 curved surface?", type: "mcq", options: ["Cube", "Cylinder", "Cone", "Sphere"], answer: "Cylinder" },
            { q: "Which solid has 1 flat face, 1 curved surface and 1 corner?", type: "mcq", options: ["Cuboid", "Cylinder", "Cone", "Sphere"], answer: "Cone" },
            { q: "A dice has the shape of a ___.", type: "mcq", options: ["Cube", "Cuboid", "Cylinder", "Sphere"], answer: "Cube" },
            { q: "A football has the shape of a ___.", type: "mcq", options: ["Cube", "Cylinder", "Cone", "Sphere"], answer: "Sphere" },
            { q: "A tin of beans has the shape of a ___.", type: "mcq", options: ["Cuboid", "Cylinder", "Cone", "Sphere"], answer: "Cylinder" },
            { q: "An ice-cream cone has the shape of a ___.", type: "mcq", options: ["Cube", "Cylinder", "Cone", "Sphere"], answer: "Cone" },
            { q: "A matchbox has the shape of a ___.", type: "mcq", options: ["Cuboid", "Cylinder", "Cone", "Sphere"], answer: "Cuboid" },
            { q: "How many flat faces does a cylinder have?", type: "number", answer: 2 },
            { q: "How many corners does a cone have?", type: "number", answer: 1 },
            { q: "How many corners does a sphere have?", type: "number", answer: 0 },
            { q: "Which can both roll and slide?", type: "mcq", options: ["Cylinder", "Cube", "Sphere"], answer: "Cylinder", explain: "A cylinder rolls on its curved side and slides on its flat face. A sphere only rolls." },
            { q: "Which solid cannot roll at all?", type: "mcq", options: ["Cuboid", "Cone", "Sphere"], answer: "Cuboid" },
            { q: "Which has more faces in all?", type: "mcq", options: ["A cube", "A cylinder"], answer: "A cube", explain: "A cube has 6 faces. A cylinder has 3 (2 flat and 1 curved)." },
            { q: "How many faces does a cuboid have?", type: "number", answer: 6 },
            { q: "A globe has the shape of a ___.", type: "mcq", options: ["Cube", "Cylinder", "Cone", "Sphere"], answer: "Sphere" },
            { q: "All faces of a cube have the same shape. What shape is it?", type: "mcq", options: ["Square", "Rectangle", "Circle", "Triangle"], answer: "Square" },
            { q: "How many corners does a cuboid have?", type: "number", answer: 8 },
            { q: "A birthday cap has the shape of a ___.", type: "mcq", options: ["Cube", "Cylinder", "Cone", "Sphere"], answer: "Cone" },
            { q: "A brick has the shape of a ___.", type: "mcq", options: ["Cube", "Cuboid", "Cylinder", "Cone"], answer: "Cuboid" },
            { q: "How many edges does a cube have?", type: "number", answer: 12 },
            { q: "Which solid has no edges and no corners?", type: "mcq", options: ["Cube", "Cylinder", "Cone", "Sphere"], answer: "Sphere" }
          ]
        },
        {
          id: "flat-shapes",
          title: "Flat Shapes",
          explanation: "Flat shapes are named by how many sides and corners they have.\n\nTriangle: 3 sides. Square: 4 equal sides. Rectangle: 4 sides, opposite sides equal. Pentagon: 5 sides. Hexagon: 6 sides. Octagon: 8 sides (like a stop sign). A circle has no straight sides and no corners.",
          workedExample: {
            problem: "Which shape has 4 equal sides and 4 right angles?",
            steps: [
              "4 sides means a square or a rectangle.",
              "A rectangle only needs opposite sides equal, but here all 4 sides are equal."
            ],
            answer: "Square"
          },
          tips: [
            "Count the sides first, then check whether they are equal.",
            "A circle has no corners and no straight sides."
          ],
          targetTime: "10–15 seconds",
          timeLimit: 15,
          questions: [
            { q: "How many sides does a triangle have?", type: "number", answer: 3 },
            { q: "Which shape has 4 equal sides and 4 right angles?", type: "mcq", options: ["Square", "Rectangle", "Pentagon", "Triangle"], answer: "Square" },
            { q: "Which shape has 4 sides with opposite sides equal, but not all four equal (all corners are right angles)?", type: "mcq", options: ["Square", "Rectangle", "Hexagon", "Triangle"], answer: "Rectangle", time: 20 },
            { q: "How many corners does a rectangle have?", type: "number", answer: 4 },
            { q: "Which flat shape has no corners and no straight sides?", type: "mcq", options: ["Circle", "Square", "Triangle", "Hexagon"], answer: "Circle" },
            { q: "How many sides does a pentagon have?", type: "number", answer: 5 },
            { q: "How many sides does a hexagon have?", type: "number", answer: 6 },
            { q: "How many sides does an octagon have?", type: "number", answer: 8 },
            { q: "How many corners does a triangle have?", type: "number", answer: 3 },
            { q: "In a square, how many sides are equal in length?", type: "number", answer: 4 },
            { q: "How many sides do two triangles have together?", type: "number", answer: 6 },
            { q: "Which shape is each face of a dice?", type: "mcq", options: ["Square", "Rectangle", "Circle", "Triangle"], answer: "Square" },
            { q: "Which shape is the lid of a tin?", type: "mcq", options: ["Circle", "Square", "Rectangle", "Triangle"], answer: "Circle" },
            { q: "A road stop sign has 8 sides. Name the shape.", type: "mcq", options: ["Hexagon", "Pentagon", "Octagon", "Square"], answer: "Octagon" },
            { q: "How many sides does a quadrilateral have?", type: "number", answer: 4 },
            { q: "Which two shapes have 4 corners? Pick both.", type: "multi", options: ["Square", "Rectangle", "Triangle", "Pentagon"], answer: ["Square", "Rectangle"], time: 20 },
            { q: "Which shape has the fewest sides?", type: "mcq", options: ["Triangle", "Square", "Pentagon", "Hexagon"], answer: "Triangle" },
            { q: "Two identical squares joined side by side make which shape?", type: "mcq", options: ["Square", "Rectangle", "Hexagon", "Triangle"], answer: "Rectangle", time: 20 },
            { q: "A square paper is folded in half so that opposite edges meet. What shape do you get?", type: "mcq", options: ["Square", "Rectangle", "Triangle", "Circle"], answer: "Rectangle", time: 20 },
            { q: "Find the total number of sides of a triangle, a square and a hexagon together.", type: "number", answer: 13, explain: "3 + 4 + 6 = 13", time: 25 },
            { q: "How many corners does a hexagon have?", type: "number", answer: 6 },
            { q: "Which has all sides equal?", type: "mcq", options: ["A square", "A rectangle"], answer: "A square" },
            { q: "Which has more sides?", type: "mcq", options: ["A pentagon", "A hexagon"], answer: "A hexagon" },
            { q: "A clock face has which shape?", type: "mcq", options: ["Circle", "Square", "Hexagon", "Octagon"], answer: "Circle" },
            { q: "How many sides do 3 separate squares have in all?", type: "number", answer: 12, time: 20 }
          ]
        },
        {
          id: "lines-maps",
          title: "Straight & Curved Lines, Reading a Map",
          explanation: "Lines can be straight or curved.\n\nMaps use four main directions: North (up), South (down), East (right) and West (left). Between them are North-east, North-west, South-east and South-west.",
          workedExample: {
            problem: "The school is north of the park and the library is east of the park. In which direction is the library from the school?",
            steps: [
              "Put the park in the middle. Draw the school above it (north) and the library to its right (east).",
              "From the school, the library is down and to the right."
            ],
            answer: "South-east"
          },
          tips: [
            "Draw a tiny sketch with N at the top, S at the bottom, E on the right and W on the left.",
            "Clockwise from the top: Never Eat Soggy Waffles (N, E, S, W).",
            "On a grid map, the letter tells the column and the number tells the row."
          ],
          targetTime: "15–25 seconds",
          timeLimit: 25,
          questions: [
            { q: "Is the edge of a ruler straight or curved?", type: "mcq", options: ["Straight", "Curved"], answer: "Straight", shuffle: false, time: 15 },
            { q: "Is the rim of a plate straight or curved?", type: "mcq", options: ["Straight", "Curved"], answer: "Curved", shuffle: false, time: 15 },
            { q: "Is the letter O made of straight lines or a curved line?", type: "mcq", options: ["Straight", "Curved"], answer: "Curved", shuffle: false, time: 15 },
            { q: "Is the letter Z made of straight lines or curved lines?", type: "mcq", options: ["Straight", "Curved"], answer: "Straight", shuffle: false, time: 15 },
            { q: "How many straight lines make a triangle?", type: "number", answer: 3, time: 15 },
            { q: "Which is curved?", type: "mcq", options: ["A rainbow", "The edge of a table"], answer: "A rainbow", time: 15 },
            { q: "The four main directions are North, South, East and ___.", type: "mcq", options: ["West", "Up", "Left", "North-east"], answer: "West", time: 15 },
            { q: "Which direction is opposite to North?", type: "mcq", options: ["North", "South", "East", "West"], answer: "South", shuffle: false, time: 15 },
            { q: "Which direction is opposite to East?", type: "mcq", options: ["North", "South", "East", "West"], answer: "West", shuffle: false, time: 15 },
            { q: "You face North and turn right. Which way do you face now?", type: "mcq", options: ["North", "South", "East", "West"], answer: "East", shuffle: false },
            { q: "You face North and turn left. Which way do you face now?", type: "mcq", options: ["North", "South", "East", "West"], answer: "West", shuffle: false },
            { q: "You face East and turn right. Which way do you face now?", type: "mcq", options: ["North", "South", "East", "West"], answer: "South", shuffle: false },
            { q: "You face South and make a half turn. Which way do you face now?", type: "mcq", options: ["North", "South", "East", "West"], answer: "North", shuffle: false },
            { q: "The shop is south of the post office, and the bank is west of the post office. In which direction is the bank from the shop?", type: "mcq", options: ["North-east", "North-west", "South-east", "South-west"], answer: "North-west", shuffle: false, explain: "From the shop, go up (north) to the post office, then left (west) to the bank.", time: 40 },
            { q: "The market is west of the bus stop, and the bus stop is west of the temple. Walking from the market to the temple, which way do you go?", type: "mcq", options: ["North", "South", "East", "West"], answer: "East", shuffle: false, time: 35 },
            { q: "Ravi walks 3 steps north, then 3 steps east, then 3 steps south. In which direction is he from where he started?", type: "mcq", options: ["North", "South", "East", "West"], answer: "East", shuffle: false, time: 35 },
            { q: "Meena walks 2 steps east and then 2 steps west. Where is she?", type: "mcq", options: ["Back at the start", "2 steps east", "2 steps west", "4 steps east"], answer: "Back at the start" },
            { q: "In which direction does the Sun rise?", type: "mcq", options: ["North", "South", "East", "West"], answer: "East", shuffle: false, time: 15 },
            { q: "On a grid map, the hospital is at B3 and the school is at D3. In which direction is the school from the hospital?", type: "mcq", options: ["North", "South", "East", "West"], answer: "East", shuffle: false, explain: "Same row 3. Column D is to the right of B, so it is east.", time: 35 },
            { q: "On a grid map, rows go up going north. The park is at C2 and the lake is at C5. In which direction is the lake from the park?", type: "mcq", options: ["North", "South", "East", "West"], answer: "North", shuffle: false, time: 35 },
            { q: "Is the letter S made of straight lines or curved lines?", type: "mcq", options: ["Straight", "Curved"], answer: "Curved", shuffle: false, time: 15 },
            { q: "Which direction is between North and East?", type: "mcq", options: ["North-east", "North-west", "South-east", "South-west"], answer: "North-east", shuffle: false, time: 15 },
            { q: "You face West and turn right. Which way do you face now?", type: "mcq", options: ["North", "South", "East", "West"], answer: "North", shuffle: false },
            { q: "Priya walks 5 steps north and then 5 steps south. Where does she end up?", type: "mcq", options: ["Back at the start", "5 steps north", "5 steps south", "10 steps north"], answer: "Back at the start" },
            { q: "On a grid map, rows go up going north. The zoo is at A1 and the café is at A4. In which direction is the café from the zoo?", type: "mcq", options: ["North", "South", "East", "West"], answer: "North", shuffle: false, time: 35 }
          ]
        }
      ]
    },
    {
      id: "patterns",
      title: "Chapter 7: Patterns",
      subtopics: [
        {
          id: "number-patterns",
          title: "Number Patterns",
          explanation: "A number pattern follows a rule. Find the rule by looking at the gap between neighbouring numbers.\n\nSometimes the gap stays the same. Sometimes the gap grows, or each number is multiplied or divided by the same amount.",
          workedExample: {
            problem: "1, 2, 4, 7, 11, __",
            steps: [
              "Find the gaps: +1, +2, +3, +4. The gap grows by 1 each time.",
              "The next gap is +5, so 11 + 5 = 16."
            ],
            answer: "16"
          },
          tips: [
            "If the gaps are all equal, that is the rule. If they change, check whether the gap grows, or whether each number is multiplied.",
            "Test your rule on at least 3 pairs before trusting it."
          ],
          targetTime: "20–30 seconds",
          timeLimit: 30,
          questions: [
            { q: "What comes next? 4, 8, 12, 16, __", type: "number", answer: 20, time: 15 },
            { q: "What comes next? 100, 90, 80, 70, __", type: "number", answer: 60, time: 15 },
            { q: "What comes next? 5, 10, 20, 40, __", type: "number", answer: 80, explain: "Each number is doubled." },
            { q: "What comes next? 1, 3, 5, 7, __", type: "number", answer: 9, time: 15 },
            { q: "What are the next two numbers? 2, 5, 8, 11, __, __", type: "text", answer: "14, 17", placeholder: "e.g. 3, 6", time: 30 },
            { q: "Fill the gap: 45, 40, 35, __, 25", type: "number", answer: 30, time: 20 },
            { q: "What comes next? 1, 4, 9, 16, __", type: "number", answer: 25, explain: "These are 1 × 1, 2 × 2, 3 × 3, 4 × 4, so next is 5 × 5 = 25." },
            { q: "What comes next? 3, 4, 6, 9, 13, __", type: "number", answer: 18, explain: "The gaps are 1, 2, 3, 4, so the next gap is 5." },
            { q: "What is the rule for 6, 12, 18, 24?", type: "mcq", options: ["Add 6 each time", "Add 4 each time", "Double each time", "Add 12 each time"], answer: "Add 6 each time", time: 20 },
            { q: "Fill the gap: 11, 22, 33, 44, __, 66", type: "number", answer: 55, time: 15 },
            { q: "What comes next? 200, 175, 150, __", type: "number", answer: 125, time: 20 },
            { q: "What comes next? 2, 6, 18, 54, __", type: "number", answer: 162, explain: "Each number is multiplied by 3.", time: 40 },
            { q: "What comes next? 1, 2, 3, 5, 8, __", type: "number", answer: 13, explain: "Add the two numbers before: 5 + 8 = 13.", time: 40 },
            { q: "What comes next? 99, 88, 77, 66, __", type: "number", answer: 55, time: 15 },
            { q: "What comes next? 10, 9, 7, 4, __", type: "number", answer: 0, explain: "The gaps are −1, −2, −3, so the next gap is −4." },
            { q: "Fill the gap: 0, 5, 10, 15, __, 25", type: "number", answer: 20, time: 15 },
            { q: "Fill the gap: 7, 14, __, 28, 35", type: "number", answer: 21, time: 15 },
            { q: "What comes next? 1, 1, 2, 2, 3, 3, __", type: "number", answer: 4, time: 20 },
            { q: "What is the 10th number in 3, 6, 9, 12, ...?", type: "number", answer: 30, explain: "The 10th number is 10 × 3 = 30." },
            { q: "A pattern starts at 2 and adds 3 each time. What is the 6th number?", type: "number", answer: 17, explain: "2, 5, 8, 11, 14, 17", time: 40 },
            { q: "What comes next? 3, 6, 12, 24, __", type: "number", answer: 48, explain: "Each number is doubled." },
            { q: "Fill the gap: 90, 80, 70, __, 50", type: "number", answer: 60, time: 15 },
            { q: "What comes next? 2, 4, 7, 11, __", type: "number", answer: 16, explain: "The gaps are 2, 3, 4, so the next gap is 5." },
            { q: "What comes next? 1, 8, 15, 22, __", type: "number", answer: 29, explain: "Add 7 each time." },
            { q: "What comes next? 64, 32, 16, 8, __", type: "number", answer: 4, explain: "Each number is halved." }
          ]
        },
        {
          id: "shape-repeating-patterns",
          title: "Shape & Repeating Patterns",
          explanation: "A repeating pattern has a block of shapes, colours or numbers that repeats again and again.\n\nTo find the item in any position, divide the position by the size of the block. The remainder tells you where you are in the block.",
          workedExample: {
            problem: "○ △ □ ○ △ □ ○ __",
            steps: [
              "Find the block that repeats: ○ △ □ (3 shapes).",
              "The 7th shape starts a new block (○), so the 8th is the 2nd shape in the block."
            ],
            answer: "△"
          },
          tips: [
            "Find the repeating block first.",
            "For the Nth item, divide N by the block size. The remainder is the position in the block. A remainder of 0 means the last item.",
            "For growing patterns, count how many things are added each step."
          ],
          targetTime: "20–30 seconds",
          timeLimit: 30,
          questions: [
            { q: "What comes next? ○ △ □ ○ △ □ ○ __", type: "mcq", options: ["○", "△", "□"], answer: "△", shuffle: false, time: 15 },
            { q: "What comes next? ▲ ▲ ● ▲ ▲ ● ▲ ▲ __", type: "mcq", options: ["▲", "●"], answer: "●", shuffle: false, time: 15 },
            { q: "What comes next? Red, blue, blue, red, blue, blue, red, __", type: "mcq", options: ["Red", "Blue"], answer: "Blue", shuffle: false, time: 15 },
            { q: "○ □ ○ □ ○ □ ... What is the 10th shape?", type: "mcq", options: ["○", "□"], answer: "□", shuffle: false, explain: "○ is in odd places and □ is in even places. 10 is even." },
            { q: "What comes next? A, B, A, B, A, __", type: "mcq", options: ["A", "B", "C"], answer: "B", shuffle: false, time: 15 },
            { q: "What comes next? A, C, E, G, __", type: "mcq", options: ["H", "I", "J"], answer: "I", shuffle: false, explain: "Skip one letter each time: G, (H), I." },
            { q: "★ ★ ☾ repeats. What is the 14th shape?", type: "mcq", options: ["★", "☾"], answer: "★", shuffle: false, explain: "14 ÷ 3 = 4 R 2, so it is the 2nd in the block." },
            { q: "1, 2, 3, 4 repeats. What is the 30th number?", type: "number", answer: 2, explain: "30 ÷ 4 = 7 R 2, so it is the 2nd in the block." },
            { q: "Letters A, B, C, D, E repeat. What is the 23rd letter?", type: "mcq", options: ["A", "B", "C", "D", "E"], answer: "C", shuffle: false, explain: "23 ÷ 5 = 4 R 3, so it is the 3rd in the block." },
            { q: "Red, Red, Blue, Green repeats. What colour is the 100th item?", type: "mcq", options: ["Red", "Blue", "Green"], answer: "Green", shuffle: false, explain: "100 ÷ 4 = 25 R 0, so it is the last in the block.", time: 40 },
            { q: "How many shapes are in one repeating block of ○ ○ △ □ ○ ○ △ □?", type: "number", answer: 4, time: 20 },
            { q: "Red, Yellow, Green repeats. What colour is the 20th?", type: "mcq", options: ["Red", "Yellow", "Green"], answer: "Yellow", shuffle: false, explain: "20 ÷ 3 = 6 R 2, so it is the 2nd in the block." },
            { q: "☺ ☹ ☺ ☹ ... What is the 15th face?", type: "mcq", options: ["☺", "☹"], answer: "☺", shuffle: false, explain: "☺ is in odd places. 15 is odd." },
            { q: "Clap, clap, stomp repeats. What is the 7th action?", type: "mcq", options: ["Clap", "Stomp"], answer: "Clap", shuffle: false, explain: "7 ÷ 3 = 2 R 1, so it is the 1st in the block." },
            { q: "What are the next two? ◆ ◆ ◇ ◆ ◆ ◇ ◆ __ __", type: "mcq", options: ["◆ ◇", "◇ ◆", "◆ ◆", "◇ ◇"], answer: "◆ ◇", shuffle: false },
            { q: "Growing pattern: 1 dot, 3 dots, 5 dots, __ dots", type: "number", answer: 7, time: 15 },
            { q: "1 triangle needs 3 sticks, 2 triangles in a row need 5, and 3 triangles need 7. How many sticks for 5 triangles?", type: "number", answer: 11, explain: "Each new triangle adds 2 sticks: 7, 9, 11.", time: 40 },
            { q: "Squares of side 1, 2 and 3 contain 1, 4 and 9 small squares. How many small squares are in a square of side 4?", type: "number", answer: 16, explain: "4 × 4 = 16" },
            { q: "Which is a repeating pattern?", type: "mcq", options: ["○ △ ○ △ ○ △", "○ △ □ △ ○ ○"], answer: "○ △ ○ △ ○ △", time: 15 },
            { q: "Mango, Apple, Apple repeats. What is the 9th fruit?", type: "mcq", options: ["Mango", "Apple"], answer: "Apple", shuffle: false, explain: "9 ÷ 3 = 3 R 0, so it is the last in the block." },
            { q: "What comes next? ● ○ ○ ● ○ ○ ● __", type: "mcq", options: ["●", "○"], answer: "○", shuffle: false, time: 15 },
            { q: "Blue, Green repeats. What colour is the 11th?", type: "mcq", options: ["Blue", "Green"], answer: "Blue", shuffle: false, explain: "Blue is in odd places. 11 is odd." },
            { q: "1, 2, 3 repeats. What is the 25th number?", type: "number", answer: 1, explain: "25 ÷ 3 = 8 R 1, so it is the 1st in the block." },
            { q: "★ ★ ★ ◇ repeats. What is the 12th shape?", type: "mcq", options: ["★", "◇"], answer: "◇", shuffle: false, explain: "12 ÷ 4 = 3 R 0, so it is the last in the block." },
            { q: "Growing pattern: 2 dots, 4 dots, 6 dots. How many dots in the 5th picture?", type: "number", answer: 10, time: 20 }
          ]
        },
        {
          id: "tessellations",
          title: "Tessellations & Patterns Around Us",
          explanation: "A tessellation covers a surface with copies of a shape, with no gaps and no overlaps.\n\nPatterns are all around us: floor tiles, brick walls, honeycombs, zebra stripes, rangoli and kolam.",
          workedExample: {
            problem: "Does a rectangle tessellate?",
            steps: [
              "Place rectangles side by side and row on row, like bricks or tiles.",
              "They fit with no gaps and no overlaps."
            ],
            answer: "Yes, a rectangle tessellates."
          },
          tips: [
            "Squares, rectangles, equilateral triangles and regular hexagons tessellate. Circles do not, because they leave gaps.",
            "Nature has patterns too: honeycombs, zebra stripes and petals."
          ],
          targetTime: "15–25 seconds",
          timeLimit: 25,
          questions: [
            { q: "A tessellation leaves no ___ and no ___.", type: "mcq", options: ["gaps and overlaps", "colours and shapes", "lines and corners"], answer: "gaps and overlaps", time: 15 },
            { q: "Does a square tessellate?", type: "mcq", options: ["Yes", "No"], answer: "Yes", shuffle: false, time: 15 },
            { q: "Does a circle tessellate?", type: "mcq", options: ["Yes", "No"], answer: "No", shuffle: false, explain: "Circles always leave gaps between them.", time: 15 },
            { q: "Does a regular hexagon tessellate?", type: "mcq", options: ["Yes", "No"], answer: "Yes", shuffle: false, time: 15 },
            { q: "Does an equilateral triangle tessellate?", type: "mcq", options: ["Yes", "No"], answer: "Yes", shuffle: false, time: 15 },
            { q: "Which tessellates?", type: "mcq", options: ["A circle", "A triangle"], answer: "A triangle", time: 15 },
            { q: "A honeycomb is made of which shape?", type: "mcq", options: ["Hexagon", "Square", "Circle", "Triangle"], answer: "Hexagon", time: 15 },
            { q: "A chessboard is made of which shape?", type: "mcq", options: ["Square", "Hexagon", "Circle", "Triangle"], answer: "Square", time: 15 },
            { q: "What shape is the face of a brick in a brick wall?", type: "mcq", options: ["Rectangle", "Circle", "Triangle", "Hexagon"], answer: "Rectangle", time: 15 },
            { q: "Which is a pattern found in nature?", type: "mcq", options: ["A honeycomb", "Scattered stones"], answer: "A honeycomb", time: 15 },
            { q: "Is a floor covered with square tiles a tessellation?", type: "mcq", options: ["Yes", "No"], answer: "Yes", shuffle: false, time: 15 },
            { q: "True or false: a tessellation is a repeating pattern.", type: "mcq", options: ["True", "False"], answer: "True", shuffle: false, time: 15 },
            { q: "How many equilateral triangles make one regular hexagon?", type: "number", answer: 6 },
            { q: "How many small squares make a larger square with 2 small squares on each side?", type: "number", answer: 4 },
            { q: "How many small squares make a rectangle with 3 rows and 5 columns?", type: "number", answer: 15 },
            { q: "Two identical squares joined side by side make which shape?", type: "mcq", options: ["Rectangle", "Square", "Hexagon", "Triangle"], answer: "Rectangle", time: 15 },
            { q: "A floor is covered with tiles 4 tiles wide and 6 tiles long. How many tiles are needed?", type: "number", answer: 24 },
            { q: "A row of 12 tiles repeats 1 red, 2 white. How many tiles are red?", type: "number", answer: 4, explain: "Each block of 3 has 1 red. 12 ÷ 3 = 4 blocks." },
            { q: "A row of 10 tiles alternates black and white, starting with black. How many are white?", type: "number", answer: 5 },
            { q: "A rangoli uses 6 petals in each flower. How many petals are in 7 flowers?", type: "number", answer: 42 },
            { q: "Does a rectangle tessellate?", type: "mcq", options: ["Yes", "No"], answer: "Yes", shuffle: false, time: 15 },
            { q: "Which tessellates?", type: "mcq", options: ["A square", "A circle"], answer: "A square", time: 15 },
            { q: "Zebra stripes are a pattern found in ___.", type: "mcq", options: ["Nature", "Buildings"], answer: "Nature", shuffle: false, time: 15 },
            { q: "A floor is 5 tiles wide and 4 tiles long. How many tiles?", type: "number", answer: 20 },
            { q: "A rangoli has 5 rows with 8 dots in each row. How many dots in all?", type: "number", answer: 40 }
          ]
        }
      ]
    },
    {
      id: "measurement",
      title: "Chapter 8: Measurement",
      subtopics: [
        {
          id: "length",
          title: "Length",
          explanation: "Length is measured in centimetres (cm) and metres (m). 1 m = 100 cm.\n\nUse cm for small things like a pencil, and m for big things like a room or a rope. To add or subtract, change everything to cm, work it out, then change back.",
          workedExample: {
            problem: "5 m 20 cm − 2 m 75 cm",
            steps: [
              "Change both to cm: 520 cm − 275 cm.",
              "520 − 275 = 245 cm.",
              "Change back: 245 cm = 2 m 45 cm."
            ],
            answer: "2 m 45 cm"
          },
          tips: [
            "Convert to cm, calculate, then convert back.",
            "A pencil is about 15 cm, a door about 2 m, a classroom about 8 m.",
            "Type answers like 2 m 45 cm."
          ],
          targetTime: "25–40 seconds",
          timeLimit: 40,
          questions: [
            { q: "Convert 3 m to cm.", type: "number", unit: "cm", answer: 300, time: 20 },
            { q: "Write 450 cm in m and cm.", type: "text", answer: "4 m 50 cm", placeholder: "e.g. 2 m 45 cm", time: 30 },
            { q: "2 m 35 cm + 1 m 80 cm = ?", type: "text", answer: "4 m 15 cm", accept: ["415 cm"], placeholder: "e.g. 2 m 45 cm" },
            { q: "6 m 10 cm − 2 m 85 cm = ?", type: "text", answer: "3 m 25 cm", accept: ["325 cm"], placeholder: "e.g. 2 m 45 cm", time: 45 },
            { q: "Which unit would you use for the length of a pencil?", type: "mcq", options: ["cm", "m"], answer: "cm", shuffle: false, time: 15 },
            { q: "Is a classroom door about 2 m or 2 cm high?", type: "mcq", options: ["2 m", "2 cm"], answer: "2 m", shuffle: false, time: 15 },
            { q: "3 m 45 cm + 2 m 65 cm = ?", type: "text", answer: "6 m 10 cm", accept: ["610 cm"], placeholder: "e.g. 2 m 45 cm" },
            { q: "7 m − 3 m 50 cm = ?", type: "text", answer: "3 m 50 cm", accept: ["350 cm"], placeholder: "e.g. 2 m 45 cm" },
            { q: "Write 275 cm in m and cm.", type: "text", answer: "2 m 75 cm", placeholder: "e.g. 2 m 45 cm", time: 30 },
            { q: "Convert 6 m 5 cm to cm.", type: "number", unit: "cm", answer: 605, explain: "600 cm + 5 cm = 605 cm", time: 25 },
            { q: "Which is longer?", type: "mcq", options: ["150 cm", "1 m 40 cm"], answer: "150 cm", explain: "1 m 40 cm = 140 cm, and 150 is more than 140.", time: 25 },
            { q: "Arrange from shortest to longest.", type: "order", answer: ["150 cm", "1 m 80 cm", "2 m"], time: 35 },
            { q: "About how tall is a Class 3 child?", type: "mcq", options: ["120 cm", "12 m"], answer: "120 cm", shuffle: false, time: 15 },
            { q: "A rope is 12 m long. A piece 4 m 50 cm long is cut off. How much rope is left?", type: "text", answer: "7 m 50 cm", accept: ["750 cm"], placeholder: "e.g. 2 m 45 cm", time: 50 },
            { q: "Meena's ribbon is 1 m 25 cm and Riya's is 85 cm. What is their total length?", type: "text", answer: "2 m 10 cm", accept: ["210 cm"], placeholder: "e.g. 2 m 45 cm", time: 50 },
            { q: "How much longer is 3 m than 2 m 40 cm?", type: "number", unit: "cm", answer: 60, time: 35 },
            { q: "A table is 1 m 20 cm long. How long are 3 such tables placed in a row?", type: "text", answer: "3 m 60 cm", accept: ["360 cm"], placeholder: "e.g. 2 m 45 cm", time: 50 },
            { q: "A wire 5 m long is cut into 4 equal pieces. How long is each piece?", type: "text", answer: "1 m 25 cm", accept: ["125 cm"], placeholder: "e.g. 2 m 45 cm", explain: "500 cm ÷ 4 = 125 cm = 1 m 25 cm", time: 50 },
            { q: "Ravi walks 250 m to school and 250 m back. How far does he walk in all?", type: "number", unit: "m", answer: 500, time: 25 },
            { q: "A cloth 4 m 80 cm long is cut into 6 equal pieces. How long is each piece?", type: "number", unit: "cm", answer: 80, explain: "480 cm ÷ 6 = 80 cm", time: 50 },
            { q: "Is a pencil about 15 cm or 15 m long?", type: "mcq", options: ["15 cm", "15 m"], answer: "15 cm", shuffle: false, time: 15 },
            { q: "Is a classroom about 8 m or 8 cm long?", type: "mcq", options: ["8 m", "8 cm"], answer: "8 m", shuffle: false, time: 15 },
            { q: "Is a bench about 2 m or 2 cm long?", type: "mcq", options: ["2 m", "2 cm"], answer: "2 m", shuffle: false, time: 15 },
            { q: "A ribbon is 3 hand-spans long and each hand-span is 15 cm. How long is the ribbon?", type: "number", unit: "cm", answer: 45, time: 25 },
            { q: "1 m 50 cm + 2 m 50 cm = ?", type: "number", unit: "m", answer: 4, explain: "150 cm + 250 cm = 400 cm = 4 m" }
          ]
        },
        {
          id: "mass",
          title: "Mass (Weight)",
          explanation: "Mass is measured in grams (g) and kilograms (kg). 1 kg = 1,000 g.\n\nUse g for light things like an apple, and kg for heavy things like a school bag. To add or subtract, change everything to g, work it out, then change back.",
          workedExample: {
            problem: "5 kg 100 g − 2 kg 600 g",
            steps: [
              "Change both to grams: 5,100 g − 2,600 g.",
              "5,100 − 2,600 = 2,500 g.",
              "Change back: 2,500 g = 2 kg 500 g."
            ],
            answer: "2 kg 500 g"
          },
          tips: [
            "1 kg of cotton and 1 kg of iron have the same mass. Only the size is different.",
            "Convert to grams before adding or subtracting, then convert back.",
            "Type answers like 2 kg 500 g."
          ],
          targetTime: "25–40 seconds",
          timeLimit: 40,
          questions: [
            { q: "Convert 2 kg to g.", type: "number", unit: "g", answer: 2000, time: 20 },
            { q: "Write 3,500 g in kg and g.", type: "text", answer: "3 kg 500 g", placeholder: "e.g. 2 kg 500 g", time: 30 },
            { q: "2 kg 300 g + 1 kg 900 g = ?", type: "text", answer: "4 kg 200 g", accept: ["4200 g"], placeholder: "e.g. 2 kg 500 g" },
            { q: "6 kg 200 g − 2 kg 800 g = ?", type: "text", answer: "3 kg 400 g", accept: ["3400 g"], placeholder: "e.g. 2 kg 500 g", time: 45 },
            { q: "Which is heavier: 1 kg of cotton or 1 kg of iron?", type: "mcq", options: ["1 kg of cotton", "1 kg of iron", "Both are the same"], answer: "Both are the same", shuffle: false, explain: "Both are 1 kg.", time: 20 },
            { q: "Which unit would you use for the mass of an apple?", type: "mcq", options: ["g", "kg"], answer: "g", shuffle: false, time: 15 },
            { q: "Which unit would you use for the mass of a school bag?", type: "mcq", options: ["g", "kg"], answer: "kg", shuffle: false, time: 15 },
            { q: "Convert 5 kg 50 g to g.", type: "number", unit: "g", answer: 5050, explain: "5,000 g + 50 g = 5,050 g", time: 25 },
            { q: "Which is heavier?", type: "mcq", options: ["1,200 g", "1 kg 50 g"], answer: "1,200 g", explain: "1 kg 50 g = 1,050 g, which is less than 1,200 g.", time: 25 },
            { q: "Arrange from lightest to heaviest.", type: "order", answer: ["1,500 g", "1 kg 800 g", "2 kg"], time: 35 },
            { q: "Ravi bought 2 kg 500 g of rice and 1 kg 750 g of sugar. What is the total mass?", type: "text", answer: "4 kg 250 g", accept: ["4250 g"], placeholder: "e.g. 2 kg 500 g", time: 50 },
            { q: "A bag has 5 kg of flour. 1 kg 250 g is used. How much is left?", type: "text", answer: "3 kg 750 g", accept: ["3750 g"], placeholder: "e.g. 2 kg 500 g", time: 50 },
            { q: "One packet of tea is 250 g. What is the mass of 4 packets?", type: "text", answer: "1 kg", accept: ["1000 g", "1 kg 0 g"], placeholder: "e.g. 2 kg 500 g", time: 30 },
            { q: "A box of 6 identical books has a mass of 3 kg. What is the mass of one book?", type: "number", unit: "g", answer: 500, explain: "3,000 g ÷ 6 = 500 g", time: 45 },
            { q: "4 kg 500 g of rice is shared equally among 3 families. How much does each get?", type: "text", answer: "1 kg 500 g", accept: ["1500 g"], placeholder: "e.g. 2 kg 500 g", explain: "4,500 g ÷ 3 = 1,500 g = 1 kg 500 g", time: 50 },
            { q: "750 g + 750 g = ?", type: "text", answer: "1 kg 500 g", accept: ["1500 g"], placeholder: "e.g. 2 kg 500 g", time: 30 },
            { q: "How many 500 g packets make 3 kg?", type: "number", answer: 6, time: 25 },
            { q: "1 kg 100 g + 900 g = ?", type: "text", answer: "2 kg", accept: ["2000 g", "2 kg 0 g"], placeholder: "e.g. 2 kg 500 g", time: 30 },
            { q: "A mango is 250 g. How many mangoes make 2 kg?", type: "number", answer: 8, explain: "4 mangoes make 1 kg, so 8 make 2 kg.", time: 30 },
            { q: "A watermelon is 3 kg 200 g and a pumpkin is 2 kg 800 g. How much heavier is the watermelon?", type: "number", unit: "g", answer: 400, time: 45 },
            { q: "3 kg 400 g + 2 kg 600 g = ?", type: "text", answer: "6 kg", accept: ["6000 g", "6 kg 0 g"], placeholder: "e.g. 2 kg 500 g" },
            { q: "4 kg − 1 kg 500 g = ?", type: "text", answer: "2 kg 500 g", accept: ["2500 g"], placeholder: "e.g. 2 kg 500 g" },
            { q: "Is a pencil about 5 g or 5 kg?", type: "mcq", options: ["5 g", "5 kg"], answer: "5 g", shuffle: false, time: 15 },
            { q: "How many 250 g packets make 1 kg?", type: "number", answer: 4, time: 20 },
            { q: "A sack has 25 kg of rice. 8 kg 500 g is sold. How much is left?", type: "text", answer: "16 kg 500 g", accept: ["16500 g"], placeholder: "e.g. 2 kg 500 g", time: 50 }
          ]
        },
        {
          id: "capacity",
          title: "Capacity",
          explanation: "Capacity is how much a container holds. It is measured in millilitres (mL) and litres (L). 1 L = 1,000 mL.\n\nTo add or subtract, change everything to mL, work it out, then change back. \"How many glasses can be filled?\" means divide.",
          workedExample: {
            problem: "6 L 200 mL − 3 L 500 mL",
            steps: [
              "Change both to mL: 6,200 mL − 3,500 mL.",
              "6,200 − 3,500 = 2,700 mL.",
              "Change back: 2,700 mL = 2 L 700 mL."
            ],
            answer: "2 L 700 mL"
          },
          tips: [
            "Convert to mL before adding or subtracting, then convert back.",
            "A cup holds about 200 mL, a small bottle about 500 mL, and a bucket about 10 L.",
            "Type answers like 2 L 700 mL."
          ],
          targetTime: "25–40 seconds",
          timeLimit: 40,
          questions: [
            { q: "Convert 4 L to mL.", type: "number", unit: "mL", answer: 4000, time: 20 },
            { q: "Write 2,750 mL in L and mL.", type: "text", answer: "2 L 750 mL", placeholder: "e.g. 2 L 700 mL", time: 30 },
            { q: "3 L 400 mL + 2 L 800 mL = ?", type: "text", answer: "6 L 200 mL", accept: ["6200 mL"], placeholder: "e.g. 2 L 700 mL" },
            { q: "8 L 100 mL − 3 L 600 mL = ?", type: "text", answer: "4 L 500 mL", accept: ["4500 mL"], placeholder: "e.g. 2 L 700 mL", time: 45 },
            { q: "Which unit would you use for a spoonful of medicine?", type: "mcq", options: ["mL", "L"], answer: "mL", shuffle: false, time: 15 },
            { q: "Which unit would you use for the water in a bucket?", type: "mcq", options: ["mL", "L"], answer: "L", shuffle: false, time: 15 },
            { q: "Which holds more?", type: "mcq", options: ["1 L", "900 mL"], answer: "1 L", explain: "1 L = 1,000 mL", time: 15 },
            { q: "Arrange from least to most.", type: "order", answer: ["1,200 mL", "1 L 500 mL", "2 L"], time: 35 },
            { q: "Convert 5 L 5 mL to mL.", type: "number", unit: "mL", answer: 5005, explain: "5,000 mL + 5 mL = 5,005 mL", time: 25 },
            { q: "500 mL + 500 mL = how many litres?", type: "number", unit: "L", answer: 1, time: 20 },
            { q: "A jug holds 2 L. How many 250 mL glasses can be filled from it?", type: "number", answer: 8, explain: "2,000 mL ÷ 250 mL = 8", time: 35 },
            { q: "A tank had 15 L of water. 6 L 500 mL was used. How much is left?", type: "text", answer: "8 L 500 mL", accept: ["8500 mL"], placeholder: "e.g. 2 L 700 mL", time: 50 },
            { q: "A bottle holds 750 mL. How much do 2 bottles hold?", type: "text", answer: "1 L 500 mL", accept: ["1500 mL"], placeholder: "e.g. 2 L 700 mL", time: 30 },
            { q: "A bucket holds 10 L. A mug holds 500 mL. How many mugs fill the bucket?", type: "number", answer: 20, explain: "2 mugs make 1 L, so 20 mugs make 10 L.", time: 35 },
            { q: "Mother buys 1 L 250 mL of milk in the morning and 750 mL in the evening. What is the total?", type: "text", answer: "2 L", accept: ["2000 mL", "2 L 0 mL"], placeholder: "e.g. 2 L 700 mL", time: 45 },
            { q: "3 L of juice is poured equally into 6 glasses. How much is in each glass?", type: "number", unit: "mL", answer: 500, explain: "3,000 mL ÷ 6 = 500 mL", time: 40 },
            { q: "A jug has 2 L 400 mL. 1 L 900 mL is poured out. How much is left?", type: "number", unit: "mL", answer: 500, time: 45 },
            { q: "5 bottles hold 600 mL each. What is the total?", type: "text", answer: "3 L", accept: ["3000 mL", "3 L 0 mL"], placeholder: "e.g. 2 L 700 mL", time: 35 },
            { q: "Which is more?", type: "mcq", options: ["3 bottles of 1 L each", "2 bottles of 1 L 400 mL each"], answer: "3 bottles of 1 L each", explain: "3 L is more than 2 L 800 mL.", time: 40 },
            { q: "A tap fills 2 L of water every minute. How much does it fill in 5 minutes?", type: "number", unit: "L", answer: 10, time: 20 },
            { q: "2 L 300 mL + 1 L 700 mL = ?", type: "text", answer: "4 L", accept: ["4000 mL", "4 L 0 mL"], placeholder: "e.g. 2 L 700 mL" },
            { q: "5 L − 2 L 250 mL = ?", type: "text", answer: "2 L 750 mL", accept: ["2750 mL"], placeholder: "e.g. 2 L 700 mL" },
            { q: "Does a tea cup hold about 150 mL or 150 L?", type: "mcq", options: ["150 mL", "150 L"], answer: "150 mL", shuffle: false, time: 15 },
            { q: "How many 100 mL cups can be filled from 1 L?", type: "number", answer: 10, time: 20 },
            { q: "A bottle holds 1 L 500 mL. How many such bottles hold 6 L?", type: "number", answer: 4, explain: "1 L 500 mL + 1 L 500 mL = 3 L, so 4 bottles make 6 L.", time: 45 }
          ]
        }
      ]
    },
    {
      id: "time",
      title: "Chapter 9: Time",
      subtopics: [
        {
          id: "reading-clock",
          title: "Reading the Clock & a.m./p.m.",
          explanation: "The short hand shows the hour and the long hand shows the minutes. Each number on the clock stands for 5 minutes.\n\nLong hand on 12 is o'clock, on 3 is quarter past, on 6 is half past, and on 9 is quarter to.\n\na.m. is from midnight to noon. p.m. is from noon to midnight.",
          workedExample: {
            problem: "The short hand is between 4 and 5 and the long hand is on 6. What is the time?",
            steps: [
              "Long hand on 6 means 30 minutes, so it is half past.",
              "The short hand is past 4, so the hour is 4."
            ],
            answer: "4:30"
          },
          tips: [
            "Look at the short hand first for the hour, then the long hand for the minutes.",
            "Count in 5s around the clock: 5, 10, 15, 20...",
            "Type times like 4:30."
          ],
          targetTime: "15–20 seconds",
          timeLimit: 20,
          questions: [
            { q: "The long hand is on 12 and the short hand is on 7. What is the time?", type: "text", answer: "7:00", accept: ["7.00", "7 o'clock", "7 oclock"], placeholder: "e.g. 4:30" },
            { q: "The long hand is on 6 and the short hand is between 3 and 4. What is the time?", type: "text", answer: "3:30", accept: ["3.30"], placeholder: "e.g. 4:30" },
            { q: "The long hand is on 3 and the short hand is just past 9. What is the time?", type: "text", answer: "9:15", accept: ["9.15"], placeholder: "e.g. 4:30" },
            { q: "The long hand is on 9 and the short hand is between 4 and 5. What is the time?", type: "text", answer: "4:45", accept: ["4.45"], placeholder: "e.g. 4:30", explain: "The short hand hasn't reached 5 yet, so the hour is still 4." },
            { q: "How many minutes does the long hand take to move from 12 to 1?", type: "number", unit: "minutes", answer: 5, time: 15 },
            { q: "The long hand is on 4. How many minutes past the hour is it?", type: "number", unit: "minutes", answer: 20, time: 15 },
            { q: "The long hand is on 8. How many minutes past the hour is it?", type: "number", unit: "minutes", answer: 40, time: 15 },
            { q: "Write quarter past 2 in digits.", type: "text", answer: "2:15", accept: ["2.15"], placeholder: "e.g. 4:30" },
            { q: "Write half past 11 in digits.", type: "text", answer: "11:30", accept: ["11.30"], placeholder: "e.g. 4:30" },
            { q: "Write quarter to 6 in digits.", type: "text", answer: "5:45", accept: ["5.45"], placeholder: "e.g. 4:30", explain: "Quarter to 6 is 15 minutes before 6, which is 5:45." },
            { q: "At 7:05, which number is the long hand on?", type: "number", answer: 1, time: 15 },
            { q: "How many minutes to 11 is 10:50?", type: "number", unit: "minutes", answer: 10, time: 15 },
            { q: "How many minutes are in 1 hour?", type: "number", unit: "minutes", answer: 60, time: 10 },
            { q: "How many minutes are in half an hour?", type: "number", unit: "minutes", answer: 30, time: 10 },
            { q: "How many minutes are in a quarter of an hour?", type: "number", unit: "minutes", answer: 15, time: 15 },
            { q: "Which is a.m.?", type: "mcq", options: ["7 in the morning", "7 at night"], answer: "7 in the morning", shuffle: false, time: 15 },
            { q: "Breakfast time is usually 8:00 ___.", type: "mcq", options: ["a.m.", "p.m."], answer: "a.m.", shuffle: false, time: 15 },
            { q: "School ends at 2:00 in the afternoon. Is that a.m. or p.m.?", type: "mcq", options: ["a.m.", "p.m."], answer: "p.m.", shuffle: false, time: 15 },
            { q: "How many hours are in a day?", type: "number", unit: "hours", answer: 24, time: 10 },
            { q: "What time is it 1 hour after 3:30?", type: "text", answer: "4:30", accept: ["4.30"], placeholder: "e.g. 4:30" },
            { q: "What is 12:00 at night called?", type: "mcq", options: ["Midnight", "Noon"], answer: "Midnight", shuffle: false, time: 15 },
            { q: "What is 12:00 in the day called?", type: "mcq", options: ["Midnight", "Noon"], answer: "Noon", shuffle: false, time: 15 },
            { q: "The long hand is on 11. How many minutes past the hour is it?", type: "number", unit: "minutes", answer: 55, time: 15 },
            { q: "Write \"twenty past 8\" in digits.", type: "text", answer: "8:20", accept: ["8.20"], placeholder: "e.g. 4:30" },
            { q: "Write \"ten to 9\" in digits.", type: "text", answer: "8:50", accept: ["8.50"], placeholder: "e.g. 4:30", explain: "Ten to 9 is 10 minutes before 9, which is 8:50." }
          ]
        },
        {
          id: "duration",
          title: "Duration (How Long?)",
          explanation: "Duration is how much time passes between a start and an end.\n\nTo find an end time, add the hours first, then the minutes. If the minutes go past 60, change 60 minutes into 1 hour.",
          workedExample: {
            problem: "A movie starts at 3:45 p.m. and lasts 1 hour 30 minutes. When does it end?",
            steps: [
              "Add the hour: 3:45 + 1 hour = 4:45.",
              "Add the 30 minutes: 4:45 + 15 minutes = 5:00, then 15 more minutes = 5:15."
            ],
            answer: "5:15 p.m."
          },
          tips: [
            "1 hour = 60 minutes, and 1 minute = 60 seconds.",
            "To find how long between two times, count up to the next hour, then add the rest.",
            "Type durations like 2 hours 15 minutes."
          ],
          targetTime: "30–45 seconds",
          timeLimit: 45,
          questions: [
            { q: "What time is it 2 hours after 4:00?", type: "text", answer: "6:00", accept: ["6.00", "6 o'clock", "6 oclock"], placeholder: "e.g. 4:30", time: 20 },
            { q: "What time is it 30 minutes after 5:15?", type: "text", answer: "5:45", accept: ["5.45"], placeholder: "e.g. 4:30", time: 30 },
            { q: "What time is it 45 minutes after 2:30?", type: "text", answer: "3:15", accept: ["3.15"], placeholder: "e.g. 4:30" },
            { q: "A class starts at 9:20 and ends at 10:05. How long is it?", type: "number", unit: "minutes", answer: 45, explain: "9:20 to 10:00 is 40 minutes, plus 5 more is 45." },
            { q: "What time is it 1 hour 15 minutes after 11:00?", type: "text", answer: "12:15", accept: ["12.15"], placeholder: "e.g. 4:30" },
            { q: "How many minutes are in 2 hours 30 minutes?", type: "number", unit: "minutes", answer: 150, explain: "120 + 30 = 150", time: 30 },
            { q: "Write 135 minutes in hours and minutes.", type: "text", answer: "2 hours 15 minutes", accept: ["2 h 15 min", "2 hrs 15 mins", "2 hr 15 min", "2 hours 15 mins"], placeholder: "e.g. 1 hour 20 minutes" },
            { q: "1 hour 45 minutes + 30 minutes = ?", type: "text", answer: "2 hours 15 minutes", accept: ["2 h 15 min", "2 hrs 15 mins", "2 hr 15 min", "2 hours 15 mins", "135 minutes"], placeholder: "e.g. 1 hour 20 minutes" },
            { q: "A train leaves at 6:30 a.m. and arrives at 9:00 a.m. How long is the journey?", type: "text", answer: "2 hours 30 minutes", accept: ["2 h 30 min", "2 hrs 30 mins", "2 hr 30 min", "2 hours 30 mins", "150 minutes", "2 and a half hours"], placeholder: "e.g. 1 hour 20 minutes" },
            { q: "Meena starts homework at 4:15 p.m. and ends at 5:00 p.m. How long did she work?", type: "number", unit: "minutes", answer: 45 },
            { q: "What time is it 40 minutes before 3:00?", type: "text", answer: "2:20", accept: ["2.20"], placeholder: "e.g. 4:30" },
            { q: "What time is it 3 hours before 1:00 p.m.?", type: "text", answer: "10:00 a.m.", accept: ["10:00 am", "10.00 am", "10 am", "10:00", "10.00"], placeholder: "e.g. 4:30 p.m." },
            { q: "A film begins at 3:45 p.m. and runs for 1 hour 30 minutes. When does it end?", type: "text", answer: "5:15 p.m.", accept: ["5:15 pm", "5.15 pm", "5:15", "5.15"], placeholder: "e.g. 4:30 p.m." },
            { q: "How many seconds are in 1 minute?", type: "number", unit: "seconds", answer: 60, time: 15 },
            { q: "How many seconds are in 2 minutes?", type: "number", unit: "seconds", answer: 120, time: 20 },
            { q: "180 seconds is how many minutes?", type: "number", unit: "minutes", answer: 3, time: 25 },
            { q: "A match starts at 10:30 a.m. and ends at 1:00 p.m. How long is it?", type: "text", answer: "2 hours 30 minutes", accept: ["2 h 30 min", "2 hrs 30 mins", "2 hr 30 min", "2 hours 30 mins", "150 minutes", "2 and a half hours"], placeholder: "e.g. 1 hour 20 minutes" },
            { q: "Rita sleeps at 9:30 p.m. and wakes at 6:30 a.m. How many hours does she sleep?", type: "number", unit: "hours", answer: 9, explain: "9:30 p.m. to 12:00 is 2 hours 30 minutes, and 12:00 to 6:30 a.m. is 6 hours 30 minutes. That makes 9 hours." },
            { q: "A bus journey takes 50 minutes. It leaves at 7:30. When does it arrive?", type: "text", answer: "8:20", accept: ["8.20"], placeholder: "e.g. 4:30" },
            { q: "Which is longer?", type: "mcq", options: ["1 hour", "70 minutes"], answer: "70 minutes", explain: "1 hour is 60 minutes.", time: 20 },
            { q: "Arrange from shortest to longest.", type: "order", answer: ["1 hour", "90 minutes", "1 hour 45 minutes"], time: 40 },
            { q: "How many hours are in 3 days?", type: "number", unit: "hours", answer: 72, explain: "3 × 24 = 72" },
            { q: "A task takes 25 minutes. Anu does 3 such tasks one after another. How long in all?", type: "number", unit: "minutes", answer: 75, explain: "3 × 25 = 75 minutes (1 hour 15 minutes)" },
            { q: "A show starts at 5:50 p.m. and lasts 40 minutes. When does it end?", type: "text", answer: "6:30 p.m.", accept: ["6:30 pm", "6.30 pm", "6:30", "6.30"], placeholder: "e.g. 4:30 p.m." },
            { q: "Which is shorter?", type: "mcq", options: ["100 seconds", "2 minutes"], answer: "100 seconds", explain: "2 minutes is 120 seconds.", time: 25 }
          ]
        },
        {
          id: "calendar",
          title: "Calendar",
          explanation: "A week has 7 days and a year has 12 months.\n\nJanuary, March, May, July, August, October and December have 31 days. April, June, September and November have 30 days. February has 28 days, or 29 in a leap year.",
          workedExample: {
            problem: "The 1st of a month is a Monday. What day is the 15th?",
            steps: [
              "15 − 1 = 14 days later.",
              "14 days is exactly 2 weeks, so the day is the same."
            ],
            answer: "Monday"
          },
          tips: [
            "Dates 7, 14, 21 or 28 days apart fall on the same day of the week.",
            "Knuckle trick: months on your knuckles have 31 days. Months in the gaps have fewer.",
            "A leap year comes every 4 years and has 366 days."
          ],
          targetTime: "25–35 seconds",
          timeLimit: 35,
          questions: [
            { q: "How many days are in a week?", type: "number", unit: "days", answer: 7, time: 10 },
            { q: "How many months are in a year?", type: "number", unit: "months", answer: 12, time: 10 },
            { q: "How many days are in a year (not a leap year)?", type: "number", unit: "days", answer: 365, time: 15 },
            { q: "How many days are in a leap year?", type: "number", unit: "days", answer: 366, time: 15 },
            { q: "How many days are in February in a normal year?", type: "number", unit: "days", answer: 28, time: 15 },
            { q: "Which month has 30 days?", type: "mcq", options: ["March", "April"], answer: "April", shuffle: false, time: 20 },
            { q: "Which month has 31 days?", type: "mcq", options: ["June", "July"], answer: "July", shuffle: false, time: 20 },
            { q: "How many months have 30 days?", type: "number", answer: 4, explain: "April, June, September and November." },
            { q: "Which day comes after Saturday?", type: "mcq", options: ["Friday", "Sunday", "Monday"], answer: "Sunday", time: 15 },
            { q: "Which day comes before Monday?", type: "mcq", options: ["Sunday", "Tuesday", "Saturday"], answer: "Sunday", time: 15 },
            { q: "The 1st is a Wednesday. What day is the 8th?", type: "mcq", options: ["Tuesday", "Wednesday", "Thursday", "Friday"], answer: "Wednesday", shuffle: false, explain: "8 − 1 = 7 days, which is exactly 1 week." },
            { q: "The 3rd is a Friday. What day is the 10th?", type: "mcq", options: ["Thursday", "Friday", "Saturday", "Sunday"], answer: "Friday", shuffle: false },
            { q: "The 1st is a Sunday. What day is the 22nd?", type: "mcq", options: ["Saturday", "Sunday", "Monday", "Tuesday"], answer: "Sunday", shuffle: false, explain: "22 − 1 = 21 days, which is exactly 3 weeks." },
            { q: "Today is Tuesday. What day will it be after 10 days?", type: "mcq", options: ["Thursday", "Friday", "Saturday", "Sunday"], answer: "Friday", shuffle: false, explain: "10 days is 1 week and 3 days. Tuesday + 3 days = Friday." },
            { q: "The 5th is a Monday. What day was the 1st?", type: "mcq", options: ["Wednesday", "Thursday", "Friday", "Saturday"], answer: "Thursday", shuffle: false, explain: "Count back 4 days from Monday: Sunday, Saturday, Friday, Thursday." },
            { q: "How many days are in 2 weeks?", type: "number", unit: "days", answer: 14, time: 15 },
            { q: "How many weeks are in 28 days?", type: "number", unit: "weeks", answer: 4, time: 20 },
            { q: "How many days are in 3 weeks and 2 days?", type: "number", unit: "days", answer: 23, explain: "21 + 2 = 23", time: 25 },
            { q: "Which month comes after August?", type: "mcq", options: ["July", "September", "October"], answer: "September", time: 15 },
            { q: "Which month comes before January?", type: "mcq", options: ["February", "November", "December"], answer: "December", time: 15 },
            { q: "How many days are there from 25 January to 2 February?", type: "number", unit: "days", answer: 8, explain: "25 January to 31 January is 6 days, then 2 more to 2 February.", time: 45 },
            { q: "Rita's birthday is on 12 March and her brother's is on 28 March. How many days apart are they?", type: "number", unit: "days", answer: 16, explain: "28 − 12 = 16" },
            { q: "A leap year comes once every how many years?", type: "number", unit: "years", answer: 4, time: 15 },
            { q: "Is 2028 a leap year?", type: "mcq", options: ["Yes", "No"], answer: "Yes", shuffle: false, explain: "2028 ÷ 4 = 507 with no remainder." },
            { q: "Today is Thursday. What day will it be after 3 weeks?", type: "mcq", options: ["Wednesday", "Thursday", "Friday", "Saturday"], answer: "Thursday", shuffle: false, time: 20 }
          ]
        }
      ]
    },
    {
      id: "fractions",
      title: "Chapter 10: Fractions",
      subtopics: [
        {
          id: "understanding-fractions",
          title: "Understanding Fractions",
          explanation: "A fraction is a part of a whole that is cut into equal parts.\n\nThe bottom number (denominator) tells how many equal parts the whole has. The top number (numerator) tells how many of those parts we are talking about.",
          workedExample: {
            problem: "A pizza is cut into 8 equal slices and 3 are eaten. What fraction is left?",
            steps: [
              "There are 8 slices in all, so the denominator is 8.",
              "Left: 8 − 3 = 5 slices, so the numerator is 5."
            ],
            answer: "5/8"
          },
          tips: [
            "The parts must be equal.",
            "Half = 1/2, quarter = 1/4, three quarters = 3/4.",
            "Type fractions like 3/4."
          ],
          targetTime: "15–20 seconds",
          timeLimit: 20,
          questions: [
            { q: "A pizza is cut into 4 equal parts and 1 is shaded. What fraction is shaded?", type: "text", answer: "1/4", placeholder: "e.g. 3/4" },
            { q: "A shape is divided into 6 equal parts and 2 are shaded. What fraction is shaded?", type: "text", answer: "2/6", accept: ["1/3"], placeholder: "e.g. 3/4" },
            { q: "What is the top number of a fraction called?", type: "mcq", options: ["Numerator", "Denominator"], answer: "Numerator", shuffle: false, time: 15 },
            { q: "What is the bottom number of a fraction called?", type: "mcq", options: ["Numerator", "Denominator"], answer: "Denominator", shuffle: false, time: 15 },
            { q: "In 3/5, what does the 5 tell us?", type: "mcq", options: ["The whole is cut into 5 equal parts", "5 parts are shaded", "There are 5 wholes"], answer: "The whole is cut into 5 equal parts", time: 25 },
            { q: "Write one half in figures.", type: "text", answer: "1/2", placeholder: "e.g. 3/4", time: 15 },
            { q: "Write one quarter in figures.", type: "text", answer: "1/4", placeholder: "e.g. 3/4", time: 15 },
            { q: "Write three quarters in figures.", type: "text", answer: "3/4", placeholder: "e.g. 1/2", time: 15 },
            { q: "A chocolate bar has 6 equal pieces and 2 are eaten. What fraction is left?", type: "text", answer: "4/6", accept: ["2/3"], placeholder: "e.g. 3/4", time: 25 },
            { q: "A circle is divided into 8 equal parts and 5 are shaded. What fraction is not shaded?", type: "text", answer: "3/8", placeholder: "e.g. 3/4", time: 25 },
            { q: "Write \"two thirds\" in figures.", type: "text", answer: "2/3", placeholder: "e.g. 3/4", time: 15 },
            { q: "Write 5/8 in words.", type: "text", answer: "Five eighths", accept: ["five eighth"], placeholder: "e.g. three quarters", time: 30 },
            { q: "How many halves make a whole?", type: "number", answer: 2, time: 15 },
            { q: "How many quarters make a whole?", type: "number", answer: 4, time: 15 },
            { q: "How many thirds make a whole?", type: "number", answer: 3, time: 15 },
            { q: "3/3 is equal to how many wholes?", type: "number", answer: 1, time: 15 },
            { q: "A rope is cut into 5 equal pieces and Rani takes 2. What fraction does she take?", type: "text", answer: "2/5", placeholder: "e.g. 3/4" },
            { q: "A week has 7 days and 2 are weekend days. What fraction of the week is the weekend?", type: "text", answer: "2/7", placeholder: "e.g. 3/4", time: 25 },
            { q: "Out of 10 flowers, 7 are red. What fraction are red?", type: "text", answer: "7/10", placeholder: "e.g. 3/4" },
            { q: "A fraction has numerator 3 and denominator 7. Write it.", type: "text", answer: "3/7", placeholder: "e.g. 3/4" },
            { q: "Which is a unit fraction (numerator 1)?", type: "mcq", options: ["1/5", "2/5"], answer: "1/5", time: 15 },
            { q: "A shape has 4 equal parts and 3 are shaded. What fraction is not shaded?", type: "text", answer: "1/4", placeholder: "e.g. 3/4" },
            { q: "A pizza has 8 slices. Ravi eats 2 and Meena eats 3. What fraction is eaten?", type: "text", answer: "5/8", placeholder: "e.g. 3/4", time: 30 },
            { q: "1/4 of a cake is left. What fraction is eaten?", type: "text", answer: "3/4", placeholder: "e.g. 1/2", time: 25 },
            { q: "What is the numerator of 7/9?", type: "number", answer: 7, time: 15 }
          ]
        },
        {
          id: "comparing-equivalent-fractions",
          title: "Comparing & Equivalent Fractions",
          explanation: "When fractions have the same denominator, the one with the bigger numerator is bigger.\n\nWhen they have the same numerator, the one with the bigger denominator is smaller, because the pieces are smaller.\n\nEquivalent fractions are different names for the same amount, like 1/2 = 2/4.",
          workedExample: {
            problem: "Which is bigger, 3/8 or 5/8?",
            steps: [
              "Both have the same denominator (8), so compare the numerators.",
              "5 is bigger than 3."
            ],
            answer: "5/8 is bigger"
          },
          tips: [
            "Same denominator: bigger numerator means a bigger fraction.",
            "Same numerator: bigger denominator means smaller pieces, so 1/2 is bigger than 1/4.",
            "To make an equivalent fraction, multiply the top and bottom by the same number."
          ],
          targetTime: "20–30 seconds",
          timeLimit: 30,
          questions: [
            { q: "Which is bigger?", type: "mcq", options: ["3/5", "4/5"], answer: "4/5", time: 15 },
            { q: "Which is bigger?", type: "mcq", options: ["2/7", "5/7"], answer: "5/7", time: 15 },
            { q: "Which is bigger?", type: "mcq", options: ["1/2", "1/4"], answer: "1/2", time: 20 },
            { q: "Which is bigger?", type: "mcq", options: ["1/3", "1/6"], answer: "1/3", time: 20 },
            { q: "1/2 = ?/4", type: "number", answer: 2, time: 20 },
            { q: "1/2 = ?/6", type: "number", answer: 3, time: 20 },
            { q: "1/4 = ?/8", type: "number", answer: 2, time: 20 },
            { q: "2/3 = ?/6", type: "number", answer: 4, explain: "Multiply the top and bottom by 2: 2/3 = 4/6." },
            { q: "Is 2/4 equal to 1/2?", type: "mcq", options: ["Yes", "No"], answer: "Yes", shuffle: false, time: 20 },
            { q: "Is 3/6 equal to 1/2?", type: "mcq", options: ["Yes", "No"], answer: "Yes", shuffle: false, time: 20 },
            { q: "Which is greater?", type: "mcq", options: ["3/4", "1/4"], answer: "3/4", time: 15 },
            { q: "Arrange from smallest to biggest.", type: "order", answer: ["1/9", "4/9", "7/9"] },
            { q: "Arrange from biggest to smallest.", type: "order", answer: ["5/5", "3/5", "2/5"] },
            { q: "Which is the smallest?", type: "mcq", options: ["3/8", "5/8", "1/8"], answer: "1/8", time: 20 },
            { q: "Which is more than half of the whole?", type: "mcq", options: ["1/4", "3/4"], answer: "3/4", time: 20 },
            { q: "2/8 ☐ 1/4", type: "compare", answer: "=", explain: "2/8 and 1/4 are the same amount." },
            { q: "5/6 ☐ 3/6", type: "compare", answer: ">", time: 20 },
            { q: "1/2 ☐ 1/3", type: "compare", answer: ">", explain: "Halves are bigger pieces than thirds." },
            { q: "How many eighths make a half?", type: "number", answer: 4, explain: "1/2 = 4/8" },
            { q: "6/8 = ?/4", type: "number", answer: 3, explain: "Divide the top and bottom by 2: 6/8 = 3/4." },
            { q: "Ravi ate 2/5 of a pizza and Meena ate 3/5 of another pizza of the same size. Who ate more?", type: "mcq", options: ["Ravi", "Meena"], answer: "Meena", shuffle: false },
            { q: "Which equals 1 whole?", type: "mcq", options: ["4/4", "4/5"], answer: "4/4", time: 20 },
            { q: "Which is bigger: 1/2 of a pizza or 1/3 of the same pizza?", type: "mcq", options: ["1/2", "1/3"], answer: "1/2", shuffle: false, time: 20 },
            { q: "2/4 + 1/4 = ?", type: "text", answer: "3/4", placeholder: "e.g. 1/2" },
            { q: "5/8 − 2/8 = ?", type: "text", answer: "3/8", placeholder: "e.g. 1/2" }
          ]
        },
        {
          id: "fraction-of-collection",
          title: "Fraction of a Collection & Word Problems",
          explanation: "To find a fraction of a number, divide by the denominator, then multiply by the numerator.\n\nFor example, 3/4 of 12: 12 ÷ 4 = 3, then 3 × 3 = 9.",
          workedExample: {
            problem: "Find 3/4 of 12.",
            steps: [
              "Divide 12 into 4 equal groups: 12 ÷ 4 = 3.",
              "Take 3 of those groups: 3 × 3 = 9."
            ],
            answer: "9"
          },
          tips: [
            "1/2 of a number means divide by 2. 1/4 means divide by 4.",
            "Find 1 part first (divide), then multiply by the numerator.",
            "For measures, change to the smaller unit first: 1/2 hour = 30 minutes."
          ],
          targetTime: "30–45 seconds",
          timeLimit: 40,
          questions: [
            { q: "1/2 of 20 = ?", type: "number", answer: 10, time: 15 },
            { q: "1/4 of 20 = ?", type: "number", answer: 5, time: 20 },
            { q: "1/3 of 12 = ?", type: "number", answer: 4, time: 20 },
            { q: "1/5 of 25 = ?", type: "number", answer: 5, time: 20 },
            { q: "3/4 of 12 = ?", type: "number", answer: 9, time: 30 },
            { q: "2/3 of 9 = ?", type: "number", answer: 6, explain: "9 ÷ 3 = 3, and 3 × 2 = 6.", time: 30 },
            { q: "1/2 of 16 = ?", type: "number", answer: 8, time: 15 },
            { q: "1/10 of 50 = ?", type: "number", answer: 5, time: 20 },
            { q: "2/5 of 15 = ?", type: "number", answer: 6, explain: "15 ÷ 5 = 3, and 3 × 2 = 6.", time: 30 },
            { q: "3/8 of 24 = ?", type: "number", answer: 9, explain: "24 ÷ 8 = 3, and 3 × 3 = 9.", time: 30 },
            { q: "1/2 of ₹40 = ?", type: "money", answer: 20, time: 20 },
            { q: "1/4 of ₹100 = ?", type: "money", answer: 25, time: 20 },
            { q: "3/4 of ₹60 = ?", type: "money", answer: 45, explain: "₹60 ÷ 4 = ₹15, and ₹15 × 3 = ₹45.", time: 30 },
            { q: "How many minutes are in 1/2 an hour?", type: "number", unit: "minutes", answer: 30, time: 15 },
            { q: "How many minutes are in 1/4 of an hour?", type: "number", unit: "minutes", answer: 15, time: 20 },
            { q: "How many centimetres are in 1/2 of a metre?", type: "number", unit: "cm", answer: 50, time: 20 },
            { q: "How many grams are in 1/4 of a kilogram?", type: "number", unit: "g", answer: 250, time: 25 },
            { q: "How many millilitres are in 3/4 of a litre?", type: "number", unit: "mL", answer: 750, explain: "1,000 ÷ 4 = 250, and 250 × 3 = 750.", time: 30 },
            { q: "A class has 30 children and 1/3 are boys. How many are girls?", type: "number", answer: 20, explain: "Boys: 30 ÷ 3 = 10. Girls: 30 − 10 = 20." },
            { q: "A box has 24 chocolates. Ria eats 1/4 of them. How many are left?", type: "number", answer: 18, explain: "She eats 24 ÷ 4 = 6. 24 − 6 = 18 left." },
            { q: "There are 12 mangoes and 1/3 are rotten. How many are good?", type: "number", answer: 8, explain: "Rotten: 12 ÷ 3 = 4. Good: 12 − 4 = 8." },
            { q: "5 friends share a pizza of 10 slices equally. What fraction of the pizza does each get?", type: "text", answer: "1/5", accept: ["2/10"], placeholder: "e.g. 3/4" },
            { q: "Anu has ₹80 and spends 3/4 of it. How much is left?", type: "money", answer: 20, explain: "1/4 is left, and 1/4 of ₹80 = ₹20." },
            { q: "A ribbon 1 m long has 1/5 of it cut off. How many centimetres were cut?", type: "number", unit: "cm", answer: 20, explain: "1 m = 100 cm, and 100 ÷ 5 = 20." },
            { q: "A book has 60 pages. Rita has read 2/3 of it. How many pages are left to read?", type: "number", unit: "pages", answer: 20, explain: "1/3 is left, and 60 ÷ 3 = 20." }
          ]
        }
      ]
    },
    {
      id: "data-handling",
      title: "Chapter 11: Data Handling",
      subtopics: [
        {
          id: "tally-pictographs",
          title: "Tally Marks & Pictographs",
          explanation: "Tally marks count in fives: four lines crossed by a fifth. Here 卌 stands for 5.\n\nA pictograph uses symbols to show data. The key tells you how many each symbol stands for.",
          workedExample: {
            problem: "In a pictograph, each ● stands for 2 children. Banana has 4 ●. How many children like banana?",
            steps: [
              "Read the key first: 1 symbol = 2 children.",
              "4 symbols × 2 = 8."
            ],
            answer: "8 children"
          },
          tips: [
            "Always read the key before reading any values.",
            "Count tally marks in groups of 5, then add the extras.",
            "\"How many more\" means subtract. \"In all\" means add."
          ],
          targetTime: "20–30 seconds",
          timeLimit: 30,
          questions: [
            { q: "How many does one 卌 stand for?", type: "mcq", options: ["4", "5", "10"], answer: "5", shuffle: false, time: 15 },
            { q: "Which shows 8 in tally marks?", type: "mcq", options: ["卌 |||", "卌 ||", "||||||||", "卌 卌"], answer: "卌 |||", time: 20 },
            { q: "Pets in a class (tally marks):\nDog 卌 || · Cat 卌 卌 · Fish 卌 | · Bird |||\n\nHow many dogs?", type: "number", answer: 7 },
            { q: "Pets in a class (tally marks):\nDog 卌 || · Cat 卌 卌 · Fish 卌 | · Bird |||\n\nHow many cats?", type: "number", answer: 10 },
            { q: "Pets in a class (tally marks):\nDog 卌 || · Cat 卌 卌 · Fish 卌 | · Bird |||\n\nHow many fish?", type: "number", answer: 6 },
            { q: "Pets in a class (tally marks):\nDog 卌 || · Cat 卌 卌 · Fish 卌 | · Bird |||\n\nHow many birds?", type: "number", answer: 3 },
            { q: "Pets in a class (tally marks):\nDog 卌 || · Cat 卌 卌 · Fish 卌 | · Bird |||\n\nHow many pets in all?", type: "number", answer: 26, explain: "7 + 10 + 6 + 3 = 26", time: 35 },
            { q: "Pets in a class (tally marks):\nDog 卌 || · Cat 卌 卌 · Fish 卌 | · Bird |||\n\nWhich pet is the most popular?", type: "mcq", options: ["Dog", "Cat", "Fish", "Bird"], answer: "Cat", shuffle: false },
            { q: "Pets in a class (tally marks):\nDog 卌 || · Cat 卌 卌 · Fish 卌 | · Bird |||\n\nWhich pet is the least popular?", type: "mcq", options: ["Dog", "Cat", "Fish", "Bird"], answer: "Bird", shuffle: false },
            { q: "Pets in a class (tally marks):\nDog 卌 || · Cat 卌 卌 · Fish 卌 | · Bird |||\n\nHow many more cats than dogs?", type: "number", answer: 3, explain: "10 − 7 = 3" },
            { q: "Pets in a class (tally marks):\nDog 卌 || · Cat 卌 卌 · Fish 卌 | · Bird |||\n\nHow many dogs and fish together?", type: "number", answer: 13, explain: "7 + 6 = 13" },
            { q: "Pets in a class (tally marks):\nDog 卌 || · Cat 卌 卌 · Fish 卌 | · Bird |||\n\nHow many fewer birds than fish?", type: "number", answer: 3, explain: "6 − 3 = 3" },
            { q: "Favourite fruits (each ● = 2 children):\nMango ●●●●● · Apple ●●● · Banana ●●●● · Orange ●●\n\nHow many children like mango?", type: "number", answer: 10, explain: "5 symbols × 2 = 10" },
            { q: "Favourite fruits (each ● = 2 children):\nMango ●●●●● · Apple ●●● · Banana ●●●● · Orange ●●\n\nHow many children like apple?", type: "number", answer: 6 },
            { q: "Favourite fruits (each ● = 2 children):\nMango ●●●●● · Apple ●●● · Banana ●●●● · Orange ●●\n\nHow many children like banana?", type: "number", answer: 8 },
            { q: "Favourite fruits (each ● = 2 children):\nMango ●●●●● · Apple ●●● · Banana ●●●● · Orange ●●\n\nHow many children like orange?", type: "number", answer: 4 },
            { q: "Favourite fruits (each ● = 2 children):\nMango ●●●●● · Apple ●●● · Banana ●●●● · Orange ●●\n\nHow many children are there in all?", type: "number", answer: 28, explain: "10 + 6 + 8 + 4 = 28", time: 40 },
            { q: "Favourite fruits (each ● = 2 children):\nMango ●●●●● · Apple ●●● · Banana ●●●● · Orange ●●\n\nWhich fruit is the favourite of the most children?", type: "mcq", options: ["Mango", "Apple", "Banana", "Orange"], answer: "Mango", shuffle: false, time: 20 },
            { q: "Favourite fruits (each ● = 2 children):\nMango ●●●●● · Apple ●●● · Banana ●●●● · Orange ●●\n\nWhich fruit is the favourite of the fewest children?", type: "mcq", options: ["Mango", "Apple", "Banana", "Orange"], answer: "Orange", shuffle: false, time: 20 },
            { q: "Favourite fruits (each ● = 2 children):\nMango ●●●●● · Apple ●●● · Banana ●●●● · Orange ●●\n\nHow many more children like mango than apple?", type: "number", answer: 4, explain: "10 − 6 = 4" },
            { q: "Favourite fruits (each ● = 2 children):\nMango ●●●●● · Apple ●●● · Banana ●●●● · Orange ●●\n\nOne more child says they like apple. How many children like apple now?", type: "number", answer: 7, explain: "6 + 1 = 7" },
            { q: "Favourite fruits (each ● = 2 children):\nMango ●●●●● · Apple ●●● · Banana ●●●● · Orange ●●\n\nHow many ● symbols are needed to show 12 children?", type: "number", answer: 6, explain: "12 ÷ 2 = 6" },
            { q: "Favourite fruits (each ● = 2 children):\nMango ●●●●● · Apple ●●● · Banana ●●●● · Orange ●●\n\nHow many children like banana and orange together?", type: "number", answer: 12, explain: "8 + 4 = 12" },
            { q: "Favourite fruits (each ● = 2 children):\nMango ●●●●● · Apple ●●● · Banana ●●●● · Orange ●●\n\nHow many fewer children like orange than banana?", type: "number", answer: 4, explain: "8 − 4 = 4" },
            { q: "Favourite fruits (each ● = 2 children):\nMango ●●●●● · Apple ●●● · Banana ●●●● · Orange ●●\n\nIf the key changes to ● = 3 children, how many children like mango?", type: "number", answer: 15, explain: "5 symbols × 3 = 15" }
          ]
        },
        {
          id: "bar-graphs",
          title: "Bar Graphs",
          explanation: "A bar graph uses bars of different heights to compare numbers.\n\nRead the height of each bar against the scale on the side. The labels along the bottom tell you what each bar is for.",
          workedExample: {
            problem: "Cara read 10 books and Dev read 3. How many more did Cara read?",
            steps: [
              "Read each bar: Cara 10, Dev 3.",
              "10 − 3 = 7."
            ],
            answer: "7 more books"
          },
          tips: [
            "Read the scale first: how much does each line stand for?",
            "Compare bar heights to find the most and the least.",
            "\"How many more\" means subtract. \"Together\" means add."
          ],
          targetTime: "20–30 seconds",
          timeLimit: 30,
          questions: [
            { q: "Books read in a month (bar heights):\nAsha 8 · Ben 5 · Cara 10 · Dev 3 · Esha 6\n\nHow many books did Asha read?", type: "number", answer: 8, time: 15 },
            { q: "Books read in a month (bar heights):\nAsha 8 · Ben 5 · Cara 10 · Dev 3 · Esha 6\n\nHow many books did Ben read?", type: "number", answer: 5, time: 15 },
            { q: "Books read in a month (bar heights):\nAsha 8 · Ben 5 · Cara 10 · Dev 3 · Esha 6\n\nHow many books did Cara read?", type: "number", answer: 10, time: 15 },
            { q: "Books read in a month (bar heights):\nAsha 8 · Ben 5 · Cara 10 · Dev 3 · Esha 6\n\nHow many books did Dev read?", type: "number", answer: 3, time: 15 },
            { q: "Books read in a month (bar heights):\nAsha 8 · Ben 5 · Cara 10 · Dev 3 · Esha 6\n\nHow many books did Esha read?", type: "number", answer: 6, time: 15 },
            { q: "Books read in a month (bar heights):\nAsha 8 · Ben 5 · Cara 10 · Dev 3 · Esha 6\n\nWho read the most books?", type: "mcq", options: ["Asha", "Ben", "Cara", "Dev", "Esha"], answer: "Cara", shuffle: false, time: 20 },
            { q: "Books read in a month (bar heights):\nAsha 8 · Ben 5 · Cara 10 · Dev 3 · Esha 6\n\nWho read the fewest books?", type: "mcq", options: ["Asha", "Ben", "Cara", "Dev", "Esha"], answer: "Dev", shuffle: false, time: 20 },
            { q: "Books read in a month (bar heights):\nAsha 8 · Ben 5 · Cara 10 · Dev 3 · Esha 6\n\nHow many books were read in all?", type: "number", answer: 32, explain: "8 + 5 + 10 + 3 + 6 = 32", time: 40 },
            { q: "Books read in a month (bar heights):\nAsha 8 · Ben 5 · Cara 10 · Dev 3 · Esha 6\n\nHow many more books did Cara read than Ben?", type: "number", answer: 5, explain: "10 − 5 = 5" },
            { q: "Books read in a month (bar heights):\nAsha 8 · Ben 5 · Cara 10 · Dev 3 · Esha 6\n\nHow many books did Asha and Esha read together?", type: "number", answer: 14, explain: "8 + 6 = 14" },
            { q: "Books read in a month (bar heights):\nAsha 8 · Ben 5 · Cara 10 · Dev 3 · Esha 6\n\nWho read more than 7 books? Pick all.", type: "multi", options: ["Asha", "Ben", "Cara", "Dev", "Esha"], answer: ["Asha", "Cara"] },
            { q: "Books read in a month (bar heights):\nAsha 8 · Ben 5 · Cara 10 · Dev 3 · Esha 6\n\nWho read exactly 5 books?", type: "mcq", options: ["Asha", "Ben", "Cara", "Dev", "Esha"], answer: "Ben", shuffle: false, time: 20 },
            { q: "Books read in a month (bar heights):\nAsha 8 · Ben 5 · Cara 10 · Dev 3 · Esha 6\n\nWhat is the difference between the most and the fewest books?", type: "number", answer: 7, explain: "10 − 3 = 7" },
            { q: "Books read in a month (bar heights):\nAsha 8 · Ben 5 · Cara 10 · Dev 3 · Esha 6\n\nArrange the children from fewest books to most.", type: "order", answer: ["Dev", "Ben", "Esha", "Asha", "Cara"], time: 40 },
            { q: "Books read in a month (bar heights):\nAsha 8 · Ben 5 · Cara 10 · Dev 3 · Esha 6\n\nIf 1 square on the graph stands for 2 books, how many squares tall is Cara's bar?", type: "number", answer: 5, unit: "squares", explain: "10 ÷ 2 = 5" },
            { q: "Books read in a month (bar heights):\nAsha 8 · Ben 5 · Cara 10 · Dev 3 · Esha 6\n\nHow many books did Ben and Dev read together?", type: "number", answer: 8, explain: "5 + 3 = 8" },
            { q: "Books read in a month (bar heights):\nAsha 8 · Ben 5 · Cara 10 · Dev 3 · Esha 6\n\nHow many children read fewer than 6 books?", type: "number", answer: 2, explain: "Ben (5) and Dev (3)." },
            { q: "Books read in a month (bar heights):\nAsha 8 · Ben 5 · Cara 10 · Dev 3 · Esha 6\n\nWhat is half of the number of books Cara read?", type: "number", answer: 5 },
            { q: "Books read in a month (bar heights):\nAsha 8 · Ben 5 · Cara 10 · Dev 3 · Esha 6\n\nAsha reads 2 more books. How many has she read now?", type: "number", answer: 10 },
            { q: "Books read in a month (bar heights):\nAsha 8 · Ben 5 · Cara 10 · Dev 3 · Esha 6\n\nWhich two children together read 14 books?", type: "mcq", options: ["Asha and Esha", "Cara and Dev", "Ben and Cara", "Ben and Esha"], answer: "Asha and Esha", explain: "8 + 6 = 14" },
            { q: "On a bar graph of books read, what does the side (vertical) scale show?", type: "mcq", options: ["The number of books", "The names of the children", "The days of the week"], answer: "The number of books", time: 20 },
            { q: "On a bar graph of books read, what do the labels along the bottom show?", type: "mcq", options: ["The number of books", "The names of the children", "The colours of the bars"], answer: "The names of the children", time: 20 },
            { q: "Books read in a month (bar heights):\nAsha 8 · Ben 5 · Cara 10 · Dev 3 · Esha 6\n\nDev reads 4 more books. How many has he read now?", type: "number", answer: 7 },
            { q: "Books read in a month (bar heights):\nAsha 8 · Ben 5 · Cara 10 · Dev 3 · Esha 6\n\nHow many children are shown in the graph?", type: "number", answer: 5, time: 15 },
            { q: "Books read in a month (bar heights):\nAsha 8 · Ben 5 · Cara 10 · Dev 3 · Esha 6\n\nHow many books did the two highest readers read together?", type: "number", answer: 18, explain: "Cara 10 + Asha 8 = 18" }
          ]
        },
        {
          id: "tables-word-problems",
          title: "Reading Tables & Data Word Problems",
          explanation: "A table lists data in rows and columns.\n\nFind the right row and column, write down the numbers you need, then add, subtract or compare.",
          workedExample: {
            problem: "Thursday sales are 42 and Wednesday sales are 18. How many more were sold on Thursday?",
            steps: [
              "Find each value in the table: Thursday 42, Wednesday 18.",
              "42 − 18 = 24."
            ],
            answer: "24 more"
          },
          tips: [
            "Put a finger on the row and another on the column before reading a value.",
            "Write down the numbers you need before you calculate.",
            "Estimate first to check your answer."
          ],
          targetTime: "30–40 seconds",
          timeLimit: 40,
          questions: [
            { q: "Notebooks sold in a school shop:\nMon 25 · Tue 30 · Wed 18 · Thu 42 · Fri 35\n\nHow many notebooks were sold on Monday?", type: "number", answer: 25, time: 15 },
            { q: "Notebooks sold in a school shop:\nMon 25 · Tue 30 · Wed 18 · Thu 42 · Fri 35\n\nHow many notebooks were sold on Thursday?", type: "number", answer: 42, time: 15 },
            { q: "Notebooks sold in a school shop:\nMon 25 · Tue 30 · Wed 18 · Thu 42 · Fri 35\n\nOn which day were the most notebooks sold?", type: "mcq", options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], answer: "Thursday", shuffle: false, time: 20 },
            { q: "Notebooks sold in a school shop:\nMon 25 · Tue 30 · Wed 18 · Thu 42 · Fri 35\n\nOn which day were the fewest notebooks sold?", type: "mcq", options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], answer: "Wednesday", shuffle: false, time: 20 },
            { q: "Notebooks sold in a school shop:\nMon 25 · Tue 30 · Wed 18 · Thu 42 · Fri 35\n\nHow many notebooks were sold in the whole week?", type: "number", answer: 150, explain: "25 + 30 + 18 + 42 + 35 = 150", time: 50 },
            { q: "Notebooks sold in a school shop:\nMon 25 · Tue 30 · Wed 18 · Thu 42 · Fri 35\n\nHow many more notebooks were sold on Friday than on Tuesday?", type: "number", answer: 5 },
            { q: "Notebooks sold in a school shop:\nMon 25 · Tue 30 · Wed 18 · Thu 42 · Fri 35\n\nHow many notebooks were sold on Monday and Tuesday together?", type: "number", answer: 55 },
            { q: "Notebooks sold in a school shop:\nMon 25 · Tue 30 · Wed 18 · Thu 42 · Fri 35\n\nOn which days were more than 30 notebooks sold? Pick all.", type: "multi", options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], answer: ["Thursday", "Friday"], explain: "Tuesday is exactly 30, which is not more than 30." },
            { q: "Notebooks sold in a school shop:\nMon 25 · Tue 30 · Wed 18 · Thu 42 · Fri 35\n\nHow many notebooks were sold on Wednesday and Friday together?", type: "number", answer: 53 },
            { q: "Notebooks sold in a school shop:\nMon 25 · Tue 30 · Wed 18 · Thu 42 · Fri 35\n\nHow many more notebooks were sold on Friday than on Monday?", type: "number", answer: 10 },
            { q: "Notebooks sold in a school shop:\nMon 25 · Tue 30 · Wed 18 · Thu 42 · Fri 35\n\nWhat is the difference between the most and the fewest sales?", type: "number", answer: 24, explain: "42 − 18 = 24" },
            { q: "Notebooks sold in a school shop:\nMon 25 · Tue 30 · Wed 18 · Thu 42 · Fri 35\n\nEach notebook costs ₹10. How much money came from Monday?", type: "money", answer: 250 },
            { q: "Notebooks sold in a school shop:\nMon 25 · Tue 30 · Wed 18 · Thu 42 · Fri 35\n\nEach notebook costs ₹10. How much money came from Friday?", type: "money", answer: 350 },
            { q: "Notebooks sold in a school shop:\nMon 25 · Tue 30 · Wed 18 · Thu 42 · Fri 35\n\n8 more notebooks are sold on Wednesday. What is Wednesday's total now?", type: "number", answer: 26 },
            { q: "Notebooks sold in a school shop:\nMon 25 · Tue 30 · Wed 18 · Thu 42 · Fri 35\n\nOn how many days were fewer than 30 notebooks sold?", type: "number", answer: 2, unit: "days", explain: "Monday (25) and Wednesday (18)." },
            { q: "Notebooks sold in a school shop:\nMon 25 · Tue 30 · Wed 18 · Thu 42 · Fri 35\n\nEstimate the total for the week by rounding each day to the nearest ten.", type: "number", answer: 160, explain: "30 + 30 + 20 + 40 + 40 = 160", time: 50 },
            { q: "Notebooks sold in a school shop:\nMon 25 · Tue 30 · Wed 18 · Thu 42 · Fri 35\n\nHow many notebooks were sold from Monday to Wednesday?", type: "number", answer: 73, explain: "25 + 30 + 18 = 73" },
            { q: "Notebooks sold in a school shop:\nMon 25 · Tue 30 · Wed 18 · Thu 42 · Fri 35\n\nArrange the daily sales from highest to lowest.", type: "order", answer: ["42", "35", "30", "25", "18"] },
            { q: "Notebooks sold in a school shop:\nMon 25 · Tue 30 · Wed 18 · Thu 42 · Fri 35\n\nWhat is half of Thursday's sales?", type: "number", answer: 21 },
            { q: "Notebooks sold in a school shop:\nMon 25 · Tue 30 · Wed 18 · Thu 42 · Fri 35\n\nWhich two days next to each other sold 77 notebooks in all?", type: "mcq", options: ["Thursday and Friday", "Monday and Tuesday", "Tuesday and Wednesday", "Wednesday and Thursday"], answer: "Thursday and Friday", explain: "42 + 35 = 77" },
            { q: "Notebooks sold in a school shop:\nMon 25 · Tue 30 · Wed 18 · Thu 42 · Fri 35\n\nOn Saturday, the shop sells 20 more than on Wednesday. How many were sold on Saturday?", type: "number", answer: 38, explain: "18 + 20 = 38" },
            { q: "Notebooks sold in a school shop:\nMon 25 · Tue 30 · Wed 18 · Thu 42 · Fri 35\n\nHow many fewer notebooks were sold on Tuesday and Wednesday together than on Thursday and Friday together?", type: "number", answer: 29, explain: "30 + 18 = 48, 42 + 35 = 77, and 77 − 48 = 29.", time: 60 },
            { q: "Notebooks sold in a school shop:\nMon 25 · Tue 30 · Wed 18 · Thu 42 · Fri 35\n\nThe 150 notebooks sold in the week are packed in boxes of 10. How many boxes are needed?", type: "number", answer: 15, unit: "boxes" },
            { q: "Notebooks sold in a school shop:\nMon 25 · Tue 30 · Wed 18 · Thu 42 · Fri 35\n\nHow many days of sales are shown in the table?", type: "number", answer: 5, unit: "days", time: 15 },
            { q: "Notebooks sold in a school shop:\nMon 25 · Tue 30 · Wed 18 · Thu 42 · Fri 35\n\nOn which day was the number sold closest to 30?", type: "mcq", options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], answer: "Tuesday", shuffle: false, explain: "Tuesday sold exactly 30.", time: 20 }
          ]
        }
      ]
    }
  ]
};
