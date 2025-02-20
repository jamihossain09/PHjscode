function cashOut(money){
    if(typeof money!=="number" || isNaN(money) ){
      return "Invalid";
    }
    if(money<0){
      return "Invalid";
    }
    const chargePercentage=1.75;
    const charge = (money * chargePercentage) / 100;
   return charge;
  }



function electionResult(votes) {
    if (!Array.isArray(votes)) {
      return "Invalid";
    }
  
    let mangoVotes = 0;
    let bananaVotes = 0;
  
    for (const vote of votes) {
      if (vote.toLowerCase() === "mango") {
        mangoVotes++;
      } else if (vote.toLowerCase() === "banana") {
        bananaVotes++;
      }
    }
  
    if (mangoVotes > bananaVotes) {
      return "Mango";
    } else if (bananaVotes > mangoVotes) {
      return "Banana";
    } else {
      return "Draw";
    }
  }


  function isBestFriend(person1, person2) {
    if (typeof person1 !== 'object' || person1 === null || typeof person2 !== 'object' || person2 === null) {
      return "Invalid";
    }
  
    if (!person1.name || !person1.roll || !person1.bestFriend || !person2.name || !person2.roll || !person2.bestFriend) {
      return "Invalid";
    }
  
  
    if (person1.bestFriend === person2.roll && person2.bestFriend === person1.roll) {
      return true;
    } else {
      return false;
    }
  }