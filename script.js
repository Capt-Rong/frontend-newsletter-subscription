// 1. 找到表單與 email 欄位
    // 取得 form 元素
    // 取得 email 輸入欄位
    // 取得 錯誤訊息 span 元素
    // 取得 success 畫面區塊
    // 取得 card 區塊
    // 取得成功畫面中的 email 顯示區塊（.success-email）
    // 取得 dismiss button

const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const errorMessage = document.querySelector('.error-message');
const successSection = document.getElementById('success');
const card = document.querySelector('.card');
const successMail = document.getElementById('success-email');
const dismissButton = document.getElementById('dismiss-button');

//2. 當使用者提交表單時：
//   - 阻止預設送出（preventDefault）
//   - 取得 email 欄位的值
//   - 檢查 email 格式是否有效
//   - 如果無效：
//       - 顯示錯誤訊息（移除 hidden class）
//       - 加上 error 樣式（例如紅色框線）
//   - 如果有效：
//       - 隱藏原本的 card 區塊
//       - 顯示 success 畫面（移除 hidden class）
//       - 將 email 顯示在 success 區塊中
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!email || !emailRegex.test(email)) {
        errorMessage.classList.remove('hidden');
        emailInput.classList.add('error');
        return;
    } 
    card.classList.add('hidden');
    successSection.classList.remove('hidden');
    successMail.textContent = email;
        
})


//3. 當使用者點擊 dismiss 按鈕時：
//   - 隱藏 success 畫面
//   - 顯示原本的 card 區塊
//   - 清空 email 欄位
//   - 隱藏錯誤訊息（確保狀態乾淨）
dismissButton.addEventListener('click', () => {
    successSection.classList.add('hidden');
    card.classList.remove('hidden');
    emailInput.classList.remove('error');
    emailInput.value = '';
    errorMessage.classList.add('hidden');
})