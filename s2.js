  // 获取窗口的宽度和高度
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // 生成随机的 top 和 left 值
  const randomTop = Math.floor(Math.random() * (windowHeight - 100)) + 1;
  const randomLeft = Math.floor(Math.random() * (windowWidth - 200)) + 1;

  // 设置元素的 top 和 left 值
  const myDiv = document.getElementById("myDiv");
  myDiv.style.top = randomTop + "px";
  myDiv.style.left = randomLeft + "px";
