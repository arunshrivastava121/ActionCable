import consumer from "./consumer"

consumer.subscriptions.create("ChatChannel", {
  connected() {
    console.log('hey jack');
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    var message = $('#chatbox');
    message.append(data['message']);
    message.scrollTop(message[0].scrollHeight);  
    // Called when there's incoming data on the websocket for this channel
  }
});
