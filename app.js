// 2 masala

function add2() {
    
    function add(son1, son2) {
        let yigindi = 0;
        son1.forEach(son => {
            if (son2.includes(son) && son % 2 === 0) {
                yigindi += son;
            }
        });
        return yigindi;
    }
    let son1 = [2, 4, 12, 6, 8, 10];
    let son2 = [3, 4, 12, 6, 7, 8];
    console.log("Natija:", add(son1, son2))
}


// 1 masala


function kavlion1() {
    
    function kavlion(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
                return arr[i];
            }
        }
        console.log("unday elament yoq");
    
    }
    let array = [2, 3, 4, 2, 4,  3, 5, 6, 6];
    console.log("Natija:", kavlion(array));
}

//4 masala

function element3() {
    
    function element(a1, a2) {
        return a1.filter(el => a2.includes(el));
    }
    const array1 = [1, 2, 12 , 3, 4, 5];
    const array2 = [4, 5, 6, 7, 8, 12];
    console.log( "Natija:", element(array1, array2)); 
    
}



// 6 masala

function Ism4() {
    
    function Ism(ismlar) {
        let uzunlik = ismlar.map(ism => ism.length);
        let max = Math.max(...uzunlik);
        return ismlar.find(ism => ism.length === max);
    }
    let ismlar = ["Asad",  "Yosinbek" , "Muhammadrizo" , "Muhammadjon" , "Amirbek" , "bilolbek" , "Azizbek"];
    console.log( "eng uzun ism:",Ism(ismlar), "uzunligi:", Ism(ismlar).length);
    
}
