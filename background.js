// chrome.tts.speak('創科好棒棒，trunk is perfect')

chrome.runtime.onMessage.addListener(function(req, sender, sendResponse) {
  console.log(req)
  chrome.tts.speak(req.text)
  sendResponse();
})
