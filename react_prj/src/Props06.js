import Props06Wrap from "./Props06Wrap";
import Hello01 from "./Hello01";
import Props04 from "./Props04";
import Fragment02 from "./Fragment02";

function Props06(){

    return(
        <>
            <Props06Wrap>
                <Hello01 />
            </Props06Wrap>

            <Props06Wrap>
                <Props04 />
            </Props06Wrap>

            <Props06Wrap>
                <Fragment02 />
            </Props06Wrap>
        </>
    );

}

export default Props06;