// date: 2025-02-24
// author: Honglie Zhang

// app.js
const ApiDataManager = (() => {
  let apiData = null; // 私有变量

  async function loadApiData(apiUrl) {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('网络响应不是正常的');
      }
      apiData = await response.json(); // 保存 API 数据为私有变量
      // 发出自定义事件，表示数据加载完成
      document.dispatchEvent(new Event('dataLoaded'));
    } catch (error) {
      console.error('加载 API 数据时出错:', error);
      alert('加载数据失败，请稍后重试。'); // 提示用户
    }
  }

  function getApiData() {
    return apiData; // 提供获取 API 数据的接口
  }

  return {
    loadApiData, getApiData,
  };
})();

window.ApiDataManager = ApiDataManager; // 公开 ApiDataManager
