let btn = document.querySelector("#submit_button");
btn.addEventListener("click",()=>{
    let laptop_value = parseInt(document.querySelector("#laptop_section").value);
    let clock_value = parseInt(document.querySelector("#clock_section").value);
    let phone_value = parseInt(document.querySelector("#phone_section").value);
    
    function total_amount(laptop_price,clock_price,phone_price){
        return laptop_price + clock_price + phone_price;
    }

    let result = document.querySelector(".result");
    result.innerHTML = "Your Total Price: " + total_amount(laptop_value,clock_value,phone_value);
})