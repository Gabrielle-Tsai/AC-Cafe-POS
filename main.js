// ======= default data =======
const menu = document.querySelector("#menu");
const cart = document.querySelector("#cart");
const totalAmount = document.querySelector("#total-amount");
const button = document.querySelector("#submit-button");

// 菜單資料
const productData = [
    {
        id: "product-1",
        imgUrl:
            "https://images.unsplash.com/photo-1558024920-b41e1887dc32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        name: "馬卡龍",
        price: 90
    },
    {
        id: "product-2",
        imgUrl:
            "https://images.unsplash.com/photo-1560691023-ca1f295a5173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        name: "草莓",
        price: 60
    },
    {
        id: "product-3",
        imgUrl:
            "https://images.unsplash.com/photo-1568271675068-f76a83a1e2d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        name: "奶茶",
        price: 100
    },
    {
        id: "product-4",
        imgUrl:
            "https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        name: "冰咖啡",
        price: 180
    }
];
// ======= 請從這裡開始 =======
// 1. 跑完菜單
let menuHtml = ""
productData.forEach((product) => {
    menuHtml += `
    <div class="col-3">
       <div class="card">
          <img src="${product.imgUrl}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.price}</p>
            <a href="#" class="btn btn-primary" id="${product.id}">加入購物車</a>
          </div>
        </div>
      </div>
  `
})
menu.innerHTML = menuHtml

// 2. 點擊加入購物車會增加到購物車清單
let total = 0
menu.addEventListener('click', function (e) {
    if (e.target.id.includes('product')) {
        //  參考 model answer 練習優化
        let product = null
        for (const data of productData) {
            if (data.id === e.target.id) {
                product = data
                break
            }
        }

        let price = product.price
        let name = product.name
        //     
        let itemNode = document.createElement('li')
        itemNode.classList.add('list-group-item')
        itemNode.textContent = name
        itemNode.innerText = `${name} X 1 小計：${price}`
        cart.appendChild(itemNode)

        // 3. 總金額會隨著加入到清單的內容變動
        total += Number(price)
        totalAmount.textContent = total
    }
})

// 4. 點擊送出訂單會清空購物車清單並顯示總金額
button.addEventListener('click', function (e) {
    cart.innerHTML = ''
    alert(`感謝購買\n總金額：${totalAmount.textContent}`)
    totalAmount.textContent = "--"
})