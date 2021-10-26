function Props04(){
    const person = {
        firstName : 'John',
        lastName : 'Doe',
        email : 'johndoe@email.com'
    }

    // 구조 분해 할당
    let {firstName, lastName, email} = person;

    return(
        <>
            <ul>
                <li>{person.firstName} {person.lastName}</li>
                <li>{person.email}</li>
            </ul>

            <ul>
                <li>{firstName} {lastName}</li>
                <li>{email}</li>
            </ul>
        </>
    );
}

export default Props04;