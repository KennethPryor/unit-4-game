$(document).ready(function() {
    // let megalodon = {health: 150, attackPower: 8, counterAttack: 15};
    function Creature(name, health, attackPower, counterAttack) {
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
        this.counterAttack = counterAttack;
    };

    let megalodon = new Creature("Megalodon", 150, 4, 15);
    let giantSquid = new Creature("Giant Squid", 120, 3, 20);
    let killerWhales = new Creature("Killer Whale", 100, 3, 18);
    let greatWhite = new Creature("Great White", 90, 2, 15);

    let playerMoves = {
        calcAttack: function() {

        }
    }

    let megHealth = document.getElementById("megHealth");
    $("#megHealth").text("Health: " + megalodon.health);
    let squidHealth = document.getElementById("squidHealth");
    $("#squidHealth").text("Health: " + giantSquid.health);
    let whaleHealth = document.getElementById("whaleHealth");
    $("#whaleHealth").text("Health: " + killerWhales.health);
    let greatHealth = document.getElementById("greatHealth");
    $("#greatHealth").text("Health: " + greatWhite.health);
    
    let attackerChosen = false;
    let defenderChosen = false;
    let enemy = false;
    let charChoice = [];
    let defenderChoice = [];


    $(".megalodon").on("click", function() {
      console.log("Megalodon is Selected")
      if (attackerChosen == false) {
        $(".megalodon").appendTo("#attacker");
        $(".megalodon").addClass("attacker");
        $(".megalodon").removeClass("col-lg-3");
        $(".megalodon").addClass("col-lg-12");
        charChoice.push(megalodon);
        attackerChosen = true;
        console.log(charChoice)
       } else if ((attackerChosen == true) && (defenderChosen == false)) {
           $(".megalodon").appendTo("#defender");
           $(".megalodon").addClass("defender");
           $(".megalodon").removeClass("col-lg-3");
           $(".megalodon").addClass("col-lg-12");
           defenderChoice.push(megalodon);
           defenderChosen = true;
        }});
    $(".giantSquid").on("click", function() {
      console.log("giantSquid is Selected")
      if (attackerChosen == false) {
        $(".giantSquid").appendTo("#attacker");
        $(".giantSquid").addClass("attacker");
        $(".giantSquid").removeClass("col-lg-3");
        $(".giantSquid").addClass("col-lg-12");
        charChoice.push(giantSquid);
        attackerChosen = true;
       } else if ((attackerChosen == true) && (defenderChosen == false)) {
           $(".giantSquid").appendTo("#defender");
           $(".giantSquid").addClass("defender");
           $(".giantSquid").removeClass("col-lg-3");
           $(".giantSquid").addClass("col-lg-12");
           defenderChoice.push(giantSquid);
           defenderChosen = true;
    }});  
    $(".greatWhite").on("click", function() {
        console.log("greatWhite is Selected")
        if (attackerChosen == false) {
          $(".greatWhite").appendTo("#attacker");
          $(".greatWhite").addClass("attacker");
          $(".greatWhite").removeClass("col-lg-3");
          $(".greatWhite").addClass("col-lg-12");
          charchoice.push(greatWhite)
          attackerChosen = true;
         } else if ((attackerChosen == true) && (defenderChosen == false)) {
             $(".greatWhite").appendTo("#defender");
             $(".greatWhite").addClass("defender");
             $(".greatWhite").removeClass("col-lg-3");
             $(".greatWhite").addClass("col-lg-12");
             defenderChoice.push(greatWhite);
             defenderChosen = true;
    }}); 
    $(".killerWhales").on("click", function() {
        console.log("killerWhales is Selected")
        if (attackerChosen == false) {
          $(".killerWhales").appendTo("#attacker");
          $(".killerWhales").addClass("attacker");
          $(".killerWhales").removeClass("col-lg-3");
          $(".killerWhales").addClass("col-lg-12");
          attackerChosen = true;
         } else if ((attackerChosen == true) && (defenderChosen == false)) {
             $(".killerWhales").appendTo("#defender");
             $(".killerWhales").addClass("defender");
             $(".killerWhales").removeClass("col-lg-3");
             $(".killerWhales").addClass("col-lg-12");
             defenderChosen = true;
    }});   

    let bgText = document.getElementById("#backgroundtext");
    
    if (attackerChosen && defenderChosen == false) {
        $("#backgroundtext").text("Choose your character");
    } else if ((attackerChosen == true) && (defenderChosen == false)) {
        $("#backgroundtext").text("Choose your opponent");
    };
    
    $("#attackButton").on("click", function() {
       defenderChoice[0].health = defenderChoice[0].health - charChoice[0].attackPower;
       console.log(defenderChoice[0].health);
       charChoice[0].attackPower = charChoice[0].attackPower * 2;
       console.log(charChoice[0].attackPower);
       charChoice[0].health = charChoice[0].health - defenderChoice[0].counterAttack;
       console.log(charChoice[0].health);
       $("#megHealth").text("Health: " + megalodon.health);
       $("#squidHealth").text("Health: " + giantSquid.health);
       $("#whaleHealth").text("Health: " + killerWhales.health);
       $("#greatHealth").text("Health: " + greatWhite.health);
       if (defenderChoice[0].health < 0) {
           defenderChoice.splice();
           $(".defender").appendTo("#dead");
           $("#dead").removeClass(".defender");
           $("#dead").hide();
           defenderChosen = false;
        }
        if (charChoice[0].health < 0) {
            alert("You have Lost! Refresh to play again.")
        }
    });


           
       
 












    });