function defaultOpen(){
  document.getElementById("defaultOpen").click();
  $('.fullQueueNonRecResult').hide();
  $('.fullQueueRecResult').hide();
}
$('#enqueueButton').on('click', function() {
  var inputValue = $('#enqueueInput').val();
  if(inputValue){
   $('.fullList').fadeOut(1);
    linkedListQueue.enqueue(inputValue);
    document.getElementById('enqueueInput').value = '';
  }
  if(linkedListQueue.size() === 0){
    $('.fullList').html("Kuyruk Bos");
  }else {
    $('.fullList').fadeIn(200).html(linkedListQueue.printHtml());
  }

});
$('#dequeueButton').on('click', function() {
   $('.fullList').fadeOut(1);
    if(linkedListQueue.size() >= 1){
      linkedListQueue.dequeue();
      if(linkedListQueue.size()>0){
        $('.fullList').fadeIn(200).html(linkedListQueue.printHtml());
      }else {
        $('.fullList').fadeIn(200).html("Kuyruk Bos");
      }
  }else {
    $('.fullList').fadeIn(200).html("Kuyruk Bos");
  }
});

$('#searchQueue').on('click',function(){
  var inputValue = $('#enqueueInput').val();
  if(inputValue){
    document.getElementById('enqueueInput').value = '';
  }
  if(linkedListQueue.size() === 0){
    $('.fullList').html("Kuyruk Bos");
  }else {
    alert("none");
  }
});
$('#nonRecSortButton').on('click', function() {
   $('.fullQueueNonRecResult').fadeOut(1);
    if(linkedListQueue.size() === 0){
    $('.fullQueueNonRecResult').fadeIn(200).html("Kuyruk Bos");
  }else {
        linkedListQueue.nonRecbubbleSort();
  }
});
$('#recSortButton').on('click', function() {
   $('.fullQueueRecResult').fadeOut(1);
    if(linkedListQueue.size() === 0){
    $('.fullQueueRecResult').fadeIn(200).html("Kuyruk Bos");
  }else {
        linkedListQueue.recBubbleSort();
  }
});
/*Menu tabları*/
function openTab(evt, tabname) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabname).style.display = "block";
  evt.currentTarget.className += " active";
}
