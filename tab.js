var text;var thing;var Blanky = prompt("What do you want to add to the cart?\n1=Galaxy\n2=Galaxy set\n3=Clever\n4=Clever Set\n5=Dancy blue\n6=Daydreamer\n7=Nimbus\n8=Triple scoop set\n9=Tulaceratops\n10=secret garden set \n11=Dancy red");switch(Blanky) {case "1":text = "Galaxy Blanket.";var thing="7818388673";break;case "2":text="Galaxy Set";var thing="25799915015";break;case "4":text = "Clever set";var thing="13943465287";break;case "3":text="Clever blanket";var thing="8315201857"; break;case "11":text="Dancy red";var thing="7979845889";break;case "5":text="Dancy blue";var thing="16626402119";break;case "6":text="Daydreamer";var thing="11775411399";break;case "7":text="Nimbus";var thing="31625896074"; break;case "8":text="Triple scoot set";var thing="26969469255"; break;case "9":text="Tulaceratops";var thing="26969802951"; break;case "10":text="Secret garden set";var thing="20151489863"; break;default:alert("You didn't select one...");break;}if (thing==undefined){}else{window.location.href = 'http://www.tulababycarriers.com/cart/add?id='+thing+'&quantity=1&add=';}