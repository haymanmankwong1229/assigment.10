// 初始化資料
let items = [
    {
      title: "金髮獵犬",
      type: "大型",
      features: "友善、聰明、適合家庭",
      careTips: "需要大量運動和定期梳理毛髮",
      imageUrl: "https://example.com/images/golden_retriever.jpg", // 替換為真實圖片網址
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    },
    {
      title: "英國短毛貓",
      type: "中型",
      features: "獨立、好奇、適應力強",
      careTips: "定期需要清潔耳朵，提供高品質貓糧",
      imageUrl: "https://example.com/images/british_shorthair.jpg", // 替換為真實圖片網址
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    },
    {
      title: "哈士奇",
      type: "大型",
      features: "活潑、忠誠，需要大量運動",
      careTips: "需要定期梳理和運動",
      imageUrl: "https://example.com/images/husky.jpg",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    },
    {
      title: "比熊犬",
      type: "小型",
      features: "友善、聰明、容易訓練",
      careTips: "需要定期美容",
      imageUrl: "https://example.com/images/bichon.jpg",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    },
    {
      title: "法國鬥犬",
      type: "小型",
      features: "好動、勇敢、親人",
      careTips: "需要每天散步",
      imageUrl: "https://example.com/images/french_bulldog.jpg",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    },
    // 繼續添加其他寵物項目...
    {
      title: "德國牧羊犬",
      type: "大型",
      features: "聰明、忠貞、適合守衛",
      careTips: "需要大量運動",
      imageUrl: "https://example.com/images/german_shepherd.jpg",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    },
    {
      title: "拉布拉多",
      type: "大型",
      features: "友善、聰明、適合家庭",
      careTips: "每天需要運動",
      imageUrl: "https://example.com/images/labrador.jpg",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    },
    {
      title: "波士頓犬",
      type: "小型",
      features: "活潑、親人、容易相處",
      careTips: "需要定期運動",
      imageUrl: "https://example.com/images/boston_terrier.jpg",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    },
    {
      title: "邊境牧羊犬",
      type: "中型",
      features: "聰明、運動量大、適合工作",
      careTips: "需要大量運動和智力遊戲",
      imageUrl: "https://example.com/images/border_collie.jpg",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    },
    {
      title: "拉薩犬",
      type: "小型",
      features: "獨立、保護意識強",
      careTips: "需要定期美容",
      imageUrl: "https://example.com/images/lhasa_apso.jpg",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    },
    // 添加其他呢...
];


// 更新清單顯示
function updateList(searchTerm = '', categoryFilter = '') {
  const list = document.querySelector('ion-list'); // 獲取 ion-list 元素
  list.innerHTML = ''; // 清空現有清單

  // 根據搜尋條件過濾資料
  const filteredItems = items.filter(item => {
    const matchesSearchTerm = searchTerm ? 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.features.toLowerCase().includes(searchTerm.toLowerCase()) 
      : true;

    const matchesCategory = categoryFilter ? 
      item.type.toLowerCase() === categoryFilter.toLowerCase() 
      : true;

    return matchesSearchTerm && matchesCategory;
  });

  // 如果沒有匹配項目，顯示提示
  if (filteredItems.length === 0) {
    list.innerHTML = '<ion-item>No results found.</ion-item>';
    return;
  }

  // 遍歷過濾後的項目並生成 HTML
  filteredItems.forEach(item => {
    const listItem = `
      <ion-item>
        <ion-thumbnail slot="start">
          <img src="${item.imageUrl}" alt="${item.title}" />
        </ion-thumbnail>
        <ion-label>
          <h2>${item.title}</h2>
          <h3>${item.type}</h3>
          <p>${item.features}</p>
          <p>${item.careTips}</p>
        </ion-label>
        <ion-button onclick="window.open('${item.videoUrl}', '_blank')">觀看影片</ion-button>
      </ion-item>`;
  
    list.innerHTML += listItem; // 添加清單項目
  });
}