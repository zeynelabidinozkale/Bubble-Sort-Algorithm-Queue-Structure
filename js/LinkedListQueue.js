// Zeynel Abidin Özkale
// 2014556052
// II education
function linkedListQueue(){
  this.head=null;
}
linkedListQueue.prototype.dequeue = function(){
  var current = this.head;
  //kuyruktan çıkarma işlemi
  //eğer size 1 veya daha küçükse listeyi ortadan kaldırıyoruz
  if(this.size() <= 1){
    this.head = null;
  }
  var count = 0;
  var size = this.size()-1;
  while(current !== null){
    if(count == size){
      //Listenin son (kuyruğa ilk giren) elemanına buradan ulaşıyoruz
      //ve elemanı siliyoruz
      prev.next=null;
      return true;
    }
    //eğer son eleman değilse bir öncekini prev değişkeninde tutup devam ediyoruz.
    prev = current;
    current = current.next;
    count++;
  }
}
linkedListQueue.prototype.enqueue = function(val){
  var newNode = {
    data: val,
    next: this.head
  }
  this.head = newNode;
//yeni eleman ekleme işlemi
}
linkedListQueue.prototype.size = function(){
  var current = this.head;
  var count = 0;
  while(current !== null){
    count++;
    current = current.next;
  }
  //tüm listeyi sayıyoruz ve eleman sayısını geri döndürüyoruz
  return count;
}
linkedListQueue.prototype.printHtml = function(){
  //Listeyi html formatında geri döndürüyoruz
  var htmlContent ="";
  var current = this.head;
  while (current !== null) {
    htmlContent += "<span class='stackElement'>";
    htmlContent += current.data;
    htmlContent +="</span>";
    current = current.next;
  }
  return htmlContent;
}
linkedListQueue.prototype.printSortedStack = function(arr){
  // Sıralanmış isteyi html formatında döndürüyoruz
  var htmlContent ="";
  var current = this.head;
  if(arr){
    for(var i = 0; i < arr.length; i++){
      htmlContent += "<span class='stackElement'>";
      htmlContent += arr[i];
      htmlContent +="</span>";
    }
  }
  else{
    while (current !== null) {
      htmlContent += "<span class='stackElement'>";
      htmlContent += current.data;
      htmlContent +="</span>";
      current = current.next;
    }
  }
  return htmlContent;
}
linkedListQueue.prototype.nonRecbubbleSort = function() {
  $('.fullStackNonRecResult').fadeIn(200).html(this.printSortedStack());
    var arr = [];
    var current = this.head;
    var index=0;
    while(current!=null){
      arr[index]=current.data;
      current=current.next;
      index++;
    }
    var n = arr.length;
      for (var i = 0; i < n-1; i++){
        for (var j = 0; j < n-i-1; j++){
          if (parseInt(arr[j]) > parseInt(arr[j+1]))
          {
              var temp = arr[j];
              arr[j] = arr[j+1];
              arr[j+1] = temp;
              $('.fullQueueNonRecResult').fadeIn(500).append( linkedListQueue.printSortedStack(arr) +"<br>");
          }
        }
      }
  return linkedListQueue;
}
function recurbubbleSort(arr, n)
{
  if (n == 1)
  return;

for (var i=0; i<n-1; i++){
      if (parseInt(arr[i]) > parseInt(arr[i+1]))
      {
          var temp = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = temp;
          $('.fullQueueRecResult').fadeIn(500).append(linkedListQueue.printSortedStack(arr)+"<br>");
      }
    }
    recurbubbleSort(arr, n-1);
}
linkedListQueue.prototype.recBubbleSort = function() {
  $('.fullStackRecResult').fadeIn(200).html(this.printSortedStack());
    var arr = [];
    var current = this.head;
    var index=0;
    while(current!=null){
      arr[index]=current.data;
      current=current.next;
      index++;
    }
    recurbubbleSort(arr, arr.length);
  return linkedListQueue;
}
var linkedListQueue = new linkedListQueue();
