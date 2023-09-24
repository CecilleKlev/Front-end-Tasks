function extractNumbersFromURLs(urls){
    //initialization
    const output = [];

    //Regular expression to match numbers in the URLs (Regex)
    /*
    Explaination of regex:
    it defines a regular expression pattern '\/(\d+)\/assets\//':
    - \/: Matches a forward slash / character
    - (\d+): Matches one or more digits and captures them within parentheses.
    - \/assets\/: Matches the /assets/ string in the URL.
    */ 
    const regex = /\/(\d+)\/assets\//;

    //Initiating for - of loop to iterate through each URL in the 'urls' array
    for(const url of urls){
        const match = url.match(regex);   //use 'match method of the URL string to search for matches of the regular expression pattern (regex), then store in match variable
        if(match && match[1]){
            const number = parseInt(match[1], 10);
            output.push(number); //pushe parsed integer into output array
        }
    }
    return output;
}

//Usage
const urls = [
    'https://www.example.com/public/12765/assets/images/thumbs/5/40_40/image1.jpg',
    'https://www.example.com/private/assets/76345/images/thumbs/12/42_46/image2.jpg',
    'https://www.example.com/protected/assets/images/35678/thumbs/100/35_40/image3.jpg'
];

const output = extractNumbersFromURLs(urls); //call the function
console.log(output); // Output: [12765, 76345, 35678]