import Hello01 from './Hello01';
import Hello02 from './Hello02';

function Condition01(){
    let isLogin = false;

    if(isLogin){
        return (
            <Hello01 />
        );
    } else {
        return (
            <Hello02 />
        );
    }
}

export default Condition01;