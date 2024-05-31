/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFT_s = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name_, subject_, group_, age_) {
const NFT = {
    "name" : name_,
    "subject" : subject_,
    "group" : group_,
    "age" : age_
   }
   NFT_s.push(NFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()Tg
function listNFTs () {
for(let i=0;i<=NFT_s.length-1;i++)
    {
        console.log("\nID:\t\t\t"+(i+1));
         console.log("Name:\t\t"+NFT_s[i].name);
         console.log("Subject:\t"+NFT_s[i].subject);
         console.log("Group:\t\t"+NFT_s[i].group);
         console.log("Age:\t\t"+NFT_s[i].age);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log("Number of NFT's minted: "+ NFT_s.length)
}

// call your functions below this line
mintNFT("Aman", "Maths", "A", 17)
mintNFT("Andrew", "Biology", "B", 18)
mintNFT("Stephen", "English", "B", 17)
mintNFT("Raj", "Chemistry", "A", 19)
listNFTs();
getTotalSupply();
