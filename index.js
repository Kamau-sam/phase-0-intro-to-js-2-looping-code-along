const names = ["Guadalupe", "Ollie", "Aki"];
const event = "gift";
function writeCards(names, event) {
  let thankMessage = [];
  for (let i = 0; i < names.length; i++) {
    thankMessage.push(
      `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    );
  }
  return thankMessage;
}

function countDown(startingNumber) {
  for (let i = startingNumber; i >= 0; i--) {
    console.log(i);
  }
}
