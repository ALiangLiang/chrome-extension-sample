document.getElementById('btn').onclick = function() {
  chrome.runtime.sendMessage({
    text: '嗯嗯嗯嗯嗯爛機車發不動嗯嗯嗯嗯嗯爛機車發不動嗯嗯嗯嗯嗯爛機車發不動嗯嗯嗯嗯嗯爛機車發不動'
  }, function() {
    alert('response');
  })
}
