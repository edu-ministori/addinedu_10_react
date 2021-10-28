import Props01 from './Props01'
import Props02 from './Props02'

function Condition03(){
    // 삼항 연산(연산자 : ?)
    // 조건/변수 ? 참 : 거짓

    let isLogin = false;

    return(
        isLogin ? <Props01 name="Tom" /> : <Props02 name="Andy" address="Seoul"  />
    );
}

export default Condition03;