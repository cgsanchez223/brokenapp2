// When given a valid string input of a time, outputs will spell the input
// ex
// input: 00:00
// expected output: midnight
// input: 06:30
// expected output: six thirty am

function timeWord(str) {
    // Validate the input. Must be a string

    if (typeof str !== "string") {
        throw new Error("Input must be a string")
    }

    // We need to ensure inputs are given in "00:00" or "ab:cd" format
    const time = str.split(":");

    const hour = parseInt(time[0]);
    const minute = parseInt(time[1]);

    // Also need to make sure hour and minutes are following proper clock rules
    if (hour > 23 || minute > 59 || hour < 0 || minute < 0)
     throw new Error("Invalid time");

    // In order to translate the numbers into a string of letters, we have to create a translation guide
    const timeDict = {
        0: "twelve",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "one",
        14: "two",
        15: "three",
        16: "four",
        17: "five",
        18: "six",
        19: "seven",
        20: "eight",
        21: "nine",
        22: "ten",
        23: "eleven",
    };

    // Output to return result
    let output = "";
    output += timeDict[hour];

    // Used to append am or pm at the end of output
    const amOrPm = hour <= 11 ? " am" : " pm";

    // If hour is 0, return midnight. If hour is twelve, return noon
    if (minute == 0) {
        if (hour == 0) return "midnight";
        else if (hour == 12) return "noon";
        else return output + " o'clock" + amOrPm;
    }

    // if minute is > 0 < 10, appen "oh" at end - 5:06 = five oh six
    else if (minute > 0 && minute < 10) {
        output += " oh " + timeDict[minute] + amOrPm;
        return output;
    }

    // Other scenarios = [hr] + [minute] + [am/pm]
    else {
        // Split minute into 2 digits
        const arrMinute = (minute + "").split("");

        // Working with minute pronunciation - 00:23 - twelve twenty three
        const firstDigitMinute = {
            2: "twenty",
            3: "thirty",
            4: "fourty",
            5: "fifty",
            6: "sixty"
        };

        // Examples mostly from 11 - 19. 11 = eleven, 12 = twelve
        if (arrMinute[0] == "1") {
            switch (arrMinute[1]) {
                case "1":
                    output += " eleven";
                    break;
                case "2":
                    output += " twelve";
                case "3":
                    output += " thirteen";
                    break;
                case "4":
                    output += " fourteen";
                    break;
                case "5":
                    output += " fifteen";
                    break;
                case "6":
                    output += " sixteen";
                    break;
                case "7":
                    output += " seventeen";
                    break;
                case "8":
                    output += " eighteen";
                    break;
                case "9":
                    output += " nineteen";
                    break;
            }
            return output + amOrPm;
        }
        // Putting it together
        else {
            output += " " + firstDigitMinute[arrMinute[0]];
            if (arrMinute[1] == 0) {
                return output + amOrPm;
            } else {
                output += " " + timeDict[arrMinute[1]] + amOrPm;
            }
        }
    }

    return output;
}

module.exports = timeWord;