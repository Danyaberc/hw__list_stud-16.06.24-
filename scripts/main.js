let elForm = document.querySelector('.main__form')
let elBtnSbm = document.querySelector('.disign')
let elListStudMsg = document.querySelector('.list_stud')



 

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

    let listStud = [];

    let checkArr = [];


    checkArr.push(listStudInput)

    for(let i = 0; i <= checkArr.length; i+=1){
        if(checkArr === ''){
            break;
        }
        listStud.push(checkArr)
        
    }    
    console.log(listStud)
    // let newArr = listStudInput.map(input =>{
    //     if(input === ''){
    //         elListStudMsg.innerHTML = 'Введіть значення в усі інпути';
    //         return
    //     }
    //     else{
    //         console.log('listStud',listStud)
    //         listStud.push(input)
    //         let newListStud = listSort(listStud)
    //         elListStudMsg.innerHTML = 'Данні введено'
    //         console.log('NewValListStud',newListStud)
    //     }
        
    // })
})

let listSort = (newList) => {
    if(newList === ''){
        return
    }
    let newValList = newList.sort()
    return newValList
    
    
    
    // console.log('NewList',newList)
}


 

    