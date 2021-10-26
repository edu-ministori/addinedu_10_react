function Props03(){

    // 배열 데이터 선언
    const array = ['Fiat', 'Hyundai', 'Kia'];

    // 구조 분해 할당
    let [car1, car2, car3] = array;

    return(
        <>
            <ul>
                <li>{array[0]}</li>
                <li>{array[1]}</li>
                <li>{array[2]}</li>
            </ul>

            <ul>
                <li>{car1}</li>
                <li>{car2}</li>
                <li>{car3}</li>
            </ul>
        </>
    );

}

export default Props03;