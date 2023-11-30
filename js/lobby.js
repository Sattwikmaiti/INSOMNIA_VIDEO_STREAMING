let form = document.getElementById('lobby__form')

let displayName = sessionStorage.getItem('display_name')
if(displayName){
    form.name.value = displayName
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    sessionStorage.setItem('display_name', e.target.name.value)

    let inviteCode = e.target.room.value
    if(!inviteCode){
       alert("Please generate a RoomId or Give your RoomId")
    }
    else {
        window.location = `room.html?room=${inviteCode}`
        localStorage.setItem('roomId', inviteCode);
    }
   
})


function generateAndCopyRoomId() {
    // Generate a unique room ID using uuid library
    const roomId = crypto.randomUUID();
    console.log("Random UUID -> " +crypto.randomUUID());
    // Create a textarea element to copy text to clipboard
    const textarea = document.createElement('textarea');
    textarea.value = roomId;
    document.body.appendChild(textarea);

    // Select and copy the text
    textarea.select();
    document.execCommand('copy');

    // Remove the textarea from the DOM
    document.body.removeChild(textarea);

    // Provide feedback to the user (you can use alert, console.log, or any other method)

    localStorage.setItem('roomId', roomId);
    alert('Room ID copied to clipboard: ' + roomId);
}