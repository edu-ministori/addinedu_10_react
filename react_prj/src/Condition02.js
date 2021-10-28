import Hello01 from './Hello01'
import Hello02 from './Hello02'

function Condition02(){

    let isLogin = false;

    // true && 값 => 값
    // false && 값 => null 

    return(
        <>
            {isLogin && <Hello01 />}
            {!isLogin && <Hello02 />}
        </>
    );

}

export default Condition02;