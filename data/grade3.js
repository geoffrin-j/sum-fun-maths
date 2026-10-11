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
            { q: "A number has 7 in ten-thousands, 0 in thousands, 3 in hundreds, 5 in tens and 1 in ones. Write it.", type: "number", answer: 70351, time: 25 }
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
            { q: "Which rods are empty for 30,709?", type: "multi", options: ["Ten-thousands", "Thousands", "Hundreds", "Tens", "Ones"], answer: ["Thousands", "Tens"] }
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
            { q: "Using 5, 0, 7 once each, how many 3-digit numbers can be made?", type: "number", answer: 4, explain: "507, 570, 705 and 750. 0 can't go first.", time: 40 }
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
            { q: "A school has 524 boys and 487 girls. How many students?", type: "number", answer: 1011, time: 45 }
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
            { q: "A shop sold 189 pencils and 412 pens. Estimate the total to the nearest ten.", type: "number", answer: 600, time: 30 }
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
            { q: "Anu paid ₹150.75 for a book and ₹49.25 for a pen. Total?", type: "money", answer: 200, time: 40 }
          ]
        }
      ]
    }
  ]
};
