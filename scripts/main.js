let elForm = document.querySelector('.main__form')
let elBtnSbm = document.querySelector('.disign')
let elMsg = document.querySelector('.list_stud')
let errDiv = document.querySelector('.errDiv')


let listStud = [];

elForm.addEventListener('submit',(ev)=>{
   ev.preventDefault();

   let value = ev.target.value;

    const formData = new FormData(ev.target);

    let listStudInput = [
        formData.get('userName'),
        formData.get('surName'),
        formData.get('lastName'),
        // formData.get('userAge'),
        formData.get('userLocation'),
    ]
    

    let checkArr = [];

    for(let i = 0 ; i < listStudInput.length;i++){
        if(listStudInput[i] === ''){
            break
        }
        checkArr.push(listStudInput[i])
    }
    console.log('checkArr', checkArr)
    if(checkArr.length !== listStudInput.length){
        errDiv.innerHTML = 'Не всі інпути введені'
        elMsg.innerHTML = ''
        return
    }
        let resSort = funSortList(checkArr)
        errDiv.innerHTML = ''
        let funcPushList = funPushList(resSort)
        
       
    console.log('checkarr',listStud)
    
})

let funSortList = (newList) =>{
    let resList = newList.sort().join(', ');
    return resList
}

let funPushList = (listSort) =>{
    listStud.push(listSort)
    elMsg.innerHTML += `${listSort} ${' '}`;
}



 

    