export function scrollToBottom() {
    var objDiv = document.getElementById("chat-container");
    objDiv.scrollTop = objDiv.scrollHeight;
  }
export function playAudio() {
    const audio = new Audio('https://proxy.notificationsounds.com/notification-sounds/for-sure-576/download/file-sounds-1123-for-sure.mp3');
    audio.play();
}