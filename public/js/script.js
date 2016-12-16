(function () {

  var socket = io()

  // These are set when the user chooses a character from the select character
  // modal.
  var character = null // Name of the character
  var avatar = null // Link to avatar image

  $(document).ready(function () {

    // Show character select modal as soon as the page has finished loading.
    $('#character-select').modal({
      backdrop: 'static',
      keyboard: false
    })

    // Handle changing to a different character
    $('#character').change(event => {
      var avatar = $('#character').find(":selected").attr('avatar')
      $('#avatar').attr('src', avatar)
    })

    // Handle clicking okay on character select modal
    $('#character-select-button').click(function (event) {
      $("#theme-tune").each(function () { this.pause() })
      avatar = $('#avatar').attr('src')
      character = $('#character').val()
    })
  })

  // Handle user submitting input
  $('#input-message').submit(function (event) {

    // Stop the form from sending an HTTP request
    event.preventDefault()

    if ($('#text').val().length === 0)
      return // No text given - do nothing

    // Send the message to the server
    var text = $('#text').val()
    socket.emit('boosh message', {
      avatar: avatar,
      character: character,
      text: text
    })

    // Clear the text box
    $('#text').val('')
  })

  // Handle receiving a message from the server
  socket.on('boosh message', function (data) {

    console.log('message from server')

    var avatar = data.avatar
    var character = data.character
    var text = data.text

    // Show the message
    $('#messages')
      .append(
        `<li>
          <div class="span4">
            <img class="img-responsive img-rounded" src="${avatar}"/>
            <div class="content-heading">
              <h3>${character}</h3>
              ${text}
            </div>
          </div>
        </li>`)

    // Scroll to the bottom of the page
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
  })

})()
